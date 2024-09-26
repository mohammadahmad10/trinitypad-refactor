import React from "react";

export default function HeroComp() {
  return (
    <>
      <section className="flex min-h-[95vh] w-full flex-col items-center justify-center gap-5 bg-[url('/assets/airdrop/hero-bg.svg')] bg-cover bg-bottom bg-no-repeat max-md:min-h-[65vh] max-md:px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center">
            <span data-aos="fade-down" className="text-gradient">
              Unleash The Power Of
            </span>
            <br />
            <span data-aos="fade-down">
              Web3 Excellence With{" "}
              <span className="text-blue-gradient">TrinityPad</span>
            </span>
          </h1>
        </div>
      </section>
    </>
  );
}
