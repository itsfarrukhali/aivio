import { motion } from "motion/react";
import TestimonialSection from "../sections/TestimonialSection";
import { Sparkles, Star, Quote, TrendingUp } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 mt-16">
      {/* Background Effects */}
      <div className="absolute top-20 -z-10 left-1/4 size-96 bg-pink-600 blur-[300px] opacity-30"></div>
      <div className="absolute bottom-40 -z-10 right-1/3 size-96 bg-purple-500 blur-[350px] opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
            <Quote className="size-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">
              Success Stories
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
            What Our Users Say
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Join thousands of creators, marketers, and businesses who trust
            Aivio to generate stunning UGC content with AI.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: "Happy Users", value: "10K+", icon: Sparkles },
            { label: "Content Created", value: "50K+", icon: TrendingUp },
            { label: "5-Star Reviews", value: "2.5K+", icon: Star },
            { label: "Countries", value: "45+", icon: Quote },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <stat.icon className="size-8 text-pink-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* Additional Testimonials */}
        <motion.div
          className="mt-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            More Success Stories
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "David Chen",
                role: "E-commerce Owner",
                company: "TechGear Store",
                quote:
                  "Aivio helped me create product videos that increased our conversion rate by 45%. The AI quality is incredible!",
                rating: 5,
              },
              {
                name: "Lisa Anderson",
                role: "Social Media Manager",
                company: "BrandFlow Agency",
                quote:
                  "We've cut our content production time by 70%. Aivio is now an essential part of our workflow for all client campaigns.",
                rating: 5,
              },
              {
                name: "James Wilson",
                role: "Startup Founder",
                company: "FitLife App",
                quote:
                  "As a bootstrapped startup, Aivio gave us professional UGC content without the agency price tag. Game changer!",
                rating: 5,
              },
              {
                name: "Emma Rodriguez",
                role: "Content Creator",
                company: "@emmaRcreates",
                quote:
                  "I generate 10x more content now. My engagement has skyrocketed and brands are noticing. Thank you Aivio!",
                rating: 5,
              },
              {
                name: "Michael Brown",
                role: "Marketing Director",
                company: "GrowthCo",
                quote:
                  "The ROI on Aivio is phenomenal. We're producing high-quality ads at a fraction of our previous cost.",
                rating: 5,
              },
              {
                name: "Sophia Lee",
                role: "Influencer",
                company: "@sophiastyle",
                quote:
                  "Creating authentic-looking UGC has never been easier. My followers can't tell it's AI-generated!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-pink-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-pink-500 text-pink-500"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-800 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                  <p className="text-sm text-pink-400">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 border border-pink-500/20 rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Start creating professional UGC content with AI today and see why
              thousands of creators trust Aivio.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white rounded-full px-8 py-3 text-base font-medium">
              Start Creating for Free
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
