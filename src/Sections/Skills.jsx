import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "GitHub",
  "GenAI",
  "PROMPTING",
  "Python",
  "C",
  "C++",
  "C#"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 bg-[#030305] py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      {/* ================================================== */}
      {/* TOP MARQUEE */}
      {/* ================================================== */}

      <div className="absolute left-0 top-8 w-full overflow-hidden border-y border-white/5 py-4">
        <motion.div
          className="flex w-max items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`top-${skill}-${index}`}
              className="flex items-center"
            >
              <span className="px-8 text-sm font-medium uppercase tracking-[0.3em] text-gray-700">
                {skill}
              </span>

              <span className="text-cyan-400/60">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================================================== */}
      {/* SECTION HEADING */}
      {/* ================================================== */}

      <div className="relative mx-auto max-w-6xl px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-cyan-400">
            04 / TECHNOLOGY
          </p>

          <h2 className="max-w-3xl text-6xl font-bold leading-[0.9] tracking-[-0.06em] text-white md:text-8xl">
            Tools and Languages I
            <br />
            <span className="bg-gradient-to-r from-gray-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Work With.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* ================================================== */}
      {/* SKILLS GRID */}
      {/* ================================================== */}

      <div className="relative mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 px-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -5,
            }}
            className="group relative overflow-hidden bg-[#030305] p-8"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-violet-500/0 to-fuchsia-500/0 transition-all duration-500 group-hover:from-cyan-400/5 group-hover:via-violet-500/5 group-hover:to-fuchsia-500/5" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-gray-600">
                  0{index + 1}
                </span>

                <span className="h-2 w-2 rounded-full bg-cyan-400 opacity-30 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:opacity-100" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white">
                {skill}
              </h3>

              <div className="mt-8 h-px w-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                  }}
                  className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================================================== */}
      {/* BOTTOM MARQUEE */}
      {/* ================================================== */}

      <div className="mt-28 overflow-hidden border-y border-white/5 py-5">
        <motion.div
          className="flex w-max items-center whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`bottom-${skill}-${index}`}
              className="flex items-center"
            >
              <span className="px-8 text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
                {skill}
              </span>

              <span className="text-cyan-400">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;