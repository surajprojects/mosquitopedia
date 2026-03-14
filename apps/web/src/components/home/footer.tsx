import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { HeaderLinksTypeList } from "@/utils/types/headerLinksType";

export default function Footer() {
  const quickLinksData: HeaderLinksTypeList = [
    {
      name: "home",
      path: "#",
    },
    {
      name: "search",
      path: "#",
    },
    {
      name: "browse",
      path: "#",
    },
  ];

  const followUsData: HeaderLinksTypeList = [
    {
      name: "github",
      path: "#",
    },
    {
      name: "instagram",
      path: "#",
    },
    {
      name: "twitter",
      path: "#",
    },
  ];
  return (
    <>
      <footer className="w-full bg-foreground text-gray-300/85">
        <div className="mx-auto flex w-full flex-col justify-between gap-y-8 border-b border-b-gray-300/75 px-6 py-8 md:flex-row md:px-12 xl:max-w-7xl">
          {/* Logo & Tagline */}
          <div className="max-w-xs lg:max-w-sm">
            <div className="flex items-center gap-x-2">
              <div className="size-7">
                <Image src={logo} width={100} height={100} alt="logo" />
              </div>
              <h6 className="font-heading text-xl font-bold text-white">Mosquitopedia</h6>
            </div>
            <p className="mt-4 text-sm">
              Find any mosquito, anytime. The world&#39;s largest community-driven mosquito
              encyclopedia where hunters document their victories.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-col gap-y-2">
            <p className="font-heading mb-2 font-medium text-white capitalize">quick links</p>
            {quickLinksData.map((item, idx) => (
              <Link key={idx} href={item.path} className="text-sm capitalize">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Follow Us */}
          <nav className="flex flex-col gap-y-2">
            <p className="font-heading mb-2 font-medium text-white capitalize">follow us</p>
            {followUsData.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="text-sm capitalize"
                target="_blank"
                rel="noreferrer"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center p-6">
          <div className="flex flex-col items-center text-center text-sm font-medium">
            <span>Made with ❤️ by TigerxInsights &copy; 2026 | All rights reserved.</span>
            <span>
              No mosquitoes were harmed in the making of this website... well, actually, many were.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
