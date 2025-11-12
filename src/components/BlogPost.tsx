"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const blogpost = [
  {
    id: 1,
    date: "10th Oct 2022",
    slides: [
      {
        title: "How to position your furniture for positivity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla...",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
      },
      {
        title: "Creating harmony in your living space",
        description:
          "Discover the secrets to arranging furniture that promotes positive energy and comfortable flow throughout your home...",
        image:
          "https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=800",
      },
      {
        title: "Feng Shui principles for modern homes",
        description:
          "Learn how ancient wisdom can be applied to contemporary interior design for better balance and tranquility...",
        image:
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800",
      },
    ],
  },
  {
    id: 2,
    date: "15th Oct 2022",
    slides: [
      {
        title: "Modern interior design trends for 2024",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla...",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
      },
      {
        title: "Minimalist aesthetics taking over",
        description:
          "Explore how less is more in contemporary design, with clean lines and functional beauty leading the way...",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800",
      },
      {
        title: "Sustainable materials in focus",
        description:
          "Eco-friendly choices are becoming the norm, combining style with environmental consciousness...",
        image:
          "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800",
      },
    ],
  },
  {
    id: 3,
    date: "20th Oct 2022",
    slides: [
      {
        title: "Creating a cozy workspace at home",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla...",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800",
      },
      {
        title: "Productivity boosting office setup",
        description:
          "Design your workspace to maximize focus and efficiency with ergonomic furniture and smart layouts...",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      },
      {
        title: "Work-life balance through design",
        description:
          "Separate your professional and personal spaces effectively for better mental health and productivity...",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800",
      },
    ],
  },
];

// const ImageCarousel = ({ images, slideTitles }: { images: string[]; slideTitles: string[] }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true },
//     [Autoplay({ delay: 3000, stopOnInteraction: false })]
//   );

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const updateCurrentSlide = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     emblaApi.on("select", updateCurrentSlide);
//     updateCurrentSlide();

//     return () => {
//       emblaApi.off("select", updateCurrentSlide);
//     };
//   }, [emblaApi, updateCurrentSlide]);

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   const scrollTo = useCallback((index: number) => {
//     if (emblaApi) emblaApi.scrollTo(index);
//   }, [emblaApi]);

//   return (
//     <div className="relative w-full h-56 overflow-hidden rounded-t-2xl group">
//       <div className="embla w-full h-full" ref={emblaRef}>
//         <div className="embla__container h-full flex">
//           {images.map((src, index) => (
//             <div className="embla__slide flex-[0_0_100%] min-w-0 relative" key={index}>
//               <img
//                 src={src}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={scrollPrev}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       <button
//         onClick={scrollNext}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollTo(index)}
//             className={`w-2 h-2 rounded-full transition-all ${
//               index === selectedIndex
//                 ? 'bg-white w-6'
//                 : 'bg-white/50 hover:bg-white/80'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const BlogCard = ({ post }: { post: (typeof blogpost)[0] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const currentSlide = post.slides[selectedIndex];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      {/* Image Carousel */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl group">
        <div className="embla w-full h-full" ref={emblaRef}>
          <div className="embla__container h-full flex">
            {post.slides.map((slide, index) => (
              <div
                className="embla__slide flex-[0_0_100%] min-w-0 relative"
                key={index}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {post.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 overflow-hidden">
        <div className="text-sm text-gray-500 mb-3">{post.date}</div>

        <div className="relative h-16 mb-3 overflow-hidden">
          <h3
            key={selectedIndex}
            className="text-xl font-bold text-gray-800 leading-tight animate-slide-left"
          >
            {currentSlide.title}
          </h3>
        </div>

        <div className="relative h-20 overflow-hidden">
          <p
            key={`desc-${selectedIndex}`}
            className="text-gray-600 text-sm leading-relaxed animate-slide-left-slow"
          >
            {currentSlide.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogPost = () => {
  return (
    <div className="w-full py-16 px-8 space-y-11">
      <style>{`
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-left {
          animation: slideLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-left-slow {
          animation: slideLeft 0.8s ease-out forwards;
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
          {blogpost.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
