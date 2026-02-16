"use client";
import SectionTitle from "../components/SectionTitle";
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
  return (
    <div
      id="pricing"
      className="px-2 sm:px-4 md:px-6 lg:px-12 xl:px-24 py-4 sm:py-6 md:py-8"
    >
      <SectionTitle
        text1="Pricing"
        text2="Simple, Transparent Pricing"
        text3="Choose a plan that fits your creative needs. Scale effortlessly as your content & campaigns grow with Aivio."
      />

      <div className="flex flex-wrap items-stretch justify-center gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
        {pricingData.map((plan: IPricing, index: number) => (
          <motion.div
            key={index}
            className={`w-full sm:w-[calc(50%-1rem)] lg:w-72 text-center border border-pink-950 p-5 sm:p-6 pb-12 sm:pb-16 rounded-xl ${
              plan.mostPopular ? "bg-pink-950 relative" : "bg-pink-950/30"
            }`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            {plan.mostPopular && (
              <p className="absolute px-3 text-xs sm:text-sm -top-3.5 left-3.5 py-1 bg-pink-400 rounded-full text-black font-medium">
                Most Popular
              </p>
            )}
            <p className="font-semibold text-base sm:text-lg">{plan.name}</p>
            <h1 className="text-2xl sm:text-3xl font-semibold mt-2">
              ${plan.price}
              <span className="text-gray-500 font-normal text-sm">
                /{plan.period}
              </span>
            </h1>
            <ul className="list-none text-slate-300 mt-5 sm:mt-6 space-y-2 text-left">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm sm:text-base"
                >
                  <CheckIcon className="size-4 sm:size-4.5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`w-full py-2.5 rounded-md font-medium mt-6 sm:mt-7 transition-all text-sm sm:text-base active:scale-95 ${
                plan.mostPopular
                  ? "bg-white text-pink-600 hover:bg-slate-200"
                  : "bg-pink-500 hover:bg-pink-600"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
