"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  // Captura a progressão do scroll dentro da seção
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Ajuste para checar o comportamento do scroll
  });

  // Transforma o progresso do scroll em deslocamento vertical
  const translateY = useTransform(scrollYProgress, [0, 1], [300, -300]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative overflow-x-clip bg-gradient-to-b from-[#1E1E1E] to-[#0c0a09] px-5 py-24"
    >
      <div className="container justify-center md:mx-auto md:pl-[10px]">
        {/* Texto e Título */}
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border border-[#5ce65c]/10 px-3 py-1 text-sm tracking-tight">
              Eficiência
            </div>
          </div>
          <h2 className="mt-5 bg-gradient-to-b from-white to-[#55B02E] bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
            A melhor forma de acompanhar suas finanças
          </h2>
          <p className="mt-5 text-center text-[22px] leading-[30px] tracking-tight text-white">
            Controle suas transações com eficiência e inteligência com nossa IA
          </p>
        </div>

        {/* Imagem Showcase */}
        <div className="relative flex justify-center">
          <Image
            src="/showcase1.png"
            alt="Product Image"
            className="mt-10"
            width={1300}
            height={1300}
            priority
          />

          {/* Imagem Animada */}
          <motion.div
            style={{ y: translateY }} // Aplica o deslocamento vertical
            className="absolute -right-36 -top-20 hidden md:block"
          >
            <Image
              src="/coin.png"
              alt="coin"
              width={262}
              height={262}
              priority
            />
          </motion.div>

          <motion.img
            src="/cash2.png"
            alt="cashhh"
            height={268}
            width={268}
            className="absolute -left-36 bottom-24 hidden md:block"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
