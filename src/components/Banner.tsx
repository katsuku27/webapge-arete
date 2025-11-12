"use client";

import ImageCarousel from "./ImageCarousel";
import { ArrowRight, CirclePlay } from "lucide-react";

interface BannerProps {
  className?: string;
  onWatchVideoClick: () => void;
}

const Banner = ({ className, onWatchVideoClick }: BannerProps) => {

  const carouselImages = [
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop",
  ];

  return (
      <div
        className={`w-full h-fit py-4 px-12 justify-between flex ${
          className || ""
        }`}
      >
        <div className="w-[49%] flex flex-col gap-6 px-6 py-6 justify-center bg-white rounded-4xl">
          <div>
            <div className="text-6xl font-bold">Arete Logistik Indonesia</div>
            <div className="text-xl font-semibold">
              &quot;Your trusted partner in logistics solutions&quot;
            </div>
          </div>
          <div>
            With extensive expertise in forwarding, trucking, and customs
            clearance, we ensure your logistics operations run smoothly. Our
            dedicated team is committed to providing tailored solutions that
            meet your unique business needs.
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-10 px-6 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">
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

          
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
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

        {/* === Bagian Kanan: Image Carousel === */}
        <div className="w-[49%] relative lg:h-[600px] h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl transform rotate-3"></div>
          <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </div>
  );
};

export default Banner;
