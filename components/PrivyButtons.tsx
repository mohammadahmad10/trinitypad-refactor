"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";

export function LoginButton({ className }: { className?: string }) {
  const { connectWallet } = usePrivy();
  return (
    <Button
      onClick={() => connectWallet()}
      className={cn(
        "gradient-trinity-border !rounded-xl text-lg text-white",
        className,
      )}
    >
      <Image
        src="/assets/icons/wallet.svg"
        alt="Wallet"
        className="mr-3 size-5 object-cover"
        width={20}
        height={20}
      />
      Connect Wallet
    </Button>
  );
}

export function LogoutButton({ className }: { className?: string }) {
  const { logout, user } = usePrivy();
  return (
    <div className={cn("flex flex-row gap-4", className)}>
      {user?.wallet && (
        <div>
          {user?.wallet?.address?.slice(0, 4)}...{" "}
          <span className="max-md:hidden">
            {user?.wallet?.address?.slice(-4)}
          </span>
        </div>
      )}
      <Button
        onClick={() => logout()}
        className="gradient-trinity-border !rounded-xl text-lg text-white"
      >
        <Image
          src="/assets/icons/wallet.svg"
          alt="Wallet"
          className="mr-3 size-5 object-cover"
          width={20}
          height={20}
        />
        Logout
      </Button>
    </div>
  );
}

export function PrivyAuthButton() {
  const { authenticated } = usePrivy();
  return <>{authenticated ? <LogoutButton /> : <LoginButton />}</>;
}