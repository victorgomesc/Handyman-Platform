import Image from "next/image";
import React from "react";

const SolutionsSection = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-yellow-400 to-white">
      <div className="container mx-auto">
        {/* Título e Descrição */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ideal Solution For Time Consuming Problems
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our services are designed to help you save time and focus on what
            matters most. Whether its repair, installation, or consulting, we
            provide the expertise you need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Factory Retrofitting
              </h3>
              <p className="text-gray-600">
                The best solutions for factory repairs and upgrades.
              </p>
            </div>
          </div>

          {/* Card 2 */}
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Anti-Rust Coating Solutions
              </h3>
              <p className="text-gray-600">
                Protect your equipment with durable anti-rust coatings.
              </p>
            </div>
          </div>

          {/* Card 3 */}
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Cabinet Making
              </h3>
              <p className="text-gray-600">
                Custom cabinets designed and built for your needs.
              </p>
            </div>
          </div>

          {/* Card 4 */}
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Weather Proofing
              </h3>
              <p className="text-gray-600">
                Keep your building protected from harsh weather conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="text-center mt-10">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 mr-4">
            Get a Quote
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
