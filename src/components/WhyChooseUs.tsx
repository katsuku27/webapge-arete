import { Award, ShieldCheck, DollarSign } from "lucide-react";
import Image from "next/image";

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4 items-start">
      {/* Latar belakang ikon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
        {icon}
      </div>
      {/* Konten Teks */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform -rotate-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1758524572081-5a84e02768ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGlubm9jYXRpb258ZW58MXx8fHwxNzYyMjQxNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital technology innovation"
                width={1080}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              your Trusted Logistics Partner
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We leverage over 6 years of experience to be your trusted partner,
              specializing in integrated logistics—from forwarding and customs
              clearance to warehousing, container rental, and final delivery
              trucking.
            </p>
          </div>

          <div className="space-y-6">
            <FeatureItem
              icon={<Award className="w-6 h-6" />}
              title="Professional Experts"
              description="Professional logistics experts dedicated to your success."
            />
            <FeatureItem
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Reliable service"
              description="Consistent and dependable transportation solutions that meet your business requirements."
            />
            <FeatureItem
              icon={<DollarSign className="w-6 h-6" />}
              title="Competitive pricing"
              description="Cost-effective logistics services without compromising on quality and efficiency."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;