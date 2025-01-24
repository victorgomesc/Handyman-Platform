"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id?: number;
  imageUrl: string;
  title: string;
  descrip: string;
}

const SolutionsSection: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, title: "Eletricista", imageUrl: "/assets/trabalhador.webp", descrip: "alguma coisa" },
    { id: 2, title: "Pedreiro", imageUrl: "/assets/pedreiro.jpg", descrip: "alguma coisa" },
    { id: 3, title: "Encanador", imageUrl: "/assets/encanador.jpg", descrip: "alguma coisa" },
    { id: 4, title: "Diarista", imageUrl: "/assets/diarista.jpg", descrip: "alguma coisa" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newOrder = [...prevCards];
        const firstCard = newOrder.shift();
        if (firstCard) newOrder.push(firstCard);
        return newOrder;
      });
    }, 4000); // Reordena a cada 4 segundos
    return () => clearInterval(interval);
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 h-80 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          {cards.map((card) => (
            <motion.div
            key={card.id}
            className="w-full rounded-xl shadow-lg text-white font-bold flex flex-col items-center justify-start overflow-hidden"
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-60 object-cover"
                width={300}
                height={300}
                quality={100}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">
                {card.descrip}
              </p>
            </div>
          </div>
          </motion.div>
          ))}
        
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
