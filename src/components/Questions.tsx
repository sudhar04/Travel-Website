import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Question = {
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    question: "Do you provide Chennai Airport pickup and drop?",
    answer:
      "Yes. Airport transfers to and from Chennai Airport are one of our most common services. Share your flight time and terminal and we'll coordinate the pickup.",
  },
  {
    question: "Can I book a one-way trip?",
    answer:
      "Yes. One-way trips are available for airport transfers, intercity travel, and other destinations. Share your pickup and drop-off details and we'll coordinate the journey.",
  },
  {
    question: "Can I book a round trip?",
    answer:
      "Yes. Round trips can be arranged based on your travel dates, route, and preferred schedule. We'll coordinate the complete journey with you.",
  },
  {
    question: "Do you provide outstation travel?",
    answer:
      "Yes. We provide comfortable outstation travel from Puducherry to destinations across Tamil Nadu and nearby states.",
  },
  {
    question: "Can I travel outside Tamil Nadu?",
    answer:
      "Yes. Inter-state journeys can be arranged depending on the destination, vehicle, and travel requirements.",
  },
  {
    question: "How do I confirm my booking?",
    answer:
      "Once we receive your travel request, we'll confirm the availability, vehicle, timing, and fare with you. Your booking is confirmed after the details are finalized.",
  },
  {
    question: "How is the fare decided?",
    answer:
      "The fare depends on factors such as the route, distance, trip type, vehicle, travel duration, and any additional requirements.",
  },
  {
    question: "Can I request a specific vehicle?",
    answer:
      "Yes. You can let us know your preferred vehicle type while making the travel request. Availability will be confirmed before the trip.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking as early as possible, especially for airport transfers, long-distance journeys, weekends, and peak travel periods.",
  },
  {
    question: "What happens after I submit the travel request?",
    answer:
      "We'll review your travel details, check availability, and contact you to confirm the journey, vehicle, timing, and fare.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#f7f5f1] text-[#111518]"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
          px-5
          py-[92px]
          sm:px-6
          sm:py-[105px]
          lg:px-8
          lg:py-[112px]
          xl:py-[116px]
        "
      >
        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="text-center">
          <p
            className="
              m-0
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#006b73]
              sm:text-[12px]
              sm:tracking-[0.30em]
            "
          >
            QUESTIONS
          </p>

          <h2
            className="
              mt-[20px]
              m-0
              font-sans
              text-[42px]
              font-medium
              leading-[1.05]
              tracking-[-0.045em]
              text-[#101416]
              sm:mt-[22px]
              sm:text-[48px]
              lg:text-[52px]
              xl:text-[54px]
            "
          >
            Good to know.
          </h2>
        </div>

        {/* =========================
            FAQ LIST
        ========================== */}
        <div
          className="
            mx-auto
            mt-[76px]
            w-full
            max-w-[756px]
            sm:mt-[82px]
            lg:mt-[86px]
          "
        >
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="
                  border-b
                  border-[#dedbd5]
                "
              >
                {/* Question button */}
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    border-0
                    bg-transparent
                    px-0
                    py-[23px]
                    text-left
                    outline-none
                    sm:py-[24px]
                    lg:py-[25px]
                  "
                >
                  <span
                    className="
                      min-w-0
                      flex-1
                      text-[18px]
                      font-normal
                      leading-[1.45]
                      tracking-[-0.025em]
                      text-[#111518]
                      transition-colors
                      duration-200
                      sm:text-[19px]
                      lg:text-[20px]
                    "
                  >
                    {item.question}
                  </span>

                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                    "
                  >
                    <ChevronDown
                      size={16}
                      strokeWidth={1.4}
                      className={`
                        text-[#52616a]
                        transition-transform
                        duration-300
                        ease-out
                        ${
                          isOpen
                            ? "rotate-180"
                            : "rotate-0"
                        }
                      `}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className="
                        m-0
                        max-w-[730px]
                        pb-[25px]
                        pr-8
                        text-[15px]
                        font-normal
                        leading-[1.65]
                        tracking-[-0.005em]
                        text-[#5d7180]
                        sm:text-[16px]
                        sm:leading-[1.6]
                      "
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;