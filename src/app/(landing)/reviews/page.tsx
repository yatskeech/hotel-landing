import Image from "next/image";

import { Icon } from "@/shared/ui";

const reviews = [
  {
    id: 1,
    author: {
      name: "Anthony Bruff",
      image: "/avatars/anthony.jpg",
    },
    date: "2 Mar. 2025",
    text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
  },
  {
    id: 2,
    author: {
      name: "Regina Gella",
      image: "/avatars/regina.jpg",
    },
    date: "25 Mar. 2025",
    text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
  },
  {
    id: 3,
    author: {
      name: "Jamiyu Aliyu",
      image: "/avatars/jamiyu.jpg",
    },
    date: "5 Apr. 2025",
    text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12 py-6 md:py-12">
      <div className="hidden md:flex flex-col items-center justify-center gap-2">
        <h1 className="text-accent font-bold text-[50px] leading-none">
          Reviews
        </h1>
        <span className="text-foreground font-medium text-[15px]">
          What our guests say about our 5-star hotel.
        </span>
      </div>
      <div className="w-screen">
        <ul className="flex flex-col items-center md:flex-row gap-10 overflow-x-auto md:px-30 no-scrollbar">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="shrink-0 w-full md:w-[470px] bg-[#FAFAFA] p-5 md:p-7 rounded-xl relative"
            >
              <div className="flex flex-col-reverse md:flex-col gap-8 md:gap-16">
                <div className="absolute top-6 right-4 flex flex-col-reverse gap-4 md:static md:gap-0 md:flex-row md:items-center justify-between">
                  <span className="text-xs md:text-sm">{review.date}</span>
                  <Icon name="rating" />
                </div>
                <p className="indent-4 text-xs md:text-[15px] quoted text-justify leading-tight">
                  {review.text}
                </p>
                <div className="flex items-center gap-4 order-1">
                  <div className="size-[42px] rounded-full overflow-hidden">
                    <Image
                      src={review.author.image}
                      alt={review.author.name}
                      height={42}
                      width={42}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-xs md:text-sm">
                    {review.author.name}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
