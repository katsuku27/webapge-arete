'use client';

import React, { useState } from 'react';
import { MapPin, Bell, Smartphone, BarChart3, Eye, Clock, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const LiveTracking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'details' | 'analytics'>('map');


  const TRACKING_IMAGES = {
    map: "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1765856262/arete/maparete2_wxlrbi.jpg",
    
    details: "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1765856262/arete/mapparete3_wcfdux.jpg",
    
    analytics: "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1765856263/arete/map_arete1_iwev6j.jpg"
  };

  const features: Feature[] = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "GPS Real-Time Tracking",
      description: "Monitor vehicles directly with high accuracy"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Detailed Route History",
      description: "Complete shipping history with analytical data"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Automatic Notifications",
      description: "Automatic notifications for every shipment update"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-Friendly",
      description: "Monitor shipments from anywhere, anytime"
    }
  ];

  const stats: Stat[] = [
    { 
      label: "Active Vehicles", 
      value: "20+", 
      icon: <MapPin className="w-5 h-5" /> 
    },
    { 
      label: "On-Time Delivery", 
      value: "98%", 
      icon: <Clock className="w-5 h-5" /> 
    },
    { 
      label: "Routes Tracked", 
      value: "5000+", 
      icon: <BarChart3 className="w-5 h-5" /> 
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'map':
        return (
          <div className="relative">
            <div className="aspect-video relative bg-gray-100">
              <Image
                src={TRACKING_IMAGES.map}
                alt="Live GPS Tracking Map - Real-time vehicle monitoring"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
                quality={85}
              />
            </div>
            
            {/* Live Indicator */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 shadow-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span>
              LIVE
            </div>

            {/* Vehicle Info Card */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white/95 backdrop-blur rounded-lg shadow-xl p-3 sm:p-4 border border-gray-200">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
                <div>
                  <p className="text-xs text-gray-500 font-medium">Vehicle ID</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">B 9964 UWV</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Status</p>
                  <p className="text-xs sm:text-sm font-semibold text-green-600">En Route</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">ETA</p>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600">2h 15m</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'details':
        return (
          <div className="relative">
            <div className="aspect-video relative bg-gray-100">
              <Image
                src={TRACKING_IMAGES.details}
                alt="Route Details Overview - Complete journey tracking"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                quality={85}
              />
            </div>

            {/* Route Info Overlay */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white/95 backdrop-blur rounded-lg shadow-xl p-3 sm:p-4 border border-gray-200">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Origin:</span>
                    <span className="text-gray-600">Subang</span>
                  </div>
                  <div className="text-gray-500">135 km</div>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">Destination:</span>
                    <span className="text-gray-600">Semarang</span>
                  </div>
                  <div className="text-gray-500">~3h drive</div>
                </div>
              </div>
            </div>

            {/* Multiple Vehicles Badge */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              3 Vehicles Active
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="relative">
            <div className="aspect-video relative bg-gray-100">
              <Image
                src={TRACKING_IMAGES.analytics}
                alt="Analytics Dashboard - Performance metrics"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                quality={85}
              />
            </div>

            {/* Analytics Stats Overlay */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white/95 backdrop-blur rounded-lg shadow-xl p-3 sm:p-4 border border-gray-200">
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Avg Speed</p>
                  <p className="text-sm sm:text-lg font-bold text-blue-600">65 km/h</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Distance</p>
                  <p className="text-sm sm:text-lg font-bold text-green-600">87 km</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Stops</p>
                  <p className="text-sm sm:text-lg font-bold text-orange-600">2</p>
                </div>
              </div>
            </div>

            {/* Performance Badge */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 shadow-lg">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
              On Schedule
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Transparency & Technology
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 px-4">
            Track Your Shipment in Real-Time
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Complete transparency and peace of mind at every step of your shipping journey
          </p>
        </div>

        {/* Stats Bar - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 mt-1">{stat.value}</p>
                </div>
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg text-blue-600">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Responsive Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Map Visualization with Multiple Tabs */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Tab Navigation - 3 Tabs */}
              <div className="bg-gray-50 border-b border-gray-200 p-3 sm:p-4 flex gap-2">
                <button
                  onClick={() => setActiveTab('map')}
                  className={`flex-1 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    activeTab === 'map' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="View live map"
                >
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Live Map</span>
                  <span className="inline sm:hidden">Live</span>
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`flex-1 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    activeTab === 'details' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="View route details"
                >
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Routes</span>
                  <span className="inline sm:hidden">Route</span>
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`flex-1 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    activeTab === 'analytics' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="View analytics"
                >
                  <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Analytics</span>
                  <span className="inline sm:hidden">Stats</span>
                </button>
              </div>

              {/* Dynamic Content Based on Active Tab */}
              <div className="relative">
                {renderTabContent()}
              </div>
            </div>

            {/* Floating Badge - Responsive */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transform rotate-12">
              <p className="font-bold text-xs sm:text-sm">GPS Enabled</p>
            </div>
          </div>

          {/* Right Side - Features - Responsive */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Monitor Every Detail of Your Shipment
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
              With our advanced tracking system, you get full visibility into every shipment. No more uncertainty—just transparency and complete control.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-blue-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button - Responsive */}
            {/* <div className="mt-6 sm:mt-8">
              <button 
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                aria-label="Request tracking demo"
              >
                Request Tracking Demo
              </button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3">
                Lihat sendiri bagaimana sistem tracking kami bekerja
              </p>
            </div> */}
          </div>
        </div>

        {/* Bottom Trust Banner - Responsive */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white shadow-xl">
          <p className="text-xl sm:text-2xl font-bold mb-2">Transparency is Our Commitment</p>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto px-4">
            Every shipment comes with a unique tracking code that you can access 24/7 through our platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveTracking;