"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
  {
    id: 1,
    author: {
      name: "Anthony Bruff",
      image: "/avatars/Anthony.jpg",
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
    <main className="min-h-main flex flex-col gap-12 py-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-accent font-bold text-[50px] leading-none">
          Reviews
        </h1>
        <span className="text-foreground font-medium text-[15px]">
          What our guests say about our 5-star hotel.
        </span>
      </div>
      <Swiper
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={40}
        modules={[FreeMode]}
        pagination={{ clickable: true }}
        style={{ paddingInline: "max(calc((100vw - 1280px) / 2), 16px)" }}
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="max-w-[470px] bg-[#FAFAFA] p-7 rounded-xl"
          >
            <div className="flex flex-col gap-16">
              <div className="flex items-center justify-between">
                <span>{review.date}</span>
                <svg
                  width="90"
                  height="13"
                  viewBox="0 0 90 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.61711 13L3.72895 8.19342L0 4.96053L4.92632 4.53289L6.84211 0L8.7579 4.53289L13.6842 4.96053L9.95526 8.19342L11.0671 13L6.84211 10.4513L2.61711 13Z"
                    fill="#FFCE31"
                  />
                  <path
                    d="M21.6171 13L22.7289 8.19342L19 4.96053L23.9263 4.53289L25.8421 0L27.7579 4.53289L32.6842 4.96053L28.9553 8.19342L30.0671 13L25.8421 10.4513L21.6171 13Z"
                    fill="#FFCE31"
                  />
                  <path
                    d="M40.6171 13L41.7289 8.19342L38 4.96053L42.9263 4.53289L44.8421 0L46.7579 4.53289L51.6842 4.96053L47.9553 8.19342L49.0671 13L44.8421 10.4513L40.6171 13Z"
                    fill="#FFCE31"
                  />
                  <path
                    d="M59.6171 13L60.7289 8.19342L57 4.96053L61.9263 4.53289L63.8421 0L65.7579 4.53289L70.6842 4.96053L66.9553 8.19342L68.0671 13L63.8421 10.4513L59.6171 13Z"
                    fill="#FFCE31"
                  />
                  <path
                    d="M82.8421 3.50658V8.84342L84.9974 10.1605L84.4329 7.69737L86.3316 6.05526L83.8342 5.83289L82.8421 3.50658ZM78.6171 13L79.7289 8.19342L76 4.96053L80.9263 4.53289L82.8421 0L84.7579 4.53289L89.6842 4.96053L85.9553 8.19342L87.0671 13L82.8421 10.4513L78.6171 13Z"
                    fill="#FFCE31"
                  />
                </svg>
              </div>
              <p className="indent-4 text-[15px] quoted text-justify leading-tight">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="size-[42px] rounded-full overflow-hidden">
                  <Image
                    src={review.author.image}
                    alt={review.author.name}
                    height={42}
                    width={42}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-sm">
                  {review.author.name}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
