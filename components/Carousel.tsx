// "use client";
// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import PrimaryBtn, { PrivyPrimaryBtn } from "./ui/buttons/primary-btn";
// import { useGetAirdropCarouselItems } from "@/firebase/firestore/queries/airdrop-queries";
// import { GradientBorderWrapper } from "./ui/gradient-border-wrapper";

// // lg:h-[315px] max-lg:h-[243.5px]

// export default function CarouselComp() {
//   const { data, isLoading, isError, isFetched } = useGetAirdropCarouselItems();
//   return (
//     <>
//       <GradientBorderWrapper
//         wrapperClassName="size-full max-w-4xl mx-auto  rounded-3xl"
//         className="size-full overflow-clip rounded-3xl"
//       >
//         {/* <section className="w-full px-4 md:px-[9%]"> */}
//         {isFetched && (
//           <Carousel
//             showStatus={false}
//             autoPlay={true}
//             infiniteLoop={true}
//             showThumbs={false}
//             className="z-10 h-auto max-md:h-[150px]"
//           >
//             {data?.map((item, index) => (
//               <div
//                 key={index}
//                 className="z-0 flex min-h-[200px] w-full flex-col items-start justify-center gap-6 overflow-hidden bg-cover bg-center bg-no-repeat px-14 py-5 max-md:h-[148.5px] max-md:flex-row max-md:items-center max-md:justify-between max-md:gap-3 max-md:px-10"
//                 style={{
//                   backgroundImage: item?.image
//                     ? `url(${item?.image})`
//                     : 'url("/assets/carousel/slide-1.svg")',
//                   // backgroundSize: "cover",
//                 }}
//                 onClick={() => {
//                   if (item?.cta) {
//                     window.open(item.cta, "_blank");
//                   }
//                 }}
//               >
//                 <div className="flex max-w-[300px] flex-col gap-3">
//                   <h1 className="w-fit text-start text-[2rem] font-[700] leading-[50px] max-md:text-[16px] max-md:leading-[24px]">
//                     {item?.title}
//                   </h1>
//                   {/* <PrimaryBtn
//                     onClick={() => {
//                       if (item?.cta) {
//                         window.open(item.cta, "_blank");
//                       }
//                     }}
//                     className="max-md:w-[120px] max-md:px-2 max-md:py-1 max-md:text-[12px] md:w-[200px]"
//                   >
//                     <div>{item?.buttonText}</div>
//                   </PrimaryBtn> */}
//                 </div>
//               </div>
//             ))}
//           </Carousel>
//         )}
//         {/* </section> */}
//       </GradientBorderWrapper>
//     </>
//   );
// }
