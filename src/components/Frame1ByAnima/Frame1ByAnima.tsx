@@ .. @@
       image: {
         src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8ngdMjJjmckUW3DffAfv/media/67d33e585f250ce584dcfd26.jpeg",
         alt: "Billboard Top Charted",
-        className: "w-[160px] h-[42px] lg:w-[199px] lg:h-[53px] rounded-md",
+        className: "w-[160px] h-[42px] lg:w-[199px] lg:h-[53px] rounded-md mt-[3px]",
       },
       title: "6× Billboard Top #1 Charted",
       description:
@@ .. @@
             <img
               src={card.image.src}
               className={`object-cover ${card.image.className}`}
-              alt={card.image.alt}
+              alt={card.image.alt} 
             />
             <div className="flex flex-col items-center gap-4 w-full">
               <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-black text-lg lg:text-[22px] text-center leading-tight lg:leading-[30px]">
