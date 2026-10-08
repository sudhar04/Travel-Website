import type { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const WHATSAPP_NUMBER = "919342832151";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const services: FooterLink[] = [
    {
      label: "Airport Transfers",
      href: "#services",
    },
    {
      label: "Local Rides",
      href: "#services",
    },
    {
      label: "Outstation",
      href: "#services",
    },
    {
      label: "Tour Trips",
      href: "#services",
    },
  ];

  const explore: FooterLink[] = [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Destinations",
      href: "#where-we-go",
    },
    {
      label: "Why Us",
      href: "#why-us",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <footer
      className="
        w-full
        bg-[#faf9f7]
        text-[#536273]
      "
    >
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1320px]
          px-5
          pb-12
          pt-16

          sm:px-6
          sm:pb-14
          sm:pt-[70px]

          lg:px-8
          lg:pb-12
          lg:pt-[76px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12

            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-12

            lg:grid-cols-[2.15fr_1fr_1fr_1fr]
            lg:gap-12
          "
        >
          {/* =================================================
              BRAND COLUMN
          ================================================== */}

          <div className="max-w-[440px]">
            {/* Logo */}
            <a
              href="#home"
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >
              {/* K Logo */}
              <span
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#006b73]
                  text-[18px]
                  font-bold
                  text-white
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                K
              </span>

              {/* Brand name */}
              <span
                className="
                  text-[20px]
                  font-bold
                  tracking-[-0.02em]
                  text-[#171717]
                "
              >
                Karai<span className="font-semibold">Travels</span>
              </span>
            </a>

            {/* Tagline */}
            <p
              className="
                mt-6
                text-[17px]
                leading-[1.55]
                text-[#526477]
              "
            >
              Travel with trust. Arrive with peace of mind.
            </p>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[390px]
                text-[15px]
                leading-[1.65]
                text-[#657386]
              "
            >
              Based in Puducherry, serving destinations across
              India.
            </p>

            {/* WhatsApp Button */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="
                group
                mt-7
                inline-flex
                h-[48px]
                items-center
                justify-center
                gap-2
                rounded-[8px]
                bg-[#006b73]
                px-[21px]
                text-[15px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#005c63]
                hover:shadow-[0_8px_20px_rgba(0,107,115,0.18)]
                active:translate-y-0
              "
            >
              <FaWhatsapp
                size={20}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                aria-hidden="true"
              />

              <span>WhatsApp Us</span>
            </button>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <FooterColumn
            title="Services"
            links={services}
          />

          {/* =================================================
              EXPLORE
          ================================================== */}

          <FooterColumn
            title="Explore"
            links={explore}
          />

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <FooterHeading>Contact</FooterHeading>

            <div className="mt-5 flex flex-col gap-[14px]">
              {/* Phone */}
              <ContactItem
                icon={<PhoneIcon />}
                href="tel:+919876543210"
              >
                +91 98765 43210
              </ContactItem>

              {/* Email */}
              <ContactItem
                icon={<MailIcon />}
                href="mailto:hello@karaitravels.in"
              >
                hello@karaitravels.in
              </ContactItem>

              {/* Instagram */}
              <ContactItem
                icon={<InstagramIcon />}
                href="https://instagram.com"
                external
              >
                Instagram
              </ContactItem>

              {/* Location */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[15px]
                  leading-6
                  text-[#536273]
                "
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <LocationIcon />
                </span>

                <span>Puducherry</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div
          className="
            mt-12
            h-px
            w-full
            bg-[#e4e1dc]

            sm:mt-14

            lg:mt-[54px]
          "
        />

        {/* ===================================================
            BOTTOM FOOTER
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
          "
        >
          {/* Copyright */}
          <p
            className="
              text-[13px]
              leading-6
              text-[#607083]
            "
          >
            © {currentYear} Karai Travels. All rights reserved.
          </p>

          {/* Legal links */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-6
              text-[13px]
            "
          >
            <a
              href="#privacy"
              className="
                text-[#607083]
                transition-colors
                duration-200
                hover:text-[#006b73]
              "
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="
                text-[#607083]
                transition-colors
                duration-200
                hover:text-[#006b73]
              "
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* =============================================================
   FOOTER COLUMN
============================================================= */

const FooterColumn = ({
  title,
  links,
}: FooterColumnProps) => {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>

      <nav
        className="
          mt-5
          flex
          flex-col
          gap-[10px]
        "
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="
              w-fit
              text-[15px]
              leading-6
              text-[#536273]
              transition-colors
              duration-200
              hover:text-[#006b73]
            "
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

/* =============================================================
   FOOTER HEADING
============================================================= */

const FooterHeading = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <h3
      className="
        text-[14px]
        font-medium
        uppercase
        tracking-[0.04em]
        text-[#536273]
      "
    >
      {children}
    </h3>
  );
};

/* =============================================================
   CONTACT ITEM
============================================================= */

interface ContactItemProps {
  icon: ReactNode;
  children: ReactNode;
  href: string;
  external?: boolean;
}

const ContactItem = ({
  icon,
  children,
  href,
  external = false,
}: ContactItemProps) => {
  return (
    <a
      href={href}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="
        group
        flex
        items-center
        gap-3
        text-[15px]
        leading-6
        text-[#536273]
        transition-colors
        duration-200
        hover:text-[#006b73]
      "
    >
      <span
        className="
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          text-[#4e5965]
          transition-colors
          group-hover:text-[#006b73]
        "
      >
        {icon}
      </span>

      <span>{children}</span>
    </a>
  );
};

/* =============================================================
   ICONS
============================================================= */



const PhoneIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.7 3.5H5C4.17 3.5 3.5 4.17 3.5 5C3.5 13.56 10.44 20.5 19 20.5C19.83 20.5 20.5 19.83 20.5 19V17.3C20.5 16.73 20.18 16.2 19.67 15.94L16.91 14.56C16.4 14.3 15.78 14.39 15.37 14.8L14.08 16.09C11.3 14.66 9.34 12.7 7.91 9.92L9.2 8.63C9.61 8.22 9.7 7.6 9.44 7.09L8.06 4.33C7.8 3.82 7.27 3.5 6.7 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MailIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M4.5 7L11 12.1C11.58 12.55 12.42 12.55 13 12.1L19.5 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

const InstagramIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="17.5"
        cy="6.7"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
};

const LocationIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19 10C19 14.5 12 21 12 21C12 21 5 14.5 5 10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Footer;