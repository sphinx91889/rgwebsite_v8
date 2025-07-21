import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X, Mail, Phone, MapPin, Linkedin, Twitter, Github, Users, Target, Award, TrendingUp } from "lucide-react";
import { SectionComponentNodeByAnima } from "../Homepage/sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { withSEO } from "../../components/withSEO";

const AboutUsComponent = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  const teamMembers = [
    {
      id: "1",
      name: "Mevin Riviere-Lee",
      position: "Founder & CEO",
      division: "Executive Leadership",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d3698e57c591c453918c.jpeg",
      bio: "Visionary leader and primary architect of Riviere Group's platforms, branding, and strategic direction. Oversees all divisions.",
      email: "mevin@therivieregroup.org",
      linkedin: "https://linkedin.com/in/mevinrivierelee",
      twitter: undefined,
      github: undefined
    },
    {
      id: "2",
      name: "Nicole Hanson",
      position: "President & COO",
      division: "Executive Leadership",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681df844aba8ffbf7d3f5752.jpeg",
      bio: "Oversees daily operations, manages team execution, client communications, and ensures cross-functional alignment.",
      email: "nicole@therivieregroup.org",
      linkedin: "https://linkedin.com/in/nicolehanson",
      twitter: undefined,
      github: undefined
    },
    {
      id: "3",
      name: "Maritza Glover",
      position: "Chief Growth Strategist",
      division: "Executive Leadership",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/685af54c2b37dc33ea82deb2.png",
      bio: "Orchestrates brand deployment across physical & digital touchpoints, aligns B2C marketing, advises leadership with operational wisdom, and expands client acquisition channels.",
      email: "maritza@therivieregroup.org",
      linkedin: "https://linkedin.com/in/maritzaglover",
      twitter: undefined,
      github: undefined
    },
    {
      id: "4",
      name: "Matthew Sturgeon",
      position: "Chief Strategy Officer (CSO)",
      division: "Executive Leadership",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d4e9583c67752f55e38a.png",
      bio: "Leads business development, sales strategy, and outbound initiatives. Manages sales team and client acquisition funnels.",
      email: "matthew@therivieregroup.org",
      linkedin: "https://linkedin.com/in/matthewsturgeon",
      twitter: undefined,
      github: undefined
    },
    {
      id: "5",
      name: "Arthur Ramirez",
      position: "CEO's Executive Assistant",
      division: "Executive Leadership",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/687e9bd9117afd9b4827e59d.png",
      bio: "Provides comprehensive administrative support to the CEO, manages executive communications, coordinates high-priority projects, and ensures seamless operations across all divisions.",
      email: "arthur@therivieregroup.org",
      linkedin: "https://linkedin.com/in/arthurramirez",
      twitter: undefined,
      github: undefined
    },
    {
      id: "6",
      name: "Mernolli June Q. Mate",
      position: "Social Media Manager & Content Strategist",
      division: "Creative & Marketing Division",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d585583c67546955e57d.png",
      bio: "Develops and schedules brand content, executes marketing campaigns, manages growth across social platforms, and provides content briefs.",
      email: "merno@therivieregroup.org",
      linkedin: "https://linkedin.com/in/merno",
      twitter: undefined,
      github: undefined
    },
    {
      id: "7",
      name: "Chester Horlador",
      position: "UI/UX Designer",
      division: "Creative & Marketing Division",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/687e9c687f24c622213ac4aa.jpeg",
      bio: "Specializes in crafting intuitive and visually engaging user interfaces and experiences for digital products.",
      email: "chester@therivieregroup.org",
      linkedin: "https://linkedin.com/in/chesterhorlador",
      twitter: undefined,
      github: undefined
    },
    {
      id: "8",
      name: "Elijah Monjardin",
      position: "Frontend/Backend AI Hybrid Developer",
      division: "Development Division",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d633a1908e7794d2c4a0.jpeg",
      bio: "Translates design into responsive code using modern frameworks. Implements visuals, UI behavior, and feature integrations.",
      email: "elijah@therivieregroup.org",
      linkedin: "https://linkedin.com/in/elijahmonjardin",
      twitter: undefined,
      github: "https://github.com/elijahmonjardin"
    },
    {
      id: "9",
      name: "John Arpon",
      position: "Frontend/Backend AI Hybrid Developer",
      division: "Development Division",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d6609cd8fb27389a1972.jpeg",
      bio: "Handles database structures, APIs, and functionality across platforms. Ensures scalability, performance, and technical optimizations.",
      email: "john@therivieregroup.org",
      linkedin: "https://linkedin.com/in/johnarpon",
      twitter: undefined,
      github: "https://github.com/johnarpon"
    },
    {
      id: "10",
      name: "April Jermaine",
      position: "WordPress & WooCommerce Specialist",
      division: "Development Division",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6856932f2b584a613dd33ace.jpeg",
      bio: "Expert in creating and customizing WordPress sites with Elementor, managing WooCommerce, and ensuring seamless plugin and payment integrations.",
      email: "april@therivieregroup.org",
      linkedin: "https://linkedin.com/in/apriljermaine",
      twitter: undefined,
      github: undefined
    },
    {
      id: "11",
      name: "Warren Apit",
      position: "WordPress Developer",
      division: "Development Division",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/687e9b0e2c48dda28300f760.jpeg",
      bio: "Specializes in WordPress development, custom themes, plugin development, and creating scalable web solutions for clients.",
      email: "warren@therivieregroup.org",
      linkedin: "https://linkedin.com/in/warrenapit",
      twitter: undefined,
      github: "https://github.com/warrenapit"
    }
  ];

  const stats = [
    { label: "Team Members", value: "11+", icon: <Users className="h-6 w-6" /> },
    { label: "Projects Completed", value: "200+", icon: <Target className="h-6 w-6" /> },
    { label: "Years of Excellence", value: "4+", icon: <Award className="h-6 w-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const divisions = Array.from(new Set(teamMembers.map(member => member.division)));

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
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

      <style>{`
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
      <div className="pt-[200px] pb-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Riviere Group®
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Founded in 2012, we are a full-service media agency specializing in web design, branding, SEO, AI, and music production—empowering brands and artists to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Button>
              <Button 
                onClick={() => navigate('/portfolio')}
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">Real reviews from satisfied clients</p>
            </div>
            <div className="w-full">
              <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
              <iframe 
                className='lc_reviews_widget' 
                src='https://reputationhub.site/reputation/widgets/review_widget/8ngdMjJjmckUW3DffAfv?widgetId=687e9f17b4d7bdcfb91cfee4' 
                frameBorder='0' 
                scrolling='no' 
                style={{width: '100%', height: '600px', border: 'none'}}
                title="Client Reviews"
              ></iframe>
            </div>
          </div>
        </section>



        {/* Team Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600">
                The talented individuals who make our success possible
              </p>
            </div>

            {divisions.map((division, divisionIndex) => (
              <div key={division} className="mb-12">
                <div className="flex items-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {division}
                  </h3>
                  <div className="ml-4 flex-1 h-px bg-gray-300"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers
                    .filter(member => member.division === division)
                    .map((member) => (
                      <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-md">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={member.image} alt={member.name} />
                              <AvatarFallback className="text-lg bg-[#188bf6] text-white">
                                {getInitials(member.name)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                {member.name}
                              </h4>
                              <Badge variant="secondary" className="mb-3 bg-[#188bf6] text-white">
                                {member.position}
                              </Badge>
                              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {member.bio}
                              </p>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Mail className="h-4 w-4" />
                                </Button>
                                {member.linkedin && (
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Linkedin className="h-4 w-4" />
                                  </Button>
                                )}
                                {member.twitter && (
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Twitter className="h-4 w-4" />
                                  </Button>
                                )}
                                {member.github && (
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Github className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Target className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                      <p className="text-gray-600 leading-relaxed">
                        To empower businesses and artists to build their presence and maximize their impact through cutting-edge digital solutions.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8 border-2 border-purple-100 hover:border-purple-200 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <TrendingUp className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                      <p className="text-gray-600 leading-relaxed">
                        To be the global leader in transformative digital solutions, creating a more connected and efficient world for everyone.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to work with us? We'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0 text-center">
                  <Mail className="h-8 w-8 text-[#188bf6] mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">contact@therivieregroup.org</p>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0 text-center">
                  <Phone className="h-8 w-8 text-[#188bf6] mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">1-866-814-2287</p>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0 text-center">
                  <MapPin className="h-8 w-8 text-[#188bf6] mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Remote & Global</p>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="px-8 bg-[#188bf6] hover:bg-[#1674d9]">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us Today
            </Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <SectionComponentNodeByAnima />
    </div>
  );
};

// Export the component wrapped with SEO
export const AboutUs = withSEO(AboutUsComponent);
