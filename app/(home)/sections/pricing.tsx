"use client";

import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";

const pricingTiers = [
  {
    title: "Plano Básico",
    monthlyPrice: 0,
    buttonText: "Comece grátis",
    popular: false,
    inverse: false,
    features: ["Apenas 10 transações por mês"],
  },
  {
    title: "Plano Pro",
    monthlyPrice: 19,
    buttonText: "Assine agora",
    popular: true,
    inverse: true,
    features: ["Transações ilimitadas", "Relatórios de IA"],
  },
];

const Pricing = () => {
  return (
    <section id="price" className="overflow-x-clip py-24">
      <div className="container justify-center md:mx-auto md:pl-[10px]">
        <div className="mx-auto max-w-[640px]">
          <h2 className="bg-gradient-to-b from-white to-[#55B02E] bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
            Preço
          </h2>
          <p className="mt-5 text-center text-[20px] leading-[30px] tracking-tight text-white/70">
            Desbloqueie todo o potencial do nosso sistema! <br />
            <strong className="text-white/90">Plano Básico:</strong> Comece de
            graça com até{" "}
            <strong className="text-[#A3E635]">10 transações mensais</strong>.{" "}
            <br />
            <strong className="text-white/90">Plano Pro:</strong> Acesse{" "}
            <strong className="text-[#A3E635]">transações ilimitadas</strong> e
            receba{" "}
            <strong className="text-[#A3E635]">análises personalizadas</strong>{" "}
            com a nossa IA avançada.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index,
            ) => (
              <div
                key={index}
                className={twMerge(
                  "w-full max-w-xs rounded-3xl border border-[#E5E7EB] bg-[#F3F4F6] p-10 shadow-[0_7px_14px_#EAEAEA]",
                  inverse === true &&
                    "border-[#A3E635] bg-[#FFFFFF] text-black/60",
                )}
              >
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-black/50">{title}</h3>
                  {popular === true && (
                    <div className="inline-flex rounded-xl border border-black/20 px-4 py-1.5 text-sm">
                      <motion.span
                        animate={{
                          backgroundPositionX: "-100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#00ffff,#4052d6,#70b8a2,#8479d9,#b5a8ef,#00ffff,#4052d6,#70b8a2,#8479d9,#b5a8ef)] bg-clip-text font-medium text-transparent [background-size:200%]"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="mt-[30px] flex items-baseline gap-1">
                  <span className="text-4xl font-bold leading-none tracking-tighter text-black">
                    R${monthlyPrice}
                  </span>
                  <span className="font-bold tracking-tight text-black/50">
                    /mês
                  </span>
                </div>
                <Link href="/subscription">
                  <button className="mt-[30px] inline-flex w-full items-center rounded-lg bg-black px-4 py-2 font-medium tracking-tight text-white">
                    {buttonText}
                  </button>
                </Link>
                <ul className="mt-8 flex flex-col gap-5">
                  {features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-4 text-sm text-black"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
