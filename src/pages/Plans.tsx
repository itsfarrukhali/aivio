import { motion } from "motion/react";
import PricingSection from "../sections/PricingSection";
import { Sparkles, Zap, Infinity, CheckCircle2 } from "lucide-react";

const Plans = () => {
  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-6 lg:px-12 xl:px-24 py-2 sm:py-6 md:py-10 mt-16">
      {/* Background Effects */}
      <div className="absolute top-20 -z-10 left-1/4 size-96 bg-pink-600 blur-[300px] opacity-30"></div>
      <div className="absolute bottom-40 -z-10 right-1/3 size-96 bg-purple-500 blur-[350px] opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
            <Sparkles className="size-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">
              Flexible Pricing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
            Choose Your{" "}
            <span className="move-gradient px-2 rounded-xl">Perfect Plan</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Scale your content creation with Aivio. From hobbyists to
            enterprises, we have the perfect plan for your needs.
          </p>
        </motion.div>

        {/* Pricing Section */}
        <PricingSection />

        {/* Credit Information */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 border border-pink-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              How Credits Work
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              {[
                {
                  icon: Zap,
                  title: "Images",
                  credits: "2 Credits",
                  description:
                    "Generate stunning AI-powered images for your UGC content",
                  color: "pink",
                },
                {
                  icon: Infinity,
                  title: "Videos",
                  credits: "10 Credits",
                  description:
                    "Create immersive AI-generated video content that converts",
                  color: "purple",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 text-left hover:border-pink-500/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div
                    className={`size-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center mb-4`}
                  >
                    <item.icon className={`size-6 text-${item.color}-500`} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p
                    className={`text-2xl font-bold text-${item.color}-400 mb-3`}
                  >
                    {item.credits}
                  </p>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                "Credits never expire - use them at your own pace",
                "Generate unlimited variations until you're satisfied",
                "All generations include commercial usage rights",
                "Priority support for Pro and Business plans",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center justify-center gap-2 text-slate-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle2 className="size-5 text-pink-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                q: "What happens to unused credits?",
                a: "Credits roll over each month and never expire. Use them whenever you need them!",
              },
              {
                q: "Is there a free trial?",
                a: "Yes! Start with our free Starter plan to test Aivio's capabilities before upgrading.",
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 14-day money-back guarantee on all paid plans. No questions asked!",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-pink-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-2 text-pink-400">
                  {faq.q}
                </h4>
                <p className="text-slate-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Content?
          </h3>
          <p className="text-slate-400 mb-6">
            Join thousands of creators using Aivio to generate stunning UGC
            content
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white rounded-full px-8 py-3 text-base font-medium">
            Start Creating Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Plans;
