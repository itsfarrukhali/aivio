import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "../types";
import { dummyGenerations } from "../../public/assets/assets";
import {
  Loader2,
  Search,
  Filter,
  TrendingUp,
  Clock,
  Sparkles,
  Heart,
  Eye,
  Play,
  Image as ImageIcon,
  Grid3x3,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

type FilterType = "all" | "images" | "videos";
type SortType = "recent" | "trending" | "popular";
type AspectRatioFilter = "all" | "9:16" | "16:9" | "1:1";

const Community = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<FilterType>("all");
  const [aspectRatioFilter, setAspectRatioFilter] =
    useState<AspectRatioFilter>("all");
  const [sortBy, setSortBy] = useState<SortType>("recent");
  const [showFilters, setShowFilters] = useState(false);

  const fetchProjects = async () => {
    // TODO: Replace with actual API call in Phase 3
    setTimeout(() => {
      setProjects(dummyGenerations as unknown as Project[]);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Apply filters and search
  useEffect(() => {
    let result = [...projects];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (project) =>
          project.productName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.productDescription
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()),
      );
    }

    // Content type filter
    if (filterType === "images") {
      result = result.filter((project) => project.generatedImage);
    } else if (filterType === "videos") {
      result = result.filter((project) => project.generatedVideo);
    }

    // Aspect ratio filter
    if (aspectRatioFilter !== "all") {
      result = result.filter(
        (project) => String(project.aspectRatio) === aspectRatioFilter,
      );
    }

    // Sorting (mock sorting - in real app, backend will handle this)
    result.sort((a, b) => {
      if (sortBy === "recent") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      // For trending/popular, we'd use actual metrics from backend
      return 0;
    });

    setFilteredProjects(result);
  }, [searchQuery, filterType, aspectRatioFilter, sortBy, projects]);

  // Mock engagement data (will come from backend in Phase 3)
  const getEngagementStats = (_projectId: string) => ({
    likes: Math.floor(Math.random() * 500) + 50,
    views: Math.floor(Math.random() * 2000) + 200,
  });

  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20">
      {/* Background Effects */}
      <div className="absolute top-20 -z-10 right-1/4 size-72 bg-pink-600 blur-[300px] opacity-30"></div>
      <div className="absolute bottom-40 -z-10 left-1/3 size-96 bg-purple-500 blur-[350px] opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionTitle
          text1="Community"
          text2="Discover AI Creativity"
          text3="Explore stunning UGC content created by our community using Aivio's AI-powered generator."
        />

        {/* Search & Filter Section */}
        <motion.div
          className="mt-8 sm:mt-12 space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name or description..."
              className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all backdrop-blur-sm"
            />
          </div>

          {/* Filter Buttons - Mobile First */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 flex-1">
              <button
                onClick={() => setFilterType("all")}
                className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  filterType === "all"
                    ? "bg-pink-600 text-white"
                    : "bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-700"
                }`}
              >
                <Grid3x3 className="size-4 inline mr-2" />
                All
              </button>
              <button
                onClick={() => setFilterType("images")}
                className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  filterType === "images"
                    ? "bg-pink-600 text-white"
                    : "bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-700"
                }`}
              >
                <ImageIcon className="size-4 inline mr-2" />
                Images
              </button>
              <button
                onClick={() => setFilterType("videos")}
                className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  filterType === "videos"
                    ? "bg-pink-600 text-white"
                    : "bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-700"
                }`}
              >
                <Play className="size-4 inline mr-2" />
                Videos
              </button>
            </div>

            {/* Advanced Filters Toggle & Sort */}
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-700 transition-all"
              >
                <Filter className="size-4" />
                <span className="hidden sm:inline">Filters</span>
                <ChevronDown
                  className={`size-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
                />
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortType)}
                aria-label="Sort by"
                className="px-4 py-2.5 rounded-xl font-medium text-sm bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-700 outline-none transition-all cursor-pointer"
              >
                <option value="recent">
                  <Clock className="size-4 inline mr-2" />
                  Recent
                </option>
                <option value="trending">Trending</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                  <h3 className="text-sm font-semibold text-white mb-4">
                    Aspect Ratio
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        value: "all" as AspectRatioFilter,
                        label: "All Ratios",
                      },
                      {
                        value: "9:16" as AspectRatioFilter,
                        label: "9:16 Portrait",
                      },
                      {
                        value: "16:9" as AspectRatioFilter,
                        label: "16:9 Landscape",
                      },
                      {
                        value: "1:1" as AspectRatioFilter,
                        label: "1:1 Square",
                      },
                    ].map((ratio) => (
                      <button
                        key={ratio.value}
                        onClick={() => setAspectRatioFilter(ratio.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          aspectRatioFilter === ratio.value
                            ? "bg-pink-600 text-white"
                            : "bg-slate-900/50 text-slate-400 hover:bg-slate-800 border border-slate-700"
                        }`}
                      >
                        {ratio.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mt-6 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-slate-400 text-sm">
            {loading ? (
              "Loading..."
            ) : (
              <>
                Showing{" "}
                <span className="text-white font-semibold">
                  {filteredProjects.length}
                </span>{" "}
                {filteredProjects.length === 1 ? "creation" : "creations"}
              </>
            )}
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <Loader2 className="size-10 animate-spin text-pink-500" />
            <p className="text-slate-400">Loading community creations...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          /* Empty State */
          <motion.div
            className="flex flex-col items-center justify-center min-h-[400px] gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="size-20 rounded-full bg-slate-900/50 flex items-center justify-center">
              <Sparkles className="size-10 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              No creations found
            </h3>
            <p className="text-slate-400 text-center max-w-md">
              Try adjusting your filters or search query to discover amazing
              AI-generated content.
            </p>
          </motion.div>
        ) : (
          /* Gallery Grid - Mobile First Masonry Layout */
          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {filteredProjects.map((project, index) => {
              const stats = getEngagementStats(project.id);
              const isVideo = !!project.generatedVideo;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="bg-slate-950/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm">
                    {/* Image/Video Preview */}
                    <div className="relative aspect-square sm:aspect-auto overflow-hidden bg-slate-900">
                      {isVideo ? (
                        <video
                          src={project.generatedVideo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          muted
                          loop
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
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}

                      {/* Video Indicator */}
                      {isVideo && (
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                          <Play className="size-3 text-pink-400 fill-pink-400" />
                          <span className="text-xs text-white font-medium">
                            Video
                          </span>
                        </div>
                      )}

                      {/* Aspect Ratio Badge */}
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <span className="text-xs text-white font-medium">
                          {String(project.aspectRatio)}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm line-clamp-2">
                            {project.userPrompt || "AI-generated content"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content Info */}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-white font-semibold text-base sm:text-lg mb-1 line-clamp-1">
                        {project.productName}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-4">
                        {project.productDescription ||
                          "Creative AI-powered visual"}
                      </p>

                      {/* Engagement Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1.5 text-slate-400 hover:text-pink-500 transition-colors group/like">
                            <Heart className="size-4 group-hover/like:fill-pink-500" />
                            <span className="text-xs sm:text-sm font-medium">
                              {stats.likes}
                            </span>
                          </button>
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <Eye className="size-4" />
                            <span className="text-xs sm:text-sm font-medium">
                              {stats.views}
                            </span>
                          </div>
                        </div>

                        {/* Time */}
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Clock className="size-3.5" />
                          <span className="text-xs">
                            {new Date(project.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Load More Button (Future Feature) */}
        {!loading && filteredProjects.length > 0 && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="px-8 py-3 bg-slate-900/50 hover:bg-slate-800 border border-slate-700 hover:border-pink-500/50 text-white rounded-xl font-medium transition-all flex items-center gap-2">
              <LayoutGrid className="size-5" />
              Load More Creations
            </button>
          </motion.div>
        )}

        {/* Stats Bar - Mobile First */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            {
              icon: Sparkles,
              label: "Total Creations",
              value: projects.length,
              color: "pink",
            },
            {
              icon: TrendingUp,
              label: "This Week",
              value: Math.floor(projects.length * 0.3),
              color: "purple",
            },
            { icon: Heart, label: "Total Likes", value: "12.5K", color: "red" },
            { icon: Eye, label: "Total Views", value: "89K", color: "blue" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-pink-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`size-10 sm:size-12 rounded-xl bg-${stat.color}-500/10 flex items-center justify-center`}
                >
                  <stat.icon
                    className={`size-5 sm:size-6 text-${stat.color}-500`}
                  />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
