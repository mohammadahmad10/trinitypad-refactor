"use client";
// import InfoBtn from "@/components/ui/buttons/info-btn";
// import { OptionBtns } from "@/components/ui/buttons/option-btns-comp";
// import PrimaryBtn from "@/components/ui/buttons/primary-btn";
// import { IDOEventCard } from "@/components/ui/cards/ido-event-card";
import { TileCard } from "@/components/ui/cards/tile-card";
// import { InvestDialog } from "@/components/ui/dialogs/invest-dialog";
// import LoadingSpinner from "@/components/ui/spinner/loading-spinner";
// import { ContractStatesContext } from "@/context/contracts";
// import {
//   CampaignFilterOptionType,
//   useGetCampaignsFromFirebase,
// } from "@/firebase/firestore/queries/campaign-queries";
// import { useGetTotalInvestmentsFromApi } from "@/firebase/firestore/queries/investment-queries";
// import { useGetAdmins } from "@/firebase/firestore/queries/profile-queries";
// import { useGetShadowCampaignsFromFirebase } from "@/firebase/firestore/queries/shadow-campaign-queries";
// import { CampaignDetails } from "@/interface/types/ido-types";
// import { usePrivy } from "@privy-io/react-auth";
// import { Info } from "lucide-react";
// import { usePathname } from "next/navigation";
import React from "react";

const IDOEventsComp = () => {
  //   const { authenticated, connectWallet, user } = usePrivy();
  //   const [openInvestDialog, setInvestDialog] = useState(false);
  //   const { activeAccount } = ContractStatesContext();
  //   const { data: adminData } = useGetAdmins();
  //   const [activeOption, setActiveOption] = useState(0);
  //   const [loadMoreProjects, setLoadMoreProjects] = useState(3);
  //   const [selectedFilterOption, setSelectedFilterOption] =
  //     useState<CampaignFilterOptionType>("newest");
  //   const { data, isLoading, isError, error } =
  //     useGetCampaignsFromFirebase(selectedFilterOption);
  //   const pathname = usePathname();

  //   const isCurrentUserWalletAnAdmin: boolean =
  //     adminData?.some((i: any) => i?.address === activeAccount?.address) ?? false;

  //   const idoCardData: Partial<CampaignDetails>[] | undefined =
  //     isCurrentUserWalletAnAdmin
  //       ? data
  //       : data?.filter((i: any) => i.approved === true);

  //   const { data: totalInvestmentData, isLoading: isLoadingTotalInvestments } =
  //     useGetTotalInvestmentsFromApi();

  const tileCardData = [
    {
      logo: "/assets/ido/tiles/community.svg",
      title: "Unique Participants",
      value: "Loading...",
      //   value: `${isLoadingTotalInvestments ? "Loading..." : totalInvestmentData?.participants?.toLocaleString()}`,
    },
    {
      logo: "/assets/ido/tiles/diamond.svg",
      title: "Total Amount Raised",
      value: "Loading...",
      //   value: `${isLoadingTotalInvestments ? "Loading..." : totalInvestmentData?.total?.toLocaleString()}`,
    },
    {
      logo: "/assets/ido/tiles/rocket.svg",
      title: "Average Upside",
      value: "317%",
    },
  ];

  return (
    <>
      <section
        id="explore-events"
        className="flex min-h-[120vh] flex-col items-start justify-start gap-10 overflow-x-hidden bg-[url('/assets/common-bg/bg-with-lines.svg')] bg-cover bg-no-repeat py-[10vh] max-md:min-h-[65vh] max-md:px-3 max-md:py-[5vh] md:px-[4%]"
      >
        <div className="flex w-full items-start justify-between max-md:flex-wrap max-md:px-2">
          <div className="mb-5 flex w-full flex-col items-start justify-between ">
            <h1 className="text-blue-gradient py-4">
              IDO <span className="text-blue-gradient-inverted">Projects</span>
            </h1>
            <div className="gradient-shadow rounded-xl bg-trinitypad-gray/20 px-7 py-2 text-trinitypad-gray">
              {" "}
              <p>Apply For IDO</p>
            </div>

            {/* 
            {pathname != "/invest" ? (
              <>
                <InvestDialog open={openInvestDialog} setOpen={setInvestDialog}>
                  <></>
                </InvestDialog>
                <div data-aos="fade-right">
                  <InfoBtn
                    onClick={() => {
                      if (authenticated && user?.wallet) {
                        setInvestDialog(true);
                      } else {
                        connectWallet();
                      }
                    }}
                    className="gradient-shadow bg-trinitypad-gray/20 px-7 py-2 text-trinitypad-gray"
                  >
                    <p>Apply For IDO</p>
                  </InfoBtn>
                </div>
              </>
            ) : null} */}
          </div>
          <div className="flex flex-row flex-wrap items-center justify-end gap-5 max-md:hidden md:max-w-[650px]">
            {tileCardData.map((val) => (
              <TileCard key={val.title} val={val} className="break-all" />
            ))}
          </div>
          <div className="grid grid-cols-1 items-start gap-5 md:hidden">
            <div className="flex flex-row flex-wrap items-center gap-5">
              {tileCardData.slice(0, 2).map((val) => (
                <TileCard key={val.title} val={val} />
              ))}
            </div>
            <div className="flex flex-row items-center gap-5">
              {tileCardData.slice(2, 4).map((val) => (
                <TileCard key={val.title} val={val} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-7 max-md:justify-center">
          {/* <OptionBtns
            options={
              isCurrentUserWalletAnAdmin
                ? ["Newest", "Oldest", "Pending", "Canceled", "Shadow"]
                : ["Newest", "Oldest"]
            }
            activeOption={activeOption}
            setActiveOption={(val) => {
              setActiveOption(val);
              switch (val) {
                case 0:
                  setSelectedFilterOption("newest");
                  break;
                case 1:
                  setSelectedFilterOption("oldest");
                  break;
                case 2:
                  setSelectedFilterOption("pending");
                  break;
                case 3:
                  setSelectedFilterOption("cancelled");
                  break;
                case 4:
                  setSelectedFilterOption("shadow");
                  break;
                default:
                  setSelectedFilterOption("newest");
                  break;
              }
            }}
          /> */}

          {/* <SearchInput /> */}
        </div>
        {/* {isCurrentUserWalletAnAdmin && (
          <h2 className="flex w-fit flex-row items-center gap-2 rounded-xl border border-blue-400 bg-blue-200 px-2 text-xs font-bold text-blue-700">
            <Info />
            Logged in as an Admin wallet. Currently showing all Projects.
          </h2>
        )} */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* {isLoading && (
            <h2 className="animate-pulse rounded-xl bg-trinitypad-gray/50 p-4">
              <span className="flex flex-row items-center gap-4">
                <LoadingSpinner className="h-8 w-8" />
                Loading IDO Events
              </span>
            </h2>
          )} */}
          {/* {isError && <h2>Error: {error?.message?.toString()}</h2>} */}
          {/* {(!idoCardData || idoCardData?.length == 0) && !isLoading && (
            <h2>No Approved Projects to Show</h2>
          )} */}
        </div>
        <div className="flex w-full justify-center">
          <div className="hide-scroll mt-3 grid grid-cols-1 items-start justify-center gap-8 max-md:items-center max-md:overflow-auto md:grid-cols-2 lg:grid-cols-3 xl:gap-14">
            {/* {idoCardData
              ?.slice(0, loadMoreProjects)
              ?.map((campaign, index) => (
                <IDOEventCard key={index} card={campaign} />
              ))} */}
          </div>
        </div>
        <div className="my-7 flex w-full flex-row items-center justify-center gap-4">
          {/* {idoCardData && loadMoreProjects < idoCardData?.length && (
            <PrimaryBtn
              onClick={() => {
                setLoadMoreProjects(loadMoreProjects + 3);
              }}
            >
              <p>Load More Projects</p>
            </PrimaryBtn>
          )} */}
        </div>
      </section>
    </>
  );
};

export default IDOEventsComp;
