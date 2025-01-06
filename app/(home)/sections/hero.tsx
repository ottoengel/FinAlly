"use client";
import { ArrowRightIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      id="about"
      className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#ccffcc,#0c0a09_100%)] px-5 pb-20 pt-8 md:p-24 md:pb-10 md:pt-5"
    >
      <div className="container">
        <div className="items-center md:flex">
          {/* esquerda */}
          <div className="md:w-[478px] lg:w-[1024px] lg:px-20 lg:pl-40">
            <div className="inline-flex rounded-lg border border-[#5ce65c]/10 px-3 py-1 text-sm tracking-tight">
              Versão 1.0
            </div>
            <h1 className="mt-6 bg-gradient-to-b from-white to-[#55B02E] bg-clip-text text-7xl font-bold tracking-tighter text-transparent md:text-8xl lg:text-9xl">
              FinAlly
            </h1>
            <p className="mt-6 text-xl tracking-tight text-white">
              Plataforma de gestão financeira que controla transferências e
              utiliza IA para analisar dados, fornecendo insights e sugestões
              para otimização.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <Link href="/login">
                <button className="inline-flex items-center rounded-lg bg-black px-4 py-2 font-medium tracking-tight text-white">
                  Comece Agora
                </button>
              </Link>
              <button className="inline-flex items-center gap-1 rounded-lg bg-transparent px-4 py-2 font-medium tracking-tight text-white">
                <a href="#features">Ver Mais</a>
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* imagem direita */}
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <motion.img
              src="/dollarh.png"
              alt="Dollar"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:pl-[150px]"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              width={300}
              height={600}
            />
            <motion.img
              src="/coin.png"
              alt="coin"
              width={220}
              height={220}
              className="-left-32 -top-8 hidden md:absolute md:block"
              style={{
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
