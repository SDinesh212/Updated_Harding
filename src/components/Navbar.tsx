import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

type DropdownItem = {
  label: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: DropdownItem[];
};

const serviceItems: DropdownItem[] = [
  { label: "X-Ray" },
  { label: "Ultrasound" },
  { label: "Open MRI" },
  { label: "3D Mammogram" },
  { label: "DEXA" },
  { label: "CT Scans" },
  { label: "3D Breast Ultrasound" },
];

const preventiveItems: DropdownItem[] = [
  { label: "Lung Cancer Screening" },
  { label: "Cardiac Scoring" },
];

const navItems: NavItem[] = [
  { label: "About", href: "#" },
  { label: "Services", href: "#", children: serviceItems },
  {
    label: "Preventive Screening Tests",
    href: "#",
    children: preventiveItems,
  },
  { label: "Whole Body MRI", href: "#" },
  { label: "Appointment", href: "#" },
  { label: "Make Payment", href: "#" },
  { label: "Contact us", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full px-4 py-3 transition-all duration-300 sm:px-6"
    >
      <div className="relative mx-auto flex max-w-[1380px] items-center justify-between gap-4">
        <a
          href="#"
          aria-label="Harding Radiology home"
          className={`link-hover ... group inline-flex h-[70px] items-center rounded-full border px-5 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18b9ee] sm:h-[78px] sm:px-6 ${
            isScrolled
              ? "border-[#d9e8e3]/90 bg-[#0d3437]/90 shadow-[0_18px_42px_rgba(4,30,33,0.24)] backdrop-blur-xl"
              : "border-white/35 bg-[#001f1f]/52 shadow-[0_14px_36px_rgba(0,16,18,0.22)] backdrop-blur-md"
          }`}
        >
          <img
            src="/logo.png"
            alt="Harding Radiology"
            className="h-10 w-48 transition duration-300 group-hover:scale-[1.04] sm:h-14 lg:h-16"
          />
        </a>

        <div
          className={`hidden items-center gap-1 rounded-full border p-1.5 shadow-[0_20px_55px_rgba(7,37,40,0.18)] backdrop-blur-2xl transition-all duration-300 xl:flex ${
            isScrolled
              ? "border-[#cadbd5] bg-[#eaf3ef]/92"
              : "border-white/70 bg-white/82"
          }`}
        >
          {navItems.map((item) => (
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-3 text-[10px] font-bold uppercase tracking-[0.06em] text-[#123b3c] transition hover:bg-white hover:text-[#007f7b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18b9ee] 2xl:px-4 2xl:text-[11px]"
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className="transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </button>

                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[280px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-[24px] border border-[#d6e8e7] bg-[#f5fbff]/96 p-2 shadow-[0_22px_55px_rgba(7,37,40,0.2)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <span
                        key={child.label}
                        className="block cursor-default rounded-[18px] px-4 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#143f44] transition hover:bg-[#dff5ff] hover:text-[#0076a8]"
                      >
                        {child.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-3 text-[10px] font-bold uppercase tracking-[0.06em] text-[#123b3c] transition hover:bg-white hover:text-[#007f7b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18b9ee] 2xl:px-4 2xl:text-[11px]"
              >
                {item.label}
              </a>
            )
          ))}

          <button className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full bg-[#17383b] px-4 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(11,44,47,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0f4a4e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18b9ee] 2xl:h-11 2xl:px-5 2xl:text-[11px]">
            Book a Scan
            <ArrowRight size={14} />
          </button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_14px_32px_rgba(7,37,40,0.16)] backdrop-blur-xl transition xl:hidden ${
            isScrolled
              ? "border-[#cadbd5] bg-[#eaf3ef]/92 text-[#123b3c]"
              : "border-white/70 bg-white/82 text-[#123b3c]"
          }`}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {isMenuOpen && (
          <div
            className={`absolute left-0 right-0 top-[calc(100%+12px)] rounded-[28px] border p-3 shadow-[0_24px_60px_rgba(4,30,33,0.22)] backdrop-blur-2xl xl:hidden ${
              isScrolled
                ? "border-[#cadbd5] bg-[#eef6f3]/96"
                : "border-white/75 bg-white/92"
            }`}
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                item.children ? (
                  <details key={item.label} className="group rounded-2xl">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#123b3c] transition hover:bg-[#dff0eb] [&::-webkit-details-marker]:hidden">
                      {item.label}
                      <ChevronDown
                        size={15}
                        className="transition duration-200 group-open:rotate-180"
                      />
                    </summary>

                    <div className="grid gap-1 px-2 pb-2">
                      {item.children.map((child) => (
                        <span
                          key={child.label}
                          className="rounded-xl px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#28585c] transition hover:bg-[#dff5ff] hover:text-[#0076a8]"
                        >
                          {child.label}
                        </span>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#123b3c] transition hover:bg-[#dff0eb]"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>

            <button className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#17383b] px-5 text-[12px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(11,44,47,0.24)]">
              Book a Scan
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
