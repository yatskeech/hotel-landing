"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import { useState } from "react";

import { Icon } from "@/shared/ui";

import { navItems } from "../model/constants";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <Icon name="open" />
      </button>

      <div
        className={cx(
          "fixed w-60 left-0 top-0 bottom-0 transition-transform bg-accent/95 z-100",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
          }
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="mt-10 ml-5 cursor-pointer"
        >
          <Icon name="close" />
        </button>
        <nav>
          <ul className="flex flex-col items-center mt-6 p-4 gap-7">
            {navItems.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="font-bold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
