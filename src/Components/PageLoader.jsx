import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 3;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setComplete(true);
        }, 500);
      }

      setProgress(value);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={complete ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black px-6 py-8 text-white"
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium tracking-tight">
          Sidharth Mitra<span className="text-gray-500">.</span>
        </p>

        <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
          Portfolio
        </p>
      </div>

      {/* Center */}
      <div className="flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-gray-500"
        >
          Loading Experience
        </motion.p>

        <div className="flex items-end gap-2">
          <motion.span className="text-7xl font-bold tracking-tighter md:text-9xl">
            {progress}
          </motion.span>

          <span className="mb-3 text-xl text-gray-600 md:mb-5">
            %
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div>
        <div className="mb-4 flex items-center justify-between text-xs text-gray-600">
          <span>Initializing interface</span>
          <span>{progress === 100 ? "Ready" : "Please wait"}</span>
        </div>

        {/* Progress Bar */}
        <div className="h-px w-full bg-white/10">
          <motion.div
            className="h-full bg-white"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.15, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;