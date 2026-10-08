import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#where-we-go" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "919342832151";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-[100]
        transition-all duration-300 ease-out
        ${
          isScrolled
            ? "bg-white/95 shadow-[0_4px_25px_rgba(0,0,0,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <nav
        className="
          mx-auto flex h-[76px] w-full max-w-[1320px]
          items-center justify-between
          px-5 sm:px-6 lg:px-8
        "
      >
        {/* =====================================================
            LOGO
        ====================================================== */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Karai Travels Home"
        >
          {/* K Circle */}
          <span
            className="
              flex h-[40px] w-[40px]
              items-center justify-center
              rounded-full
              bg-[#006b73]
              text-[18px] font-bold text-white
              transition-transform duration-300
              group-hover:scale-105
            "
          >
            K
          </span>

          {/* Brand */}
          <span
            className={`
              text-[20px] font-bold tracking-[-0.02em]
              transition-colors duration-300
              ${
                isScrolled
                  ? "text-[#171717]"
                  : "text-white"
              }
            `}
          >
            Karai<span className="font-semibold">Travels</span>
          </span>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div className="hidden items-center lg:flex">
          <div className="flex items-center gap-[30px]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  relative py-2
                  text-[15px] font-medium
                  transition-colors duration-300
                  ${
                    isScrolled
                      ? "text-[#3a3a3a] hover:text-[#006b73]"
                      : "text-white/95 hover:text-white"
                  }

                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-[#007c85]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* =====================================================
            DESKTOP ACTIONS
        ====================================================== */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* WhatsApp */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className={`
              group flex items-center gap-2
              text-[15px] font-semibold
              transition-colors duration-300
              ${
                isScrolled
                  ? "text-[#222] hover:text-[#006b73]"
                  : "text-white hover:text-white/80"
              }
            `}
          >
            {/* WhatsApp/chat icon */}
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M20 11.5C20 16.194 16.194 20 11.5 20C10.02 20 8.63 19.62 7.43 18.95L4 20L5.05 16.57C4.38 15.37 4 13.98 4 12.5C4 7.806 7.806 4 12.5 4C17.194 4 21 7.806 21 12.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M8.5 9.5C8.5 12.3 11.2 15 14 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M8.5 9.5C8.5 9.5 9 8.5 9.5 8.5C10 8.5 10.7 9.5 10.9 10C11.1 10.5 10.5 11 10.2 11.3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M14 15C14 15 15 14.5 15.5 14.2C16 13.9 17 14.6 17.2 15C17.4 15.4 17 16 16.5 16.2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <span>WhatsApp Us</span>
          </button>

          {/* Book a Ride */}
          <a
            href="#booking"
            className="
              group flex h-[48px]
              items-center justify-center
              rounded-[9px]
              bg-[#006b73]
              px-[23px]
              text-[15px] font-semibold text-white
              shadow-sm
              transition-all duration-300
              hover:bg-[#005c63]
              hover:-translate-y-[1px]
              hover:shadow-lg
              active:translate-y-0
            "
          >
            Book a Ride
          </a>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={`
            flex h-11 w-11
            items-center justify-center
            rounded-lg
            transition-all duration-300
            lg:hidden
            ${
              isScrolled
                ? "text-[#171717] hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }
          `}
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            /* X icon */
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            /* Hamburger */
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <div
        className={`
          overflow-hidden
          border-t
          bg-white
          transition-all duration-300 ease-in-out
          lg:hidden
          ${
            isMobileMenuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-[1320px] px-5 pb-6 pt-3 sm:px-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={`
                  flex min-h-[50px]
                  items-center
                  border-b border-gray-100
                  text-[15px] font-medium
                  text-[#303030]
                  transition-colors
                  hover:text-[#006b73]
                  ${
                    index === navItems.length - 1
                      ? "border-b-0"
                      : ""
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-5 flex flex-col gap-3">
            {/* WhatsApp */}
            <button
              type="button"
              onClick={() => {
                handleWhatsApp();
                setIsMobileMenuOpen(false);
              }}
              className="
                flex h-[48px]
                w-full
                items-center justify-center
                gap-2
                rounded-lg
                border border-[#006b73]
                text-[15px] font-semibold
                text-[#006b73]
                transition-all
                hover:bg-[#006b73]
                hover:text-white
              "
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 11.5C20 16.194 16.194 20 11.5 20C10.02 20 8.63 19.62 7.43 18.95L4 20L5.05 16.57C4.38 15.37 4 13.98 4 12.5C4 7.806 7.806 4 12.5 4C17.194 4 21 7.806 21 12.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              WhatsApp Us
            </button>

            {/* Book Ride */}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="
                flex h-[50px]
                w-full
                items-center justify-center
                rounded-lg
                bg-[#006b73]
                text-[15px] font-semibold
                text-white
                transition-all
                hover:bg-[#005c63]
                active:scale-[0.99]
              "
            >
              Book a Ride
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;