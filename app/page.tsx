import Features from "@/components/launchpad/Features";
import Hero from "@/components/launchpad/Hero";
import AchievementsBanner from "@/components/launchpad/AchievementsBanner";

export default function Home() {
  return (
    <div className="px-0 md:px-24">
      <Hero />
      <Features />
      <AchievementsBanner />
    </div>
  );
}
