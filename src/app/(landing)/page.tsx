import Image from "next/image";

import { Button } from "@/shared/ui";

export default function HomePage() {
  return (
    <div className="flex-1 flex lg:container">
      <div className="w-full flex flex-col-reverse justify-end lg:flex-row lg:justify-between items-center lg:gap-16">
        <div className="flex-1 flex flex-col justify-between gap-8 lg:gap-20 items-center py-8 lg:py-0 lg:items-start">
          <div className="flex flex-col items-center text-center gap-8 lg:items-start lg:text-left lg:gap-6 text-foreground">
            <span className="hidden md:block font-script font-semibold text-accent text-[50px]">
              Paradise View
            </span>
            <h1 className="font-extrabold text-[34px] sm:font-bold sm:text-[55px] leading-none whitespace-pre">
              {`Hotel for every\nmoment rich in\nemotion`}
            </h1>
            <span className="font-medium whitespace-pre">
              {`Every moment feels like the first time\nin paradise view`}
            </span>
          </div>
          <Button>Book Now</Button>
        </div>
        <div className="w-full max-h-120 lg:w-auto lg:max-h-none lg:h-full lg:max-w-[745px]">
          <Image
            src="/hotel.jpg"
            alt="hotel"
            width={1400}
            height={933}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
