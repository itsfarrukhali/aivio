import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { Project } from "../types";
import { dummyGenerations } from "../../public/assets/assets";
import { Loader2, Sparkles, Heart, Eye, Play, ImageIcon } from "lucide-react";

const Comm = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProjects = async () => {
    setTimeout(() => {
      setProjects(dummyGenerations);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Mock engagement stats
  const getEngagementStats = () => ({
    likes: Math.floor(Math.random() * 500) + 50,
    views: Math.floor(Math.random() * 2000) + 200,
  });

  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 mt-16">
      {/* Background Effects */}
      <div className="absolute top-20 -z-10 right-1/4 size-72 bg-pink-600 blur-[300px] opacity-30"></div>
      <div className="absolute bottom-40 -z-10 left-1/3 size-96 bg-purple-500 blur-[350px] opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          className="mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
            <Sparkles className="size-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">
              AI-Powered Creativity
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Community Showcase
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Discover amazing UGC content created by our community using Aivio's
            AI-powered generator. Get inspired and create your own!
          </p>
        </motion.header>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="size-12 text-pink-500" />
            </motion.div>
            <p className="text-slate-400">Loading creative masterpieces...</p>
          </div>
        ) : (
          <>
            {/* Stats Bar */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[
                {
                  label: "Total Creations",
                  value: projects.length,
                  icon: Sparkles,
                },
                { label: "Active Creators", value: "1.2K+", icon: Heart },
                { label: "Total Views", value: "89K", icon: Eye },
                { label: "Videos Generated", value: "3.5K+", icon: Play },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-pink-500/30 transition-all"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <stat.icon className="size-6 text-pink-500 mb-2" />
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {projects.map((project, index) => {
                const stats = getEngagementStats();
                const isVideo = !!project.generatedVideo;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="break-inside-avoid group"
                  >
                    <div className="bg-slate-950/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm">
                      {/* Image/Video Preview */}
                      <div className="relative overflow-hidden bg-slate-900">
                        {isVideo ? (
                          <video
                            src={project.generatedVideo}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            muted
                            loop
                            autoPlay
                            playsInline
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => {
                              e.currentTarget.pause();
                              e.currentTarget.currentTime = 0;
                            }}
                          />
                        ) : (
                          <img
                            src={project.generatedImage}
                            alt={project.productName}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}

                        {/* Type Badge */}
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                          {isVideo ? (
                            <>
                              <Play className="size-3 text-pink-400 fill-pink-400" />
                              <span className="text-xs text-white font-medium">
                                Video
                              </span>
                            </>
                          ) : (
                            <>
                              <ImageIcon className="size-3 text-pink-400" />
                              <span className="text-xs text-white font-medium">
                                Image
                              </span>
                            </>
                          )}
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white text-sm line-clamp-2">
                              {project.userPrompt || "AI-generated UGC content"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content Info */}
                      <div className="p-4">
                        <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">
                          {project.productName}
                        </h3>
                        <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                          {project.productDescription ||
                            "Creative AI-powered visual"}
                        </p>

                        {/* Engagement Stats */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-slate-400 hover:text-pink-500 transition-colors cursor-pointer">
                              <Heart className="size-4" />
                              <span className="text-sm font-medium">
                                {stats.likes}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-400">
                              <Eye className="size-4" />
                              <span className="text-sm font-medium">
                                {stats.views}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs text-slate-500">
                            {new Date(project.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section */}
            <motion.div
              className="mt-16 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 border border-pink-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ready to Create Your Own?
                </h2>
                <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                  Join thousands of creators using Aivio to generate stunning
                  UGC content with AI. Start creating in seconds!
                </p>
                <button className="bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white rounded-full px-8 py-3 text-base font-medium">
                  Start Creating for Free
                </button>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Comm;
