import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import type { ReactNode } from "react";

const businessHours = [
  "Monday 8:30AM - 5:00PM",
  "Tuesday 8:30AM - 5:00PM",
  "Wednesday 8:30AM - 6:00PM",
  "Thursday 8:30AM - 5:00PM",
  "Friday 8:30AM - 5:00PM",
  "Saturday Closed",
  "Sunday Closed",
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#eef9fc] px-4 py-20 text-[#17383b] sm:px-6 lg:py-28"
    >
      <div className="mx-auto grid  max-w-[1220px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-lg border border-white bg-white shadow-[0_28px_76px_rgba(23,56,59,0.12)]"
        >
          <iframe
            title="Radiology Center at Harding map"
            src="https://www.google.com/maps?q=1201%20Mount%20Kemble%20Avenue%2C%20Morristown%2C%20NJ%2007960&output=embed"
            className="h-[360px] w-full border-0 sm:h-[470px] lg:h-full lg:min-h-[650px]"
            loading="lazy"
            allowFullScreen
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="rounded-lg border border-white bg-white/[0.78] p-6 shadow-[0_28px_76px_rgba(23,56,59,0.1)] backdrop-blur sm:p-8 lg:p-10"
        >
          <p className="text-[14px] font-bold text-[#46a89e]">Contact us</p>
          <h2 className="mt-3 text-[38px] font-extrabold text-[#285573] sm:text-[56px]">
            Visit Harding
          </h2>

          <div className="mt-9 space-y-7">
            <Info icon={<MapPin />} title="Our Address">
              1201 Mount Kemble Avenue, Morristown, NJ 07960
            </Info>
            <Info icon={<Phone />} title="Phone">
              <a href="tel:9082210603" className="transition hover:text-[#158f87]">
                908-221-0603
              </a>
            </Info>
            <Info icon={<Mail />} title="Email">
              <a
                href="mailto:Scheduling@hardingradiology.com"
                className="break-words transition hover:text-[#158f87]"
              >
                Scheduling@hardingradiology.com
              </a>
            </Info>
            <Info icon={<Clock />} title="Business Hours">
              <div className="mt-2 grid gap-1 text-[15px] leading-7 text-[#285573]">
                {businessHours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            </Info>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=1201+Mount+Kemble+Avenue+Morristown+NJ+07960"
            target="_blank"
            rel="noreferrer"
            className="group mt-9 inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#17383b] px-6 text-[15px] font-bold text-white shadow-[0_18px_44px_rgba(23,56,59,0.22)] transition hover:-translate-y-1 hover:bg-[#285573]"
          >
            Open Directions
            <Navigation size={17} className="transition group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5faf8] text-[#158f87]">
        {icon}
      </div>
      <div>
        <h3 className="text-[19px] font-extrabold text-[#17383b]">{title}</h3>
        <div className="mt-2 text-[16px] leading-7 text-[#285573]">
          {children}
        </div>
      </div>
    </div>
  );
}
