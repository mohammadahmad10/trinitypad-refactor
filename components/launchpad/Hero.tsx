"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Loader } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="flex min-h-[80vh] flex-row items-center gap-5 px-[4%] max-lg:min-h-[100vh] max-lg:flex-wrap max-lg:justify-center max-md:px-4 lg:justify-between lg:gap-2">
        <div className="flex flex-col gap-7 max-lg:mt-10 max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:text-center lg:w-[700px] lg:items-start lg:justify-start">
          <h1 className="max-lg:text-center lg:text-start">
            Effortless Investing <br />
            <span className="text-blue-gradient">Advanced By AI</span>
          </h1>
          <p className="text-trinitypad-gray">
            You don&apos;t need to understand the market, AI does it for you.
            Invest with ease and confidence, every step of the way.
          </p>
          <div className="relative mt-4 w-full max-w-lg">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="relative"
              type="email"
            />
            <Button
              //  onClick={() => submitMail({ email: email })}
              className="right-2 top-1 mx-auto rounded-xl bg-btn-gradient text-foreground max-md:mt-1 md:absolute"
            >
              {/* {isPending && <Loader className="mr-2 animate-spin" />} */}
              <p>Join Waitlist</p>
            </Button>
          </div>
        </div>
        <Image
          src="/assets/launchpad/hero/safe.png"
          alt="safe"
          width={700}
          height={450}
          className="overflow-hidden object-cover"
        />
      </div>
    </div>
  );
}
