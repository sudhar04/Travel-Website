import type { ReactNode } from "react";

import airportImage from "../assets/airport-transfer.jpg";
import localRidesImage from "../assets/local-rides.jpg";
import outstationImage from "../assets/outstation.jpg";
import tourTripsImage from "../assets/tour-trips.jpg";

import {
  LuPlane,
  LuMapPin,
  LuNavigation,
  LuCompass,
} from "react-icons/lu";

interface OfferCard {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
  href: string;
}

const WhatWeOffer = () => {
  const offers: OfferCard[] = [
    {
      title: "Airport Transfers",
      description:
        "Reliable pickup and drop for Chennai Airport and beyond.",
      image: airportImage,
      href: "#booking",
      icon: <PlaneIcon />,
    },
    {
      title: "Local Rides",
      description:
        "Comfortable travel around Puducherry and nearby destinations.",
      image: localRidesImage,
      href: "#booking",
      icon: <LocationIcon />,
    },
    {
      title: "Outstation",
      description:
        "Travel from Puducherry to Chennai, Bangalore, Kerala and beyond.",
      image: outstationImage,
      href: "#booking",
      icon: <RouteIcon />,
    },
    {
      title: "Tour Trips",
      description:
        "Flexible journeys for families, groups and multi-day travel.",
      image: tourTripsImage,
      href: "#booking",
      icon: <CompassIcon />,
    },
  ];

  return (
    <section
      id="services"
      className="
        w-full
        bg-[#faf9f7]

        px-5
        py-16

        sm:px-6
        sm:py-[72px]

        lg:px-8
        lg:py-[80px]
      "
    >
      {/* =====================================================
          COMMON CONTENT CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
        "
      >
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div
          className="
            mb-9

            sm:mb-11

            lg:mb-[48px]
          "
        >
          {/* Eyebrow */}
          <p
            className="
              mb-3

              text-[11px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#006b73]

              sm:text-[12px]
            "
          >
            What We Offer
          </p>

          {/* Heading */}
          <h2
            className="
              max-w-[760px]

              text-[38px]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              text-[#12161a]

              sm:text-[44px]

              md:text-[48px]

              lg:text-[52px]
            "
          >
            One ride. Many ways to travel.
          </h2>
        </div>

        {/* ===================================================
            CARDS
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-5

            md:grid-cols-2
            md:gap-5

            lg:gap-6
          "
        >
          {offers.map((offer) => (
            <OfferCard
              key={offer.title}
              offer={offer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   OFFER CARD
============================================================= */

interface OfferCardProps {
  offer: OfferCard;
}

const OfferCard = ({ offer }: OfferCardProps) => {
  return (
    <article
      className="
        group
        overflow-hidden

        rounded-[16px]

        border
        border-[#e5e1dc]

        bg-white

        transition-all
        duration-500
        ease-out

        hover:-translate-y-[3px]
        hover:border-[#d8d3cc]
        hover:shadow-[0_14px_35px_rgba(20,30,35,0.09)]
      "
    >
      {/* ===================================================
          IMAGE
      ==================================================== */}

      <div
        className="
          relative
          block
          h-[215px]
          overflow-hidden

          sm:h-[235px]

          md:h-[230px]

          lg:h-[245px]
        "
      >
        <img
          src={offer.image}
          alt={offer.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover

            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.045]
          "
        />

        {/* Subtle hover overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-black/0
            transition-colors
            duration-500

            group-hover:bg-black/[0.06]
          "
        />

        {/* =================================================
            ICON
        ================================================== */}

        <div
          
        className="
          absolute
          left-4
          top-4
          flex
          h-[44px]
          w-[44px]
          items-center
          justify-center
          rounded-[9px]
          bg-[#e2edf2]
          text-[#005568]
          shadow-[0_2px_8px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          group-hover:scale-105
        "
        >
          {offer.icon}
        </div>
      </div>

      {/* ===================================================
          CONTENT
      ==================================================== */}

      <div
        className="
          px-6
          pb-6
          pt-6

          sm:px-7
          sm:pb-7
          sm:pt-6
        "
      >
        {/* Title */}

        <h3
          className="
            text-[20px]
            font-semibold
            leading-[1.25]
            tracking-[-0.02em]
            text-[#111519]

            sm:text-[21px]
          "
        >
          {offer.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-2.5

            max-w-[580px]

            text-[15px]
            leading-[1.55]
            text-[#53667a]

            sm:text-[16px]
          "
        >
          {offer.description}
        </p>

        {/* Request */}

          <a
            href={offer.href}
            onClick={(e) => {
              e.preventDefault();

              document.getElementById("booking")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="
              group/link
              mt-4
              inline-flex
              cursor-pointer
              items-center
              gap-1.5
              text-[13px]
              font-semibold
              text-[#006b73]
              transition-colors
              duration-200
              hover:text-[#004f56]
            "
          >
          <span>Request this ride</span>

          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="
              transition-transform
              duration-300

              group-hover/link:translate-x-[2px]
              group-hover/link:-translate-y-[2px]
            "
          >
            <path
              d="M7 17L17 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M9 7H17V15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};

/* =============================================================
   ICONS
============================================================= */


const PlaneIcon = () => (
  <LuPlane size={21} strokeWidth={1.8} aria-hidden="true" />
);

const LocationIcon = () => (
  <LuMapPin size={21} strokeWidth={1.8} aria-hidden="true" />
);

const RouteIcon = () => (
  <LuNavigation size={21} strokeWidth={1.8} aria-hidden="true" />
);

const CompassIcon = () => (
  <LuCompass size={21} strokeWidth={1.8} aria-hidden="true" />
);




export default WhatWeOffer;