import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Menu, X } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";
import parse from 'html-react-parser';

interface BlogPost {
  title: { rendered: string };
  content: { rendered: string };
  date: string;
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
          <article className="max-w-4xl mx-auto">
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

            {post && (
              <>
              <Button
                className="mb-8 bg-[#188bf6]"
                onClick={() => navigate("/blog")}
              >
                ← Back to Blog
              </Button>

              {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  className="w-full h-[400px] object-cover rounded-xl mb-8"
                />
              )}

              <h1
                className="text-4xl md:text-5xl font-bold mb-4 font-['Montserrat']"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <p className="text-gray-500 mb-8 font-['Poppins']">
                {formatDate(post.date)}
              </p>

              <div className="blog-content-styles">
                {parse(post.content.rendered)}
              </div>

              <Button
                className="mt-8 bg-[#188bf6]"
                onClick={() => navigate("/blog")}
              >
                ← Back to Blog
              </Button>
              </>
            )}
          </article>
          )}
        </div>
      </div>

      {/* Footer */}
      <SectionComponentNodeByAnima />
    </div>
  );
};