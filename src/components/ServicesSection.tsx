import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coluna da Esquerda */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Home And Businesses <br /> Installation Services
          </h2>
          <p className="text-gray-600 mb-6">
            We provide top-notch installation services for homes and businesses,
            ensuring quality and customer satisfaction every step of the way.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Bloco de Serviço */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/assets/trabalhador.webp"
                alt="Service 1"
                className="w-full h-40 object-cover"
                width={300}
                height={300}
                quality={100}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">540+</h3>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>
            </div>

            {/* Bloco de Serviço */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
                src="/assets/trabalhador.webp"
                alt="Service 1"
                className="w-full h-40 object-cover"
                width={300}
                height={300}
                quality={100}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">180+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>

            {/* Bloco de Serviço */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
                src="/assets/trabalhador.webp"
                alt="Service 1"
                className="w-full h-40 object-cover"
                width={300}
                height={300}
                quality={100}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">180+</h3>
                <p className="text-gray-600">Professional Technicians</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita */}
        <div>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
            <Image
                src="/assets/trabalhador.webp"
                alt="Service 1"
                className="w-full h-40 object-cover"
                width={300}
                height={300}
                quality={100}
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Excellent Consultation
                </h4>
                <p className="text-gray-600">
                  We understand your needs and provide tailored solutions.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
            <Image
                src="/assets/trabalhador.webp"
                alt="Service 1"
                className="w-full h-40 object-cover"
                width={300}
                height={300}
                quality={100}
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Customized Solutions
                </h4>
                <p className="text-gray-600">
                  Each project is planned and executed to meet your goals.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
            <Image
                src="/assets/trabalhador.webp"
                alt="Service 1"
                className="w-full h-40 object-cover"
                width={300}
                height={300}
                quality={100}
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Affordable Pricing
                </h4>
                <p className="text-gray-600">
                  Get premium services at reasonable prices.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
            <Image
                src="/assets/trabalhador.webp"
                alt="Service 1"
                className="w-full h-40 object-cover"
                width={300}
                height={300}
                quality={100}
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  All-in-One Service
                </h4>
                <p className="text-gray-600">
                  From consultation to execution, we handle it all.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
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
