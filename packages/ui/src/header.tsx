import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <>
            <header>
                <nav className="w-full py-6 sm:py-8 px-8 sm:px-16 lg:px-28 font-primary font-medium flex justify-between">
                    <div className="sm:text-2xl whitespace-nowrap shrink mr-2 sm:mr-0 flex justify-center items-center">
                        <Image
                            src="/mosquitopedia_noText_circle.png"
                            alt="mosquitopedia logo"
                            width={28}
                            height={28}
                            className="aspect-square object-cover rounded-full border border-gray-300 mx-2"
                        />
                        <a href="/" className="text-2xl">Mosquitopedia</a>
                    </div>
                    <ul className="py-1 px-2 flex justify-between">
                        <Link href="/register" className="mx-2">Register</Link>
                        <Link href="/login" className="mx-2">Login</Link>
                        <Link href="/logout" className="mx-2">Logout</Link>
                    </ul>
                </nav>
            </header>
        </>
    );
};