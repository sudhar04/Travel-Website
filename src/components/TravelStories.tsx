import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  customer: string;
  trip: string;
}

const TravelStories = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        '"The pickup from Chennai Airport was on time, the car was comfortable and the driver was calm and professional. A genuinely stress-free start to our trip."',
      customer: "Sudharsanan ",
      trip: "Airport Transfer · Chennai Airport → Puducherry",
    },
    {
      quote:
        '"We did a round trip to Kerala with the family. Everything was coordinated over WhatsApp — no confusion, no chasing. Just a smooth journey."',
      customer: "Ghnana Guru",
      trip: "Round Trip · Puducherry → Kerala",
    },
    {
      quote:
        '"Booked a one-way to Bangalore for work. Clear communication from the first message to drop-off. Will travel with them again."',
      customer: "Raja Venkat",
      trip: "One Way · Puducherry → Bangalore",
    },
  ];

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const reveal = ScrollReveal();

    reveal.reveal(".travel-stories-header", {
      distance: "24px",
      duration: 700,
      delay: 100,
      easing: "ease-out",
      origin: "bottom",
      opacity: 0,
      reset: false,
      mobile: true,
      cleanup: true,
    });

    reveal.reveal(".travel-story-card", {
      distance: "30px",
      duration: 750,
      interval: 140,
      delay: 150,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      origin: "bottom",
      opacity: 0,
      reset: false,
      mobile: true,
      cleanup: true,
    });

    return () => {
      reveal.destroy();
    };
  }, []);

  return (
    <section
      id="travel-stories"
      className="
        w-full
        bg-[#faf9f7]

        px-5
        py-[72px]

        sm:px-6
        sm:py-[78px]

        lg:px-8
        lg:py-[82px]
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
            travel-stories-header

            max-w-[700px]

            mb-[54px]

            sm:mb-[58px]

            lg:mb-[62px]
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
            Travel Stories
          </p>

          {/* Heading */}

          <h2
            className="
              text-[40px]
              font-medium
              leading-[1.05]
              tracking-[-0.045em]
              text-[#12161a]

              sm:text-[46px]

              md:text-[50px]

              lg:text-[52px]
            "
          >
            What travellers say.
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-3

              text-[14px]
              italic
              leading-[1.6]
              text-[#667386]

              sm:text-[15px]
            "
          >
            Placeholder content — real customer feedback will
            appear here.
          </p>
        </div>

        {/* ===================================================
            TESTIMONIAL GRID
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-5

            md:grid-cols-2

            lg:grid-cols-3
            lg:gap-6
          "
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.customer}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   TESTIMONIAL CARD
============================================================= */

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({
  testimonial,
}: TestimonialCardProps) => {
  return (
    <article
      className="
        travel-story-card
        group

        flex
        min-h-[300px]
        flex-col

        rounded-[16px]

        border
        border-[#e5e1dc]

        bg-white

        px-[29px]
        py-[30px]

        transition-all
        duration-400
        ease-out

        hover:-translate-y-[4px]
        hover:border-[#d8d3cc]
        hover:shadow-[0_14px_35px_rgba(20,30,35,0.08)]

        sm:min-h-[305px]

        lg:min-h-[320px]
        lg:px-[30px]
        lg:py-[31px]
      "
    >
      {/* =====================================================
          QUOTE ICON
      ====================================================== */}

      <div
        className="
          flex
          h-[30px]
          w-[30px]
          items-center

          text-[#006b73]

          transition-transform
          duration-300

          group-hover:translate-y-[-2px]
        "
      >
        <QuoteIcon />
      </div>

      {/* =====================================================
          QUOTE
      ====================================================== */}

      <p
        className="
          mt-5

          text-[17px]
          font-normal
          leading-[1.62]
          tracking-[-0.005em]

          text-[#273b50]

          sm:text-[18px]

          lg:text-[17px]
        "
      >
        {testimonial.quote}
      </p>

      {/* =====================================================
          DIVIDER
      ====================================================== */}

      <div
        className="
          mt-auto
          pt-6
        "
      >
        <div
          className="
            h-px
            w-full
            bg-[#e8e3dd]
          "
        />

        {/* =================================================
            CUSTOMER INFO
        ================================================== */}

        <div className="pt-5">
          <p
            className="
              text-[15px]
              font-semibold
              leading-[1.4]
              text-[#111519]
            "
          >
            {testimonial.customer}
          </p>

          <p
            className="
              mt-1

              text-[13px]
              leading-[1.5]
              text-[#607083]
            "
          >
            {testimonial.trip}
          </p>
        </div>
      </div>
    </article>
  );
};

/* =============================================================
   QUOTE ICON
============================================================= */

const QuoteIcon = () => {
  return (
    <Quote
      size={34}
      strokeWidth={1.8}
      className="
        text-[#006b73]
        transition-transform
        duration-300
        group-hover:-translate-y-0.5
      "
      aria-hidden="true"
    />
  );
};

export default TravelStories;