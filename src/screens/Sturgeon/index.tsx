import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";

export const Sturgeon = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
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

      {/* Main Content */}
      <div className="pt-[235px] pb-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Profile Image Section */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d4e9583c67752f55e38a.png"
                  alt="Matthew Sturgeon"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Bio Section */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Montserrat']">
                Matthew Sturgeon
              </h1>
              <h2 className="text-2xl text-[#188bf6] mb-4 font-['Poppins']">
                Chief Sales Officer (CSO)
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Matthew Sturgeon serves as the Chief Sales Officer at Riviere Group, where he leads the company's business development initiatives and oversees the global sales strategy. With a proven track record in building and scaling high-performance sales teams, Matthew has been instrumental in driving Riviere Group's rapid growth and market expansion.
                </p>

                <h3 className="text-xl font-bold mb-4">Role & Responsibilities</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Develops and executes comprehensive sales strategies aligned with company objectives</li>
                  <li>Leads and mentors the sales team to achieve ambitious growth targets</li>
                  <li>Establishes and maintains key client relationships across various industries</li>
                  <li>Oversees the optimization of sales processes and implementation of sales technologies</li>
                  <li>Collaborates with marketing to ensure aligned go-to-market strategies</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Expertise</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Strategic Sales Leadership</li>
                  <li>Team Building & Development</li>
                  <li>Business Development</li>
                  <li>Client Relationship Management</li>
                  <li>Sales Process Optimization</li>
                  <li>Market Analysis & Strategy</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Vision Statement</h3>
                  <p className="text-lg text-gray-700 italic">
                    "Our goal is to not just meet client expectations, but to exceed them by delivering innovative solutions that drive real business value. We believe in building lasting partnerships based on trust, transparency, and measurable results."
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#188bf6] text-white px-8 py-4"
                    onClick={() => navigate("/contact")}
                  >
                    Connect with Matthew
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#188bf6] text-[#188bf6] px-8 py-4"
                    onClick={() => window.open("https://www.linkedin.com/in/matthew-sturgeon-cso", "_blank")}
                  >
                    View LinkedIn Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <SectionComponentNodeByAnima />
    </div>
  );
};