import React from "react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import { Menu, X, Star as StarIcon, MailIcon, PhoneIcon } from "lucide-react";

export const Nexus = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  // Navigation links data
  const quickNavLinks = [
    "Home",
    "Services",
    "Portfolio",
    "Resources",
    "Contact",
    "Book a consultation",
  ];

  // Services links data
  const servicesLinks = [
    "Web Development",
    "Digital Strategy",
    "Branding & Design",
    "Media & Content",
    "Nexus CRM",
  ];

  // Social media icons data
  const socialIcons = [
    {
      src: "/frame-25.svg",
      active: true,
      href: "https://www.facebook.com/profile.php?id=61573781046929",
    },
    {
      src: "/frame.svg",
      active: false,
      href: "https://www.instagram.com/rivieregroup/",
    },
    {
      src: "/frame-7.svg",
      active: false,
      href: "https://x.com/rivieregroup",
    },
  ];
  const features = [
    "Save Over $1,500/Month – Replace 14+ tools with one powerful platform at just $97/month (vs. $1,612/month with other services).",
    "All-in-One Powerhouse – CRM, website builder, email marketing, funnels, automations, scheduling, and more—all in one sleek dashboard.",
    "Ditch the Stack – Stop juggling tools like HubSpot, Mailchimp, Wix, Calendly, and Zapier. Nexus replaces them all.",
    "Built to Scale – Whether you're a startup or a seasoned pro, Nexus handles everything from SMS campaigns to course hosting and analytics.",
  ];

  const targetAudience = [
    "BUSINESS OWNERS",
    "AGENCIES",
    "CREATORS",
    "INFLUENCERS",
    "COACHES",
    "TRAINERS",
    "YOUTUBERS",
    "SAASPRENEURS",
    "RELIGIOUS ORGs.",
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

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .bounce {
          display: inline-block;
          animation: bounce 1s ease-in-out infinite;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .gold-glow {
          animation: goldGlow 2s ease-in-out infinite;
          font-weight: bold;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-[235px] pb-24 px-4 md:px-8 relative">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
          <Spline
            scene="https://prod.spline.design/8sE0UyiScuNSidz1/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              minHeight: '800px'
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
            <div className="w-full lg:w-1/2">
              <img
                src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681ceb898c83422a29b1d113.png"
                alt="Nexus Hero"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 leading-tight">
                Stop <span className="bounce">Juggling</span> Tools, Start
                Growing Your Business with Nexus CRM: The All-in-One Solution
                That Saves You $1,500/Month
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Easy to use, packed with everything you need to manage and grow
                your business.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-4">
                <Button
                  className="bg-[#188bf6] text-white text-xl px-8 py-6 rounded-xl hover:bg-[#0070e0]"
                  onClick={() =>
                    window.open(
                      "https://shop.rivieregroup.org/checkout-page",
                      "_blank"
                    )
                  }
                >
                  Start Your Free Trial & Save
                </Button>
                <p className="text-sm text-gray-600">
                  100% risk free - 30 day money back guarantee
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Rated 4.9/5 by 100+ businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Replace 14+ Tools with One Powerful Platform
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Everything you need to run and grow your business, all in one place
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-8 h-8 bg-[#188bf6] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>

          {/* Tools Comparison */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">
              Save Big with Nexus CRM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-red-200 rounded-xl">
                <h4 className="text-xl font-bold text-red-500 mb-4">
                  Without Nexus
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>HubSpot CRM ($800/mo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Mailchimp ($299/mo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Calendly ($199/mo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Zapier ($149/mo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>+ More ($165/mo)</span>
                  </li>
                  <li className="text-xl font-bold mt-4 pt-4 border-t">
                    Total: $1,612/month
                  </li>
                </ul>
              </div>
              <div className="p-6 border-2 border-green-200 rounded-xl bg-green-50">
                <h4 className="text-xl font-bold text-green-500 mb-4">
                  With Nexus
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>All-in-One Platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Unlimited Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Free Updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Premium Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>No Hidden Fees</span>
                  </li>
                  <li className="text-xl font-bold text-green-600 mt-4 pt-4 border-t">
                    Only $97/month
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <img
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d604ff1b97ac60ddffef43.png"
              alt="Nexus Features"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl text-gray-500 mb-4">
              Total value: <span className="line-through">$1612/Month</span>
            </p>
            <p className="text-4xl font-bold text-[#188bf6] mb-8">
              Just $97/Month
            </p>
            <Button
              className="bg-[#188bf6] text-white text-xl px-8 py-6 rounded-xl hover:bg-[#0070e0]"
              onClick={() =>
                window.open(
                  "https://shop.rivieregroup.org/checkout-page",
                  "_blank"
                )
              }
            >
              Get instant access
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Growing Businesses
          </h2>
          {/* Client Logos Card */}
          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg mx-auto text-center mb-12">
            <h3 className="text-2xl font-bold mb-8 text-white">
              Our Current Clients:
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d617bf7a11869826760d2e.png"
                alt="Client logo"
                className="h-16 w-auto filter brightness-0 invert"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d618af1031c92db5984c9c.png"
                alt="Client logo"
                className="h-16 w-auto filter brightness-0 invert"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d618da5106d5275633d6c8.png"
                alt="Client logo"
                className="h-16 w-auto filter brightness-0 invert"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d618597a11862624760da1.png"
                alt="Client logo"
                className="h-16 w-auto filter brightness-0 invert"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d6194e1b97ac3da40011a2.png"
                alt="Client logo"
                className="h-16 w-auto filter brightness-0 invert"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d619998b28013bbcc2730f.png"
                alt="Client logo"
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67b37cb6df5844544b9ec7ba.png"
                  alt="Nicole H."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <h4 className="text-xl font-bold mb-3">
                "Our business works while we sleep!"
              </h4>
              <p className="text-base mb-3">
                "This software was a game changer. Instead of getting to the
                office and emailing leads, they're emailing me before I even get
                there."
              </p>
              <p className="text-sm font-semibold">
                -Nicole H., Medical Health Covers
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                  alt="David R."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <h4 className="text-xl font-bold mb-3">
                "Saved us thousands each month!"
              </h4>
              <p className="text-base mb-3">
                "We were able to cancel 6 different subscriptions after
                switching to Nexus. The automation features alone have saved us
                countless hours."
              </p>
              <p className="text-sm font-semibold">
                -David R., Growth Marketing Agency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 animate-gradient-flow"></div>
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12 relative z-10">
            Who's This Perfect For?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow relative z-10"
              >
                <p className="font-semibold">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Streamline Your Business?
          </h2>
          <p className="text-2xl mb-4">Start Your 30-Day Free Trial Today</p>
          <p className="text-xl text-gray-600 mb-8">
            Join 100+ businesses already saving time and money with Nexus CRM
          </p>
          <Button
            className="bg-[#188bf6] text-white text-xl px-8 py-6 rounded-xl hover:bg-[#0070e0]"
            onClick={() =>
              window.open(
                "https://shop.rivieregroup.org/checkout-page",
                "_blank"
              )
            }
          >
            Start Your Free Trial Now
          </Button>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">100% Risk-Free Guarantee</h2>
          <h3 className="text-2xl text-gray-600 mb-8">
            Love it in 30 days or get your money back
          </h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              At Nexus CRM, we are committed to providing you with a seamless
              and effective CRM experience.
            </p>
            <p className="text-lg mb-6">
              We stand behind our platform and want you to feel confident in
              your investment.
            </p>
            <p className="text-lg mb-8">
              That's why we offer our Nexus Money-Back Guarantee to ensure your
              complete satisfaction.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold mb-4">Our Promise</h4>
              <p className="text-lg mb-6">
                If you are not completely satisfied with Nexus CRM within the
                first 14 days of your subscription, we will issue a full
                refund—no questions asked.
              </p>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/75x6oVRlEkU7gyLcePUE/media/4ddff901-21a5-40c8-86cc-5aa173007a21.png"
                alt="100% Satisfaction Guaranteed"
                className="max-w-[300px] mx-auto mt-8"
              />
            </div>
          </div>
          <Button
            className="bg-[#188bf6] text-white text-xl px-8 py-6 rounded-xl hover:bg-[#0070e0] mt-12"
            onClick={() =>
              window.open(
                "https://shop.rivieregroup.org/checkout-page",
                "_blank"
              )
            }
          >
            Start Your Free Trial Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col w-full items-start gap-12 py-16 px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[169px] w-full justify-center">
          {/* Company Info Column */}
          <div className="flex flex-col w-full lg:w-[353px] items-center lg:items-start gap-8">
            <div className="flex flex-col items-center lg:items-start gap-6 w-full">
              <div className="relative flex items-center h-[60px]">
                <div className="w-[60px] h-[60px] bg-[#188bf6] rounded-full flex items-center justify-center">
                  <div className="relative w-6 h-7">
                    <img
                      className="absolute w-6 h-[27px] top-px left-0"
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

              <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px] text-center lg:text-left">
                Riviere Group® is a full-service media agency specializing in
                web design, branding, SEO, AI, and music production—empowering
                brands and artists to thrive.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
              {socialIcons.map((icon, index) => (
                <a
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center ${
                    icon.active
                      ? "bg-[#188bf6]"
                      : "bg-neutral-50 border border-solid border-[#efefef] hover:border-[#188bf6] transition-colors"
                  }`}
                >
                  <img
                    className="w-6 h-6"
                    alt="Social media icon"
                    src={icon.src}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full lg:w-[758px]">
            {/* Quick Navigation Column */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[26px] text-center lg:text-left">
                Quick Navigation
              </h3>

              {quickNavLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px] text-center lg:text-left"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Services Column */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[26px] text-center lg:text-left">
                Services
              </h3>

              {servicesLinks.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px] text-center lg:text-left"
                >
                  {service}
                </a>
              ))}
            </div>

            {/* Company Information Column */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              <h3 className="font-['Poppins',Helvetica] font-medium text-black text-lg leading-[26px] text-center lg:text-left">
                Company Information
              </h3>

              <div className="flex items-center justify-center lg:justify-start gap-2 w-full">
                <MailIcon className="w-6 h-6" />
                <a
                  href="mailto:info@rivieregroup.org"
                  className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-sm lg:text-base leading-[26px] break-all hover:text-[#188bf6] transition-colors"
                >
                  info@rivieregroup.org
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 w-full">
                <PhoneIcon className="w-6 h-6" />
                <a
                  href="tel:1-866-814-2287"
                  className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-sm lg:text-base leading-[26px] hover:text-[#188bf6] transition-colors"
                >
                  1-866-814-2287
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-start gap-5 w-full">
          <img
            className="w-full h-px object-cover"
            alt="Divider line"
            src="/line-1.svg"
          />

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-between w-full">
            <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-base lg:text-lg leading-[26px] text-center lg:text-left">
              Copyright © 2025 Riviere Group. All rights reserved.
            </p>

            <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-base lg:text-lg leading-[26px] text-center lg:text-left">
              Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Terms &amp; Conditions
            </p>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-flow {
          animation: gradient-flow 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};
