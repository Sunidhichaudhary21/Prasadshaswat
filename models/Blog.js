import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      maxlength: [200, "Title cannot be more than 200 characters"],
    },
    slug: {
      type: String,
      required: [true, "Please provide a slug"],
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, "Please provide an excerpt"],
      maxlength: [500, "Excerpt cannot be more than 500 characters"],
    },
    content: {
      type: String,
      required: [true, "Please provide content"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
      enum: ["Development", "Design", "SEO", "Trends", "Performance", "UX/UI"],
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    image: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "Prasad Shaswat",
    },
    views: {
      type: Number,
      default: 0,
    },
    readTime: {
      type: String,
      default: "5 min read",
    },
    seoTitle: String,
    seoDescription: String,
    tags: [String],
  },
  {
    timestamps: true,
  }
);

// Create indexes
BlogSchema.index({ slug: 1 });
BlogSchema.index({ status: 1, createdAt: -1 });
BlogSchema.index({ category: 1 });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
