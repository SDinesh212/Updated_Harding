import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "3D Mammography",
    description:
      "Tomosynthesis-based breast imaging. Greater sensitivity than conventional mammography, with fewer false positives and reduced callback rates.",
  },
  {
    title: "3D Breast Ultrasound",
    description:
      "Hitachi SOFIA automated whole-breast ultrasound. Thirty-second scan per breast. Recommended for women with dense or heterogeneous breast tissue.",
  },
  {
    title: "CT Scans",
    description:
      "GE Optima CT. Full diagnostic capability including low-dose lung cancer screening (LDCT) and coronary artery calcium scoring.",
  },
  {
    title: "Open MRI",
    description:
      "Hitachi Altaire high-field open MRI. Clinically equivalent to closed-bore systems, with significantly improved patient comfort and accessibility.",
  },
  {
    title: "Ultrasound",
    description:
      "GE Logic series with full Doppler color capability. Abdominal, pelvic, musculoskeletal, and vascular applications.",
  },
  {
    title: "X-Ray",
    description:
      "Fully computerized digital radiography. Bone studies, chest, abdomen, and spine. Results available promptly for physician review.",
  },
  {
    title: "DEXA Scan",
    description:
      "Dual-energy X-ray absorptiometry for bone mineral density assessment at the lumbar spine and hip.",
  },
];

export default function RadiologyServicesSection() {
  return (
    <section className="relative z-50 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="reveal-up ... mb-12 text-center text-4xl font-bold text-[#285573]">
          Radiology Services
        </h2>

        <div className="relative rounded-sm bg-[#60B7D6] from-[#52a5ba] to-[#52a5ba] p-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_55%,rgba(255,255,255,0.08)_55%)]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_470px]">
            <div>
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`py-5 ${
                    index !== services.length - 1
                      ? "border-b border-white/50"
                      : ""
                  }`}
                >
                  <div className="reveal-left delay-100 flex items-start">
                    <h3 className="mb-3 cursor-pointer text-3xl font-semibold text-white">
                      {service.title}
                    </h3>

                    {index === 0 && (
                      <ArrowRight className="ml-4 mt-1 text-white" size={36} />
                    )}
                  </div>

                  <p className="max-w-xl text-md leading-relaxed text-white/95">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-auto self-start overflow-hidden rounded-xl bg-white shadow-lg md:h-[352px] lg:sticky lg:top-24">
              <div className="grid md:grid-cols-2">
                <img
                  src="/service-card.jpg"
                  alt="Patient"
                  className="h-56 w-full object-cover md:h-full"
                />

                <div className="reveal-right delay-200 p-8">
                  <div className="-mb-1">
                    <img src="/mri-icon.png" alt="" className="h-14 w-14" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-slate-800">
                    Precision Breast Imaging With Next-Generation 3D Mammograms
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    It provides highly detailed, layered X-ray images of the
                    breast, allowing radiologists to examine tissue with greater
                    accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}