import Community from "@/components/home/community";
import Hero from "@/components/home/hero";
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
      </div>
    </>
  );
}
