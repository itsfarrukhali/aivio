import { footerData } from "../data/footer";
import {
  DribbbleIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-20 md:mt-32 lg:mt-40 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 text-gray-500 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 sm:gap-10 md:gap-12">
        {/* Logo and Links Section */}
        <motion.div
          className="flex flex-col sm:flex-row sm:flex-wrap items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          {/* Logo */}
          <div className="w-full sm:w-auto mb-2 sm:mb-0">
            <NavLink
              to="/"
              className="inline-flex items-center gap-2"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <img
                className="h-7 sm:h-8 w-auto"
                src="/assets/logo.png"
                alt="footer logo"
                width={68}
                height={32}
                loading="lazy"
              />
            </NavLink>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full sm:w-auto">
            {footerData.map((section, index) => (
              <div key={index} className="min-w-[120px] sm:min-w-[140px]">
                <p className="text-slate-100 font-semibold text-sm sm:text-base mb-3">
                  {section.title}
                </p>
                <ul className="space-y-2">
                  {section.links.map((link: IFooterLink, linkIndex: number) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="hover:text-pink-600 transition text-xs sm:text-[13px] block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Description and Social Links Section */}
        <motion.div
          className="flex flex-col items-start lg:items-end text-left lg:text-right gap-3 sm:gap-4 mt-4 lg:mt-0 lg:min-w-[240px]"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <p className="max-w-full lg:max-w-60 text-xs sm:text-[13px] leading-relaxed">
            Aivio transforms ideas into scroll-stopping UGC ads and visuals —
            instantly.
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <NavLink
              to="https://dribbble.com/prebuiltui"
              target="_blank"
              rel="noreferrer"
              aria-label="Dribbble"
            >
              <DribbbleIcon className="size-5 hover:text-pink-500 transition" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/company/prebuiltui"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-5 hover:text-pink-500 transition" />
            </NavLink>
            <NavLink
              to="https://x.com/prebuiltui"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon className="size-5 hover:text-pink-500 transition" />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/@prebuiltui"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <YoutubeIcon className="size-5 hover:text-pink-500 transition" />
            </NavLink>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-800">
        <p className="text-center text-xs sm:text-[13px]">
          &copy; {new Date().getFullYear()}{" "}
          <a href="/" className="hover:text-pink-500 transition">
            Aivio
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
