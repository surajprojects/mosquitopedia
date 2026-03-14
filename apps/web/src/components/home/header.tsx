import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { HeaderLinksTypeList } from "@/utils/types/headerLinksType";

export default function NavBar() {
  const navLinks: HeaderLinksTypeList = [
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
  return (
    <>
      <header className="glass sticky top-0 z-50">
        <nav className="mx-auto flex w-full items-center justify-between px-6 py-3 md:px-12 xl:max-w-7xl">
          {/* Logo & Title */}
          <div className="flex items-center justify-center gap-2">
            <div className="size-7">
              <Image src={logo} width={100} height={100} alt="logo" preload={true} />
            </div>
            <Link href="/" className="font-heading text-lg font-bold">
              Mosquitopedia
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden items-center justify-around gap-x-2 text-sm font-medium sm:flex">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className="transition-effect rounded-xl px-3 py-2 text-secondary capitalize hover:bg-gray-200/75 hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-x-2 text-sm font-medium">
            <Link
              href="#"
              className="transition-effect rounded-xl px-3 py-2 capitalize hover:bg-gray-200/75"
            >
              Login
            </Link>
            <Link
              href="#"
              className="transition-effect rounded-xl bg-primary px-3 py-2 text-white shadow-sm hover:shadow-md"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
