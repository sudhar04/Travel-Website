import { useState } from "react";

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
  className: string;
};

const stories: Story[] = [
  {
    id: 1,
    name: "White Town, Puducherry",
    image: frenchQuarter,
    className: "story-large",
  },
  {
    id: 2,
    name: "The Road Ahead",
    image: sunsetRoad,
    className: "story-small",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    image: keralaRoad,
    className: "story-small",
  },
  {
    id: 4,
    name: "Journeys Together",
    image: roadTrip,
    className: "story-small",
  },
  {
    id: 5,
    name: "Comfort on the Road",
    image: carInterior,
    className: "story-small",
  },
  {
    id: 6,
    name: "Bangalore by Night",
    image: bangalore,
    className: "story-bottom",
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
            HEADER
        ====================================================== */}

        <div className="mb-[40px] sm:mb-[46px] lg:mb-[50px]">
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
              mt-[18px]
              text-[38px]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              text-[#111518]
              sm:text-[42px]
              md:text-[44px]
            "
          >
            Moments from the road.
          </h2>
        </div>

        {/* =====================================================
            STORY GALLERY
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[16px]
            sm:gap-[18px]
            lg:grid-cols-[646px_1fr]
            lg:gap-[18px]
          "
        >
          {/* =================================================
              LEFT COLUMN
          ================================================== */}

          <div
            className="
              flex
              flex-col
              gap-[18px]
            "
          >
            {/* Large Story */}

            <StoryCard
              story={stories[0]}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
              large
            />

            {/* Sixth Story */}

            <StoryCard
              story={stories[5]}
              activeStory={activeStory}
              setActiveStory={setActiveStory}
              bottom
            />
          </div>

          {/* =================================================
              RIGHT 2 × 2 GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-[18px]
              sm:grid-cols-2
            "
          >
            {stories.slice(1, 5).map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                activeStory={activeStory}
                setActiveStory={setActiveStory}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type StoryCardProps = {
  story: Story;
  activeStory: number | null;
  setActiveStory: React.Dispatch<React.SetStateAction<number | null>>;
  large?: boolean;
  bottom?: boolean;
};

const StoryCard = ({
  story,
  activeStory,
  setActiveStory,
  large = false,
  bottom = false,
}: StoryCardProps) => {
  const isActive = activeStory === story.id;

  return (
    <article
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-[14px]
        bg-[#dfe3e1]
        cursor-pointer
        ${large ? "h-[430px] sm:h-[455px] lg:h-[430px]" : ""}
        ${bottom ? "h-[210px] sm:h-[230px] lg:h-[210px]" : ""}
        ${
          !large && !bottom
            ? "h-[230px] sm:h-[207px]"
            : ""
        }
      `}
      onMouseEnter={() => setActiveStory(story.id)}
      onMouseLeave={() => setActiveStory(null)}
      onFocus={() => setActiveStory(story.id)}
      onBlur={() => setActiveStory(null)}
      tabIndex={0}
      role="button"
      aria-label={`View ${story.name}`}
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <img
        src={story.image}
        alt={story.name}
        loading="lazy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-[1.055]
        "
      />

      {/* =====================================================
          DEFAULT SUBTLE OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/[0.02]
          transition-all
          duration-500
          group-hover:bg-black/[0.08]
        "
      />

      {/* =====================================================
          HOVER BOTTOM GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[48%]
          bg-gradient-to-t
          from-black/[0.78]
          via-black/[0.28]
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* =====================================================
          STORY NAME
          Hidden until hover
      ====================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          px-[20px]
          pb-[18px]
          transition-all
          duration-500
          ease-out
          sm:px-[22px]
          sm:pb-[20px]
          ${
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-[12px] opacity-0"
          }
        `}
      >
        <h3
          className="
            m-0
            text-[16px]
            font-medium
            leading-[1.25]
            tracking-[-0.015em]
            text-white
            sm:text-[17px]
            lg:text-[16px]
          "
        >
          {story.name}
        </h3>
      </div>

      {/* =====================================================
          PREMIUM HOVER BORDER
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
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