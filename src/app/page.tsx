import Banner from "@/components/Banner";
import Image from "next/image";
import truckLogo from "../assets/images/truckLogo.jpg";
import customclearance from "../assets/images/CustomClearance.png";
import Aboutus from "@/components/AboutUs";
import Service from "@/components/Service";
import BlogPost from "@/components/BlogPost";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className=" font-sans items-center bg-[#F5F5F5]">
      <Banner />
      <main className="flex flex-col w-full flex-1 px-12">
        <div className="flex flex-col items-center justify-center w-full flex-1 my-12 text-center gap-6">
          <div className="text-small font-medium">Services</div>
          <div className="text-4xl font-extrabold w-[50%]">
            Comprehensive logistics solutions for your business
          </div>
          <div className="text-base w-[50%]">
            We offer a wide range of integrated logistics services to meet your
            transportation and shipping requirements.
          </div>
          <div className="flex justify-center w-full h-fit gap-3">
            <div className="bg-white w-[400px] h-fit rounded-2xl p-4 flex flex-col gap-1 items-center text-center">
              <div className="w-fit h-fit text-2xl font-bold mt-4">
                Trucking
              </div>
              <div className="w-fit h-fit text-sm">
                We provide reliable inter-city and inter-island trucking
                services, delivering your goods to ports and warehouses
              </div>
              <div>
                <Image
                  src={truckLogo}
                  alt="Trucking"
                  width={200}
                  height={150}
                />
              </div>
              <div className="w-fit h-fit text-sm text-blue-600 font-semibold cursor-pointer hover:underline">
                Learn More
              </div>
            </div>
            <div className="bg-white w-[400px] h-fit rounded-2xl p-4 flex flex-col gap-1 items-center text-center">
              <div className="w-fit h-fit text-2xl font-bold mt-4">
                Custom Clearance
              </div>
              <div className="w-fit h-fit text-sm">
                Leveraging our strong relationships with shipping lines and
                ports, we provide a professional and efficient customs clearance
                service that ensures the safe handling of your cargo
              </div>
              <div>
                <Image
                  src={customclearance}
                  alt="Custom Clearance"
                  width={200}
                  height={150}
                />
              </div>
              <div className="w-fit h-fit text-sm text-blue-600 font-semibold cursor-pointer hover:underline">
                Learn More
              </div>
            </div>
            <div className="bg-white w-[400px] h-fit rounded-2xl p-4 flex flex-col gap-1 items-center text-center">
              <div className="w-fit h-fit text-2xl font-bold mt-4">
                Forwarding
              </div>
              <div className="w-fit h-fit text-sm">
                Our forwarding services ensure that your cargo is transported
                efficiently and safely, with real-time tracking and updates
                throughout the shipping process.
              </div>
              <div>
                <Image
                  src={customclearance}
                  alt="Custom Clearance"
                  width={200}
                  height={150}
                />
              </div>
              <div className="w-fit h-fit text-sm text-blue-600 font-semibold cursor-pointer hover:underline">
                Learn More
              </div>
            </div>
            <div className="bg-white w-[400px] h-fit rounded-2xl p-4 flex flex-col gap-1 items-center text-center">
              <div className="w-fit h-fit text-2xl font-bold mt-4">
                Container Rental
              </div>
              <div className="w-fit h-fit text-sm">
                Arete provides container rentals for your transport and storage
                needs. We offer various sizes with flexible terms, from a few
                days to long-term.
              </div>
              <div>
                <Image
                  src={customclearance}
                  alt="Custom Clearance"
                  width={200}
                  height={150}
                />
              </div>
              <div className="w-fit h-fit text-sm text-blue-600 font-semibold cursor-pointer hover:underline">
                Learn More
              </div>
            </div>
            <div className="bg-white w-[400px] h-fit rounded-2xl p-4 flex flex-col gap-1 items-center text-center">
              <div className="w-fit h-fit text-2xl font-bold mt-4">
                Warehousing
              </div>
              <div className="w-fit h-fit text-sm">
                Arete provides comprehensive warehousing solutions, from storage
                and inventory management to distribution, leveraging modern
                infrastructure to boost your logistical efficiency and drive
                business growth.
              </div>
              <div>
                <Image
                  src={customclearance}
                  alt="Custom Clearance"
                  width={200}
                  height={150}
                />
              </div>
              <div className="w-fit h-fit text-sm text-blue-600 font-semibold cursor-pointer hover:underline">
                Learn More
              </div>
            </div>  
          </div>
        </div>

        <div className="flex justify-between w-full h-fit">
          <div className="flex flex-col w-[55%] gap-4 p-6 justify-end">
            <div className="">
              <div className="flex">
                <div className="material-symbols-outlined">icon</div>
                <div>
                  <div>Why choose us</div>
                  <div>
                    Professional logistics experts dedicated to your success.
                  </div>
                </div>
              </div>
              <div>
                <div>icon</div>
                <div>
                  <div>Reliable service</div>
                  <div>
                    Consistent and dependable transportation solutions that meet
                    your business requirements.
                  </div>
                </div>
              </div>
              <div>
                <div>icon</div>
                <div>
                  <div>Competitive pricing</div>
                  <div>
                    Cost-effective logistics services without compromising on
                    quality and efficiency.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>Learn More</div>
              <div>Get Quote</div>
            </div>
          </div>
          <div className=" w-[45%] h-100">Image</div>
        </div>
         <Aboutus />
         <Service />
         <BlogPost />
         <Footer />
      </main>
    </div>
  );
}
