import { ArrowRightCircle } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Jessica Smith",
    role: "UX Designer At Clay Studio",
    text: "I had my MRI done at the Radiology Center at Harding and the experience was excellent. The staff explained everything clearly and helped ease my anxiety. The open MRI was surprisingly comfortable and not claustrophobic at all.",
  },
  {
    name: "Maria Johnson",
    role: "Retired Teacher",
    text: "I came in for a CT scan feeling very nervous, but the team at Harding made the entire process smooth and stress-free. They walked me through every step and the results were ready quickly.",
  },
  {
    name: "Jessica Smith",
    role: "UX Designer At Clay Studio",
    text: "I had my MRI done at the Radiology Center at Harding and the experience was excellent. The staff explained everything clearly and helped ease my anxiety. The open MRI was surprisingly comfortable and not claustrophobic at all.",
  },
];

export default function PatientTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="relative z-[70] bg-white px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-[1120px] text-center">
        <h2 className="text-[32px] font-bold text-[#285573] sm:text-[46px]">
          What Our Patients Say
        </h2>

        <p className="mt-5 text-[18px] text-[#285573] sm:text-[22px]">
          Our Multiple Scans Have Made Quite An Impact
        </p>

        <div className="mt-12 grid overflow-hidden rounded-[8px] bg-[#eef8f6] sm:mt-14 lg:grid-cols-2">
          <div className="relative min-h-[320px] sm:min-h-[360px]">
            <img
              src="/patient-review.jpg"
              alt="Happy patient"
              className="h-full w-full object-cover"
            />

            <span className="absolute left-[24px] top-[130px] rounded-full bg-white px-4 py-2 text-[12px] font-bold text-black sm:left-[40px] sm:top-[155px] sm:text-[13px]">
              Happy Patient
            </span>

            <span className="absolute bottom-[70px] left-[90px] rounded-full bg-white px-4 py-2 text-[12px] font-bold text-black sm:bottom-[80px] sm:left-[140px] sm:text-[13px]">
              Dedicated Team
            </span>

            <span className="absolute right-[20px] top-[205px] rounded-full bg-white px-4 py-2 text-[12px] font-bold text-black sm:right-[35px] sm:top-[215px] sm:text-[13px]">
              Good Service
            </span>
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-10 text-center sm:px-8 sm:py-12">
            <img
              src="/patient-avatar.jpg"
              alt="Patient"
              className="h-[72px] w-[72px] rounded-full object-cover"
            />

            <p className="mt-8 max-w-[420px] text-[15px] leading-[1.8] text-[#285573]">
              {active.text}
            </p>

            <div className="mt-10 flex w-full max-w-[420px] items-center justify-center gap-10">
              <div>
                <h3 className="text-[20px] font-medium text-[#285573]">
                  {active.name}
                </h3>

                <p className="mt-2 text-[14px] text-gray-500">
                  {active.role}
                </p>
              </div>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="text-[#2f86d1] transition hover:scale-110"
              >
                <ArrowRightCircle size={38} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}