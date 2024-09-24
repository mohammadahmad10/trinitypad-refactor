"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const footerLinks = [
  { title: "Company", links: ["About", "Careers", "Press"] },
  { title: "Product", links: ["Features", "Pricing", "Integrations"] },
  { title: "Resources", links: ["Blog", "Help Center", "Guides"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        {/* Desktop Footer */}
        <div className="hidden md:flex justify-between items-start">
          <div className="flex-shrink-0 mr-12">
            <Image
              src="/Image.jpg"
              alt="Company Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          {footerLinks.map((category) => (
            <div key={category.title} className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden">
          <div className="flex justify-center mb-6">
            <Image
              src="/Image.jpg"
              alt="Company Logo"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </div>
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
                    {category.links.map((link) => (
                      <li key={link}>
                        <Link href="#" className="hover:underline">
                          {link}
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
      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
