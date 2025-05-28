import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";

export const Contact = (): JSX.Element => {
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
      </button>
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
      <div className="pt-[235px] pb-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center gap-16">
            {/* Hero Section */}
            <div className="text-center max-w-[800px]">
              <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl lg:text-[64px] leading-tight mb-8">
                Contact Us
              </h1>
              <p className="font-['Poppins'] text-xl md:text-2xl text-[#2f2f2f] leading-relaxed">
                Let's discuss how we can help your business grow. Fill out the
                form below and we'll get back to you shortly.
              </p>
            </div>

            {/* Contact Form */}
            <div className="w-full max-w-[800px] h-[802px] bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/q08x9tWjM2ldiCgMBpyQ"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "16px",
                }}
                id="inline-q08x9tWjM2ldiCgMBpyQ"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Contact Form"
                data-height="802"
                data-layout-iframe-id="inline-q08x9tWjM2ldiCgMBpyQ"
                data-form-id="q08x9tWjM2ldiCgMBpyQ"
                title="Website Contact Form"
              />
              <script
                src="https://link.msgsndr.com/js/form_embed.js"
                async
              ></script>
            </div>

            {/* Alternative Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[800px]">
              <div className="bg-blue-50 p-8 rounded-2xl text-center">
                <h3 className="text-xl font-bold mb-4">Call Us</h3>
                <a
                  href="tel:1-866-814-2287"
                  className="text-[#188bf6] text-lg hover:underline"
                >
                  1-866-814-2287
                </a>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl text-center">
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <a
                  href="mailto:info@rivieregroup.org"
                  className="text-[#188bf6] text-lg hover:underline"
                >
                  info@rivieregroup.org
                </a>
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
