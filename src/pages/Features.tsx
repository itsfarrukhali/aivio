import { motion } from "motion/react";
import FeaturesSection from "../sections/FeaturesSection";
import {
  Sparkles,
  Zap,
  Video,
  Image,
  Wand2,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-2 sm:py-6 md:py-10 mt-16">
      {/* Background Effects */}
      <div className="absolute top-20 -z-10 right-1/4 size-96 bg-pink-600 blur-[300px] opacity-30"></div>
      <div className="absolute bottom-40 -z-10 left-1/3 size-96 bg-purple-500 blur-[350px] opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
            <Sparkles className="size-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">
              Powered by AI
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
            Everything You Need to Create{" "}
            <span className="move-gradient px-3 mt-5 rounded-xl inline-block">
              Stunning UGC
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto">
            Aivio combines cutting-edge AI technology with intuitive design to
            help you generate professional UGC videos and images in seconds.
          </p>
        </motion.div>

        {/* Main Features Section */}
        <FeaturesSection />

        {/* Additional Features Grid */}
        <motion.div
          className="mt-20 sm:mt-32"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Why Creators Love Aivio
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Generate professional content in seconds, not hours. Our AI-powered engine delivers results instantly.",
                color: "pink",
              },
              {
                icon: Video,
                title: "Video Generation",
                description:
                  "Transform static images into engaging video content with AI-powered animation and effects.",
                color: "purple",
              },
              {
                icon: Image,
                title: "High-Quality Images",
                description:
                  "Create stunning product showcases and lifestyle images that drive engagement and conversions.",
                color: "pink",
              },
              {
                icon: Wand2,
                title: "AI-Powered Scripts",
                description:
                  "Generate compelling UGC scripts and captions that resonate with your target audience.",
                color: "purple",
              },
              {
                icon: TrendingUp,
                title: "Conversion Optimized",
                description:
                  "Every generation is optimized for maximum engagement and conversion rates on social media.",
                color: "pink",
              },
              {
                icon: CheckCircle2,
                title: "No Editing Required",
                description:
                  "Skip the learning curve. Get professional results without any video editing skills or software.",
                color: "purple",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-pink-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`size-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon
                    className={`size-6 text-${feature.color}-500`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          className="mt-20 sm:mt-32"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Perfect For Every Creator
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Whether you're a marketer, content creator, or startup founder,
              Aivio has the tools you need to succeed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Content Creators & Influencers",
                description:
                  "Create authentic UGC content that engages your audience and grows your following faster.",
                benefits: [
                  "Authentic product reviews",
                  "Lifestyle content",
                  "Tutorial videos",
                  "Unboxing content",
                ],
              },
              {
                title: "Marketing Teams & Agencies",
                description:
                  "Scale your content production and deliver high-converting ads for your clients effortlessly.",
                benefits: [
                  "Ad creatives",
                  "Social media content",
                  "Product launches",
                  "Campaign assets",
                ],
              },
              {
                title: "E-commerce & Brands",
                description:
                  "Showcase your products with professional UGC that drives sales and builds trust with customers.",
                benefits: [
                  "Product showcases",
                  "Customer testimonials",
                  "Brand storytelling",
                  "Promotional content",
                ],
              },
              {
                title: "Startups & Entrepreneurs",
                description:
                  "Launch and grow your business with professional content without hiring expensive agencies.",
                benefits: [
                  "MVP marketing",
                  "Social proof",
                  "Growth content",
                  "Brand building",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-gradient-to-br from-slate-950/50 to-slate-900/30 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm hover:border-pink-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {useCase.title}
                </h3>
                <p className="text-slate-400 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="size-4 text-pink-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 sm:mt-32 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 border border-pink-500/20 rounded-3xl p-12 sm:p-16 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Experience the Future of Content Creation?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators using Aivio to generate stunning UGC
              content with AI. Start creating in seconds!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white rounded-full px-8 py-4 text-base font-medium">
                Start Creating for Free
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-pink-500/50 text-white rounded-full px-8 py-4 text-base font-medium transition-all">
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
