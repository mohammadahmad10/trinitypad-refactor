"use client";
import React from "react";
import Image from "next/image";

const featuresList = [
  {
    icon: "/assets/launchpad/features/1.png",
    title: "Auto Invest & Exit",
    description:
      "Grow your portfolio with our sophisticated Auto-Invest and Auto-Exit backend engine. Contribute to projects with peace of mind and easy to use intuitive user interfaces.",
  },
  {
    icon: "/assets/launchpad/features/2.png",
    title: "Asset Management",
    description:
      "Our intelligent backend engines handle your assets effectively, automatically adjusting your portfolio to maximize your gains based on your preset preferences.",
  },
  {
    icon: "/assets/launchpad/features/3.png",
    title: "AI Precision, Human Curation",
    description:
      "Let AI give you precise insights on your portfolio and investment strategies moving forward. Combined with industry-expert human curation, we offer opportunities which are best of the both worlds.",
  },
  {
    icon: "/assets/launchpad/features/4.png",
    title: "Security & Safety",
    description:
      "Our engineers employ security-first approach to backend development. All our investment and automation models are built with thorough negative-input tests to ensure maximum security. Our backend engines are built Quantum-Proof at the core.",
  },
];

const Features = () => {
  return (
    <div className="mb-20">
      <h2 className="my-16 p-4">
        What Sets <span className="text-blue-gradient">TrinityPad</span> Apart?
      </h2>
      <div className="mx-auto flex w-11/12 flex-col flex-wrap items-stretch justify-center max-lg:gap-5 md:w-10/12 lg:flex-row lg:gap-10">
        {featuresList.map((feature, id) => (
          <div
            key={id}
            className="gradient-shadow-2 flex flex-col gap-5 rounded-[20px] bg-[#1D203580] p-4 text-center max-lg:w-full lg:w-5/12"
          >
            <Image
              src={feature.icon}
              width={100}
              height={100}
              alt={feature.title}
              className="mx-auto"
            />
            <h3 className="text-blue-gradient">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
