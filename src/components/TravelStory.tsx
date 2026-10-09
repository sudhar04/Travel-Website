import {
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import frenchQuarter from "../assets/french.jpg";
import sunsetRoad from "../assets/sunset-road.jpg";
import keralaRoad from "../assets/kerala.jpg";
import roadTrip from "../assets/kerala-hill.jpg";
import carInterior from "../assets/shore.jpg";
import bangalore from "../assets/bangalore.jpg";

type Story = {
  id: number;
  name: string;
  image: string;
  imagePosition?: string;
};

const stories: Story[] = [
  {
    id: 1,
    name: "White Town, Puducherry",
    image: frenchQuarter,
    imagePosition: "object-center",
  },
  {
    id: 2,
    name: "Indian highway at sunset",
    image: sunsetRoad,
    imagePosition: "object-center",
  },
  {
    id: 3,
    name: "Kerala Backwaters Road",
    image: keralaRoad,
    imagePosition: "object-center",
  },
  {
    id: 4,
    name: "Kerala Western Ghats",
    image: roadTrip,
    imagePosition: "object-[center_25%]",
  },
  {
    id: 5,
    name: "Mahabalipuram shore temple",
    image: carInterior,
    imagePosition: "object-center",
  },
  {
    id: 6,
    name: "Bangalore Skyline",
    image: bangalore,
    imagePosition: "object-[center_50%]",
  },
];

const TravelStory = () => {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <section
      id="travel-stories"
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
          lg:py-[70px]
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          className="
            mb-[38px]

            sm:mb-[44px]

            lg:mb-[50px]
          "
        >
          <p
            className="
              m-0
              text-[11px]
              font-medium
              uppercase
              tracking-[0.30em]
              text-[#006b73]

              sm:text-[12px]
            "
          >
            TRAVEL STORIES
          </p>

          <h2
            className="
              m-0
              mt-[17px]

              text-[38px]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]

              text-[#111518]

              sm:text-[42px]

              md:text-[44px]

              lg:text-[46px]
            "
          >
            Moments from the road.
          </h2>
        </div>

        {/* =====================================================
            MAIN GALLERY

            IMPORTANT:
            items-start prevents the columns from stretching.
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-[16px]

            md:gap-[18px]

            lg:grid-cols-[646px_1fr]
            lg:gap-[18px]
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              flex
              min-w-0
              flex-col
              gap-[18px]
            "
          >
            {/* LARGE IMAGE */}

            <StoryCard
              story={stories[0]}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
              variant="large"
            />

            {/* BANGALORE */}

            <StoryCard
              story={stories[5]}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
              variant="bottom"
            />
          </div>

          {/* =================================================
              RIGHT SIDE

              VERY IMPORTANT:
              grid-rows-[220px_220px]

              This prevents the huge empty space that
              you are currently seeing.
          ================================================== */}

          <div
            className="
              grid
              min-w-0

              grid-cols-1
              gap-[18px]

              sm:grid-cols-2

              lg:grid-rows-[220px_220px]
            "
          >
            {/* ROAD AHEAD */}

            <StoryCard
              story={stories[1]}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
              variant="small"
            />

            {/* KERALA */}

            <StoryCard
              story={stories[2]}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
              variant="small"
            />

            {/* JOURNEYS */}

            <StoryCard
              story={stories[3]}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
              variant="small"
            />

            {/* COMFORT */}

            <StoryCard
              story={stories[4]}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
              variant="small"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   STORY CARD
============================================================= */

type StoryCardProps = {
  story: Story;

  activeStory: number | null;

  setActiveStory: Dispatch<SetStateAction<number | null>>;

  variant: "large" | "small" | "bottom";
};

const StoryCard = ({
  story,
  activeStory,
  setActiveStory,
  variant,
}: StoryCardProps) => {
  const isActive = activeStory === story.id;

  /* ===========================================================
     CARD HEIGHTS
  =========================================================== */

  let heightClass = "";

  if (variant === "large") {
    heightClass = `
      h-[330px]

      sm:h-[390px]

      lg:h-[470px]
    `;
  }

  if (variant === "small") {
    heightClass = `
      h-[225px]

      sm:h-[210px]

      lg:h-[220px]
    `;
  }

  if (variant === "bottom") {
    heightClass = `
      h-[220px]

      sm:h-[230px]

      lg:h-[220px]
    `;
  }

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`View ${story.name}`}
      onMouseEnter={() => setActiveStory(story.id)}
      onMouseLeave={() => setActiveStory(null)}
      onFocus={() => setActiveStory(story.id)}
      onBlur={() => setActiveStory(null)}
      className={`
        group
        relative
        w-full
        min-w-0

        ${heightClass}

        overflow-hidden
        rounded-[14px]

        bg-[#dfe3e1]

        cursor-pointer

        outline-none

        transition-all
        duration-500
        ease-out

        hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]

        focus-visible:ring-2
        focus-visible:ring-[#006b73]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#f7f5f1]
      `}
    >
      {/* =====================================================
          IMAGE

          This guarantees 100% card coverage.
      ====================================================== */}

      <img
        src={story.image}
        alt={story.name}
        loading="lazy"
        draggable={false}
        className={`
          absolute
          inset-0
          z-0
          block
          h-full
          w-full
          max-w-none
          object-cover
          ${story.imagePosition ?? "object-center"}
          select-none
          transition-transform
          duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-[1.055]
        `}
      />

      {/* =====================================================
          DARK HOVER OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-black/[0.02]

          transition-all
          duration-500

          group-hover:bg-black/[0.10]
        "
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10

          h-[55%]

          bg-gradient-to-t
          from-black/[0.82]
          via-black/[0.35]
          to-transparent

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* =====================================================
          TITLE
      ====================================================== */}

      <div
        className={`
          pointer-events-none

          absolute
          inset-x-0
          bottom-0
          z-20

          px-[18px]
          pb-[17px]

          sm:px-[20px]
          sm:pb-[18px]

          lg:px-[21px]
          lg:pb-[19px]

          transition-all
          duration-500

          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-[14px] opacity-0"
          }
        `}
      >
        <h3
          className="
            m-0

            max-w-[92%]

            text-[15px]
            font-medium
            leading-[1.25]
            tracking-[-0.015em]

            text-white

            sm:text-[16px]

            lg:text-[16px]
          "
        >
          {story.name}
        </h3>
      </div>

      {/* =====================================================
          PREMIUM BORDER
      ====================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0
          z-30

          rounded-[14px]

          border
          border-white/0

          transition-colors
          duration-500

          group-hover:border-white/20
        "
      />
    </article>
  );
};

export default TravelStory;