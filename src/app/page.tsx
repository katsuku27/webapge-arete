"use client";

import Banner from "@/components/Banner";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/aVe0LvookTM?autoplay=1";

  return (
    <>
      <div className=" font-sans items-center bg-[#F5F5F5] space-y-24">
        <Banner onWatchVideoClick={() => setIsModalOpen(true)} />
        <Services />
        <WhyChooseUs />
      </div>

      {isModalOpen && (
        <VideoModal
          videoUrl={videoUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
