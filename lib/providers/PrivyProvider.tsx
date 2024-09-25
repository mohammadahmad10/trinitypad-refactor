"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import { base, mainnet, bsc } from "viem/chains";

export default function PrivyProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID!;
  return (
    <PrivyProvider
      appId={appId}
      config={{
        defaultChain: bsc,
        supportedChains: [mainnet, bsc, base],
        appearance: {
          theme: "dark",
          accentColor: "#00F4FF",
          logo: "/assets/logo.svg",
          walletList: ["metamask", "rainbow", "wallet_connect"],
        },

        loginMethods: ["wallet"],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
