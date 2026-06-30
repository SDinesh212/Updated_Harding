import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FileText,
  HeartPulse,
  Phone,
  Play,
  ScanLine,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

const heroStats = [
  { icon: ShieldCheck, title: "Low-Dose CT", text: "Preventive scan" },
  { icon: ScanLine, title: "Lung Screening", text: "Clear imaging" },
  { icon: Clock3, title: "Quick Exam", text: "Fast appointment" },
  { icon: UserRoundCheck, title: "Expert Review", text: "Trusted care" },
];

const overviewItems = [
  "Preventive screening for people at higher lung cancer risk.",
  "Low-dose CT imaging for detailed lung evaluation.",
  "Helps detect lung cancer earlier when treatment may work better.",
  "Fast, non-invasive scan with expert radiology reporting.",
];

const serviceCards = [
  {
    icon: ScanLine,
    title: "Who Should Consider LDCT Lung Screening?",
    text: "Low-dose CT lung screening may be recommended for patients with a smoking history or other lung cancer risk factors.",
  },
  {
    icon: UserRoundCheck,
    title: "Who May Not Be Suitable For Screening?",
    text: "Some patients may need a physician review first, especially if they have current symptoms or other medical concerns.",
  },
  {
    icon: FileText,
    title: "Insurance Coverage And Scheduling",
    text: "Coverage may depend on age, risk factors, and provider guidelines. Our team can help guide scheduling.",
  },
];

const whyCards = [
  {
    icon: ShieldCheck,
    title: "Preventive Screening",
    text: "Supports earlier detection in eligible high-risk patients.",
  },
  {
    icon: BadgeCheck,
    title: "Low-Dose Imaging",
    text: "Detailed lung images with optimized radiation dose.",
  },
  {
    icon: Clock3,
    title: "Quick Appointment",
    text: "Efficient scan process with minimal waiting.",
  },
  {
    icon: HeartPulse,
    title: "Lung Health",
    text: "Helps support proactive care and early intervention.",
  },
];

export default function LungScreeningPage() {
  return (
    <div className="isolate min-h-screen overflow-x-hidden bg-white text-[#073b3a]">
      <Navbar />

      <main className="relative">
        {/* FIXED HERO */}
        <section className="fixed inset-0 z-0 h-screen overflow-hidden bg-[#f4fffb] px-5 pt-28 lg:px-10">
          
          <div className="relative mx-auto grid h-full max-w-7xl items-center gap-8 pb-8 lg:grid-cols-[0.9fr_1fr] lg:gap-12">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-600 shadow-sm backdrop-blur">
                <HeartPulse size={15} />
                Lung Cancer Screening
              </span>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.08] text-[#052f35] sm:text-5xl lg:text-6xl">
                Preventive Low-Dose CT{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Lung Screening
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Low-dose CT lung screening helps detect lung cancer earlier in
                eligible high-risk patients, using advanced imaging with a
                lower radiation dose.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="/appointment"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#063b3b] px-7 py-4 text-sm font-black text-white shadow-xl shadow-emerald-900/20 transition hover:-translate-y-1 hover:bg-emerald-600"
                >
                  Book Appointment
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#overview"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-black text-[#063b3b] shadow-md transition hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400 text-emerald-600">
                    <Play size={16} fill="currentColor" />
                  </span>
                  Learn More
                </a>
              </div>

              <div className="mt-12 hidden max-w-2xl grid-cols-2 overflow-hidden rounded-[30px] bg-white/90 shadow-2xl shadow-emerald-900/10 backdrop-blur md:grid md:grid-cols-4">
                {heroStats.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-r border-slate-100 p-5 md:border-b-0"
                  >
                    <item.icon className="mb-3 text-emerald-500" size={24} />
                    <h3 className="text-sm font-black text-[#063b3b]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 rounded-[55px] bg-emerald-300/20 blur-3xl" />
              <div className="service-float relative rounded-[48px] border border-emerald-300/60 bg-white/70 p-4 shadow-2xl shadow-emerald-900/15 backdrop-blur">
                <img
                  src="/images/lung-screening-hero.jpg"
                  alt="Low-dose CT lung screening"
                  className="h-[38vh] max-h-[520px] min-h-[260px] w-full rounded-[38px] object-cover"
                />

                <div className="absolute left-10 top-10 rounded-3xl bg-white/95 p-5 shadow-xl">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-600">
                    Low-Dose CT
                  </p>
                  <h3 className="mt-1 text-xl font-black text-[#063b3b]">
                    Preventive Screening
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT ABOVE HERO */}
        <section className="service-overflow-curve relative z-10 mt-[calc(100vh-1.5rem)] rounded-t-[54px] bg-white px-5 py-24 shadow-[0_-30px_80px_rgba(5,47,53,0.08)] lg:px-10">
          <div
            id="overview"
            className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1fr]"
          >
            
            <img
              src="/images/lung-screening-scan.jpg"
              alt="Lung CT scan images"
              className="h-[430px] w-full rounded-[42px] object-cover shadow-2xl shadow-emerald-900/10"
            />

            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
                Precision Lung Screening
              </span>

              <h2 className="mt-4 text-3xl font-black text-[#062f35] sm:text-5xl">
                Low-Dose CT Scan For{" "}
                <span className="text-emerald-600">Early Detection</span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Low-dose CT lung screening creates detailed images of the lungs
                and may help detect lung cancer before symptoms appear. It is a
                preventive screening option for eligible patients at higher
                risk.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {overviewItems.map((item) => (
                  <div key={item} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm">
                      <CheckCircle2 size={22} />
                    </span>
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 p-6 text-sm font-bold leading-7 text-emerald-700">
                Preventive lung screening can support earlier diagnosis and
                timely treatment planning for eligible patients.
              </div>
            </div>
          </div>
        </section>

        {/* EXAM EXPERIENCE */}
        <section className="relative z-10 bg-[#f4fffb] px-5 py-24 lg:px-10">
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
              Lung Screening Guidance
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#062f35] sm:text-4xl">
              Understanding Low-Dose CT Lung Screening
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              A proactive screening option designed to identify lung concerns
              earlier with detailed CT imaging.
            </p>

            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {serviceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[34px] border border-white bg-white p-8 text-left shadow-xl shadow-emerald-900/5 transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                    <card.icon size={26} />
                  </span>
                  <h3 className="text-xl font-black text-[#062f35]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="relative z-10 bg-white px-5 py-20 lg:px-10"
        >
          <div className="mx-auto grid max-w-6xl items-center overflow-hidden rounded-[42px] bg-gradient-to-r from-[#effaf6] to-[#dff7ee] shadow-2xl shadow-emerald-900/10 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
                Book Your Visit
              </span>

              <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight text-[#062f35] sm:text-4xl">
                Schedule Your Lung Cancer Screening
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
                Call us now or book online for preventive low-dose CT lung
                screening with expert radiology care.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="tel:9732210000"
                  className="inline-flex items-center gap-3 rounded-full bg-[#063b3b] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600"
                >
                  Call Now <Phone size={17} />
                </a>

                <span className="font-black text-[#063b3b]">
                  973-221-0000
                </span>
              </div>
            </div>

            <div className="relative h-[360px]">
              <div className="absolute right-20 top-12 h-60 w-60 rounded-full bg-emerald-400/40" />
              <img
                src="/images/lung-screening-doctor.png"
                alt="Doctor holding lung CT scan"
                className="absolute bottom-0 right-8 h-[360px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="relative z-10 bg-white px-5 pb-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[36px] bg-[#f7fcfa] p-6 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[28px] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <card.icon className="mb-4 text-emerald-600" size={30} />
                <h3 className="font-black text-[#063b3b]">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <FooterSection />
      </div>
    </div>
  );
}
