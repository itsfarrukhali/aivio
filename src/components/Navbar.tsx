import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import type { INavLink } from "../types";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 z-50 flex items-center justify-between w-full py-3 sm:py-4 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md bg-black/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <NavLink to="/">
          <img
            className="h-7 sm:h-8.5 w-auto"
            src="/assets/logo.png"
            alt="logo"
            width={130}
            height={34}
            loading="eager"
          />
        </NavLink>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 transition duration-500 text-sm">
          {navlinks.map((link: INavLink) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="hover:text-pink-500 transition"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button className="hidden md:block px-5 lg:px-6 py-2.5 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-full text-sm">
          Sign In
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 hover:bg-pink-950/50 rounded-lg transition"
          aria-label="Open menu"
        >
          <MenuIcon size={24} className="active:scale-90 transition" />
        </button>
      </motion.nav>

      <div
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {navlinks.map((link: INavLink, index) => (
          <motion.div
            key={link.name}
            initial={{ x: 50, opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <NavLink
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-500 transition text-xl"
            >
              {link.name}
            </NavLink>
          </motion.div>
        ))}
        <motion.button
          initial={{ x: 50, opacity: 0 }}
          animate={isOpen ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ delay: navlinks.length * 0.1, duration: 0.3 }}
          className="px-8 py-2.5 bg-pink-600 hover:bg-pink-700 transition text-white rounded-full"
          onClick={() => setIsOpen(false)}
        >
          Sign In
        </motion.button>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 bg-pink-600 hover:bg-pink-700 transition text-white rounded-lg"
          aria-label="Close menu"
        >
          <XIcon size={24} />
        </button>
      </div>
    </>
  );
}
