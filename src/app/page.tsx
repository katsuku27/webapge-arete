"use client";

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Aboutus from "@/components/AboutUs";
import BlogPost from "@/components/BlogPost";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Service from "@/components/Service";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useState, useRef } from "react";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const blogPostRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToWhyChooseUs = () => {
    // <-- BARU
    whyChooseUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToBlogPost = () => {
    // <-- BARU
    blogPostRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/aVe0LvookTM?autoplay=1";

  return (
    <>
      <Navbar
        onHomeClick={handleScrollToHome}
        onServicesClick={handleScrollToServices}
        onWhyChooseUsClick={handleScrollToWhyChooseUs} // <-- BARU
        onAboutClick={handleScrollToAbout}
        onBlogClick={handleScrollToBlogPost} // <-- BARU
        onContactClick={handleScrollToContact}
      />
      <div className=" font-sans items-center bg-[#F5F5F5] space-y-24">
        <div ref={homeRef}>
          <Banner
            onWatchVideoClick={() => setIsModalOpen(true)}
            onServicesClick={handleScrollToServices}
          />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={whyChooseUsRef}> {/* <-- BARU */}
          <WhyChooseUs />
        </div>
        <div ref={aboutRef}>
          <Aboutus />
        </div>
        <Service /> 
        <div ref={blogPostRef}> {/* <-- BARU */}
          <BlogPost />
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
      {isModalOpen && (
        <VideoModal videoUrl={videoUrl} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
