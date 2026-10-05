import { ArrowRight, MapPin } from "lucide-react";

import frenchQuarter from "../assets/french-quarter.jpg";
import paradiseBeach from "../assets/paradise-beach.jpg";
import auroville from "../assets/auroville.jpg";
import mahabalipuram from "../assets/mahabalipuram.jpg";
import chidambaram from "../assets/chidambaram.jpg";
import pichavaram from "../assets/pichavaram.jpg";

type Place = {
  id: string;
  name: string;
  badge: string;
  description: string;
  image: string;
};

const places: Place[] = [
  {
    id: "french-quarter",
    name: "French Quarter & Promenade",
    badge: "In town",
    description:
      "Pastel villas, quiet lanes, cafés and the seaside promenade walk.",
    image: frenchQuarter,
  },
  {
    id: "paradise-beach",
    name: "Paradise Beach",
    badge: "Boat from Chunnambar",
    description:
      "A short ferry crossing to a golden-sand island on the Bay of Bengal.",
    image: paradiseBeach,
  },
  {
    id: "auroville",
    name: "Auroville & Matrimandir",
    badge: "~20 mins away",
    description:
      "The golden globe of peace, calm forests and community cafés.",
    image: auroville,
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram",
    badge: "~2 hrs away",
    description:
      "UNESCO shore temples and stone chariots carved by the sea.",
    image: mahabalipuram,
  },
  {
    id: "chidambaram",
    name: "Chidambaram Natarajar Temple",
    badge: "~1.5 hrs away",
    description:
      "The ancient temple of Lord Shiva's cosmic dance, a living marvel.",
    image: chidambaram,
  },
  {
    id: "pichavaram",
    name: "Pichavaram Mangrove Forest",
    badge: "~1.5 hrs away",
    description:
      "Boat through emerald mangrove waterways — India's largest mangroves.",
    image: pichavaram,
  },
];

const PlacesToVisit = () => {
  return (
    <section
      id="places-to-visit"
      className="
        w-full
        overflow-hidden
        bg-[#f7f5f1]
        text-[#111518]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
          px-5
          py-[58px]
          sm:px-6
          sm:py-[64px]
          lg:px-0
          lg:py-[62px]
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="max-w-[780px]">
          {/* Eyebrow */}
          <p
            className="
              m-0
              text-[11px]
              font-medium
              uppercase
              tracking-[0.29em]
              text-[#006b73]
              sm:text-[12px]
              sm:tracking-[0.30em]
            "
          >
            PLACES TO VISIT
          </p>

          {/* Heading */}
          <h2
            className="
              m-0
              mt-[18px]
              text-[38px]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              text-[#111518]
              sm:mt-[19px]
              sm:text-[42px]
              md:text-[44px]
              lg:text-[42px]
            "
          >
            In & around Puducherry
          </h2>

          {/* Description */}
          <p
            className="
              m-0
              mt-[18px]
              max-w-[780px]
              text-[17px]
              font-normal
              leading-[1.65]
              tracking-[-0.01em]
              text-[#526a7d]
              sm:text-[18px]
              lg:text-[19px]
              lg:leading-[1.58]
            "
          >
            From the French Quarter's pastel lanes to temple towns
            and mangrove backwaters — we know every road. Tell us
            where you want to go, and we'll plan the drive.
          </p>
        </div>

        {/* =====================================================
            PLACES GRID
        ====================================================== */}
        <div
          className="
            mt-[48px]
            grid
            grid-cols-1
            gap-[24px]
            sm:mt-[52px]
            sm:grid-cols-2
            sm:gap-[26px]
            lg:mt-[58px]
            lg:grid-cols-3
            lg:gap-[26px]
          "
        >
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type PlaceCardProps = {
  place: Place;
};

const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[15px]
        border
        border-[#ece8e2]
        bg-white
        shadow-[0_1px_2px_rgba(20,30,35,0.02)]
        transition-all
        duration-400
        ease-out
        hover:-translate-y-[4px]
        hover:border-[#d9e1df]
        hover:shadow-[0_14px_35px_rgba(30,45,50,0.10)]
      "
    >
      {/* =====================================================
          IMAGE AREA
      ====================================================== */}
      <div
        className="
          relative
          h-[285px]
          w-full
          overflow-hidden
          sm:h-[290px]
          lg:h-[313px]
        "
      >
        {/* Image */}
        <img
          src={place.image}
          alt={place.name}
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[700ms]
            ease-out
            group-hover:scale-[1.055]
          "
        />

        {/* =================================================
            IMAGE OVERLAY
        ================================================== */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/[0.72]
            via-black/[0.08]
            to-black/[0.05]
            transition-all
            duration-500
            group-hover:from-black/[0.80]
            group-hover:via-black/[0.14]
          "
        />

        {/* =================================================
            LOCATION BADGE
        ================================================== */}
        <div
          className="
            absolute
            left-[16px]
            top-[16px]
            flex
            items-center
            gap-[6px]
            rounded-full
            bg-[#3f4140]/[0.82]
            px-[11px]
            py-[7px]
            backdrop-blur-[5px]
            transition-all
            duration-300
            group-hover:bg-[#006b73]/[0.90]
          "
        >
          <MapPin
            size={13}
            strokeWidth={2}
            className="
              text-white
              transition-transform
              duration-300
              group-hover:-translate-y-[1px]
            "
            aria-hidden="true"
          />

          <span
            className="
              whitespace-nowrap
              text-[11px]
              font-semibold
              leading-none
              tracking-[0.01em]
              text-white
              sm:text-[12px]
            "
          >
            {place.badge}
          </span>
        </div>

        {/* =================================================
            PLACE TITLE
        ================================================== */}
        <div
          className="
            absolute
            bottom-[19px]
            left-[20px]
            right-[20px]
            sm:bottom-[20px]
          "
        >
          <h3
            className="
              m-0
              text-[18px]
              font-semibold
              leading-[1.2]
              tracking-[-0.025em]
              text-white
              transition-all
              duration-300
              group-hover:translate-x-[2px]
              sm:text-[19px]
            "
          >
            {place.name}
          </h3>
        </div>

        {/* =================================================
            HOVER ARROW
        ================================================== */}
        <span
          className="
            absolute
            bottom-[18px]
            right-[17px]
            flex
            h-[39px]
            w-[39px]
            translate-y-[8px]
            scale-[0.75]
            items-center
            justify-center
            rounded-full
            bg-[#006f77]
            opacity-0
            transition-all
            duration-300
            ease-out
            group-hover:translate-y-0
            group-hover:scale-100
            group-hover:opacity-100
          "
        >
          <ArrowRight
            size={17}
            strokeWidth={1.8}
            className="
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-[2px]
            "
            aria-hidden="true"
          />
        </span>
      </div>

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}
      <div
        className="
          flex
          min-h-[108px]
          flex-col
          px-[20px]
          pb-[20px]
          pt-[20px]
          sm:min-h-[110px]
          sm:px-[21px]
          sm:pb-[21px]
        "
      >
        {/* Description */}
        <p
          className="
            m-0
            max-w-[350px]
            text-[14px]
            font-normal
            leading-[1.55]
            text-[#536b7d]
            sm:text-[15px]
            sm:leading-[1.55]
          "
        >
          {place.description}
        </p>

        {/* CTA */}
        <button
          type="button"
          className="
            group/link
            mt-auto
            flex
            w-fit
            items-center
            gap-[7px]
            pt-[17px]
            text-[14px]
            font-semibold
            text-[#006b73]
            transition-colors
            duration-300
            hover:text-[#004e54]
            focus:outline-none
          "
        >
          <span>Plan this visit</span>

          <ArrowRight
            size={16}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover/link:translate-x-[4px]
            "
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
};

export default PlacesToVisit;