import Image from "next/image";

const rooms = [
  {
    id: 1,
    name: "The Royal Room",
    price: 1900,
    image: "/rooms/royal.jpg",
    features: ["tv", "other", "wifi"],
  },
  {
    id: 2,
    name: "Standard Room",
    price: 1200,
    image: "/rooms/standard.jpg",
    features: ["tv", "other", "wifi"],
  },
  {
    id: 3,
    name: "Executive Room",
    price: 3100,
    image: "/rooms/executive.jpg",
    features: ["tv", "other", "wifi"],
  },
  {
    id: 4,
    name: "The Royal Room",
    price: 1900,
    image: "/rooms/royal.jpg",
    features: ["tv", "other", "wifi"],
  },
  {
    id: 5,
    name: "Standard Room",
    price: 1200,
    image: "/rooms/standard.jpg",
    features: ["tv", "other", "wifi"],
  },
  {
    id: 6,
    name: "Executive Room",
    price: 3100,
    image: "/rooms/executive.jpg",
    features: ["tv", "other", "wifi"],
  },
];

export default function RoomsPage() {
  return (
    <div className="container">
      <div className="flex flex-col gap-12 py-4 md:py-12">
        <div className="hidden md:flex flex-col items-center justify-center gap-2">
          <h1 className="text-accent font-bold text-[50px] leading-none">
            Our rooms
          </h1>
          <span className="text-foreground font-medium text-[15px]">
            We offer modern (5 star) hotel facilities for your comfort.
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex bg-[#FAFAFA] text-foreground md:flex-col md:text-accent shadow-[0px_4px_30px_-5px_#0000001A] rounded-md overflow-hidden"
            >
              <div className="py-2 px-4 md:py-0 md:px-0">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={585}
                  height={375}
                  className="max-w-32 sm:max-w-52 md:max-w-none w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-3 py-6 md:py-3 md:px-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-medium text-base md:text-[25px] leading-none">
                      {room.name}
                    </h2>
                    <span className="hidden md:block text-xs">
                      Available: Yes
                    </span>
                  </div>
                  <span className="font-medium text-xs md:text-[20px]">
                    ${room.price}
                  </span>
                </div>
                <div className="hidden md:block h-[0.5px] bg-accent" />
                <div className="flex gap-3 md:gap-6 pb-6 md:px-4 md:py-5">
                  {room.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center justify-center size-8 bg-white md:bg-[#F2F2F2] rounded-full text-accent"
                    >
                      <Image
                        src={`/icons/${feature}.svg`}
                        alt={feature}
                        width={18}
                        height={18}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
