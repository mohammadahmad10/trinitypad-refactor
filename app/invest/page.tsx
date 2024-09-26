import React from "react";
import { Metadata } from "next";
// import LiveProgramComp from "@/components/ido/live-program";
import IDOEventsComp from "@/components/ido/ido-events";

export const metadata: Metadata = {
  title: "Trinity Pad Invest | Effortless Early Stage Investing",
  description:
    "Dive into the world of AI combined with Crypto Investments, sit back and relax while AI Automation grows your portfolio.",
  keywords:
    "trinity pad, trinitypad, ai investment, investment automation, automatic investments, crypto automation",
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
    title: "Trinity Pad Invest | Effortless Early Stage Investing",
    description:
      "Dive into the world of AI combined with Crypto Investments, sit back and relax while AI Automation grows your portfolio.",
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

const Invest = () => {
  return (
    <>
      <IDOEventsComp />
      {/* <LiveProgramComp /> */}
    </>
  );
};

export default Invest;
