import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Destination = {
  id: string;
  name: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
};

type Route = {
  id: string;
  destination: string;
  duration: string;
};

const destinations: Destination[] = [
  {
    id: "chennai",
    name: "Chennai",
    x: 330,
    y: 145,
    labelX: 310,
    labelY: 133,
  },
  {
    id: "bangalore",
    name: "Bangalore",
    x: 275,
    y: 205,
    labelX: 236,
    labelY: 198,
  },
  {
    id: "kerala",
    name: "Kerala",
    x: 250,
    y: 300,
    labelX: 220,
    labelY: 292,
  },
  {
    id: "goa",
    name: "Goa",
    x: 185,
    y: 235,
    labelX: 168,
    labelY: 220,
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    x: 300,
    y: 95,
    labelX: 270,
    labelY: 82,
  },
];

const routes: Route[] = [
  {
    id: "chennai",
    destination: "Puducherry → Chennai",
    duration: "~3 hrs",
  },
  {
    id: "bangalore",
    destination: "Puducherry → Bangalore",
    duration: "~6 hrs",
  },
  {
    id: "kerala",
    destination: "Puducherry → Kerala",
    duration: "~9 hrs",
  },
  {
    id: "goa",
    destination: "Puducherry → Goa",
    duration: "~14 hrs",
  },
  {
    id: "hyderabad",
    destination: "Puducherry → Hyderabad",
    duration: "~12 hrs",
  },
];

const WhereWeGo = () => {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  const activeDestination = activeRoute
    ? destinations.find(
        (destination) => destination.id === activeRoute
      )
    : null;

  return (
    <section
      id="destinations"
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
          py-[52px]
          sm:px-6
          sm:py-[58px]
          lg:px-0
          lg:py-[54px]
          xl:py-[54px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-[42px]
            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-[68px]
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div
            className="
              flex
              min-w-0
              flex-col
            "
          >
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
              REACH
            </p>

            {/* Heading */}
            <h2
              className="
                m-0
                mt-[18px]
                max-w-[530px]
                text-[42px]
                font-medium
                leading-[1.04]
                tracking-[-0.045em]
                text-[#111518]
                sm:mt-[20px]
                sm:text-[50px]
                md:text-[54px]
                lg:text-[56px]
              "
            >
              Go beyond the map.
            </h2>

            {/* Description */}
            <p
              className="
                m-0
                mt-[20px]
                max-w-[505px]
                text-[16px]
                font-normal
                leading-[1.65]
                tracking-[-0.01em]
                text-[#4d6478]
                sm:text-[17px]
                lg:text-[18px]
                lg:leading-[1.55]
              "
            >
              From Puducherry, the whole of South India opens up.
              Hover a destination to see the route — and wherever
              else you're headed, we'll plan it with you.
            </p>

            {/* =================================================
                ROUTES
            ================================================== */}
            <div
              className="
                mt-[34px]
                w-full
                max-w-[505px]
                sm:mt-[38px]
              "
            >
              {routes.map((route) => {
                const isActive = activeRoute === route.id;

                return (
                  <button
                    key={route.id}
                    type="button"
                    onMouseEnter={() =>
                      setActiveRoute(route.id)
                    }
                    onMouseLeave={() =>
                      setActiveRoute(null)
                    }
                    onFocus={() =>
                      setActiveRoute(route.id)
                    }
                    onBlur={() =>
                      setActiveRoute(null)
                    }
                    className={`
                      group
                      flex
                      min-h-[62px]
                      w-full
                      items-center
                      justify-between
                      gap-4
                      border-b
                      border-[#e2ded8]
                      bg-transparent
                      px-0
                      text-left
                      transition-all
                      duration-300
                      ease-out
                      focus:outline-none
                      ${
                        isActive
                          ? "translate-x-[3px]"
                          : "translate-x-0"
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-[14px]
                      "
                    >
                      {/* Dot */}
                      <span
                        className={`
                          h-[6px]
                          w-[6px]
                          shrink-0
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "scale-[1.35] bg-[#006b73]"
                              : "bg-[#c2c6c6]"
                          }
                        `}
                      />

                      {/* Destination */}
                      <span
                        className={`
                          truncate
                          text-[16px]
                          font-medium
                          tracking-[-0.015em]
                          transition-colors
                          duration-300
                          sm:text-[17px]
                          ${
                            isActive
                              ? "text-[#006b73]"
                              : "text-[#111518]"
                          }
                        `}
                      >
                        {route.destination}
                      </span>
                    </div>

                    {/* Duration */}
                    <span
                      className={`
                        shrink-0
                        text-[13px]
                        font-normal
                        transition-colors
                        duration-300
                        sm:text-[14px]
                        ${
                          isActive
                            ? "text-[#006b73]"
                            : "text-[#5c6770]"
                        }
                      `}
                    >
                      {route.duration}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom text */}
            <p
              className="
                m-0
                mt-[25px]
                text-[14px]
                italic
                leading-[1.5]
                text-[#5b7181]
                sm:text-[15px]
              "
            >
              And wherever else you're headed.
            </p>

            {/* CTA */}
            <button
              type="button"
              className="
                group
                mt-[21px]
                flex
                h-[48px]
                w-fit
                items-center
                justify-center
                gap-[9px]
                rounded-[8px]
                border
                border-[#006f77]
                bg-[#006f77]
                px-[24px]
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-300
                ease-out
                hover:-translate-y-[2px]
                hover:border-[#00828b]
                hover:bg-[#00828b]
                hover:shadow-[0_9px_24px_rgba(0,111,119,0.20)]
                active:translate-y-0
                focus:outline-none
                focus:ring-2
                focus:ring-[#006f77]/30
              "
            >
              <span>Plan an Outstation Trip</span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-[3px]
                  group-hover:-translate-y-[2px]
                "
                aria-hidden="true"
              />
            </button>
          </div>

          {/* =====================================================
              MAP CARD
          ====================================================== */}
          <div
            className="
              relative
              flex
              h-[390px]
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-[16px]
              border
              border-[#e6e1da]
              bg-[#fffefd]
              shadow-[0_1px_2px_rgba(0,0,0,0.02)]
              sm:h-[470px]
              lg:h-[550px]
            "
          >
            <svg
              viewBox="0 0 520 430"
              className="
                h-[88%]
                w-[88%]
                max-w-[610px]
                overflow-visible
                sm:h-[90%]
                sm:w-[90%]
              "
              role="img"
              aria-label="Puducherry travel destinations map"
            >
              {/* =================================================
                  MAP AREA
              ================================================== */}
              <path
                d="
                  M 130 65
                  C 190 28, 315 35, 375 80
                  C 425 118, 438 200, 424 265
                  C 407 344, 337 391, 257 395
                  C 176 397, 104 357, 79 292
                  C 54 226, 61 108, 130 65
                  Z
                "
                fill="#f0ece4"
                stroke="#ded7cc"
                strokeWidth="1.5"
              />

              {/* =================================================
                  ROUTE LINES
              ================================================== */}
              {destinations.map((destination) => {
                const isActive =
                  activeRoute === destination.id;

                const isAnyActive = activeRoute !== null;

                return (
                  <line
                    key={`route-${destination.id}`}
                    x1="365"
                    y1="274"
                    x2={destination.x}
                    y2={destination.y}
                    stroke={
                      isActive
                        ? "#006b73"
                        : "#aeb4b5"
                    }
                    strokeWidth={
                      isActive ? 2.2 : 1.6
                    }
                    strokeDasharray={
                      isActive ? "7 7" : "7 8"
                    }
                    opacity={
                      !isAnyActive
                        ? 0.8
                        : isActive
                          ? 1
                          : 0.45
                    }
                    className="
                      transition-all
                      duration-300
                    "
                  />
                );
              })}

              {/* =================================================
                  DESTINATION POINTS
              ================================================== */}
              {destinations.map((destination) => {
                const isActive =
                  activeRoute === destination.id;

                return (
                  <g
                    key={destination.id}
                    className="
                      cursor-pointer
                    "
                    onMouseEnter={() =>
                      setActiveRoute(destination.id)
                    }
                  >
                    {/* Glow */}
                    <circle
                      cx={destination.x}
                      cy={destination.y}
                      r={isActive ? 11 : 0}
                      fill="none"
                      stroke="#006b73"
                      strokeWidth="1.5"
                      opacity="0.25"
                      className="
                        transition-all
                        duration-300
                      "
                    />

                    {/* Point */}
                    <circle
                      cx={destination.x}
                      cy={destination.y}
                      r={isActive ? 6 : 4.5}
                      fill={
                        isActive
                          ? "#006b73"
                          : "#075d65"
                      }
                      className="
                        transition-all
                        duration-300
                      "
                    />

                    {/* Label */}
                    <text
                      x={destination.labelX}
                      y={destination.labelY}
                      textAnchor={
                        destination.id === "goa" ||
                        destination.id === "kerala"
                          ? "end"
                          : "start"
                      }
                      fill={
                        isActive
                          ? "#006b73"
                          : "#77746f"
                      }
                      fontSize="13"
                      fontWeight={
                        isActive ? 600 : 400
                      }
                      className="
                        select-none
                        transition-all
                        duration-300
                      "
                    >
                      {destination.name}
                    </text>
                  </g>
                );
              })}

              {/* =================================================
                  PUDUCHERRY ORIGIN
              ================================================== */}

              {/* Outer ring */}
              <circle
                cx="365"
                cy="274"
                r="17"
                fill="none"
                stroke="#c7c7c3"
                strokeWidth="1.2"
              />

              {/* Inner ring */}
              <circle
                cx="365"
                cy="274"
                r="11"
                fill="#075d65"
              />

              {/* White center */}
              <circle
                cx="365"
                cy="274"
                r="5"
                fill="#f8f8f5"
              />

              {/* Puducherry label */}
              <text
                x="385"
                y="279"
                fill="#006b73"
                fontSize="14"
                fontWeight="600"
              >
                Puducherry
              </text>
            </svg>

            {/* =================================================
                ACTIVE DESTINATION INDICATOR
            ================================================== */}
            {activeDestination && (
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[18px]
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  border
                  border-[#dcd8d0]
                  bg-white/90
                  px-3
                  py-1
                  text-[11px]
                  font-medium
                  text-[#006b73]
                  shadow-sm
                  backdrop-blur-sm
                  sm:hidden
                "
              >
                Puducherry → {activeDestination.name}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeGo;