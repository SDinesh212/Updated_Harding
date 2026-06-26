export default function Xray() {
  return (
    <main className="relative bg-white text-[#123d40]">
      {/* STICKY HERO */}
      <section className="sticky top-0 z-10 h-screen overflow-hidden bg-[#eaf6fb]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/xray-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#eaf6fb] via-[#eaf6fb]/75 to-transparent" />

        <div className="absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-t from-[#123d40] to-transparent" />

        <div className="relative z-10 flex h-full items-center px-6 pt-[90px] sm:px-10 lg:px-14">
          <div className="max-w-[560px]">
            <h1 className="text-[32px] font-bold leading-tight text-[#123d40] sm:text-[56px] lg:text-[64px]">
              Precision Digital X-
             
              Ray Imaging For
              
              Confident Diagnosis
            </h1>

            <p className="mt-6 max-w-[520px] text-[16px] leading-7 text-[#0f4661]">
              High-resolution digital imaging that helps physicians evaluate
              your injuries and conditions quickly, accurately, and with
              confidence.
            </p>

            <button className="mt-8 rounded-lg bg-[#123d40] px-7 py-4 text-[15px] font-bold text-white transition hover:bg-[#0d5758]">
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT OVERFLOWING OVER HERO */}
      <section className="relative z-20 -mt-[1px] bg-[#123d40] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-2">
          <img
            src="/xray-room.png"
            alt="X-Ray room"
            className="rounded-xl shadow-2xl"
          />

          <div>
            <h2 className="text-[32px] font-bold">
              What Is A Routine <span className="text-[#35c8c9]">X-Ray?</span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-white/85">
              A routine X-ray is a common medical scan that uses a very small
              dose of radiation to create images of the inside of the body.
            </p>

            <ul className="mt-5 space-y-3 text-[15px] text-white/85">
              <li>• Radiation passes through the body to create detailed images.</li>
              <li>• Dense structures like bone appear white on the X-ray.</li>
              <li>• Air-filled areas such as lungs appear darker.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
