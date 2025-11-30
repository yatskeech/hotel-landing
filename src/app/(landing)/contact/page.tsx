import Image from "next/image";

import { Button } from "@/shared/ui";

export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col md:flex-row lg:container justify-between gap-4">
      <div className="hidden md:block flex-1 max-w-[582px]">
        <Image
          src="/contact.jpg"
          alt="contact"
          width={1400}
          height={933}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:hidden flex-1 w-full">
        <Image
          src="/reception.jpg"
          alt="reception"
          width={750}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col items-center gap-4 md:gap-10 py-6 px-4 md:pt-24 md:pb-0 md:px-12">
        <div className="flex flex-col items-center gap-3 md:gap-6">
          <h1 className="text-accent font-extrabold text-xl md:text-5xl">
            Contact Us
          </h1>
          <p className="whitespace-pre-line text-center text-xs md:text-[15px]">
            {`We’d love to hear from you! Whether you have questions about your
            reservation, want to plan a special event, or simply wish to learn
            more about our rooms — our team is here to help.`}
          </p>
        </div>
        <div className="w-[245px] h-px bg-accent" />
        <ul className="flex flex-col gap-6">
          <li className="flex flex-col items-center gap-2">
            <h2 className="text-accent text-base md:text-xl font-extrabold leading-none">
              Address
            </h2>
            <span className="font-light text-center text-xs md:text-sm">
              2145 Grand Avenue, New York, NY 10013, USA
            </span>
          </li>
          <li className="flex flex-col items-center gap-2">
            <h2 className="text-accent text-base md:text-xl font-extrabold leading-none">
              Reservation Department
            </h2>
            <div className="flex flex-col items-center font-light text-xs md:text-sm">
              <a href="tel:+12025551212">+1 (212) 555-1212</a>
              <a href="mailto:bookings@luxinn.com">bookings@luxinn.com</a>
            </div>
          </li>
          <li className="flex flex-col items-center gap-2">
            <h2 className="text-accent text-base md:text-xl font-extrabold leading-none">
              Front Desk
            </h2>
            <div className="flex flex-col items-center font-light text-xs md:text-sm">
              <a href="tel:+12025550147">+1 (202) 555-0147</a>
              <a href="mailto:reception@luxinn.com">reception@luxinn.com</a>
            </div>
          </li>
        </ul>
        <Button className="md:hidden mt-6">Request</Button>
      </div>
    </div>
  );
}
