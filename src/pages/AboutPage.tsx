import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

const stats = [
  { icon: CalendarDays, value: "35+", label: "Years of Imaging Care" },
  { icon: Clock3, value: "Same-Day", label: "Reports Available" },
  { icon: ShieldCheck, value: "Board-Certified", label: "Radiologists" },
  { icon: UsersRound, value: "One Center", label: "Complete Imaging" },
];

const careItems = [
  {
    icon: HeartHandshake,
    title: "Patient-First Care",
    text: "Comfort, respect and compassion always",
  },
  {
    icon: ScanLine,
    title: "Advanced Imaging",
    text: "Modern technology for precise results",
  },
  {
    icon: Clock3,
    title: "Timely Reporting",
    text: "Same-day reports for faster decisions",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    text: "Board-certified radiologists",
  },
];

const services = [
  "CT Scan",
  "MRI",
  "Mammogram & 3D Mammography",
  "DEXA & Bone Density Scan",
  "CT Lung Screening",
  "Breast Ultrasound & 3D Breast Ultrasound",
  "CT Cardiac Scoring",
  "X-Ray",
  "Ultrasound",
  "Whole Body MRI",
];

const trustStats = [
  { value: "50,000+", label: "Patients Served" },
  { value: "100,000+", label: "Imaging Exams" },
  { value: "Same-Day", label: "Reports Available" },
  { value: "35+", label: "Years of Trusted Care" },
];

export default function AboutPage() {
  return (
    <div className="isolate min-h-screen overflow-x-hidden bg-white text-[#082f35]">
      <Navbar />

      <main className="relative">
        {/* HERO */}
        <section className="fixed inset-0 z-0 h-screen overflow-hidden bg-[#f4fffb] px-4 pt-24 sm:px-6 sm:pt-28 lg:px-10">
          <div className="absolute inset-0 medical-grid opacity-[0.04]" />

          <div className="relative mx-auto grid h-full max-w-7xl items-center gap-8 pb-8 lg:grid-cols-[0.9fr_1fr] lg:gap-12">
            <div className="service-hero-copy max-w-2xl">
              <p className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#0a9b8c] shadow-sm backdrop-blur sm:tracking-[0.28em]">
                About Harding Radiology
              </p>

              <h1 className="mt-6 max-w-3xl text-3xl font-black leading-[1.08] text-[#062f35] sm:text-5xl lg:text-6xl">
                Complete Imaging.
                <br />
                Complete{" "}
                <span className="bg-gradient-to-r from-[#12a694] to-[#46d7c8] bg-clip-text text-transparent">
                  Peace Of Mind.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#315866] sm:mt-6 sm:text-base sm:leading-8">
                At Radiology Center At Harding, our mission is to provide
                accurate, timely diagnostic imaging in an environment where
                every patient feels respected and every referring physician can
                trust the results.
              </p>

              <div className="mt-8 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center sm:gap-5">
                <a
                  href="/appointment"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#063b3b] px-7 py-4 text-sm font-black text-white shadow-2xl shadow-[#063b3b]/20 transition hover:-translate-y-1 hover:bg-[#0a9b8c] sm:w-auto"
                >
                  Book an Appointment
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#mission"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#0a9b8c]/20 bg-white/80 px-7 py-4 text-sm font-black text-[#063b3b] shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:w-auto"
                >
                  Learn More About Us
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="mt-8 hidden max-w-2xl grid-cols-2 overflow-hidden rounded-[24px] bg-white/90 shadow-2xl shadow-emerald-900/10 backdrop-blur sm:mt-10 md:grid md:grid-cols-4 md:rounded-[30px]">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-r border-slate-100 p-4 md:border-b-0 lg:p-5"
                  >
                    <item.icon className="mb-3 text-[#0a9b8c]" size={24} />
                    <h3 className="text-sm font-black text-[#063b3b]">
                      {item.value}
                    </h3>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-hero-visual relative hidden lg:block">
              <div className="absolute -inset-5 rounded-[52px] bg-[#46d7c8]/20 blur-3xl" />

              <div className="service-float relative overflow-hidden rounded-[48px] border border-emerald-300/60 bg-white/70 p-4 shadow-2xl shadow-[#063b3b]/15 backdrop-blur">
                <img
                  src="/images/about-hero.jpg"
                  alt="Radiology imaging center"
                  className="h-[58vh] max-h-[520px] min-h-[360px] w-full rounded-[38px] object-cover"
                />
              </div>

              <div className="absolute bottom-8 right-8 rounded-[28px] border border-white/20 bg-[#063b3b]/95 p-6 text-white shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#46d7c8] text-[#063b3b]">
                    <ShieldCheck size={30} />
                  </span>

                  <div>
                    <h3 className="font-black">Physician-Led</h3>
                    <p className="mt-1 text-sm text-white/75">
                      Outpatient Imaging Center
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section
          id="mission"
          className="service-overflow-curve relative z-10 mt-[calc(100vh-1.5rem)] rounded-t-[54px] bg-white px-5 py-24 shadow-[0_-30px_80px_rgba(5,47,53,0.08)] lg:px-10"
        >
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative">
              <div className="absolute -left-5 bottom-[-20px] h-44 w-44 rounded-[36px] bg-[#0a9b8c]" />

              <img
                src="/images/about-care.jpg"
                alt="Patient-first care"
                className="relative h-[520px] w-full rounded-[40px] object-cover shadow-2xl shadow-[#063b3b]/10"
              />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-[#0a9b8c]">
                Our Mission
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#062f35] sm:text-5xl">
                Patient-First{" "}
                <span className="text-[#28b8a8]">Care</span> Philosophy
              </h2>

              <p className="mt-6 text-base leading-8 text-[#315866]">
                We understand that coming in for an imaging study is rarely a
                routine event. For most patients, it follows a concern raised by
                their doctor, a symptom they have been managing, or a question
                that needs answering.
              </p>

              <p className="mt-5 text-base leading-8 text-[#315866]">
                From the moment you call to schedule through the time your
                results reach your physician, our team is focused on making the
                process clear, efficient, and stress-free.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {careItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-[#d8f1ed] bg-white p-6 shadow-lg shadow-[#063b3b]/5 transition hover:-translate-y-2 hover:shadow-xl"
                  >
                    <item.icon className="text-[#0a9b8c]" size={36} />

                    <h3 className="mt-5 text-base font-black text-[#062f35]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#315866]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="relative z-10 bg-white px-5 py-12 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#063b3b] p-8 text-white shadow-2xl shadow-[#063b3b]/20 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.34em] text-[#46d7c8]">
                  Comprehensive Imaging
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight lg:text-5xl">
                  Services Under One Roof
                </h2>

                <p className="mt-6 max-w-md text-base leading-8 text-white/75">
                  We offer a full spectrum of outpatient diagnostic imaging,
                  available under one roof, reported by the same experienced
                  team, and supported by our integrated digital imaging system.
                </p>

                <a
                  href="#services"
                  className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-[#46d7c8] px-7 py-4 text-sm font-black text-[#063b3b] transition hover:-translate-y-1 hover:bg-white"
                >
                  Explore Our Services
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {services.map((service) => (
                  <div
                    key={service}
                    className="group rounded-[26px] border border-[#46d7c8]/25 bg-white/[0.04] p-5 text-center backdrop-blur transition hover:-translate-y-2 hover:border-[#46d7c8]/70 hover:bg-white/[0.08]"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#46d7c8]/10 text-[#46d7c8] transition group-hover:bg-[#46d7c8] group-hover:text-[#063b3b]">
                      <ScanLine size={30} />
                    </div>

                    <h3 className="mt-5 text-sm font-black leading-5">
                      {service}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="relative z-10 bg-white px-5 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_0.95fr_0.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0a9b8c]">
                Why Patients & Physicians Trust Us
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#062f35]">
                Experience. Technology. Compassion.
              </h2>

              <div className="mt-8 grid gap-4">
                {[
                  "State-of-the-art imaging technology",
                  "Comfortable, safe, and patient-focused environment",
                  "Accurate results delivered on time",
                  "Dedicated support every step of the way",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-[#f4fffb] px-4 py-3 text-sm font-bold text-[#315866]"
                  >
                    <CheckCircle2 size={20} className="text-[#0a9b8c]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 overflow-hidden rounded-[36px] bg-white shadow-2xl shadow-[#063b3b]/10">
              {trustStats.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-r border-slate-100 p-8 last:border-r-0"
                >
                  <UsersRound className="mb-5 text-[#0a9b8c]" size={32} />
                  <h3 className="text-3xl font-black text-[#062f35]">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-[#315866]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <img
              src="/radiology-center.jpg"
              alt="Harding Radiology building"
              className="h-[440px] w-full rounded-[36px] object-cover shadow-2xl shadow-[#063b3b]/15"
            />
          </div>
        </section>

        {/* REFERRAL */}
        <section
          id="contact"
          className="relative z-10 bg-white px-5 pb-24 lg:px-10"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[38px] bg-gradient-to-r from-[#f0fffb] to-[#e6f8f5] p-8 shadow-xl shadow-[#063b3b]/5 md:grid-cols-[0.95fr_1fr_auto]">
            <div className="flex items-center gap-6">
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white text-[#0a9b8c] shadow-lg">
                <Stethoscope size={42} />
              </span>

              <h2 className="text-3xl font-black leading-tight text-[#062f35]">
                A Trusted Referral Partner For Physicians Across The Region
              </h2>
            </div>

            <p className="text-base leading-8 text-[#315866]">
              Physicians across Morris and Somerset Counties refer their
              patients to Harding Radiology knowing they will receive prompt
              scheduling, accurate imaging, and same-day reports as standard.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#0a9b8c] bg-white px-7 py-4 text-sm font-black text-[#062f35] transition hover:-translate-y-1 hover:bg-[#073b3b] hover:text-white"
            >
              Partner With Us
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <FooterSection />
      </div>
    </div>
  );
}
