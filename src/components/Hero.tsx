import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import heroImage from "../assets/hero-road1.png";

const WHATSAPP_NUMBER = "919342832151";

const Hero: React.FC = () => {
  /*
   * =========================================================
   * SCROLL REVEAL
   * =========================================================
   */

  useEffect(() => {
    const reveal = ScrollReveal();

    reveal.reveal(".hero-eyebrow", {
      distance: "20px",
      origin: "bottom",
      duration: 800,
      delay: 150,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      reset: false,
      mobile: true,
    });

    reveal.reveal(".hero-title", {
      distance: "35px",
      origin: "bottom",
      duration: 1000,
      delay: 280,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      reset: false,
      mobile: true,
    });

    reveal.reveal(".hero-description", {
      distance: "25px",
      origin: "bottom",
      duration: 850,
      delay: 450,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      reset: false,
      mobile: true,
    });

    reveal.reveal(".hero-actions", {
      distance: "25px",
      origin: "bottom",
      duration: 850,
      delay: 600,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      reset: false,
      mobile: true,
    });

    reveal.reveal(".hero-benefits", {
      distance: "20px",
      origin: "bottom",
      duration: 800,
      delay: 750,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      reset: false,
      mobile: true,
    });

    return () => {
      reveal.destroy();
    };
  }, []);

  /*
   * =========================================================
   * WHATSAPP
   * =========================================================
   */

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /*
   * =========================================================
   * PLAN MY RIDE
   * =========================================================
   */

  const handlePlanRide = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        h-[720px]
        min-h-[680px]
        w-full
        overflow-hidden
        bg-[#111]
        sm:h-[750px]
        sm:min-h-[700px]
        lg:h-[790px]
        lg:min-h-[720px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <img
          src={heroImage}
          alt="Coastal road near Puducherry"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[center_62%]
            sm:object-[center_60%]
            lg:object-[center_58%]
          "
        />

      </div>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/40
        "
      />

      {/* =====================================================
          TOP / BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/35
          via-black/10
          to-[#0c1112]/85
        "
      />

      {/* =====================================================
          LEFT GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full
          bg-gradient-to-r
          from-black/50
          via-black/15
          to-transparent
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1320px]
          items-center
          px-5
          pb-[70px]
          pt-[105px]
          sm:px-6
          sm:pb-[75px]
          sm:pt-[110px]
          lg:px-8
          lg:pb-[80px]
          lg:pt-[120px]
        "
      >
        <div className="w-full max-w-[700px]">

          {/* =================================================
              EYEBROW
          ================================================= */}

          <p
            className="
              hero-eyebrow
              mb-5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.19em]
              text-white/90
              sm:text-[12px]
              sm:tracking-[0.20em]
              lg:mb-6
            "
          >
            Puducherry · Tamil Nadu · India
          </p>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            className="
              hero-title
              max-w-[680px]
              text-[46px]
              font-bold
              leading-[0.98]
              tracking-[-0.045em]
              text-white
              sm:text-[56px]
              sm:leading-[0.97]
              md:text-[64px]
              lg:text-[74px]
              lg:leading-[0.96]
            "
          >
            Wherever you're
            <br />
            headed, we'll
            <br />
            get you there.
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              hero-description
              mt-6
              max-w-[650px]
              text-[15px]
              font-normal
              leading-[1.65]
              text-white/85
              sm:mt-7
              sm:text-[17px]
              lg:mt-6
              lg:text-[18px]
              lg:leading-[1.6]
            "
          >
            Reliable cab and outstation travel from Puducherry
            to Chennai, Bangalore, Kerala and destinations
            across India.
          </p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div
            className="
              hero-actions
              mt-7
              flex
              flex-col
              gap-3
              sm:mt-8
              sm:flex-row
              sm:items-center
            "
          >

            {/* PLAN MY RIDE */}

            <button
              type="button"
              onClick={handlePlanRide}
              className="
                group
                flex
                h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-[8px]
                bg-[#006b73]
                px-7
                text-[16px]
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#005d64]
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                active:translate-y-0
                sm:w-auto
              "
            >
              <span>Plan My Ride</span>

              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* WHATSAPP */}

            <button
              type="button"
              onClick={handleWhatsApp}
              className="
                flex
                h-[52px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-[8px]
                border
                border-white/25
                bg-black/10
                px-7
                text-[16px]
                font-semibold
                text-white
                backdrop-blur-[3px]
                transition-all
                duration-300
                hover:border-white/45
                hover:bg-white/10
                sm:w-auto
              "
            >

              {/* WhatsApp icon */}

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20.5 11.5C20.5 16.194 16.694 20 12 20C10.52 20 9.13 19.62 7.93 18.95L4 20L5.05 16.07C4.38 14.87 4 13.48 4 12C4 7.306 7.806 3.5 12.5 3.5C17.194 3.5 21 7.306 21 12"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M8.5 9.5C8.8 11.8 10.5 13.9 13 14.7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

              <span>WhatsApp Us</span>
            </button>

          </div>

          {/* =================================================
              BENEFITS
          ================================================= */}

          <div
            className="
              hero-benefits
              mt-7
              grid
              grid-cols-1
              gap-y-3
              sm:mt-8
              sm:grid-cols-2
              sm:gap-x-8
              sm:gap-y-3
              lg:flex
              lg:flex-wrap
              lg:gap-x-7
              lg:gap-y-3
            "
          >
            <Benefit text="Comfortable rides" />
            <Benefit text="Experienced drivers" />
            <Benefit text="Flexible travel" />
            <Benefit text="Direct WhatsApp booking" />
          </div>

        </div>
      </div>
    </section>
  );
};

/* =============================================================
   BENEFIT COMPONENT
============================================================= */

interface BenefitProps {
  text: string;
}

const Benefit: React.FC<BenefitProps> = ({ text }) => {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        text-[13px]
        font-medium
        text-white/85
        sm:text-[14px]
      "
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-[#008c96]"
      >
        <path
          d="M5 12.5L9.2 16.5L19 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>{text}</span>
    </div>
  );
};

export default Hero;