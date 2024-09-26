"use client";
import Image from "next/image";
import React, { useState } from "react";
// import PrimaryBtn, { PrivyPrimaryBtn } from "../../ui/buttons/primary-btn";
//  import InfoBtn from "../../ui/buttons/info-btn";
// import { usePrivy, useWallets } from "@privy-io/react-auth";
import { TileCard } from "@/components/ui/cards/tile-card";
// import { NumberInput } from "@/components/ui/inputs/number-input";
// import PrimaryInput from "@/components/ui/input";
// import { cn } from "@/lib/utils";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import { ContractStatesContext } from "@/context/contracts";
// import {
//   useDeleteStake,
//   useGetStakesForAddress,
//   useGetTotalStakeDetailsFromApi,
//   useSubmitStakeRequest,
//   useSubmitUnstakeByIndex,
// } from "@/firebase/firestore/queries/stake-queries";
// import { ethers } from "ethers";
// import MerkleTree from "merkletreejs";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "@/firebase/config";
// import { Spinner } from "@/components/ui/spinner/";
// import { SpinnerBtn } from "@/components/ui/spinner/spinner-btn";
// import { useGetTotalLockedTNT } from "@/firebase/firestore/queries/investment-queries";
// import { OutlineGradientBtn } from "@/components/ui/buttons/outline-btn";
import { GradientBorderWrapper } from "@/components/ui/gradient-border-wrapper";
// import { formatNumber } from "@/lib/format-number";
// import * as RadioGroup from "@radix-ui/react-radio-group";

// const lockData = [
//   {
//     logo: "/assets/staking/lock.svg",
//     name: "Available to Lock",
//     value: "123456",
//   },
//   {
//     logo: "/assets/staking/lock.svg",
//     name: "Available to Lock",
//     value: "123456",
//   },
// ];

function LockingBox() {
  //   const {
  //     mySigner,
  //     chainId,
  //     usdtContract,
  //     sepoliaStakingContract,
  //     sepoliaStakeContractAddress,
  //   } = ContractStatesContext();

  //   const { data } = useGetTotalLockedTNT();

  const [activeBtn, setActiveBtn] = useState(0);
  //   const [openDialog, setOpenDialog] = useState(false);
  //   const [actMaxMin, setActMaxMin] = useState(0);
  //   const [selectedWallet, setSelectedWallet] = useState<string | undefined>(
  //     undefined,
  //   );
  const [inputValue, setInputValue] = useState(0.0);
  //   const { user, authenticated } = usePrivy();
  //   const { wallets } = useWallets();

  //   const {
  //     data: userWalletBalance,
  //     isLoading,
  //     isError,
  //     error,
  //   } = useQuery({
  //     queryKey: ["user-wallet-balance-", wallets?.at(0)?.address],
  //     queryFn: async () => {
  //       const userWallet = wallets?.at(0);

  //       if (!userWallet) {
  //         throw new Error("wallet not provided");
  //       }
  // const walletProvider = await userWallet?.getEthersProvider();
  // const balance = await walletProvider?.getBalance(userWallet?.address);
  // return balance.toString();

  // if (!mySigner?.getAddress() || !myProvider) return;
  // if (!usdContract) return;

  //       const me = await mySigner?.getAddress();
  //       const decimals = await usdtContract?.decimals();
  //       const temp = await usdtContract?.balanceOf(me);
  //       const balanceTNT = Number(temp / BigInt(Math.pow(10, Number(decimals))));
  //       return balanceTNT?.toString();
  //     },
  //   });

  //   const userWalletsList: any[] | undefined = user?.linkedAccounts?.filter(
  //     (i) => i.type === "wallet",
  //   );

  //   const userStakesData = useGetStakesForAddress({
  //     address: user?.wallet?.address,
  //   });

  //   const unstakeMutation = useSubmitUnstakeByIndex();
  //   const stakeSubmitMutation = useSubmitStakeRequest();

  //   function getChainName() {
  //     const chainId = wallets?.at(0)?.chainId?.toString()?.split(":")?.at(1);
  //     switch (chainId) {
  //       case "1":
  //         return "Ethereum";
  //       case "56":
  //         return "BNB";
  //       case "8453":
  //         return "Base";
  //       case "11155111":
  //         return "Sepolia testnet";
  //       default:
  //         return "Unknown Chain";
  //     }
  //   }

  return (
    <div data-aos="flip-left">
      <GradientBorderWrapper
        wrapperClassName="max-w-3xl mx-auto"
        className="max-md:p-4 md:p-7"
      >
        <div className="flex flex-col items-center gap-5 md:flex-row">
          {activeBtn === 0 && (
            <>
              {/* <PrimaryBtn
                onClick={() => {
                  setActiveBtn(0);
                }}
                className="w-full max-md:text-xs"
              >
                <p>Lock TNT</p>
              </PrimaryBtn> */}
              {/* <InfoBtn
                onClick={() => {
                  setActiveBtn(1);
                }}
                className="w-full max-md:text-xs"
              > */}
              <p>Unlock TNT</p>
              {/* </InfoBtn> */}
            </>
          )}
          {activeBtn === 1 && (
            <>
              {/* <InfoBtn
                onClick={() => {
                  setActiveBtn(0);
                }}
                className="w-full max-md:text-xs"
              > */}
              <p>Lock TNT</p>
              {/* </InfoBtn> */}
              {/* <PrimaryBtn
                onClick={() => {
                  setActiveBtn(1);
                }}
                className="w-full max-md:text-xs"
              > */}
              <p>Unlock TNT</p>
              {/* </PrimaryBtn> */}
            </>
          )}
        </div>
        {activeBtn === 0 && (
          <>
            <div className="mt-10 flex flex-col items-center gap-5 md:flex-row">
              {/* {lockData.map((val, index) => ( */}
              <div className="flex w-full items-start gap-3 rounded-[10px] border-[1px] border-[#868DAE33] p-3 md:w-[50%]">
                <Image
                  src={"/assets/staking/lock.svg"}
                  alt="Logo"
                  width={16}
                  height={16}
                  className="mt-1 object-cover"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h4 className="text-base text-trinitypad-gray max-md:text-sm">
                    Available to Lock
                  </h4>

                  {/* {isLoading && <SpinnerBtn />} */}
                  {/* {userWalletBalance && ( */}
                  <div className="text-sm font-medium max-md:text-xs">
                    TNT
                    {/* {userWalletBalance || "0"} TNT */}
                  </div>
                  {/* )} */}
                  {/* {isError && ( */}
                  <p className="text-sm text-red-400 max-md:text-xs">
                    Unable to Connect to Wallet
                  </p>
                  {/* )} */}
                </div>
              </div>
              {/* ))} */}
              <div className="flex w-full items-start gap-3 rounded-[10px] border-[1px] border-[#868DAE33] p-3 md:w-[50%]">
                <Image
                  src={"/assets/staking/lock.svg"}
                  alt="Logo"
                  width={16}
                  height={16}
                  className="mt-1 object-cover"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h4 className="text-base text-trinitypad-gray max-md:text-sm">
                    Chain
                  </h4>
                  <div className="flex gap-2 text-sm font-medium max-md:text-xs">
                    {/* {isLoading && <SpinnerBtn />} */}
                    {/* {getChainName()} */}
                    {/* {isError && (
                        <div className="text-sm text-red-400">
                          Unable to Connect to Wallet
                        </div>
                      )} */}
                  </div>
                </div>
              </div>
              {/* <button onClick={() => getUserBalance()}>GET</button> */}
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-[10px] border-[1px] border-[#868DAE33] p-3">
              <Image
                src="/assets/icons/gray-wallet.svg"
                alt="Wallet"
                width={16}
                height={16}
                className="mt-1 object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-2 break-all">
                <h4 className="text-base text-trinitypad-gray max-md:text-sm">
                  Wallet Address Connected
                </h4>
                {/* {!authenticated && ( */}
                <p className="text-sm font-medium max-md:text-xs">
                  Not Connected
                </p>
                {/* )} */}
                {/* {authenticated && ( */}
                <p className="text-sm max-md:text-xs">
                  {/* {user?.wallet?.address || "Not Connected"} */}
                  Not Connected
                  {/* {userWalletsList?.map((i, index) => (
                  <div key={index}>{i?.address}</div>
                ))} */}
                </p>
                {/* )} */}
              </div>
            </div>
            <div className="mt-10 rounded-xl bg-btn-gradient-reverse p-0.5">
              <div className="size-full rounded-xl bg-[#1C1E2C] p-7 max-md:p-2">
                <div className="flex w-full flex-wrap items-center justify-between gap-5 rounded-[7px] border-[1px] border-[#868DAE33] bg-[#2B2D40] p-3">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/assets/favicon.svg"
                      alt="favicon"
                      width={30}
                      height={22}
                      className="object-cover"
                    />
                    <input
                      type="number"
                      className="focus-none border-none bg-transparent text-[24px] outline-none max-md:w-full"
                      value={inputValue}
                      //   onChange={(e: any) => {
                      //     setInputValue(e.target.value);
                      //   }}
                      placeholder="0"
                    />
                  </div>
                  <div className="flex items-center justify-end gap-3 max-md:w-full">
                    <p className="rounded-[10px] border-none bg-transparent p-3 text-sm capitalize outline-none max-md:p-1 max-md:text-xs">
                      TNT
                    </p>
                    <button
                      onClick={() => {
                        // setActMaxMin(index);
                        // setInputValue(Number(userWalletBalance) || 0);
                        setInputValue(Number(0));
                      }}
                      //   className={cn(
                      //     "rounded-[10px] border-none p-3 capitalize outline-none max-md:text-xs",
                      //     inputValue === Number(userWalletBalance)
                      //       ? "bg-gradient text-trinitypad-light-blue max-md:px-2 max-md:py-1"
                      //       : "bg-transparent max-md:p-1",
                      //   )}
                    >
                      <span className="text-sm max-md:text-xs">MAX</span>
                    </button>
                  </div>
                </div>
                {/* <PrivyPrimaryBtn
                  loading={stakeSubmitMutation?.isPending}
                  onClick={() => {
                    stakeSubmitMutation?.mutate({ amount: inputValue });
                  }}
                  className={cn(
                    "mt-7 w-full",
                    !user?.wallet?.address && "cursor-not-allowed",
                  )}
                > */}
                {/* {stakeSubmitMutation?.isPending && <Spinner />} */}
                <p>Stake Amount</p>
                {/* </PrivyPrimaryBtn> */}
              </div>
            </div>
          </>
        )}
        {/* {activeBtn === 1 && ( */}
        {/* <div className="mt-4 flex w-full flex-col items-center justify-center gap-2">  */}
        {/* {unlockStakingQuery?.data?.map((unlock, index) => (
                <div
                  key={index}
                  className="my-2 border-2 border-trinitypad-light-blue"
                >
                  <div className="flex w-full flex-row justify-between">
                    <div>
                      <div>Amount Staked :{unlock?.amount?.toString()}</div>
                      <div>
                        Block Number:
                        {unlock?.blockNumber?.toString()}
                      </div>
                      <div>
                        Date Staked:
                        {new Date(
                          Number(unlock?.timestamp) * 1000,
                        ).toDateString()}
                      </div>
                      <div>Rewards Accumulated: {unlock?.reward}</div>
                    </div>
                    <div>
                      <button
                        className="rounded-xl bg-blue-400 p-2 text-xl font-extrabold"
                        onClick={() =>
                          unstakeMutation?.mutate({ index: index })
                        }
                      >
                        Unstake
                      </button>
                    </div>
                  </div>
                </div>
              ))} */}
        {/* {(userStakesData?.data?.length === 0 || !userStakesData?.data) && ( */}
        <div className="pt-8 text-center">No Stakes to Unlock.</div>
        {/* )} */}
        {/* {userStakesData?.data?.map((unlock, index) => ( */}
        {/* <GradientBorderWrapper reverse key={index} className="px-8 py-4">  */}
        <div className="text-lg font-bold text-trinitypad-light-blue">
          Amount Staked
        </div>
        <span className="mr-2">
          <span className="text-trinitypad-light-blue">TNT:</span>
          {/* {ethers?.formatEther(unlock?.stakeAmount?.toString())} */}
        </span>
        {/* <span>
                    ({unlock?.stakeAmount?.toString()}{" "}
                    <span className="text-trinitypad-light-blue">WEI</span>)
                  </span> */}
        <div>
          <span className="text-lg font-bold text-trinitypad-light-blue">
            Block Number:{" "}
          </span>
          {/* {unlock?.blockNumber?.toString()} */}
        </div>
        <div>
          <span className="text-lg font-bold text-trinitypad-light-blue">
            Date Staked:{" "}
          </span>
          {/* {new Date(
                    Number(unlock?.unixTimestamp) * 1000,
                  ).toLocaleString()} */}
        </div>
        <div>
          <div className="text-lg font-bold text-trinitypad-light-blue">
            Rewards Accumulated:
          </div>
          {/* {unlock?.reward?.toString()} */}
        </div>
        {/* <span className="mr-2">
                        <span className="text-trinitypad-light-blue">ETH:</span>
                        {ethers?.formatEther(unlock?.reward?.toString())}
                      </span> */}
        <span>
          {/* {unlock?.reward?.toString()}{" "} */}
          <span className="text-trinitypad-light-blue">WEI</span>
        </span>
        <div className="w-full p-2">
          {/* <OutlineGradientBtn
                    active
                    className="size-full font-extrabold"
                    onClick={() => unstakeMutation?.mutate({ index: index })}
                  > */}
          Unstake
          {/* </OutlineGradientBtn> */}
        </div>
      </GradientBorderWrapper>
      {/* ))}  */}
      {/* </div> */}
      {/* )} */}
      {/* </GradientBorderWrapper>  */}
    </div>
  );
}

export default function RewardStationComp() {
  // const { data: stakingData } = useGetTotalStakeDetailsFromApi();

  const rewardData = [
    {
      logo: "/assets/staking/tokens.svg",
      title: "Total $TNT locked",
      // value: `${stakingData?.total ? formatNumber(stakingData?.total?.toLocaleString()) : "--"}`,
      value: "50.60 Million",
    },
    {
      logo: "/assets/staking/participants.svg",
      title: "Total Participants",
      // value: `${stakingData?.participants ? formatNumber(stakingData?.participants?.toString()) : "--"}`,
      value: "20,586",
    },
    {
      logo: "/assets/staking/reward-allocated.svg",
      title: "Total Rewards Allocated",
      // value: `${stakingData?.rewards ? formatNumber(stakingData?.rewards?.toLocaleString()) : "--"}`,
      value: "1 Million $TNT",
    },
    {
      logo: "/assets/staking/current-apy.svg",
      title: "Current APY",
      value: "108.7%",
    },
  ];
  return (
    <section
      id="reward-station"
      className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-5 bg-[url('/assets/common-bg/bg-with-lines.svg')] bg-cover bg-no-repeat py-20 max-md:min-h-[65vh] max-md:px-4"
    >
      <div className="flex w-full items-start justify-between gap-10 px-[4%] pt-7 max-lg:flex-wrap">
        <div className="flex w-1/2 flex-col items-center justify-start gap-5 max-lg:w-full">
          <h2 className="p-4">
            TrinityPad <span className="text-blue-gradient">Reward</span>{" "}
            Station
          </h2>
          <p className="text-center text-trinitypad-gray">
            Lock $TNT & Enjoy Exclusive Token Rewards!
          </p>
          <div className="w-full md:hidden">
            <LockingBox />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-5 max-md:pb-14">
            {rewardData.map((val) => (
              <TileCard key={val.title} val={val} />
            ))}
          </div>
        </div>
        <div className="w-full max-md:hidden lg:w-1/2">
          <LockingBox />
        </div>
      </div>
    </section>
  );
}
