import { Metadata } from "next";
import React from "react";
// import { GoogleTagManager } from "@next/third-parties/google";
import HeroComp from "@/components/airdrop/Hero";
import QuestsComp from "@/components/airdrop/Quests";
import Ready2StartComp from "@/components/airdrop/Ready-to-Start";
import NewsletterComp from "@/components/airdrop/Newsletter";

export const metadata: Metadata = {
  title: "Trinity Pad Airdrop | Participate & Earn",
  description:
    "Participate in the Trinity Pad airdrop, complete quests, and earn TP tokens. Join now to claim your rewards from this exciting opportunity.",
  keywords:
    "trinitypad, trinity pad, metamask, bnb, base, ethereum, wallet, privy, layerzero, synaps, Trinity pad, Crypto Launchpad, Solana Launchpad, BNB Launchpad, Ethereum Launchpad, TON Launchpad",
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
    title: "Trinity Pad Airdrop | Participate & Earn",
    description:
      "Participate in the Trinity Pad airdrop, complete quests, and earn TP tokens. Join now to claim your rewards from this exciting opportunity.",
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

const AirDrop = () => {
  return (
    <>
      {/* <GoogleTagManager gtmId="G-M081SD7ZD3" /> */}
      <HeroComp />
      <QuestsComp />
      <Ready2StartComp />
      <NewsletterComp />
    </>
  );
};

export default AirDrop;
