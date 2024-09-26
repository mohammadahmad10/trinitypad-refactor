"use client";
import Image from "next/image";
import { Check, X } from "lucide-react";

const TierRewards = () => {
  return (
    <section className="relative flex min-h-[50vh] w-full flex-col items-center gap-14 bg-[url('/assets/staking/participate-bg.svg')] bg-cover bg-no-repeat py-32 max-lg:min-h-[100vh] max-md:px-4">
      <h2 className="mt-10">Staking Tier Rewards</h2>
      <Image
        src="/assets/staking/tier-rewards.png"
        width={875}
        height={237}
        alt="TNT Tiers reward"
        className="w-[90%] md:w-auto"
      />
    </section>
  );
};

const TierBenefits = () => {
  return (
    <section className="bg-gradient-radial relative flex h-auto w-full flex-col items-center gap-14 py-20 max-md:px-4 md:min-h-[50vh]">
      <h2 className="mt-10 p-4">TrinityPad Tier System</h2>
      <TierBenefitsTable />
    </section>
  );
};

export { TierBenefits, TierRewards };

function TierBenefitsTable() {
  const Tick = () => <Check />;
  const Cross = () => <X className="text-gray-400" />;
  const TABLE_DATA = [
    {
      title: "Allocation Multiplier",
      bronze: "1x",
      silver: "5x",
      gold: "10x",
      platinum: "25x",
      diamond: "50x",
    },
    {
      title: "100% Refund Eligibility",
      bronze: <Tick />,
      silver: <Tick />,
      gold: <Tick />,
      platinum: <Tick />,
      diamond: <Tick />,
    },
    {
      title: "Guaranteed Allocations in IDOs",
      bronze: <Tick />,
      silver: <Tick />,
      gold: <Tick />,
      platinum: <Tick />,
      diamond: <Tick />,
    },
    {
      title: "DAO Voting Access",
      bronze: <Cross />,
      silver: <Cross />,
      gold: <Tick />,
      platinum: <Tick />,
      diamond: <Tick />,
    },
    {
      title: "Allocation Increase",
      bronze: <Cross />,
      silver: <Cross />,
      gold: <Tick />,
      platinum: <Tick />,
      diamond: <Tick />,
    },
    {
      title: "Learn to Earn Airdrop",
      bronze: <Cross />,
      silver: <Cross />,
      gold: <Tick />,
      platinum: <Tick />,
      diamond: <Tick />,
    },
    {
      title: "Ambassador Program",
      bronze: <Cross />,
      silver: <Cross />,
      gold: <Tick />,
      platinum: <Tick />,
      diamond: <Tick />,
    },
    {
      title: "Diamond Club Exclusive Deals",
      bronze: <Cross />,
      silver: <Cross />,
      gold: <Cross />,
      platinum: <Cross />,
      diamond: <Tick />,
    },
    {
      title: "Total TNT Staked",
      bronze: "40,000",
      silver: "200,000",
      gold: "400,000",
      platinum: "1,000,000",
      diamond: "2,000,000",
    },
  ];

  function ColumnWrapper({
    children,
    title,
  }: {
    children: React.ReactNode;
    title: string;
  }) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 divide-y-2 rounded-lg bg-gray-800 p-2">
        <div>{title}</div>
        <div className="flex flex-col items-center justify-center gap-2 divide-y-2 rounded-lg border-gray-800/20 bg-trinitypad-mid-blue p-2">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="changed-scroll flex w-full justify-center overflow-auto">
      <div className="flex w-full flex-row items-end gap-4 md:justify-center md:max-lg:gap-0">
        <div className="mb-2 divide-y-2 md:max-lg:mr-3">
          <div className="flex h-full w-full flex-col items-start justify-end gap-2 divide-y-2 rounded-lg bg-trinitypad-mid-blue p-2">
            {TABLE_DATA?.map((i) => (
              <div key={i.title} className="w-full text-nowrap pt-2 first:pt-0">
                {i.title}
              </div>
            ))}
          </div>
        </div>
        <ColumnWrapper title="Bronze">
          {TABLE_DATA?.map((i) => (
            <div
              key={i.title}
              className="flex w-full justify-center pt-2 first:pt-0"
            >
              {i.bronze}
            </div>
          ))}
        </ColumnWrapper>
        <ColumnWrapper title="Silver">
          {TABLE_DATA?.map((i) => (
            <div
              key={i.title}
              className="flex w-full justify-center pt-2 first:pt-0"
            >
              {i.silver}
            </div>
          ))}
        </ColumnWrapper>
        <ColumnWrapper title="Gold">
          {TABLE_DATA?.map((i) => (
            <div
              key={i.title}
              className="flex w-full justify-center pt-2 first:pt-0"
            >
              {i.gold}
            </div>
          ))}
        </ColumnWrapper>
        <ColumnWrapper title="Platinum">
          {TABLE_DATA?.map((i) => (
            <div
              key={i.title}
              className="flex w-full justify-center pt-2 first:pt-0"
            >
              {i.platinum}
            </div>
          ))}
        </ColumnWrapper>
        <ColumnWrapper title="Diamond">
          {TABLE_DATA?.map((i) => (
            <div
              key={i.title}
              className="flex w-full justify-center pt-2 first:pt-0"
            >
              {i.diamond}
            </div>
          ))}
        </ColumnWrapper>
      </div>
    </div>
  );
}
