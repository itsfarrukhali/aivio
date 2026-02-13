"use client";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <motion.div
      className="max-w-5xl py-12 sm:py-16 md:py-16 mt-20 sm:mt-32 md:mt-40 mx-4 sm:mx-6 md:mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between text-left bg-linear-to-b from-pink-900 to-pink-950 rounded-2xl p-6 sm:p-8 md:pl-20 text-white"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
    >
      <div className="flex-1">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight sm:leading-tight md:leading-[3.75rem] font-semibold bg-linear-to-r from-white to-pink-400 text-transparent bg-clip-text"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          Create Scroll-Stopping UGC Ads Instantly
        </motion.h1>
        <motion.p
          className="bg-linear-to-r from-white to-pink-400 text-transparent bg-clip-text text-sm sm:text-base md:text-lg mt-3 sm:mt-4"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
        >
          Turn your ideas into high-impact videos and visuals in seconds — no
          editing skills needed. Perfect for creators, marketers, and startups.
        </motion.p>
      </div>
      <motion.button
        className="w-full md:w-auto px-10 sm:px-12 py-3 text-slate-800 bg-white hover:bg-slate-200 active:scale-95 transition-all rounded-full text-sm sm:text-base font-medium flex-shrink-0"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}
