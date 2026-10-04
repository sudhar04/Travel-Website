import type { ReactNode } from "react";

import airportImage from "../assets/airport-transfer.jpg";
import localRidesImage from "../assets/local-rides.jpg";
import outstationImage from "../assets/outstation.jpg";
import tourTripsImage from "../assets/tour-trips.jpg";

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
      href: "#book-a-ride",
      icon: <PlaneIcon />,
    },
    {
      title: "Local Rides",
      description:
        "Comfortable travel around Puducherry and nearby destinations.",
      image: localRidesImage,
      href: "#book-a-ride",
      icon: <LocationIcon />,
    },
    {
      title: "Outstation",
      description:
        "Travel from Puducherry to Chennai, Bangalore, Kerala and beyond.",
      image: outstationImage,
      href: "#book-a-ride",
      icon: <RouteIcon />,
    },
    {
      title: "Tour Trips",
      description:
        "Flexible journeys for families, groups and multi-day travel.",
      image: tourTripsImage,
      href: "#book-a-ride",
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

      <a
        href={offer.href}
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
            h-[42px]
            w-[42px]
            items-center
            justify-center

            rounded-[8px]

            bg-white/90
            text-[#006b73]

            shadow-[0_3px_12px_rgba(0,0,0,0.08)]

            backdrop-blur-sm

            transition-all
            duration-300

            group-hover:scale-105
            group-hover:bg-white
          "
        >
          {offer.icon}
        </div>
      </a>

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
          className="
            group/link
            mt-4

            inline-flex
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
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M21 4.8C21 4.8 19.5 4 18.2 4.5L13.8 6.4L7.3 3.2C6.8 3 6.2 3.1 5.8 3.5L5 4.3L10.8 8.2L7.3 9.8L4.5 8.8L3.5 9.8L6.3 12L10.2 11L14.2 8.7L18.4 7.5C19.9 7 21 5.8 21 4.8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M10.5 11L8.5 19.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path
      d="M7.5 17H11.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M19 10C19 14.5 12 21 12 21C12 21 5 14.5 5 10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle
      cx="12"
      cy="10"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.7"
    />
  </svg>
);

const RouteIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 19L19 5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />

    <path
      d="M7 7H5V9"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M17 17H19V15"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M5 5L8 5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />

    <path
      d="M16 19L19 19"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const CompassIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1.7"
    />

    <path
      d="M15.5 8.5L13.7 13.7L8.5 15.5L10.3 10.3L15.5 8.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

export default WhatWeOffer;