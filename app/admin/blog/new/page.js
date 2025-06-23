"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaSave, FaEye } from "react-icons/fa";

export default function NewBlogPost() {
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
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (title) => {
    setPost({
      ...post,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSave = async (status = "draft") => {
    if (!post.title.trim()) {
      alert("Please enter a title");
      return;
    }

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...post, status }),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          `Post ${
            status === "draft" ? "saved as draft" : "published"
          } successfully!`
        );
        router.push("/admin/dashboard");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Error saving post");
    }
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
                Create New Blog Post
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
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={post.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter blog post title..."
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug (URL)
              </label>
              <input
                type="text"
                value={post.slug}
                onChange={(e) => setPost({ ...post, slug: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="url-friendly-slug"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={post.category}
                onChange={(e) => setPost({ ...post, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt (Meta Description)
              </label>
              <textarea
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Brief description for SEO and blog listing..."
              />
            </div>

            {/* Featured Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                value={post.image}
                onChange={(e) => setPost({ ...post, image: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content (HTML supported)
              </label>
              <textarea
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                rows="20"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
                placeholder="Write your blog post content here... HTML tags are supported."
              />
            </div>

            {/* Preview */}
            {post.content && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preview
                </label>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 overflow-y-auto">
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
