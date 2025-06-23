import { Metadata } from "next";
import Link from "next/link";
import {
  FaCalendar,
  FaUser,
  FaArrowLeft,
  FaClock,
  FaShare,
} from "react-icons/fa";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export async function generateMetadata({ params }) {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/blogs/slug/${
        params.slug
      }`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return {
        title: "Blog Post Not Found | PS Web Services",
        description: "The requested blog post could not be found.",
      };
    }

    const data = await response.json();
    const post = data.data;

    return {
      title: `${post.title} | PS Web Services Blog`,
      description: post.excerpt,
      keywords: `${post.category.toLowerCase()}, web development, ${post.title.toLowerCase()}`,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.createdAt,
        authors: [post.author],
      },
    };
  } catch (error) {
    return {
      title: "Blog Post Not Found | PS Web Services",
      description: "The requested blog post could not be found.",
    };
  }
}

async function getBlogPost(slug) {
  try {
    const response = await fetch(
      `${
        process.env.NEXTAUTH_URL || "http://localhost:3000"
      }/api/blogs/slug/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Back to Blog */}
      <div className="container mx-auto px-6 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
        >
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <FaClock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FaUser className="text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <FaCalendar className="w-3 h-3" />
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <FaShare /> Share
              </button>
            </div>

            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
              />
            )}
          </div>
        </div>
      </article>

      {/* Article Content */}
      <section className="bg-white">
        <div className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FaUser className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.author}
                  </h3>
                  <p className="text-gray-600">
                    Founder & Web Developer at PS Web Services. Passionate about
                    creating modern, user-friendly websites and sharing
                    knowledge with the development community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
