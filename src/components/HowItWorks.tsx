import type { ReactNode } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Tell us where you're going",
      description:
        "Share your pickup, destination, date and trip type.",
    },
    {
      number: "02",
      title: "Send your request",
      description:
        "We check the date and prepare your travel request.",
    },
    {
      number: "03",
      title: "We coordinate",
      description:
        "Our team confirms the vehicle, driver and fare with you on WhatsApp.",
    },
    {
      number: "04",
      title: "You travel",
      description:
        "Arrive comfortably — with peace of mind at every destination.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="
        w-full
        bg-[#faf9f7]

        px-5
        py-[76px]

        sm:px-6
        sm:py-[84px]

        lg:px-8
        lg:py-[96px]
      "
    >
      {/* =====================================================
          COMMON CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            max-w-[520px]

            mb-[64px]

            sm:mb-[72px]

            lg:mb-[76px]
          "
        >
          {/* Eyebrow */}

          <p
            className="
              mb-4

              text-[11px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#006b73]

              sm:text-[12px]
            "
          >
            How It Works
          </p>

          {/* Heading */}

          <h2
            className="
              text-[40px]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#12161a]

              sm:text-[46px]

              md:text-[50px]

              lg:text-[52px]
            "
          >
            A simple journey,
            <br />
            start to finish.
          </h2>
        </div>

        {/* ===================================================
            DESKTOP / TABLET TIMELINE
        ==================================================== */}

        <div className="relative">
          {/* =================================================
              CONNECTING LINE

              Desktop only
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute

              left-[4.2%]
              right-[4.2%]
              top-[34px]

              hidden
              h-px

              bg-[#cbdcdf]

              lg:block
            "
            aria-hidden="true"
          />

          {/* =================================================
              STEPS
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-10

              lg:grid-cols-4
              lg:gap-8
            "
          >
            {steps.map((step, index) => (
              <StepItem
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   STEP ITEM
============================================================= */

interface StepItemProps {
  step: Step;
  index: number;
}

const StepItem = ({ step, index }: StepItemProps) => {
  return (
    <div
      className="
        group
        relative

        flex
        gap-5

        lg:block
      "
    >
      {/* =====================================================
          MOBILE TIMELINE LINE
      ====================================================== */}

      {index < 3 && (
        <div
          className="
            absolute
            left-[24px]
            top-[58px]

            h-[calc(100%+40px)]
            w-px

            bg-[#d5e1e2]

            lg:hidden
          "
          aria-hidden="true"
        />
      )}

      {/* =====================================================
          NUMBER CIRCLE
      ====================================================== */}

      <div
        className="
          relative
          z-10

          flex
          h-[50px]
          w-[50px]
          shrink-0
          items-center
          justify-center

          rounded-full

          border
          border-[#e4e1dc]

          bg-white

          text-[18px]
          font-medium
          tracking-[-0.02em]
          text-[#006b73]

          shadow-[0_2px_8px_rgba(20,30,35,0.025)]

          transition-all
          duration-300

          group-hover:border-[#006b73]
          group-hover:bg-[#006b73]
          group-hover:text-white
          group-hover:shadow-[0_8px_20px_rgba(0,107,115,0.14)]

          lg:h-[68px]
          lg:w-[68px]
        "
      >
        {step.number}
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          min-w-0
          pt-[1px]

          lg:mt-[26px]
          lg:pt-0
        "
      >
        {/* Title */}

        <h3
          className="
            text-[18px]
            font-medium
            leading-[1.3]
            tracking-[-0.02em]
            text-[#15191d]

            transition-colors
            duration-300

            group-hover:text-[#006b73]

            sm:text-[19px]

            lg:text-[20px]
          "
        >
          {step.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-2

            max-w-[270px]

            text-[14px]
            leading-[1.65]
            text-[#69727d]

            sm:text-[15px]

            lg:text-[15px]
          "
        >
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;