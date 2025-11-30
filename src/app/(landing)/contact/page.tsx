import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container">
      <main className="h-main flex justify-between gap-4">
        <div className="flex-1 max-w-[582px] h-full">
          <Image
            src="/contact.jpg"
            alt="hotel"
            width={1400}
            height={933}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col items-center gap-10 pt-24 px-12">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-accent font-extrabold text-5xl">Contact Us</h1>
            <p className="whitespace-pre-line text-center">
              {`We’d love to hear from you! Whether you have questions about your
            reservation, want to plan a special event, or simply wish to learn
            more about our rooms — our team is here to help.`}
            </p>
          </div>
          <div className="w-[245px] h-px bg-accent" />
          <ul className="flex flex-col gap-6">
            <li className="flex flex-col items-center gap-2">
              <h2 className="text-accent text-xl font-extrabold leading-none">
                Address
              </h2>
              <span className="font-light">
                2145 Grand Avenue, New York, NY 10013, USA
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <h2 className="text-accent text-xl font-extrabold leading-none">
                Reservation Department
              </h2>
              <div className="flex flex-col items-center font-light">
                <a href="tel:+12025551212">+1 (212) 555-1212</a>
                <a href="mailto:bookings@luxinn.com">bookings@luxinn.com</a>
              </div>
            </li>
            <li className="flex flex-col items-center gap-2">
              <h2 className="text-accent text-xl font-extrabold leading-none">
                Front Desk
              </h2>
              <div className="flex flex-col items-center font-light">
                <a href="tel:+12025550147">+1 (202) 555-0147</a>
                <a href="mailto:reception@luxinn.com">reception@luxinn.com</a>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
