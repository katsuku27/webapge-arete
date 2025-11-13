"use client";

import ImageCarousel from "./ImageCarousel";
import { ArrowRight, CirclePlay } from "lucide-react";
import Warehouse from "../assets/images/warehouse.jpg";
import Container from "../assets/images/container.jpg";
import Forwading from "../assets/images/forwading.jpg";
import Trucking from "../assets/images/trucking.jpg";


interface BannerProps {
  className?: string;
  onWatchVideoClick: () => void;
  onServicesClick: () => void;
}

const Banner = ({
  className,
  onWatchVideoClick,
  onServicesClick,
}: BannerProps) => {
  const carouselImages = [
    Trucking,
    "https://seaaero.co.th/wp-content/uploads/2018/10/clearance.jpg",
    Forwading,
    Container,
    Warehouse,
  ];

  const imageSrcs = carouselImages.map((image) => {
    // Jika 'image' adalah string (URL), kembalikan apa adanya.
    // Jika bukan (objek Warehouse), kembalikan properti 'src'-nya.
    return typeof image === "string" ? image : image.src;
  });

  return (
    <div
      className={`w-full h-fit
        flex flex-col gap-8 py-6 px-6 text-black
        lg:flex-row lg:justify-between lg:gap-0 lg:py-4 lg:px-12
        ${className || ""}`}
    >
      <div
        className="w-full lg:w-[49%] flex flex-col gap-6 p-4 sm:p-6 justify-center
                   bg-white rounded-3xl
                   order-2 lg:order-1"
      >
        <div>
          <div className="text-4xl md:text-6xl font-bold">
            Arete Logistik Indonesia
          </div>
          <div className="text-lg md:text-xl font-semibold">
            &quot;Your trusted partner in logistics solutions&quot;
          </div>
        </div>

        <div>
          With extensive expertise in forwarding, trucking, and customs
          clearance, we ensure your logistics operations run smoothly. Our
          dedicated team is committed to providing tailored solutions that meet
          your unique business needs.
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onServicesClick}
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-10 px-6 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={onWatchVideoClick}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-10 px-6 rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-50"
          >
            <CirclePlay className="h-5 w-5" />
            Watch Introduction Video
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200">
          <div>
            <div className="text-2xl font-bold text-blue-600">20+</div>
            <div className="text-gray-600">Vehicles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">6+</div>
            <div className="text-gray-600">years of experience</div>
          </div>
        </div>
      </div>

      <div
        className="w-full lg:w-[49%] relative 
                   order-1 lg:order-2 
                   h-[300px] md:h-[400px] lg:h-[600px]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl transform rotate-3"></div>
        <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
          <ImageCarousel images={imageSrcs} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
