import Image from "next/image";
import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineSolution } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";


interface cardProps {
  icon?: string;
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard = ({ imageSrc, title, description }: cardProps) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
    <Image
      src={imageSrc}
      alt={title}
      className="w-full h-40 object-cover"
      width={300}
      height={300}
      quality={100}
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FeatureItem = ({ icon: Icon, title, description }: cardProps) => (
  <li className="flex items-start space-x-4">
    <Icon size={60} />
    <div>
      <h4 className="text-xl font-bold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </li>
);

const ServicesSection = () => {
  return (
    <section className="py-12 flex items-center justify-center px-6 bg-gray-50">
      <div className="container mx-auto w-[80vw] grid grid-cols-2 md:grid-cols-2 gap-8">
        {/* Coluna da Esquerda */}
        <div className="flex flex-col items-center justify-center">
          <div className="items-center justify-start">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Home And Businesses <br /> Installation Services
            </h2>
            <p className="text-gray-600 mb-6">
              We provide top-notch installation services for homes <br />
              and businesses, ensuring quality and customer satisfaction <br />
              every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <ServiceCard
              imageSrc="/assets/trabalhador.webp"
              title="540+"
              description="Satisfied Customers"
            />
            <ServiceCard
              imageSrc="/assets/pedreiro.jpg"
              title="540+"
              description="Satisfied Customers"
            />
            <ServiceCard
              imageSrc="/assets/encanador.jpg"
              title="180+"
              description="Projects Completed"
            />
            <ServiceCard
              imageSrc="/assets/diarista.jpg"
              title="180+"
              description="Professional Technicians"
            />
          </div>
        </div>

        {/* Coluna da Direita */}
        <div className="flex flex-col items-center justify-center">
          <ul className="space-y-6">
            <FeatureItem
              icon={RiCustomerService2Fill}
              title="Excellent Consultation"
              description="We understand your needs and provide tailored solutions."
            />
            <FeatureItem
              icon={AiOutlineSolution}
              title="Customized Solutions"
              description="Each project is planned and executed to meet your goals."
            />
            <FeatureItem
              icon={FaMoneyCheck}
              title="Affordable Pricing"
              description="Get premium services at reasonable prices."
            />
            <FeatureItem
              icon={MdDesignServices}
              title="All-in-One Service"
              description="From consultation to execution, we handle it all."
            />
          </ul>

          <div className="mt-8 text-center">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
              Contact Us
            </button>
            <p className="text-gray-600 mt-4">📞 000-123-456-789</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
