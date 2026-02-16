import { motion } from "motion/react";
import { CheckCircle2, Scale, FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen relative px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 mt-16">
      {/* Background Effects */}
      <div className="absolute top-20 -z-10 left-1/4 size-96 bg-pink-600 blur-[300px] opacity-30"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
            <Scale className="size-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
            Terms of Service
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
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-pink-400">
              <FileText className="size-6" />
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              By accessing and using Aivio's services, you accept and agree to
              be bound by the terms and provision of this agreement. If you do
              not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Aivio reserves the right to update and change the Terms of Service
              from time to time without notice. Any new features that augment or
              enhance the current service shall be subject to the Terms of
              Service.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              2. Account Terms
            </h2>
            <ul className="space-y-3">
              {[
                "You must be 13 years or older to use this service.",
                "You must provide your legal full name, a valid email address, and any other information requested in order to complete the signup process.",
                "You are responsible for maintaining the security of your account and password.",
                "You are responsible for all content posted and activity that occurs under your account.",
                "You may not use the service for any illegal or unauthorized purpose.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <CheckCircle2 className="size-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              3. Use of AI-Generated Content
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Aivio provides AI-powered tools to generate UGC videos and images.
              By using our service, you agree to the following:
            </p>
            <ul className="space-y-3">
              {[
                "You retain ownership of content you upload to Aivio.",
                "AI-generated content created using Aivio can be used commercially under your subscription plan.",
                "You are responsible for ensuring your use of AI-generated content complies with applicable laws.",
                "Aivio does not claim ownership of the content you generate using our platform.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <CheckCircle2 className="size-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              4. Payment and Billing
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              All paid plans are billed on a subscription basis. You will be
              billed in advance on a recurring and periodic basis (such as
              monthly or annually).
            </p>
            <ul className="space-y-3">
              {[
                "Credits purchased never expire and roll over each billing period.",
                "Subscription fees are non-refundable except where required by law.",
                "We offer a 14-day money-back guarantee for new subscribers.",
                "Failure to pay may result in the termination of your account.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <CheckCircle2 className="size-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              5. Prohibited Activities
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              You agree not to engage in any of the following prohibited
              activities:
            </p>
            <ul className="space-y-3">
              {[
                "Violating any laws or regulations",
                "Generating content that infringes on intellectual property rights",
                "Creating harmful, offensive, or misleading content",
                "Attempting to reverse engineer or hack our AI systems",
                "Reselling or redistributing Aivio's services without permission",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="text-pink-500 font-bold">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              6. Termination
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Aivio may terminate or suspend your account and bar access to the
              service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever including without
              limitation if you breach the Terms. Upon termination, your right
              to use the service will immediately cease.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              7. Limitation of Liability
            </h2>
            <p className="text-slate-300 leading-relaxed">
              In no event shall Aivio, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">
              8. Contact Us
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
              <p className="text-slate-300">Email: legal@aivio.com</p>
              <p className="text-slate-300">Address: San Francisco, CA</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
