import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export const Blog = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
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
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://t1e.afa.myftpupload.com/wp-json/wp/v2/posts?categories=8&_embed"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
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
      <div className="pt-[235px] pb-24 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-12 text-center font-['Montserrat']">
            Blog
          </h1>

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
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <CardContent className="p-0 h-full flex flex-col">
                    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                      <div className="h-48 lg:h-56 overflow-hidden">
                        <img
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4 lg:p-6 flex-1 flex flex-col">
                      <h2
                        className="text-lg lg:text-xl font-bold mb-2 font-['Montserrat'] line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <p className="text-gray-500 text-sm mb-4 font-['Poppins']">
                        {formatDate(post.date)}
                      </p>
                      <div
                        className="text-gray-600 font-['Poppins'] line-clamp-3 flex-1"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                      <Button
                        className="mt-4 bg-[#188bf6] w-fit"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/blog/${post.slug}`);
                        }}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <SectionComponentNodeByAnima />
    </div>
  );
};