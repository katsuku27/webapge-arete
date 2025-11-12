import { Truck, Ship, Package, Container, Warehouse } from "lucide-react";

interface ServicesProps {
  className?: string;
}

const Services = ({ className }: ServicesProps) => {
  return (
    <div className={`flex flex-col w-full flex-1 px-10 ${className || ""}`}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        {/* "Eyebrow" atau Subjudul */}
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Services
        </span>
        {/* Judul Utama */}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          All-in-One Business Logistics
        </h2>
        {/* Deskripsi */}
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Complete logistics services for your transportation and shipping.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 -mt-2">
        {/* Card 1: Trucking */}
        <div className="flex flex-col gap-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
          {/* Card Header */}
          <div className="flex flex-col gap-1.5 px-6 pt-6">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
              <Truck />
            </div>
            <h4 className="text-lg font-semibold leading-none">Trucking</h4>
          </div>
          {/* Card Content */}
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              We provide reliable inter-city and inter-island trucking services,
              delivering your goods to ports and warehouses
            </p>
          </div>
        </div>

        {/* Card 2: Custom Clearance */}
        <div className="flex flex-col gap-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
          {/* Card Header */}
          <div className="flex flex-col gap-1.5 px-6 pt-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Ship />
            </div>
            <h4 className="text-lg font-semibold leading-none">
              Custom Clearance
            </h4>
          </div>
          {/* Card Content */}
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              We provide efficient, safe customs clearance by leveraging strong
              relationships with ports and shipping lines.
            </p>
          </div>
        </div>

        {/* Card 3: Forwarding */}
        <div className="flex flex-col gap-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
          {/* Card Header */}
          <div className="flex flex-col gap-1.5 px-6 pt-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <Package />
            </div>
            <h4 className="text-lg font-semibold leading-none">Forwarding</h4>
          </div>
          {/* Card Content */}
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              Our forwarding services ensure that your cargo is transported
              efficiently and safely, with real-time tracking and updates
              throughout the shipping process.
            </p>
          </div>
        </div>

        {/* Card 4: Container Rental */}
        <div className="flex flex-col gap-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-start-2 lg:col-span-2">
          {/* Card Header */}
          <div className="flex flex-col gap-1.5 px-6 pt-6">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
              <Container />
            </div>
            <h4 className="text-lg font-semibold leading-none">
              Container Rental
            </h4>
          </div>
          {/* Card Content */}
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              Arete provides container rentals for your transport and storage
              needs. We offer various sizes with flexible terms, from a few days
              to long-term.
            </p>
          </div>
        </div>

        {/* Card 5: Warehousing */}
        <div className="flex flex-col gap-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
          {/* Card Header */}
          <div className="flex flex-col gap-1.5 px-6 pt-6">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
              <Warehouse />
            </div>
            <h4 className="text-lg font-semibold leading-none">Warehousing</h4>
          </div>
          {/* Card Content */}
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              Arete boosts your logistical efficiency and growth with
              comprehensive warehousing solutions, powered by modern
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
