import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
      name: "Mevin Riviere-Lee",
      role: "Founder & CEO",
      description: "Visionary leader and primary architect of Riviere Group's platforms, branding, and strategic direction. Oversees all divisions.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d3698e57c591c453918c.jpeg",
      division: "Executive Leadership",
    },
    {
      name: "Nicole Hanson",
      role: "President & COO",
      description: "Oversees daily operations, manages team execution, client communications, and ensures cross-functional alignment.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681df844aba8ffbf7d3f5752.jpeg",
      division: "Executive Leadership",
    },
    {
      name: "Maritza Glover",
      role: "Chief Growth Strategist",
      description: "Orchestrates brand deployment across physical & digital touchpoints, aligns B2C marketing, advises leadership with operational wisdom, and expands client acquisition channels.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/685af54c2b37dc33ea82deb2.png",
      division: "Executive Leadership",
    },
    {
      name: "Matthew Sturgeon",
      role: "Chief Strategy Officer (CSO)",
      description: "Leads business development, sales strategy, and outbound initiatives. Manages sales team and client acquisition funnels.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d4e9583c67752f55e38a.png",
      division: "Executive Leadership",
    },
    {
      name: "Mernolli June Q. Mate",
      role: "Social Media Manager & Content Strategist",
      description: "Develops and schedules brand content, executes marketing campaigns, manages growth across social platforms, and provides content briefs.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d585583c67546955e57d.png",
      division: "Creative & Marketing Division",
    },
    {
      name: "Chester Horlador",
      role: "UI/UX designer",
      description: "Specializes in crafting intuitive and visually engaging user interfaces and experiences for digital products.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/685b77d175aa239081027850.jpeg",
      division: "Creative & Marketing Division",
    },
    {
      name: "Elijah Monjardin",
      role: "Frontend/Backend AI Hybrid Developer",
      description: "Translates design into responsive code using modern frameworks. Implements visuals, UI behavior, and feature integrations.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d633a1908e7794d2c4a0.jpeg",
      division: "Development Division",
    },
    {
      name: "John Arpon",
      role: "Frontend/Backend AI Hybrid Developer",
      description: "Handles database structures, APIs, and functionality across platforms. Ensures scalability, performance, and technical optimizations.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6824d6609cd8fb27389a1972.jpeg",
      division: "Development Division",
    },
    {
      name: "April Jermaine",
      role: "WordPress & WooCommerce Specialist",
      description: "Expert in creating and customizing WordPress sites with Elementor, managing WooCommerce, and ensuring seamless plugin and payment integrations.",
      image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6856932f2b584a613dd33ace.jpeg",
      division: "Development Division",
    },
  ];

  // Group team members by division
  const teamByDivision = teamMembers.reduce((acc, member) => {
    if (!acc[member.division]) {
      acc[member.division] = [];
    }
    acc[member.division].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  // Order of divisions
  const divisionOrder = [
    "Executive Leadership",
    "Creative & Marketing Division",
    "Development Division",
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
          <div className="flex items-center space-x-8">
            <img
              src="/riviere-group.svg"
              alt="Riviere Group"
              className="h-8 w-auto"
            />
            <div className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Riviere Group®
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a full-service media agency specializing in web design, branding, SEO, AI, and music production—empowering brands and artists to thrive in the digital age.
          </p>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Meet Our Team
            </h2>
            
            {divisionOrder.map((division) => (
              <div key={division} className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  {division}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamByDivision[division]?.map((member, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={member.image} alt={member.name} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              {member.name}
                            </h4>
                            <p className="text-blue-600 font-medium">
                              {member.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <SectionComponentNodeByAnima />
      </div>
    </div>
  );
};

// Export the component wrapped with SEO
export const AboutUs = withSEO(AboutUsComponent);
