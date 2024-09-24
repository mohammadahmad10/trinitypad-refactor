"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import PrimaryInput from "@/components/ui/input";

export default function Hero() {
    const [email, setEmail] = useState("");
  return (
    <div>
          <div className="flex min-h-[80vh] flex-row items-center gap-5 px-[4%] max-lg:min-h-[100vh] max-lg:flex-wrap max-lg:justify-center max-md:px-4 lg:justify-between lg:gap-2">
      <div className="flex flex-col gap-7 max-lg:mt-10 max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:text-center lg:w-[700px] lg:items-start lg:justify-start">
        <h1
          data-aos="fade-down"
          className="h1 max-lg:text-center lg:text-start"
        >
          Effortless Investing <br />
          <span className="text-blue-gradient">Advanced By AI</span>
        </h1>
        <p className="description text-trinitypad-gray">
          You don&apos;t need to understand the market, AI does it for you.
          Invest with ease and confidence, every step of the way.
        </p>
        <div className="relative mt-4 w-full max-w-lg">
          <PrimaryInput
            value={email}
            setValue={setEmail}
            placeholder="Enter Email Address"
            className="relative"
          />
          {/* <PrimaryBtn
            onClick={() => submitMail({ email: email })}
            className="right-2 top-[12%] mx-auto max-md:mt-1 md:absolute"
          >
            <div className="flex items-center gap-2">
              {isPending && <SpinnerBtn />}
              <p>Join Waitlist</p>
            </div>
          </PrimaryBtn> */}
        </div>
      </div>
      <Image
        data-aos="fade-left"
        src="/assets/launchpad/safe.svg"
        alt="safe"
        width={700}
        height={450}
        className="overflow-hidden object-cover"
      />
    </div>
    </div>
  )
}
