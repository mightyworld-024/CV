import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GitBranch,
  Globe,
  Server,
  Wrench,
} from "lucide-react";

const experiences = [
  {
    period: "AUG 2025 — PRESENT",
    company: "QSD Formulations Pvt Ltd",
    role: "Web Developer (Executive)",
    type: "FULL-TIME",
    location: "Production Web Development",
    accent: "cyan",

    summary:
      "Developing, maintaining, and improving production websites and web applications across pharmaceutical, cosmetics, and business domains.",

    achievements: [
      "Developed, maintained, and improved 5+ production websites.",
      "Built responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.js.",
      "Implemented website features, UI enhancements, content updates, and functional improvements based on business requirements.",
      "Diagnosed and resolved UI, functionality, responsiveness, and production bugs.",
      "Worked with Node.js, Express.js, and MongoDB while exploring backend and full-stack implementation.",
      "Independently managed multiple web projects from development through deployment and maintenance.",
      "Contributed to chatbot and Employee Data Management System projects.",
      "Collaborated with team members to understand requirements and deliver solutions within deadlines.",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },

  {
    period: "FEB 2025 — AUG 2025",
    company: "CNH Technologies Pvt Ltd",
    role: "Web Developer Intern",
    type: "INTERNSHIP",
    location: "Enterprise Application Development",
    accent: "violet",

    summary:
      "Contributed to enterprise-grade internal applications for agricultural equipment systems with hands-on full-stack development experience.",

    achievements: [
      "Contributed to the design, development, and enhancement of enterprise-grade internal applications.",
      "Worked on full-stack development using C#, ASP.NET Core, Entity Framework, and SQL Server.",
      "Implemented business logic, RESTful APIs, CRUD operations, and frontend-backend integrations.",
      "Debugged application issues across multiple layers and performed root-cause analysis.",
      "Optimized database queries and application workflows for improved performance and reliability.",
      "Developed and maintained unit tests to improve application stability and code quality.",
      "Assisted with deployment and release workflows across development and testing environments.",
      "Worked in an Agile development environment using Azure DevOps, Git, and GitHub.",
    ],

    technologies: [
      "C#",
      "ASP.NET Core",
      ".NET",
      "Entity Framework",
      "SQL Server",
      "REST APIs",
      "CRUD",
      "MVC",
      "Git",
      "GitHub",
    ],
  },

  {
    period: "JUL 2024 — AUG 2024",
    company: "CodeQuotient",
    role: "Training Intern",
    type: "TRAINING",
    location: "Software Development Training",
    accent: "fuchsia",

    summary:
      "Completed structured software development training focused on problem solving, APIs, databases, debugging, and clean coding practices.",

    achievements: [
      "Practiced arrays, strings, recursion, basic algorithms, debugging, and code optimization.",
      "Gained exposure to REST APIs, CRUD operations, database interactions, and MySQL.",
      "Followed structured coding practices with focus on clean code and readability.",
      "Worked on technical documentation and structured development practices.",
    ],

    technologies: [
      "JavaScript",
      "DSA",
      "REST APIs",
      "CRUD",
      "MySQL",
      "Git",
      "GitHub",
      "Debugging",
    ],
  },
];

const productionWebsites = [
  "QSD Formulations",
  "Maquillage Wellness",
  "MAK Prints",
  "Tikish Pharmaceuticals",
  "Screenora",
];

const accentClasses = {
  cyan: {
    text: "text-cyan-400",
    border: "group-hover:border-cyan-400/30",
    glow: "bg-cyan-400",
    line: "from-cyan-400",
  },
  violet: {
    text: "text-violet-400",
    border: "group-hover:border-violet-400/30",
    glow: "bg-violet-400",
    line: "from-violet-400",
  },
  fuchsia: {
    text: "text-fuchsia-400",
    border: "group-hover:border-fuchsia-400/30",
    glow: "bg-fuchsia-400",
    line: "from-fuchsia-400",
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 bg-[#030305] py-32"
    >
      {/* Ambient RGB lighting */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-64 top-[15%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.045] blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-64 top-[45%] h-[600px] w-[600px] rounded-full bg-violet-500/[0.05] blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/[0.035] blur-[150px]"
      />

      {/* Grid */}

      <div className="tech-grid pointer-events-none absolute inset-0 opacity-20" />

      {/* Main content */}

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-400">
              02 / EXPERIENCE
            </span>

            <span className="h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>

          <h2 className="mt-6 max-w-4xl text-6xl font-bold leading-[0.88] tracking-[-0.06em] text-white md:text-8xl">
            Professional
            <br />
            <span className="bg-gradient-to-r from-gray-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Experience.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            From enterprise application development to production websites,
            my experience spans frontend development, full-stack integration,
            debugging, deployment, and real-world product implementation.
          </p>
        </motion.div>

        {/* Experience overview */}

     {/* Experience capabilities */}

<div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
  {[
    {
      number: "01",
      title: "Frontend Engineering",
      text: "Building responsive, interactive, and production-ready interfaces with React.js, JavaScript, HTML, CSS, and modern UI practices.",
      color: "cyan",
    },
    {
      number: "02",
      title: "Full-Stack Development",
      text: "Working across frontend and backend systems with Node.js, Express.js, MongoDB, REST APIs, C#, ASP.NET Core, and SQL Server.",
      color: "violet",
    },
    {
      number: "03",
      title: "AI Applications",
      text: "Building practical AI solutions using Python, FastAPI, LLMs, RAG pipelines, vector databases, automation, and AI-powered workflows.",
      color: "fuchsia",
    },
    {
      number: "04",
      title: "Real-World Development",
      text: "Experience with production websites, debugging, API integration, database interactions, deployment, maintenance, and business-driven requirements.",
      color: "cyan",
    },
  ].map((item, index) => (
    <motion.div
      key={item.number}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group relative min-h-[220px] overflow-hidden bg-[#030305] p-8 transition-all duration-500 hover:bg-white/[0.025] md:p-10"
    >
      {/* RGB hover glow */}

      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-[80px] ${
          item.color === "cyan"
            ? "bg-cyan-400/10"
            : item.color === "violet"
              ? "bg-violet-500/10"
              : "bg-fuchsia-500/10"
        } opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative">
        {/* Top */}

        <div className="mb-10 flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.2em] text-gray-700">
            {item.number}
          </span>

          <span
            className={`h-1.5 w-1.5 rounded-full ${
              item.color === "cyan"
                ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                : item.color === "violet"
                  ? "bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                  : "bg-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.8)]"
            } opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
          />
        </div>

        {/* Title */}

        <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {item.title}
        </h3>

        {/* Description */}

        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 transition-colors duration-300 group-hover:text-gray-500">
          {item.text}
        </p>
      </div>
    </motion.div>
  ))}
</div>
        {/* Timeline */}

        <div className="relative mt-28">
          {/* Main timeline */}

          <div className="absolute bottom-0 left-[9px] top-0 hidden w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-500 md:block" />

          {experiences.map((experience, index) => {
            const accent = accentClasses[experience.accent];

            return (
              <motion.article
                key={experience.company}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className="group relative mb-24 last:mb-0 md:pl-20"
              >
                {/* Timeline node */}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="absolute left-0 top-1 hidden h-[19px] w-[19px] items-center justify-center rounded-full border border-white/20 bg-[#030305] md:flex"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${accent.glow} shadow-[0_0_14px_rgba(34,211,238,0.7)]`}
                  />
                </motion.div>

                {/* Date + role label */}

                <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs tracking-[0.15em] ${accent.text}`}
                    >
                      {experience.period}
                    </span>

                    <span className="hidden h-px w-8 bg-white/10 md:block" />

                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-700">
                      {experience.type}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-700">
                    {experience.location}
                  </span>
                </div>

                {/* Card */}

                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 ${accent.border} md:p-10`}
                >
                  {/* Card glow */}

                  <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-violet-500/[0.05] blur-[110px] transition-all duration-700 group-hover:bg-violet-500/[0.1]" />

                  <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-400/[0.035] blur-[110px] transition-all duration-700 group-hover:bg-cyan-400/[0.08]" />

                  <div className="relative">
                    {/* Card header */}

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <BriefcaseBusiness
                            size={14}
                            className={accent.text}
                          />

                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-600">
                            EXPERIENCE
                          </span>
                        </div>

                        <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                          {experience.company}
                        </h3>

                        <p className="mt-3 text-lg text-gray-400">
                          {experience.role}
                        </p>
                      </div>

                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 group-hover:border-white/20 group-hover:text-cyan-400"
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>

                    {/* Divider */}

                    <div className="my-8 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                    {/* Summary */}

                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <Globe
                            size={14}
                            className="text-cyan-400"
                          />

                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                            ROLE OVERVIEW
                          </span>
                        </div>

                        <p className="max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
                          {experience.summary}
                        </p>
                      </div>

                      {/* Experience metadata */}

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/5 bg-black/20 p-5">
                          <Code2
                            size={17}
                            className="mb-4 text-cyan-400"
                          />

                          <p className="text-[10px] uppercase tracking-[0.15em] text-gray-700">
                            Focus
                          </p>

                          <p className="mt-2 text-sm text-gray-400">
                            Development
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-black/20 p-5">
                          <Database
                            size={17}
                            className="mb-4 text-violet-400"
                          />

                          <p className="text-[10px] uppercase tracking-[0.15em] text-gray-700">
                            Stack
                          </p>

                          <p className="mt-2 text-sm text-gray-400">
                            Full-Stack
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}

                    <div className="mt-12">
                      <div className="mb-6 flex items-center gap-3">
                        <Wrench
                          size={14}
                          className="text-violet-400"
                        />

                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-400">
                          KEY CONTRIBUTIONS
                        </span>
                      </div>

                      <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <motion.div
                              key={achievement}
                              initial={{ opacity: 0, x: -15 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: achievementIndex * 0.04,
                              }}
                              className="flex gap-3 text-sm leading-6 text-gray-500"
                            >
                              <span
                                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.glow}`}
                              />

                              <span>{achievement}</span>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Technologies */}

                    <div className="mt-12">
                      <div className="mb-5 flex items-center gap-3">
                        <Server
                          size={14}
                          className="text-fuchsia-400"
                        />

                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fuchsia-400">
                          TECHNOLOGIES
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-gray-500 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* Production websites */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-28 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
        >
          <div className="border-b border-white/10 p-7 md:p-10">
            <div className="flex items-center gap-3">
              <GitBranch
                size={16}
                className="text-cyan-400"
              />

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                PRODUCTION WORK
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Websites I've Worked On.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
              Production websites developed, maintained, and enhanced across
              pharmaceutical, cosmetics, printing, and business domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            {productionWebsites.map((website, index) => (
              <motion.div
                key={website}
                whileHover={{ y: -4 }}
                className="group border-b border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025] md:border-r md:last:border-r-0 lg:border-b-0"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gray-700">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-gray-700 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400"
                  />
                </div>

                <p className="text-sm font-medium leading-6 text-gray-400 transition-colors duration-300 group-hover:text-white">
                  {website}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom workflow */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 border-y border-white/10 py-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Code2
                size={16}
                className="text-cyan-400"
              />

              <span className="text-sm text-gray-500">
                From requirement to production
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-gray-700">
              <span>Analyze</span>
              <span className="text-cyan-400">→</span>

              <span>Build</span>
              <span className="text-violet-400">→</span>

              <span>Debug</span>
              <span className="text-fuchsia-400">→</span>

              <span>Optimize</span>
              <span className="text-cyan-400">→</span>

              <span>Deploy</span>
            </div>
          </div>
        </motion.div>

        {/* Footer label */}

        <div className="mt-14 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-700">
            EXPERIENCE / 02
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-700">
            2024 — PRESENT
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;