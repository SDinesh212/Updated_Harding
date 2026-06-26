import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { revealItems } from "../data/landing";
import type { RevealVariant } from "../data/landing";

const pillColors: Record<RevealVariant, string> = {
  dark: "bg-[#17383b] text-white",
  light: "bg-[#d8edf3] text-[#285573]",
  blue: "bg-[#7faecc] text-[#102f3f]",
  teal: "bg-[#46d7c8] text-[#0b3438]",
  navy: "bg-[#285573] text-white",
};

export default function MriRevealSection() {
  return (
    <section
      id="mri-reveal"
      className="relative overflow-hidden bg-[#f4f7f6] px-4 py-20 text-[#17383b] sm:px-6 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[1400px] text-center"
      >
        <h2 className="text-[32px] font-extrabold text-[#285573] sm:text-[44px] lg:text-[54px]">
          What Whole-Body MRI Can Reveal
        </h2>
      </motion.div>

      <div className="mx-auto mt-10 max-w-[1500px] overflow-hidden">
        <div className="marquee flex items-center gap-4 py-4">
          {[...revealItems, ...revealItems].map((item, index) => (
            <Pill key={`${item.text}-${index}`} variant={item.variant}>
              {item.text}
            </Pill>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pill({
  children,
  variant,
}: {
  children: ReactNode;
  variant: RevealVariant;
}) {
  return (
    <span
      className={`shrink-0 rounded-full px-6 py-4 text-[15px] font-bold shadow-[0_18px_42px_rgba(23,56,59,0.1)] sm:text-[16px] ${pillColors[variant]}`}
    >
      {children}
    </span>
  );
}
