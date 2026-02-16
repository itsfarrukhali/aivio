import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import type { Project } from "../types";
import { useState } from "react";
import {
  MoreVertical,
  ImageIcon,
  Loader2,
  Share2,
  Trash2,
  VideoIcon,
  Eye,
  Sparkles,
  Clock,
} from "lucide-react";

const ProjectCard = ({
  gen,
  setGenerations,
  forCommunity = false,
}: {
  gen: Project;
  setGenerations: React.Dispatch<React.SetStateAction<Project[]>>;
  forCommunity?: boolean;
}) => {
  const navigate = useNavigate();
  const [menu, setMenuOpen] = useState<boolean>(false);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (!confirm) return;

    // TODO: API call to delete project
    setGenerations((prev) => prev.filter((p) => p.id !== id));
  };

  const togglePublish = async (projectId: string) => {
    // TODO: API call to toggle publish status
    setGenerations((prev) =>
      prev.map((p) =>
        p.id === projectId ? { ...p, isPublished: !p.isPublished } : p
      )
    );
  };

  return (
    <motion.div
      key={gen.id}
      className="mb-4 break-inside-avoid"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-slate-950/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm group">
        {/* Preview */}
        <div
          className={`${
            gen?.aspectRatio === "9:16" || gen?.aspectRatio === 9 / 16
              ? "aspect-[9/16]"
              : ""
          } relative overflow-hidden bg-slate-900`}
        >
          {gen.generatedImage && (
            <img
              src={gen.generatedImage}
              alt={gen.productName}
              className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${
                gen.generatedVideo
                  ? "group-hover:opacity-0"
                  : "group-hover:scale-110"
              }`}
            />
          )}

          {gen.generatedVideo && (
            <video
              src={gen.generatedVideo}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
          )}

          {!gen?.generatedImage && !gen?.generatedVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900">
              <Loader2 className="size-8 animate-spin text-pink-500 mb-2" />
              <span className="text-slate-400 text-sm">Generating...</span>
            </div>
          )}

          {/* Status Badges */}
          <div className="absolute top-3 left-3 flex gap-2 items-center">
            {gen.isGenerating && (
              <span className="text-xs px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 font-medium backdrop-blur-sm">
                <Sparkles className="inline size-3 mr-1" />
                Generating
              </span>
            )}

            {gen.isPublished && (
              <span className="text-xs px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 font-medium backdrop-blur-sm">
                Published
              </span>
            )}
          </div>

          {/* Action Menu */}
          {!forCommunity && (
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menu)}
                  onBlur={() => setTimeout(() => setMenuOpen(false), 200)}
                  className="bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full p-2 transition"
                >
                  <MoreVertical className="size-5 text-white" />
                </button>

                {menu && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-950 border border-slate-800 rounded-xl shadow-lg overflow-hidden z-20 backdrop-blur-sm">
                    {gen.generatedImage && (
                      <a
                        href={gen.generatedImage}
                        download
                        className="flex gap-2 items-center px-4 py-3 hover:bg-slate-800 transition text-sm text-slate-300"
                      >
                        <ImageIcon size={16} className="text-pink-400" />
                        Download Image
                      </a>
                    )}

                    {gen.generatedVideo && (
                      <a
                        href={gen.generatedVideo}
                        download
                        className="flex gap-2 items-center px-4 py-3 hover:bg-slate-800 transition text-sm text-slate-300"
                      >
                        <VideoIcon size={16} className="text-pink-400" />
                        Download Video
                      </a>
                    )}

                    {(gen.generatedImage || gen.generatedVideo) && (
                      <button
                        onClick={() =>
                          navigator.share({
                            url: gen.generatedImage || gen.generatedVideo,
                            title: gen.productName,
                            text: gen.productDescription,
                          })
                        }
                        className="w-full flex gap-2 items-center px-4 py-3 hover:bg-slate-800 transition text-sm text-slate-300"
                      >
                        <Share2 size={16} className="text-pink-400" />
                        Share
                      </button>
                    )}

                    <div className="border-t border-slate-800"></div>

                    <button
                      onClick={() => handleDelete(gen.id)}
                      className="w-full flex gap-2 items-center px-4 py-3 hover:bg-red-950/20 transition text-sm text-red-400"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Source Images Overlay */}
          {gen.uploadedImages && gen.uploadedImages.length > 0 && (
            <div className="absolute left-3 bottom-3 flex items-center gap-1">
              {gen.uploadedImages.slice(0, 2).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Source ${idx + 1}`}
                  className="size-10 object-cover rounded-full border-2 border-slate-800 bg-slate-900"
                  style={{ marginLeft: idx > 0 ? "-12px" : "0" }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-base mb-1 truncate">
                {gen.productName}
              </h3>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="size-3" />
                <span>
                  {new Date(gen.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 bg-slate-900 border border-slate-700 rounded-lg text-slate-400 whitespace-nowrap">
              {typeof gen.aspectRatio === "string"
                ? gen.aspectRatio
                : gen.aspectRatio === 9 / 16
                ? "9:16"
                : "16:9"}
            </span>
          </div>

          {/* Product Description */}
          {gen.productDescription && (
            <p className="text-sm text-slate-400 line-clamp-2 mb-3">
              {gen.productDescription}
            </p>
          )}

          {/* User Prompt */}
          {gen.userPrompt && (
            <div className="mb-4">
              <div className="text-xs text-slate-500 bg-slate-900/50 border border-slate-800 p-2.5 rounded-lg line-clamp-2">
                {gen.userPrompt}
              </div>
            </div>
          )}

          {/* Buttons */}
          {!forCommunity && (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  navigate(`/result/${gen.id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-pink-500/50 text-white rounded-xl text-sm font-medium transition-all"
              >
                <Eye className="size-4" />
                View
              </button>
              <button
                onClick={() => togglePublish(gen.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  gen.isPublished
                    ? "bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20"
                    : "bg-pink-600 hover:bg-pink-700 text-white"
                }`}
              >
                {gen.isPublished ? "Published" : "Publish"}
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
