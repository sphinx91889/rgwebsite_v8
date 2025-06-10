import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Menu, X, User, Calendar, Tag } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";
import parse from 'html-react-parser';

interface BlogPost {
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  id: number;
  excerpt?: { rendered: string };
  categories?: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export const BlogPost = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://t1e.afa.myftpupload.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        if (data.length > 0) {
          setPost(data[0]);
          // Fetch related posts by category
          const postId = data[0].id;
          const categories = data[0].categories;
          if (categories && categories.length > 0) {
            const catId = categories[0];
            const relatedRes = await fetch(
              `https://t1e.afa.myftpupload.com/wp-json/wp/v2/posts?categories=${catId}&exclude=${postId}&per_page=2&_embed`
            );
            if (relatedRes.ok) {
              const relatedData = await relatedRes.json();
              setRelatedPosts(relatedData);
            }
          }
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile menu button */}
      <button
        className="xl2:hidden fixed bottom-4 right-4 z-50 bg-white rounded-full p-3 shadow-lg border border-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white z-40 xl2:hidden shadow-lg border-t border-gray-100">
          <div className="flex flex-col items-center py-8 gap-4">
            <a
              href="tel:1-866-814-2287"
              className="font-['Poppins'] font-normal text-black text-xl leading-[26px] cursor-pointer hover:text-[#188bf6] transition-colors"
            >
              Call Us: 1-866-814-2287
            </a>
            {menuItems.map((item, index) => (
              <a
                key={`mobile-menu-${index}`}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className="font-['Poppins'] font-normal text-black text-xl leading-[26px] cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <a
              onClick={() => {
                navigate("/nexus");
                setIsMenuOpen(false);
              }}
              className="font-['Poppins'] font-bold text-xl leading-[26px] cursor-pointer gold-glow"
            >
              Nexus
            </a>
            <Button
              className="bg-[#188bf6] text-white rounded-xl px-[26px] py-2.5 font-['Poppins'] font-semibold text-lg mt-4"
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
            >
              Contact
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full z-50">
        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-md py-11">
          <div className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-[60px] h-[60px] bg-[#188bf6] rounded-full flex items-center justify-center">
                <div className="relative w-6 h-7">
                  <img className="absolute w-6 h-[27px]" alt="R" src="/r.svg" />
                  <div className="absolute w-0.5 h-[25px] top-0 left-1.5 bg-[#188bf6]" />
                </div>
              </div>
              <img
                className="ml-5 h-6"
                alt="Riviere group"
                src="/riviere-group.svg"
              />
            </div>

            {/* Desktop menu */}
            <div className="hidden xl2:flex items-center gap-8">
              <nav className="hidden xl2:flex items-center gap-8">
                {menuItems.map((item, index) => (
                  <a
                    key={`menu-${index}`}
                    onClick={() => navigate(item.path)}
                    className="font-['Poppins'] font-normal text-black text-lg leading-[26px] cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  onClick={() => navigate("/nexus")}
                  className="font-['Poppins'] font-bold text-lg leading-[26px] cursor-pointer gold-glow"
                >
                  Nexus
                </a>
              </nav>

              <div className="flex flex-col items-end gap-2">
                <Button
                  className="bg-[#188bf6] text-white rounded-xl px-[26px] py-2.5 font-['Poppins'] font-semibold text-lg"
                  onClick={() => navigate("/contact")}
                  style={{
                    height: "auto",
                    padding: "10px 26px",
                    lineHeight: "1",
                  }}
                >
                  Contact
                </Button>
                <a
                  href="tel:1-866-814-2287"
                  className="font-['Poppins'] font-normal text-black text-sm leading-[26px] cursor-pointer hover:text-[#188bf6] transition-colors"
                >
                  Call Us: 1-866-814-2287
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes goldGlow {
          0%,
          100% {
            color: #ffd700;
            text-shadow: 0 0 10px #ffd700;
          }
          50% {
            color: #ffb700;
            text-shadow: 0 0 20px #ffb700;
          }
        }

        .gold-glow {
          animation: goldGlow 2s ease-in-out infinite;
          font-weight: bold;
        }
      `}</style>

      {/* Main Content */}
      <div className="pt-[235px] pb-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          {isLoading && (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#188bf6]"></div>
            </div>
          )}

          {error && (
            <div className="text-center text-red-600 py-8">
              <p className="text-xl">Error: {error}</p>
              <Button
                className="mt-4 bg-[#188bf6]"
                onClick={() => navigate("/blog")}
              >
                Back to Blog
              </Button>
            </div>
          )}

          {post && (
            <article className="w-full bg-white rounded-none shadow-none overflow-visible">
              {/* Hero Section */}
              {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <div className="w-full h-56 sm:h-80 md:h-[420px] lg:h-[520px] overflow-hidden">
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 pt-8 pb-4">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" /> {formatDate(post.date)}
                  </span>
                  {/* Placeholder author */}
                  <span className="inline-flex items-center gap-2 text-gray-500 text-sm">
                    <User className="w-4 h-4" /> Mevin Riviere
                  </span>
                  {/* Placeholder tags */}
                  <span className="inline-flex items-center gap-2 text-gray-500 text-sm">
                    <Tag className="w-4 h-4" /> Blog
                  </span>
                </div>
              <h1
                  className="text-4xl md:text-5xl font-bold mb-6 font-['Montserrat'] leading-tight"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              </div>
              {/* Content */}
              <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 pb-8">
                <div className="prose prose-lg max-w-none font-['Poppins'] text-gray-800">
                {parse(post.content.rendered)}
                </div>
              </div>
              {/* Author Card */}
              <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 pb-8">
                <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4 mt-8">
                  <img
                    src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6841ba57628b7f45fe01c943.jpeg"
                    alt="Author"
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                  />
                  <div>
                    <div className="font-semibold text-lg">Mevin Riviere</div>
                    <div className="text-gray-500 text-sm">Founder & Blogger</div>
                  </div>
                </div>
              </div>
              {/* Related Posts Section */}
              <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 pb-12">
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-[#188bf6]" /> Related Posts
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.length === 0 && (
                      <div className="text-gray-500 italic">No related posts found.</div>
                    )}
                    {relatedPosts.map((rel) => (
                      <div key={rel.id} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border hover:shadow-lg transition">
                        {rel._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                          <img
                            src={rel._embedded["wp:featuredmedia"][0].source_url}
                            alt={rel.title.rendered}
                            className="w-full h-40 object-cover rounded mb-2"
                          />
                        )}
                        <div className="font-semibold text-lg" dangerouslySetInnerHTML={{ __html: rel.title.rendered }} />
                        {rel.excerpt && (
                          <div className="text-gray-500 text-sm" dangerouslySetInnerHTML={{ __html: rel.excerpt.rendered }} />
                        )}
                        <button className="mt-2 text-[#188bf6] font-semibold text-sm text-left" onClick={() => navigate(`/blog/${rel.id}`)}>
                          Read More →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* Footer */}
      <SectionComponentNodeByAnima />
    </div>
  );
};