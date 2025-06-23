import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();

    const stats = await Blog.aggregate([
      {
        $group: {
          _id: null,
          totalPosts: { $sum: 1 },
          publishedPosts: {
            $sum: { $cond: [{ $eq: ["$status", "published"] }, 1, 0] },
          },
          draftPosts: {
            $sum: { $cond: [{ $eq: ["$status", "draft"] }, 1, 0] },
          },
          totalViews: { $sum: "$views" },
        },
      },
    ]);

    const categoryStats = await Blog.aggregate([
      { $match: { status: "published" } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    const recentPosts = await Blog.find({ status: "published" })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title views createdAt")
      .lean();

    const result = {
      overview: stats[0] || {
        totalPosts: 0,
        publishedPosts: 0,
        draftPosts: 0,
        totalViews: 0,
      },
      categoryStats,
      recentPosts,
    };

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
