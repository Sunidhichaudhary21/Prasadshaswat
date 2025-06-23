"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaCalendar, FaUser, FaArrowRight, FaSearch } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const categories = [
  "All",
  "Trends",
  "SEO",
  "Development",
  "Design",
  "Performance",
  "UX/UI",
];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [blogPosts, selectedCategory, searchTerm]);

  const loadBlogPosts = async () => {
    try {
      const response = await fetch("/api/blogs?status=published");
      const data = await response.json();

      if (data.success) {
        setBlogPosts(data.data);
      } else {
        console.error("Error loading blog posts:", data.error);
      }
    } catch (error) {
      console.error("Error loading blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = blogPosts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-orange-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Web Development Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Insights, tutorials, and tips to help you build better websites and
            grow your online presence
          </p>
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full text-gray-900 pl-12 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-600 text-white border-orange-600"
                    : "border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {filteredPosts.length === 0 ? (
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">
                {blogPosts.length === 0
                  ? "No blog posts yet"
                  : "No posts found"}
              </h2>
              <p className="text-gray-400 mb-8">
                {blogPosts.length === 0
                  ? "We're working on creating amazing content for you. Check back soon!"
                  : "Try adjusting your search or filter criteria."}
              </p>
              {searchTerm || selectedCategory !== "All" ? (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
                >
                  Clear Filters
                </button>
              ) : null}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <section className="py-16 bg-slate-800">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">
                  Featured Article
                </h2>
                <div className="max-w-4xl mx-auto bg-slate-700 rounded-2xl shadow-xl overflow-hidden border border-slate-600">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      {filteredPosts[0].image && (
                        <img
                          src={filteredPosts[0].image}
                          alt={filteredPosts[0].title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                          {filteredPosts[0].category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {filteredPosts[0].readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {filteredPosts[0].title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {filteredPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                            <FaUser className="text-indigo-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {filteredPosts[0].author}
                            </p>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <FaCalendar className="w-3 h-3" />
                              {new Date(
                                filteredPosts[0].createdAt
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${filteredPosts[0].slug}`}
                          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                          Read More <FaArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Blog Grid */}
          <section className="py-16 bg-slate-900">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">
                {filteredPosts.length > 1 ? "More Articles" : "Latest Articles"}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <article
                    key={post._id}
                    className="bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-600"
                  >
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {post.readTime || "5 min read"}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                            <FaUser className="text-indigo-600 w-3 h-3" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Prasad Shaswat
                            </p>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <FaCalendar className="w-2 h-2" />
                              {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1"
                        >
                          Read More <FaArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest web development tips and tutorials delivered to your
            inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
