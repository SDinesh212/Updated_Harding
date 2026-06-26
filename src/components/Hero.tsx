import { motion } from "framer-motion";
import {
  Clock3,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Target,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Radiation-Free",
    text: "Safe & advanced imaging",
  },
  {
    icon: Target,
    title: "Comprehensive",
    text: "Brain to pelvis coverage",
  },
  {
    icon: Clock3,
    title: "One Session",
    text: "Fast, comfortable scan",
  },
  {
    icon: HeartPulse,
    title: "Preventive Care",
    text: "Detect early, live better",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#eef8f1] px-4 pt-28 text-[#12383d] sm:px-6 lg:px-8"
    >
      {/* Background video */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Readability overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#f3fbf5]/95 via-[#f3fbf5]/78 to-[#f3fbf5]/12 backdrop-blur-[0.1px]" />

      {/* Soft green depth */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-48 top-32 z-[2] h-[520px] w-[520px] rounded-full  blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.18, 1], x: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-52 top-10 z-[2] h-[620px] w-[620px] rounded-full bg-[#e7f8ec]/28 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-112px)] max-w-[1360px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-[690px]"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#a6dfb8] bg-white/60 px-5 py-2.5 text-[13px] font-extrabold uppercase tracking-wide text-[#0d9b5d] shadow-sm backdrop-blur-xl">
            <ScanLine size={18} />
            Whole-Body MRI
          </div>

          <h1 className="font-serif text-[42px] font-black leading-[1.28] tracking-[-0.035em] text-[#143f35] sm:text-[56px] lg:text-[52px]">
            <span className="block">Preventive Health,</span>
            <span className="block">Reimagined With</span>

            <span className="block bg-gradient-to-r from-[#0c9e5f] via-[#14b873] to-[#42c98e] bg-clip-text text-transparent">
              Whole-Body MRI -
            </span>

            <span className="block">now available at Harding.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[18px] leading-[1.8] text-[#3e665c] sm:text-[20px]">
            A radiation-free, non-invasive scan covering brain to pelvis in a
            single session.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex h-[62px] items-center gap-3 rounded-xl bg-[#143f35] px-8 text-[17px] font-bold text-white shadow-[0_22px_50px_rgba(7,148,84,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#0f3028] hover:shadow-[0_28px_70px_rgba(7,148,84,0.34)]"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>

      {/* Feature bar */}
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="relative z-20 mx-auto mb-10 hidden max-w-[1120px] rounded-[26px] border border-white/80 bg-white/70 px-7 py-6 shadow-[0_28px_80px_rgba(20,63,53,0.11)] backdrop-blur-2xl lg:grid lg:grid-cols-4"
      >
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`flex items-center gap-4 px-5 ${
                index !== features.length - 1
                  ? "border-r border-[#dcefe5]"
                  : ""
              }`}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e4f8eb] text-[#0b9c5d]">
                <Icon size={26} />
              </div>

              <div>
                <h3 className="text-[15px] font-bold text-[#143f35]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[14px] leading-6 text-[#54756c]">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>

      <svg
        className="absolute bottom-0 left-0 z-0 h-[140px] w-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,92 C260,128 480,125 720,88 C940,54 1160,58 1440,22 L1440,140 L0,140 Z"
        />
      </svg>
    </section>
  );
}
