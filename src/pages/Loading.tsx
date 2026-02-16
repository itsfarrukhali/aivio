import { motion } from "motion/react";
import { Sparkles, Loader2, Zap, Award, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing AI...");

  useEffect(() => {
    const statuses = [
      "Initializing AI...",
      "Processing your request...",
      "Generating creative content...",
      "Applying AI magic...",
      "Finalizing generation...",
    ];

    let currentStatus = 0;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            window.location.href = "/";
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const statusInterval = setInterval(() => {
      currentStatus = (currentStatus + 1) % statuses.length;
      setStatus(statuses[currentStatus]);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute top-1/4 -z-10 left-1/4 size-96 bg-pink-600 blur-[300px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 -z-10 right-1/4 size-96 bg-purple-600 blur-[300px] opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Logo/Icon */}
        <motion.div
          className="relative mb-8"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="size-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto relative">
            <Sparkles className="size-12 text-white absolute" />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-pink-500/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aivio
        </motion.h1>

        {/* Status Text */}
        <motion.p
          className="text-slate-300 text-lg mb-2"
          key={status}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {status}
        </motion.p>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-slate-400 text-sm mt-3">{progress}%</p>
        </div>

        {/* Feature Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: Zap, text: "AI-Powered" },
            { icon: Award, text: "High Quality" },
            { icon: TrendingUp, text: "Fast Generation" },
          ].map((feature, index) => (
            <motion.div
              key={feature.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <feature.icon className="size-4 text-pink-400" />
              <span className="text-sm text-slate-300">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          className="mt-8"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Loader2 className="size-8 text-pink-500 mx-auto animate-spin" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
