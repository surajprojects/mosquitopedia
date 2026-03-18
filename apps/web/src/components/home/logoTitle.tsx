import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function LogoTitle() {
  return (
    <>
      {/* Logo & Title */}
      <div className="flex items-center justify-center gap-2">
        <div className="size-7">
          <Image src={logo} width={100} height={100} alt="logo" preload={true} />
        </div>
        <Link href="/" className="font-heading text-lg font-bold">
          Mosquitopedia
        </Link>
      </div>
    </>
  );
}
