import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Phone,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

const heroBenefits = [
  { icon: ShieldCheck, title: "No Radiation" },
  { icon: Clock3, title: "45-Minute Scan" },
  { icon: UsersRound, title: "Whole Body Coverage" },
  { icon: ScanLine, title: "Same-Day Reports" },
];

const stats = [
  { icon: CalendarDays, value: "35+", label: "Years of Imaging Care" },
  { icon: UsersRound, value: "50,000+", label: "Patients Served" },
  { icon: Brain, value: "100,000+", label: "MRI Scans Performed" },
  { icon: ShieldCheck, value: "98%", label: "Patient Satisfaction" },
];

const comfortItems = [
  {
    icon: ScanLine,
    title: "High-Field Imaging",
    text: "Exceptional detail and clarity",
  },
  {
    icon: UsersRound,
    title: "Open & Spacious Environment",
    text: "Reduces anxiety and increases comfort",
  },
  {
    icon: UserRoundCheck,
    title: "Real-Time Communication",
    text: "We’re with you throughout",
  },
  {
    icon: Clock3,
    title: "Fast & Accurate Results",
    text: "Same-day reports in most cases",
  },
];

const coverageLeft = [
  {
    title: "Brain",
    text: "Detects tumors, aneurysms, multiple sclerosis & more",
  },
  {
    title: "Heart",
    text: "Evaluates structure, function & major blood vessels",
  },
  {
    title: "Liver",
    text: "Detects lesions, tumors & fatty liver disease",
  },
];

const coverageRight = [
  {
    title: "Spine",
    text: "Identifies disc issues, stenosis & abnormalities",
  },
  {
    title: "Kidneys",
    text: "Detects cysts, tumors & kidney disease",
  },
  {
    title: "Pelvis",
    text: "Evaluates reproductive organs & bladder",
  },
];

const whyCards = [
  {
    image: "/images/wbmri-tech.jpg",
    title: "Advanced Technology",
    text: "High-field MRI with cutting-edge imaging for unparalleled accuracy.",
  },
  {
    image: "/images/wbmri-review.jpg",
    title: "Expert Radiologists",
    text: "Board-certified radiologists with specialized MRI expertise.",
  },
  {
    image: "/images/wbmri-ai.jpg",
    title: "AI-Powered Insights",
    text: "AI-assisted detection for better accuracy and early insights.",
  },
  {
    image: "/images/wbmri-care.jpg",
    title: "Patient-First Care",
    text: "Your comfort, safety, and peace of mind always come first.",
  },
];

const pricingPlans = [
  {
    title: "Comprehensive Whole Body MRI",
    badge: "Most Popular",
    time: "45 Minutes Scan",
    price: "$1,999",
    features: [
      "Whole body imaging",
      "Brain, spine, chest, abdomen, pelvis",
      "Vascular & organ assessment",
      "Body composition analysis",
      "AI-assisted report + radiologist review",
      "Same-day results in most cases",
    ],
  },
  {
    title: "Quick Whole Body MRI",
    badge: "",
    time: "25 Minutes Scan",
    price: "$999",
    features: [
      "Torso imaging",
      "Major organs assessment",
      "Early detection screening",
      "AI-assisted report",
      "Same-day results in most cases",
    ],
  },
];

const journey = [
  { title: "Book", text: "Schedule your appointment online or by phone" },
  { title: "Prepare", text: "Simple instructions to help you get ready" },
  { title: "Scan", text: "Comfortable scan in our open MRI environment" },
  { title: "Review", text: "Radiologist reviews your images with expertise" },
  { title: "Results", text: "Detailed report often available the same day" },
  { title: "Consult", text: "Share results with your doctor & plan next steps" },
];

export default function WholeBodyMRIPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#062f35]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f5fffc] to-[#e6f8f4] px-5 pb-14 pt-32 lg:px-10">
          <div className="absolute right-0 top-0 h-full w-[56%] bg-[#dff5f0]" />
          <div className="absolute right-10 bottom-10 hidden h-[250px] w-[250px] rounded-full bg-[#46d7c8]/20 blur-3xl lg:block" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0a9b8c]">
                Whole-Body MRI
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                Whole-Body MRI For{" "}
                <span className="text-[#0a9b8c]">Preventive Insight</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#315866]">
                Radiation-free, high-resolution imaging designed to detect
                potential health concerns early — when they’re most treatable.
              </p>

              <div className="mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
                {heroBenefits.map((item) => (
                  <div key={item.title} className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5f8f5] text-[#0a9b8c]">
                      <item.icon size={22} />
                    </span>
                    <p className="text-sm font-black">{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#073b3b] px-7 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#0a9b8c]"
                >
                  Book Your MRI Scan
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#experience"
                  className="inline-flex items-center gap-3 rounded-xl border border-[#0a9b8c]/25 bg-white px-7 py-4 text-sm font-black text-[#073b3b] shadow-sm transition hover:-translate-y-1"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/whole-body-mri-hero.jpg"
                alt="Whole body MRI scan"
                className="h-[560px] w-full rounded-bl-[120px] object-cover"
              />

              <div className="absolute bottom-10 right-8 max-w-[320px] rounded-[28px] bg-[#073b3b] p-6 text-white shadow-2xl">
                <h3 className="text-lg font-black">Why Patients Choose Us</h3>

                <div className="mt-4 grid gap-3 text-sm text-white/80">
                  {[
                    "Advanced MRI Technology",
                    "Board-Certified Radiologists",
                    "Comfortable Experience",
                    "Accurate, Actionable Results",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={17} className="text-[#46d7c8]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="relative mx-auto mt-12 max-w-7xl rounded-[26px] bg-[#073b3b] p-6 text-white shadow-2xl">
            <div className="grid gap-6 md:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-5 border-white/10 md:border-r last:border-r-0"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#46d7c8]">
                    <item.icon size={28} />
                  </span>

                  <div>
                    <h3 className="text-3xl font-black">{item.value}</h3>
                    <p className="mt-1 text-sm font-semibold text-white/75">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="px-5 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0a9b8c]">
                Advanced Comfort & Technology
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                A Better Experience From Start To Finish
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#315866]">
                Our open, spacious MRI environment and advanced imaging
                technology work together to deliver unmatched clarity and
                comfort.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {comfortItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#d8f1ed] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <item.icon className="text-[#0a9b8c]" size={28} />
                    <h3 className="mt-4 font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#315866]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/whole-body-mri-comfort.jpg"
                alt="Comfortable MRI experience"
                className="h-[470px] w-full rounded-[34px] object-cover shadow-2xl"
              />

              <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#46d7c8] text-[#073b3b]">
                    <Sparkles />
                  </span>
                  <div>
                    <h3 className="font-black">Spacious. Comfortable. Calm.</h3>
                    <p className="text-sm text-[#315866]">
                      Designed for your comfort at every step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BODY COVERAGE */}
        <section className="bg-[#f7fffc] px-5 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0a9b8c]">
                Complete Body Coverage
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight">
                One Scan. Total Confidence.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-[#315866]">
                Our whole-body MRI evaluates major organs, tissues, and systems
                in a single session for a comprehensive view of your health.
              </p>

              <a
                href="#pricing"
                className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#0a9b8c] px-6 py-4 text-sm font-black text-[#073b3b] transition hover:bg-[#073b3b] hover:text-white"
              >
                Explore Full Coverage
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="grid items-center gap-6 lg:grid-cols-[1fr_260px_1fr]">
              <div className="grid gap-4">
                {coverageLeft.map((item) => (
                  <CoverageCard key={item.title} {...item} />
                ))}
              </div>

              <img
                src="/images/body-map.png"
                alt="Whole body coverage map"
                className="mx-auto h-[420px] object-contain"
              />

              <div className="grid gap-4">
                {coverageRight.map((item) => (
                  <CoverageCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="px-5 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0a9b8c]">
                Why Choose Harding MRI
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight">
                Technology. Expertise. Compassion.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyCards.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[24px] border border-[#d8f1ed] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-44 w-full object-cover"
                  />

                  <div className="p-5">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#46d7c8] text-[#073b3b]">
                      <Sparkles size={22} />
                    </span>

                    <h3 className="font-black">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#315866]">
                      {card.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-[#fbfffd] px-5 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0a9b8c]">
                Simple, Transparent Pricing
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Choose The Right Plan For You
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1fr_1fr_0.75fr]">
              <img
                src="/images/whole-body-mri-price.jpg"
                alt="MRI pricing"
                className="h-full min-h-[440px] rounded-3xl object-cover shadow-xl"
              />

              {pricingPlans.map((plan) => (
                <article
                  key={plan.title}
                  className="rounded-3xl border border-[#d8f1ed] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black">{plan.title}</h3>

                    {plan.badge && (
                      <span className="rounded-full bg-[#46d7c8] px-3 py-1 text-[11px] font-black text-[#073b3b]">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm font-bold text-[#315866]">
                    {plan.time}
                  </p>

                  <h4 className="mt-5 text-4xl font-black">
                    {plan.price}
                    <span className="ml-2 text-sm">USD</span>
                  </h4>

                  <div className="mt-6 grid gap-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm font-semibold leading-6 text-[#315866]"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-[#0a9b8c]"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href="/appointment"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#073b3b] px-6 py-4 text-sm font-black text-white transition hover:bg-[#0a9b8c]"
                  >
                    Book This Plan
                  </a>
                </article>
              ))}

              <div className="rounded-3xl border border-[#d8f1ed] bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black">What’s Included</h3>

                <div className="mt-6 grid gap-4">
                  {[
                    "No Radiation",
                    "Comfortable Experience",
                    "Advanced Technology",
                    "Expert Radiologist Review",
                    "Secure & Private",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-bold text-[#315866]"
                    >
                      <CheckCircle2 size={18} className="text-[#0a9b8c]" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-slate-100 pt-6">
                  <h4 className="font-black">Questions?</h4>
                  <p className="mt-2 text-sm text-[#315866]">
                    Call us anytime
                  </p>

                  <a
                    href="tel:9732210003"
                    className="mt-4 inline-flex items-center gap-3 text-xl font-black text-[#0a9b8c]"
                  >
                    <Phone size={22} />
                    973-221-0003
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="px-5 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0a9b8c]">
              Your Journey With Us
            </p>

            <h2 className="mt-4 text-3xl font-black">From Booking To Results</h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
              {journey.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#0a9b8c]/30 bg-[#e9f8f5] text-[#0a9b8c]">
                    <ScanLine size={24} />
                  </span>

                  <h3 className="mt-5 font-black">
                    {index + 1}. {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#315866]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="px-5 pb-20 lg:px-10">
          <div className="mx-auto overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0a9b8c] to-[#073b3b] p-8 text-white shadow-2xl lg:max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <h2 className="text-3xl font-black">
                  Take Control Of Your Health Today
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
                  Early detection saves lives. A whole-body MRI can help you
                  understand your health like never before.
                </p>

                <a
                  href="tel:9732210003"
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-black text-[#073b3b] transition hover:-translate-y-1"
                >
                  Schedule Your MRI Scan
                  <ArrowRight size={17} />
                </a>
              </div>

              <img
                src="/images/whole-body-mri-cta.jpg"
                alt="Schedule whole body MRI"
                className="h-[220px] w-full rounded-3xl object-cover opacity-90"
              />
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

function CoverageCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e9f8f5] text-[#0a9b8c]">
          <ShieldCheck size={22} />
        </span>

        <div>
          <h3 className="font-black">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-[#315866]">{text}</p>
        </div>
      </div>
    </div>
  );
}
