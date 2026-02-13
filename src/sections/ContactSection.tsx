"use client";
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20">
      <SectionTitle
        text1="Contact"
        text2="Reach out to us"
        text3="Ready to grow your brand? Let's connect and build something exceptional together."
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-12 sm:mt-16 w-full"
      >
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium text-sm sm:text-base">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500 bg-slate-950/50">
            <UserIcon className="size-4 sm:size-5 flex-shrink-0" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 outline-none text-sm sm:text-base"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium text-sm sm:text-base">Email id</p>
          <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500 bg-slate-950/50">
            <MailIcon className="size-4 sm:size-5 flex-shrink-0" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 outline-none text-sm sm:text-base"
            />
          </div>
        </motion.div>

        <motion.div
          className="sm:col-span-2"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium text-sm sm:text-base">Message</p>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            className="focus:border-pink-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700 bg-slate-950/50 text-sm sm:text-base"
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-full sm:w-max flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white px-8 sm:px-10 py-3 rounded-full text-sm sm:text-base"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          Submit
          <ArrowRightIcon className="size-4 sm:size-5" />
        </motion.button>
      </form>
    </div>
  );
}
