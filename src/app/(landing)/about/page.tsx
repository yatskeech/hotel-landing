import Image from "next/image";

import { Icon } from "@/shared/ui";

const advantageItems = [
  { name: "Swimming Pool", icon: "swimming" },
  { name: "Wifi", icon: "wifi" },
  { name: "Breakfast", icon: "breakfast" },
  { name: "Gym", icon: "gym" },
  { name: "Game", icon: "game" },
  { name: "Light", icon: "light" },
  { name: "Laundry", icon: "laundry" },
  { name: "Parking", icon: "parking" },
] as const;

const advantages = [
  {
    title: "Luxurious rooms",
    description:
      "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design",
    image: "/advantages/rooms.jpg",
  },
  {
    title: "Gym center",
    description:
      "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design",
    image: "/advantages/gym.jpg",
  },
  {
    title: "Restaurant",
    description:
      "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design",
    image: "/advantages/restaurant.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex h-[180px] sm:h-[400px] md:h-[700px] overflow-hidden bg-[url(/about.jpg)] bg-cover bg-center">
        <div className="flex-1 flex flex-col gap-12 items-center justify-center text-white bg-[#7C6A4680]">
          <h1 className="hidden md:block font-extrabold text-6xl">About us</h1>
          <p className="hidden md:block text-center font-semibold text-xl whitespace-pre">
            {`The elegant luxury bedrooms in this gallery showcase custom interior\ndesigns & decorating ideas. View pictures and find your perfect\nluxury bedroom design.`}
          </p>
        </div>
      </div>
      <div className="container">
        <section className="flex flex-col items-center sm:items-stretch gap-4 sm:gap-15 py-6 sm:py-15">
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-6">
            <h2 className="text-accent font-bold text-[20px] sm:text-[40px] leading-none">
              Our advantages
            </h2>
            <span className="text-foreground font-medium text-[10px] text-center sm:text-[15px] sm:text-left">
              We offer modern (5 star) hotel facilities for your comfort.
            </span>
          </div>
          <ul className="grid justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-accent gap-3 sm:gap-12">
            {advantageItems.map((advantage) => (
              <li
                key={advantage.name}
                className="h-30 w-30 sm:h-[250px] sm:w-auto flex flex-col items-center justify-center gap-3 sm:gap-5 bg-[#FAFAFA] hover:bg-accent text-accent hover:text-[#FAFAFA] rounded-md overflow-hidden transition-colors"
              >
                <Icon name={advantage.icon} className="w-6 sm:w-16" />
                <span className="font-medium text-xs sm:text-xl">
                  {advantage.name}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="container">
        <section className="flex flex-col gap-4 sm:gap-15 pb-8 sm:pb-24">
          <h2 className="text-accent text-center font-bold text-[20px] sm:text-[40px] leading-none">
            Take a tour
          </h2>
          <ul className="flex flex-col gap-4 sm:gap-12">
            {advantages.map((advantage) => (
              <li key={advantage.title} className="pb-6 sm:pb-20 relative">
                <div className="h-[254px] md:h-80 lg:h-[570px] rounded-[40px] overflow-hidden">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    width={1272}
                    height={570}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-1/12 right-1/12 lg:left-1/5 lg:right-1/5 bg-white shadow-[0px_4px_30px_-5px_#00000026] rounded-[20px] overflow-hidden">
                  <div className="bg-accent h-2 md:h-5" />
                  <div className="flex flex-col gap-2 lg:gap-8 items-center p-4 sm:p-6 md:px-15 md:pt-8 md:pb-16">
                    <h3 className="text-accent font-medium text-xl md:text-2xl">
                      {advantage.title}
                    </h3>
                    <p className="text-xs md:text-[15px] text-center">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
