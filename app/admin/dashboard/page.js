"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaSignOutAlt,
  FaCalendar,
  FaFileAlt,
} from "react-icons/fa";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalViews: 0,
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
      loadData();
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  const loadData = async () => {
    try {
      // Load blog posts
      const blogsResponse = await fetch("/api/blogs");
      const blogsData = await blogsResponse.json();

      if (blogsData.success) {
        setBlogPosts(blogsData.data);
      }

      // Load statistics
      const statsResponse = await fetch("/api/blogs/stats");
      const statsData = await statsResponse.json();

      if (statsData.success) {
        setStats({
          totalPosts: statsData.data.overview.totalPosts,
          publishedPosts: statsData.data.overview.publishedPosts,
          draftPosts: statsData.data.overview.draftPosts,
          totalViews: statsData.data.overview.totalViews,
        });
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        const response = await fetch(`/api/blogs/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setBlogPosts(blogPosts.filter((post) => post._id !== id));
          // Reload stats
          loadData();
        } else {
          alert("Error deleting post");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("Error deleting post");
      }
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "published" ? "draft" : "published";
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        const updatedPosts = blogPosts.map((post) =>
          post._id === id ? { ...post, status: newStatus } : post
        );
        setBlogPosts(updatedPosts);
        // Reload stats
        loadData();
      } else {
        alert("Error updating status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error updating status");
    }
  };

  if (!isAuthenticated || loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 shadow-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-orange-500">
              Blog Admin Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href="/blog"
                target="_blank"
                className="text-orange-500 hover:text-orange-400 flex items-center gap-2"
              >
                <FaEye /> View Blog
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-400 flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg shadow p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Posts</p>
                <p className="text-3xl font-bold text-white">
                  {stats.totalPosts}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-900 rounded-lg flex items-center justify-center">
                <FaFileAlt className="text-orange-500 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-3xl font-bold text-green-600">
                  {stats.publishedPosts}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FaEye className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Drafts</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {stats.draftPosts}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FaEdit className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-3xl font-bold text-blue-600">
                  {stats.totalViews}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaEye className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Management */}
        <div className="bg-slate-800 rounded-lg shadow border border-slate-700">
          <div className="p-6 border-b border-slate-700">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Blog Posts</h2>
              <Link
                href="/admin/blog/new"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center gap-2"
              >
                <FaPlus /> New Post
              </Link>
            </div>
          </div>

          {blogPosts.length === 0 ? (
            <div className="p-12 text-center">
              <FaFileAlt className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No blog posts yet
              </h3>
              <p className="text-gray-600 mb-6">
                Get started by creating your first blog post.
              </p>
              <Link
                href="/admin/blog/new"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 inline-flex items-center gap-2"
              >
                <FaPlus /> Create Your First Post
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogPosts.map((post) => (
                    <tr key={post._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {post.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {post.excerpt}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleStatus(post._id, post.status)}
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full cursor-pointer hover:opacity-75 ${
                            post.status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {post.status}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div className="flex items-center gap-1">
                          <FaCalendar className="w-3 h-3 text-gray-400" />
                          {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {(post.views || 0).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        <div className="flex items-center gap-3">
                          {post.status === "published" && (
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className="text-blue-600 hover:text-blue-900"
                              title="View Post"
                            >
                              <FaEye />
                            </Link>
                          )}
                          <Link
                            href={`/admin/blog/edit/${post._id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                            title="Edit Post"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(post._id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete Post"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
