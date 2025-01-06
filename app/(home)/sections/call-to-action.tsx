"use client";

import { ArrowRightIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#0c0a09] to-[#1E1E1E] py-24"
    >
      <div className="container justify-center md:mx-auto md:pl-[10px]">
        <div className="relative mx-auto max-w-[540px]">
          <h2 className="bg-gradient-to-b from-white to-[#55B02E] bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
            Comece grátis hoje
          </h2>
          <p className="mt-5 text-center text-[22px] leading-[30px] tracking-tight text-white">
            Comece agora e transforme sua experiência com nossa IA avançada.
            Gerencie transações de forma ilimitada e obtenha insights
            personalizados que impulsionam resultados.
          </p>
          <motion.img
            src="/cash3.png"
            alt="graph image"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src="/cash4.png"
            alt="star image"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[29px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="mt-10 flex justify-center gap-2">
          <a href="#price">
            <button className="inline-flex items-center rounded-lg bg-black px-4 py-2 font-medium tracking-tight text-white">
              Comece Agora
            </button>
          </a>
          <a href="#features">
            <button className="inline-flex items-center gap-1 rounded-lg bg-transparent px-4 py-2 font-medium tracking-tight text-white">
              <span>Ver Mais</span>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
