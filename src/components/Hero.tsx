export default function Hero() {
  return (
    <section
      className="fixed inset-0 z-0 min-h-screen overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 pt-[90px] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1850px] text-center">
          <h1 className="reveal-up delay-100 ...mx-auto max-w-[340px] text-[30px] font-bold leading-[1.18] tracking-[-0.5px] text-white sm:max-w-[680px] sm:text-[44px] md:max-w-[900px] md:text-[54px] lg:max-w-[1250px] lg:text-[62px] xl:max-w-[1780px] xl:text-[62px]">
            Preventive Health, Reimagined with{" "}
            <span className="text-[#4faee3]">Whole-Body MRI</span> – now
            available at Harding. A radiation-free, non-invasive scan covering
            brain to pelvis in a single session.
          </h1>

          <div className="mt-7 flex justify-center sm:mt-9 lg:mt-10">
            <button className="reveal-up delay-300 glow-hover ...h-[48px] bg-[#35c8c9] px-6 text-[15px] font-bold text-white transition hover:bg-[#2ab7b8] sm:h-[52px] sm:px-8 sm:text-[17px] lg:h-[54px] lg:px-10 lg:text-[18px]">
              Book your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}