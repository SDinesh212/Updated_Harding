import { motion } from "framer-motion";
import {
  ArrowRight,
  Bone,
  Brain,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Waves,
} from "lucide-react";

const services = [
  {
    title: "3D Mammography",
    tag: "Breast Screening",
    description:
      "Tomosynthesis-based breast imaging for greater sensitivity, fewer false positives, and confident screening for dense tissue.",
    image: "/service-card.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Open MRI",
    tag: "Comfort-First Imaging",
    description:
      "High-field Open MRI designed for patient comfort while delivering exceptional image quality.",
    image: "/service-card.jpg",
    icon: Brain,
  },
  {
    title: "CT Scans",
    tag: "Fast Diagnostic Answers",
    description:
      "Low-dose CT, lung cancer screening, cardiac calcium scoring, and urgent diagnostic studies.",
    image: "/service-card.jpg",
    icon: ScanLine,
  },
  {
    title: "Ultrasound",
    tag: "Real-Time Imaging",
    description:
      "Abdominal, pelvic, vascular, musculoskeletal, and soft-tissue ultrasound examinations.",
    image: "/service-card.jpg",
    icon: Waves,
  },
  {
    title: "X-Ray",
    tag: "Digital Radiography",
    description:
      "Digital X-ray imaging for chest, spine, bone, and abdominal studies with rapid reporting.",
    image: "/service-card.jpg",
    icon: Bone,
  },
  {
    title: "DEXA Scan",
    tag: "Bone Health",
    description:
      "Advanced bone density testing for osteoporosis screening and preventive bone care.",
    image: "/service-card.jpg",
    icon: HeartPulse,
  },
];

export default function RadiologyServicesSection() {
  const featured = services[0];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#eef9fc] px-4 py-24 text-[#15383f] sm:px-6 lg:py-32"
    >
      

      <div className="relative mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#1e9c92]">
            Harding Radiology Services
          </p>

          <h2 className="mt-5 text-[40px] font-extrabold leading-tight tracking-[-0.03em] text-[#12383d] sm:text-[58px]">
            One center. Complete diagnostic clarity.
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[17px] leading-8 text-[#3c6571]">
            A complete outpatient imaging experience designed for comfort,
            accuracy, and coordinated physician reporting.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-[0_18px_55px_rgba(40,85,115,0.1)] backdrop-blur transition hover:-translate-y-1 hover:bg-white"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dff8f6] text-[#1e9c92] transition group-hover:bg-[#46d7c8] group-hover:text-[#062f3f]">
                    <Icon size={24} />
                  </div>

                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#1e9c92]">
                      {service.tag}
                    </p>

                    <h3 className="mt-1 text-[24px] font-extrabold text-[#12383d]">
                      {service.title}
                    </h3>

                    <p className="mt-2 max-w-[520px] text-[15px] leading-7 text-[#3c6571]">
                      {service.description}
                    </p>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#12383d] text-white transition group-hover:bg-[#46d7c8] group-hover:text-[#062f3f] sm:flex">
                    <ArrowRight size={18} />
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[42px] bg-[#12383d] p-4 shadow-[0_34px_90px_rgba(18,56,61,0.22)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(70,215,200,0.28),transparent_34%)]" />

            <img
              src="/service-card.jpg"
              alt="Radiology Services"
              className="relative h-[430px] w-full rounded-[32px] object-cover transition duration-700 hover:scale-105"
            />

            <div className="relative p-6 sm:p-8">
              <div className="mb-5 inline-flex rounded-full bg-[#46d7c8]/15 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#8ff4eb]">
                Featured service
              </div>

              <h3 className="text-[36px] font-extrabold leading-tight text-white">
                {featured.title}
              </h3>

              <p className="mt-4 text-[16px] leading-8 text-white/72">
                {featured.description}
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#12383d] transition hover:-translate-y-1 hover:bg-[#46d7c8]"
              >
                Schedule imaging
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 h-[120px] w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        
      </svg>
    </section>
  );
}