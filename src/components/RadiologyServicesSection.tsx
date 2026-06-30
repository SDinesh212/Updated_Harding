import { motion } from "framer-motion";
import {
  ArrowRight,
  Bone,
  Brain,
  Clock3,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Star,
  UserRoundCheck,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "3D Mammography",
    href: "/3d-mammography",
    tag: "Breast Screening",
    description:
      "Tomosynthesis-based breast imaging for greater sensitivity, fewer false positives, and confident screening for dense tissue.",
    icon: ShieldCheck,
  },
  {
    title: "Open MRI",
    href: "/open-mri",
    tag: "Comfort-First Imaging",
    description:
      "High-field Open MRI designed for patient comfort while delivering exceptional image quality.",
    icon: Brain,
  },
  {
    title: "CT Scans",
    href: "/ct-scan",
    tag: "Fast Diagnostic Answers",
    description:
      "Low-dose CT, lung cancer screening, cardiac calcium scoring, and urgent diagnostic studies.",
    icon: ScanLine,
  },
  {
    title: "Ultrasound",
    href: "/ultrasound",
    tag: "Real-Time Imaging",
    description:
      "Abdominal, pelvic, vascular, musculoskeletal, and soft-tissue ultrasound examinations.",
    icon: Waves,
  },
  {
    title: "X-Ray",
    href: "/services/x-ray",
    tag: "Digital Radiography",
    description:
      "Digital X-ray imaging for chest, spine, bone, and abdominal studies with rapid reporting.",
    icon: Bone,
  },
  {
    title: "DEXA Scan",
    href: "/dexa-scan",
    tag: "Bone Health",
    description:
      "Advanced bone density testing for osteoporosis screening and preventive bone care.",
    icon: HeartPulse,
  },
];

const stats = [
  {
    icon: ShieldCheck,
    value: "99%",
    title: "Accuracy",
    text: "High diagnostic accuracy",
  },
  {
    icon: Clock3,
    value: "30 Min",
    title: "Appointments",
    text: "Average imaging time",
  },
  {
    icon: UserRoundCheck,
    value: "Expert",
    title: "Team",
    text: "Certified radiologists",
  },
  {
    icon: Star,
    value: "Same-Day",
    title: "Results",
    text: "For most routine exams",
  },
];

export default function RadiologyServicesSection() {
  const featured = services[0];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#eef9fc] px-4 py-24 text-[#12383d] sm:px-6 lg:py-32"
    >
     
      <div className="relative mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[820px] text-center"
        >
          <p className="text-[13px] font-black uppercase tracking-[0.38em] text-[#0f9f91]">
            Harding Radiology Services
          </p>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#46d7c8]" />

          <h2 className="mt-5 text-[38px] font-black leading-tight text-[#12383d] sm:text-[58px] lg:text-[64px]">
            One center. Complete{" "}
            <span className="text-[#0f9f91]">diagnostic clarity.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-8 text-[#3c6571] sm:text-[18px]">
            A complete outpatient imaging experience designed for comfort,
            accuracy, and coordinated physician reporting.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-7 lg:grid-cols-[0.92fr_1.08fr]">
          {/* LEFT LIST */}
          <div className="grid gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <Link
                    to={service.href}
                    className="group relative block overflow-hidden rounded-[28px] border border-white/80 bg-white/75 p-5 shadow-[0_18px_60px_rgba(40,85,115,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_80px_rgba(40,85,115,0.16)]"
                  >
                    <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#46d7c8] to-[#0f9f91] opacity-0 transition group-hover:opacity-100" />

                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#dff8f6] text-[#0f9f91] transition group-hover:scale-105 group-hover:bg-[#46d7c8] group-hover:text-[#063b3b]">
                        <Icon size={28} />
                      </div>

                      <div>
                        <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#0f9f91]">
                          {service.tag}
                        </p>

                        <h3 className="mt-1 text-[22px] font-black text-[#12383d]">
                          {service.title}
                        </h3>

                        <p className="mt-2 max-w-[520px] text-[15px] leading-7 text-[#3c6571]">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0f9f91] shadow-[0_10px_30px_rgba(18,56,61,0.12)] transition group-hover:bg-[#12383d] group-hover:text-white">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* FEATURED CARD */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="glow-hover interactive-shine relative overflow-hidden rounded-[36px] bg-[#0f4648] p-4 shadow-[0_36px_100px_rgba(18,56,61,0.24)] lg:sticky lg:top-28"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(70,215,200,0.24),transparent_34%),radial-gradient(circle_at_30%_90%,rgba(255,255,255,0.12),transparent_38%)]" />
            <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#46d7c8]/10" />

            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src="/service-card.jpg"
                alt="Radiology featured service"
                className="image-hover h-[320px] w-full object-cover sm:h-[380px] lg:h-[420px]"
              />

              <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[12px] font-black uppercase tracking-[0.18em] text-[#0f9f91] shadow-xl">
                <Star size={15} fill="currentColor" />
                Featured Service
              </div>
            </div>

            <div className="relative p-6 text-white sm:p-8">
              <h3 className="text-[34px] font-black leading-tight sm:text-[42px]">
                {featured.title}
              </h3>

              <p className="mt-4 max-w-[620px] text-[16px] leading-8 text-white/75">
                {featured.description}
              </p>

              <div className="my-8 h-px bg-white/18" />

              <div className="grid gap-6 sm:grid-cols-4">
                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="stat-tile">
                      <div className="contact-info-icon mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#8ff4eb]">
                        <Icon size={22} />
                      </div>

                      <h4 className="text-[22px] font-black text-white">
                        {item.value}
                      </h4>

                      <p className="mt-1 text-[15px] font-bold text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[13px] leading-5 text-white/60">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/appointment"
                className="mt-9 inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-[15px] font-black text-[#12383d] transition hover:-translate-y-1 hover:bg-[#46d7c8] sm:w-auto"
              >
                Schedule Imaging
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
