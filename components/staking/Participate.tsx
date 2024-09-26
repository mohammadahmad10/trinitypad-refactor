import Image from "next/image";
import React from "react";

const participateCardData = [
  {
    logo: "/assets/staking/participate/lock.svg",
    name: "Lock",
    desc: "Secure your TNT to access all events and earn rewards seamlessly with AI-driven automation.",
  },
  {
    logo: "/assets/staking/participate/distribution.svg",
    name: "Distribution",
    desc: "Easily view your token allocation the staking page, powered by AI. Claim tokens and redeem rewards swiftly upon winning.",
  },
  {
    logo: "/assets/staking/participate/unlock.svg",
    name: "Unlock",
    desc: "Unlock your TNT anytime while retaining all rewards accumulated up to the unlocking moment, with enhanced AI efficiency.",
  },
];

const ParticipateComp = () => {
  return (
    <section
      data-aos="fade-up"
      className="relative flex min-h-[50vh] w-full flex-col items-center gap-5 bg-[url('/assets/staking/participate-bg.svg')] bg-cover bg-no-repeat py-14 max-lg:min-h-[100vh] max-md:px-4"
    >
      <h2 className="p-4 lg:mb-16">How to Participate</h2>

      {/* Responsive  */}
      <div className="my-7 flex flex-col items-center gap-5 md:mx-4 lg:hidden">
        {participateCardData.map((val, index) => (
          <div
            key={index}
            data-aos="flip-left"
            className="w-full rounded-[20px] border border-trinitypad-light-blue bg-[#22243080] p-5"
          >
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={val.logo}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="mt-2 object-cover"
                />
                <h3 className="w-full">{val.name}</h3>
              </div>
              <p className="w-full text-wrap text-start text-trinitypad-gray">
                {val.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-6 flex items-center gap-5 max-lg:hidden">
        {participateCardData.map((val, index) => (
          <div
            key={index}
            className="relative h-[280px] max-w-[390px] rounded-[20px] border border-trinitypad-light-blue bg-[#22243080] p-7"
          >
            <div className="flex flex-col items-center gap-3">
              <Image
                src={val.logo}
                alt="Logo"
                width={100}
                height={100}
                className="absolute top-[-50px] object-cover"
              />
              <div className="mt-10 flex flex-col items-center gap-3">
                <h3 className="w-full">{val.name}</h3>
                <p className="w-full text-wrap text-center text-trinitypad-gray">
                  {val.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParticipateComp;
