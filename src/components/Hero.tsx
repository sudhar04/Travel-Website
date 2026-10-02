import React from "react";
import heroImage from "../assets/hero-road.jpg";

const WHATSAPP_NUMBER = "919XXXXXXXXX";

const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handlePlanRide = () => {
    document
      .getElementById("book-a-ride")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-[760px]
        w-full
        overflow-hidden
        bg-[#111]
        sm:min-h-[780px]
        lg:min-h-[790px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Coastal road near Puducherry"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/45
        "
      />

      {/* Stronger bottom darkness */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/35
          via-black/20
          to-[#0c1112]/85
        "
      />

      {/* Slight left-side darkness for text readability */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full
          bg-gradient-to-r
          from-black/35
          via-transparent
          to-transparent
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[760px]
          w-full
          max-w-[1320px]
          items-center
          px-5
          pb-[105px]
          pt-[115px]

          sm:min-h-[780px]
          sm:px-6
          sm:pb-[110px]

          lg:min-h-[790px]
          lg:px-8
          lg:pb-[105px]
        "
      >
        <div
          className="
            w-full
            max-w-[700px]
          "
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <p
            className="
              mb-5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.19em]
              text-white/85

              sm:text-[12px]
              sm:tracking-[0.20em]

              lg:mb-6
            "
          >
            Puducherry · Tamil Nadu · India
          </p>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1
            className="
              max-w-[680px]
              text-[48px]
              font-bold
              leading-[0.98]
              tracking-[-0.045em]
              text-white

              sm:text-[58px]
              sm:leading-[0.97]

              md:text-[66px]

              lg:text-[76px]
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
          ================================================== */}

          <p
            className="
              mt-7
              max-w-[650px]
              text-[16px]
              font-normal
              leading-[1.65]
              text-white/85

              sm:mt-7
              sm:text-[17px]

              lg:mt-6
              lg:text-[18px]
              lg:leading-[1.65]
            "
          >
            Reliable cab and outstation travel from Puducherry
            to Chennai, Bangalore, Kerala and destinations
            across India.
          </p>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-3

              sm:mt-9
              sm:flex-row
              sm:items-center
            "
          >
            {/* Plan My Ride */}
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

            {/* WhatsApp */}
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
              {/* Chat / WhatsApp style icon */}
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
          ================================================== */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-y-3

              sm:mt-9
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
      {/* Check */}
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