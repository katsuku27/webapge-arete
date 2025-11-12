import Link from 'next/link';
import Image from "next/image";
import Logo from "../assets/images/logoWithoutText.png";

const Navbar = () => {
  return (
    <nav className="font-sans w-full bg-[#F5F5F5]">
      <div className="container mx-auto px-12 py-6 flex justify-between items-center">
        <Link href="/" className="flex font-bold text-black w-fit h-fit">
           <Image src={Logo} alt="Logo" width={70} height={70} />
        </Link>

        <div className="hidden md:flex space-x-6 w-fit h-fit text-base">
          <Link href="/" className=" hover:text-gray-700">
            Home
          </Link>
          <Link href="/about" className=" hover:text-gray-700">
            About
          </Link>
          <Link href="/services" className=" hover:text-gray-700">
            Services
          </Link>
        </div>

        <div>
          <button>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;