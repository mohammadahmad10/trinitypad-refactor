"use client";
import Image from "next/image";
import React from "react";
const featureData = [
  {
    icon: "/assets/presale/features/policy.svg",
    title: "Refund Policy",
    description:
      "All users are eligible for 100% refunds during the Grace Period.",
  },
  {
    icon: "/assets/presale/features/airdrop.svg",
    title: "Airdrops",
    description:
      "All token holders are entitled to the 'Token Holder Airdrop' automatically. Active participation in the IDOs and Airdrop Quests will get you more airdrops.",
  },
  {
    icon: "/assets/presale/features/participants.svg",
    title: "Anyone can participate",
    description:
      "Get allocations without spending a single token. Everyone starts with the Base tier.",
  },
  {
    icon: "/assets/presale/features/system.svg",
    title: "Fair tier system",
    description:
      "The first and fully decentralized fair tier system, active users will get more allocation among their same-tier peers.",
  },
  {
    icon: "/assets/presale/features/nft-utility.svg",
    title: "Dynamic nft utilities",
    description:
      "Take your investment game to the next level with exclusive NFT utilities.",
  },
  {
    icon: "/assets/presale/features/council.svg",
    title: "Council tier",
    description:
      "We have something very exclusive and rewarding for our biggest supporters. By invitation-only.",
  },
];
const FeatureComp = () => {
  return (
    <>
      <section className="flex w-full flex-col items-center max-md:gap-10 max-md:px-4 max-md:py-10 md:gap-20 md:px-[4%] md:py-20">
        <h2 className="p-4">Features</h2>
        <div className="flex w-full flex-row flex-wrap items-stretch justify-center gap-10 max-md:gap-5">
          {featureData.map((val, index) => (
            <div
              data-aos="flip-left"
              key={index}
              className="flex flex-row justify-center"
            >
              <div className="flex flex-col items-center gap-5 p-7 text-center max-md:gap-3 md:w-[400px]">
                <Image
                  src={val.icon}
                  alt={val.title}
                  width={120}
                  height={120}
                  className="object-cover"
                />
                <h3>{val.title}</h3>
                <p className="text-[#C7C9D1]">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureComp;
