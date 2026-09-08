import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const About = () => {
  const stats = [
    { value: "01+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "05+", label: "Core Technologies" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030305] px-6 py-32 md:py-44"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-400px w-400px rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-10%] h-400px w-400px rounded-full bg-violet-600/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="mono text-xs tracking-[0.3em] text-cyan-300/70">
            01 / ABOUT
          </span>

          <div className="h-px w-20 bg-linear-to-r from-cyan-400/50 to-transparent" />
        </motion.div>

        {/* Big Statement */}
        <div className="max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-5xl font-bold leading-[0.95] tracking--0.05em text-white md:text-7xl lg:text-8xl"
          >
            I DON'T JUST
            <br />
            <span className="text-gray-600">WRITE CODE.</span>
            <br />
            <span className="bg-Linear-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              I BUILD EXPERIENCES.
            </span>
          </motion.h2>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="max-w-xl text-lg leading-8 text-gray-500">
              I'm a developer focused on creating responsive, modern web
              applications that balance strong engineering with thoughtful
              design and user experience.
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
              My work revolves around React, JavaScript and the MERN stack,
              while continuously exploring new technologies and better ways
              to build useful digital products.
            </p>

            <a
              href="#experience"
              className="group mt-8 inline-flex items-center gap-3 text-sm text-white transition-colors hover:text-cyan-300"
            >
              Explore my experience
              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </motion.div>

          {/* Stats */}
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{ x: 8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/0.03 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-violet-400/0 to-fuchsia-400/0 transition-all duration-500 group-hover:from-cyan-400/5 group-hover:via-violet-400/5 group-hover:to-fuchsia-400/5" />

                <div className="relative flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold tracking-tight text-white">
                      {stat.value}
                    </div>

                    <p className="mono mt-2 text-[10px] uppercase tracking-widest text-gray-600">
                      {stat.label}
                    </p>
                  </div>

                  <span className="text-cyan-400/40">↗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;