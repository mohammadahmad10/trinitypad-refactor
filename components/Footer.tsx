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
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        {/* Desktop Footer */}
        <div className="hidden md:flex justify-between items-start">
          <div className="flex-shrink-0 mr-12">
            <Image
              src="/assets/logo.svg"
              alt="TrinityPad Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div className="p-5">Stay ahead of the curve.</div>
          </div>
          <div className="flex flex-row gap-20">
            {footerLinks.map((category) => (
              <div key={category.title} className="flex flex-col space-y-4">
                <h3 className="font-semibold text-lg">{category.title}</h3>
                <ul className="space-y-2">
                  {category.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.link} className="hover:underline">
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
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/logo.svg"
              alt="TrinityPad Logo"
              width={100}
              height={32}
              className="h-10 w-auto dark:invert"
            />
          </div>
          <div className="text-center mb-4">Stay ahead of the curve.</div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            id="mobile-footer-menu"
          >
            {footerLinks.map((category, index) => (
              <AccordionItem value={`item-${index}`} key={category.title}>
                <AccordionTrigger>{category.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 py-2">
                    {category.links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.link} className="hover:underline">
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
