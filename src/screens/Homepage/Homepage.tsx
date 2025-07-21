import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CtaSectionByAnima } from "./sections/CtaSectionByAnima";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { Frame1ByAnima } from "./sections/Frame1ByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima/FrameWrapperByAnima";
import { HeroSectionByAnima } from "./sections/HeroSectionByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima/SectionComponentNodeByAnima";
import { withSEO } from "../../components/withSEO";

const HomepageComponent = (): JSX.Element => {
  // Company logos data for mapping
  const companyLogos = [
    { src: "/fictional-company-logo-4.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo-3.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo-7.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo-10.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo-2.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo-5.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo-6.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo-1.svg", alt: "Fictional company" },
    // Duplicate logos to create a seamless loop effect
    { src: "/fictional-company-logo-4.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo-3.svg", alt: "Fictional company" },
    { src: "/fictional-company-logo-7.svg", alt: "Fictional company" },
  ];

  // Autoplay options for the brands carousel
  const brandsAutoplayOptions = {
    delay: 2000, // No delay for continuous scrolling
    stopOnInteraction: false,
    stopOnMouseEnter: true, // Pause on hover
    playOnInit: true,
  };

  // Use the useEmblaCarousel hook with autoplay plugin
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 1,
      dragFree: true,
      containScroll: false,
    },
    [Autoplay(brandsAutoplayOptions)]
  );

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        <HeroSectionByAnima />

        {/* Trusted brands section */}
        <section className="w-full bg-neutral-50 py-12">
          <div className="flex flex-col items-center gap-8">
            <p className="font-['Poppins',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[26px]">
              Trusted by forward-thinking brands
            </p>

            <div className="w-full overflow-hidden">
              <div ref={emblaRef} className="embla overflow-hidden">
                <div className="embla__container flex items-center gap-[60px]">
                  {companyLogos.map((logo, index) => (
                    <div key={index} className="embla__slide flex-none">
                      <img
                        className="h-[42px] w-auto"
                        alt={logo.alt}
                        src={logo.src}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FrameByAnima />
        <Frame1ByAnima />
        <FrameWrapperByAnima />
        <DivByAnima />
        <DivWrapperByAnima />
        <CtaSectionByAnima />
        <SectionComponentNodeByAnima />
      </div>
    </div>
  );
};

// Export the component wrapped with SEO
export const Homepage = withSEO(HomepageComponent);
