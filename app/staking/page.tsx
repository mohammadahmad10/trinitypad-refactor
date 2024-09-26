import React from "react";
import type { Metadata } from "next";
// import SidebarWrapper from "@/components/user/sidebar/sidebar-wrapper";
import HeroComp from "@/components/staking/Hero";
import { TierBenefits } from "@/components/staking/Tiers";
import RewardStationComp from "@/components/staking/Reward-Station";
import ParticipateComp from "@/components/staking/Participate";
import FAQComp from "@/components/staking/FAQ";
// import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Trinity Pad Staking | Passively Grow Your Investments",
  description:
    "Stake your investments with Trinity Pad, invest once and earn in realtime.",
  keywords:
    "trinity pad, staking, invest, trinitypad, ido, bnb, base, Ethereum, layerzero, privy, synaps",
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
    title: "Trinity Pad Staking | Passively Grow Your Investments",
    description:
      "Stake your investments with Trinity Pad, invest once and earn in realtime.",
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

const Staking = () => {
  return (
    <>
      {/* <GoogleTagManager gtmId="G-M081SD7ZD3" /> */}
      <HeroComp />
      <TierBenefits />
      <RewardStationComp />
      <ParticipateComp />
      <FAQComp />
    </>
  );
};

export default Staking;
