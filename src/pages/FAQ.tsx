import { motion } from "motion/react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is Aivio?",
          a: "Aivio is an AI-powered platform that helps you create professional UGC (User-Generated Content) videos and images in seconds. Simply upload your product images and model photos, describe what you want, and our AI generates stunning content for your marketing campaigns.",
        },
        {
          q: "How do I get started?",
          a: "Getting started is easy! Sign up for a free account, choose your plan, and start generating content immediately. No credit card required for the free tier.",
        },
        {
          q: "Do I need any design or video editing skills?",
          a: "Not at all! Aivio is designed for everyone. Our AI handles all the technical work - you just need to provide your inputs and let the magic happen.",
        },
        {
          q: "What types of content can I create?",
          a: "You can create product showcases, lifestyle images, UGC videos, social media ads, testimonial-style content, and more. Our AI supports various aspect ratios including 9:16 (Stories/Reels), 16:9 (YouTube), and 1:1 (Instagram).",
        },
      ],
    },
    {
      category: "Pricing & Credits",
      questions: [
        {
          q: "How does the credit system work?",
          a: "Each generation costs credits: 2 credits for images and 10 credits for videos. Credits never expire and roll over month to month, so you can use them at your own pace.",
        },
        {
          q: "Can I upgrade or downgrade my plan?",
          a: "Yes! You can change your plan at any time. Upgrades take effect immediately, and for downgrades, the change applies at your next billing cycle.",
        },
        {
          q: "Do you offer refunds?",
          a: "We offer a 14-day money-back guarantee for new paid subscribers. If you're not satisfied, contact us within 14 days of your purchase for a full refund.",
        },
        {
          q: "What happens if I run out of credits?",
          a: "You can either wait until your next billing cycle for your credits to refresh, or purchase additional credits at any time. Your unused credits never expire.",
        },
      ],
    },
    {
      category: "Content & Usage Rights",
      questions: [
        {
          q: "Do I own the content I create?",
          a: "Yes! You retain full ownership and commercial rights to all AI-generated content created with Aivio. You're free to use it however you like for your business.",
        },
        {
          q: "Can I use the generated content commercially?",
          a: "Absolutely! All paid plans include full commercial usage rights. You can use the content for ads, social media, websites, and any other commercial purposes.",
        },
        {
          q: "Is my uploaded content private?",
          a: "Yes, your uploads are private and secure. We only use them to generate your requested content. You can opt-out of AI training in your account settings.",
        },
        {
          q: "Can I delete my generated content?",
          a: "Yes, you have full control over your content. You can delete any generation from your account at any time.",
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          q: "What file formats are supported?",
          a: "For uploads, we support JPG, PNG for images. Generated content is provided in MP4 format for videos and PNG/JPG for images, optimized for social media platforms.",
        },
        {
          q: "How long does generation take?",
          a: "Images typically generate in 10-30 seconds, while videos take 1-3 minutes. You'll receive a notification when your content is ready.",
        },
        {
          q: "What are the quality/resolution of outputs?",
          a: "All outputs are high-resolution and optimized for their intended platform. Images are typically 1080x1920 (9:16) or 1920x1080 (16:9), and videos are 1080p quality.",
        },
        {
          q: "Can I regenerate if I don't like the result?",
          a: "Yes! You can regenerate as many times as you want. Each regeneration uses credits, but we want you to be completely satisfied with your content.",
        },
      ],
    },
    {
      category: "Support",
      questions: [
        {
          q: "How can I contact support?",
          a: "You can reach us at support@aivio.com or through our contact form. Pro and Business plan users get priority support with faster response times.",
        },
        {
          q: "Do you offer tutorials or guides?",
          a: "Yes! We have a comprehensive knowledge base with video tutorials, best practices, and tips for getting the most out of Aivio.",
        },
        {
          q: "Is there a community I can join?",
          a: "Yes! Join our Discord community to connect with other creators, share tips, and get inspiration from the Aivio community showcase.",
        },
        {
          q: "Can I request new features?",
          a: "Absolutely! We love hearing from our users. Send us your feature requests at feedback@aivio.com or vote on our public roadmap.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 mt-16">
      {/* Background Effects */}
      <div className="absolute top-20 -z-10 right-1/4 size-96 bg-pink-600 blur-[300px] opacity-30"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
            <HelpCircle className="size-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">
              Help Center
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Find answers to common questions about Aivio. Can't find what you're
            looking for? Contact our support team!
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * categoryIndex }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-pink-400">
                <Sparkles className="size-6" />
                {category.category}
              </h2>

              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-slate-950/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm hover:border-pink-500/30 transition-all"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(isOpen ? null : globalIndex)
                        }
                        className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-slate-900/50 transition"
                      >
                        <span className="font-semibold text-white text-base sm:text-lg">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`size-5 text-pink-400 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 border border-pink-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-400 mb-6">
              Our support team is here to help you get the most out of Aivio.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white rounded-full px-8 py-3 text-base font-medium">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
