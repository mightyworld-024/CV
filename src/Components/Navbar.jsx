import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      let current = "about";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-1/2 top-4 z-[500] w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 transition-all duration-500 ${
          scrolled
            ? "rounded-2xl border-white/15 bg-black/75 shadow-2xl shadow-cyan-500/5 backdrop-blur-2xl"
            : "rounded-2xl border-white/10 bg-black/45 backdrop-blur-xl"
        }`}
      >
        {/* RGB animated border */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          <motion.div
            className="absolute -left-1/2 top-0 h-px w-[200%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{ x: ["-25%", "25%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute bottom-0 -left-1/2 h-px w-[200%] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"
            animate={{ x: ["25%", "-25%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div
          className={`flex items-center justify-between px-5 transition-all duration-500 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative text-left"
          >
            <span className="text-xl font-bold tracking-tight text-white md:text-2xl">
              SM<span className="text-cyan-400">.</span>
            </span>

            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="group relative px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-gray-500 transition-colors duration-300 hover:text-white"
              >
                {link.name}

                {active === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 h-px w-5 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-cyan-400/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-cyan-400/5" />
              </button>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              />

              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
                Available
              </span>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="group relative overflow-hidden rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:border-cyan-400/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10 flex items-center gap-2">
                Let's Talk
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white md:hidden"
            aria-label="Toggle menu"
          >
            <span className="flex flex-col gap-1.5">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 4 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-px w-5 bg-white"
              />

              <motion.span
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
                className="block h-px w-5 bg-white"
              />

              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -4 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-px w-5 bg-white"
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-white/10 px-5 pb-5 pt-3">
                {links.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={() => scrollToSection(link.id)}
                    className={`flex w-full items-center justify-between border-b border-white/5 py-4 text-left text-sm uppercase tracking-[0.15em] transition-colors ${
                      active === link.id
                        ? "text-cyan-400"
                        : "text-gray-400"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span>↗</span>
                  </motion.button>
                ))}

                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 py-3 text-sm font-semibold text-black"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;