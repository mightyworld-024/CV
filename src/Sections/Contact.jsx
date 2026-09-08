import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Code2,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#030305] px-6 py-32 md:py-44"
    >
      {/* ================================================= */}
      {/* BACKGROUND RGB LIGHT */}
      {/* ================================================= */}

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[35%] top-[20%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.05] blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-200px] top-[40%] h-[600px] w-[600px] rounded-full bg-fuchsia-500/[0.045] blur-[160px]"
      />

      {/* Grid */}

      <div className="tech-grid pointer-events-none absolute inset-0 opacity-20" />

      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

      <div className="relative mx-auto max-w-7xl">
        {/* TOP LABEL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex items-center gap-3"
        >
          <span className="mono text-xs tracking-[0.35em] text-fuchsia-400">
            05 / CONTACT
          </span>

          <span className="h-px w-16 bg-gradient-to-r from-fuchsia-400 to-transparent" />
        </motion.div>

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-8 max-w-6xl"
        >
          <h2 className="text-6xl font-bold leading-[0.86] tracking-[-0.065em] text-white md:text-8xl lg:text-[115px]">
            LET'S BUILD
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              SOMETHING
            </span>

            <br />

            <span className="text-white">GREAT.</span>
          </h2>
        </motion.div>

        {/* ================================================= */}
        {/* CONTACT GRID */}
        {/* ================================================= */}

        <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden bg-[#030305] p-8 md:p-12 lg:p-14"
          >
            {/* Local glow */}

            <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/[0.04] blur-[100px]" />

            <div className="relative">
              {/* Label */}

              <div className="flex items-center gap-3">
                <Send
                  size={15}
                  className="text-cyan-400"
                />

                <span className="mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                  START A CONVERSATION
                </span>
              </div>

              <p className="mt-8 max-w-xl text-base leading-8 text-gray-500 md:text-lg">
                Have a project, opportunity, or idea in mind? I'm always open
                to discussing interesting products, web applications, AI
                solutions, and development opportunities.
              </p>

              {/* EMAIL */}

              <div className="mt-12">
                <p className="mono mb-4 text-[9px] uppercase tracking-[0.25em] text-gray-700">
                  EMAIL
                </p>

                <a
                  href="mailto:sidmitra989@gmail.com"
                  className="group inline-flex items-center gap-3 text-xl font-medium tracking-tight text-white transition-colors duration-300 hover:text-cyan-300 md:text-2xl"
                >
                  <Mail
                    size={21}
                    className="text-cyan-400"
                  />

                  sidmitra989@gmail.com

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* PHONE */}

              <div className="mt-8">
                <p className="mono mb-4 text-[9px] uppercase tracking-[0.25em] text-gray-700">
                  PHONE
                </p>

                <a
                  href="tel:+919896598657"
                  className="group inline-flex items-center gap-3 text-base text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  <Phone
                    size={17}
                    className="text-violet-400"
                  />

                  +91 98965-98657

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="relative overflow-hidden bg-white/[0.015] p-8 md:p-12 lg:p-14"
          >
            {/* RGB line */}

            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            {/* Status */}

            <div className="flex items-center justify-between">
              <span className="mono text-[9px] uppercase tracking-[0.25em] text-gray-700">
                CURRENT STATUS
              </span>

              <div className="flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.03] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />

                <span className="mono text-[9px] uppercase tracking-[0.15em] text-cyan-400">
                  Available
                </span>
              </div>
            </div>

            {/* Socials */}

            <div className="mt-14">
              <p className="mono mb-6 text-[9px] uppercase tracking-[0.25em] text-gray-700">
                CONNECT
              </p>

              <div className="space-y-3">
                {/* GitHub */}

                <a
                  href="#"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                      <Code2
                        size={18}
                        className="text-gray-500 transition-colors duration-300 group-hover:text-cyan-300"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        GitHub
                      </p>

                      <p className="mt-1 text-xs text-gray-600">
                        Projects & source code
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                  />
                </a>

                {/* LinkedIn */}

                <a
                  href="#"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.03]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                      <Code2
                        size={18}
                        className="text-gray-500 transition-colors duration-300 group-hover:text-violet-300"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        LinkedIn
                      </p>

                      <p className="mt-1 text-xs text-gray-600">
                        Professional network
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                  />
                </a>
              </div>
            </div>

            {/* Availability */}

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-fuchsia-400/10 bg-fuchsia-400/[0.03]">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Open to new opportunities
                  </p>

                  <p className="mt-2 text-xs leading-5 text-gray-700">
                    Web development, full-stack applications, AI-powered
                    products, and interesting technical challenges.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* FINAL CTA */}
        {/* ================================================= */}

        <motion.a
          href="mailto:sidmitra989@gmail.com"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          whileHover={{
            y: -4,
          }}
          className="group relative mt-10 flex overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:border-cyan-400/20 hover:bg-white/[0.04] md:p-10"
        >
          {/* Animated gradient */}

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/[0.08] to-transparent blur-xl"
          />

          <div className="relative flex w-full items-center justify-between gap-6">
            <div>
              <p className="mono text-[9px] uppercase tracking-[0.25em] text-gray-700">
                READY WHEN YOU ARE
              </p>

              <p className="mt-3 text-xl font-medium text-white md:text-2xl">
                Let's start something meaningful.
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-45 group-hover:bg-cyan-300">
              <ArrowUpRight size={19} />
            </div>
          </div>
        </motion.a>

        {/* Bottom */}

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center">
          <span className="mono text-[9px] uppercase tracking-[0.3em] text-gray-700">
            WEB DEVELOPER / MERN / AI APPLICATIONS
          </span>

          <span className="mono text-[9px] uppercase tracking-[0.3em] text-gray-700">
            CONTACT / 05
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;