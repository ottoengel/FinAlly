import { ArrowRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      <div className="flex items-center justify-center bg-black py-3 text-sm text-white">
        <div className="inline-flex items-center gap-1">
          <p>Get Started for Free</p>
          <ArrowRight className="inline-flex h-4 w-4 items-center justify-center" />
        </div>
      </div>
      <div className="px-5 py-5 md:px-24 lg:px-40">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src="/fin-logo.svg"
              alt="FinAlly logo"
              height={150}
              width={150}
            />
            <MenuIcon className="h-5 w-5 items-center md:hidden" />
            <nav className="hidden items-center gap-6 md:flex">
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#price">Preço</a>
              <a href="#">Preço</a>
              <Link href="/login">
                <button className="inline-flex items-center rounded-lg bg-black px-4 py-2 font-medium tracking-tight text-white">
                  Get for free
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
