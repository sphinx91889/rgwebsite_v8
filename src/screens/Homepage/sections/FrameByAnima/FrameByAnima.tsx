import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useState } from "react";

export const FrameByAnima = (): JSX.Element => {
  const navigate = useNavigate();
  const [services, setServices] = useState([
    { id: 1, name: "Branding & Design", selected: true },
    { id: 2, name: "SEO & Conversion Optimization", selected: false },
    { id: 3, name: "Web Development", selected: false },
    { id: 4, name: "Media & Content Production", selected: false },
    { id: 5, name: "Digital Strategy", selected: false },
  ]);

  const toggleService = (id: number) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, selected: !service.selected } : service
    ));
  };

  return ( 
    <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 py-16 px-4 lg:px-8">
      <div className="relative w-full max-w-[600px] h-[400px] lg:h-[500px] bg-neutral-50 rounded-[32px] overflow-hidden">
        <img className="w-full h-full object-contain" src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/681cf1fca418b3cf208a9d76.png" alt="Service showcase" />
      </div>

      <div className="flex flex-col w-full max-w-[600px] items-center lg:items-start gap-10">
        <div className="flex flex-col items-center lg:items-start gap-8 w-full">
          <div className="flex flex-col items-center lg:items-start gap-6 w-full">
            <h2 className="font-['Montserrat',Helvetica] font-bold text-black text-4xl lg:text-5xl leading-tight lg:leading-[56px] text-center lg:text-left">
              Our services – built to accelerate growth
            </h2>

            <p className="font-['Poppins',Helvetica] font-normal text-[#2f2f2f] text-lg leading-[26px] text-center lg:text-left">
              We help you scale your brand through strategy, design, and
              technology.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 w-full">
            {services.map((service) => (
              <Card
                onClick={() => toggleService(service.id)}
                key={service.id}
                className={`w-full border cursor-pointer transition-all duration-300 ${
                  service.selected
                    ? "bg-[#188bf614] border-[#188bf6] border-2"
                    : "bg-[#ffffff14] border-[#dddddd]"
                } rounded-xl shadow-none`}
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 px-6 py-3">
                    {service.selected ? (
                      <div className="relative w-[26px] h-[26px] bg-[#188bf6] rounded-md overflow-hidden border-[3px] border-solid border-[#188bf633]">
                        <img
                          className="absolute w-3.5 h-3.5 top-[3px] left-[3px]"
                          alt="Selected"
                          src="/frame-1.svg"
                        />
                      </div>
                    ) : (
                      <div className="relative w-5 h-5 bg-white rounded-md border border-solid border-[#cccccc] hover:border-[#188bf6] transition-colors duration-300" />
                    )}

                    <span
                      className={`font-['Poppins',Helvetica] text-[22px] leading-[30px] ${
                        service.selected
                          ? "font-semibold text-[#188bf6]"
                          : "font-normal text-[#2f2f2f]"
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-stretch gap-3 w-full">
          <Button 
            className="px-8 py-4 h-auto bg-[#188bf6] rounded-xl font-['Poppins',Helvetica] font-semibold text-lg"
            onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/T5JkOudaD7ASIlxFCl9j', '_blank')}
          >
            Book a consultation
          </Button>

          <Button
            variant="outline"
            className="px-8 py-4 h-auto bg-white rounded-xl border-[#188bf6] font-['Poppins',Helvetica] font-semibold text-[#188bf6] text-lg"
            onClick={() => navigate("/services")}
          >
            View all services
          </Button>
        </div>
      </div>
    </section>
  );
};
