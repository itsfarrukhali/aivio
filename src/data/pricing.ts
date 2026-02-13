import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
  {
    name: "Starter",
    price: 0,
    period: "month",
    features: [
      "Limited AI generations",
      "Basic video & image outputs",
      "Standard generation speed",
      "Community support",
      "Aivio watermark",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    price: 19,
    period: "month",
    features: [
      "Unlimited AI generations",
      "High-quality video outputs",
      "Faster generation speed",
      "No watermark",
      "Priority support",
      "Advanced creative controls",
    ],
    mostPopular: true,
  },
  {
    name: "Business",
    price: 49,
    period: "month",
    features: [
      "Everything in Pro",
      "Team access",
      "Premium generation speed",
      "Early access to new features",
      "Dedicated support",
      "Commercial usage rights",
    ],
    mostPopular: false,
  },
];
