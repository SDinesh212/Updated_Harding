import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  Phone,
  Play,
  ScanLine,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

const heroStats = [
  { icon: ShieldCheck, title: "Open Design", text: "Comfort-first scan" },
  { icon: Brain, title: "Clear Imaging", text: "High-quality results" },
  { icon: Clock3, title: "Fast Scheduling", text: "Easy appointments" },
  { icon: UserRoundCheck, title: "Expert Team", text: "Certified care" },
];

const overviewItems = [
  "Spacious, non-claustrophobic MRI experience.",
  "Ideal for brain, spine, joints, and soft tissue imaging.",
  "Comfort-focused scan with high diagnostic clarity.",
  "Safe imaging without ionizing radiation.",
];

const serviceCards = [
  {
    icon: Brain,
    title: "Comfort-Focused MRI",
    text: "Open MRI helps patients feel more relaxed during imaging, especially those who feel uncomfortable in enclosed scanners.",
  },
  {
    icon: ScanLine,
    title: "Detailed Imaging",
    text: "Advanced MRI technology captures detailed images of internal structures for accurate diagnosis.",
  },
  {
    icon: Activity,
    title: "Whole Body Support",
    text: "Useful for brain, spine, joints, soft tissue, abdomen, pelvis, and other diagnostic needs.",
  },
];

const whyCards = [
  {
    icon: ShieldCheck,
    title: "No Radiation",
    text: "MRI uses magnetic fields and radio waves, not ionizing radiation.",
  },
  {
    icon: Clock3,
    title: "Smooth Appointment",
    text: "A simple process designed to reduce stress and improve comfort.",
  },
  {
    icon: ScanLine,
    title: "Clear Results",
    text: "High-quality diagnostic images for confident physician reporting.",
  },
  {
    icon: UserRoundCheck,
    title: "Expert Review",
    text: "Your images are reviewed by experienced radiology professionals.",
  },
];

export default function OpenMRIPage() {
  return (
    <div className="isolate min-h-screen overflow-x-hidden bg-white text-[#073b3a]">
      <Navbar />

      <main className="relative">
        {/* FIXED HERO */}
        <section className="fixed inset-0 z-0 h-screen overflow-hidden bg-[#f4fffb] px-5 pt-28 lg:px-10">
          
          <div className="relative mx-auto grid h-full max-w-7xl items-center gap-8 pb-8 lg:grid-cols-[0.9fr_1fr] lg:gap-12">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-600 shadow-sm backdrop-blur">
                <ShieldCheck size={15} />
                Open MRI
              </span>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.08] text-[#052f35] sm:text-5xl lg:text-6xl">
                Open MRI For{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Precise Diagnosis
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Our Open MRI system delivers high-quality diagnostic images in a
                spacious, non-claustrophobic design, helping patients feel
                relaxed while ensuring clear and accurate results.
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
              <div className=" service-float relative rounded-[48px] border border-emerald-300/60 bg-white/70 p-4 shadow-2xl shadow-emerald-900/15 backdrop-blur">
                <img
                  src="/images/open-mri-hero.jpg"
                  alt="Open MRI scan room"
                  className="h-[58vh] max-h-[520px] min-h-[360px] w-full rounded-[38px] object-cover"
                />

                <div className="absolute left-10 top-10 rounded-3xl bg-white/95 p-5 shadow-xl">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-600">
                    Open MRI
                  </p>
                  <h3 className="mt-1 text-xl font-black text-[#063b3b]">
                    Comfort & Clarity
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT OVER HERO */}
        <section className="service-overflow-curve relative z-10 mt-[calc(100vh-1.5rem)] rounded-t-[54px] bg-white px-5 py-24 shadow-[0_-30px_80px_rgba(5,47,53,0.08)] lg:px-10">
          <div
            id="overview"
            className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1fr]"
          >
            <img
              src="/images/open-mri-machine.png"
              alt="Open MRI machine"
              className="h-[430px] w-full rounded-[42px] bg-[#f4fffb]  object-contain p-8 shadow-2xl shadow-emerald-900/10"
            />

            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
                Hitachi Altaire
              </span>

              <h2 className="mt-4 text-3xl font-black text-[#062f35] sm:text-5xl">
                Advanced Comfort-Focused{" "}
                <span className="text-emerald-600">Open MRI</span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The Hitachi Altaire high-field Open MRI delivers exceptional
                image quality while maintaining a spacious, open design. This
                helps reduce anxiety and supports a more comfortable scan
                experience.
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
                Our system has also been upgraded with advanced software to
                improve clarity and diagnostic accuracy.
              </div>
            </div>
          </div>
        </section>

        {/* CLOSER LOOK */}
        <section className="relative z-10 bg-[#f4fffb] px-5 py-24 lg:px-10">
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
              A Closer Look
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#062f35] sm:text-4xl">
              Clear Diagnostic Imaging With Better Patient Comfort
            </h2>

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
                Schedule Your Open MRI Appointment Today
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
                Call us now or book online for a comfortable imaging experience,
                clear results, and expert radiology care.
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
                src="/images/open-mri-doctor.png"
                alt="Doctor holding MRI scan"
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
