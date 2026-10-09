import React from "react";
import journeyImage from "../assets/road.jpg";

interface BenefitProps {
  children: React.ReactNode;
}

const MoreThanRide: React.FC = () => {
  const benefits = [
    "Comfortable travel",
    "Personal coordination",
    "Reliable communication",
    "Flexible journeys",
  ];

  return (
    <section
      className="
        relative
        w-full
        h-[440px]
        overflow-hidden

        sm:h-[450px]

        lg:h-[455px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <img
        src={journeyImage}
        alt="Coastal road journey"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[#00191d]/55
        "
      />

      {/* Slight gradient for depth */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/20
          via-transparent
          to-black/20
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1240px]
          items-center
          justify-center

          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            text-center

            -translate-y-[2px]
          "
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <p
            className="
              mb-5

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.24em]

              text-[#008a95]

              sm:text-[11px]
            "
          >
            More Than a Vehicle
          </p>

          {/* =================================================
              HEADING
          ================================================== */}

          <h2
            className="
              max-w-[760px]

              text-[38px]
              font-medium
              leading-[1.05]
              tracking-[-0.045em]

              text-white

              sm:text-[44px]

              md:text-[48px]

              lg:text-[52px]
            "
          >
            Your journey deserves
            <br />
            more than just a vehicle.
          </h2>

          {/* =================================================
              BENEFITS
          ================================================== */}

          <div
            className="
              mt-8

              flex
              flex-wrap
              items-center
              justify-center

              gap-x-7
              gap-y-3

              sm:mt-9
              sm:gap-x-8

              lg:mt-8
              lg:gap-x-9
            "
          >
            {benefits.map((benefit) => (
              <Benefit key={benefit}>
                {benefit}
              </Benefit>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   BENEFIT
============================================================= */

const Benefit: React.FC<BenefitProps> = ({ children }) => {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-2

        whitespace-nowrap

        text-[13px]
        font-medium
        text-white/90

        transition-all
        duration-300

        hover:text-white
      "
    >
      {/* Dot */}

      <span
        className="
          h-[6px]
          w-[6px]
          shrink-0
          rounded-full

          bg-[#007c88]

          transition-all
          duration-300

          group-hover:scale-[1.35]
          group-hover:bg-[#00a5b1]
        "
      />

      <span>{children}</span>
    </div>
  );
};

export default MoreThanRide;