import { Button } from "@mosquitopedia/ui/components/button";
import { Input } from "@mosquitopedia/ui/components/input";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="py-20">
        {/* Tagline & Description */}
        <div className="mx-auto flex w-xl flex-col items-center gap-y-6">
          <h1 className="font-heading text-center text-6xl font-bold">
            <span>Find any mosquito,</span>
            <span className="text-primary"> anytime.</span>
          </h1>
          <p className="text-center text-lg text-secondary">
            The world&#39;s largest community-driven mosquito encyclopedia. Document your victories
            and join the hunt.
          </p>
        </div>
        {/* Search Bar */}
        <div className="mx-auto mt-6 flex w-xl items-center gap-x-3">
          <Input
            placeholder="Search by name, location, or killer"
            className="rounded-2xl border-none px-4 py-6 ring-2 ring-offset-2 outline-none"
          />
          <Button className="btn rounded-2xl px-7 py-6 capitalize shadow-sm hover:shadow-md">
            <div className="flex items-center justify-center gap-x-2">
              <Search /> search
            </div>
          </Button>
        </div>
      </section>
    </>
  );
}
