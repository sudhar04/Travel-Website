import { ArrowUpRight } from "lucide-react";
import airport from "../assets/chennai-airport.jpg";
import chennai from "../assets/chennai.jpg";
import bangalore from "../assets/bangalore.jpg";
import kerala from "../assets/kerala.jpg";
import mahabalipuram from "../assets/mahabalipuram.jpg";

type RouteCard = {
  id: string;
  category: string;
  title: string;
  image: string;
};

const routes: RouteCard[] = [
  {
    id: "airport",
    category: "AIRPORT TRANSFER",
    title: "Puducherry → Chennai Airport",
    image: airport,
  },
  {
    id: "chennai",
    category: "OUTSTATION",
    title: "Puducherry → Chennai",
    image: chennai,
  },
  {
    id: "bangalore",
    category: "OUTSTATION",
    title: "Puducherry → Bangalore",
    image: bangalore,
  },
  {
    id: "kerala",
    category: "OUTSTATION",
    title: "Puducherry → Kerala",
    image: kerala,
  },
  {
    id: "mahabalipuram",
    category: "DAY TRIP",
    title: "Puducherry → Mahabalipuram",
    image: mahabalipuram,
  },
];

const PopularRoutes = () => {
  return (
    <section
      id="popular-routes"
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
          lg:py-[68px]
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div
          className="
            flex
            flex-col
            gap-[22px]
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-10
          "
        >
          {/* Left heading */}
          <div className="max-w-[560px]">
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
              POPULAR ROUTES
            </p>

            <h2
              className="
                m-0
                mt-[18px]
                max-w-[500px]
                text-[42px]
                font-medium
                leading-[1.03]
                tracking-[-0.045em]
                text-[#111518]
                sm:mt-[20px]
                sm:text-[50px]
                md:text-[54px]
                lg:text-[56px]
              "
            >
              Routes people
              <br />
              travel with us.
            </h2>
          </div>

          {/* Right description */}
          <p
            className="
              m-0
              max-w-[410px]
              text-[16px]
              font-normal
              leading-[1.55]
              tracking-[-0.01em]
              text-[#536b7d]
              sm:text-[17px]
              lg:mb-[4px]
            "
          >
            A few of the journeys we coordinate regularly.
            Every route is flexible to your pickup, timing and
            stops.
          </p>
        </div>

        {/* =====================================================
            ROUTE GRID
        ====================================================== */}
        <div
          className="
            mt-[48px]
            grid
            grid-cols-1
            gap-[26px]
            sm:mt-[52px]
            sm:grid-cols-2
            lg:mt-[58px]
            lg:grid-cols-3
            lg:gap-[27px]
          "
        >
          {routes.map((route) => (
            <RouteCard
              key={route.id}
              route={route}
            />
          ))}

          <CustomDestinationCard />
        </div>
      </div>
    </section>
  );
};

type RouteCardProps = {
  route: RouteCard;
};

const RouteCard = ({ route }: RouteCardProps) => {
  return (
    <button
      type="button"
      className="
        group
        relative
        h-[242px]
        w-full
        overflow-hidden
        rounded-[15px]
        bg-[#162022]
        text-left
        outline-none
        sm:h-[250px]
        lg:h-[241px]
        focus-visible:ring-2
        focus-visible:ring-[#006b73]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#f7f5f1]
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}
      <img
        src={route.image}
        alt={route.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.055]
        "
      />

      {/* =====================================================
          DARK GRADIENT
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/[0.82]
          via-black/[0.16]
          to-black/[0.10]
          transition-all
          duration-500
          group-hover:from-black/[0.88]
          group-hover:via-black/[0.22]
          group-hover:to-black/[0.12]
        "
      />

      {/* =====================================================
          CATEGORY BADGE
      ====================================================== */}
      <div
        className="
          absolute
          left-[17px]
          top-[17px]
          rounded-[4px]
          bg-[#263a42]/[0.92]
          px-[11px]
          py-[6px]
          backdrop-blur-[4px]
          transition-all
          duration-300
          group-hover:bg-[#183943]
        "
      >
        <span
          className="
            block
            text-[11px]
            font-semibold
            leading-none
            tracking-[0.04em]
            text-white
            sm:text-[12px]
          "
        >
          {route.category}
        </span>
      </div>

      {/* =====================================================
          ROUTE TITLE
      ====================================================== */}
      <div
        className="
          absolute
          bottom-[20px]
          left-[21px]
          right-[66px]
          sm:bottom-[21px]
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
            transition-transform
            duration-300
            group-hover:translate-x-[2px]
            sm:text-[19px]
            lg:text-[18px]
            xl:text-[19px]
          "
        >
          {route.title}
        </h3>
      </div>

      {/* =====================================================
          HOVER ARROW
          Hidden initially — appears on hover
      ====================================================== */}
      <span
        className="
          absolute
          bottom-[18px]
          right-[18px]
          flex
          h-[40px]
          w-[40px]
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
        <ArrowUpRight
          size={18}
          strokeWidth={1.8}
          className="
            text-white
            transition-transform
            duration-300
            group-hover:translate-x-[1px]
            group-hover:-translate-y-[1px]
          "
          aria-hidden="true"
        />
      </span>
    </button>
  );
};

/* ============================================================
   CUSTOM DESTINATION
============================================================ */

const CustomDestinationCard = () => {
  return (
    <button
      type="button"
      className="
        group
        flex
        h-[242px]
        w-full
        flex-col
        items-center
        justify-center
        rounded-[15px]
        border
        border-dashed
        border-[#d8d1c7]
        bg-transparent
        px-6
        text-center
        transition-all
        duration-300
        hover:border-[#9caeae]
        hover:bg-[#faf9f6]
        sm:h-[250px]
        lg:h-[241px]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#006b73]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#f7f5f1]
      "
    >
      {/* Arrow circle */}
      <span
        className="
          flex
          h-[52px]
          w-[52px]
          items-center
          justify-center
          rounded-full
          bg-[#e5ecec]
          transition-all
          duration-300
          group-hover:-translate-y-[3px]
          group-hover:bg-[#dce8e8]
          group-hover:shadow-[0_8px_20px_rgba(0,107,115,0.10)]
        "
      >
        <ArrowUpRight
          size={20}
          strokeWidth={1.6}
          className="
            text-[#006b73]
            transition-transform
            duration-300
            group-hover:translate-x-[2px]
            group-hover:-translate-y-[2px]
          "
          aria-hidden="true"
        />
      </span>

      {/* Title */}
      <h3
        className="
          m-0
          mt-[17px]
          text-[18px]
          font-medium
          leading-[1.25]
          tracking-[-0.025em]
          text-[#111518]
          transition-colors
          duration-300
          group-hover:text-[#006b73]
        "
      >
        Custom Destination
      </h3>

      {/* Description */}
      <p
        className="
          m-0
          mt-[8px]
          text-[15px]
          leading-[1.5]
          text-[#627487]
        "
      >
        Heading somewhere else? Tell us where.
      </p>
    </button>
  );
};

export default PopularRoutes;