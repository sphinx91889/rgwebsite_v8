import React from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="bg-[#f9f9f9] py-16 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo & Description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-[#188bf6] rounded-full flex items-center justify-center">
                <div className="relative w-6 h-7">
                  <img src="/r.svg" alt="R" className="absolute w-6 h-[27px]" />
                  <div className="absolute w-0.5 h-[25px] top-0 left-1.5 bg-[#188bf6]" />
                </div>
              </div>
              <img
                src="/riviere-group.svg"
                alt="Riviere Group"
                className="ml-5 h-6"
              />
            </div>
            <p className="text-gray-600 font-['Poppins']">
              Riviere Group is a full-service media production and marketing
              agency specializing in cutting-edge digital solutions for brands
              and creatives.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/rivieregroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Facebook className="w-6 h-6 text-[#188bf6]" />
              </a>
              <a
                href="https://www.instagram.com/rivieregroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Instagram className="w-6 h-6 text-[#188bf6]" />
              </a>
              <a
                href="https://www.linkedin.com/company/rivieregroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Linkedin className="w-6 h-6 text-[#188bf6]" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-['Montserrat']">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-gray-600 hover:text-[#188bf6] transition-colors text-left font-['Poppins']"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-gray-600 hover:text-[#188bf6] transition-colors text-left font-['Poppins']"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-['Montserrat']">
              Services
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Web Design & Development",
                "Digital Marketing",
                "Graphic Design",
                "Music Production",
                "Audio Engineering",
              ].map((svc) => (
                <li key={svc}>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-gray-600 hover:text-[#188bf6] transition-colors text-left font-['Poppins']"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Logins */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-['Montserrat']">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-2">
                <span className="text-[#188bf6] font-bold">Email:</span>
                <a
                  href="mailto:info@therivieregroup.org"
                  className="text-gray-600 hover:text-[#188bf6] transition-colors font-['Poppins']"
                >
                  info@therivieregroup.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#188bf6] font-bold">Phone:</span>
                <a
                  href="tel:1-866-814-2287"
                  className="text-gray-600 hover:text-[#188bf6] transition-colors font-['Poppins']"
                >
                  1-866-814-2287
                </a>
              </li>
            </ul>

            {/* Login Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <Button
                variant="outline"
                className="w-full border-[#188bf6] text-[#188bf6] hover:bg-[#188bf6] hover:text-white transition-colors"
                onClick={() =>
                  window.open("https://app.rivieregroup.org", "_blank")
                }
              >
                Nexus Login
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#188bf6] text-[#188bf6] hover:bg-[#188bf6] hover:text-white transition-colors"
                onClick={() =>
                  window.open("https://rgemployeehub.netlify.app", "_blank")
                }
              >
                Employee Portal
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col items-center">
          <p className="text-gray-600 text-center font-['Poppins'] mb-4">
            © 2025 Riviere Group. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
              alt="US Flag"
              className="w-6 h-4"
            />
            <p className="text-gray-600 font-['Poppins'] font-semibold">
              US Veteran Owned Business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
