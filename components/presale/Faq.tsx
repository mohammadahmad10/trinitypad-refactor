"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqsData = [
  {
    question: "How does the 12-month airdrop work?",
    answer:
      "Users who purchase $TNT in the first round secure a guaranteed spot in monthly airdrops for 12 months following the TGE.",
  },
  {
    question: "Can I deposit directly into the project?",
    answer:
      "You can transfer ETH, BNB, USDT, or USDC directly into TrinityPad's official beneficiary wallet: 0x0544De57e2Cf2828ad2D763F2d87FBe2Ca629778. Direct participation can take up to 24 hours to show up on this page.",
  },
  {
    question: "How does the referral system work?",
    answer:
      "Copy your unique referral link above and share it with your friends. When someone deposits funds through your link, you'll receive a percentage of their $TNT allocation added to your own. Additionally, you will also earn a percentage from the $TNT allocations of any users referred by your friends, creating a second-tier participation reward.",
  },
  {
    question: "Where do my participations show?",
    answer:
      "Once you submit funds through the link above, you can refresh this page to see a new section called 'Your Participations' which will show a proof of your transaction, the amount you deposited, and also the $TNT allocation that you have secured.",
  },
  {
    question: "Which blockchain networks are supported?",
    answer:
      "We are currently accepting deposits on Ethereum Mainnet (Ether, USDT), BNB Chain (BNB, USDT) and Base Chain (Ether, USDC). You can either deposit through the button above or directly into the beneficiary wallet.",
  },
  {
    question: "How do I buy Ether, BNB, USDT or USDC?",
    answer:
      "You can purchase ETH, BNB, USDT, or USDC via a decentralized exchange (DEX) or any major centralized exchange (CEX) such as Binance, Bybit, MEXC. Next, send your purchased tokens (e.g., USDT) to your MetaMask wallet to participate in this presale event. Note: PLEASE DO NOT USE or TRANSFER tokens directly from your CEX account to TrinityPad's official wallet. No token allocation or refund will be processed in case you do.",
  },
];

const FAQComp = () => {
  return (
    <section className="w-full bg-[url('/assets/presale/faq-bg.svg')] bg-cover bg-no-repeat px-[4%] max-md:py-14 md:py-24 md:pb-20">
      <h2 className="z-1 p-4 pb-10 mx-auto">Frequently Asked Questions</h2>
      {/* <Image
          src="/assets/landing/faq.svg"
          alt="faq"
          width={250}
          height={210}
          className="object-cover z-10 max-md:absolute max-md:right-0 max-md:top-[-20px] max-md:w-[100px] max-md:h-[100px]"
        /> */}

      <Accordion type="single" collapsible className="mt-7">
        {faqsData.map((val, index) => (
          <AccordionItem
            // data-aos="flip-left"
            key={val.question}
            value={val.question}
            className="mt-4 w-full rounded-[20px] border border-[#FFFFFF4D] bg-slate-300/30 px-4"
          >
            <AccordionTrigger className="text-start hover:no-underline max-md:text-sm md:text-base">
              {index + 1}. {val.question}
            </AccordionTrigger>
            <AccordionContent className="text-start max-md:text-xs md:text-sm">
              <p dangerouslySetInnerHTML={{ __html: val.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQComp;
