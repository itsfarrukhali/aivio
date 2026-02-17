"use client";
import { PricingTable } from "@clerk/clerk-react";
import SectionTitle from "../components/SectionTitle";

export default function PricingSection() {
  return (
    <div
      id="pricing"
      className="px-2 sm:px-4 md:px-6 lg:px-12 xl:px-24 py-4 sm:py-6 md:py-8"
    >
      <SectionTitle
        text1="Pricing"
        text2="Simple, Transparent Pricing"
        text3="Choose a plan that fits your creative needs. Scale effortlessly as your content & campaigns grow with Aivio."
      />

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-10 md:mt-16 max-w-7xl">
        <PricingTable
          appearance={{
            variables: {
              colorBackground: "#1a1a1a",
              colorPrimary: "#ff007a",
              colorText: "#ffffff",
            },
            elements: {
              pricingTableCardBody: "bg-gray-800 text-white",
              pricingTableCardHeader: "bg-gray-900 text-pink-500",
              pricingTableCardFooter: "bg-gray-800",
              switchThumb: "bg-pink-500",
            },
          }}
          // Removed invalid layout property
        />
      </div>
    </div>
  );
}
