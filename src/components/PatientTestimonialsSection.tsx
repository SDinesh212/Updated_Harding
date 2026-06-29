import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "../data/landing";

const floatingTags = ["Comfortable Visit", "Fast Results", "Trusted Team"];

export default function PatientTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const previousTestimonial = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = window.setInterval(nextTestimonial, 5000);
    return () => window.clearInterval(timer);
  }, [nextTestimonial]);

  const active = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#eef9fc] px-4 py-24 text-[#12383d] sm:px-6 lg:py-32">
     

      <div className="relative mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[780px] text-center"
        >
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-[13px] font-bold uppercase tracking-[0.22em] text-[#1e9c92] shadow-sm">
            Patient Stories
          </p>

          <h2 className="mt-5 text-[34px] font-extrabold leading-tight text-[#12383d] sm:text-[56px]">
            What patients say about their care.
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[17px] leading-8 text-[#416878]">
            Real experiences from patients who trusted Harding Radiology for
            comfortable imaging, clear communication, and reliable results.
          </p>
        </motion.div>

        <div className="mt-12 grid overflow-hidden rounded-[28px] bg-white shadow-[0_34px_90px_rgba(40,85,115,0.14)] sm:mt-16 sm:rounded-[42px] lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[320px] overflow-hidden bg-[#0b2f3a] sm:min-h-[420px] lg:min-h-[520px]"
          >
            <img
              src="/patient-review.jpg"
              alt="Smiling patient at radiology appointment"
              className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#082f35]/70 via-transparent to-transparent" />

            <div className="absolute left-4 top-4 rounded-[20px] border border-white/20 bg-white/15 p-4 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:left-6 sm:top-6 sm:rounded-[24px] sm:p-5">
              <div className="flex gap-1 text-[#46d7c8]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-[14px] font-bold">5-star patient care</p>
            </div>

            {floatingTags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
                className={`absolute rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[12px] font-bold text-[#12383d] shadow-[0_16px_36px_rgba(23,56,59,0.16)] backdrop-blur ${
                  index === 0
                    ? "right-8 top-28"
                    : index === 1
                      ? "left-8 bottom-28"
                      : "right-10 bottom-12"
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <div className="relative flex min-h-[420px] flex-col justify-center bg-[#eef9fc] px-5 py-8 sm:min-h-[520px] sm:px-12 sm:py-10 lg:px-14">
            <div className="absolute right-10 top-10 text-[#46d7c8]/20">
              <Quote size={90} fill="currentColor" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.32 }}
                className="relative z-10"
              >
                <img
                  src={active.avatar}
                  alt={`${active.name} avatar`}
                  className="h-[76px] w-[76px] rounded-full border-4 border-white object-cover shadow-[0_16px_38px_rgba(40,85,115,0.18)]"
                />

                <p className="mt-6 max-w-[620px] text-[18px] font-medium leading-8 text-[#285573] sm:mt-8 sm:text-[22px] sm:leading-10">
                  "{active.text}"
                </p>

                <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                  <div>
                    <h3 className="text-[24px] font-extrabold text-[#12383d]">
                      {active.name}
                    </h3>
                    <p className="mt-1 text-[15px] font-bold text-[#1e9c92]">
                      {active.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={previousTestimonial}
                      aria-label="Previous testimonial"
                      className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#285573]/15 bg-white text-[#285573] shadow-[0_14px_34px_rgba(40,85,115,0.12)] transition hover:-translate-y-1 hover:bg-[#285573] hover:text-white"
                    >
                      <ArrowLeft size={21} />
                    </button>

                    <button
                      type="button"
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#285573] text-white shadow-[0_16px_40px_rgba(40,85,115,0.22)] transition hover:-translate-y-1 hover:bg-[#17383b]"
                    >
                      <ArrowRight size={21} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-10 bg-[#1e9c92]"
                      : "w-2.5 bg-[#285573]/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
