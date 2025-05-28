import { StarIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi
} from "../../../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CEO at TechFlow Solutions",
    quote:
      'Riviere Group transformed our digital presence completely. Their strategic approach to web development and branding helped us increase our conversion rate by 150% within three months. Their attention to detail and commitment to results is outstanding.',
    stars: 4.5,
    logoSrc: "/fictional-company-logo-2.svg",
    logoWidth: "68px",
    logoHeight: "42px",
    profilePicSrc: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Founder of Innovate Digital",
    quote:
      'Working with Riviere Group was a game-changer for our startup. Their team delivered a stunning website and comprehensive digital strategy that helped us secure our Series A funding. They truly understand what it takes to make businesses grow.',
    stars: 5,
    logoSrc: "/fictional-company-logo-7.svg",
    logoWidth: "146px",
    logoHeight: "42px",
    profilePicSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Emily Thompson",
    title: "Marketing Director at HealthTech Plus",
    quote:
      'The ROI we\'ve seen since partnering with Riviere Group has been incredible. Their SEO strategy increased our organic traffic by 200%, and their redesign of our patient portal has received overwhelming positive feedback from our users.',
    stars: 5,
    logoSrc: "/fictional-company-logo-10.svg",
    logoWidth: "145px",
    logoHeight: "42px",
    profilePicSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "David Park",
    title: "CTO at CloudScale",
    quote:
      'Riviere Group\'s technical expertise is unmatched. They developed a complex web application for us that handles millions of daily transactions flawlessly. Their team\'s proactive communication and problem-solving skills made the entire process smooth.',
    stars: 5,
    logoSrc: "/fictional-company-logo.svg",
    logoWidth: "189px",
    logoHeight: "42px",
    profilePicSrc: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "Rachel Anderson",
    title: "VP of Brand at StyleCo",
    quote:
      'The branding work Riviere Group did for our fashion startup was exceptional. They captured our vision perfectly and created a cohesive digital identity that resonates with our target audience. Our social media engagement has tripled since launch.',
    stars: 4.5,
    logoSrc: "/fictional-company-logo-3.svg",
    logoWidth: "120px",
    logoHeight: "42px",
    profilePicSrc: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "James Wilson",
    title: "CEO at FintechFlow",
    quote:
      'Riviere Group\'s understanding of the fintech space is impressive. They built us a secure, scalable platform that our customers trust. Their work on our UX design increased user retention by 45% in just two months.',
    stars: 5,
    logoSrc: "/fictional-company-logo-5.svg",
    logoWidth: "150px",
    logoHeight: "42px",
    profilePicSrc: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const DivByAnima = (): JSX.Element => {
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplayRef = useRef<Autoplay | null>(null);

  // Configure autoplay plugin with continuous scrolling behavior
  const plugin = React.useMemo(() => {
    autoplayRef.current = Autoplay({
      delay: 2000, // Set interval to 3 seconds
      stopOnInteraction: false, // Continue playing after user interaction
      stopOnMouseEnter: false, // Don't stop when the mouse hovers
      playOnInit: false, // Start autoplay as soon as the component is initialized
      force: true, // Make sure autoplay continues even after interactions
    });
    return autoplayRef.current;
  }, []);

  useEffect(() => {
    if (!api) return;

    // Always start the autoplay
    const startAutoplay = () => {
      if (autoplayRef.current) {
        autoplayRef.current.play();
      }
    };

    // Add event listeners to restart autoplay if interrupted
    api.on('select', startAutoplay);
    api.on('reInit', startAutoplay);
    api.on('settle', startAutoplay);

    startAutoplay(); // Ensure autoplay starts immediately

    return () => {
      api.off('select', startAutoplay);
      api.off('reInit', startAutoplay);
      api.off('settle', startAutoplay);
    };
  }, [api]);

  return (
    <section className="flex flex-col w-full items-center py-24 px-4 md:px-8 bg-white">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center gap-16">
        <h2 className="font-['Montserrat',Helvetica] font-bold text-black text-4xl md:text-5xl text-center leading-tight">
          What our clients are saying
        </h2>

        {/* Single Line Carousel */}
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
            plugins={[plugin]}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card 
                    className="bg-neutral-50 rounded-3xl overflow-hidden border-none h-full hover:shadow-md transition-shadow duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col w-full h-full p-8">
                        <div className="flex flex-col gap-6 h-full">
                          <div className="inline-flex h-5 items-center gap-1">
                            {[...Array(Math.floor(testimonial.stars))].map(
                              (_, i) => (
                                <StarIcon
                                  key={i}
                                  className="w-5 h-5 fill-current text-yellow-400"
                                />
                              ),
                            )}
                            {testimonial.stars % 1 > 0 && (
                              <div className="relative w-5 h-5">
                                <StarIcon className="absolute w-5 h-5 fill-current text-yellow-400" />
                                <div className="absolute top-0 right-0 w-2.5 h-5 bg-neutral-50"></div>
                              </div>
                            )}
                          </div>

                          <div className="inline-flex items-center gap-3">
                            <div className="relative w-[60px] h-[60px] rounded-full bg-gray-200 overflow-hidden">
                              {testimonial.profilePicSrc && (
                                <img
                                  className="w-full h-full object-cover rounded-full"
                                  alt={`${testimonial.name}'s profile`}
                                  src={testimonial.profilePicSrc}
                                />
                              )}
                            </div>

                            <div className="inline-flex flex-col items-start gap-1">
                              <div className="font-['Poppins',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[30px]">
                                {testimonial.name}
                              </div>

                              <div className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-base tracking-[0] leading-6 whitespace-nowrap">
                                {testimonial.title}
                              </div>
                            </div>
                          </div>

                          <div className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg tracking-[0] leading-[26px] flex-grow">
                            {testimonial.quote}
                          </div>

                          <img
                            className="h-[42px] mt-auto"
                            style={{ width: testimonial.logoWidth }}
                            alt="Fictional company logo"
                            src={testimonial.logoSrc}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Visual indicator for auto-scroll */}
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
                    style={{
                      opacity: 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
