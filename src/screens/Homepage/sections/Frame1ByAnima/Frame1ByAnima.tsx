import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame1ByAnima = (): JSX.Element => {
  // Data for achievement cards
  const achievementCards = [
    {
      id: 1,
      image: {
        src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d33e453bd50c3a33042d14.webp",
        alt: "RIAA Gold Certified",
        className: "w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-md",
      },
      title: "🥇 RIAA Gold Certified",
      description:
        "Recognized for industry-leading music production and sound engineering.",
    },
    {
      id: 2,
      image: {
        src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d23a776028547f34be0919.png",
        alt: "Award-Winning Graphic Design",
        className: "w-28 lg:w-36 rounded-md",
      },
      title: "Award-Winning Graphic Design",
      description: "Creative recognized by design publications and peers.",
    },
    {
      id: 3,
      image: {
        src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d33e585f250ce584dcfd26.jpeg",
        alt: "Billboard Top Charted",
        className: "w-[160px] h-[42px] lg:w-[199px] lg:h-[53px] rounded-md mt-[26px]",
      },
      title: "6× Billboard Top #1 Charted",
      description:
        "Trusted by artists and producers behind chart-topping hits.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1280px] mx-auto py-12 px-4 lg:px-8">
      {achievementCards.map((card) => (
        <Card
          key={card.id}
          className="flex flex-col w-full border-none"
        >
          <CardContent className="flex flex-col items-center gap-6 lg:gap-8 p-4 lg:p-6">
            <img
              src={card.image.src}
              className={`object-cover ${card.image.className}`}
              alt={card.image.alt}
            />
            <div className="flex flex-col items-center gap-4 w-full">
              <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-black text-lg lg:text-[22px] text-center leading-tight lg:leading-[30px]">
                {card.title}
              </h3>
              <p className="w-full font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-base lg:text-lg text-center leading-relaxed lg:leading-[26px]">
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
