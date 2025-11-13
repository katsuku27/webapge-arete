"use client";

import {
  Truck,
  Ship,
  Package,
  Container,
  Warehouse,
  ArrowLeft,
} from "lucide-react";
import { useState, useMemo } from "react";

interface ServicesProps {
  className?: string;
}

// Tipe data yang sama (menyimpan komponen, bukan elemen)
interface ServiceData {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  gridSpan: string;
  gridStart?: string;
  shortDescription: string;
  longDescription: string;
  secondaryDescription: string;
  features: string[];
}

const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Trucking",
    icon: Truck,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    gridSpan: "lg:col-span-2",
    shortDescription: "Reliable inter-city and inter-island trucking services.",
    longDescription:
      "Our full-service trucking solutions cover everything from small parcels to full truckloads (FTL) and less-than-truckloads (LTL). We ensure timely and safe delivery across all designated routes, supported by real-time GPS tracking for your peace of mind. We handle all logistics, permitting, and scheduling.",
    secondaryDescription: "",
    features: [],
  },
  {
    id: 2,
    title: "Custom Clearance",
    icon: Ship,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    gridSpan: "lg:col-span-2",
    shortDescription:
      "Efficient, safe customs clearance via strong port relationships.",
    longDescription:
      "Navigating customs can be complex. Our expert team handles all documentation, tariffs, and compliance checks to ensure your cargo passes through customs without delays. Leveraging our strong relationships with ports and shipping lines, we save you time and prevent costly hold-ups.",
    secondaryDescription: "",
    features: [],
  },
  {
    id: 3,
    title: "Forwarding",
    icon: Package,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    gridSpan: "lg:col-span-2",
    shortDescription:
      "Efficient and safe cargo transport with real-time tracking.",
    longDescription:
      "As a global freight forwarder, we coordinate your shipments via air, sea, and land. We find the most efficient and cost-effective routes, manage all logistics, book cargo space, and provide end-to-end visibility. You get one point of contact for your entire supply chain.",
    secondaryDescription: "",
    features: [],
  },
  {
    id: 4,
    title: "Container Rental",
    icon: Container,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    gridSpan: "lg:col-span-2",
    gridStart: "lg:col-start-2",
    shortDescription:
      "Various container sizes with flexible terms for transport or storage.",
    longDescription:
      "Whether for short-term projects or long-term storage, we offer a wide range of container sizes (20ft, 40GP, 40ft HC). All units are secure, weatherproof, and can be delivered directly to your site. We offer flexible rental terms from a few days to long-term leases.",
    secondaryDescription: "",
    features: [],
  },
  {
    id: 5,
    title: "Warehousing",
    icon: Warehouse,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    gridSpan: "lg:col-span-2",
    shortDescription:
      "Comprehensive warehousing solutions powered by modern infrastructure.",
    longDescription:
      "Our state-of-the-art warehouses offer more than just storage. We provide inventory management, order fulfillment, pick-and-pack, cross-docking, and distribution services. Our facilities are secure, climate-controlled, and fully integrated with our logistics network.",
    secondaryDescription: "",
    features: [],
  },
];

const Services = ({ className }: ServicesProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const activeService = useMemo(
    () => servicesData.find((s) => s.id === activeId) || null,
    [activeId]
  );

  return (
    <div
      className={`flex flex-col w-full text-black flex-1 px-10 ${
        className || ""
      }`}
    >
      {/* Bagian Header (tetap sama) */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Services
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          All-in-One Business Logistics
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Complete logistics services for your transportation and shipping.
        </p>
      </div>

      {/* 1. Kontainer Geser Utama */}
      {/* Menggunakan 'grid' untuk menumpuk Tampilan 1 dan Tampilan 2 di sel yang sama */}
      {/* 'overflow-hidden' tetap penting untuk animasi geser */}
      <div className="relative grid grid-cols-1 overflow-hidden">
        {/* TAMPILAN 1: GRID KARTU (DEFAULT) */}
        {/* 'col-start-1 row-start-1' menempatkannya di sel grid pertama */}
        <div
          className={`col-start-1 row-start-1 w-full
                      transition-transform duration-500 ease-in-out
            ${
              activeService
                ? "-translate-x-full" // Geser keluar ke kiri
                : "translate-x-0" // Posisi default
            }
          `}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 -mt-2">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`flex flex-col gap-6 rounded-xl bg-white shadow-lg 
                            hover:shadow-xl transition-all duration-300 
                            cursor-pointer ${service.gridSpan} ${
                  service.gridStart || ""
                }
                            hover:ring-2 hover:ring-blue-300`}
              >
                <div className="flex flex-col gap-1.5 px-6 pt-6">
                  <div
                    className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center mb-4 ${service.iconColor}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold leading-none">
                    {service.title}
                  </h4>
                </div>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{service.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TAMPILAN 2: LIST-DETAIL (SAAT AKTIF) */}
        {/* 'col-start-1 row-start-1' menempatkannya di sel grid yang SAMA dengan Tampilan 1 */}
        <div
          className={`col-start-1 row-start-1 w-full
                      transition-transform duration-500 ease-in-out
            ${
              activeService
                ? "translate-x-0" // Geser masuk dari kanan
                : "translate-x-full" // Sembunyi di kanan
            }
          `}
        >
          {/* 2. Layout 2 kolom (List di kiri, Detail di kanan) */}
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {/* Kolom Kiri: List Vertikal */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              <button
                onClick={() => setActiveId(null)}
                className="group flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to all services
              </button>

              <div className="space-y-2">
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveId(service.id)}
                    className={`flex items-center gap-4 w-full p-4 rounded-lg
                                text-left transition-colors duration-200
                                ${
                                  activeId === service.id
                                    ? "bg-blue-100 shadow-md"
                                    : "hover:bg-gray-100"
                                }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${service.iconBg} ${service.iconColor}
                                  flex-shrink-0 flex items-center justify-center`}
                    >
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-gray-900">
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Kolom Kanan: Detail Konten */}
            {/* 3. TIDAK ADA LAGI h-full atau overflow-y-auto */}
            <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-lg p-8 lg:p-12">
              {activeService && (
                <div className="flex flex-col gap-6">
                  <div
                    className={`w-16 h-16 rounded-lg ${activeService.iconBg} flex items-center justify-center ${activeService.iconColor}`}
                  >
                    <activeService.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {activeService.title}
                  </h2>
                  <p className="text-lg text-gray-700">
                    {activeService.longDescription}
                  </p>
                  <p className="text-lg text-gray-700">
                    {activeService.secondaryDescription}
                  </p>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-lg font-semibold mb-2">
                      Detailed Services Include:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {activeService.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
