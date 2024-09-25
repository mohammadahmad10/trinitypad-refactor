import Image from "next/image";
import React from "react";
// import { PrivyPrimaryBtn } from "../buttons/primary-btn";
// import { InvestDialog } from "../dialogs/invest-dialog";
// import { ContractStatesContext } from "@/context/contracts";
// import { useGetAdmins } from "@/firebase/firestore/queries/profile-queries";
// import { usePrivy } from "@privy-io/react-auth";
//  import {
//   useGetCampaignsFromContract,
//   useGetCampaignsFromFirebase,
//   useSubmitCampaignAdminApproval,
// } from "@/firebase/firestore/queries/campaign-queries";
// import dayjs from "dayjs";
// import { doc, updateDoc } from "firebase/firestore";
// import { db } from "@/firebase/config";
// import { useMutation } from "@tanstack/react-query";
// import {
//   CampaignDetails,
//   FirebaseCampaignDetails,
// } from "@/interface/types/ido-types";
// import { useNotify } from "../toast/notify";
// import { SpinnerBtn } from "../ui/spinner/spinner-btn";
// import { useRouter } from "next/navigation";
// import { useGetFirebaseFileById } from "@/firebase/firestore/images";
// import { getChainDetailsByChainName } from "@/lib/constants";
import { GradientBorderWrapper } from "../gradient-border-wrapper";
import { AlertTriangle } from "lucide-react";
// { card }: { card: Partial<CampaignDetails> }
export const IDOEventCard = () => {
  //   const router = useRouter();
  //   const notify = useNotify();
  //   const { user } = usePrivy();
  //   const { activeAccount, trinityFactoryContract, chainType } =
  //     ContractStatesContext();
  //   const { data: adminData, isLoading: isAdminLoading } = useGetAdmins();
  //   const isCurrentUserAnAdmin: boolean =
  //     adminData?.filter((v: number) => v.address === activeAccount?.address)?.at(0)
  //       ?.address !== undefined || false;
  // adminData?.some((v) => v.address === user?.wallet?.address) || false;
  //   const { data: contractData, refetch: refetchContractCampaigns } =
  //     useGetCampaignsFromContract();
  //   const { refetch: refetchFirebaseCampaigns } = useGetCampaignsFromFirebase();
  //   const { data: eventBackground } = useGetFirebaseFileById({
  //     imageId: card?.bg,
  //   });
  //   const { data: eventLogo } = useGetFirebaseFileById({ imageId: card?.logo });

  //   const currentCardContractInfo = contractData
  //     ?.filter(
  //       (i) =>
  //         i.durationSeconds === card.durationSeconds &&
  //         i.projectName === card.projectName,
  //     )
  //     ?.at(0);

  //   const { mutate: submitApproval, isPending: isSubmitApprovalPending } =
  //     useMutation({
  //       mutationKey: ["submit-campaign-approval"],
  //       mutationFn: async ({
  //         id,
  //         approver,
  //       }: {
  //         id: string;
  //         approver: string;
  //       }) => {
  //         if (!id) {
  //           throw new Error("ID not provided");
  //         }
  //         await updateDoc(doc(db, "campaign", id), {
  //           approved: true,
  //           approver: approver,
  //         });
  //       },
  //       onSuccess: () => {
  //         notify({ type: "success", title: "campaign successfully approved" });
  //         refetchContractCampaigns();
  //         refetchFirebaseCampaigns();
  //       },
  //       onError: () => {
  //         notify({ type: "error", title: "error occurred approving campaign" });
  //       },
  //     });

  //   const { mutate: approveCampaign, isPending: isApproveCampaignPending } =
  //     useMutation({
  //       mutationFn: async () => {
  //         const campaignId = card?.campaignId;
  //         if (!campaignId) {
  //           alert("Campaign ID not found in contract. Please refresh your page");
  //           throw new Error("Campaign ID not found in contract");
  //         }

  //         const tsx = await trinityFactoryContract?.approveCampaign(
  //           campaignId,
  //           getChainDetailsByChainName(chainType)?.trinityFactoryExtensionAddress,
  //           // chainType === "sepolia"
  //           //   ? "0x4C7c32F2f7249D01D3865923A710a14AC642b7a0"
  //           //   : "0x1B60e616aDbDF2d2769B5A8ED5666E7499E680d3",
  //           // { gasLimit: 100000 },
  //         );
  //         await tsx?.wait();
  //         alert("Campaign approved");
  //         await updateDoc(doc(db, "campaign", card?.id!), {
  //           approved: true,
  //           campaignStatus: "approved",
  //           status: 1,
  //         });
  //       },
  //       onError: (e) => {
  //         console.error(e);
  //         alert(
  //           "An error occurred. Please confirm if your wallet has admin permissions added in contract. Or contact an official Admin for approval.",
  //         );
  //         notify({ type: "error", title: "Error occurred approving campaign" });
  //       },
  //       onSuccess: () => {
  //         notify({ type: "success", title: "Campaign successfully approved" });
  //         refetchContractCampaigns();
  //         refetchFirebaseCampaigns();
  //       },
  //     });

  //   const { mutate: cancelCampaign, isPending: isRejectCampaignPending } =
  //     useMutation({
  //       mutationFn: async () => {
  //         const campaignId = card?.campaignId;
  //         if (!campaignId) {
  //           alert("campaign ID not found in contract. Please refresh your page");
  //           throw new Error("campaign ID not found in contract");
  //         }

  //         await trinityFactoryContract?.rejectCampaign(campaignId);
  //         await updateDoc(doc(db, "campaign", card?.id!), {
  //           approved: true,
  //           campaignStatus: "rejected",
  //           status: 2,
  //         });
  //         alert("campaign has been cancelled");
  //       },
  //       onError: () => {
  //         alert(
  //           "an error occurred. Please confirm if your wallet has admin permissions added in contract. Or contact an official Admin for approval.",
  //         );
  //         notify({ type: "error", title: "error occurred rejecting campaign" });
  //       },
  //       onSuccess: () => {
  //         notify({ type: "success", title: "campaign successfully rejected" });
  //         refetchContractCampaigns();
  //         refetchFirebaseCampaigns();
  //       },
  //     });
  return (
    <GradientBorderWrapper
      data-aos="flip-left"
      className="relative !rounded-3xl p-1"
      wrapperClassName="max-w-lg max-md:max-w-sm min-w-60 !rounded-3xl"
    >
      {/* {card.status === 0 && ( */}
      <div className="absolute right-[10px] top-[10px] z-[1] rounded-[10px] bg-[#11121880] px-2 py-1 capitalize text-white">
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/assets/icons/timer.svg"
            alt="timer"
            width={11}
            height={13}
            className="object-cover"
          />
          <p className="text-[14px] text-trinitypad-light-blue">coming soon</p>
        </div>
      </div>
      {/* )} */}
      {/* {card.status === 2 && ( */}
      <div className="absolute right-[10px] top-[10px] z-[1] rounded-[10px] bg-[#11121880] px-2 py-1 capitalize text-white">
        <div className="flex flex-row items-center gap-2">
          <AlertTriangle
            size={15}
            className="text-trinitypad-light-blue invert"
          />
          <p className="text-[14px] text-trinitypad-light-blue invert">
            cancelled
          </p>
        </div>
      </div>
      /
      <div
        // onClick={() => {
        //   router.push(`/project/${card?.projectName}`);
        // }}
        className="relative cursor-pointer"
      >
        <Image
          src={"/assets/launchpad/cards/unknown-bg.png"}
          //   src={eventBackground || "/assets/launchpad/cards/unknown-bg.png"}
          //   alt={card.projectName || ""}
          alt={""}
          width={390}
          height={250}
          className="relative h-64 w-full rounded-t-3xl object-cover"
        />
        <div className="absolute bottom-[-40px] flex w-full items-center justify-between px-[6%]">
          <Image
            // src={eventLogo || "/assets/launchpad/cards/logo.svg"}
            // alt={card?.projectName || ""}
            src={"/assets/launchpad/cards/logo.svg"}
            alt={""}
            width={76}
            height={76}
            className="object-cover"
          />
          <Image
            src="/assets/launchpad/cards/ido.svg"
            alt="ido"
            width={87}
            height={40}
            className=""
          />
        </div>
      </div>
      <div className="mb-2 mt-14 flex flex-col gap-4 px-[5.5%]">
        <div className="flex flex-row items-center justify-between">
          <h3 className="max-w-xs text-wrap break-all text-[32px] font-[700]">
            {/* {card?.projectName} */} Card Title
          </h3>
          <Image
            src="/assets/launchpad/cards/blue-electric.svg"
            alt="ido"
            width={38}
            height={38}
            className="object-cover"
          />
        </div>
        <div
          //   onClick={() => {
          //     router.push(`/project/${card?.projectName}`);
          //   }}
          className="cursor-pointer rounded-[15px] bg-[#252737] p-5"
        >
          {[
            {
              title: "Event Date",
              value: "88",
              //   value:
              //   card?.durationSeconds?.toString() !== "0"
              //     ? dayjs.unix(Number(card?.durationSeconds))?.toString()
              //     : "--",
            },
            {
              title: "Trinity Allocation",
              value: "99",
              //   value: card?.circulatingSupply?.toLocaleString(),
            },
            {
              title: "Event Token Price",
              value: "77",
              //  value: card?.presaleRate?.toLocaleString(),
            },
          ].map((val, index) => (
            <div key={index} className="my-2 flex items-center justify-between">
              <h6 className="text-trinitypad-gray">{val?.title}</h6>
              <h6 className="text-right text-xs font-[700]">{val?.value}</h6>
            </div>
          ))}
        </div>
        <div className="my-2 flex w-full flex-col gap-2">
          {/* <div className="text-center text-xs font-light text-trinitypad-light-blue">
              {card?.approved
                ? "Project has been approved by Admin!"
                : "Awaiting Approval from Admin"}
            </div> */}
          {/* {!card?.approved && (
            <div>
              {isCurrentUserAnAdmin && (
                <button
                  onClick={() =>
                    submitApproval({
                      id: card?.id?.toString()!,
                      approver: user?.wallet?.address!,
                    })
                  }
                  className="w-full rounded-2xl bg-trinitypad-light-blue p-2 text-center text-black"
                >
                  <div className="flex w-full flex-row items-center justify-center gap-2">
                    {isSubmitApprovalPending && <SpinnerBtn />}
                    Approve this project
                  </div>
                </button>
              )}
            </div>
          )} */}
        </div>
        {/* {card?.approved && (
          // {currentCardContractInfo?.status === 0 && (
          <div className="flex w-full flex-col items-center gap-2">
            {card?.status === 0 &&
              activeAccount?.address &&
              isCurrentUserAnAdmin && (
                <PrivyPrimaryBtn
                  onClick={() => {
                    approveCampaign();
                  }}
                  className="w-full"
                >
                  <div className="flex flex-row gap-2">
                    {isApproveCampaignPending && <SpinnerBtn />} Approve
                  </div>
                </PrivyPrimaryBtn>
              )}
            {card?.status === 0 &&
              activeAccount?.address &&
              isCurrentUserAnAdmin && (
                <PrivyPrimaryBtn
                  onClick={() => {
                    cancelCampaign();
                  }}
                  className="w-full bg-rose-400"
                >
                  <div className="flex flex-row gap-2">
                    {isRejectCampaignPending && <SpinnerBtn />} Reject
                  </div>
                </PrivyPrimaryBtn>
              )}
          </div>
        )} */}
        {/* {card?.status === 1 && <div>Campaign has been approved!</div>}
          {card?.status === 2 && (
            <div>Campaign has been rejected by owner!</div>
          )} */}
      </div>
    </GradientBorderWrapper>
  );
};
