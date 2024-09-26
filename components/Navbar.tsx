"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LoginButton } from "./PrivyButtons";

const navbarLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "For Founders",
    link: "/ido",
  },
  {
    title: "For Backers",
    links: [
      {
        title: "Dashboard",
        link: "/dashboard",
      },
      { title: "$TNT Presale", link: "/presale" },
      { title: "IDO Listings", link: "/invest" },
    ],
  },
  {
    title: "Reward Station",
    links: [
      {
        title: "Airdrop",
        link: "/airdrop",
      },
      {
        title: "Staking",
        link: "/staking",
      },
    ],
  },
  { title: "About Us", link: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const toggleExpand = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  return (
    <nav className="bg-background shadow-md">
      <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex h-16 justify-between">
          <div className="flex">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                {/* <span className="text-2xl font-bold text-primary">Logo</span> */}
                <Image
                  src="/assets/logo.svg"
                  alt="TrinityPad Logo"
                  width={160}
                  height={30}
                  className="object-cover"
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  {navbarLinks.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.links ? (
                        <>
                          <NavigationMenuTrigger className="!relative text-sm text-trinitypad-gray hover:text-primary">
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="flex w-[400px] flex-col gap-3 p-4">
                              {item.links.map((subItem) => (
                                <li key={subItem.title}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href={subItem.link}
                                      className={cn(
                                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                        pathname === subItem.link &&
                                          "rounded-xl bg-active-gradient text-trinitypad-light-blue",
                                      )}
                                    >
                                      <div className="text-xs font-medium leading-none">
                                        {subItem.title}
                                        <Image
                                          src="/assets/icon.svg"
                                          alt=""
                                          className={cn(
                                            pathname === subItem.link
                                              ? "ml-2 inline w-4"
                                              : "hidden",
                                          )}
                                          width={20}
                                          height={14}
                                        />
                                      </div>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link href={item.link} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              "inline-flex items-center px-1 text-sm font-medium text-trinitypad-gray",
                              "transition-colors hover:text-primary",
                              pathname === item.link &&
                                "rounded-xl bg-active-gradient px-4 py-2 text-trinitypad-light-blue",
                            )}
                          >
                            {item.title}
                            <Image
                              src="/assets/icon.svg"
                              alt=""
                              className={cn(
                                pathname === item.link ? "ml-2 w-4" : "hidden",
                              )}
                              width={20}
                              height={14}
                            />
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {/* Desktop Login Button */}
          <div className="hidden lg:ml-6 lg:flex lg:items-center">
            {/* <Button>Login</Button> */}
            <LoginButton className="text-sm" />
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent hideClose side="top" className="h-auto w-full">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between px-4 pb-2 pt-4">
                    <Link href="/" onClick={toggleDrawer}>
                      {/* <span className="text-2xl font-bold text-primary">
                        Logo
                      </span> */}
                      <Image
                        src="/assets/logo.svg"
                        alt="TrinityPad Logo"
                        width={100}
                        height={32}
                        className="h-10 w-auto dark:invert"
                      />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={toggleDrawer}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <div className="space-y-1 overflow-y-auto px-2 pb-3 pt-2">
                    {navbarLinks.map((item) => (
                      <div key={item.title}>
                        {item.links ? (
                          <div className="space-y-1">
                            <button
                              onClick={() => toggleExpand(item.title)}
                              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-trinitypad-gray hover:text-primary"
                            >
                              {item.title}
                              {expandedItem === item.title ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </button>
                            {expandedItem === item.title && (
                              <div className="space-y-1 pl-4">
                                {item.links.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.link}
                                    className={cn(
                                      "block rounded-md px-3 py-2 text-sm font-medium text-trinitypad-gray hover:bg-primary/10 hover:text-primary",
                                      pathname === subItem.link &&
                                        "rounded-xl bg-active-gradient text-trinitypad-light-blue",
                                    )}
                                    onClick={toggleDrawer}
                                  >
                                    {subItem.title}
                                    <Image
                                      src="/assets/icon.svg"
                                      alt=""
                                      className={cn(
                                        pathname === subItem.link
                                          ? "ml-2 inline w-4"
                                          : "hidden",
                                      )}
                                      width={20}
                                      height={14}
                                    />
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.link}
                            className={cn(
                              "block rounded-md px-3 py-2 text-base font-medium text-trinitypad-gray hover:bg-primary/10 hover:text-primary",
                              pathname === item.link &&
                                "rounded-xl bg-active-gradient text-trinitypad-light-blue",
                            )}
                            onClick={toggleDrawer}
                          >
                            {item.title}
                            <Image
                              src="/assets/icon.svg"
                              alt=""
                              className={cn(
                                pathname === item.link
                                  ? "ml-2 inline w-4"
                                  : "hidden",
                              )}
                              width={20}
                              height={14}
                            />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto px-5 py-4">
                    {/* <Button className="w-full" onClick={toggleDrawer}>
                      Login
                    </Button> */}
                    <LoginButton className="w-full" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
