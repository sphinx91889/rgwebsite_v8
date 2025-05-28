import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface ComingSoonProps {
  title: string;
}

export const ComingSoon = ({ title }: ComingSoonProps): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-5">
        {/* Mobile menu button */}
        <button
          className="xl2:hidden fixed bottom-4 right-4 z-50 bg-white rounded-full p-3 shadow-lg border border-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
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
                    <img
                      className="absolute w-6 h-[27px]"
                      alt="R"
                      src="/r.svg"
                    />
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

        <div className="flex flex-col items-center justify-center text-center gap-8 mt-[200px]">
          <h1 className="font-['Montserrat'] font-bold text-black text-[64px] leading-[72px]">
            {title}
          </h1>
          <div className="w-24 h-1 bg-[#188bf6]"></div>
          <p className="font-['Poppins'] text-[#2f2f2f] text-xl max-w-[600px]">
            We're working on something amazing for this page. Check back soon to
            see our progress!
          </p>
          <div className="mt-8">
            <Button
              className="bg-[#188bf6] text-white rounded-xl px-8 py-4 font-['Poppins'] font-semibold text-lg"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
