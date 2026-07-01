import { motion } from "framer-motion";
import {
  Clock3,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

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
      className="relative min-h-screen overflow-hidden bg-[#eef8f1] px-4 pb-14 pt-28 text-[#12383d] sm:px-6 sm:pb-16 lg:px-8"
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

      {/* Dark + green overlay like reference */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#eef8f1]/90 via-[#eef8f1]/55 to-black/35" />
      <div className="absolute inset-0 z-[2] bg-black/10" />

      {/* Soft animated depth */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-48 top-32 z-[3] h-[520px] w-[520px] rounded-full bg-[#daf4e3]/25 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.18, 1], x: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-52 top-10 z-[3] h-[620px] w-[620px] rounded-full bg-[#e7f8ec]/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-112px)] max-w-[1360px] items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-[1050px]"
        >
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#a6dfb8] bg-white/65 px-4 py-2.5 text-[12px] font-extrabold uppercase tracking-wide text-[#0d9b5d] shadow-sm backdrop-blur-xl sm:mb-7 sm:gap-3 sm:px-5 sm:text-[13px]">
            <ScanLine size={18} />
            Whole-Body MRI
          </div>

          <h1 className="max-w-[1080px] font-serif text-[38px] font-black leading-[1.16] tracking-[-0.04em] text-[#143f35] sm:text-[54px] lg:text-[66px]">
            Preventive Health, Reimagined with{" "}
            <span className="bg-gradient-to-r from-[#0c9e5f] via-[#14b873] to-[#42c98e] bg-clip-text text-transparent">
              Whole-Body MRI
            </span>{" "}
            — now available at Harding.
          </h1>

          <p className="mt-8 max-w-[820px] text-[18px] leading-[1.7] text-[#315f55] sm:text-[22px]">
            A radiation-free, non-invasive scan covering brain to pelvis in a
            single session.
          </p>

          <Link
            to="/appointment"
            className="mt-10 inline-flex h-[60px] items-center justify-center rounded-lg bg-[#143f35] px-10 text-[17px] font-bold text-white shadow-[0_20px_50px_rgba(20,63,53,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d2d25]"
          >
            Book Your Appointment
          </Link>
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
        className="absolute bottom-0 left-0 z-0 h-[56px] w-full sm:h-[84px] lg:h-[140px]"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,68 C360,38 1080,38 1440,68 L1440,140 L0,140 Z"
        />
      </svg>
    </section>
  );
}