import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Brain,
  CircleCheck,
  HeartPulse,
} from "lucide-react";
import ContactSection from "./ContactSection";
import DiagnosticExcellenceSection from "./DiagnosticExcellenceSection";
import FooterSection from "./FooterSection";
import MriRevealSection from "./MriRevealSection";
import PatientTestimonialsSection from "./PatientTestimonialsSection";
import RadiologyServicesSection from "./RadiologyServicesSection";
import { timelinePoints, trustBlocks } from "../data/landing";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function CurvedBackground({ color }: { color: string }) {
  return (
    <>
      <svg
        className="absolute left-0 top-0 z-0 h-[130px] w-full"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,88 C260,24 515,24 760,44 C1010,65 1228,42 1440,8 L1440,130 L0,130 Z"
        />
      </svg>

      <div
        className="absolute inset-x-0 bottom-0 top-[120px] z-0"
        style={{ backgroundColor: color }}
      />
    </>
  );
}

function MriMachineOverlaySection() {
  const { scrollYProgress } = useScroll();
  const machineY = useTransform(scrollYProgress, [0.05, 0.24], [20, -28]);

  const services = [
    {
      eyebrow: "Comfort-first imaging",
      title: "Open MRI",
      description:
        "High-field open MRI imaging in a more accessible, less claustrophobic setting for patients with anxiety, size concerns, or mobility limitations.",
      icon: Activity,
      accent: "#46d7c8",
    },
    {
      eyebrow: "Dense breast clarity",
      title: "3D Breast Imaging",
      description:
        "3D mammography paired with automated breast ultrasound for detailed evaluation and stronger screening confidence.",
      icon: HeartPulse,
      accent: "#24bfff",
    },
    {
      eyebrow: "Fast diagnostic answers",
      title: "CT Scans",
      description:
        "Advanced CT capability for lung screening, cardiac calcium scoring, and urgent diagnostic studies with STAT reporting available.",
      icon: Brain,
      accent: "#9b7cff",
    },
  ];

  return (
    <section
      id="mri-overview"
      className="relative z-20 min-h-[calc(100vh-68px)] overflow-hidden bg-[#061b22] px-4 pb-20 pt-24 text-white sm:px-6 sm:pb-28 md:pb-32 lg:bg-transparent lg:pb-36 lg:pt-24"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_7%,rgba(70,215,200,0.2),transparent_28%),linear-gradient(180deg,rgba(6,27,34,0.92),rgba(6,27,34,0.7)_48%,rgba(6,27,34,0.96))] lg:hidden" />
      <div className="absolute left-1/2 top-[245px] z-0 h-[240px] w-[86%] max-w-[420px] -translate-x-1/2 rounded-[40px] border border-white/10 bg-white/[0.04] shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur lg:hidden" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 mx-auto max-w-[560px] text-center lg:hidden"
      >
        <p className="mx-auto inline-flex rounded-full border border-[#46d7c8]/35 bg-[#46d7c8]/12 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#8ff4eb]">
          Imaging Services
        </p>

        <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-white sm:text-[38px]">
          Advanced diagnostics, shaped around comfort.
        </h2>

        <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-7 text-white/72">
          Open MRI, breast imaging, and CT access presented in a cleaner mobile
          view for quick scanning.
        </p>
      </motion.div>

      <motion.img
        src="/mri machine.png"
        alt="MRI scanner"
        style={{ y: machineY }}
        initial={{ opacity: 0, y: -40, scale: 1.04 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-[265px] z-10 w-[min(760px,162vw)] max-w-none -translate-x-1/2 opacity-100 drop-shadow-[0_34px_68px_rgba(70,215,200,0.26)] sm:top-[280px] sm:w-[min(930px,138vw)] md:top-[260px] md:w-[min(1120px,118vw)] lg:top-[-20px] lg:z-0 lg:w-[min(1500px,125vw)] lg:max-w-full lg:opacity-100 lg:drop-shadow-none"
      />

      <div className="relative z-20 mx-auto mt-[355px] max-w-[1220px] sm:mt-[430px] md:mt-[500px] lg:mt-[540px]">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/14 bg-[#071d24]/88 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-3xl transition-all duration-500 hover:bg-[#092832]/95 sm:p-6 md:p-5 lg:rounded-[34px] lg:bg-[#071d24]/92 lg:p-8 lg:shadow-none lg:hover:-translate-y-4 lg:hover:shadow-[0_60px_120px_rgba(0,0,0,0.48)]"
              >
                <div
                  className="absolute left-5 right-5 top-0 h-[4px] rounded-full shadow-[0_0_30px_rgba(70,215,200,0.55)] lg:left-8 lg:right-8"
                  style={{
                    background: `linear-gradient(90deg, ${service.accent}, #ffffff55, ${service.accent})`,
                  }}
                />

                <div
                  className="absolute right-5 top-5 h-3 w-3 rounded-full lg:right-8 lg:top-8"
                  style={{
                    backgroundColor: service.accent,
                    boxShadow: `0 0 20px ${service.accent}`,
                  }}
                />

                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/[0.04] blur-2xl" />
                <div
                  className="absolute -bottom-20 left-8 h-44 w-44 rounded-full blur-3xl"
                  style={{ backgroundColor: `${service.accent}22` }}
                />

                <div className="relative z-10 flex items-start gap-4 lg:block">
                  <div
                    className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl text-[#061b22] shadow-[0_20px_40px_rgba(70,215,200,0.28)] lg:mb-8 lg:h-16 lg:w-16 lg:rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${service.accent}, #ffffff)`,
                    }}
                  >
                    <Icon size={27} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="text-[12px] font-bold uppercase tracking-[0.14em] lg:text-[13px]"
                      style={{ color: service.accent }}
                    >
                      {service.eyebrow}
                    </p>

                    <h2 className="mt-1 text-[23px] font-extrabold leading-tight text-white sm:text-[25px] lg:mt-3 lg:text-[29px]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="relative z-10 mt-4 text-[15px] leading-7 text-white/72 lg:mt-6 lg:text-[17px] lg:leading-9">
                  {service.description}
                </p>

                <div
                  className="relative z-10 mt-6 inline-flex w-full items-center justify-between gap-3 rounded-full border px-4 py-2.5 text-[14px] font-bold transition group-hover:text-[#062329] sm:w-auto sm:justify-center lg:mt-10 lg:px-5 lg:py-3 lg:text-[15px]"
                  style={{
                    borderColor: `${service.accent}55`,
                    backgroundColor: `${service.accent}18`,
                    color: service.accent,
                  }}
                >
                  Learn more
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 z-10 h-[90px] w-full sm:h-[120px] lg:h-[150px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#dcecf4"
          d="M0,98 C250,42 520,44 760,63 C1020,84 1240,58 1440,18 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}



function TrustSection() {
  return (
    <section
      id="trust"
      className="trust-section relative top-0 z-30 -mt-12 min-h-[calc(100vh-68px)] overflow-hidden px-4 pb-28 pt-24 text-[#12383d] sm:-mt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:sticky lg:-mt-40 lg:pb-32 lg:pt-32 xl:pb-40 xl:pt-40"
    >
      <svg
        className="absolute left-0 top-0 z-0 h-[150px] w-full"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          fill="#f3fbf5"
          d="M0,88 C250,22 510,26 760,54 C1005,82 1208,46 1440,10 L1440,150 L0,150 Z"
        />
      </svg>

      <div className="absolute inset-x-0 bottom-0 top-[120px] z-0 bg-[#f3fbf5]" />
      <div className="absolute inset-x-0 bottom-0 top-[72px] z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(70,215,200,0.08),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(121,201,139,0.11),transparent_34%)]" />

      <div className="trust-layout relative z-10 mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="trust-visual relative"
        >
          <div className="absolute -left-3 -top-3 h-full w-full rounded-[28px] bg-[#79c98b]/14 lg:-left-5 lg:-top-5 lg:rounded-[42px]" />

          <div className="relative overflow-hidden rounded-[30px] bg-white p-2.5 shadow-[0_22px_64px_rgba(31,82,57,0.12)] lg:rounded-[42px] lg:p-3 lg:shadow-[0_28px_76px_rgba(31,82,57,0.12)]">
            <img
              src="/radiology-center.jpg"
              alt="Radiology center patient care room"
              className="trust-photo aspect-[4/3.2] w-full rounded-[22px] object-cover sm:aspect-[16/10] lg:aspect-[4/3.85] lg:rounded-[32px] xl:aspect-[4/4.1]"
            />

            <div className="absolute inset-2.5 rounded-[22px] bg-gradient-to-t from-[#0f3c2b]/45 via-transparent to-transparent lg:inset-3 lg:rounded-[32px]" />

            <div className="absolute bottom-4 left-4 right-4 rounded-[20px] border border-white/70 bg-white/92 p-4 shadow-[0_18px_44px_rgba(31,82,57,0.16)] backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 lg:bottom-7 lg:left-7 lg:right-7 lg:rounded-[26px] lg:p-6 lg:shadow-[0_22px_56px_rgba(31,82,57,0.16)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2f9e63] lg:text-[13px]">
                Since 1989
              </p>
              <p className="mt-1.5 text-[18px] font-extrabold leading-tight text-[#12383d] sm:text-[20px] lg:mt-2 lg:text-[24px]">
                Local imaging care with physician-trusted clarity.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="trust-kicker inline-flex rounded-full bg-white/85 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#2f9e63] shadow-sm lg:text-[13px] lg:tracking-[0.2em]">
            Radiology Center at Harding
          </p>

          <h2 className="trust-title mt-5 text-[32px] font-extrabold leading-tight text-[#12383d] sm:text-[44px] lg:mt-5 lg:text-[56px] xl:mt-6 xl:text-[62px]">
            Trusted care,
            <br />
            guided by clarity.
          </h2>

          <p className="trust-copy mt-5 max-w-[660px] text-[16px] leading-7 text-[#3f6651] lg:mt-4 lg:text-[16px] lg:leading-7 xl:mt-6 xl:text-[17px] xl:leading-8">
            Independent outpatient imaging serving Morris County with advanced
            technology, accessible scheduling, and a smoother experience from
            exam to results.
          </p>

          <div className="trust-list mt-6 grid gap-3 sm:gap-4 lg:mt-6 lg:gap-3 xl:mt-8 xl:gap-4">
            {trustBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="trust-card group relative overflow-hidden rounded-[20px] border border-white/80 bg-white/82 p-4 shadow-[0_14px_42px_rgba(31,82,57,0.09)] backdrop-blur transition hover:bg-white lg:rounded-[22px] lg:p-4 lg:shadow-[0_18px_54px_rgba(31,82,57,0.09)] lg:hover:-translate-y-1 xl:rounded-[24px] xl:p-5"
              >
                <div className="absolute inset-y-0 left-0 w-[5px] bg-gradient-to-b from-[#46d7c8] to-[#79c98b]" />

                <div className="flex gap-4 lg:gap-5">
                  <div className="trust-card-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e4f7eb] text-[#2f9e63] lg:h-11 lg:w-11 lg:rounded-xl xl:h-12 xl:w-12 xl:rounded-2xl">
                    <CircleCheck size={21} />
                  </div>

                  <div>
                    <h3 className="trust-card-title text-[18px] font-extrabold leading-tight text-[#12383d] lg:text-[18px] xl:text-[20px]">
                      {block.title}
                    </h3>
                    <p className="trust-card-copy mt-2 text-[14px] leading-6 text-[#3f6651] lg:mt-1.5 lg:text-[14px] lg:leading-6 xl:mt-2 xl:text-[15px] xl:leading-7">
                      {block.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="#contact"
            className="trust-cta group mt-5 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#12383d] px-7 text-[15px] font-bold text-white shadow-[0_18px_46px_rgba(18,56,61,0.2)] transition hover:bg-[#2f9e63] sm:w-auto lg:mt-5 lg:h-[52px] lg:hover:-translate-y-1 xl:mt-6 xl:h-[54px]"
          >
            More About Us
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      <svg
        className="absolute bottom-0 left-0 z-20 h-[130px] w-full"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
      >
        <path
          fill="#0b4f55"
          d="M0,96 C260,44 520,42 760,68 C1010,96 1220,64 1440,24 L1440,130 L0,130 Z"
        />
      </svg>
    </section>
  );
}

function WholeBodyMriSection() {
  return (
    <section
      id="whole-body"
      className="sticky top-0 z-40 -mt-16 min-h-[calc(100vh-68px)] overflow-hidden px-4 pb-32 pt-36 text-white sm:px-6 lg:-mt-28 lg:pb-40 lg:pt-40"
    >
      <CurvedBackground color="#0b4f55" />

      <div className="pointer-events-none absolute inset-0 z-10 medical-grid opacity-35" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_18%,rgba(70,215,200,0.18),transparent_32%),radial-gradient(circle_at_86%_20%,rgba(121,201,139,0.16),transparent_34%)]" />
      <div className="absolute right-[-180px] bottom-[-180px] z-0 h-[520px] w-[520px] rounded-full border-[70px] border-[#46d7c8]/10" />

      <div className="relative z-20 mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative border-l border-[#7ff0e5]/25 pl-7 sm:pl-10"
        >
          <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[#7ff0e5] shadow-[0_0_24px_rgba(127,240,229,0.86)]" />

          <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#7ff0e5]">
            Whole-Body MRI at Harding
          </p>

          <h2 className="mt-4 text-[34px] font-extrabold leading-tight sm:text-[48px] lg:text-[58px]">
            Comprehensive.
            <br />
            Radiation-free.
            <br />
            One session.
          </h2>

          <p className="mt-6 max-w-[640px] text-[17px] leading-8 text-white/78">
            Whole-Body MRI produces detailed views of internal anatomy without
            radiation. It is designed for patients seeking a broader preventive
            health assessment and physicians who need a wider diagnostic
            picture.
          </p>

          <div className="mt-8 grid gap-4">
            {timelinePoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-[15px] leading-7 text-white/84 backdrop-blur"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7ff0e5] shadow-[0_0_16px_rgba(127,240,229,0.8)]" />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>

          <a
            href="#contact"
            className="group mt-9 inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#7ff0e5] px-6 text-[15px] font-bold text-[#07303c] shadow-[0_0_40px_rgba(127,240,229,0.28)] transition hover:-translate-y-1 hover:bg-white"
          >
            Schedule a Consultation
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[300px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[520px]"
        >
          <div className="absolute -left-3 -top-3 h-full w-full rounded-[30px] bg-[#7ff0e5]/12 lg:-left-5 lg:-top-5 lg:rounded-[34px]" />

          <div className="relative aspect-[4/4.75] overflow-hidden rounded-[28px] border border-white/13 bg-[#041f26]/70 p-3 shadow-[0_34px_84px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:aspect-[4/4.85] lg:aspect-[4/5] lg:rounded-[34px] lg:bg-white/[0.08] lg:p-4">
            <img
              src="https://cdn.prod.website-files.com/653836f64e8770bb2190b74d/699d88170d178e970f075818_scan.webp"
              alt="Animated whole-body MRI scan visualization"
              className="h-full w-full rounded-[20px] object-cover object-center lg:rounded-[24px]"
            />
          </div>

          <div className="absolute bottom-5 left-1/2 whitespace-nowrap rounded-full border border-[#7ff0e5]/40 bg-[#063f43]/88 px-4 py-2 text-[13px] font-bold text-[#bdfbf5] shadow-[0_16px_42px_rgba(0,0,0,0.22)] backdrop-blur -translate-x-1/2 lg:bottom-auto lg:left-auto lg:-right-2 lg:top-8 lg:translate-x-0">
            Live scan review
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export default function ScrollOverlaySections() {
  return (
    <div className="relative z-20">
      <MriMachineOverlaySection />
      <TrustSection />
      <WholeBodyMriSection />

      <div className="relative z-50 bg-white">
        <MriRevealSection />
        <DiagnosticExcellenceSection />
        <RadiologyServicesSection />
        <PatientTestimonialsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}
