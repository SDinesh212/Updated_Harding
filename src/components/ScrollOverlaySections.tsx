import MriRevealSection from "./MriRevealSection";
import DiagnosticExcellenceSection from "./DiagnosticExcellenceSection";
import RadiologyServicesSection from "./RadiologyServicesSection";
import PatientTestimonialsSection from "./PatientTestimonialsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

export default function ScrollOverlaySections() {
  return (
    <div className="relative z-20 mt-[100vh]">
      {/* SECTION 1 */}
      <section className="relative z-20 min-h-screen overflow-hidden bg-black/2">
        <img
          src="/mrimachine.png"
          alt="MRI Scanner"
          className="float-slow ... absolute left-1/2 top-8 z-10 w-[760px] max-w-none -translate-x-1/2 sm:top-0 sm:w-[1100px] lg:w-[1450px]"
        />

        <div className="absolute bottom-0 left-0 z-10 h-[300px] w-full bg-gradient-to-t from-black via-black to-transparent" />

        <div className="glow-hover ... relative z-20 flex min-h-screen items-end justify-center px-5 pb-12 pt-[330px] sm:px-6 sm:pt-[480px] lg:pt-0">
          <div className="grid w-full max-w-[1050px] grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8 lg:gap-12">
            <FeatureItem
              color="#4cff9f"
              title="Open MRI"
              text="Our Hitachi Altaire high-field open MRI produces clinical-grade images in a fully open, non-claustrophobic environment – suitable for patients of all sizes, including those with anxiety or mobility limitations."
            />

            <FeatureItem
              color="#24bfff"
              title="3D Breast Imaging"
              text="The only facility in NJ offering 3D Mammography plus Automated 3D Breast Ultrasound together. 30 seconds per breast. Clinically validated for superior detection, especially in dense breast tissue."
            />

            <FeatureItem
              color="#c276ff"
              title="CT Scans"
              text="GE Optima CT Scanner with full diagnostic capability. Lung cancer screening, cardiac calcium scoring, and total body CT – with STAT reporting available for urgent referrals."
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative z-30 h-[220vh] bg-[#5d93b8]">
        <div className="sticky top-[95px] h-[calc(100vh-95px)] overflow-y-auto lg:overflow-hidden">
          <div className="glow-hover ... relative z-10 mx-auto flex min-h-full max-w-[1280px] items-center px-5 py-10 sm:px-6 lg:h-full lg:py-0">
            <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-24">
              <div className="lg:pl-[80px]">
                <h2 className="max-w-[700px] text-[26px] font-bold leading-tight text-white sm:text-[34px] lg:text-[32px]">
                  The Radiology Center at Harding —
                  <span className="block text-[#46d7c8]">
                    Decades of Trust. Advanced Diagnostic Care.
                  </span>
                </h2>

                <div className="mt-6 space-y-5 lg:mt-12 lg:space-y-2">
                  <InfoBlock
                    title="Accreditation and Clinical Standards:"
                    text="Harding Radiology holds full ACR accreditation across its imaging modalities — a nationally recognized benchmark for equipment performance, imaging protocols, and quality assurance. Our radiologists are board-certified and fellowship-trained, with a specialist on-site throughout all operating hours."
                  />

                  <InfoBlock
                    title="Comprehensive Imaging. One Location"
                    text="We offer the full spectrum of outpatient diagnostic imaging – Open MRI, CT, 3D Mammography, 3D Breast Ultrasound, DEXA, X-Ray, Ultrasound, and Whole-Body MRI – supported by a fully integrated RIS/PACS digital archiving system for seamless physician access to results."
                  />

                  <InfoBlock
                    title="Designed Around Patient Access"
                    text="Same-day reports as standard. STAT results on request. Walk-in and emergency appointments available. Free transportation for MRI and CT patients. Private on-site parking. Extended hours on Wednesdays."
                  />
                </div>

                <button className="mt-7 inline-flex h-[50px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-[#46d7c8] to-[#3fc5d4] px-7 text-[15px] font-semibold text-white shadow-lg transition hover:scale-[1.02] sm:text-[16px] lg:mt-12 lg:h-[56px] lg:px-8 lg:text-[18px]">
                  More About Us
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <img
                  src="/radiology-center.jpg"
                  alt="Radiology Center"
                  className="image-hover ... w-full max-w-[620px] rounded-[14px] object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="relative z-40 -mt-[100vh] h-[220vh] bg-[#0a445e]">
        <div className="sticky top-[95px] h-[calc(100vh-95px)] overflow-y-auto py-10 lg:overflow-hidden lg:py-0">
          <div className="relative z-10 mx-auto max-w-[1360px] px-5 pt-8 sm:px-6 lg:pt-[140px]">
            <div className="flex flex-col gap-10 lg:ml-[80px] lg:flex-row lg:gap-16">
              <div className="relative hidden h-[340px] w-[2px] bg-white/10 lg:block">
                <div className="absolute left-1/2 top-[120px] h-4 w-4 -translate-x-1/2 rounded-full bg-[#4cff9f] shadow-[0_0_15px_#4cff9f]" />
              </div>

              <div>
                <h2 className="text-[30px] font-bold leading-tight text-white sm:text-[34px] lg:text-[38px]">
                  Whole-Body MRI -
                  <br />
                  <span className="text-[#8ddfff] drop-shadow-[0_8px_24px_rgba(141,223,255,0.2)]">
                    Now Available at Harding Radiology
                  </span>
                </h2>

                <div className="mt-8 max-w-[560px] text-[16px] leading-[1.9] text-white/90">
                  <p>
                    Whole-Body MRI is a non-invasive screening that produces
                    detailed images of the brain, spine, chest, abdomen, pelvis,
                    major organ systems, and vasculature – without radiation or
                    contrast agents. It is designed for patients who want a
                    thorough internal health assessment, and for physicians
                    seeking a broader diagnostic picture outside of
                    symptom-specific referrals.
                  </p>

                  <p className="mt-3">
                    Results are reviewed and reported by our board-certified
                    radiologists and shared with your referring provider.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <h3 className="text-[24px] font-bold text-[#8ddfff] drop-shadow-[0_8px_24px_rgba(141,223,255,0.2)] sm:text-[28px]">
                    Comprehensive. Radiation-free. One session.
                  </h3>
                </div>

                <button className="mt-10 cursor-pointer rounded-lg bg-gradient-to-r from-[#46d7c8] to-[#3fc5d4] px-7 py-3 text-[16px] font-semibold text-white shadow-lg transition hover:scale-[1.02] lg:mt-12 lg:px-8 lg:py-4 lg:text-[18px]">
                  More About Us
                </button>
              </div>
            </div>

            <div className="relative mt-12 flex justify-center lg:absolute lg:right-[100px] lg:top-[5px] lg:mt-0">
              <img
                src="https://cdn.prod.website-files.com/653836f64e8770bb2190b74d/699d88170d178e970f075818_scan.webp"
                alt="Scan Animation"
                className="w-[260px] max-w-full sm:w-[320px] lg:w-[350px] lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHITE OVERFLOW LAYER */}
      <div className="relative z-50 -mt-[100vh] bg-white">
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

function FeatureItem({
  color,
  title,
  text,
}: {
  color: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <div
        className="mx-auto mb-4 h-4 w-4 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 16px ${color}`,
        }}
      />

      <h2 className="text-[26px] font-bold leading-tight text-white sm:text-[30px] lg:text-[34px]">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-[300px] text-[14px] leading-relaxed text-white/90">
        {text}
      </p>
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="mb-1 text-[20px] font-semibold text-white sm:text-[22px]">
        {title}
      </h3>

      <p className="text-[14px] leading-[1.8] text-white/95 sm:text-[15px] lg:leading-[1.9]">
        {text}
      </p>
    </div>
  );
}