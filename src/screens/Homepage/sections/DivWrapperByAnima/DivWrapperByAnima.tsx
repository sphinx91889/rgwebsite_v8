import React from "react";
import { Button } from "../../../../components/ui/button";

export const DivWrapperByAnima = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      id: 1,
      title: "Strategy-first approach",
      description:
        "We begin every project with a deep dive into your business goals and target audience to create solutions that deliver real results.",
      iconSrc: "/frame-22.svg",
      bgClass: "bg-gradient-to-b from-transparent to-white",
    },
    {
      id: 2,
      title: "Fully custom designs",
      description:
        "Every pixel is purposeful. We craft bespoke designs that reflect your brand's unique identity and resonate with your audience.",
      iconSrc: "/frame-26.svg",
      bgClass: "bg-white",
    },
    {
      id: 3,
      title: "Data-driven decisions",
      description:
        "We leverage analytics and user insights to continuously refine and optimize your digital presence for maximum impact.",
      iconSrc: "/frame-29.svg",
      bgClass: "bg-gradient-to-b from-transparent to-white",
    },
    {
      id: 4,
      title: "Fast, reliable turnaround",
      description:
        "Our streamlined processes ensure efficient delivery without compromising on quality, keeping your project on schedule.",
      iconSrc: "/frame-31.svg",
      bgClass: "bg-white",
    },
    {
      id: 5,
      title: "Transparent communication",
      description:
        "We maintain clear, open dialogue throughout the entire process, ensuring you're informed and involved every step of the way.",
      iconSrc: "/frame-24.svg",
      bgClass: "bg-gradient-to-t from-transparent to-white",
    },
    {
      id: 6,
      title: "Long-term partnership mindset",
      description:
        "We're invested in your long-term success, providing ongoing support and strategic guidance as your business evolves.",
      iconSrc: "/frame-38.svg",
      bgClass: "bg-white",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center py-24 px-4 md:px-8 bg-neutral-50">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-6 w-full max-w-3xl mx-auto text-center">
          <h2 className="font-['Montserrat',Helvetica] font-bold text-4xl md:text-5xl leading-tight">
            <span className="text-black">Why brands choose </span>
            <span className="text-[#188bf6]">Riviere Group</span>
          </h2>

          <p className="font-['Poppins',Helvetica] text-[#2f2f2f] text-lg md:text-xl leading-relaxed">
            We don&apos;t just design—we deliver clarity, momentum, and results that transform your digital presence.
          </p>
        </header>

        {/* 3x2 Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <div 
              key={card.id}
              className={`rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 relative group ${card.bgClass}`}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur group-hover:blur-xl"></div>
              <div className="flex flex-col h-full p-8">
                <div className="flex flex-col gap-6 h-full justify-center items-center">
                  <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center shadow-sm">
                    <img
                      className="w-8 h-8"
                      alt={`${card.title} icon`}
                      src={card.iconSrc}
                    />
                  </div>
              
                  <div className="flex flex-col gap-3 flex-grow relative">
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-xl leading-tight">
                      {card.title}
                    </h3>
              
                    <p className="font-['Poppins',Helvetica] text-[#2f2f2f] text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button 
          className="px-8 py-6 bg-[#188bf6] hover:bg-[#0070e0] transition-colors duration-300 rounded-xl font-['Poppins',Helvetica] font-semibold text-white text-lg shadow-md hover:shadow-lg"
          onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/T5JkOudaD7ASIlxFCl9j', '_blank')}
        >
          Book a consultation
        </Button>
      </div>
    </section>
  );
};
