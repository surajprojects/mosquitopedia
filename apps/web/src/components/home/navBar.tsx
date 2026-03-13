import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function NavBar() {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-40 py-3">
          {/* Logo & Title */}
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="Mosquitopedia logo"
              className="mr-2 size-7 cursor-pointer"
            />
            <Link href="#" className="font-heading text-xl font-bold">
              Mosquitopedia
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex items-center justify-around">
            <Link href="#" className="mx-2">
              Home
            </Link>
            <Link href="#" className="mx-2">
              Search
            </Link>
            <Link href="#" className="mx-2">
              Browse
            </Link>
          </div>

          {/* Action Buttons */}
          <div>
            <Link href="#" className="mx-2">
              Login
            </Link>
            <Link href="#" className="mx-2">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
