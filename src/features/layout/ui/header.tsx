"use client";

import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/shared/ui";

const navItems = [
  { name: "Home", title: "Paradise View", href: "/" },
  { name: "Reviews", title: "Reviews", href: "/reviews" },
  { name: "Rooms", title: "Rooms", href: "/rooms" },
  { name: "About", title: "About Us", href: "/about" },
  { name: "Contact", title: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-[#FAFAFA]">
      <div className="container">
        <header className="flex flex-row-reverse md:flex-row items-center justify-between h-25 md:h-30">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={56}
              height={36}
              className="w-[31px] md:w-14"
            />
          </Link>
          <span
            className={cx("md:hidden text-accent font-bold", {
              "font-script text-2xl": pathname === "/",
              "text-xl": pathname !== "/",
            })}
          >
            {navItems.find((item) => item.href === pathname)?.title}
          </span>
          <span className="md:hidden">x</span>
          <div className="hidden md:flex items-center gap-15">
            <nav>
              <ul className="flex gap-8 lg:gap-12">
                {navItems.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      className={cx("transition-colors", {
                        "font-bold text-accent": pathname === href,
                        "font-medium text-foreground": pathname !== href,
                      })}
                      href={href}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button>Request a call</Button>
          </div>
        </header>
      </div>
    </div>
  );
}
