import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JoinHunt() {
  return (
    <>
      <section className="bg-linear-to-r from-[#20b595] to-[#1d937a]">
        <div className="section-wrapper">
          <div className="mx-auto flex w-lg flex-col items-center justify-center gap-6 text-white">
            {/* Title */}
            <h4 className="font-heading text-center text-4xl font-bold">Join the Hunt</h4>
            {/* Description */}
            <p className="text-center text-lg">
              Document your mosquito encounters and contribute to the world&#39;s most comprehensive
              mosquito database.
            </p>
            {/* CTA */}
            <Link
              href="#"
              className="btn flex items-center gap-2 rounded-2xl bg-linear-to-r from-orange-400 to-orange-500 px-8 py-3 font-medium capitalize shadow-sm hover:shadow-md"
            >
              <span>register & add your mosquito</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
