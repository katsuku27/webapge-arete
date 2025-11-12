"use client";

import Banner from "@/components/Banner";
import Image from "next/image";
import truckLogo from "../assets/images/truckLogo.jpg";
import customclearance from "../assets/images/CustomClearance.png";
import Aboutus from "@/components/AboutUs";
import BlogPost from "@/components/BlogPost";
import Footer from "@/components/Footer";
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

        <div className="flex justify-between w-full h-fit">
          <div className="flex flex-col w-[55%] gap-4 p-6 justify-end">
            <div className="">
              <div className="flex">
                <div className="material-symbols-outlined">icon</div>
                <div>
                  <div>Why choose us</div>
                  <div>
                    Professional logistics experts dedicated to your success.
                  </div>
                </div>
              </div>
              <div>
                <div>icon</div>
                <div>
                  <div>Reliable service</div>
                  <div>
                    Consistent and dependable transportation solutions that meet
                    your business requirements.
                  </div>
                </div>
              </div>
              <div>
                <div>icon</div>
                <div>
                  <div>Competitive pricing</div>
                  <div>
                    Cost-effective logistics services without compromising on
                    quality and efficiency.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>Learn More</div>
              <div>Get Quote</div>
            </div>
          </div>
          <div className=" w-[45%] h-100">Image</div>
        </div>
         <Aboutus />
         <Service />
         <BlogPost />
         <Footer />
      </main>
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
