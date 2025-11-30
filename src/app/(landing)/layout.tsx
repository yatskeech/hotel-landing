import { ReactNode } from "react";

import { Header } from "@/features/layout";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex">{children}</main>
    </div>
  );
}
