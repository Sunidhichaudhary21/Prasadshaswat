"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaSave, FaEye } from "react-icons/fa";

export default function EditBlogPost({ params }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Development",
    status: "draft",
    image: "",
  });

  const categories = [
    "Development",
    "Design",
    "SEO",
    "Trends",
    "Performance",
    "UX/UI",
  ];

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
      // In production, fetch post data from database using params.id
      loadPost(params.id);
    } else {
      router.push("/admin/login");
    }
  }, [router, params.id]);

  const loadPost = (id) => {
    // Sample data - in production, fetch from database
    const samplePost = {
      title: "10 Essential Web Development Trends in 2024",
      slug: "web-development-trends-2024",
      excerpt:
        "Discover the latest web development trends that are shaping the industry in 2024.",
      content:
        "<h2>The Future of Web Development is Here</h2><p>Content here...</p>",
      category: "Trends",
      status: "published",
      image: "/api/placeholder/800/400",
    };
    setPost(samplePost);
  };

  const handleSave = (status = "draft") => {
    const updatedPost = {
      ...post,
      status,
      id: params.id,
    };

    // In production, update in database
    console.log("Updating post:", updatedPost);
    alert(
      `Post ${
        status === "draft" ? "saved as draft" : "published"
      } successfully!`
    );
    router.push("/admin/dashboard");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link
                href="/admin/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaArrowLeft />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">
                Edit Blog Post
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleSave("draft")}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2"
              >
                <FaSave /> Save Draft
              </button>
              <button
                onClick={() => handleSave("published")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2"
              >
                <FaEye /> Publish
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          {/* ...existing form code from NewBlogPost component... */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content (HTML supported)
              </label>
              <textarea
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                rows="20"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
