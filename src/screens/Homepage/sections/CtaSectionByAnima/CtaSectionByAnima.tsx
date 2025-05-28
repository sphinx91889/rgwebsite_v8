import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CtaSectionByAnima = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1280px] mx-auto my-8 rounded-[32px] overflow-hidden">
      <Card className="border-0 shadow-none">
        <CardContent className="p-0">
          <div className="relative w-full h-[428px] [background:linear-gradient(180deg,rgba(24,139,246,1)_0%,rgba(0,85,164,1)_100%)]">
            <div className="absolute inset-0 opacity-50">
              {/* Background overlay/pattern container */}
              <div className="relative h-full w-full">
                {/* Image removed as it was empty in the original code */}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-full px-4 text-center relative z-10">
              <div className="flex flex-col items-center gap-6 max-w-3xl">
                <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-4xl md:text-7xl tracking-[0] leading-tight">
                  Let&apos;s Build Something
                  <br />
                  Great Together
                </h2>

                <p className="font-['Poppins',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[26px]">
                  Schedule a free consultation and see how we can help you
                  scale.
                </p>
              </div>

              <Button 
                className="mt-10 bg-white text-[#188bf6] hover:bg-white/90 font-['Poppins',Helvetica] font-semibold text-lg px-8 py-4 h-auto rounded-xl"
                onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/T5JkOudaD7ASIlxFCl9j', '_blank')}
              >
                Book a consultation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
