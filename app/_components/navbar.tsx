"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { MenuIcon } from "lucide-react";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="border-b border-solid py-4">
      <div className="m-auto flex max-w-[2012px] justify-between px-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/fin-logo.svg"
              alt="FinAlly logo"
              width={173}
              height={39}
            />
          </Link>
          {/* Menu Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/dashboard"
              className={
                pathname === "/dashboard"
                  ? "font-bold text-primary"
                  : "text-muted-foreground hover:text-white"
              }
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className={
                pathname === "/transactions"
                  ? "font-bold text-primary"
                  : "text-muted-foreground hover:text-white"
              }
            >
              Transações
            </Link>
            <Link
              href="/subscription"
              className={
                pathname === "/subscription"
                  ? "font-bold text-primary"
                  : "text-muted-foreground hover:text-white"
              }
            >
              Assinatura
            </Link>
          </div>
          {/* Menu Mobile */}
        </div>
        <Popover>
          <PopoverTrigger className="block md:hidden">
            <MenuIcon className="h-6 w-6" />
          </PopoverTrigger>
          <PopoverContent className="flex w-fit flex-col gap-2 p-2">
            <Link
              href="/dashboard"
              className={
                pathname === "/dashboard"
                  ? "font-bold text-primary"
                  : "text-muted-foreground hover:text-white"
              }
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className={
                pathname === "/transactions"
                  ? "font-bold text-primary"
                  : "text-muted-foreground hover:text-white"
              }
            >
              Transações
            </Link>
            <Link
              href="/subscription"
              className={
                pathname === "/subscription"
                  ? "font-bold text-primary"
                  : "text-muted-foreground hover:text-white"
              }
            >
              Assinatura
            </Link>
            <Separator />
            <UserButton showName />
          </PopoverContent>
        </Popover>
        <div className="hidden md:flex">
          <UserButton showName />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
