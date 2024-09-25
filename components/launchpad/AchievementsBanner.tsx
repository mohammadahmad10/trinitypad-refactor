"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TileCard } from "../cards/tile-card";

export default function AchievementsBanner() {
  return (
    <div className="my-20 flex min-h-[80vh] flex-row-reverse items-center gap-5 px-[4%] max-lg:min-h-[100vh] max-lg:flex-wrap max-lg:justify-center max-md:px-4 lg:justify-between lg:gap-2 xl:gap-10">
      <div className="flex flex-col gap-7 max-lg:mt-10 max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:text-start lg:w-[700px] lg:items-start lg:justify-start">
        <h2 className="p-4 lg:text-start">
          Trinity IDO <br />
          <span className="text-blue-gradient">Advanced By AI</span>
        </h2>

        <p className="max-w-96 md:max-w-lg">
          TrinityPad is excited to announce the successful completion of our
          groundbreaking private raise in July 2024!
        </p>
        <div className="w-full @container">
          <div className="grid grid-cols-1 gap-5 @md:grid-cols-2">
            <TileCard val={{ title: "Initial Raise Goal", value: "$300K" }} />
            <TileCard val={{ title: "Actual Raised Amount", value: "$953K" }} />
            <TileCard val={{ title: "Wallets Participated", value: "264" }} />
            <TileCard val={{ title: "Duration of Round", value: "48 hours" }} />
          </div>
        </div>

        <div className="relative mt-4 w-full max-w-lg">
          <Link href="https://t.me/trinitypadann" target="_blank">
            {/* <OutlineBtn onClick={() => {}}>Follow our Announcements</OutlineBtn> */}
          </Link>
        </div>
      </div>

      <Image
        data-aos="fade-down"
        src="/assets/launchpad/hero/invest.png"
        alt="invest"
        width={700}
        height={450}
        className="overflow-hidden object-cover"
      />
    </div>
  );
}
