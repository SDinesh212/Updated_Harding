import { motion } from "framer-motion";
import { Award, Clock, Play, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Award,
    value: "35+",
    label: "Years of clinical trust",
  },
  {
    icon: ShieldCheck,
    value: "ACR",
    label: "Accredited imaging standards",
  },
  {
    icon: Clock,
    value: "STAT",
    label: "Reads available by request",
  },
];

export default function DiagnosticExcellenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef9fc] px-4 py-20 text-[#12383d] sm:px-6 sm:py-24 lg:py-32">
      

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-[13px] font-bold uppercase tracking-[0.22em] text-[#1e9c92] shadow-sm">
            Diagnostic Excellence
          </p>

          <h2 className="mt-6 text-[34px] font-extrabold leading-tight text-[#12383d] sm:text-[54px] lg:text-[68px]">
            Precision imaging,
            <br />
            trusted since 1989.
          </h2>

          <h3 className="mt-5 max-w-[620px] text-[20px] font-extrabold leading-tight text-[#285573] sm:mt-6 sm:text-[22px]">
            Independent outpatient imaging backed by decades of clinical
            confidence.
          </h3>

          <p className="mt-5 max-w-[640px] text-[16px] leading-7 text-[#416878] sm:text-[17px] sm:leading-8">
            Radiology Center at Harding provides respectful care, accurate
            results, and advanced imaging access close to home for Morris County
            patients and referring physicians.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-9 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="service-card-hover rounded-[24px] border border-white/80 bg-white/75 p-5 shadow-[0_18px_50px_rgba(40,85,115,0.1)]"
                >
                  <div className="service-card-icon mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff8f6] text-[#1e9c92]">
                    <Icon size={22} />
                  </div>
                  <p className="text-[30px] font-extrabold text-[#12383d]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[13px] font-semibold leading-5 text-[#416878]">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative"
        >
          

          <div className="service-video-shell interactive-shine relative overflow-hidden rounded-[28px] bg-[#081f27] p-2.5 sm:rounded-[42px] sm:p-3">
            <div className="relative aspect-video overflow-hidden rounded-[22px] sm:rounded-[32px]">
              <iframe
                src="https://www.youtube.com/embed/eDTjxS5OKh0?si=Ct4bWu4Ho-m_1--6"
                title="Radiology Center at Harding video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081f27]/40 via-transparent to-transparent" />

              <div className="pulse-soft pointer-events-none absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#46d7c8] text-[#082f35] shadow-[0_0_28px_rgba(70,215,200,0.42)]">
                <Play size={20} fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[22px] border border-white/80 bg-white/90 p-4 shadow-[0_24px_60px_rgba(40,85,115,0.16)] backdrop-blur-xl sm:absolute sm:-bottom-8 sm:left-8 sm:right-8 sm:mt-0 sm:rounded-[26px] sm:p-5">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#1e9c92]">
              Patient-first standards
            </p>
            <p className="mt-2 text-[19px] font-extrabold leading-tight text-[#12383d] sm:text-[22px]">
              Accurate results. Respectful care. Local access.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
