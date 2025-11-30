"use client";

import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { Button } from "@/shared/ui";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Reviews", href: "/reviews" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function LandingLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#FAFAFA]">
        <div className="container">
          <header className="flex items-center justify-between h-header">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={56} height={36} />
            </Link>
            <div className="flex items-center gap-15">
              <nav>
                <ul className="flex gap-12">
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
      {children}
    </div>
  );
}
