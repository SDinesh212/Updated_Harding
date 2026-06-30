import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

const contactCards = [
  {
    icon: Phone,
    title: "Call",
    text: "908-221-0603",
    href: "tel:9082210603",
  },
  {
    icon: Mail,
    title: "Email",
    text: "Scheduling@hardingradiology.com",
    href: "mailto:Scheduling@hardingradiology.com",
  },
  {
    icon: MapPin,
    title: "Visit",
    text: "1201 Mount Kemble Avenue",
    href: "https://www.google.com/maps/search/?api=1&query=1201+Mount+Kemble+Avenue+Morristown+NJ+07960",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17383b]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f6fffc] to-[#dff5f0] px-5 pb-20 pt-36 lg:px-10">
          <div className="absolute inset-0 medical-grid opacity-[0.05]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#0a9b8c]">
                Contact Harding Radiology
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-[#062f35] sm:text-6xl">
                Reach Our Scheduling And Patient Care Team
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#315866]">
                Call, email, or visit us for appointment questions, directions,
                billing help, and general radiology service information.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#073b3b] px-7 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#0a9b8c]"
                >
                  <CalendarDays size={18} />
                  Request Appointment
                </Link>

                <a
                  href="tel:9082210603"
                  className="inline-flex items-center gap-3 rounded-2xl border border-[#0a9b8c]/25 bg-white px-7 py-4 text-sm font-black text-[#073b3b] shadow-sm transition hover:-translate-y-1"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group rounded-[28px] border border-white bg-white/85 p-5 shadow-xl shadow-[#073b3b]/5 transition hover:-translate-y-1 hover:bg-white"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5faf8] text-[#158f87] transition group-hover:bg-[#0a9b8c] group-hover:text-white">
                      <Icon size={24} />
                    </span>
                    <h2 className="mt-4 text-lg font-black text-[#062f35]">
                      {card.title}
                    </h2>
                    <p className="mt-2 break-words text-sm font-bold leading-6 text-[#315866]">
                      {card.text}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
