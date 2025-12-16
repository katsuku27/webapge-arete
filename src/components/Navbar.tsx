"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/logoWithoutText.png";

// 1. Definisikan Props baru
interface NavbarProps {
  onHomeClick?: () => void;
  onAboutClick?: () => void;
  onServicesClick?: () => void;
  onWhyChooseUsClick?: () => void; // <-- BARU
  onBlogClick?: () => void; // <-- BARU
  onLiveTrackingClick?: () => void;
  onContactClick?: () => void;
  onOurTeamsClick?: () => void; // <-- BARU
}

const Navbar = ({
  onHomeClick,
  onAboutClick,
  onServicesClick,
  onWhyChooseUsClick, // <-- BARU
  onBlogClick, // <-- BARU
  onContactClick,
  onLiveTrackingClick,
  onOurTeamsClick, // <-- BARU
}: NavbarProps) => {
  // Helper untuk me-render link atau tombol
  const renderNavLink = (label: string, href: string, handler?: () => void) => {
    const className = "hover:text-gray-700 cursor-pointer";

    if (handler) {
      return (
        <button onClick={handler} className={className}>
          {label}
        </button>
      );
    }
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  };

  return (
    <nav className="font-sans w-full bg-[#F5F5F5]">
      <div className="container mx-auto px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="https://Aretelogistik.co.id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex font-bold text-black w-fit h-fit"
        >
          <Image src={Logo} alt="Logo" width={70} height={70} />
        </a>
        {/* 3. Tambahkan link baru di sini */}
        <div className="hidden md:flex space-x-6 w-fit h-fit text-base">
          {renderNavLink("Home", "/", onHomeClick)}
          {renderNavLink("Services", "/services", onServicesClick)}
          {renderNavLink("Why Us", "/why-us", onWhyChooseUsClick)}{" "}
          {/* <-- BARU */}
          {renderNavLink("About", "/about", onAboutClick)}
          {renderNavLink("Blog", "/blog", onBlogClick)} {/* <-- BARU */}
          {renderNavLink("OurTeams", "/our-teams", onOurTeamsClick)} {/* <-- BARU */}
          {renderNavLink("Live Tracking", "/live-tracking", onLiveTrackingClick)}
        </div>

        {/* Tombol Contact */}
        <div>{renderNavLink("Contact", "/contact", onContactClick)}</div>
      </div>
    </nav>
  );
};

export default Navbar;
