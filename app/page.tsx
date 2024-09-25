import React from "react";
import { Metadata } from "next";
import Features from "@/components/launchpad/Features";
import Hero from "@/components/launchpad/Hero";
import AchievementsBanner from "@/components/launchpad/AchievementsBanner";

export const metadata: Metadata = {
  title: "Trinity Pad Homepage | Invest Confidently",
  description:
    "Trinity Pad offers early stage investment opportunities in Web3, backed by Artificial Intelligence, the platform supports popular chains like BNB, Solana, Ethereum, TON, Base, and more.",
  keywords:
    "trinity pad, trinitypad, ido, bnb, base, ethereum, layerzero, privy, synaps, ton, crypto, Trinity pad, Crypto Launchpad, solana, Solana Launchpad, BNB Launchpad, Ethereum Launchpad, TON Launchpad",
  openGraph: {
    title: "Trinity Pad Homepage | Invest Confidently",
    description:
      "Trinity Pad offers early stage investment opportunities in Web3, backed by Artificial Intelligence, the platform supports popular chains like BNB, Solana, Ethereum, TON, Base, and more.",
    images: [
      {
        url: "https://www.trinitypad.com/assets/logo-icon.png",
        width: 1634,
        height: 1634,
        alt: "Trinity Pad - The AI Powered Launchpad",
      },
    ],
  },
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
};

export default function Home() {
  return (
    <div className="px-0 md:px-24">
      <Hero />
      <Features />
      <AchievementsBanner />
    </div>
  );
}
