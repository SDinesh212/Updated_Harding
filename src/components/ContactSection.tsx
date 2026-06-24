import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative z-[80] bg-white px-6 py-20">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LIVE MAP */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=1201+Mount+Kemble+Avenue+Morristown+NJ+07960"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <iframe
            title="Radiology Center at Harding Location"
            src="https://www.google.com/maps?q=1201%20Mount%20Kemble%20Avenue%2C%20Morristown%2C%20NJ%2007960&output=embed"
            className="h-[560px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </a>

        {/* CONTACT INFO */}
        <div>
          <h2 className="text-[42px] font-bold text-[#285573] sm:text-[52px]">
            Contact us
          </h2>

          <div className="mt-12 space-y-10 text-[#285573]">
            <Info icon={<MapPin />} title="Our Address">
              1201 Mount Kemble Avenue, Morristown, NJ 07960
            </Info>

            <Info icon={<Phone />} title="Phone">
              908-221-0603
            </Info>

            <Info icon={<Mail />} title="Email">
              Scheduling@hardingradiology.com
            </Info>

            <Info icon={<Clock />} title="Business Hours">
              <div className="mt-3 space-y-1 text-[15px] text-gray-700">
                <p>• Monday 8:30AM – 5:00PM</p>
                <p>• Tuesday 8:30AM – 5:00PM</p>
                <p>• Wednesday 8:30AM – 6:00PM</p>
                <p>• Thursday 8:30AM – 5:00PM</p>
                <p>• Friday 8:30AM – 5:00PM</p>
                <p>• Saturday Closed</p>
                <p>• Sunday Closed</p>
              </div>
            </Info>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6">
      <div className="mt-1 text-[#6a8ca1] [&_svg]:h-9 [&_svg]:w-9">
        {icon}
      </div>

      <div>
        <h3 className="text-[21px] font-bold text-[#285573]">{title}</h3>
        <div className="mt-2 text-[17px] text-[#285573]">{children}</div>
      </div>
    </div>
  );
}