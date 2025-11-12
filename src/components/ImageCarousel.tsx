"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slideData = [
  {
    title: "Nationwide Trucking",
    description: "Reliable inter-city and inter-island land transport for your cargo."
  },
  {
    title: "Hassle-Free Customs Clearance",
    description: "Efficient and professional customs processing to keep your shipments moving."
  },
  {
    title: "Global Freight Forwarding",
    description: "Complete management of your sea, air, and land shipments worldwide."
  },
  {
    title: "Flexible Container Rental",
    description: "Various container sizes available for your specific transport or storage needs."
  },
  {
    title: "Secure Warehousing",
    description: "Modern facilities for safe storage, inventory management, and distribution."
  }
];

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrentSlide = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateCurrentSlide);
    updateCurrentSlide();

    return () => {
      emblaApi.off("select", updateCurrentSlide);
    };
  }, [emblaApi, updateCurrentSlide]);

  return (
    <div className="embla w-full h-full relative rounded-4xl" ref={emblaRef}>
      <div className="embla__container h-full">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <Image
              src={src}
              alt={slideData[index]?.title || `Carousel image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
        <h3 className="text-2xl font-bold">
          {slideData[selectedIndex]?.title}
        </h3>
        <p className="mt-2 text-sm">{slideData[selectedIndex]?.description}</p>
      </div>
    </div>
  );
};

export default ImageCarousel;
