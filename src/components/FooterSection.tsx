import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const towns = [
  "Denville NJ",
  "Morristown NJ",
  "Bernardsville NJ",
  "Morris County NJ",
  "Chatham NJ",
  "Morris Plains NJ",
  "Randolph NJ",
  "Parsippany NJ",
  "Warren NJ",
  "Bedminster NJ",
  "Summit NJ",
  "Bridgewater NJ",
  "Hanover NJ",
  "Chester NJ",
  "Mendham NJ",
  "Madison NJ",
  "Florham Park NJ",
  "Cedar Knolls NJ",
  "Berkeley Heights NJ",
];

export default function FooterSection() {
  return (
    <footer className="relative z-[70] overflow-hidden bg-[#183f52] px-6 py-2 text-white">
      <div className="absolute bottom-0 right-0 h-[260px] w-[360px] bg-[#75a8ba]/60 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <div className="relative  mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <h2 className="max-w-[620px] text-[28px] font-bold leading-tight sm:text-[36px]">
            Trusted, Top-Quality Imaging
            <br />
            For <span className="text-[#46d7c8]">Morris County And</span>
            <br />
            <span className="text-[#46d7c8]">Surrounding Communities</span>
          </h2>

          <p className="mt-12 text-[15px]">
            Your trusted source for advanced imaging to patients in neighboring
            areas including
          </p>

          <div className="mt-12 grid max-w-[720px] grid-cols-2 gap-x-10 gap-y-3 text-[14px] sm:grid-cols-3 lg:grid-cols-4">
            {towns.map((town) => (
              <p key={town}>• {town}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-bold">About Harding</h3>

          <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-4 text-[15px] font-semibold">
            <p>About</p>
            <p>Preventive Screening Tests</p>
            <p>Make Payment</p>
            <p>Appointment</p>
            <p>Women Imaging</p>
            <p>Contact us</p>
          </div>

          <div className="mt-14 space-y-4 text-[15px]">
            <p>Tel: 908-221-0603</p>
            <p>Email: Scheduling@hardingradiology.com</p>
          </div>

          <div className="mt-14 flex gap-7 text-[28px]">
            <FaFacebookF className="cursor-pointer transition hover:text-[#46d7c8]" />
            <FaInstagram className="cursor-pointer transition hover:text-[#46d7c8]" />
            <FaLinkedinIn className="cursor-pointer transition hover:text-[#46d7c8]" />
            <FaYoutube className="cursor-pointer transition hover:text-[#46d7c8]" />
            <FaPinterestP className="cursor-pointer transition hover:text-[#46d7c8]" />
         </div>
        </div>
      </div>

      <p className="relative mt-20 text-center text-[12px] font-semibold">
        © 2026 Radiology Center At Harding . All Rights Reserved
      </p>
    </footer>
  );
}