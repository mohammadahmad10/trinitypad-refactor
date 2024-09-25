import React from "react";
export default function Hero() {
  return (
    <section className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-5 bg-[url('/assets/presale/hero-bg.svg')] bg-cover bg-no-repeat max-md:min-h-[65vh] max-md:px-4">
      <div className="my-10 flex flex-col items-center justify-center">
        <p className="rounded-full border border-white px-4 py-2 text-xl font-medium capitalize max-md:text-sm">
          TRINITY TOKEN
        </p>
        <div className="py-4">
          <h1 data-aos="fade-down" className="text-center capitalize">
            Participate in the
            <br />
            future of <span className="text-blue-gradient"> Web3</span>
          </h1>
        </div>
        <div className="max-md:hidden">
          <p className="mb-3 mt-4 max-w-lg text-center">
            Participants will receive TrinityPad&apos;s guaranteed and limited
            &apos;Early-Backer Airdrop&apos; monthly for up to 1 year!
          </p>
        </div>
        <div className="md:hidden">
          <p className="mb-3 mt-2 text-center">
            Participate today to also enrol in 12 months Airdrop
          </p>
        </div>

        <div className="w-full">
          <div className="mx-auto box-content h-4 w-[80%] rounded-xl border border-primary md:w-56">
            <div
              className={`w-full h-4 rounded-xl bg-primary`}
              // className={`w-[${percentageRaised}%] h-4 rounded-xl bg-primary`}
            />
          </div>
          <h3 className="mt-5 font-bold">
            {/* ${Math.round(953176.32).toLocaleString()} / $
              {raiseGoal.toLocaleString()} */}
            $500 / $ $1000
          </h3>
        </div>

        {/* <ParticipateDialog>
            <div className="mt-10 max-md:mt-5">
              <ForwardBtn title="Participate Today!" onClick={() => {}} />
            </div>
          </ParticipateDialog> */}

        {/* <p className="text-md mt-5 max-w-xl text-center">
            Supported networks: Ethereum Chain, Binance Smart Chain, Base Chain.
          </p> */}
        {/* <p className="text-md mt-5 max-w-xl text-center md:text-lg">
            Direct deposit is acceptable, only send it to the official wallet
            address: {TRINITY_BENEFICIARY}
          </p> */}

        {/* <p className="mt-5 text-center">
            Copy and share your{" "}
            <span
              className="cursor-pointer underline underline-offset-4"
              onClick={() => copyReferralLink()}
            >
              referral link here
            </span>{" "}
            to earn $TNT when others participate via your link.
          </p> */}

        <p className="mt-5 max-w-xl text-center underline underline-offset-4">
          Thank you for participating! Stay tuned for the updates and next
          round.
        </p>
      </div>
    </section>
  );
}
