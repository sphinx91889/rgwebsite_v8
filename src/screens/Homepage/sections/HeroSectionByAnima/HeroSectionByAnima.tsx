import { Button } from "../../../../components/ui/button";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Menu, StarIcon, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';

export const HeroSectionByAnima = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" }
  ];

  // Static images for display
  const rightColumnImages = [
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681ce8653d8df880f9062ba0.jpeg",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681ce77a3d8df841c6062aa7.png",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681cdc25b78a402e282657aa.png",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6817fb86572c823f06047d6d.png",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/68007a2f641b04de4cb31f1e.png",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67e99027379294e1aee9cad3.png",
      height: "340px",
    },
  ];

  const middleColumnImages = [
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67e99027c5f22a3255afedc6.png",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d33a15f6feb020a7f602db.jpeg",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681d3d6c441ab23146a7bf06.png",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681bf359d5b18d4c7eb6df51.jpeg",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67b359aa2de3ab703d9e1242.jpeg",
      height: "340px",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67b356ecf5002636135839db.png",
      height: "340px",
    },
  ];

  const avatars = [0, 8, 16, 24];

  const middleColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (middleColumnRef.current) {
        // For middle column (scrolling down)
        middleColumnRef.current.style.animation =
          "scrollDown 60s linear infinite";
      }
      if (rightColumnRef.current) {
        // For right column (scrolling up)
        rightColumnRef.current.style.animation = "scrollUp 60s linear infinite";
      }
    };

    // Start animation after component mounts
    setTimeout(animate, 100);

    // Cleanup function
    return () => {
      if (middleColumnRef.current) {
        middleColumnRef.current.style.animation = "";
      }
      if (rightColumnRef.current) {
        rightColumnRef.current.style.animation = "";
      }
    };
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
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

      <div className={`absolute top-0 right-0 w-full h-full overflow-hidden ${isMobile ? 'opacity-10' : ''}`}>
        <div className="relative w-full max-w-[1280px] mx-auto px-5 h-full flex justify-center">
          {/* Right Column - Scrolling up */}
          <div className={`absolute top-[100px] left-0 right-0 h-[120px] bg-gradient-to-b from-white via-white to-transparent z-10 pointer-events-none ${isMobile ? 'hidden' : ''}`}></div>
          <div className={`absolute right-0 top-0 h-full overflow-hidden w-[270px] ${isMobile ? 'hidden' : ''}`}>
            <div
              ref={rightColumnRef}
              className="flex flex-col gap-4 relative"
              style={{ paddingTop: "120px" }}
            >
              {/* Triple the images for smoother looping */}
              {[
                ...rightColumnImages,
                ...rightColumnImages,
                ...rightColumnImages,
              ].map((image, index) => (
                <div
                  key={`right-img-${index}`}
                  className="w-full overflow-hidden rounded-2xl"
                  style={{ height: image.height }}
                >
                  <img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Scrolling down */}
          <div className={`absolute right-[290px] top-0 h-full overflow-hidden w-[270px] ${isMobile ? 'hidden' : ''}`}>
            <div
              ref={middleColumnRef}
              className="flex flex-col gap-4 pt-[120px] relative"
            >
              {/* Triple the images for smoother looping */}
              {[
                ...middleColumnImages,
                ...middleColumnImages,
                ...middleColumnImages,
              ].map((image, index) => (
                <div
                  key={`middle-img-${index}`}
                  className="w-full overflow-hidden rounded-2xl"
                  style={{ height: image.height }}
                >
                  <img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Bottom blur effect */}
          <div className={`absolute bottom-[-10px] left-0 right-0 h-[100px] bg-gradient-to-t from-white via-white to-transparent z-10 pointer-events-none ${isMobile ? 'hidden' : ''}`}></div>
        </div>
      </div>

      {/* Gradient overlay to fade out the 3D background */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

      <style jsx>{`
        @keyframes glowAnimation {
          0% { color: #ff0080; text-shadow: 0 0 10px #ff0080; }
          25% { color: #00ff00; text-shadow: 0 0 10px #00ff00; }
          50% { color: #0080ff; text-shadow: 0 0 10px #0080ff; }
          75% { color: #8000ff; text-shadow: 0 0 10px #8000ff; }
          100% { color: #ff0080; text-shadow: 0 0 10px #ff0080; }
        }
        
        @keyframes goldGlow {
          0%, 100% { color: #ffd700; text-shadow: 0 0 10px #ffd700; }
          50% { color: #ffb700; text-shadow: 0 0 20px #ffb700; }
        }
        
        .gold-glow {
          animation: goldGlow 2s ease-in-out infinite;
          font-weight: bold;
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
            box-shadow: 0 0 20px #ff6b00;
          }
          50% {
            background-position: 100% 50%;
            box-shadow: 0 0 40px #ff6b00;
          }
        }
        
        .digital-glow {
          animation: glowAnimation 4s linear infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-66.666%);
          }
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(-66.666%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="relative w-full max-w-[1280px] mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <div className="bg-white py-11">
            <div className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between">
              <div
                className="flex items-center cursor-pointer z-50"
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
                <img className="ml-5 h-6" alt="Riviere group" src="/riviere-group.svg" />
              </div>

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
                    style={{ height: 'auto', padding: '10px 26px', lineHeight: '1' }}
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

        <div className="flex flex-col w-full max-w-[440px] gap-10 mt-[150px] lg:mt-[208px] mb-20">
          <div className="flex flex-col gap-6">
            <h1 className="font-['Montserrat'] font-bold text-black text-3xl md:text-5xl lg:text-[64px] leading-tight lg:leading-[72px] break-words">
              Powerful <span className="digital-glow">DIGITAL</span> experiences for brands ready to scale
            </h1>
            <p className="font-['Poppins'] font-normal text-[#2f2f2f] text-lg leading-[26px]">
              We combine creativity, strategy, and tech to help you grow fast
              and stand out.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-stretch gap-3">
              <Button
                className="w-full bg-[#188bf6] text-white rounded-xl px-8 py-4 font-['Poppins',Helvetica] font-semibold text-lg" 
                onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/T5JkOudaD7ASIlxFCl9j', '_blank')}
              >
                Book a consultation
              </Button>
              <Button
                className="w-full relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white rounded-xl px-8 py-4 font-['Poppins'] font-semibold text-lg overflow-hidden group"
                onClick={() => window.location.href = 'https://rivieregroupsales.netlify.app/'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 animate-gradient-x"></div>
                <span className="relative z-10">GET YOUR FREE WEBSITE MOCKUP</span>
              </Button>
              <Button
                variant="outline"
                className="w-full bg-white text-[#188bf6] border-[#188bf6] rounded-xl px-8 py-4 font-['Poppins'] font-semibold text-lg"
                onClick={() => navigate("/portfolio")}
              >
                See our work
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-[140px] h-11">
                {avatars.map((left, index) => (
                  <Avatar
                    key={`avatar-${index}`}
                    className="absolute w-11 h-11 border-2 border-[#188bf6]"
                    style={{ left: `${left * 4.2}px` }}
                  >
                    <AvatarImage
                      src={[
                        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
                        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
                        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
                        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                      ][index]}
                      alt={`User ${index + 1}`}
                    />
                  </Avatar>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex h-5 items-center">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={`star-${index}`}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="font-['Poppins'] font-normal text-black text-sm leading-[16px]">
                  100+ satisfied customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
