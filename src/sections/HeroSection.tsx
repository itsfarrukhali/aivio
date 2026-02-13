"use client";
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";

export default function HeroSection() {
  const specialFeatures = [
    "Generate high-converting UGC ads",
    "AI-powered scripts & visuals",
    "No editing skills required",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-0">
      <div className="absolute top-20 sm:top-30 -z-10 left-1/4 size-48 sm:size-72 bg-pink-600 blur-[200px] sm:blur-[300px]"></div>
      <motion.a
        href="/create"
        className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-24 sm:mt-32 md:mt-44 text-pink-100 bg-pink-200/15"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1,
        }}
      >
        <span className="bg-pink-800 text-white text-xs px-3.5 py-1 rounded-full">
          AI
        </span>
        <p className="flex items-center gap-1 text-xs sm:text-sm">
          <span>Create UGC ads in seconds</span>
          <ChevronRightIcon
            size={16}
            className="group-hover:translate-x-0.5 transition duration-300"
          />
        </p>
      </motion.a>
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-[4.25rem] lg:leading-[5.25rem] font-medium max-w-2xl text-center mt-6 px-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
      >
        Turn Ideas into{" "}
        <span className="move-gradient px-2 sm:px-3 rounded-xl whitespace-nowrap">
          UGC Videos & Images
        </span>
      </motion.h1>
      <motion.p
        className="text-sm sm:text-base text-center text-slate-200 max-w-lg mt-4 sm:mt-6 px-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1,
        }}
      >
        Aivio uses AI to instantly generate scroll-stopping UGC ads, scripts,
        and visuals — built for creators, marketers, and startups.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        <button className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white rounded-full px-7 h-11 text-sm sm:text-base">
          Generate Content
        </button>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-pink-900 hover:bg-pink-950/50 transition rounded-full px-6 h-11 text-sm sm:text-base">
          <VideoIcon strokeWidth={1} size={18} />
          <span>Watch demo</span>
        </button>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-14 mt-8 sm:mt-12 px-4">
        {specialFeatures.map((feature, index) => (
          <motion.p
            className="flex items-center gap-2 text-xs sm:text-sm"
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
          >
            <CheckIcon className="size-4 sm:size-5 text-pink-600 flex-shrink-0" />
            <span className="text-slate-400">{feature}</span>
          </motion.p>
        ))}
      </div>
      <TiltedImage />
    </div>
  );
}
