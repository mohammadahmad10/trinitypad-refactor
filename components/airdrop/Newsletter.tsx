"use client";
import React, { useState } from "react";
import PrimaryInput from "../ui/input";
// import PrimaryBtn from "../../ui/buttons/primary-btn";
// import { addAMail4NewsLetter } from "@/firebase/firestore/newsletter";
// import { SpinnerBtn } from "@/components/ui/spinner/spinner-btn";
// import { useNotify } from "@/components/ui/toast/notify";
// import { useMutation } from "@tanstack/react-query";
// import { useSubmitNewsletterEmail } from "@/firebase/firestore/queries/newsletter-queries";
import { GradientBorderWrapper } from "@/components/ui/gradient-border-wrapper";
import Image from "next/image";

export default function NewsletterComp() {
  const [email, setEmail] = useState("");
  //   const { mutate: submitMail, isPending } = useSubmitNewsletterEmail();
  return (
    <section data-aos="flip-left" className="my-20">
      <div className="flex h-auto flex-row items-center justify-start rounded-[20px] max-md:mx-4 md:mx-auto md:max-w-[1000px] md:px-[4%]">
        <GradientBorderWrapper className="bg-gray-800">
          <div className="bg-newsletter flex flex-row justify-between max-md:flex-col-reverse max-md:items-center">
            <div className="max-w-[500px] flex-col p-6 md:w-3/5 md:items-center md:justify-center">
              <h3 className="font-bold md:text-start">
                <span className="text-blue-gradient">Sign up</span> for our
                newsletter and get the latest news and updates.
              </h3>
              <div className="relative mt-6">
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
                    <p>Subscribe</p>
                  </div>
                </PrimaryBtn> */}
              </div>
            </div>
            <div className="flex justify-center max-md:mt-1 md:w-2/5">
              <Image
                src="/assets/logo-icon.png"
                width={100}
                height={100}
                alt="bg-newsletter"
                className="md:h-5/6 md:w-3/4 md:translate-y-6"
              />
            </div>
          </div>
        </GradientBorderWrapper>
      </div>
    </section>
  );
}
