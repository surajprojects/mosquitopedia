import Hero from "@/components/home/hero";
import Reviews from "@/components/home/reviews";
import JoinHunt from "@/components/home/joinHunt";
import Community from "@/components/home/community";
import RecentlyDocumented from "@/components/home/recentlyDocumented";

export default function Home() {
  return (
    <>
      <div className="w-full">
        {/* Hero */}
        <Hero />
        {/* Recently Documented */}
        <RecentlyDocumented />
        {/* Community */}
        <Community />
        {/* Join the Hunt */}
        <JoinHunt />
        {/* Reviews */}
        <Reviews />
      </div>
    </>
  );
}
