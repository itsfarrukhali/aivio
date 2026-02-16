import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { Project } from "../types";
import { dummyGenerations } from "../../public/assets/assets";
import {
  ImageIcon,
  Loader2,
  RefreshCw,
  Sparkles,
  VideoIcon,
  Download,
  Share2,
  Heart,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const Results = () => {
  const [project, setProject] = useState<Project>({} as Project);
  const [loading, setLoading] = useState<boolean>(true);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const fetchProjectData = async () => {
    setTimeout(() => {
      setProject(dummyGenerations[0]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  const handleGenerateVideo = async () => {
    setIsGenerating(true);
    // TODO: Integrate video generation API
    setTimeout(() => {
      setIsGenerating(false);
    }, 5000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.productName,
        text: project.productDescription,
        url: window.location.href,
      });
    }
  };

  return loading ? (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="size-12 text-pink-500" />
      </motion.div>
      <p className="text-slate-400 mt-4">Loading your creation...</p>
    </div>
  ) : (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 mt-16">
      {/* Background Effects */}
      <div className="absolute top-20 -z-10 right-1/4 size-72 bg-pink-600 blur-[300px] opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-3">
              <Sparkles className="size-4 text-pink-400" />
              <span className="text-sm text-pink-300 font-medium">
                AI Generated
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Generation Result
            </h1>
          </div>

          <Link
            to="/generate"
            className="bg-slate-900/50 hover:bg-slate-800 border border-slate-700 hover:border-pink-500/50 text-white rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 transition-all"
          >
            <RefreshCw className="size-4" />
            New Generation
          </Link>
        </motion.header>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Result Display */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Preview Card */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
              <div
                className={`${
                  project.aspectRatio === 9 / 16 ||
                  project.aspectRatio === "9:16"
                    ? "aspect-[9/16]"
                    : project.aspectRatio === "1:1"
                    ? "aspect-square"
                    : "aspect-video"
                } rounded-xl bg-slate-900 overflow-hidden relative`}
              >
                {project?.generatedVideo ? (
                  <video
                    src={project?.generatedVideo}
                    controls
                    controlsList="nodownload"
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <img
                    src={project?.generatedImage}
                    alt={project?.productName}
                    className="w-full h-full object-contain"
                  />
                )}

                {/* Overlay Info - Only show when paused */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
                  <h2 className="text-white font-semibold text-lg mb-1">
                    {project?.productName}
                  </h2>
                  <p className="text-slate-300 text-sm line-clamp-2">
                    {project?.productDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Details Card */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="size-5 text-pink-500" />
                Generation Details
              </h3>

              <div className="space-y-4">
                {/* User Prompt */}
                {project?.userPrompt && (
                  <div>
                    <p className="text-sm text-slate-400 mb-2">AI Prompt</p>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
                      <p className="text-sm text-slate-300">
                        {project.userPrompt}
                      </p>
                    </div>
                  </div>
                )}

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Aspect Ratio</p>
                    <p className="text-white font-medium">
                      {project.aspectRatio === 9 / 16 ? "9:16" : "16:9"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Created</p>
                    <p className="text-white font-medium">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Actions Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Download Actions */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Download className="size-5 text-pink-500" />
                Download
              </h3>
              <div className="flex flex-col gap-3">
                <a href={project?.generatedImage} download>
                  <button
                    disabled={!project?.generatedImage}
                    className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl py-3 px-4 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                  >
                    <ImageIcon className="size-4" />
                    Download Image
                  </button>
                </a>

                <a href={project?.generatedVideo} download>
                  <button
                    disabled={!project?.generatedVideo}
                    className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl py-3 px-4 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                  >
                    <VideoIcon className="size-4" />
                    Download Video
                  </button>
                </a>

                <button
                  onClick={handleShare}
                  className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl py-3 px-4 transition flex items-center justify-center gap-2"
                >
                  <Share2 className="size-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Video Generation */}
            {!project.generatedVideo && (
              <div className="bg-gradient-to-br from-pink-600/10 to-purple-600/10 border border-pink-500/20 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <VideoIcon className="size-24" />
                </div>
                <div className="relative">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="size-5 text-pink-400" />
                    Video Magic
                  </h3>
                  <p className="text-slate-300 text-sm mb-6">
                    Turn this image into a dynamic AI-powered video animation
                  </p>
                  <button
                    onClick={handleGenerateVideo}
                    disabled={isGenerating}
                    className="w-full bg-pink-600 hover:bg-pink-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl py-3 px-4 font-medium transition flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Generating Video...
                      </>
                    ) : (
                      <>
                        <Sparkles className="size-4" />
                        Generate Video
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {project.generatedVideo && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="size-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="size-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">
                    Video Ready!
                  </h3>
                  <p className="text-sm text-slate-300">
                    Your AI-powered video has been generated successfully
                  </p>
                </div>
              </div>
            )}

            {/* Engagement Stats */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Engagement</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Heart className="size-4" />
                    <span className="text-sm">Likes</span>
                  </div>
                  <span className="text-white font-semibold">
                    {Math.floor(Math.random() * 200) + 50}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Eye className="size-4" />
                    <span className="text-sm">Views</span>
                  </div>
                  <span className="text-white font-semibold">
                    {Math.floor(Math.random() * 1000) + 300}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Results;
