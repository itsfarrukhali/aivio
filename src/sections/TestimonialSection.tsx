import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
  return (
    <div
      id="testimonials"
      className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20"
    >
      <SectionTitle
        text1="Testimonials"
        text2="Don't just take our words"
        text3="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review."
      />

      <Marquee
        className="max-w-5xl mx-auto mt-8 sm:mt-11"
        gradient={true}
        speed={25}
        gradientColor="#000"
        gradientWidth={50}
      >
        <div className="flex items-center justify-center py-4 sm:py-5 overflow-hidden">
          {[...testimonialsData, ...testimonialsData].map(
            (testimonial: ITestimonial, index: number) => (
              <TestimonialCard
                key={index}
                index={index}
                testimonial={testimonial}
              />
            )
          )}
        </div>
      </Marquee>
      <Marquee
        className="max-w-5xl mx-auto"
        gradient={true}
        speed={25}
        direction="right"
        gradientColor="#000"
        gradientWidth={50}
      >
        <div className="flex items-center justify-center py-4 sm:py-5 overflow-hidden">
          {[...testimonialsData, ...testimonialsData].map(
            (testimonial: ITestimonial, index: number) => (
              <TestimonialCard
                key={index}
                index={index}
                testimonial={testimonial}
              />
            )
          )}
        </div>
      </Marquee>
    </div>
  );
}
