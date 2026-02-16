"use client";
import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";
import { NavLink } from "react-router-dom";

export default function FeaturesSection() {
  return (
    <div
      id="features"
      className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-4 sm:py-6 md:py-8"
    >
      <SectionTitle
        text1="Features"
        text2="What Aivio Offers"
        text3="Everything you need to generate high-converting UGC videos & visuals."
      />
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-4 mt-12 sm:mt-16">
        {featuresData.map((feature: IFeature, index: number) => (
          <motion.div
            key={index}
            className={`${
              index === 1
                ? "p-px rounded-[13px] bg-linear-to-br from-pink-600 to-slate-800"
                : ""
            } w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]`}
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
            <div className="p-5 sm:p-6 rounded-xl space-y-3 sm:space-y-4 border border-slate-800 bg-slate-950 h-full">
              <div className="flex-shrink-0">{feature.icon}</div>
              <h3 className="text-base sm:text-lg font-medium text-white">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 line-clamp-3 pb-2 sm:pb-4">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-20 sm:mt-32 md:mt-40 relative mx-auto max-w-5xl">
        <div className="absolute -z-50 size-60 sm:size-100 -top-10 -left-10 sm:-left-20 aspect-square rounded-full bg-pink-500/40 blur-3xl"></div>
        <motion.p
          className="text-slate-300 text-base sm:text-lg text-left max-w-3xl px-2"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          Aivio transforms simple ideas into scroll-stopping UGC videos and
          visuals using AI. No complex editing. No creative blocks. Just instant
          content generation built for growth.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 sm:mt-8 gap-6 sm:gap-10">
          <motion.div
            className="md:col-span-2"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 70,
              mass: 1,
            }}
          >
            <img
              className="w-full h-auto rounded-lg"
              src="/assets/features-showcase-1.png"
              alt="features showcase"
              width={1000}
              height={500}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="md:col-span-1"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <img
              src="/assets/features-showcase-2.png"
              alt="features showcase"
              width={1000}
              height={500}
              loading="lazy"
              className="hover:-translate-y-0.5 transition duration-300 rounded-lg w-full h-auto"
            />
            <h3 className="text-xl sm:text-[24px] leading-7 sm:leading-7.5 text-slate-300 font-medium mt-4 sm:mt-6">
              Generate Content That Drives Engagement & Conversions{" "}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Aivio helps creators, marketers, and startups produce high-impact
              UGC ads and visuals in seconds.
            </p>
            <NavLink
              to="/create"
              className="group flex items-center gap-2 mt-3 sm:mt-4 text-pink-600 hover:text-pink-700 transition text-sm sm:text-base"
            >
              Learn more about the product
              <ArrowUpRight className="size-4 sm:size-5 group-hover:translate-x-0.5 transition duration-300" />
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
