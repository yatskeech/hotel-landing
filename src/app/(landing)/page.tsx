import Image from "next/image";

import { Button } from "@/shared/ui";

export default function HomePage() {
  return (
    <div className="container">
      <main className="h-main flex justify-between items-center gap-32">
        <div className="flex flex-col gap-20 items-start">
          <div className="flex flex-col gap-6 text-foreground">
            <span className="font-script font-semibold text-accent text-[50px]">
              Paradise View
            </span>
            <h1 className="w-[400px] font-bold text-[55px] leading-none">
              Hotel for every moment rich in emotion
            </h1>
            <p className="max-w-[260px] font-medium">
              Every moment feels like the first time in paradise view
            </p>
          </div>
          <Button>Book Now</Button>
        </div>
        <div className="h-full">
          <Image
            src="/hotel.jpg"
            alt="hotel"
            width={1400}
            height={933}
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
}
