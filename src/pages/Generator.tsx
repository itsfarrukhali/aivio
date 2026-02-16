"use client";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import UploadZone from "../components/UploadZone";
import {
  Loader2,
  RectangleHorizontalIcon,
  RectangleVerticalIcon,
  Wand2,
  SparklesIcon,
  VideoIcon,
  ImageIcon,
  Zap,
  Palette,
  Info,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ContentType = "image" | "video";
type CreativeStyle =
  | "ugc"
  | "professional"
  | "lifestyle"
  | "product-focus"
  | "storytelling";

const Generator = () => {
  // Project & Content Details
  const [name, setName] = useState("");
  const [contentType, setContentType] = useState<ContentType>("image");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // Visual Settings
  const [aspectRatio, setAspectRatio] = useState<"9:16" | "16:9">("9:16");
  const [creativeStyle, setCreativeStyle] = useState<CreativeStyle>("ugc");

  // Assets
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);

  // AI Control
  const [userPrompt, setUserPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock credits system (will be connected to backend later)
  const [credits] = useState(50);
  const creditsNeeded = contentType === "video" ? 5 : 2;

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "product" | "model",
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === "product") setProductImage(e.target.files[0]);
      else setModelImage(e.target.files[0]);
    }
  };

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate credits
    if (credits < creditsNeeded) {
      alert("Insufficient credits! Please upgrade your plan.");
      return;
    }

    setIsGenerating(true);

    // TODO: Replace with actual AI API call in Phase 2
    // This will integrate with Google Gemini API
    setTimeout(() => {
      setIsGenerating(false);
      alert(
        "🎉 Generation complete! (This is a mock - API integration coming in Phase 2)",
      );
    }, 3000);
  };

  const creativeStyles = [
    {
      value: "ugc" as CreativeStyle,
      label: "UGC Style",
      description: "Authentic user-generated content feel",
    },
    {
      value: "professional" as CreativeStyle,
      label: "Professional",
      description: "Polished commercial advertising",
    },
    {
      value: "lifestyle" as CreativeStyle,
      label: "Lifestyle",
      description: "Natural everyday moments",
    },
    {
      value: "product-focus" as CreativeStyle,
      label: "Product Focus",
      description: "Highlight features & benefits",
    },
    {
      value: "storytelling" as CreativeStyle,
      label: "Storytelling",
      description: "Narrative-driven content",
    },
  ];

  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20">
      {/* Background blur effects */}
      <div className="absolute top-20 -z-10 right-1/4 size-72 bg-pink-600 blur-[300px] opacity-30"></div>
      <div className="absolute bottom-40 -z-10 left-1/3 size-96 bg-pink-500 blur-[350px] opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          text1="AI Generator"
          text2="Create Scroll-Stopping UGC Content"
          text3="Transform your ideas into viral-worthy UGC ads, short-form videos, and marketing visuals using cutting-edge AI technology."
        />

        {/* Credits Display */}
        <motion.div
          className="mt-8 max-w-md mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-pink-950/50 to-purple-950/50 border border-pink-500/30 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Zap className="size-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Available Credits</p>
                  <p className="text-xl font-bold text-white">{credits}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">This will cost</p>
                <p className="text-lg font-semibold text-pink-400">
                  {creditsNeeded} credits
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <form onSubmit={handleGenerate} className="mt-12 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Upload Zones */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 280, damping: 70 }}
            >
              {/* Content Type Selection */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <SparklesIcon className="size-5 text-pink-500" />
                  <h3 className="text-lg font-semibold text-white">
                    Content Type
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setContentType("image")}
                    className={`flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all ${
                      contentType === "image"
                        ? "border-pink-500 bg-pink-950/30"
                        : "border-slate-700 bg-slate-950/30 hover:border-slate-600"
                    }`}
                  >
                    <ImageIcon
                      className={`size-8 ${
                        contentType === "image"
                          ? "text-pink-500"
                          : "text-slate-400"
                      }`}
                    />
                    <div className="text-center">
                      <p
                        className={`text-sm font-semibold ${
                          contentType === "image"
                            ? "text-white"
                            : "text-slate-400"
                        }`}
                      >
                        AI Image
                      </p>
                      <p className="text-xs text-slate-500 mt-1">2 credits</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setContentType("video")}
                    className={`flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all ${
                      contentType === "video"
                        ? "border-pink-500 bg-pink-950/30"
                        : "border-slate-700 bg-slate-950/30 hover:border-slate-600"
                    }`}
                  >
                    <VideoIcon
                      className={`size-8 ${
                        contentType === "video"
                          ? "text-pink-500"
                          : "text-slate-400"
                      }`}
                    />
                    <div className="text-center">
                      <p
                        className={`text-sm font-semibold ${
                          contentType === "video"
                            ? "text-white"
                            : "text-slate-400"
                        }`}
                      >
                        AI Video
                      </p>
                      <p className="text-xs text-slate-500 mt-1">5 credits</p>
                    </div>
                  </button>
                </div>

                <div className="mt-4 p-3 bg-blue-950/20 border border-blue-900/30 rounded-lg">
                  <p className="text-xs text-blue-300 flex items-start gap-2">
                    <Info className="size-4 mt-0.5 flex-shrink-0" />
                    <span>
                      {contentType === "video"
                        ? "Video generation creates 5-15 second UGC-style clips (Coming in Phase 5)"
                        : "Image generation creates high-quality marketing visuals"}
                    </span>
                  </p>
                </div>
              </div>

              {/* Upload Assets */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Palette className="size-5 text-pink-500" />
                  <h3 className="text-lg font-semibold text-white">
                    Upload Assets
                  </h3>
                </div>

                <div className="space-y-6">
                  <UploadZone
                    label="Product Image"
                    file={productImage}
                    onClear={() => setProductImage(null)}
                    onChange={(e) => handleFileChange(e, "product")}
                  />
                  <UploadZone
                    label="Model Image"
                    file={modelImage}
                    onClear={() => setModelImage(null)}
                    onChange={(e) => handleFileChange(e, "model")}
                  />
                </div>

                <div className="mt-6 p-4 bg-pink-950/30 border border-pink-900/50 rounded-xl">
                  <p className="text-xs text-slate-400">
                    <span className="text-pink-400 font-semibold">
                      Pro Tip:
                    </span>{" "}
                    Use high-resolution images (1080x1920px recommended). Clear
                    backgrounds and good lighting produce the best AI results.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form Fields */}
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 70,
                delay: 0.1,
              }}
            >
              {/* Project Details */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Project Details
                </h3>

                <div className="space-y-5">
                  {/* Project Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Project Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Summer Campaign 2024"
                      required
                      className="w-full bg-slate-950/50 rounded-xl border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all"
                    />
                  </div>

                  {/* Product Name */}
                  <div>
                    <label
                      htmlFor="productName"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Product Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="e.g., Hydrating Face Serum"
                      required
                      className="w-full bg-slate-950/50 rounded-xl border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all"
                    />
                  </div>

                  {/* Product Description */}
                  <div>
                    <label
                      htmlFor="productDescription"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Product Description{" "}
                      <span className="text-xs text-slate-500">(optional)</span>
                    </label>
                    <textarea
                      id="productDescription"
                      rows={3}
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      placeholder="Key features, benefits, target audience, unique selling points..."
                      className="w-full bg-slate-950/50 rounded-xl border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Creative Style Selection */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Creative Style
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {creativeStyles.map((style) => (
                    <button
                      key={style.value}
                      type="button"
                      onClick={() => setCreativeStyle(style.value)}
                      className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                        creativeStyle === style.value
                          ? "border-pink-500 bg-pink-950/30"
                          : "border-slate-700 bg-slate-950/30 hover:border-slate-600"
                      }`}
                    >
                      {creativeStyle === style.value && (
                        <CheckCircle2 className="absolute top-2 right-2 size-4 text-pink-500" />
                      )}
                      <p
                        className={`text-sm font-semibold mb-1 ${
                          creativeStyle === style.value
                            ? "text-white"
                            : "text-slate-300"
                        }`}
                      >
                        {style.label}
                      </p>
                      <p className="text-xs text-slate-500">
                        {style.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Settings */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Visual Settings
                </h3>

                <div className="space-y-5">
                  {/* Aspect Ratio */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Aspect Ratio <span className="text-pink-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setAspectRatio("9:16")}
                        className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                          aspectRatio === "9:16"
                            ? "border-pink-500 bg-pink-950/30"
                            : "border-slate-700 bg-slate-950/30 hover:border-slate-600"
                        }`}
                      >
                        <RectangleVerticalIcon
                          className={`size-8 ${
                            aspectRatio === "9:16"
                              ? "text-pink-500"
                              : "text-slate-400"
                          }`}
                        />
                        <div className="text-center">
                          <p
                            className={`text-sm font-semibold ${
                              aspectRatio === "9:16"
                                ? "text-white"
                                : "text-slate-400"
                            }`}
                          >
                            Portrait
                          </p>
                          <p className="text-xs text-slate-500">
                            9:16 • Stories/Reels
                          </p>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAspectRatio("16:9")}
                        className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                          aspectRatio === "16:9"
                            ? "border-pink-500 bg-pink-950/30"
                            : "border-slate-700 bg-slate-950/30 hover:border-slate-600"
                        }`}
                      >
                        <RectangleHorizontalIcon
                          className={`size-8 ${
                            aspectRatio === "16:9"
                              ? "text-pink-500"
                              : "text-slate-400"
                          }`}
                        />
                        <div className="text-center">
                          <p
                            className={`text-sm font-semibold ${
                              aspectRatio === "16:9"
                                ? "text-white"
                                : "text-slate-400"
                            }`}
                          >
                            Landscape
                          </p>
                          <p className="text-xs text-slate-500">
                            16:9 • YouTube/Ads
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Custom AI Prompt */}
                  <div>
                    <label
                      htmlFor="userPrompt"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Custom AI Instructions{" "}
                      <span className="text-xs text-slate-500">(optional)</span>
                    </label>
                    <textarea
                      id="userPrompt"
                      rows={4}
                      value={userPrompt}
                      onChange={(e) => setUserPrompt(e.target.value)}
                      placeholder="Add specific instructions: mood, colors, settings, call-to-action, etc..."
                      className="w-full bg-slate-950/50 rounded-xl border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all resize-none"
                    />
                    <p className="mt-2 text-xs text-slate-500">
                      Example: "Bright outdoor setting, focus on product
                      texture, include discount text"
                    </p>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <motion.div
                className="flex justify-center sm:justify-end"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 280,
                  damping: 70,
                }}
              >
                <button
                  type="submit"
                  disabled={
                    isGenerating ||
                    !name ||
                    !productName ||
                    !productImage ||
                    !modelImage ||
                    credits < creditsNeeded
                  }
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-pink-600 disabled:hover:to-purple-600 transition-all text-white px-10 py-4 rounded-xl font-semibold text-base shadow-lg shadow-pink-600/30"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      <span>Generating Magic...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="size-5" />
                      <span>
                        Generate {contentType === "video" ? "Video" : "Image"}
                      </span>
                    </>
                  )}
                </button>
              </motion.div>

              {/* Info Box */}
              <AnimatePresence>
                {credits < creditsNeeded && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-950/30 border border-red-900/50 rounded-xl"
                  >
                    <p className="text-sm text-red-300 flex items-center gap-2">
                      <Info className="size-4" />
                      Insufficient credits. Please upgrade your plan to continue
                      generating.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Generator;
