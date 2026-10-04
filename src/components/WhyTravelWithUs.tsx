import {
  Armchair,
  HeartHandshake,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

// Change this path to your actual image file
import carInterior from "../assets/car-interior.jpg";

type Benefit = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const benefits: Benefit[] = [
  {
    title: "Comfort",
    description:
      "Relax into a journey designed around your comfort.",
    icon: Armchair,
  },
  {
    title: "Trust",
    description:
      "Clear communication and direct coordination from request to ride.",
    icon: ShieldCheck,
  },
  {
    title: "Flexibility",
    description:
      "One-way, round-trip, local and long-distance journeys.",
    icon: RefreshCw,
  },
  {
    title: "Peace of Mind",
    description:
      "We coordinate the journey so you don't have to chase multiple people.",
    icon: HeartHandshake,
  },
];

const WhyTravelWithUs = () => {
  return (
    <section
      id="why-us"
      className="
        w-full
        overflow-hidden
        bg-[#0d1113]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          gap-[52px]
          px-5
          py-[64px]
          sm:px-6
          sm:py-[72px]
          lg:grid
          lg:grid-cols-[1.04fr_0.96fr]
          lg:items-center
          lg:gap-[66px]
          lg:px-0
          lg:py-[76px]
          xl:gap-[68px]
        "
      >
        {/* ==================================================
            IMAGE
        =================================================== */}
        <div
          className="
            group
            relative
            order-1
            h-[360px]
            w-full
            overflow-hidden
            rounded-[18px]
            sm:h-[450px]
            lg:h-[612px]
            lg:max-h-[612px]
          "
        >
          <img
            src={carInterior}
            alt="Comfortable car interior"
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.025]
            "
          />

          {/* subtle image overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/[0.16]
              via-transparent
              to-white/[0.03]
            "
          />
        </div>

        {/* ==================================================
            CONTENT
        =================================================== */}
        <div
          className="
            order-2
            flex
            w-full
            flex-col
            justify-center
          "
        >
          {/* Eyebrow */}
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
            WHY TRAVEL WITH US
          </p>

          {/* Heading */}
          <h2
            className="
              m-0
              mt-[20px]
              max-w-[540px]
              text-[40px]
              font-semibold
              leading-[1.04]
              tracking-[-0.045em]
              text-white
              sm:mt-[22px]
              sm:text-[48px]
              md:text-[54px]
              lg:text-[52px]
              xl:text-[54px]
            "
          >
            Travel without
            <br />
            the travel stress.
          </h2>

          {/* ==================================================
              BENEFITS
          =================================================== */}
          <div
            className="
              mt-[42px]
              grid
              grid-cols-1
              gap-x-[48px]
              gap-y-[38px]
              sm:mt-[48px]
              sm:grid-cols-2
              sm:gap-x-[42px]
              sm:gap-y-[42px]
              lg:mt-[48px]
              lg:gap-x-[46px]
              lg:gap-y-[42px]
            "
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="
                    group
                    rounded-[12px]
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-[2px]
                  "
                >
                  {/* Icon box */}
                  <div
                    className="
                      flex
                      h-[46px]
                      w-[46px]
                      items-center
                      justify-center
                      rounded-[8px]
                      bg-[#202629]
                      transition-all
                      duration-300
                      group-hover:bg-[#263438]
                      group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="
                        text-[#007c87]
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:text-[#00a1ad]
                      "
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      m-0
                      mt-[19px]
                      text-[18px]
                      font-semibold
                      leading-[1.25]
                      tracking-[-0.02em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#00a1ad]
                      sm:text-[19px]
                    "
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      m-0
                      mt-[12px]
                      max-w-[270px]
                      text-[15px]
                      font-normal
                      leading-[1.55]
                      tracking-[-0.005em]
                      text-[#9caeb3]
                      transition-colors
                      duration-300
                      group-hover:text-[#b4c2c6]
                      sm:text-[15px]
                    "
                  >
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTravelWithUs;