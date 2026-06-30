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
  { icon: ShieldCheck, title: "Bone Health", text: "Density screening" },
  { icon: ScanLine, title: "DEXA Scan", text: "Precise imaging" },
  { icon: Clock3, title: "Quick Exam", text: "Fast appointment" },
  { icon: UserRoundCheck, title: "Expert Review", text: "Trusted care" },
];

const overviewItems = [
  "Screens for osteoporosis and bone thinning.",
  "Assesses fracture risk as bones weaken with age.",
  "Helps doctors decide if treatment is needed.",
  "Quick, painless, and low-dose diagnostic scan.",
];

const serviceCards = [
  {
    icon: ScanLine,
    title: "What Is A Bone Density Test?",
    text: "A DEXA scan uses low-dose X-rays to measure calcium and mineral content in your bones.",
  },
  {
    icon: UserRoundCheck,
    title: "Who Should Have A DEXA Test?",
    text: "Recommended for post-menopausal women, older adults, and patients with higher fracture risk.",
  },
  {
    icon: FileText,
    title: "Why Is A Bone Density Test Done?",
    text: "It helps detect bone loss early, assess fracture risk, and support treatment planning.",
  },
];

const whyCards = [
  {
    icon: ShieldCheck,
    title: "Early Detection",
    text: "Detects bone loss before fractures happen.",
  },
  {
    icon: BadgeCheck,
    title: "Accurate Results",
    text: "Measures bone strength with high precision.",
  },
  {
    icon: Clock3,
    title: "Quick Appointment",
    text: "A simple scan with minimal wait time.",
  },
  {
    icon: HeartPulse,
    title: "Preventive Care",
    text: "Supports long-term bone health planning.",
  },
];

export default function DEXAPage() {
  return (
    <div className="isolate min-h-screen overflow-x-hidden bg-white text-[#073b3a]">
      <Navbar />

      <main className="relative">
        {/* FIXED HERO */}
        <section className="fixed inset-0 z-0 h-screen overflow-hidden bg-[#f4fffb] px-4 pt-24 sm:px-6 sm:pt-28 lg:px-10">
          

          <div className="relative mx-auto grid h-full max-w-7xl items-center gap-6 pb-6 sm:gap-8 sm:pb-8 lg:grid-cols-[0.9fr_1fr] lg:gap-12">
            <div className="service-hero-copy max-w-2xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-600 shadow-sm backdrop-blur sm:mb-6 sm:tracking-[0.25em]">
                <HeartPulse size={15} />
                DEXA Scan
              </span>

              <h1 className="max-w-3xl text-3xl font-black leading-[1.08] text-[#052f35] sm:text-5xl lg:text-6xl">
                Early Detection With{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Bone Density Check
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
                A bone density test checks bone strength to detect osteoporosis
                and fracture risk early. It is quick, painless, uses very low
                radiation, and provides accurate, reliable results.
              </p>

              <div className="mt-8 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center sm:gap-5">
                <a
                  href="/appointment"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#063b3b] px-7 py-4 text-sm font-black text-white shadow-xl shadow-emerald-900/20 transition hover:-translate-y-1 hover:bg-emerald-600 sm:w-auto"
                >
                  Book Appointment
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#overview"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-black text-[#063b3b] shadow-md transition hover:-translate-y-1 hover:shadow-xl sm:w-auto"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400 text-emerald-600">
                    <Play size={16} fill="currentColor" />
                  </span>
                  Learn More
                </a>
              </div>

              <div className="mt-8 hidden max-w-2xl grid-cols-2 overflow-hidden rounded-[24px] bg-white/90 shadow-2xl shadow-emerald-900/10 backdrop-blur sm:mt-10 md:grid md:grid-cols-4 md:rounded-[30px]">
                {heroStats.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-r border-slate-100 p-4 md:border-b-0 lg:p-5"
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

            <div className="service-hero-visual relative hidden lg:block">
              
              <div className="service-float relative rounded-[48px] border border-emerald-300/60 bg-white/70 p-4 shadow-2xl shadow-emerald-900/15 backdrop-blur">
                <img
                  src="/images/dexa-hero.jpg"
                  alt="DEXA bone density scan"
                  className="h-[58vh] max-h-[520px] min-h-[360px] w-full rounded-[38px] object-cover"
                />

                <div className="absolute left-10 top-10 rounded-3xl bg-white/95 p-5 shadow-xl">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-600">
                    Bone Health
                  </p>
                  <h3 className="mt-1 text-xl font-black text-[#063b3b]">
                    Quick & Accurate
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT ABOVE HERO */}
        <section className="service-soft-reveal service-overflow-curve relative z-10 mt-[calc(100vh-1.5rem)] rounded-t-[32px] bg-white px-4 py-16 shadow-[0_-30px_80px_rgba(5,47,53,0.08)] sm:px-6 sm:py-20 sm:rounded-t-[54px] lg:px-10 lg:py-24">
          <div
            id="overview"
            className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-14"
          >
            <img
              src="/images/dexa-bone.jpg"
              alt="Bone density illustration"
              className="h-64 w-full rounded-[28px] object-cover shadow-2xl shadow-emerald-900/10 transition duration-500 hover:scale-[1.02] sm:h-80 sm:rounded-[42px] md:h-[380px] lg:h-[430px]"
            />

            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
                Bone Density Test
              </span>

              <h2 className="mt-4 text-2xl font-black text-[#062f35] sm:text-4xl lg:text-5xl">
                What Is A{" "}
                <span className="text-emerald-600">Bone Density Test?</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                A bone density or DEXA test measures how strong and dense your
                bones are. It is commonly used to detect osteoporosis, assess
                fracture risk, and help doctors plan preventive or treatment
                care.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {overviewItems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl p-2 transition hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm">
                      <CheckCircle2 size={22} />
                    </span>
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 p-6 text-sm font-bold leading-7 text-emerald-700 transition hover:-translate-y-1 hover:shadow-lg">
                Bone density testing helps detect bone loss early and supports
                timely treatment to reduce fracture risk.
              </div>
            </div>
          </div>
        </section>

        {/* EXAM EXPERIENCE */}
        <section className="relative z-10 bg-[#f4fffb] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
              Check Your Bone Health With DEXA
            </span>

            <h2 className="mt-4 text-2xl font-black text-[#062f35] sm:text-4xl">
              A Safe, Proactive, And Painless Way To Measure Bone Strength
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Detect osteoporosis early, understand fracture risk, and support
              long-term bone health with accurate DEXA screening.
            </p>

            <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {serviceCards.map((card) => (
                <div
                  key={card.title}
                  className="service-card-hover rounded-[24px] border border-white bg-white p-6 text-left shadow-xl shadow-emerald-900/5 sm:rounded-[34px] sm:p-8"
                >
                  <span className="service-card-icon mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white">
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

        {/* SEPARATE VIDEO SECTION */}
        <section className="relative z-10 overflow-hidden bg-[#f4fffb] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
                Watch & Learn
              </span>

              <h2 className="mt-4 max-w-xl text-2xl font-black leading-tight text-[#062f35] sm:text-4xl lg:text-5xl">
                Understanding Your{" "}
                <span className="text-emerald-600">DEXA Scan</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Learn how DEXA technology measures bone density, helps identify
                osteoporosis risk, and supports better preventive care planning.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Clear overview of the scan process.",
                  "Understand how bone density is measured.",
                  "Know what to expect before your visit.",
                  "Quick, painless, and low-dose imaging.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-emerald-50 px-4 py-4 text-sm font-bold leading-6 text-slate-600 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={20}
                    />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="/appointment"
                className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#063b3b] px-7 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-emerald-600 sm:w-auto"
              >
                Schedule DEXA Scan
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[46px] bg-gradient-to-br from-emerald-200/60 to-teal-200/60 blur-2xl" />

              <div className="service-video-shell relative overflow-hidden rounded-[26px] bg-[#063b3b] p-2 shadow-2xl shadow-emerald-900/15 sm:rounded-[42px] sm:p-3">
                <div className="relative aspect-video overflow-hidden rounded-[22px] sm:rounded-[32px]">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/Y7aum8ry3y4?si=HwcnTT5UQmjtqoj-"
                    title="What is a DEXA scan video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#063b3b]/20 via-black/10 to-emerald-900/30" />

                  <div
                    aria-hidden="true"
                    className="service-play-pulse pointer-events-none absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-emerald-600 shadow-2xl sm:flex md:h-20 md:w-20 lg:h-24 lg:w-24"
                  >
                    <Play size={30} fill="currentColor" />
                  </div>

                  <div className="pointer-events-none absolute left-4 top-4 hidden rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-600 backdrop-blur sm:block sm:left-6 sm:top-6 sm:px-5 sm:py-3 sm:tracking-[0.2em]">
                    Educational Video
                  </div>

                  <div className="pointer-events-none absolute bottom-4 left-4 right-4 hidden rounded-[22px] bg-white/90 p-4 shadow-xl backdrop-blur sm:block lg:bottom-6 lg:left-6 lg:right-6 lg:rounded-[28px] lg:p-5">
                    <h3 className="text-xl font-black text-[#063b3b]">
                      What is a DEXA Scan?
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      A quick guide to how bone density testing supports
                      osteoporosis prevention and fracture risk assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="relative z-10 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
        >
          <div className="mx-auto grid max-w-6xl items-center overflow-hidden rounded-[28px] bg-gradient-to-r from-[#effaf6] to-[#dff7ee] shadow-2xl shadow-emerald-900/10 sm:rounded-[42px] lg:grid-cols-[1fr_0.9fr]">
            <div className="p-6 sm:p-12">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
                Book Your Visit
              </span>

              <h2 className="mt-4 max-w-xl text-2xl font-black leading-tight text-[#062f35] sm:text-4xl">
                Schedule Your DEXA Scan Appointment Today
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
                Call us now or book online for quick scheduling, expert bone
                density testing, and comfortable preventive care.
              </p>

              <div className="mt-8 grid gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-5">
                <a
                  href="tel:9732210000"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#063b3b] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-xl"
                >
                  Call Now <Phone size={17} />
                </a>

                <span className="text-center font-black text-[#063b3b] sm:text-left">
                  973-221-0000
                </span>
              </div>
            </div>

            <div className="relative hidden h-[300px] sm:block lg:h-[360px]">
              <div className="absolute right-8 top-12 h-52 w-52 rounded-full bg-emerald-400/40 lg:right-20 lg:h-60 lg:w-60" />
              <img
                src="/images/dexa-doctor.png"
                alt="Doctor reviewing DEXA scan"
                className="absolute bottom-0 right-0 h-[300px] object-contain transition duration-500 hover:scale-[1.03] sm:right-8 lg:h-[360px]"
              />
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="relative z-10 bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-5 rounded-[28px] bg-[#f7fcfa] p-4 sm:rounded-[36px] sm:p-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="service-card-hover rounded-[22px] bg-white p-5 shadow-sm sm:rounded-[28px] sm:p-6"
              >
                <card.icon
                  className="service-card-icon mb-4 text-emerald-600"
                  size={30}
                />
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
