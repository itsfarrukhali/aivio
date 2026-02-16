import { motion } from "motion/react";
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
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
            <Shield className="size-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">Privacy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400">Last Updated: February 17, 2026</p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm space-y-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-pink-400">
              <Eye className="size-6" />
              Introduction
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              At Aivio, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our AI-powered UGC generation platform.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-pink-400">
              <Database className="size-6" />
              Information We Collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Personal Information
                </h3>
                <p className="text-slate-300 mb-3">
                  We collect information that you provide directly to us:
                </p>
                <ul className="space-y-2 text-slate-300 ml-6 list-disc">
                  <li>Name and email address</li>
                  <li>Payment and billing information</li>
                  <li>Account credentials</li>
                  <li>Profile information</li>
                  <li>Communications with us</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Content Information
                </h3>
                <p className="text-slate-300 mb-3">
                  When you use our AI generation services:
                </p>
                <ul className="space-y-2 text-slate-300 ml-6 list-disc">
                  <li>Images and videos you upload</li>
                  <li>Text prompts and descriptions</li>
                  <li>AI-generated content</li>
                  <li>Project metadata</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Usage Information
                </h3>
                <p className="text-slate-300 mb-3">We automatically collect:</p>
                <ul className="space-y-2 text-slate-300 ml-6 list-disc">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and preferences</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-pink-400">
              <Lock className="size-6" />
              How We Use Your Information
            </h2>
            <p className="text-slate-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-3">
              {[
                "Provide, maintain, and improve our AI generation services",
                "Process your payments and manage subscriptions",
                "Generate AI-powered content based on your inputs",
                "Send you technical notices and support messages",
                "Respond to your comments and questions",
                "Analyze usage patterns to improve user experience",
                "Detect and prevent fraud and abuse",
                "Comply with legal obligations",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <div className="size-1.5 rounded-full bg-pink-500 flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* AI and Content Processing */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              AI and Content Processing
            </h2>
            <div className="bg-gradient-to-br from-pink-600/10 to-purple-600/10 border border-pink-500/20 rounded-xl p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Important:</strong> Content you
                upload to Aivio is processed by our AI systems to generate your
                requested outputs. We use this data to:
              </p>
              <ul className="space-y-2 text-slate-300 ml-6 list-disc">
                <li>Train and improve our AI models (unless you opt-out)</li>
                <li>Generate your requested content</li>
                <li>Provide quality assurance</li>
                <li>Comply with legal requirements</li>
              </ul>
              <p className="text-slate-300 mt-4">
                You retain all ownership rights to content you upload and
                AI-generated outputs.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              How We Share Your Information
            </h2>
            <p className="text-slate-300 mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="space-y-3 text-slate-300">
              <li>
                <strong className="text-white">Service Providers:</strong> With
                third-party vendors who perform services on our behalf
              </li>
              <li>
                <strong className="text-white">Business Transfers:</strong> In
                connection with mergers, acquisitions, or asset sales
              </li>
              <li>
                <strong className="text-white">Legal Requirements:</strong> When
                required by law or to protect our rights
              </li>
              <li>
                <strong className="text-white">With Your Consent:</strong> When
                you authorize us to share information
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-pink-400">
              <Shield className="size-6" />
              Data Security
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure. While we strive to use commercially acceptable means to
              protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-pink-400">
              <UserCheck className="size-6" />
              Your Rights
            </h2>
            <p className="text-slate-300 mb-4">You have the right to:</p>
            <ul className="space-y-3">
              {[
                "Access your personal information",
                "Correct inaccurate data",
                "Request deletion of your data",
                "Object to processing of your data",
                "Export your data",
                "Opt-out of marketing communications",
                "Withdraw consent at any time",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <div className="size-1.5 rounded-full bg-pink-500 flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              Contact Us
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
              <p className="text-slate-300">Email: privacy@aivio.com</p>
              <p className="text-slate-300">Address: San Francisco, CA</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
