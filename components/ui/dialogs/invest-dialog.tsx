// /* eslint-disable @next/next/no-img-element */
// "use client";
// import React, { useEffect, useState } from "react";
// import { usePrivy, useWallets } from "@privy-io/react-auth";
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { PrimaryLabeledInput } from "../inputs/inputs-with-labels";
// import { ethers } from "ethers";
// import { ContractStatesContext } from "@/context/contracts";
// import PrimaryBtn from "../buttons/primary-btn";
// import { addCampaignData } from "@/firebase/firestore/campaign";
// import * as DialogPrimitive from "@radix-ui/react-dialog";
// import { X, Info } from "lucide-react";
// import { useMutation } from "@tanstack/react-query";
// import { CampaignDetails } from "@/interface/types/ido-types";
// import dayjs from "dayjs";
// import {
//   useGetCampaignsFromContract,
//   useGetCampaignsFromFirebase,
//   useSubmitCampaignToFirebase,
// } from "@/firebase/firestore/queries/campaign-queries";
// import { addDoc, collection } from "firebase/firestore";
// import { db, storage } from "@/firebase/config";
// import { useNotify } from "../toast/notify";
// import { SpinnerBtn } from "../spinner/spinner-btn";
// import Image from "next/image";
// import generateRandomString from "@/lib/generateRandomString";
// import { ref, uploadBytes } from "firebase/storage";
// import { CHAIN_DETAILS, getChainDetailsByChainName } from "@/lib/constants";
// import { Tooltip } from "@mui/material";
// import { GradientBorderWrapper } from "../gradient-border-wrapper";

// export function InvestDialog({
//   children,
//   open,
//   setOpen,
// }: {
//   children: React.ReactNode;
//   open: boolean;
//   setOpen: (value: boolean) => void;
// }) {
//   const notify = useNotify();
//   const { wallets } = useWallets();
//   const { trinityFactoryContract, activeAccount, setActiveAccount, chainType } =
//     ContractStatesContext();
//   const [projectName, setProjectName] = useState("");
//   const [tokenName, setTokenName] = useState("");
//   const [tokenSymbol, setTokenSymbol] = useState("");
//   const [projectDescription, setProjectDescription] = useState("");
//   const [raiseGoal, setRaiseGoal] = useState("");
//   const [raiseCurrency, setRaiseCurrency] = useState("USDT");
//   const [allowPullInvestment, setAllowPullInvestment] = useState(false);
//   const [supportingChains, setSupportingChains] = useState({
//     ethereum: true,
//     bsc: true,
//     base: true,
//   });
//   const [campaignDuration, setCampaignDuration] = useState<string>(
//     dayjs().add(2, "M")?.format("YYYY-MM-DDTHH:mm"),
//   );
//   const [investorsCliff, setInvestorsCliff] = useState("");
//   const [investorsLinearUnlock, setInvestorsLinearUnlock] = useState("");
//   const [circulatingSupply, setCirculatingSupply] = useState("");
//   const [vestedSupply, setVestedSupply] = useState("");
//   const [presaleRate, setPresaleRate] = useState("");
//   const [initialSupplyETH, setInitialSupplyETH] = useState("");
//   const [initialSupplyBase, setInitialSupplyBase] = useState("");
//   const [initialSupplyBNB, setInitialSupplyBNB] = useState("");
//   const [show, setShow] = useState<Boolean>(false);
//   const [selectedBannerPhoto, setSelectedBannerPhoto] = useState<
//     File | undefined
//   >(undefined);
//   const [selectedProjectLogo, setSelectedProjectLogo] = useState<
//     File | undefined
//   >(undefined);
//   const resetForm = () => {
//     setProjectName("");
//     setTokenName("");
//     setTokenSymbol("");
//     setProjectDescription("");
//     setRaiseGoal("");
//     setRaiseCurrency("");
//     setAllowPullInvestment(false);
//     setSupportingChains({
//       ethereum: true,
//       bsc: true,
//       base: true,
//     });
//     setCampaignDuration("");
//     setInvestorsCliff("");
//     setInvestorsLinearUnlock("");
//     setCirculatingSupply("");
//     setVestedSupply("");
//     setPresaleRate("");
//     setInitialSupplyETH("");
//     setInitialSupplyBase("");
//     setInitialSupplyBNB("");
//     setSelectedBannerPhoto(undefined);
//     setSelectedProjectLogo(undefined);
//     setShow(false);
//   };
//   const { mutateAsync: submitDataToFirebase } = useSubmitCampaignToFirebase();
//   const { refetch: refetchCampaigns, data: firebaseCampaignsData } =
//     useGetCampaignsFromFirebase();
//   const { refetch: refetchContractCampaigns, data: contractCampaignsData } =
//     useGetCampaignsFromContract();

//   // const dropdownOptions = [
//   //   {
//   //     title: "USDT",
//   //     value: "USDT",
//   //   },
//   //   {
//   //     title: "ETH",
//   //     value: "ETH",
//   //   },
//   //   {
//   //     title: "BNB",
//   //     value: "BNB",
//   //   },
//   // ];
//   function dynamicDropDownOptions() {
//     const options = [];
//     if (supportingChains?.ethereum) {
//       options.push({
//         title: "ETH",
//         value: "ETH",
//       });
//     }
//     if (supportingChains?.base) {
//       options.push({
//         title: "USDT",
//         value: "USDT",
//       });
//     }
//     if (supportingChains?.bsc) {
//       options.push({
//         title: "BNB",
//         value: "BNB",
//       });
//     }
//     return options;
//   }

//   const {
//     mutate: startCampaign,
//     isPending,
//     isError,
//     error,
//   } = useMutation({
//     mutationFn: async () => {
//       const currentWalletAddress = wallets?.at(0)?.address;
//       if (chainType === "unknown") {
//         throw Error("Please connect your wallet to a supported chain.");
//       }
//       if (!currentWalletAddress) {
//         throw new Error(
//           "Wallet is not connected. Please check if you are signed in to your Wallet.",
//         );
//       }
//       // checks to avoid projects and token with duplicate names
//       if (
//         firebaseCampaignsData &&
//         firebaseCampaignsData?.filter((i) => i.projectName === projectName)
//           ?.length !== 0
//       ) {
//         throw new Error("Project name is already taken");
//       }
//       if (
//         contractCampaignsData &&
//         contractCampaignsData?.filter((i) => i.projectName === projectName)
//           ?.length !== 0
//       ) {
//         throw new Error("Project name is already taken in contract");
//       }

//       if (
//         firebaseCampaignsData &&
//         firebaseCampaignsData?.filter((i) => i.tokenName === tokenName)
//           ?.length !== 0
//       ) {
//         throw new Error("Token name is already taken");
//       }
//       if (
//         contractCampaignsData &&
//         contractCampaignsData?.filter((i) => i.tokenName === tokenName)
//           ?.length !== 0
//       ) {
//         throw new Error("Token name is already taken in contract");
//       }

//       if (
//         firebaseCampaignsData &&
//         firebaseCampaignsData?.filter((i) => i.tokenSymbol === tokenSymbol)
//           ?.length !== 0
//       ) {
//         throw new Error("Token Symbol is already taken");
//       }
//       if (
//         contractCampaignsData &&
//         contractCampaignsData?.filter((i) => i.tokenSymbol === tokenSymbol)
//           ?.length !== 0
//       ) {
//         throw new Error("Token Symbol is already taken in contract");
//       }

//       const areAllChainsFalse = Object.values(supportingChains).every(
//         (chain) => chain === false,
//       );
//       if (areAllChainsFalse) {
//         throw new Error("At least one chain must be selected");
//       }
//       //! Conditional "Required" text
//       if (
//         projectName === "" ||
//         tokenName === "" ||
//         tokenSymbol === "" ||
//         projectDescription === "" ||
//         raiseGoal === "" ||
//         raiseCurrency === "" ||
//         supportingChains === undefined ||
//         // @ts-ignore - ignored because the fields are string values and they don't overlap
//         supportingChains === "" ||
//         supportingChains === null ||
//         campaignDuration === "" ||
//         campaignDuration === null ||
//         investorsCliff === "" ||
//         investorsLinearUnlock === "" ||
//         initialSupplyETH === "" ||
//         initialSupplyBase === "" ||
//         initialSupplyBNB === "" ||
//         vestedSupply === "" ||
//         circulatingSupply === "" ||
//         presaleRate === ""
//       ) {
//         setShow(true);
//       }
//       //! Should not be empty & type checks
//       if (projectName === "") {
//         throw new Error("Project name is required");
//       } else if (tokenName === "") {
//         throw new Error("Token name is required");
//       } else if (tokenSymbol === "") {
//         throw new Error("Token symbol is required");
//       } else if (projectDescription === "") {
//         throw new Error("Project description is required");
//       } else if (raiseGoal === "") {
//         throw new Error("Raise Goal is required");
//       } else if (raiseCurrency === "") {
//         throw new Error("Raising Currency is required");
//       } else if (areAllChainsFalse) {
//         throw new Error("At least one chain must be selected"); // Pull Invest optional - skipped
//       } else if (
//         campaignDuration === "" ||
//         campaignDuration === null ||
//         campaignDuration === undefined
//       ) {
//         throw new Error("Campaign Duration is required");
//       } else if (investorsCliff === "") {
//         throw new Error("Investors Cliff is required");
//       } else if (investorsLinearUnlock === "") {
//         throw new Error("Investors Linear Unlock is required");
//       } else if (supportingChains.ethereum && initialSupplyETH === "") {
//         // if selected then check
//         throw new Error("Initial ETH is required");
//       } else if (supportingChains.base && initialSupplyBase === "") {
//         // if selected then check
//         throw new Error("Initial Base is required");
//       } else if (supportingChains.bsc && initialSupplyBNB === "") {
//         // if selected then check
//         throw new Error("Initial BNB is required");
//       } else if (vestedSupply === "") {
//         throw new Error("Total supply is required");
//       } else if (circulatingSupply === "") {
//         throw new Error("Circulating Supply is required");
//       } else if (presaleRate === "") {
//         throw new Error("presale Rate is required");
//       }
//       const campaignId = 1;
//       const myEvmIds = [];
//       const myLzIds = [];
//       const myLzEndPoints = [];
//       const initialSupply = [];
//       if (supportingChains.ethereum) {
//         // eth to sepolia
//         // myEvmIds.push(1); ETH
//         // myLzIds.push(30101); ETH
//         // myLzEndPoints.push("0x1a44076050125825900e736c501f859c50fE728c"); ETH
//         // myEvmIds.push(80002); //Amoy
//         // myLzIds.push(40267); //Amoy
//         // myLzEndPoints.push("0x6EDCE65403992e310A62460808c4b910D972f10f"); //Amoy
//         // initialSupply.push(ethers.parseEther(initialSupplyETH.toString()));
//         myEvmIds.push(CHAIN_DETAILS?.sepolia?.chainId); //Amoy
//         myLzIds.push(CHAIN_DETAILS?.sepolia?.lzId); //Amoy
//         myLzEndPoints.push(CHAIN_DETAILS?.sepolia?.lzEndpoint); //Amoy
//         initialSupply.push(ethers.parseEther(initialSupplyETH.toString()));
//       }
//       if (supportingChains.base) {
//         //Base
//         // myEvmIds.push(8453);
//         // myLzIds.push(30184);
//         // myLzEndPoints.push("0x1a44076050125825900e736c501f859c50fE728c");
//         //Sepolia
//         myEvmIds.push(CHAIN_DETAILS?.amoy?.chainId);
//         myLzIds.push(CHAIN_DETAILS?.amoy?.lzId);
//         myLzEndPoints.push(CHAIN_DETAILS?.amoy?.lzEndpoint);
//         initialSupply.push(ethers.parseEther(initialSupplyBase.toString()));
//       }
//       if (supportingChains.bsc) {
//         //BSC
//         // myEvmIds.push(56);
//         // myLzIds.push(30102);
//         // myLzEndPoints.push("0x1a44076050125825900e736c501f859c50fE728c");
//         //Sepolia
//         //Sepolia
//         myEvmIds.push(CHAIN_DETAILS?.bsc?.chainId);
//         myLzIds.push(CHAIN_DETAILS?.bsc?.lzId);
//         myLzEndPoints.push(CHAIN_DETAILS?.bsc?.lzEndpoint);
//         initialSupply.push(ethers.parseEther(initialSupplyBNB.toString()));
//       }
//       // for (let i = myEvmIds.length; i < 5; i++) {
//       //   myEvmIds.push(0);
//       // }
//       // for (let i = myLzIds.length; i < 5; i++) {
//       //   myLzIds.push(0);
//       // }
//       // for (let i = myLzEndPoints.length; i < 5; i++) {
//       //   myLzEndPoints.push(ethers.ZeroAddress);
//       // }
//       // for (let i = initialSupply.length; i < 5; i++) {
//       //   initialSupply.push(0);
//       // }
//       // evm of polygon amoy is 137
//       //polygon lzid is
//       const campaign: CampaignDetails = {
//         allowPullingInvestments: allowPullInvestment,
//         status: 0,
//         presaleRate: presaleRate,
//         cliffDays: Number(investorsCliff),
//         linearUnlockDays: Number(investorsLinearUnlock),
//         evmID: myEvmIds,
//         lzID: myLzIds,
//         initialSupply: initialSupply,
//         lzEndpoint: myLzEndPoints,
//         circulatingSupply: ethers.parseEther(circulatingSupply.toString()),
//         vestedSupply: ethers.parseEther(vestedSupply.toString()),
//         durationSeconds: dayjs(campaignDuration).unix()!,
//         raiseGoal: Number(raiseGoal),
//         projectName: projectName,
//         tokenName: tokenName,
//         tokenSymbol: tokenSymbol,
//         // owner: activeAccount?.address!,
//         owner: currentWalletAddress,
//         launchpad: ethers.ZeroAddress,
//         raisingCurrency: getChainDetailsByChainName(chainType)
//           ?.raisingCurrency as string,
//         // chainType === "sepolia"
//         //   ? "0x1B60e616aDbDF2d2769B5A8ED5666E7499E680d3"
//         //   : "0x07CCFeF5830F718d4CcBd0A02aad7EAe10cAef42",
//       };

//       const txn = await trinityFactoryContract?.submitCampaign(campaign);
//       await txn.wait(); // Wait for transaction to be mined
//       const lengthOfCampaign = await trinityFactoryContract?.campaignsLength();

//       // const campaignRes = await trinityFactoryContract.campaigns(campaignId);
//       // await campaignRes.wait(); // Wait for transaction to be mined
//       // await addCampaignData({ ...campaign, campaignId }, wallets[0].address);
//       // Fetch campaign details after transaction (optional)
//       // const campaignRes = await trinityFactoryContract.campaigns(campaignId);

//       let details: Partial<CampaignDetails> = {
//         description: projectDescription || "",

//         allowPullingInvestments: allowPullInvestment || false,
//         campaignId: Number(lengthOfCampaign) - 1,
//         status: 0,
//         presaleRate: presaleRate.toString() || 0,
//         cliffDays: Number(investorsCliff) || 0,
//         linearUnlockDays: Number(investorsLinearUnlock) || 0,

//         // initialSupply: initialSupply?.map((i) => i.toString()) || [],
//         circulatingSupply: circulatingSupply.toString() || 0,
//         vestedSupply: vestedSupply.toString() || 0,
//         durationSeconds:
//           dayjs(campaignDuration).unix() || dayjs()?.add(2, "M")?.unix(),
//         raiseGoal: Number(raiseGoal) || 0,
//         projectName: projectName || "",
//         tokenName: tokenName || "",
//         tokenSymbol: tokenSymbol || "",
//         // owner: activeAccount?.address || "",
//         owner: currentWalletAddress,
//         launchpad: ethers.ZeroAddress,
//         raisingCurrency: getChainDetailsByChainName(chainType)?.raisingCurrency,
//         // chainType === "sepolia"
//         //   ? "0x1B60e616aDbDF2d2769B5A8ED5666E7499E680d3"
//         //   : "0x07CCFeF5830F718d4CcBd0A02aad7EAe10cAef42",
//         createdAt: dayjs()?.unix(),
//         approved: false,
//       };

//       if (selectedBannerPhoto) {
//         const bannerId = generateRandomString(8);
//         await uploadBytes(ref(storage, bannerId), selectedBannerPhoto);
//         details = { ...details, bg: bannerId };
//       }

//       if (selectedProjectLogo) {
//         const projectId = generateRandomString(8);
//         await uploadBytes(ref(storage, projectId), selectedProjectLogo);
//         details = { ...details, logo: projectId };
//       }

//       await addDoc(collection(db, "campaign"), details);
//     },
//     onSuccess: () => {
//       refetchCampaigns();
//       refetchContractCampaigns();
//       notify({
//         type: "success",
//         title:
//           "IDO successfully submitted. Please wait for approval from Admin.",
//       });
//       setOpen(false);
//       resetForm();
//     },
//     onError: () => {
//       notify({ type: "error", title: "error submitting IDO." });
//     },
//   });

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger>{children}</DialogTrigger>
//       <DialogContent className="custom-scroll m-0 mx-auto max-h-[75vh] max-w-2xl overflow-y-scroll rounded-xl border-0 bg-primary p-0">
//         <GradientBorderWrapper className="p-4">
//           <DialogTitle className="hidden">Create An IDO</DialogTitle>
//           <DialogPrimitive.Close
//             onClick={() => {
//               setOpen(false);
//             }}
//             className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
//           >
//             <X className="h-4 w-4" />
//             <span className="sr-only">Close</span>
//           </DialogPrimitive.Close>
//           <div className="flex w-full flex-col gap-5 p-1">
//             <div className="flex w-full items-end gap-3 max-md:flex-col">
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Project Name"
//                   placeholder="Project name"
//                   value={projectName}
//                   setValue={setProjectName}
//                   type="input"
//                 />
//                 <sup className="mt-4 text-right text-gray-500">
//                   {show && projectName === "" ? "Required" : ""}
//                 </sup>
//               </div>
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Token Name"
//                   placeholder="Token name"
//                   value={tokenName}
//                   setValue={setTokenName}
//                   type="input"
//                 />
//                 <sup className="mt-4 text-right text-gray-500">
//                   {show && tokenName === "" ? "Required" : ""}
//                 </sup>
//               </div>
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Token Symbol"
//                   placeholder="Token symbol"
//                   value={tokenSymbol}
//                   setValue={setTokenSymbol}
//                   type="input"
//                 />
//                 <sup className="mt-4 text-right text-gray-500">
//                   {show && tokenSymbol === "" ? "Required" : ""}
//                 </sup>
//               </div>
//             </div>
//             <div className="flex w-full flex-col">
//               <PrimaryLabeledInput
//                 label="Project Description"
//                 placeholder="Project description"
//                 value={projectDescription}
//                 setValue={setProjectDescription}
//                 type="textarea"
//               />
//               <sup className="mt-4 text-right text-gray-500">
//                 {show && projectDescription === "" ? "Required" : ""}
//               </sup>
//             </div>
//             <div className="flex w-full items-start justify-start gap-3 max-md:flex-col">
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Raise Goal"
//                   placeholder="Raise goal Amount (WEI)"
//                   value={raiseGoal}
//                   setValue={(val: string) => {
//                     const res = val?.replaceAll(/\D/g, "");
//                     if (res.length > 30) {
//                       alert("Max Limit is 30 characters");
//                     } else {
//                       setRaiseGoal(res);
//                     }
//                   }}
//                   type="input"
//                 />
//                 <sup className="mt-4 flex items-center justify-start gap-2 text-gray-500">
//                   <Tooltip title="The total amount of funds the campaign aims to raise during its funding period.">
//                     <Info size={14} />
//                   </Tooltip>
//                   <span>
//                     {raiseGoal.length > 30
//                       ? "Maximum limit 30"
//                       : `${raiseGoal.length}/30`}
//                   </span>
//                   <span>{show && raiseGoal === "" ? "Required" : ""}</span>
//                 </sup>
//               </div>
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Raising Currency"
//                   placeholder="Raising Currency"
//                   value={raiseCurrency}
//                   setValue={(val) => {
//                     setRaiseCurrency(val);
//                   }}
//                   type="select"
//                   menu={dynamicDropDownOptions()}
//                 />
//                 <sup className="mt-4 flex justify-between text-gray-500">
//                   <span>{show && raiseCurrency === "" ? "Required" : ""}</span>
//                 </sup>
//               </div>
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Allow Pulling Investments"
//                   placeholder="Allow"
//                   value={allowPullInvestment}
//                   setValue={setAllowPullInvestment}
//                   type="radio"
//                 />
//                 <sup
//                   className={`mt-4 ${raiseGoal.length > 30 ? "text-transparent" : "text-transparent"}`}
//                 >
//                   {" 2"}
//                 </sup>
//               </div>
//             </div>
//             <div>
//               <PrimaryLabeledInput
//                 label="Supported Chains"
//                 placeholder="Allow"
//                 value={supportingChains}
//                 setValue={(val) => {
//                   if (
//                     (val?.ethereum === false && val?.bsc === false) ||
//                     (val?.ethereum === false && val?.base === false) ||
//                     (val?.bsc === false && val?.base === false)
//                   ) {
//                     alert("at least 2 chains must be supported.");
//                     return;
//                   } else {
//                     setSupportingChains(val);
//                   }
//                 }}
//                 type="chain"
//               />
//               <sup
//                 className={`mt-4 flex justify-end ${!supportingChains.base && !supportingChains.bsc && !supportingChains.ethereum ? "text-gray-500" : "text-transparent"}`}
//               >
//                 {show &&
//                 !supportingChains.base &&
//                 !supportingChains.bsc &&
//                 !supportingChains.ethereum
//                   ? "Required"
//                   : ""}
//               </sup>
//             </div>
//             <div className="flex w-full items-start justify-center gap-3 max-md:flex-col max-md:items-start">
//               <div className="flex w-auto flex-col">
//                 <div className="flex w-full flex-col">
//                   <div className="mb-2 text-sm text-trinitypad-light-blue">
//                     Campaign Duration
//                   </div>
//                   <input
//                     className="ms-1 w-full rounded-[10px] border-none bg-[#FFFFFF0D] p-3 text-[14px] font-[500] text-trinitypad-light-blue"
//                     type="datetime-local"
//                     value={campaignDuration}
//                     onChange={(e) => {
//                       if (e?.target?.value) {
//                         setCampaignDuration(e.target.value);
//                       }
//                     }}
//                     min={dayjs()?.format("YYYY-MM-DDTHH:mm")}
//                     max={dayjs().add(4, "year").format("YYYY-MM-DDTHH:mm")}
//                   />
//                 </div>
//                 <sup className="mt-4 text-right text-gray-500">
//                   {campaignDuration === "" ||
//                   campaignDuration === null ||
//                   campaignDuration === undefined
//                     ? show && "Required"
//                     : " "}
//                 </sup>
//               </div>
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Investors Cliff"
//                   placeholder="Investors Cliff (days)"
//                   value={investorsCliff}
//                   setValue={(val: string) => {
//                     const res = val?.replaceAll(/\D/g, "");
//                     if (res.length > 30) {
//                       alert("Max Limit is 30 characters");
//                     } else {
//                       setInvestorsCliff(res);
//                     }
//                   }}
//                   type="input"
//                 />
//                 <sup className="mt-4 flex items-center justify-start gap-2 text-gray-500">
//                   <Tooltip title="A specific period of days during which investors cannot withdraw or unlock their investments. After the cliff period, investors can start accessing their funds.">
//                     <Info size={14} />
//                   </Tooltip>
//                   <span>
//                     {investorsCliff.length > 30
//                       ? "Maximum limit 30"
//                       : `${investorsCliff.length}/30`}
//                   </span>
//                   <span>{show && investorsCliff === "" ? "Required" : ""}</span>
//                 </sup>
//               </div>
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Investors Linear Unlock"
//                   placeholder="Investors linear unlock (days)"
//                   value={investorsLinearUnlock}
//                   setValue={(val: string) => {
//                     const res = val?.replaceAll(/\D/g, "");
//                     if (res.length > 30) {
//                       alert("Max Limit is 30 characters");
//                     } else {
//                       setInvestorsLinearUnlock(res);
//                     }
//                   }}
//                   type="input"
//                 />
//                 <sup className="mt-4 flex items-center justify-start gap-2 text-gray-500">
//                   <Tooltip title="Refers to how the investment is unlocked over time after the cliff period. This means that after the cliff, investors can gradually access their funds in a linear fashion over a specified period.">
//                     <Info size={14} />
//                   </Tooltip>
//                   <span>
//                     {investorsLinearUnlock.length > 30
//                       ? "Maximum limit 30"
//                       : `${investorsLinearUnlock.length}/30`}
//                   </span>
//                   <span>
//                     {show && investorsLinearUnlock === "" ? "Required" : ""}
//                   </span>
//                 </sup>
//               </div>
//             </div>
//             {(supportingChains.ethereum ||
//               supportingChains.base ||
//               supportingChains.bsc) && (
//               <div className="flex w-full items-end gap-3 max-md:flex-col max-md:items-start">
//                 {supportingChains.ethereum && (
//                   <div className="flex w-full flex-col">
//                     <PrimaryLabeledInput
//                       label="Initial Ethereum Supply"
//                       placeholder="ETH Supply"
//                       value={initialSupplyETH}
//                       setValue={(val: string) => {
//                         const res = val?.replaceAll(/\D/g, "");
//                         if (res.length > 30) {
//                           alert("Max Limit is 30 characters");
//                         } else {
//                           setInitialSupplyETH(res);
//                         }
//                       }}
//                       type="input"
//                     />
//                     <sup className="mt-4 flex items-center justify-start gap-2 text-gray-500">
//                       <Tooltip title="These refer to the initial amounts of Ethereum that are allocated or made available at the start of the campaign.">
//                         <Info size={14} />
//                       </Tooltip>
//                       <span>
//                         {initialSupplyETH.length > 30
//                           ? "Maximum limit 30"
//                           : `${initialSupplyETH.length}/30`}
//                       </span>
//                       <span>
//                         {show && initialSupplyETH === "" ? "Required" : ""}
//                       </span>
//                     </sup>
//                   </div>
//                 )}
//                 {supportingChains.base && (
//                   <div className="flex w-full flex-col">
//                     <PrimaryLabeledInput
//                       label="Initial Base Supply"
//                       placeholder="Initial Eth Supply"
//                       value={initialSupplyBase}
//                       setValue={(val: string) => {
//                         const res = val?.replaceAll(/\D/g, "");
//                         if (res.length > 30) {
//                           alert("Max Limit is 30 characters");
//                         } else {
//                           setInitialSupplyBase(res);
//                         }
//                       }}
//                       type="input"
//                     />
//                     <sup className="mt-4 flex items-center justify-start gap-2 text-gray-500">
//                       <Tooltip title="These refer to the initial amounts of Base token that are allocated or made available at the start of the campaign.">
//                         <Info size={14} />
//                       </Tooltip>
//                       <span>
//                         {initialSupplyBase.length > 30
//                           ? "Maximum limit 30"
//                           : `${initialSupplyBase.length}/30`}
//                       </span>
//                       <span>
//                         {show && initialSupplyBase === "" ? "Required" : ""}
//                       </span>
//                     </sup>
//                   </div>
//                 )}
//                 {supportingChains.bsc && (
//                   <div className="flex w-full flex-col">
//                     <PrimaryLabeledInput
//                       label="Initial BNB Supply"
//                       placeholder="BNB Supply"
//                       value={initialSupplyBNB}
//                       setValue={(val: string) => {
//                         const res = val?.replaceAll(/\D/g, "");
//                         if (res.length > 30) {
//                           alert("Max Limit is 30 characters");
//                         } else {
//                           setInitialSupplyBNB(res);
//                         }
//                       }}
//                       type="input"
//                     />
//                     <sup className="mt-4 flex items-center justify-start gap-2 text-gray-500">
//                       <Tooltip title="These refer to the initial amounts of Binance Coin (BNB) that are allocated or made available at the start of the campaign.">
//                         <Info size={14} />
//                       </Tooltip>
//                       <span>
//                         {initialSupplyBNB.length > 30
//                           ? "Maximum limit 30"
//                           : `${initialSupplyBNB.length}/30`}
//                       </span>
//                       <span>
//                         {show && initialSupplyBNB === "" ? "Required" : ""}
//                       </span>
//                     </sup>
//                   </div>
//                 )}
//               </div>
//             )}
//             <div className="flex w-full items-end gap-3 max-md:flex-col max-md:items-start">
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Total supply"
//                   placeholder="total supply"
//                   value={vestedSupply}
//                   setValue={(val: string) => {
//                     const res = val?.replaceAll(/\D/g, "");
//                     if (res.length > 30) {
//                       alert("Max Limit is 30 characters");
//                     } else {
//                       setVestedSupply(res);
//                     }
//                   }}
//                   type="input"
//                 />
//                 <sup className="mt-4 flex items-center justify-start gap-2 text-gray-500">
//                   <Tooltip title="The maximum supply of tokens that will ever be created or available for the project.">
//                     <Info size={14} />
//                   </Tooltip>
//                   <span>
//                     {vestedSupply.length > 30
//                       ? "Maximum limit 30"
//                       : `${vestedSupply.length}/30`}
//                   </span>
//                   <span>{show && vestedSupply === "" ? "Required" : ""}</span>
//                 </sup>
//               </div>
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Circulating supply"
//                   placeholder="circulating supply"
//                   value={circulatingSupply}
//                   setValue={(val: string) => {
//                     const res = val?.replaceAll(/\D/g, "");
//                     if (res.length > 30) {
//                       alert("Max Limit is 30 characters");
//                     } else {
//                       setCirculatingSupply(res);
//                     }
//                   }}
//                   type="input"
//                 />
//                 <sup className="mt-4 flex items-center justify-start gap-2 text-gray-500">
//                   <Tooltip title="The amount of tokens that are currently in circulation and available for trading or use within the market.">
//                     <Info size={14} />
//                   </Tooltip>
//                   <span>
//                     {circulatingSupply.length > 30
//                       ? "Maximum limit 30"
//                       : `${circulatingSupply.length}/30`}
//                   </span>
//                   <span>
//                     {show && circulatingSupply === "" ? "Required" : ""}
//                   </span>
//                 </sup>
//               </div>
//               <div className="flex w-full flex-col">
//                 <PrimaryLabeledInput
//                   label="Presale rate"
//                   placeholder="presale rate"
//                   value={presaleRate}
//                   setValue={(val: string) => {
//                     const res = val?.replaceAll(/\D/g, "");
//                     if (res.length > 30) {
//                       alert("Max Limit is 30 characters");
//                     } else {
//                       setPresaleRate(res);
//                     }
//                   }}
//                   type="input"
//                 />
//                 <sup className="mt-4 flex items-center justify-start gap-2 text-gray-500">
//                   <Tooltip title="The rate at which the campaign's tokens are sold during the presale phase, typically indicating how much of the campaign's token you will receive per unit of currency (e.g., ETH, BNB) invested.">
//                     <Info size={14} />
//                   </Tooltip>
//                   <span>
//                     {presaleRate.length > 30
//                       ? "Maximum limit 30"
//                       : `${presaleRate.length}/30`}
//                   </span>
//                   <span>{show && presaleRate === "" ? "Required" : ""}</span>
//                 </sup>
//               </div>
//             </div>
//             <div className="flex flex-col justify-between md:flex-row">
//               <div className="my-2 rounded-xl border border-trinitypad-light-blue p-1 md:w-[45%]">
//                 {selectedBannerPhoto && (
//                   <img
//                     src={URL.createObjectURL(selectedBannerPhoto)}
//                     alt="selected image"
//                     className="mx-auto mb-1 h-[128px] rounded-xl bg-cover bg-center"
//                   />
//                 )}
//                 <div>
//                   <input
//                     onChange={(e) => {
//                       if (e?.target?.files) {
//                         const filesArray = Array.from(e?.target?.files);
//                         setSelectedBannerPhoto(filesArray?.at(0));
//                       }
//                     }}
//                     type="file"
//                     accept="image/*"
//                     id="file-placeholder-cover"
//                     className="hidden"
//                   />
//                   <label
//                     htmlFor="file-placeholder-cover"
//                     className="inline-block w-full cursor-pointer rounded-xl border-none bg-background-gradient py-2 text-center text-white"
//                   >
//                     {selectedBannerPhoto ? "Replace" : "Upload"} Banner Photo
//                     <div className="text-[10px] font-extralight">
//                       Preferred size 828x556
//                     </div>
//                   </label>
//                 </div>
//               </div>
//               <div className="my-2 rounded-xl border border-trinitypad-light-blue p-1 md:w-[45%]">
//                 {selectedProjectLogo && (
//                   <img
//                     src={URL.createObjectURL(selectedProjectLogo)}
//                     alt="selected image"
//                     className="mx-auto mb-1 h-[128px] rounded-xl bg-cover bg-center"
//                   />
//                 )}
//                 <div>
//                   <input
//                     onChange={(e) => {
//                       if (e?.target?.files) {
//                         const filesArray = Array.from(e?.target?.files);
//                         setSelectedProjectLogo(filesArray?.at(0));
//                       }
//                     }}
//                     type="file"
//                     accept="image/*"
//                     id="file-placeholder-project"
//                     className="hidden"
//                   />
//                   <label
//                     htmlFor="file-placeholder-project"
//                     className="inline-block w-full cursor-pointer rounded-xl border-none bg-background-gradient py-2 text-center text-white"
//                   >
//                     {selectedProjectLogo ? "Replace" : "Upload"} Project Logo
//                     <div className="text-[10px] font-extralight">
//                       Preferred size 256x256
//                     </div>
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <PrimaryBtn
//               onClick={() => {
//                 startCampaign();
//               }}
//               className="mt-3"
//             >
//               <div>Submit</div>
//             </PrimaryBtn>
//             <div className="max-w-md">
//               {isPending && (
//                 <div className="flex flex-row gap-2">
//                   <SpinnerBtn />
//                   Loading...
//                 </div>
//               )}
//               {isError && (
//                 <div className="text-bold break-all border border-red-500 bg-red-300 p-2 text-black">
//                   Error Creating Campaign: {error?.message?.toString()}
//                 </div>
//               )}
//             </div>
//           </div>
//         </GradientBorderWrapper>
//       </DialogContent>
//     </Dialog>
//   );
// }
