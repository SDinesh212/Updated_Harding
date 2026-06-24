import type { ReactNode } from "react";

type Variant = "dark" | "light" | "blue" | "teal";

const revealItems: { text: string; variant: Variant }[] = [
  { text: "Early-stage cancers and tumors", variant: "dark" },
  { text: "Neurological abnormalities", variant: "light" },
  { text: "Cardiovascular and vascular changes", variant: "dark" },
  { text: "Organ health abnormalities", variant: "light" },
  { text: "Spinal and musculoskeletal conditions", variant: "light" },
  { text: "Inflammatory changes", variant: "blue" },
  { text: "Liver and kidney irregularities", variant: "light" },
  { text: "Pancreatic and abdominal findings", variant: "blue" },
  { text: "Joint and cartilage degeneration", variant: "teal" },
  { text: "Hidden structural abnormalities", variant: "light" },
  { text: "Chronic disease indicators", variant: "teal" },
  { text: "Preventive whole-body insights", variant: "light" },
];

export default function MriRevealSection() {
  return (
    <section className="relative z-50 bg-white px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] text-center">
        <h2 className="text-[20px] font-bold text-[#285573] sm:text-[26px]">
          What Whole-Body MRI Can Reveal
        </h2>

        <div className="mt-12 overflow-hidden">
          <div className="marquee flex items-center gap-4">
            {[...revealItems, ...revealItems].map((item, index) => (
              <Pill key={`${item.text}-${index}`} variant={item.variant}>
                {item.text}
              </Pill>
            ))}
          </div>
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
  variant: Variant;
}) {
  const colors =
    variant === "dark"
      ? "bg-[#6e7370] text-white"
      : variant === "blue"
      ? "bg-[#285b78] text-white"
      : variant === "teal"
      ? "bg-[#2fa89c] text-white"
      : "bg-[#b7dfe3] text-[#147fc6]";

  return (
    <div
      className={`shrink-0 rounded-full px-6 py-4 text-[15px] font-medium whitespace-nowrap sm:text-[16px] ${colors}`}
    >
      {children}
    </div>
  );
}