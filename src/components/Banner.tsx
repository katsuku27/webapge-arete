import ImageCarousel from "./ImageCarousel";

interface BannerProps {
  className?: string;
}

const Banner = ({ className }: BannerProps) => {
  const carouselImages = [
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop",
  ];

  return (
    <div
      className={`w-full h-fit py-4 px-12 justify-between flex ${className}`}
    >
      <div className="w-[49%] flex flex-col gap-6 px-6 py-6 justify-center bg-white rounded-4xl">
        <div>
          <div className="text-6xl font-bold">
            Arete Logistik Indonesia
          </div>
          <div className="text-xl font-semibold">
            &quot;Your trusted partner in logistics solutions&quot;
          </div>
        </div>
        <div>
          With extensive expertise in forwarding, trucking, and customs
          clearance, we ensure your logistics operations run smoothly. Our
          dedicated team is committed to providing tailored solutions that meet
          your unique business needs.
        </div>
        <div className="flex gap-4 text-blue-600 font-semibold">
          <div className="hover:underline cursor-pointer">Learn More</div>
          <div className="hover:underline cursor-pointer">Get Quote</div>
        </div>
      </div>

      <div className="w-[49%] h-100 rounded-4xl">
        <ImageCarousel images={carouselImages} />
      </div>
    </div>
  );
};

export default Banner;
