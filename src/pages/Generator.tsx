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
} from "lucide-react";
import { motion } from "motion/react";

const Generator = () => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [aspectRatio, setAspectRatio] = useState<"9:16" | "16:9">("9:16");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [userPrompt, setUserPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

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
    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20">
      {/* Background blur effects */}
      <div className="absolute top-20 -z-10 right-1/4 size-72 bg-pink-600 blur-[300px] opacity-30"></div>
      <div className="absolute bottom-40 -z-10 left-1/3 size-96 bg-pink-500 blur-[350px] opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          text1="Generator"
          text2="Create AI-Powered UGC Content"
          text3="Upload your model and product images to generate stunning UGC ads, short-form videos and social media posts instantly."
        />

        <form onSubmit={handleGenerate} className="mt-12 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Upload Zones */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 280, damping: 70 }}
            >
              <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <SparklesIcon className="size-5 text-pink-500" />
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
                    <span className="text-pink-400 font-semibold">Tip:</span>{" "}
                    Use high-quality images for best results. Recommended size:
                    1080x1920px for portrait mode.
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
                      <span className="text-xs text-pink-400">(optional)</span>
                    </label>
                    <textarea
                      id="productDescription"
                      rows={4}
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      placeholder="Describe your product features, benefits, and key selling points..."
                      className="w-full bg-slate-950/50 rounded-xl border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all resize-none"
                    />
                  </div>

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
                          <p className="text-xs text-slate-500">9:16</p>
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
                          <p className="text-xs text-slate-500">16:9</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Custom Prompt */}
                  <div>
                    <label
                      htmlFor="userPrompt"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Custom AI Prompt{" "}
                      <span className="text-xs text-pink-400">(optional)</span>
                    </label>
                    <textarea
                      id="userPrompt"
                      rows={4}
                      value={userPrompt}
                      onChange={(e) => setUserPrompt(e.target.value)}
                      placeholder="Add specific instructions for the AI to customize your content generation..."
                      className="w-full bg-slate-950/50 rounded-xl border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all resize-none"
                    />
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
                    !modelImage
                  }
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-pink-600 transition-all text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-pink-600/30"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      <span>Generating Magic...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="size-5" />
                      <span>Generate Content</span>
                    </>
                  )}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Generator;
