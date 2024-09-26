"use client";
// import React, { useState } from "react";
// import { QuestCard } from "../../ui/cards/quest-card";
// import { OptionBtns } from "@/components/ui/buttons/option-btns-comp";
// import { SearchInput } from "@/components/ui/inputs/search-input";
// import { useGetAirdropQuestItems } from "@/firebase/firestore/queries/quest-queries";
// import CarouselComp from "@/components/Carousel";

export default function QuestsComp() {
  //   const questQuery = useGetAirdropQuestItems();
  //   const [activeOption, setActiveOption] = useState(0);

  //   const filteredQuestItems = questQuery?.data?.filter((i) => {
  //     if (activeOption === 0) {
  //       return i;
  //     } else if (activeOption === 1) {
  //       return i.status === 0 ? i : null;
  //     } else if (activeOption === 2) {
  //       return i.status === 2 ? i : null;
  //     }
  //   });

  return (
    <section className="flex min-h-[120vh] flex-col items-start justify-start gap-10 bg-[url('/assets/common-bg/bg-with-lines.svg')] bg-cover bg-no-repeat py-[10vh] max-md:min-h-[65vh] max-md:overflow-hidden max-md:px-4 md:pe-[6%] md:ps-[4%]">
      <div className="flex w-full items-center justify-center">
        {/* <CarouselComp /> */}
      </div>
      <div className="flex max-w-[550px] flex-col items-start justify-start gap-3">
        <h2 className="py-4">Quests</h2>
        <p className="text-trinitypad-gray">
          Complete the Airdrop Quests below to earn TP! Each quest must be
          completed within a deadline to earn the TP rewards that can later be
          used in TrinityPad platform.
        </p>
      </div>
      <div className="flex w-full items-center justify-between max-md:justify-center">
        {/* <OptionBtns
          options={["All", "Available", "Ended"]}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        /> */}
        {/* <SearchInput /> */}
      </div>
      <div className="mx-auto mt-3 flex w-full items-center justify-center gap-5 max-md:flex-col md:flex-wrap lg:gap-10">
        {/* {questQuery?.isLoading && (
          <h2 className="animate-pulse rounded-xl bg-slate-300/30 p-4">
            Loading Quest Items...
          </h2>
        )}
        {questQuery?.isFetched &&
          filteredQuestItems?.map(
            (quest, index) =>
              !quest.disabled && <QuestCard key={index} val={quest} />,
          )}
        {filteredQuestItems?.length === 0 && <div>No Quest Items to show.</div>} */}
      </div>
    </section>
  );
}
