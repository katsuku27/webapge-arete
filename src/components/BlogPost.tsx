import { useState, useEffect } from "react";

const blogpost = [
  {
    id: 1,
    date: "10th Oct 2022",
    slides: [
      {
        title: "Photo of a Lineup of Trucks (ready-to-operate fleet)",
        description:
          "A reliable fleet, dependable service.With well-maintained and ready-to-operate vehicles, we ensure that every delivery is on time, safe, and efficient.Customer trust is our main motivation in maintaining operational quality on every trip.",
        image:
          "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763002705/arete/WhatsApp_Image_2025-11-12_at_20.52.47_xx0ftn.jpg",
      },
      {
      title: "Office Team Photo (togetherness)",
        description:
          "Solid collaboration is the foundation of every big step.This moment of togetherness reflects our work ethic, professionalism, and commitment to continue providing the best logistics services to all customers.Together, we grow — stronger, more resilient, and better prepared to face future challenges.",
        image:
          "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763002704/arete/WhatsApp_Image_2025-11-12_at_20.52.45_1_fw3em1.jpg",
      },
      {
        title: "Night Truck Photo (night operations)",
        description:
          "Unlimited dedication, even at night.Behind every successful logistics journey, there is a team and fleet that works tirelessly to ensure goods arrive on schedule.Arete Logistics is committed to providing reliable logistics solutions — anytime, anywhere.",
        image:
          "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763002703/arete/WhatsApp_Image_2025-11-12_at_20.52.44_ikzrv1.jpg",
      },
    ],
  },
  {
    id: 2,
    date: "15th Oct 2022",
    slides: [
      {
        title: "Happy Anniversary to All of Us!",
        description:
          "Thank you for the hard work, laughter, and togetherness that have colored our journey.Every challenge we’ve overcome has made our team stronger Let’s continue to grow, support one another, and create more meaningful moments in the years ahead! 💙",
        image:
          "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763017981/arete/WhatsApp_Image_2025-11-13_at_14.12.07_wrk5va.jpg",
      },
      {
        title: "Happy Company Anniversary!",
        description:
          "Each year brings new stories, challenges, and achievements.This journey wouldn’t be meaningful without the contribution and teamwork of every individual.May our shared spirit continue to shine, leading us toward greater success in the years to come",
        image:
          "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763003929/arete/WhatsApp_Image_2025-11-13_at_10.15.39_3_ctagvo.jpg",
      },
    ],
  },
  {
    id: 3,
    date: "20th Oct 2022",
    slides: [
      {
        title: "Head Office",
        description:
          "Jl. Gading Kirana Timur IX No. 22 RT. 018 RW. 008, Kelapa Gading Barat, Kelapa Gading, Jakarta Utara, DKI Jakarta 14240",
        image:
          "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763009338/arete/6163cbc9123f1_fw71dn.png",
      },
      {
        title: "Garage",
        description:
          "Jl. Cakung Cilincing Raya RT. 009 RW. 006,Cakung Barat, Cakung, Jakarta Timur, DKI Jakarta 13910",
        image:
          "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763009335/arete/6163cbc91231f1_kczmob.png",
      },
      {
        title: "Vehicle Facilities",
        description:
          `5 Units Isuzu GVR 340 PTH size 40 Feet, 11 Units Hino 260 PTH size 40 Feet.`,
        image:
          "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763009336/arete/ada_xwwhwo.png",
      },
    ],
  },
];

const allSlides = blogpost.flatMap(post => 
  post.slides.map(slide => ({
    ...slide,
    date: post.date
  }))
);

const BlogPost = () => {
  const [currentGlobalIndex, setCurrentGlobalIndex] = useState(0);
  const [showMore, setShowMore] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGlobalIndex((prev) => (prev + 1) % allSlides.length);
      setShowMore({});
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSlideForCard = (cardIndex: number) => {
    const slideIndex = (currentGlobalIndex + cardIndex) % allSlides.length;
    return allSlides[slideIndex];
  };

  const toggleShowMore = (cardIndex: number) => {
    setShowMore(prev => ({
      ...prev,
      [cardIndex]: !prev[cardIndex]
    }));
  };

  const MAX_LENGTH = 120;

  return (
    <div className="w-full py-16 px-8">
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide {
          animation: slideInRight 0.5s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-blue-500 text-sm font-semibold mb-4">
            Special Moments at Our Company
          </div>

          <div className="text-3xl font-bold text-gray-800 mb-4">
            Moments of teamwork, growth, and shared inspiration.
          </div>

          <div className="text-gray-600 max-w-2xl mx-auto">
            Because true success starts with a united and joyful team.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((cardIndex) => {
            const slide = getSlideForCard(cardIndex);
            const isLongDescription = slide.description.length > MAX_LENGTH;
            const isShowingMore = showMore[cardIndex] || false;
            
            const displayDescription = isShowingMore
              ? slide.description
              : slide.description.slice(0, MAX_LENGTH) + (isLongDescription ? "..." : "");

            return (
              <div 
                key={`${currentGlobalIndex}-${cardIndex}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow animate-slide"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">
                    {slide.date}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-3 min-h-[3.5rem]">
                    {slide.title}
                  </h3>

                  <div className="text-gray-600 text-sm leading-relaxed">
                    <p className="mb-2">{displayDescription}</p>
                    {isLongDescription && (
                      <button
                        onClick={() => toggleShowMore(cardIndex)}
                        className="text-blue-500 hover:text-blue-700 font-semibold text-sm transition-colors"
                      >
                        {isShowingMore ? "Show less" : "Show more"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;