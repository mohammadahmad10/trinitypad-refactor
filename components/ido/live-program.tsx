"use client";
// import PrimaryBtn from "@/components/ui/buttons/primary-btn";
// import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const cardsData = [
  {
    logo: "/assets/ido/orbital-bg.svg",
    alt: "orbital bg",
    title: "Participate in the airdrop to earn TP",
    desc: "Participate in the airdrop quests to earn Trinity Points and unlock exclusive rewards.",
    route: "/airdrop",
  },
  {
    logo: "/assets/ido/orbital-gallery.svg",
    alt: "orbital gallery",
    title: "Join the Waitlist",
    desc: " Sign up now to be first in line for exclusive updates, special offers, and early access opportunities. Don't miss out—secure your spot today!",
    route: "/airdrop",
  },
  {
    logo: "/assets/ido/orbital-live.svg",
    alt: "orbital live",
    title: "Participate in TrinityPad presale",
    desc: "Join the TrinityPad presale to get early access to exclusive features before the public launch. Enjoy early benefits and become a part of our pioneering blockchain community.",
    route: "/presale",
  },
];
export default function LiveProgramComp() {
  //   const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(
    cardsData?.at(activeIndex) || cardsData?.at(0)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex =
        activeIndex === cardsData?.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
      setActiveCard(cardsData?.at(newIndex));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <>
      <section className="relative flex min-h-[100vh] w-full items-center bg-[url('/assets/ido/bg.svg')] bg-cover bg-no-repeat p-[4%] max-md:min-h-[65vh] max-md:px-4">
        <div className="flex w-full items-center justify-center gap-5 max-lg:hidden">
          <div className="size-full h-[440px] w-[820px] rounded-[20px] bg-btn-gradient p-0.5">
            <div
              // style={{ backgroundImage: `url(${activeCard.logo})` }}
              style={{
                backgroundImage: `url(${activeCard?.logo})`,
              }}
              className="relative flex size-full items-end justify-start rounded-[20px] bg-cover bg-center bg-no-repeat p-5"
            >
              <div className="w-[320px]">
                <h3 className="text-start font-bold">{activeCard?.title}</h3>
                <p className="mt-2 text-[#C7C9D1]">{activeCard?.desc}</p>
                {/* <PrimaryBtn
                  onClick={() => router.push(activeCard?.route!)}
                  className="mt-3"
                >
                  <p>Participate</p>
                </PrimaryBtn> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {cardsData.map((val, index) => (
              <div
                key={index}
                className={`size-full h-[140px] w-[440px] rounded-[20px] bg-btn-gradient p-0.5 ${
                  index !== activeIndex ? "brightness-50 saturate-50" : ""
                }`}
              >
                <div
                  onClick={() => {
                    setActiveCard(val);
                    setActiveIndex(index);
                  }}
                  style={{ backgroundImage: `url(${val.logo})` }}
                  className={`relative flex size-full cursor-pointer items-end justify-start rounded-[20px] bg-cover bg-center bg-no-repeat p-5`}
                >
                  <div className="w-[220px]">
                    <h3 className="text-xl font-bold">{val.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hide-scroll mt-3 flex justify-start gap-7 overflow-auto py-10 lg:hidden">
          {cardsData.map((val, index) => (
            <div
              key={index}
              //   onClick={() => router.push(val?.route!)}
              className="relative h-[400px] w-full rounded-[20px] bg-btn-gradient p-0.5"
            >
              <div
                style={{
                  backgroundImage: `url(${val.logo})`,
                }}
                className="size-full rounded-[20px] bg-cover bg-center bg-no-repeat p-5"
              >
                <div className="max-xs:w-[230px] xs:w-[280px] sm:w-[320px]">
                  <h3 className="text-start font-bold">{val.title}</h3>
                  <p className="mt-2 text-[#C7C9D1]">{val.desc}</p>
                  {/* <PrimaryBtn
                    // onClick={() => router.push(val?.route!)}
                    className="mt-3"
                  >
                    <p>Participate</p>
                  </PrimaryBtn> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
