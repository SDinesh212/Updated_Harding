import {
  ArrowRight,
  CalendarDays,
  CreditCard,
  FileText,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

const paymentSteps = [
  {
    icon: FileText,
    title: "Have Your Statement Ready",
    text: "Keep your patient name, date of service, and statement details nearby.",
  },
  {
    icon: Phone,
    title: "Call Billing",
    text: "Our team can help confirm your balance and payment options.",
  },
  {
    icon: ShieldCheck,
    title: "Protect Your Information",
    text: "Please do not send card details through regular email.",
  },
];

export default function PaymentPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#062f35]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f6fffc] to-[#dff5f0] px-5 pb-24 pt-36 lg:px-10">
          <div className="absolute inset-0 medical-grid opacity-[0.05]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#0a9b8c]">
                Billing And Payments
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-[#062f35] sm:text-6xl">
                Make A Payment Or Get Billing Help
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#315866]">
                For payment assistance, statement questions, or insurance
                billing support, contact our Harding Radiology team directly.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:9082210603"
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#073b3b] px-7 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#0a9b8c]"
                >
                  <Phone size={18} />
                  Call Billing
                </a>

                <a
                  href="mailto:Scheduling@hardingradiology.com?subject=Billing%20Question"
                  className="inline-flex items-center gap-3 rounded-2xl border border-[#0a9b8c]/25 bg-white px-7 py-4 text-sm font-black text-[#073b3b] shadow-sm transition hover:-translate-y-1"
                >
                  <Mail size={18} />
                  Email Billing
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[44px] bg-[#46d7c8]/18 blur-3xl" />
              <div className="relative overflow-hidden rounded-[38px] bg-[#073b3b] p-7 text-white shadow-2xl">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#46d7c8] text-[#073b3b]">
                  <CreditCard size={32} />
                </span>

                <h2 className="mt-8 text-3xl font-black">
                  Payment Support
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                  Our staff will guide you through available payment methods
                  and any information needed for your account.
                </p>

                <div className="mt-8 grid gap-4">
                  {paymentSteps.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.title}
                        className="rounded-2xl border border-white/12 bg-white/[0.06] p-4"
                      >
                        <div className="flex gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#8ff4eb]">
                            <Icon size={21} />
                          </span>
                          <div>
                            <h3 className="font-black">{step.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-white/70">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 lg:px-10">
          <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[36px] bg-gradient-to-r from-[#f0fffb] to-[#dff5f0] p-8 shadow-xl md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#0a9b8c]">
                Need Imaging Scheduled?
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#062f35]">
                Request an appointment with our scheduling team.
              </h2>
            </div>

            <Link
              to="/appointment"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#073b3b] px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#0a9b8c]"
            >
              Request Appointment
              <CalendarDays size={18} />
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
