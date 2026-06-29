import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../data/landing";
import type { MenuItem, NavItem } from "../data/landing";

function isRouteLink(href: string) {
  return href.startsWith("/");
}

function SmartLink({
  item,
  className,
  onClick,
  children,
}: {
  item: MenuItem;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}) {
  if (isRouteLink(item.href)) {
    return (
      <Link to={item.href} className={className} onClick={onClick}>
        {children ?? item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} className={className} onClick={onClick}>
      {children ?? item.label}
    </a>
  );
}

function DesktopNavItem({
  item,
  isScrolled,
}: {
  item: NavItem;
  isScrolled: boolean;
}) {
  const [open, setOpen] = useState(false);

  const linkClass = `px-0 py-2 text-[14px] font-extrabold transition ${
    isScrolled
      ? "text-white hover:text-[#7ff0e5]"
      : "text-[#12383d] hover:text-[#0c8aa6]"
  }`;

  if (!item.children) {
    return <SmartLink item={item} className={linkClass} />;
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`inline-flex items-center gap-1 ${linkClass}`}
      >
        {item.label}
        <ChevronDown
          size={15}
          className={`transition duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-4"
          >
            <div className="rounded-[22px] border border-white/80 bg-white p-2 shadow-[0_24px_70px_rgba(5,31,39,0.18)]">
              {item.children.map((child) => (
                <SmartLink
                  key={child.label}
                  item={child}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-3 rounded-[16px] px-4 py-3 text-[14px] font-bold text-[#12383d] transition hover:bg-[#eef9fc]"
                >
                  <span>{child.label}</span>
                  <ArrowRight
                    size={15}
                    className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </SmartLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 top-0 z-[100] w-full px-4 pt-3 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex h-[74px] max-w-[1360px] items-center justify-between gap-6 rounded-full px-5 transition-all duration-300 lg:px-7 ${
          isScrolled || isMenuOpen
            ? "bg-[#082f35]/96 shadow-[0_18px_54px_rgba(5,31,39,0.28)] backdrop-blur-xl"
            : "border border-white/70 bg-white/42 shadow-[0_18px_50px_rgba(40,85,115,0.12)] backdrop-blur-xl"
        }`}
      >
        <Link
          to="/"
          aria-label="Radiology Center at Harding home"
          className={`inline-flex shrink-0 items-center rounded-full px-5 py-3 transition-all duration-300 ${
            isScrolled || isMenuOpen
              ? "bg-transparent"
              : "bg-[#082f35] shadow-[0_18px_44px_rgba(5,31,39,0.24)]"
          }`}>
          <img
            src="/logo.png"
            alt="Radiology Center at Harding"
            className="h-15 w-[170px] object-contain sm:w-[210px]"
          />
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              isScrolled={isScrolled || isMenuOpen}
            />
          ))}
        </div>

        <a
          href="#contact"
          className="hidden h-[52px] items-center justify-center rounded-full bg-[#143f35] px-5 text-[15px] font-extrabold text-white shadow-[0_16px_34px_rgba(19,183,207,0.22)] transition hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(19,183,207,0.28)] lg:inline-flex"
        >
          Book now
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition xl:hidden ${
            isScrolled || isMenuOpen
              ? "text-white hover:bg-white/10"
              : "bg-[#082f35] text-white shadow-[0_14px_34px_rgba(5,31,39,0.18)]"
          }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[-1] bg-[#082f35] px-4 pt-28 text-white xl:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="mx-auto flex h-full max-w-[620px] flex-col overflow-y-auto pb-8"
            >
              <div className="grid gap-2">
                {navItems.map((item) =>
                  item.children ? (
                    <details
                      key={item.label}
                      className="group rounded-[20px] border border-white/15 bg-white/10"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 text-[18px] font-bold [&::-webkit-details-marker]:hidden">
                        {item.label}
                        <ChevronDown
                          size={20}
                          className="transition duration-200 group-open:rotate-180"
                        />
                      </summary>

                      <div className="grid gap-1 px-3 pb-3">
                        {item.children.map((child) => (
                          <SmartLink
                            key={child.label}
                            item={child}
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-[16px] px-4 py-3 text-[15px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                          />
                        ))}
                      </div>
                    </details>
                  ) : (
                    <SmartLink
                      key={item.label}
                      item={item}
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-[20px] border border-white/15 bg-white/10 px-4 py-4 text-[18px] font-bold text-white transition hover:bg-white/15"
                    />
                  )
                )}
              </div>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-5 inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#46d7c8] to-[#13b7cf] px-6 text-[15px] font-extrabold text-[#062f3f]"
              >
                Join now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}