"use client";
import Image from "next/image";
import React from "react";
// import { PrivyPrimaryBtn } from "@/components/ui/buttons/primary-btn";
// import { usePrivy } from "@privy-io/react-auth";

const Ready2StartComp = () => {
  //   const { authenticated } = usePrivy();
  return (
    <section className="flex h-[450px] w-full flex-row items-center justify-center bg-[url('/assets/airdrop/ready-to-start.svg')] bg-cover bg-no-repeat max-md:px-4">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <Image
          src="/assets/airdrop/ready-to-start-logo.svg"
          alt="ready 2 start"
          width={100}
          height={100}
          className="object-cover"
        />
        <h3 data-aos="fade-up" className="font-bold">
          Ready to Start Your Web3 Journey?
        </h3>
        <p className="max-w-lg text-trinitypad-gray">
          Don&apos;t just explore—enhance your experience. Unlock exclusive
          rewards, access members-only content, and seize new Web3
          opportunities.
        </p>
        {/* {!authenticated && (
          <PrivyPrimaryBtn
            data-aos="fade-up"
            onClick={() => {}}
            className="max-lg:hidden"
          >
            <div className="flex items-center gap-3">
              <p>Sign Up</p>
            </div>
          </PrivyPrimaryBtn>
        )} */}
      </div>
    </section>
  );
};

export default Ready2StartComp;
