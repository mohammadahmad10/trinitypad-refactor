"use client";
import React from "react";
// import PrimaryBtn, { PrivyPrimaryBtn } from "../../ui/buttons/primary-btn";
// import { StakingDialog } from "@/components/ui/dialogs/staking-dialog";

const HeroComp = () => {
  return (
    <>
      <section className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-5 bg-[url('/assets/staking/hero-bg.svg')] bg-cover bg-no-repeat max-md:min-h-[65vh] max-md:px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center">
            <span data-aos="fade-down" className="text-gradient">
              Stake Your $TNT
            </span>
            <br />
            <span data-aos="fade-down">To Earn 100% APY Today!</span>
          </h1>
        </div>
        {/* <StakingDialog> */}
        <div className="mt-10 max-md:mt-5">
          {/* <PrivyPrimaryBtn
            onClick={() => {
              document
                ?.getElementById("reward-station")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-10 px-8 py-3 text-[28px] max-md:mt-5 max-md:px-5 max-md:py-2 max-md:text-base"
          > */}
          <h5 className="font-medium">Stake Now</h5>
          {/* </PrivyPrimaryBtn> */}
        </div>
        {/* </StakingDialog> */}
      </section>
    </>
  );
};

export default HeroComp;
