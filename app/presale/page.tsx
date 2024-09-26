import HeroComp from "@/components/presale/Hero";
import { TierBenefits } from "@/components/presale/Tiers";
import TNTTokenomics from "@/components/presale/Tnt-Tokenomics";
import FAQComp from "@/components/presale/Faq";
import FeatureComp from "@/components/presale/Feature-Comp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trinity Pad Presale | Early Access to Top Projects",
  description:
    "Get AI-driven and auto-investment features to maximize your returns. Join Trinity Pad's presale for early access to top crypto startups.",
  keywords:
    "trinity pad, trinitypad, trinity%pad, ido, bnb, base, ethereum, layerzero, privy, synaps, Trinity pad, Crypto Launchpad, Solana Launchpad, BNB Launchpad, Ethereum Launchpad, TON Launchpad",
  applicationName: "Trinity Pad",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
      href: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
      href: "/android-chrome-512x512.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
      href: "/apple-touch-icon.png",
    },
  ],
  openGraph: {
    title: "Trinity Pad Presale | Early Access to Top Projects",
    description:
      "Get AI-driven and auto-investment features to maximize your returns. Join Trinity Pad's presale for early access to top crypto startups.",
    images: [
      {
        url: "https://www.trinitypad.com/assets/logo-icon.png",
        width: 1634,
        height: 1634,
        alt: "Trinity Pad - The AI Powered Launchpad",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroComp />
      <TierBenefits />
      <TNTTokenomics />
      <FAQComp />
      <FeatureComp />
    </>
  );
}
