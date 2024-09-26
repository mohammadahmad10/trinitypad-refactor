// "use client";
// // import { BtnInterface } from "@/interface/btn-interface";
// import { cn } from "@/lib/utils";
// import { usePrivy } from "@privy-io/react-auth";
// import React from "react";

// const InfoBtn = ({ onClick, loading, children, className }: BtnInterface) => {
//   return (
//     <button
//       disabled={loading}
//       onClick={onClick}
//       className={cn(
//         "bg-[#222430] rounded-[10px] px-5 py-2 text-[14px] text-white min-h-[30px] min-w-[100px] flex items-center justify-center hover:opacity-[0.7]",
//         className
//       )}
//     >
//       {children}
//     </button>
//   );
// };
// export const PrivyInfoBtn = ({
//   onClick,
//   loading,
//   children,
//   className,
// }: BtnInterface) => {
// //   const { ready, login, authenticated, user } = usePrivy();

//   return (
//     <button
//     //   disabled={loading || !ready}
//     //   onClick={authenticated ? onClick : login}
//       className={cn(
//         "flex min-h-[30px] min-w-[100px] items-center justify-center rounded-[10px] bg-[#222430] px-5 py-2 text-[14px] text-white hover:opacity-[0.7]",
//         className,
//       )}
//     >
//       {/* {!ready ? "loading..." : children} */}
//     </button>
//   );
// };

// export default InfoBtn;
