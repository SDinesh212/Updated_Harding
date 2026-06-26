import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { towns } from "../data/landing";

const footerLinks = [
  "About",
  "Preventive Screening Tests",
  "Make Payment",
  "Appointment",
  "Women Imaging",
  "Contact us",
];

const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP];

export default function FooterSection() {
  return (
    <>
      <div className="-mb-[1px] w-full overflow-hidden bg-[#f4f7f6] leading-none">
        <svg
          viewBox="0 0 1440 150"
          className="block h-[92px] w-full sm:h-[130px]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#17383b"
            d="M0,150 C220,56 430,18 720,44 C1008,70 1208,38 1440,0 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      <footer className="relative overflow-hidden bg-[#17383b] px-4 pb-8 pt-10 text-white sm:px-6 lg:pt-14">
        <div className="absolute inset-0 medical-grid opacity-20" />
        <div className="relative mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="max-w-[660px] text-[30px] font-extrabold leading-tight sm:text-[42px]">
              Trusted, Top-Quality Imaging For Morris County And Surrounding
              Communities
            </h2>

            <p className="mt-8 max-w-[600px] text-[15px] leading-7 text-white/72">
              Your trusted source for advanced imaging to patients in
              neighboring areas including:
            </p>

            <div className="mt-8 grid max-w-[760px] grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-white/78 sm:grid-cols-3 lg:grid-cols-4">
              {towns.map((town) => (
                <a
                  key={town}
                  href="#contact"
                  className="transition hover:text-[#46d7c8]"
                >
                  {town}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-extrabold">About Harding</h3>

            <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4 text-[15px] font-semibold text-white/78">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#contact"
                  className="transition hover:text-[#46d7c8]"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="mt-10 space-y-3 text-[15px] text-white/78">
              <p>Tel: 908-221-0603</p>
              <p>Email: Scheduling@hardingradiology.com</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#contact"
                  aria-label="Social profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/[0.07] text-[18px] transition hover:-translate-y-1 hover:border-[#46d7c8] hover:text-[#46d7c8]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="relative mx-auto mt-14 max-w-[1220px] border-t border-white/12 pt-6 text-center text-[13px] font-semibold text-white/58">
          Copyright 2026 Radiology Center at Harding. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
