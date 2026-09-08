import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020204] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white"
            >
              Sidharth Mitra
              <span className="text-cyan-400">.</span>
            </a>

            <p className="mono mt-2 text-[10px] uppercase tracking-widest text-gray-700">
              Building digital experiences
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-gray-600">
            <a
              href="#about"
              className="transition-colors hover:text-cyan-300"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition-colors hover:text-violet-300"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="transition-colors hover:text-fuchsia-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-cyan-300"
            >
              Contact
            </a>
          </div>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-xs text-gray-600 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/5 pt-5 text-[10px] text-gray-700 md:flex-row">
          <span>© 2026 Sidharth Mitra</span>
          <span className="mono">DESIGNED / DEVELOPED WITH REACT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;