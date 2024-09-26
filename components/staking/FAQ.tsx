// "use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqsData = [
  {
    question: "What is Trinity Reward Station?",
    answer:
      "Trinity Reward Station is a dedicated dashboard on TrinityPad, designed for users to participate in Airdrops and Staking rewards. Utilizing a sustainable and sophisticated Tier Reward System, each participation in the Staking Program is assigned a specific tier. By staking on TrinityPad, users can passively earn rewards from partner programs and IDOs available on the TrinityPad platform.",
  },
  {
    question: "Can I lock or unlock my TNT at any time during the campaign?",
    answer:
      "You have the option to either lock your $TNT commitment for a specific period or keep it flexible with the ability to unlock at any time. If you decide to commit to a lockup period, you will automatically enroll in the Tier Rewards System. This system assigns your stake a tier, allowing you to earn enhanced benefits over time.",
  },
  {
    question: "How are the rewards calculated and distributed?",
    answer:
      "TrinityPad collaborates with IDOs listed on the platform to allocate a portion of their token supply to our stakers. These tokens are distributed based on each staker's position in the staking pool relative to others. This approach offers an effective way to diversify your portfolio with TrinityPad, as you automatically start accumulating tokens from various partner programs.",
  },
  {
    question:
      "Are there any minimum requirements or limits for locking TNT during the event?",
    answer:
      "You have the option not to lock your $TNT at all. However, if you choose to lock your $TNT for a period ranging from a minimum of 3 months to a maximum of 12 months, you will automatically enroll in our Tier Rewards System. This system provides boosted earnings benefits, enhancing your rewards over time.",
  },
  {
    question: "When and how can I claim my rewards?",
    answer:
      "Your rewards accumulate over time, and you can visit the portal at any point to claim your accumulated rewards during your staking period.",
  },
];
const FAQComp = () => {
  return (
    <section className="px-[4%] py-20">
      <h2 className="p-4">FAQ</h2>
      <Accordion type="single" collapsible className="mx-auto mt-7 max-w-4xl">
        {faqsData.map((val, index) => (
          <AccordionItem
            data-aos="flip-left"
            key={val.question}
            value={val.question}
            className="mt-4 w-full rounded-[20px] border border-white/30 bg-[#2d2f3e] px-4"
          >
            <AccordionTrigger className="text-start hover:no-underline">
              {index + 1}. {val.question}
            </AccordionTrigger>
            <AccordionContent className="text-start">
              {val.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQComp;
