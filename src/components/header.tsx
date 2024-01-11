"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const CustomComponent = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const textToType = "Open-source Learning hub for NGO's.";
  const [typedText, setTypedText] = useState('');
  let currentIndex = 0;

  const typeText = () => {
    if (currentIndex < textToType.length) {
      setTypedText(textToType.slice(0, currentIndex + 1));
      currentIndex++;
      setTimeout(typeText, 60); // Velocidade de digitação (ajuste conforme necessário)
    }
  };

  useEffect(() => {
    if (showText) {
      typeText();
    }
  }, [showText]);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black w-full min-h-screen flex flex-col items-center justify-center text-white p-6 text-center"
      >
        <div className="mb-8">
          <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl">
            Open-source
          </h1>
          <h2 className="font-semibold text-5xl md:text-6xl lg:text-7xl">
            <span className="text-highlight">Plataforma de cursos & Comunidades</span>
          </h2>
          <h3 className="font-semibold text-5xl md:text-6xl lg:text-7xl">
            Para ONG&apos;s.
          </h3>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-xl md:text-2xl lg:text-3xl max-w-3xl mb-6 ${showText ? 'visible' : 'hidden'}`}
        >
Multiplicando Conhecimento, Transformando o Brasil: Sonhando Grande com ONGs Brasileiras.        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative bg-highlight hover:bg-highlight-dark text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out ${showText ? 'visible' : 'hidden'}`}
        >
          <span className="text-highlight">Acesse aqui a Lista de Espera </span>
          <span className="border-highlight border-2 absolute top-0 left-0 w-full h-full rounded-full opacity-50 animate-pulse"></span>
        </motion.button>
      </motion.div>
      <style jsx>{`
        .text-highlight {
          background-image: linear-gradient(45deg, #FFD100, #008000, #FFD100, #008000);
          background-size: 400% 400%;
          animation: gradientAnimation 8s linear infinite;
          -webkit-background-clip: text;
          color: transparent;
        }
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .bg-highlight {
          background-color: #00E5FF;
        }
        .hover\:bg-highlight-dark:hover {
          background-color: #00B2CC;
        }
        .border-highlight {
          background-image: linear-gradient(45deg, #FFD100, #008000, #FFD100, #008000);
          background-size: 400% 400%;
          animation: gradientAnimation 8s linear infinite;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          border: 2px solid transparent;
          -webkit-background-clip: text;
          color: transparent;
        }
        .animate-pulse {
          animation: pulseAnimation 2s infinite;
        }
        @keyframes pulseAnimation {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0.2;
          }
        }
        /* Responsive CSS styles */
        @media (max-width: 768px) {
          .font-semibold {
            font-weight: 500;
          }
        }
        .visible {
          display: block;
        }
        .hidden {
          display: none;
        }
      `}</style>
    </>
  );
};

export default CustomComponent;
