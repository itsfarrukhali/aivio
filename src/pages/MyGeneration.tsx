import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { Project } from "../types";
import { dummyGenerations } from "../../public/assets/assets";
import {
  Loader2,
  Sparkles,
  ImageIcon,
  VideoIcon,
  Calendar,
  Grid3x3,
} from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const MyGeneration = () => {
  const [generations, setGenerations] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<"all" | "images" | "videos">("all");

  const fetchMyGenerations = async () => {
    setTimeout(() => {
      setGenerations(dummyGenerations as unknown as Project[]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchMyGenerations();
  }, []);

  // Filter generations
  const filteredGenerations = generations.filter((gen) => {
    if (filter === "images") return gen.generatedImage && !gen.generatedVideo;
    if (filter === "videos") return gen.generatedVideo;
    return true;
  });

  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 mt-16">
      {/* Background Effects */}
      <div className="absolute top-20 -z-10 left-1/4 size-72 bg-pink-600 blur-[300px] opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-3">
                <Sparkles className="size-4 text-pink-400" />
                <span className="text-sm text-pink-300 font-medium">
                  Your AI Creations
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
                My Generations
              </h1>
              <p className="text-slate-400 text-base">
                Manage and view all your AI-generated UGC content in one place.
              </p>
            </div>

            <button
              onClick={() => (window.location.href = "/generate")}
              className="bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 whitespace-nowrap"
            >
              <Sparkles className="size-4" />
              Create New
            </button>
          </div>

          {/* Stats Overview */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[
              {
                label: "Total Creations",
                value: generations.length,
                icon: Grid3x3,
              },
              {
                label: "Images",
                value: generations.filter((g) => g.generatedImage).length,
                icon: ImageIcon,
              },
              {
                label: "Videos",
                value: generations.filter((g) => g.generatedVideo).length,
                icon: VideoIcon,
              },
              {
                label: "This Month",
                value: Math.floor(generations.length * 0.6),
                icon: Calendar,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className="size-5 text-pink-500" />
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                filter === "all"
                  ? "bg-pink-600 text-white"
                  : "bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-700"
              }`}
            >
              <Grid3x3 className="size-4 inline mr-2" />
              All
            </button>
            <button
              onClick={() => setFilter("images")}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                filter === "images"
                  ? "bg-pink-600 text-white"
                  : "bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-700"
              }`}
            >
              <ImageIcon className="size-4 inline mr-2" />
              Images
            </button>
            <button
              onClick={() => setFilter("videos")}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                filter === "videos"
                  ? "bg-pink-600 text-white"
                  : "bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-700"
              }`}
            >
              <VideoIcon className="size-4 inline mr-2" />
              Videos
            </button>
          </motion.div>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="size-12 text-pink-500" />
            </motion.div>
            <p className="text-slate-400">Loading your creations...</p>
          </div>
        ) : filteredGenerations.length === 0 ? (
          /* Empty State */
          <motion.div
            className="text-center py-20 bg-slate-950/50 rounded-3xl border border-slate-800 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="size-20 rounded-full bg-slate-900/50 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="size-10 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {filter === "all" ? "No Generations Yet" : `No ${filter} found`}
            </h3>
            <p className="text-slate-500 mb-6 max-w-md mx-auto">
              {filter === "all"
                ? "Start creating amazing AI-generated UGC content with Aivio!"
                : `You haven't created any ${filter} yet. Try changing your filter.`}
            </p>
            {filter === "all" && (
              <button
                onClick={() => (window.location.href = "/generate")}
                className="bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white rounded-full px-8 py-3 font-medium"
              >
                Generate Your First Creation
              </button>
            )}
          </motion.div>
        ) : (
          /* Generation Grid */
          <motion.div
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {filteredGenerations.map((gen) => (
              <ProjectCard
                key={gen.id}
                gen={gen}
                setGenerations={setGenerations}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyGeneration;
