"use client";
import { useState } from "react";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const profileText = `PT. Arete Logistics was established with the participation of private companies to actively contribute to Indonesia’s sustainable development through logistics activities. The goal is to be a reliable logistics partner and provide a competitive advantage through efficient, competent management.`;
  const missionText = `To become a first-class domestic and foreign company that is needed by the world, capable of cooperating with anyone' and working with good intentions for the development of the national economy.`;
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 text-sm font-semibold">
                Tentang Kami
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900">
                Bersama Mengembangkan Bisnis Anda
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Didirikan pada tahun 2010, kami terus berinovasi untuk
                memberikan solusi terbaik bagi perusahaan. Misi kami adalah
                membantu perusahaan Indonesia berkembang secara berkelanjutan
                dan bersaing di pasar internasional.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <circle cx="12" cy="12" r="6" strokeWidth="2" />
                      <circle cx="12" cy="12" r="2" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Profile
                  </h3>
                  <p className="text-gray-600">
                    {showMore
                      ? profileText
                      : `${profileText.substring(0, 150)}...`}
                  </p>
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-blue-600 font-medium mt-2 hover:underline"
                  >
                    {showMore ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Vision
                  </h3>
                  <p className="text-gray-600">
                    We provide fast, accurate, convenient and safe
                    transportation and logistics services that meet customer
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <circle cx="12" cy="12" r="6" strokeWidth="2" />
                      <circle cx="12" cy="12" r="2" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Mission
                  </h3>
                  <p className="text-gray-600">
                    {showMore
                      ? missionText
                      : `${missionText.substring(0, 150)}...`}
                  </p>
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-blue-600 font-medium mt-2 hover:underline"
                  >
                    {showMore ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:h-[600px]">
            <div className="h-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000"
                alt="Business Meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
