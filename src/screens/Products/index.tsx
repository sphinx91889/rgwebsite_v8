import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";

export const Products = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  const products = [
    {
      name: "Nexus CRM",
      headline: "Connect, Engage, and Grow with Nexus CRM",
      description:
        "A powerful all-in-one customer relationship management platform designed to help businesses streamline processes, improve customer retention, and drive sales growth.",
      features: [
        "Centralized Customer Data Management",
        "Sales & Marketing Automation",
        "Customer Service Tools",
        "Advanced Analytics & Reporting",
      ],
      image:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681ceb898c83422a29b1d113.png",
      bgColor: "bg-blue-50",
      ctaLink: "https://shop.rivieregroup.org/nexus599364",
    },
    {
      name: "Revuyou.com",
      headline: "Turn Every Customer into Your Best Advocate",
      description:
        "Our smart review management system helps businesses improve their online reputation by directing satisfied customers to leave public reviews while channeling negative feedback privately.",
      features: [
        "Smart Review Filtering",
        "Reputation Building",
        "Private Feedback Channel",
        "Multi-Platform Integration",
      ],
      image:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681ce8653d8df880f9062ba0.jpeg",
      bgColor: "bg-purple-50",
      ctaLink: "https://revuyou.com",
    },
    {
      name: "BanVibeCoders",
      headline: "Code Your World. Unleash Your Vibe.",
      description:
        "A revolutionary platform for creative developers, designers, and coders who build with soul—not by the book. Join our community of overlooked creatives and design-first dreamers.",
      features: [
        "Community & Resource Hub",
        "1-on-1 Mentorship",
        "Free Tools & Code Snippets",
        "Educational Content",
      ],
      image:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/680266c6235a270efe3ad644.png",
      bgColor: "bg-yellow-50",
      ctaLink: "https://banvibecoders.com",
    },
    {
      name: "Splittuh",
      headline: "Music Collaboration, Simplified and Secured",
      description:
        "Create professional split sheets for your music collaborations. Track ownership, manage rights, and get signatures - all in one secure platform designed for modern creators.",
      features: [
        "Professional Split Sheets",
        "Digital Signatures",
        "Rights Management",
        "Ownership Tracking",
      ],
      image:
        "https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67ef0b0a585902a0af80fc97.png",
      bgColor: "bg-green-50",
      ctaLink: "https://splittuh.com",
    },
  ];

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

      {/* Hero Section */}
      <section className="pt-[235px] pb-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 leading-tight font-['Montserrat']">
            Meet Our Family of Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Innovative platforms designed to help businesses and creators thrive
            in the digital age. From customer management to creative
            collaboration, we've got you covered.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${product.bgColor}`}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 h-[200px] lg:h-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full ${
                        product.name === "BanVibeCoders"
                          ? "object-contain mt-[26px]"
                          : "object-cover"
                      }`}
                    />
                  </div>
                  <div className="p-8 lg:w-2/3">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2 font-['Montserrat']">
                      {product.name}
                    </h2>
                    <h3 className="text-xl text-[#188bf6] mb-4 font-['Poppins']">
                      {product.headline}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 font-['Poppins']">
                      {product.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-[#188bf6] rounded-full" />
                          <span className="text-gray-600 font-['Poppins']">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="bg-[#188bf6] text-white rounded-xl px-8 py-4 font-['Poppins'] font-semibold text-lg"
                      onClick={() =>
                        window.open(
                          product.name === "Nexus CRM"
                            ? "https://shop.rivieregroup.org/nexus599364"
                            : product.ctaLink,
                          "_blank"
                        )
                      }
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Montserrat']">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-['Poppins']">
            Let's discuss how our solutions can help you achieve your goals
          </p>
          <Button
            className="bg-[#188bf6] text-white rounded-xl px-8 py-4 font-['Poppins'] font-semibold text-lg"
            onClick={() =>
              window.open(
                "https://api.leadconnectorhq.com/widget/booking/T5JkOudaD7ASIlxFCl9j",
                "_blank"
              )
            }
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <SectionComponentNodeByAnima />
    </div>
  );
};
