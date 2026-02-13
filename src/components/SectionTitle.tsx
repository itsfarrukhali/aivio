import type { SectionTitleProps } from "../types";
import { motion } from "motion/react";

export default function SectionTitle({
  text1,
  text2,
  text3,
}: SectionTitleProps) {
  return (
    <>
      <motion.p
        className="text-center font-medium text-pink-600 mt-16 sm:mt-20 md:mt-28 px-6 sm:px-10 py-2 rounded-full bg-pink-950/70 border border-pink-800 w-max mx-auto text-xs sm:text-sm"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        {text1}
      </motion.p>
      <motion.h3
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mx-auto mt-3 sm:mt-4 px-4"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        {text2}
      </motion.h3>
      <motion.p
        className="text-slate-300 text-center mt-2 max-w-xl mx-auto text-sm sm:text-base px-4"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
      >
        {text3}
      </motion.p>
    </>
  );
}
