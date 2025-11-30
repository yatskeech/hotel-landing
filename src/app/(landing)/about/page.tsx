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
    <main className="flex flex-col gap-15">
      <div className="flex h-[700px] overflow-hidden bg-[url(/about.jpg)] bg-cover bg-center">
        <div className="flex-1 flex flex-col gap-12 items-center justify-center text-white bg-[#7C6A4680]">
          <h1 className="font-extrabold text-6xl">About us</h1>
          <p className="text-center font-semibold text-xl whitespace-pre-line">
            {`The elegant luxury bedrooms in this gallery showcase custom interior
            designs & decorating ideas. View pictures and find your perfect
            luxury bedroom design.`}
          </p>
        </div>
      </div>
      <div className="container">
        <section className="flex flex-col gap-15">
          <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-accent font-bold text-[40px] leading-none">
              Our advantages
            </h2>
            <span className="text-foreground font-medium text-[15px]">
              We offer modern (5 star) hotel facilities for your comfort.
            </span>
          </div>
          <ul className="grid grid-cols-4 text-accent gap-12">
            {advantageItems.map((advantage) => (
              <li
                key={advantage.name}
                className="h-[250px] flex flex-col items-center justify-center gap-5 bg-[#FAFAFA] rounded-md overflow-hidden"
              >
                <Icon name={advantage.icon} />
                <span className="font-medium text-xl">{advantage.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="container">
        <section className="flex flex-col gap-15 pb-24">
          <h2 className="text-accent text-center font-bold text-[40px] leading-none">
            Take a tour
          </h2>
          <ul className="flex flex-col gap-12">
            {advantages.map((advantage) => (
              <li key={advantage.title} className="pb-20 relative">
                <div className="h-[570px] rounded-[40px] overflow-hidden">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    width={1272}
                    height={570}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-1/5 right-1/5 bg-white shadow-[0px_4px_30px_-5px_#00000026] rounded-[20px] overflow-hidden">
                  <div className="bg-accent h-5" />
                  <div className="flex flex-col gap-8 items-center px-15 pt-8 pb-16">
                    <h3 className="text-accent font-medium text-2xl">
                      {advantage.title}
                    </h3>
                    <p className="text-[15px] text-center">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
