import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";

export const Portfolio = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  const portfolioItems = [
    {
      title: "Black Note Management",
      subtitle: "Elevating Careers, 1 Note at a Time",
      category: "Web Design & Artist Management",
      description:
        "Empowering independent artists with personalized management, accountability, and essential music services.",
      videoUrl:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/68216d1fabf1fc5f287c9950.mov",
      tags: ["Web Design", "UI/UX", "Artist Management", "Music Industry"],
      type: "video",
      features: [
        "Artist Management",
        "Music Distribution",
        "Marketing",
        "Booking",
        "Brand Development"
      ],
      link: "https://blacknotemgmt.com/",
    },
    {
      title: "BlackNote App",
      subtitle: "Your Artist Career Hub",
      category: "Mobile App",
      description:
        "This app is designed to act as a tool for artists signed to Black Note Management - it provides users insights into their career, AI powered tools and resources, acting as a 1 stop shop for music creatives.",
      videoUrl:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6835b01cbfba6d1c1dd66555.mov",
      tags: ["Mobile App", "Artist Tools", "AI", "Music Industry"],
      type: "video",
      features: [
        "Career Insights",
        "AI Powered Tools",
        "Resources",
        "1 Stop Shop"
      ],
      // No link provided as requested
    },
    {
      title: "EliteUSMD",
      subtitle: "Premium Healthcare Marketing Solutions",
      category: "Web Design & Digital Marketing",
      description:
        "Comprehensive digital presence for healthcare professionals with strict compliance protocols and premium branding.",
      videoUrl:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824b934684111470ef181ab.mp4",
      tags: ["Web Design", "Healthcare", "Compliance", "Digital Marketing"],
      type: "video",
      features: [
        "Custom Coded Website",
        "Adherence to Strict Compliance Protocols",
        "Logo + Brand Identity",
        "UXI Design",
        "Social Media Management",
        "SEO"
      ],
      link: "https://eliteusmd.com/",
    },
    {
      title: "BanVibeCoders",
      subtitle: "They Wrote Us Off. So We Coded Our Own World.",
      category: "Web Design",
      description:
        "BanVibeCoders.com is the underground movement for devs who build with soul—not by the book. A platform for overlooked creatives, vibe-heavy coders, and design-first dreamers who've been told they're 'doing too much'.",
      videoUrl:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681d341fb78a40f4fa26f220.mov",
      tags: ["Web Design", "UI/UX", "Development", "Community Platform"],
      type: "video",
      features: [
        "Free Resources & Code Snippets",
        "Paid Courses",
        "1-on-1 Mentorship",
        "Community Support",
      ],
      launchDate: "JUNE 1, 2025",
      mentor: {
        name: "Mev",
        title: "BVC Mentor",
        description:
          "Vibe coder with multiple contracted builds for Insurance, Healthcare, Medical Spa, Roofing, Music Rights, Reputation Management industries.",
      },
      link: "https://banvibecoders.com/",
    },
    {
      title: "FADE'EM UP",
      subtitle: "Experience the Art of Barbering at Fade 'Em Up",
      category: "Web Design",
      description:
        "Lehigh Acres' Premier Barbershop for Classic Cuts & Modern Styles.",
      videoUrl:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681d30e3786bf149b4b4ea75.mp4",
      tags: ["Web Design", "UI/UX", "Development", "Branding"],
      type: "video",
      features: [
        "Home",
        "Services",
        "Barbers",
        "Gallery",
        "Testimonials",
        "Contact",
        "Book Now",
      ],
      link: "https://fadeemup.netlify.app/",
    },
    {
      title: "NEXT LEVEL INK",
      subtitle: "Your Vision. Our Artistry.",
      category: "Web Design",
      description:
        "Premier tattoo studio in Florida specializing in custom designs, black & grey realism, and color work that brings your ideas to life.",
      videoUrl:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681d30e34b3e907ac068d36f.mp4",
      tags: ["Web Design", "UI/UX", "Development", "Branding"],
      link: "https://nextleveltattoo.netlify.app/",
      type: "video",
    },
    {
      title: "JAYRES",
      subtitle: "Artistry in Sound",
      category: "Web Design & Development",
      description:
        "Experience the unique sound and visual journey of Jayres. Blending artistry with innovative musicality to create an unforgettable experience.",
      videoUrl:
        "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681d30e36b471c45bf982ba9.mp4",
      tags: ["Web Design", "UI/UX", "Development", "Branding"],
      link: "https://jayres.netlify.app/",
      type: "video",
    },
    {
      title: 'DJ Khaled - "Welcome to My Hood"',
      category: "Music Production",
      description:
        'Our team contributed to the production of DJ Khaled\'s hit "Welcome to My Hood", featuring Rick Ross, Lil Wayne, Plies, and T-Pain. This RIAA GOLD certified track showcases our expertise in music production and engineering.',
      videoUrl: "https://www.youtube.com/embed/ZXIA-U2mL3U",
      tags: ["Music Production", "Audio Engineering", "Mastering"],
      type: "youtube",
      stats: {
        views: "75M+",
        streams: "25M+",
        certification: "RIAA GOLD",
      },
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
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Showcasing our best work across music production, web development,
            and digital marketing
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 h-[300px] lg:h-[500px] relative overflow-hidden">
                    {item.type === "youtube" ? (
                      <iframe
                        src={item.videoUrl}
                        title={item.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={item.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-8 lg:w-1/2">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <span className="bg-blue-50 text-[#188bf6] px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-['Montserrat']">
                        {item.title}
                      </h2>
                      {item.subtitle && (
                        <h3 className="text-xl text-[#188bf6] mb-4 font-['Poppins']">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-lg text-gray-600 mb-6 font-['Poppins']">
                        {item.description}
                      </p>
                      {item.launchDate && (
                        <div className="bg-black text-white p-4 rounded-lg mb-6">
                          <p className="text-sm mb-2">OFFICIAL LAUNCH DATE</p>
                          <p className="text-xl font-bold">{item.launchDate}</p>
                        </div>
                      )}
                      {item.mentor && (
                        <div className="bg-gray-100 p-4 rounded-lg mb-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="text-lg font-semibold">
                              {item.mentor.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {item.mentor.title}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">
                            {item.mentor.description}
                          </p>
                        </div>
                      )}
                      {item.stats && (
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(item.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-bold text-[#188bf6]">
                                {value}
                              </div>
                              <div className="text-sm text-gray-600 capitalize">
                                {key.replace(/_/g, " ")}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <div className="w-full flex gap-4">
                          {item.type === "youtube" ? (
                            <Button
                              className="bg-red-500 text-white hover:bg-red-500/90 dark:bg-red-900 dark:hover:bg-red-900/90"
                              onClick={() =>
                                window.open(
                                  item.videoUrl.replace("embed/", "watch?v="),
                                  "_blank"
                                )
                              }
                            >
                              Watch Video
                            </Button>
                          ) : (
                            item.link && ( // Only render button if item.link exists
                              <Button
                                className="bg-[#188bf6] text-white hover:bg-[#0070e0]"
                                onClick={() => window.open(item.link, "_blank")}
                              >
                                Visit Site
                              </Button>
                            )
                          )}
                        </div>
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Design Portfolio Video Section - Added under Khaled card */}
          <div className="mt-16 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center font-['Montserrat']">
              Our Design Portfolio:
            </h2>
            <div className="w-full max-w-4xl overflow-hidden rounded-xl shadow-xl">
              <video
                src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681d30e32c1b7e2dc2e5cd59.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Montserrat']">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-['Poppins']">
            Let's discuss how we can help bring your vision to life
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
