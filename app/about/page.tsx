import { Metadata } from "next";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Eye,
  Crosshair,
  Globe,
  Send,
  MessageCircleWarning,
  LinkedinIcon,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Trinity Pad",
  description:
    "Trinity Pad connects investors with high-potential early-stage projects, emphasizing security, simplicity, and automation.",
  keywords:
    "trinity pad, trinitypad, ido, bnb, base, ethereum, layerzero, privy, synaps, ton, crypto, Trinity pad, Crypto Launchpad, solana, Solana Launchpad, BNB Launchpad, Ethereum Launchpad, TON Launchpad",
  applicationName: "Trinity Pad",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
      href: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
      href: "/android-chrome-512x512.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
      href: "/apple-touch-icon.png",
    },
  ],
  openGraph: {
    title: "About Us - Trinity Pad",
    description:
      "Trinity Pad connects investors with high-potential early-stage projects, emphasizing security, simplicity, and automation.",
    images: [
      {
        url: "https://www.trinitypad.com/assets/logo-icon.png",
        width: 1634,
        height: 1634,
        alt: "Trinity Pad - The AI Powered Launchpad",
      },
    ],
  },
};

export default function Page() {
  return (
    <section
      id="about-us"
      className="flex bg-[url('/assets/common-bg/bg-with-lines.svg')] bg-cover bg-no-repeat py-[10vh] max-md:min-h-[65vh] max-md:py-[5vh] md:min-h-[120vh]"
    >
      <div className="mx-auto flex w-full flex-col justify-center gap-10">
        <div className="flex min-h-[70vh] max-h-[1000px] justify-between max-lg:flex-col max-lg:gap-10 max-md:px-4 md:px-[4%] lg:w-full">
          <div className="flex flex-col justify-center gap-8 lg:w-1/2">
            <h1 className="text-center">
              TrinityPad: <br />
              Effortless Investing
              <br />
              <span className="text-blue-gradient">Advanced By AI</span>
            </h1>
            <p data-aos="fade-up" className="text-center">
              TrinityPad is a launchpad that allows investors to back the best
              early-stage companies with ease, focusing on security, simplicity,
              and automation at its core.
            </p>
          </div>
          <div className="flex justify-end max-lg:justify-center lg:w-1/2">
            <Image
              data-aos="fade-left"
              src="/assets/launchpad/hero/safe.svg"
              alt="safe"
              width={700}
              height={450}
              className="md:pe-3"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full flex-col gap-20 bg-[url('/assets/airdrop/hero-bg.svg')] bg-cover bg-no-repeat py-24 max-md:px-4 md:px-[15%]">
          <div className="flex w-full justify-start">
            <div
              className="flex flex-col gap-5 md:max-w-lg"
              data-aos="fade-right"
            >
              <h2 className="text-blue-gradient flex gap-5 pb-4 text-left align-middle max-md:mx-auto">
                OUR VISION <Eye size={36} color="#00CBFB" />
              </h2>
              <h3 className="md:text-start">
                Leading the Way in Web3 Innovation
              </h3>
              <p className="max-md:text-center">
                We envision a future where every entrepreneur can access the
                essential resources to thrive in the decentralized economy. By
                empowering innovators, we strive to lead the way in shaping the
                future of Web3, unlocking limitless potential and opportunities.
              </p>
            </div>
          </div>

          <div className="flex w-full justify-start lg:justify-end">
            <div
              className="flex flex-col gap-5 md:max-w-lg"
              data-aos="fade-left"
            >
              <h2 className="text-blue-gradient flex gap-5 pb-4 align-middle max-md:mx-auto">
                OUR MISSION <Crosshair size={36} color="#0096F4" />
              </h2>
              <h3 className="md:text-start">
                Transforming Web3 Entrepreneurship and Investing
              </h3>
              <p className="max-md:text-center">
                At Trinity Pad, our mission is to equip entrepreneurs with the
                essential tools and resources to launch, manage, and scale Web3
                businesses, driving groundbreaking innovation in the
                decentralized economy. We strive to build a holistic ecosystem
                that removes barriers and fuels the next wave of Web3
                innovation.
              </p>
            </div>
          </div>
        </div>

        <TrinityPadOverviewSection />
        <SocialMediaSection />
        <TeamMemberSection />
        <AboutCompanySection />
      </div>
    </section>
  );
}

function TrinityPadOverviewSection() {
  const PropertiesList = [
    {
      title: "EMPOWERING",
      description:
        "At TrinityPad, we believe that supporting early-stage innovation should be a seamless experience for investors. Our mission is to connect qualified investors with the most promising early-stage projects through a platform that prioritizes security, ease of use, and automation.",
    },

    {
      title: "SECURITY",
      description:
        "Guided by transparency, security, and efficiency, we use AI analytics, sentiment analysis, and automation to simplify investing. Trinity Pad delivers data-driven insights and secure, automated portfolio management, enabling investors to confidently support disruptive innovations without usual complexities.",
    },

    {
      title: "PIONEERS",
      description:
        "Our vision is to become the leading platform where visionary founders and forward-thinking investors unite to build the next wave of disruptive Web3 companies. We are dedicated to advancing Web3 excellence through innovation, collaboration, and sustainable growth.",
    },

    {
      title: "VISION",
      description:
        "While we take pride in the technology and processes behind Trinity Pad, our focus remains on making high-quality early-stage investments accessible, secure, and rewarding. We are dedicated to elevating the investment experience for our community with a seamless, automated approach.",
    },

    {
      title: "FOCUS",
      description:
        "Trinity Pad focuses on empowering investors to access early-stage Web3 projects through a secure and user-friendly platform. We leverage AI-driven analytics and automation to simplify investment, making high-quality opportunities accessible, secure, and rewarding for all investors.",
    },
  ];

  return (
    <div className="mx-auto my-20 w-11/12">
      <div className="flex items-start justify-center">
        <h2 className="text-blue-gradient mb-10 w-fit p-4">
          TrinityPad At A Glance
        </h2>
      </div>
      <div className="grid grid-cols-1 items-stretch justify-center gap-10 max-md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PropertiesList.map((i, index) => (
          <div key={index} data-aos="fade-up" className="flex w-full">
            <div className="gradient-shadow-2 h-full w-full rounded-[20px] bg-[#1D203580] p-5">
              <div className="flex flex-col gap-4 p-4">
                <h3 className="text-blue-gradient">{i?.title}</h3>
                <p className="my-auto text-center">{i?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialMediaSection() {
  const SocialData = [
    {
      icon: <Globe size={28} color="#00F4FF" />,
      name: "Official Site",
      description: "https://trinitypad.com",
      link: "https://trinitypad.com",
    },
    {
      icon: <Twitter size={28} color="#00F4FF" />,
      name: "Twitter",
      description: "https://x.com/trinity_pad",
      link: "https://x.com/trinity_pad",
    },
    {
      icon: <Send size={28} color="#00F4FF" />,
      name: "Telegram",
      description: " https://t.me/trinitypad",
      link: "https://t.me/trinitypad",
    },
    {
      icon: <MessageCircleWarning size={28} color="#00F4FF" />,
      name: "Telegram Announcement",
      description: " https://t.me/trinitypadann",
      link: "https://t.me/trinitypadann",
    },
    {
      icon: <LinkedinIcon size={28} color="#00F4FF" />,
      name: "LinkedIn",
      description: " https://www.linkedin.com/company/trinitypad",
      link: "https://www.linkedin.com/company/trinitypad",
    },
  ];
  return (
    <div className="mx-auto my-10 w-11/12">
      <div className="flex items-start justify-center">
        <h2 className="text-blue-gradient mb-10 w-fit p-4">
          Engage With TrinityPad
        </h2>
      </div>

      <div className="mx-auto flex max-w-4xl flex-col gap-5 max-md:w-full">
        {SocialData.map((i, index) => (
          <div key={index} data-aos="flip-left">
            <div>
              <div
                className={`flex w-full items-center justify-between rounded-xl ${
                  index % 2 == 0 ? "bg-gray-100/10" : "bg-slate-100/20"
                } md:px-4 py-5 max-md:flex-col max-md:gap-2`}
              >
                <div className="flex items-center justify-center gap-2">
                  {i?.icon}
                  <div className="text-blue-gradient 2xs:text-lg xs:text-xl md:text-2xl">
                    {i?.name}{" "}
                  </div>
                </div>
                <div>
                  <Link
                    href={i?.link}
                    className="text-blue-gradient 2xs:text-xs xs:text-[15px] md:text-lg flex items-center justify-center gap-2 break-all transition-all duration-500 hover:gap-5"
                    target="_blank"
                  >
                    {i?.description}
                    <ChevronRight color="#0B5EE0" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamMemberSection() {
  const teamData = [
    {
      name: "Victor Tan",
      designation: "Founder & CEO",
      description:
        "Helped early stage startups raise over $112M. Successful track record as Founder & Angel Investor.",
      image: "bg-[url('/assets/about/victor.png')]",
      twitter: "https://x.com/victorstarkz",
      linkedIn: "https://www.linkedin.com/in/victorstarkz/",
    },
    {
      name: "Ghulam Haider",
      designation: "Co-Founder & CTO",
      description:
        "Ex-CTO at CADHERO, Secretum, Bedrockswap, RTKDirect, and PlayIn Technologies.",
      image: "bg-[url('/assets/about/haider.jpg')]",
      twitter: "https://x.com/trinity_pad",
      linkedIn: "https://www.linkedin.com/in/haidersattar/",
    },
    {
      name: "Damoon Ong",
      designation: "Co-Founder & Head of Commercials",
      description:
        "ex-Tier 1 Global Late-stage VC (AUM 750M). Exited founder for Venture Studio - fundraised >140M.",
      image: "bg-[url('/assets/about/damoon.jpg')]",
      twitter: "https://x.com/trinity_pad",
      linkedIn: "https://www.linkedin.com/in/haidersattar/",
    },
  ];
  return (
    <>
      <div id="team" className="mx-auto my-20 w-11/12">
        <div className="flex items-start justify-center">
          <h2 className="text-blue-gradient mb-10 w-fit p-4">
            Minds Behind TrinityPad
          </h2>
        </div>
        <div className="mx-auto grid w-full grid-cols-1 items-stretch justify-center gap-10 max-lg:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamData?.map((i, index) => (
            <div
              key={index}
              className="flex w-full max-w-md"
              data-aos="fade-up"
            >
              <div className="gradient-shadow-2 rounded-[20px] bg-[#1D203580] p-5">
                <div className="flex flex-col items-center justify-center gap-2 p-4">
                  <div
                    className={`size-44 rounded-full bg-cover bg-center p-2 ${i?.image}`}
                  ></div>
                  <h3 className="text-blue-gradient font-bold">{i?.name}</h3>
                  <h4 className="text-balance font-semibold">
                    {i?.designation}
                  </h4>
                  <p className="text-center text-gray-400">{i?.description}</p>
                  <div className="flex flex-row gap-5">
                    {i?.linkedIn && (
                      <Link href={i?.linkedIn}>
                        <Linkedin />
                      </Link>
                    )}
                    {i?.twitter && (
                      <Link href={i?.twitter}>
                        <Twitter />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function AboutCompanySection() {
  return (
    <>
      <div className="mx-auto my-10 w-11/12 pb-10" data-aos="fade-down">
        <div className="flex items-start justify-center">
          <h2 className="text-blue-gradient mb-10 w-fit p-4">Our Company</h2>
        </div>
        <div className="mx-auto h-auto w-full max-w-6xl" data-aos="fade-up">
          <div className="gradient-shadow-2 rounded-[20px] bg-[#1D203580] p-5">
            <div className="flex flex-col items-center justify-center gap-5 py-4">
              <Image
                src="/assets/airdrop/airdrop.svg"
                alt="trinity pad logo"
                width={100}
                height={100}
              />
              <h3 className="font-bold">TrinityPad</h3>
              <h4 className="text-balance font-medium">
                Your gateway to smart investments
              </h4>
              <p className="text-center text-gray-400">
                TrinityPad offers early stage investment opportunities in Web3,
                backed by Artificial Intelligence, the platform supports popular
                chains like BNB, Solana, Ethereum, TON, Base, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
