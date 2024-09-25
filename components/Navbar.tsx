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
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                {/* <span className="text-2xl font-bold text-primary">Logo</span> */}
                <Image
                  src="/assets/logo.svg"
                  alt="TrinityPad Logo"
                  width={100}
                  height={32}
                  className="h-10 w-auto dark:invert"
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  {navbarLinks.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.links ? (
                        <>
                          <NavigationMenuTrigger>
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.links.map((subItem) => (
                                <li key={subItem.title}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href={subItem.link}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div
                                        className={cn(
                                          "text-sm font-medium leading-none",
                                          pathname === subItem.link &&
                                            "bg-active-gradient"
                                        )}
                                      >
                                        {subItem.title}
                                        <Image
                                          src="/assets/icon.svg"
                                          alt=""
                                          className={cn(
                                            pathname === item.link
                                              ? "ml-2 w-4"
                                              : "hidden"
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
                              "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700",
                              "transition-colors hover:text-primary",
                              pathname === item.link &&
                                "bg-active-gradient p-2 rounded-xl text-trinitypad-light-blue"
                            )}
                          >
                            {item.title}
                            <Image
                              src="/assets/icon.svg"
                              alt=""
                              className={cn(
                                pathname === item.link ? "ml-2 w-4" : "hidden"
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
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button>Login</Button>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent hideClose side="top" className="w-full h-auto">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-4 pt-4 pb-2">
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
                  <div className="px-2 pt-2 pb-3 space-y-1 overflow-y-auto">
                    {navbarLinks.map((item) => (
                      <div key={item.title}>
                        {item.links ? (
                          <div className="space-y-1">
                            <button
                              onClick={() => toggleExpand(item.title)}
                              className="flex justify-between items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            >
                              {item.title}
                              {expandedItem === item.title ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </button>
                            {expandedItem === item.title && (
                              <div className="pl-4 space-y-1">
                                {item.links.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.link}
                                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                                    onClick={toggleDrawer}
                                  >
                                    {subItem.title}
                                    <Image
                                      src="/assets/icon.svg"
                                      alt=""
                                      className={cn(
                                        pathname === subItem.link
                                          ? "ml-2 w-4"
                                          : "hidden"
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
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={toggleDrawer}
                          >
                            {item.title}
                            <Image
                              src="/assets/icon.svg"
                              alt=""
                              className={cn(
                                pathname === item.link ? "ml-2 w-4" : "hidden"
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
                    <Button className="w-full" onClick={toggleDrawer}>
                      Login
                    </Button>
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
