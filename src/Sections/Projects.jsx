import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Headphones,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AI / RAG",
    title: "RAG-Based AI",
    subtitle: "Knowledge Assistant",
    description:
      "A document-aware AI assistant that allows users to query PDFs and documents using natural language. Built with document processing, embeddings, semantic search, and LLM-based responses.",
    impact:
      "Integrated document processing, embeddings, semantic search, and source-aware LLM responses to improve answer relevance.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "LLM",
      "RAG",
      "Vector Database",
    ],
    icon: BrainCircuit,
    gradient: "from-cyan-400 via-blue-500 to-violet-500",
    glow: "bg-cyan-500",
  },

  {
    number: "02",
    category: "AI / CUSTOMER SUPPORT",
    title: "AI Customer Support",
    subtitle: "& Ticket Management",
    description:
      "An AI-powered support system that classifies customer queries, detects sentiment, prioritizes tickets, and generates contextual responses.",
    impact:
      "Implemented AI-based ticket routing, conversation history, REST APIs, and automated support workflows.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "MongoDB",
      "LLM",
      "REST APIs",
    ],
    icon: Headphones,
    gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
    glow: "bg-violet-500",
  },

  {
    number: "03",
    category: "AI / AUTOMATION",
    title: "AI Desktop",
    subtitle: "Assistant",
    description:
      "An AI-powered desktop assistant capable of natural-language conversations, voice commands, web search, application launching, and task automation.",
    impact:
      "Integrated LLM-based intent handling with Python automation to execute common desktop tasks through conversational commands.",
    technologies: [
      "Python",
      "LLM API",
      "Speech Recognition",
      "Automation",
    ],
    icon: Sparkles,
    gradient: "from-fuchsia-400 via-pink-500 to-violet-500",
    glow: "bg-fuchsia-500",
  },

  {
    number: "04",
    category: "FULL-STACK / AI",
    title: "AI-Powered",
    subtitle: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with authentication, product catalog, cart, wishlist, and order management.",
    impact:
      "Integrated an AI shopping assistant for natural-language product discovery, recommendations, and customer support.",
    technologies: [
      "MERN Stack",
      "MongoDB",
      "REST APIs",
      "LLM",
      "Authentication",
    ],
    icon: ShoppingCart,
    gradient: "from-blue-400 via-cyan-400 to-violet-500",
    glow: "bg-blue-500",
  },
];

const productionSites = [
  "QSD Formulations",
  "Maquillage Wellness",
  "MAK Prints",
  "Tikish Pharmaceuticals",
  "Screenora",
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 bg-[#030305] py-32"
    >
      {/* Ambient RGB */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-60 top-[15%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.04] blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-60 top-[40%] h-[600px] w-[600px] rounded-full bg-fuchsia-500/[0.045] blur-[150px]"
      />

      <div className="tech-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-400">
              03 / PROJECTS
            </span>

            <span className="h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>

          <h2 className="mt-6 max-w-4xl text-6xl font-bold leading-[0.88] tracking-[-0.06em] text-white md:text-8xl">
            Selected
            <br />

            <span className="bg-gradient-to-r from-gray-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            AI applications, full-stack systems, automation tools, and
            production web projects built across different technologies.
          </p>
        </motion.div>

        {/* PROJECTS */}

        <div className="mt-24 space-y-10">

          {projects.map((project, index) => {
            const Icon = project.icon;

            const isTextLeft = index % 2 === 0;

            return (
              <motion.article
                key={project.number}
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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/15"
              >
                <div
                  className={`relative grid lg:grid-cols-2 ${
                    isTextLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >

                  {/* ================================================= */}
                  {/* TEXT */}
                  {/* ================================================= */}

                  <div className="flex min-h-[500px] flex-col justify-between p-7 md:p-10 lg:p-14">

                    <div>

                      {/* Number */}

                      <div className="mb-8 flex items-center justify-between">
                        <span className="font-mono text-xs tracking-[0.2em] text-gray-700">
                          PROJECT / {project.number}
                        </span>

                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-700">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Category */}

                      <div className="mb-6 flex items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                          {project.category}
                        </span>

                        <span className="h-px w-8 bg-white/10" />
                      </div>

                      {/* Title */}

                      <h3 className="text-4xl font-bold leading-[0.92] tracking-[-0.05em] text-white md:text-5xl">
                        {project.title}

                        <br />

                        <span
                          className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                        >
                          {project.subtitle}
                        </span>
                      </h3>

                      {/* Description */}

                      <p className="mt-8 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
                        {project.description}
                      </p>

                      {/* What I built */}

                      <div className="mt-8 border-l border-cyan-400/30 pl-5">
                        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-700">
                          WHAT I BUILT
                        </p>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          {project.impact}
                        </p>
                      </div>

                    </div>

                    {/* Bottom */}

                    <div className="mt-10">

                      {/* Tech */}

                      <div className="mb-7 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] text-gray-500 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}

                      <div className="flex flex-wrap gap-3">

                        <a
                          href="#"
                          className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-2.5 text-xs text-gray-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
                        >
                          <Code2 size={14} />

                          Source Code

                          <ArrowUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>

                        <a
                          href="#"
                          className="group/link inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-all duration-300 hover:bg-cyan-300"
                        >
                          Live Project

                          <ArrowUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>

                      </div>
                    </div>
                  </div>

                  {/* ================================================= */}
                  {/* VISUAL */}
                  {/* ================================================= */}

                  <div className="relative min-h-[380px] overflow-hidden border-t border-white/10 bg-black/30 lg:min-h-[500px] lg:border-t-0 lg:border-l lg:border-white/10">

                    <div className="tech-grid absolute inset-0 opacity-25" />

                    {/* RGB glow */}

                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-[80px]`}
                    />

                    {/* Center visual */}

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 4,
                      }}
                      className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-2xl transition-all duration-500 group-hover:border-white/20"
                    >
                      <Icon
                        size={44}
                        strokeWidth={1}
                        className="text-gray-300 transition-colors duration-300 group-hover:text-white"
                      />
                    </motion.div>

                    {/* Decorative circles */}

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                    />

                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/5"
                    />

                    {/* Preview label */}

                    <div className="absolute bottom-7 left-7 flex items-center gap-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-700">
                        Project Preview
                      </span>

                      <span className="h-px w-10 bg-white/10" />

                      <span className="font-mono text-[9px] text-gray-700">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Arrow */}

                    <motion.div
                      whileHover={{
                        rotate: 45,
                      }}
                      className="absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-gray-500 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-400"
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>

                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* PRODUCTION WEBSITES */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-24 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
        >

          <div className="border-b border-white/10 p-7 md:p-10">

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                PRODUCTION WORK
              </span>

            </div>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              5+ Production Websites.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
              Websites developed, maintained, and enhanced across
              pharmaceutical, cosmetics, printing, and business domains.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5">

            {productionSites.map((site, index) => (
              <motion.div
                key={site}
                whileHover={{
                  y: -5,
                }}
                className="group border-b border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025] lg:border-b-0 lg:border-r lg:last:border-r-0"
              >

                <div className="mb-8 flex items-center justify-between">

                  <span className="font-mono text-[10px] text-gray-700">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />

                </div>

                <p className="text-sm font-medium leading-6 text-gray-400 transition-colors duration-300 group-hover:text-white">
                  {site}
                </p>

              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* Bottom */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-20 flex items-center justify-between border-t border-white/10 pt-8"
        >

          <div className="flex items-center gap-3">

            <Sparkles
              size={15}
              className="text-fuchsia-400"
            />

            <span className="text-sm text-gray-600">
              AI + Web Development + Automation
            </span>

          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-700">
            PROJECTS / 03
          </span>

        </motion.div>

      </div>
    </section>
  );
};

export default Projects;