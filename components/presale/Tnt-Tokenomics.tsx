"use client";
import React from "react";
import Image from "next/image";

const TNTTokenomics = () => {
  const data = [
    {
      name: "Total Allocation",
      value: "$300,000",
    },
    {
      name: "Token Price",
      value: "$0.002",
    },
    {
      name: "Token Symbol",
      value: "TNT",
    },
    {
      name: "Supported Networks",
      value: "Ethereum, BNB Chain, Base Chain",
    },
    {
      name: "Total Supply",
      value: "10,000,000,000 TNT",
    },
    {
      name: "Initial Circulating Supply",
      value: "270,000,000 TNT",
    },
    {
      name: "Initial Market Cap",
      value: "$4,320,000",
    },
    {
      name: "Vesting Details",
      value: "TGE 10.00%, 1 month cliff, thereafter 3 month linear vesting",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-20 md:my-20 md:min-h-[100vh] md:p-3">
      <h2 className="mt-10 p-4">$TNT Allocation Information</h2>

      {/* <Image
        src="/assets/presale/token-info.png"
        alt="TNT Token Information"
        width={512}
        height={384}
        className="w-[80%] md:w-auto"
      /> */}
      <div className="w-full">
        <div className="mx-auto flex max-w-xl flex-col gap-4 max-md:mx-[4%]">
          <h3 className="rounded-2xl bg-btn-gradient py-4 text-center text-2xl font-medium text-black max-md:text-xl">
            Strategic Round
          </h3>
          {data.map((i, index) => (
            <div key={index} className="flex w-full gap-2">
              <div className="bg-trinitypad-mid-blue w-2/5 rounded-xl py-3 text-center max-md:text-xs">
                {i?.name}
              </div>
              <div className="bg-trinitypad-mid-blue w-3/5 rounded-xl py-3 text-center max-md:text-xs">
                {i?.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mt-10 p-4">$TNT Tokenomics</h2>
      <div className="relative text-2xl max-md:hidden">
        <Image
          data-aos="fade-up"
          src="/assets/presale/tnt.svg"
          alt="tnt token"
          width={1150}
          height={500}
          className="object-cover"
        />
      </div>
      <div className="self-start md:hidden">
        <Image
          src="/assets/presale/tnt-mob.svg"
          alt="res-tnt-tok"
          width={340}
          height={350}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default TNTTokenomics;
