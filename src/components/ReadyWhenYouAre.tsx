import { ArrowRight, MessageCircle } from "lucide-react";

const ReadyWhenYouAre = () => {
  const handlePlanRide = () => {
    const bookingSection = document.getElementById("booking");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919342832151",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#101415]
      "
    >
      {/* ==============================
          BACKGROUND
      =============================== */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_25%_40%,rgba(0,105,115,0.34),transparent_42%),linear-gradient(115deg,#0d3033_0%,#102628_28%,#151718_62%,#101112_100%)]
        "
      />

      {/* Subtle dark overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/[0.08]
        "
      />

      {/* ==============================
          CONTENT
      =============================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[620px]
          w-full
          max-w-[1240px]
          items-center
          justify-center
          px-5
          py-20
          sm:min-h-[620px]
          sm:px-6
          lg:min-h-[625px]
          lg:px-8
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[780px]
            flex-col
            items-center
            text-center
          "
        >
          {/* ==============================
              EYEBROW
          =============================== */}
          <p
            className="
              m-0
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#007c87]
              sm:text-[12px]
              sm:tracking-[0.30em]
            "
          >
            READY WHEN YOU ARE
          </p>

          {/* ==============================
              HEADING
          =============================== */}
          <h2
            className="
              m-0
              mt-[24px]
              max-w-[720px]
              text-[42px]
              font-semibold
              leading-[1.02]
              tracking-[-0.045em]
              text-white
              sm:mt-[25px]
              sm:text-[52px]
              md:text-[58px]
              lg:text-[64px]
              xl:text-[66px]
            "
          >
            Your next journey
            <br />
            starts with a message.
          </h2>

          {/* ==============================
              DESCRIPTION
          =============================== */}
          <p
            className="
              m-0
              mt-[26px]
              max-w-[650px]
              text-[17px]
              font-normal
              leading-[1.5]
              tracking-[-0.015em]
              text-[#aebdc1]
              sm:mt-[28px]
              sm:text-[19px]
              lg:text-[20px]
            "
          >
            Tell us where you're going. We'll take care of the rest.
          </p>

          {/* ==============================
              BUTTONS
          =============================== */}
          <div
            className="
              mt-[40px]
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-[12px]
              sm:mt-[42px]
              sm:flex-row
              sm:gap-[12px]
            "
          >
            {/* Plan My Ride */}
            <button
              type="button"
              onClick={handlePlanRide}
              className="
                group
                flex
                h-[54px]
                w-full
                max-w-[202px]
                items-center
                justify-center
                gap-[12px]
                rounded-[8px]
                border
                border-[#007c87]
                bg-[#007c87]
                px-6
                text-[16px]
                font-semibold
                text-white
                shadow-none
                transition-all
                duration-300
                ease-out
                hover:-translate-y-[2px]
                hover:border-[#00929e]
                hover:bg-[#00929e]
                hover:shadow-[0_10px_30px_rgba(0,124,135,0.25)]
                active:translate-y-0
                focus:outline-none
                focus:ring-2
                focus:ring-[#00929e]/50
                focus:ring-offset-2
                focus:ring-offset-[#101415]
              "
            >
              <span>Plan My Ride</span>

              <ArrowRight
                size={20}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-[4px]
                "
                aria-hidden="true"
              />
            </button>

            {/* WhatsApp */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="
                group
                flex
                h-[54px]
                w-full
                max-w-[213px]
                items-center
                justify-center
                gap-[11px]
                rounded-[8px]
                border
                border-[#5b6365]
                bg-transparent
                px-6
                text-[16px]
                font-semibold
                text-white
                transition-all
                duration-300
                ease-out
                hover:-translate-y-[2px]
                hover:border-[#8b9698]
                hover:bg-white/[0.07]
                hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]
                active:translate-y-0
                focus:outline-none
                focus:ring-2
                focus:ring-white/30
                focus:ring-offset-2
                focus:ring-offset-[#101415]
              "
            >
              <MessageCircle
                size={21}
                strokeWidth={1.7}
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
        </div>
      </div>
    </section>
  );
};

export default ReadyWhenYouAre;