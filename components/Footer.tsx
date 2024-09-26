import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const footerLinks = [
  {
    title: "Company",
    links: [
      { title: "About Us", link: "/about" },
      { title: "Team", link: "/about#team" },
      { title: "Partners", link: "/about#partners" },
      { title: "Media Kit", link: "/about#media" },
    ],
  },
  {
    title: "TrinityPad",
    links: [
      { title: "Airdrop", link: "/airdrop" },
      { title: "Presale", link: "/presale" },
      { title: "Staking", link: "/staking" },
      { title: "News", link: "/#news" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Twitter", link: "https://x.com/trinity_pad" },
      { title: "Telegram", link: "https://t.me/trinitypad" },
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/company/trinitypad",
      },
      { title: "Announcements Channel", link: "https://t.me/trinitypadann" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Desktop Footer */}
        <div className="hidden items-start justify-between md:flex">
          <div className="mr-12 flex-shrink-0">
            <Image
              src="/assets/logo.svg"
              alt="TrinityPad Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div className="p-4 text-sm text-trinitypad-gray">
              Stay ahead of the curve.
            </div>
          </div>
          <div className="flex flex-row gap-20">
            {footerLinks.map((category) => (
              <div key={category.title} className="flex flex-col space-y-4">
                <h3 className="text-start text-base font-medium">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.link}
                        className="text-sm text-trinitypad-gray hover:underline"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden">
          <div className="mb-6 flex justify-center">
            <Image
              src="/assets/logo.svg"
              alt="TrinityPad Logo"
              width={100}
              height={32}
              className="h-10 w-auto dark:invert"
            />
          </div>
          <div className="mb-4 text-center text-xs text-trinitypad-gray">
            Stay ahead of the curve.
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            id="mobile-footer-menu"
          >
            {footerLinks.map((category, index) => (
              <AccordionItem value={`item-${index}`} key={category.title}>
                <AccordionTrigger className="text-sm font-medium">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 py-2">
                    {category.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.link}
                          className="text-xs text-trinitypad-gray hover:underline"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </footer>
  );
}
