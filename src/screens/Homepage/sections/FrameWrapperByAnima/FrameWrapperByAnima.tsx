import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      title: "DJ Khaled - \"Welcome to My Hood\"",
      description:
        "Our team contributed to the production of DJ Khaled's hit \"Welcome to My Hood\", a high-energy anthem featuring Rick Ross, Lil Wayne, Plies, and T-Pain. This track, known for its heavy bass and hard-hitting sound, showcased our expertise in music production and engineering, helping to shape its signature sonic impact.",
      category: "Music Production",
      imageSrc: "https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d33fdd66810d9518510b94.jpeg",
      link: "https://www.youtube.com/embed/ZXIA-U2mL3U"
    },
    {
      id: 2,
      title: "REVU",
      description:
        "Our smart review system directs happy customers to public platforms while keeping negative feedback private—helping you build a stellar online reputation.",
      category: "Website + WebApp Development",
      imageSrc: "https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67ef0ce0f504ae0a59a08f51.png",
      imageStyle: "object-contain py-12",
      link: "https://revuyou.com"
    },
    {
      id: 3,
      title: "EliteUSMD",
      description:
        "EliteUSMD is a cutting-edge medical consulting platform designed to streamline legal and operational processes for medspa owners and healthcare professionals.",
      category: "Web Development",
      imageSrc: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681ce77a3d8df841c6062aa7.png",
      link: "https://eliteusmd.com"
    },
    {
      id: 4,
      title: "FSY4CC.com",
      description:
        "A website designed for the Florida Sate Youth For Christ Conference, featuring custom form integration to enhance its functionalities and provide data-driven insights.",
      category: "WebApp Development",
      imageSrc: "https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67da3abd8d1c312ffbd7478a.png",
      actionButton: {
        text: "Visit Site",
        link: "https://fsy4cc.com"
      }
    },
  ];

  return (
    <section className="w-full py-28 bg-neutral-50">
      <div className="flex flex-col max-w-[1280px] mx-auto items-center gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-bold text-5xl text-center leading-[56px] font-['Montserrat',Helvetica] text-black">
            See how we&apos;ve helped brands grow
          </h2>
          <p className="text-lg text-center leading-[26px] font-['Poppins',Helvetica] text-[#2f2f2f] font-normal">
            Real results from real partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="w-full h-[692px] rounded-[32px] overflow-hidden bg-white"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start gap-8 p-8">
                  <div className="flex flex-col items-start gap-6 w-full">
                    <div className="flex flex-col items-start gap-4 w-full">
                      <h3 className="font-bold text-2xl lg:text-[32px] leading-tight lg:leading-10 font-['Montserrat',Helvetica] text-black">
                        {project.title}
                      </h3>
                      <p className="font-normal text-base lg:text-lg leading-relaxed lg:leading-[26px] font-['Poppins',Helvetica] text-[#2f2f2f]">
                        {project.description}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="px-6 py-2.5 bg-neutral-50 rounded-xl border border-[#dddddd] font-normal text-base leading-6 font-['Poppins',Helvetica] text-[#2f2f2f]"
                    >
                      {project.category}
                    </Badge>
                    {project.actionButton && (
                      <Button
                        className="mt-4 bg-[#188bf6] text-white hover:bg-[#0070e0]"
                        onClick={() => window.open(project.actionButton.link, '_blank')}
                      >
                        {project.actionButton.text}
                      </Button>
                    )}
                  </div>
                  <div className="w-full h-[420px] bg-neutral-50 rounded-3xl overflow-hidden">
                    <img
                      src={project.imageSrc}
                      className={`w-full h-full object-cover object-center ${project.imageStyle || ''}`}
                      alt="Project image"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <Button
          variant="outline"
          className="px-8 py-4 rounded-xl border border-[#188bf6] text-[#188bf6] font-semibold text-lg leading-[26px] font-['Poppins',Helvetica]"
        >
          View all projects
        </Button>
      </div>
    </section>
  );
};
