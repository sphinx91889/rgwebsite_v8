import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";
import { Menu, X, MailIcon, PhoneIcon } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";

export const Services = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  const services = [
    {
      category: "Web & App Development",
      description:
        "Custom websites built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Custom Web, Mobile & Web Apps",
        "Custom Functionality",
      ],
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bgColor: "bg-blue-50",
    },
    {
      category: "Graphic Design",
      description:
        "Professional design services to enhance your brand's visual identity and marketing materials.",
      features: [
        "Logos & Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
      ],
      image:
        "https://images.pexels.com/photos/196647/pexels-photo-196647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bgColor: "bg-purple-50",
    },
    {
      category: "Digital Marketing",
      description:
        "Strategic marketing solutions to grow your online presence and reach your target audience.",
      features: [
        "Social Media Marketing",
        "Email Campaigns",
        "Content Strategy",
        "PPC Ad Copy & Visuals",
      ],
      image:
        "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bgColor: "bg-green-50",
    },
    {
      category: "AI Integration",
      description:
        "Leverage the power of AI to automate processes and enhance customer experiences.",
      features: ["Chatbots", "Automation", "Data Analysis", "Personalization"],
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bgColor: "bg-yellow-50",
    },
    {
      category: "SEO Services",
      description:
        "Improve your search engine rankings and drive organic traffic to your website.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
      ],
      image:
        "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bgColor: "bg-red-50",
    },
    {
      category: "Audio Production",
      description:
        "Professional audio services for music, podcasts, and other audio content.",
      features: [
        "Music Production",
        "Audio Engineering",
        "Mastering",
        "Sound Design",
      ],
      image:
        "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bgColor: "bg-indigo-50",
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
                  onClick={() => {
                    navigate("/nexus");
                    setIsMenuOpen(false);
                  }}
                  className="font-['Poppins'] font-bold text-lg leading-[26px] cursor-pointer"
                  style={{
                    animation: "goldGlow 2s ease-in-out infinite",
                    fontWeight: "bold",
                  }}
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
      `}</style>

      {/* Hero Section */}
      <section className="pt-[235px] pb-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 leading-tight font-['Montserrat']">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Comprehensive digital solutions to help your business thrive in the
            modern age
          </p>
        </div>
      </section>

      {/* AI Employee Banner */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 mb-12">
        <div className="max-w-[1280px] mx-auto">
          <a 
            href="https://jovial-hotteok-57aa5a.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6828ee6bd08385af64162c17.png" 
                  alt="AI Employee" 
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-blue-900 font-['Montserrat']">
                  Meet Your AI Employee:
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-700 font-['Montserrat']">
                  The Future of Business Automation
                </h3>
                <p className="text-lg text-gray-700 font-['Poppins']">
                  Save time, increase efficiency, and boost customer engagement
                  with our AI-powered solutions
                </p>
                <div className="mt-6">
                  <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${service.bgColor}`}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 h-[200px] lg:h-auto">
                    <img
                      src={service.image}
                      alt={service.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:w-2/3">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-['Montserrat']">
                      {service.category}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 font-['Poppins']">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-['Poppins']">
            Let's discuss how we can help your business grow
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
