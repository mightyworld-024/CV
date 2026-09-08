import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const glowX = useTransform(smoothX, [-1, 1], ["-10%", "10%"]);
  const glowY = useTransform(smoothY, [-1, 1], ["-10%", "10%"]);
  const codeX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const codeY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const badgeX = useTransform(smoothX, [-1, 1], [10, -10]);
  const badgeY = useTransform(smoothY, [-1, 1], [8, -8]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      mouseX.set((x - 0.5) * 2);
      mouseY.set((y - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030305] px-6 pb-20 pt-36 md:pt-44"
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan glow */}

        <motion.div
          style={{
            x: glowX,
            y: glowY,
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-600px w-600px rounded-full bg-cyan-500/0.055 blur-[150px]"
        />

        {/* Violet glow */}

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-200px top-[20%] h-650px w-650px rounded-full bg-violet-600/0.06 blur-[160px]"
        />

        {/* Fuchsia glow */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-250px left-[35%] h-550px w-550px rounded-full bg-fuchsia-500/0.04 blur-[150px]"
        />

        {/* Grid */}

        <div className="tech-grid absolute inset-0 opacity-30" />

        {/* Radial darkness */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030305_75%)]" />
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTENT */}
      {/* ========================================================= */}

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ===================================================== */}
          {/* LEFT */}
          {/* ===================================================== */}

          <div>
            {/* Status */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              </span>

              <span className="mono text-[10px] uppercase tracking-[0.28em] text-gray-500">
                Available for opportunities
              </span>
            </motion.div>

            {/* Small intro */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mono mb-6 text-xs uppercase tracking-[0.28em] text-cyan-400"
            >
              WEB DEVELOPER / FULL-STACK / AI
            </motion.p>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-6xl font-bold leading-[0.86] tracking-[-0.065em] text-white sm:text-7xl md:text-8xl lg:text-[92px] xl:text-[105px]"
            >
              Sidharth 
              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Mitra
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="mt-8 max-w-xl text-base leading-8 text-gray-500 md:text-lg"
            >
              I build responsive web applications, production-ready
              interfaces, full-stack systems, and AI-powered solutions with a
              focus on clean engineering and real-world usability.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-500 hover:bg-cyan-300"
              >
                <span>View My Work</span>

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/0.03 px-6 py-3.5 text-sm text-gray-400 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/0.05 hover:text-white"
              >
                Let's Talk

                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Mini stats */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.85,
              }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div>
                <p className="text-2xl font-semibold tracking-tight text-white">
                  1.5+
                </p>

                <p className="mono mt-1 text-[9px] uppercase tracking-[0.2em] text-gray-700">
                  Years Experience
                </p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-semibold tracking-tight text-white">
                  5+
                </p>

                <p className="mono mt-1 text-[9px] uppercase tracking-[0.2em] text-gray-700">
                  Production Websites
                </p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-semibold tracking-tight text-white">
                  MERN
                </p>

                <p className="mono mt-1 text-[9px] uppercase tracking-[0.2em] text-gray-700">
                  Primary Stack
                </p>
              </div>
            </motion.div>
          </div>

          {/* ===================================================== */}
          {/* RIGHT - CODE WINDOW */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              y: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Floating MERN badge */}

            <motion.div
              style={{
                x: badgeX,
                y: badgeY,
              }}
              className="absolute -right-2 -top-8 z-20 hidden rounded-2xl border border-violet-400/20 bg-[#050508]/90 px-5 py-4 shadow-2xl shadow-violet-500/10 backdrop-blur-xl md:block"
            >
              <p className="mono text-[8px] uppercase tracking-[0.2em] text-gray-600">
                Stack
              </p>

              <p className="mt-1 text-sm font-semibold text-violet-200">
                MERN
              </p>
            </motion.div>

            {/* Floating AI badge */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-5 z-20 hidden rounded-2xl border border-cyan-400/20 bg-[#050508]/90 px-5 py-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:block"
            >
              <p className="mono text-[8px] uppercase tracking-[0.2em] text-gray-600">
                Focus
              </p>

              <p className="mt-1 text-sm font-semibold text-cyan-200">
                AI + Web
              </p>
            </motion.div>

            {/* CODE WINDOW */}

            <motion.div
              style={{
                x: codeX,
                y: codeY,
              }}
              whileHover={{
                y: -6,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050508]/90 shadow-2xl shadow-violet-500/0.05 backdrop-blur-xl"
            >
              {/* RGB top line */}

              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500" />

              {/* Window header */}

              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

                  <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
                </div>

                <span className="mono text-[9px] uppercase tracking-[0.25em] text-gray-700">
                  developer.config
                </span>
              </div>

              {/* Code */}

              <div className="relative p-6 md:p-8">
                <div className="pointer-events-none absolute right-[-100px top-[20%] h-72 w-72 rounded-full bg-violet-500/0.06 blur-[100px]" />

                <div className="pointer-events-none absolute bottom-[-100px left-[20%] h-64 w-64 rounded-full bg-cyan-500/0.04 blur-[100px]" />

                <pre className="relative overflow-x-auto font-mono text-xs leading-7 md:text-sm md:leading-8">
                  <code>
                    <span className="text-gray-600">
                      // building digital experiences
                    </span>

                    {"\n\n"}

                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span>{" "}
                    <span className="text-gray-500">=</span>{" "}
                    <span className="text-white">{"{"}</span>

                    {"\n"}

                    <span className="text-gray-500">
                      {"  "}identity:
                    </span>{" "}
                    <span className="text-fuchsia-300">
                      "Sidharth Mitra"
                    </span>
                    <span className="text-white">,</span>

                    {"\n"}

                    <span className="text-gray-500">
                      {"  "}role:
                    </span>{" "}
                    <span className="text-fuchsia-300">
                      "Web Developer"
                    </span>
                    <span className="text-white">,</span>

                    {"\n\n"}

                    <span className="text-gray-600">
                      {"  "}// frontend
                    </span>

                    {"\n"}

                    <span className="text-gray-500">
                      {"  "}frontend:
                    </span>{" "}
                    <span className="text-white">[</span>

                    <span className="text-cyan-300">
                      "HTML5"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-cyan-300">
                      "CSS3"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-cyan-300">
                      "JavaScript"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-cyan-300">
                      "React.js"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-cyan-300">
                      "Tailwind CSS"
                    </span>

                    <span className="text-white">],</span>

                    {"\n\n"}

                    <span className="text-gray-600">
                      {"  "}// backend
                    </span>

                    {"\n"}

                    <span className="text-gray-500">
                      {"  "}backend:
                    </span>{" "}
                    <span className="text-white">[</span>

                    <span className="text-violet-300">
                      "Node.js"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-violet-300">
                      "Express.js"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-violet-300">
                      "C#"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-violet-300">
                      "ASP.NET Core"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-violet-300">
                      ".NET"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-violet-300">
                      "REST APIs"
                    </span>

                    <span className="text-white">],</span>

                    {"\n\n"}

                    <span className="text-gray-600">
                      {"  "}// database
                    </span>

                    {"\n"}

                    <span className="text-gray-500">
                      {"  "}database:
                    </span>{" "}
                    <span className="text-white">[</span>

                    <span className="text-cyan-300">
                      "MongoDB"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-cyan-300">
                      "SQL Server"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-cyan-300">
                      "MySQL"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-cyan-300">
                      "Entity Framework"
                    </span>

                    <span className="text-white">],</span>

                    {"\n\n"}

                    <span className="text-gray-600">
                      {"  "}// ai & automation
                    </span>

                    {"\n"}

                    <span className="text-gray-500">
                      {"  "}ai:
                    </span>{" "}
                    <span className="text-white">[</span>

                    <span className="text-fuchsia-300">
                      "Python"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-fuchsia-300">
                      "LLMs"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-fuchsia-300">
                      "RAG"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-fuchsia-300">
                      "AI Automation"
                    </span>

                    <span className="text-white">],</span>

                    {"\n\n"}

                    <span className="text-gray-600">
                      {"  "}// engineering
                    </span>

                    {"\n"}

                    <span className="text-gray-500">
                      {"  "}workflow:
                    </span>{" "}
                    <span className="text-white">[</span>

                    <span className="text-violet-300">
                      "Git"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-violet-300">
                      "GitHub"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-violet-300">
                      "CRUD"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-violet-300">
                      "Debugging"
                    </span>

                    <span className="text-white">, </span>

                    <span className="text-violet-300">
                      "Agile"
                    </span>

                    <span className="text-white">],</span>

                    {"\n\n"}

                    <span className="text-white">{"}"}</span>

                    {"\n\n"}

                    <span className="text-gray-700">
                      {">"}
                    </span>{" "}

                    <span className="text-cyan-400">
                      buildSomethingGreat
                    </span>

                    <span className="text-gray-500">
                      ();
                    </span>
                  </code>
                </pre>
              </div>

              {/* Bottom status */}

              <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                  <span className="mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    system online
                  </span>
                </div>

                <span className="mono text-[9px] uppercase tracking-[0.2em] text-gray-700">
                  MERN / .NET / AI
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* SKILL STRIP */}
        {/* ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="mt-24 overflow-hidden border-y border-white/10 py-5"
        >
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "C#",
              "ASP.NET Core",
              "REST APIs",
              "Python",
              "GenAI",
              "LLMs",
              "RAG",
              "Git",
              "GitHub",
              "Tailwind CSS",
              "SQL Server",
              "MySQL",
              "React",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "C#",
              "ASP.NET Core",
              "REST APIs",
              "Python",
              "GenAI",
              "LLMs",
              "RAG",
              "Git",
              "GitHub",
              "Tailwind CSS",
              "SQL Server",
              "MySQL",
            ].map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex items-center whitespace-nowrap"
              >
                <span className="px-7 text-2xl font-semibold tracking-tight text-gray-700 md:text-4xl">
                  {skill}
                </span>

                <span className="text-cyan-400">
                  +
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ========================================================= */}
        {/* SCROLL INDICATOR */}
        {/* ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.4,
          }}
          className="mt-10 flex items-center justify-between"
        >
          <span className="mono text-[9px] uppercase tracking-[0.3em] text-gray-700">
            SCROLL TO EXPLORE
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-600"
          >
            <ArrowDownRight size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;