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
      "Absolutely. One-way outstation trips are available to Chennai, Bangalore, Kerala and destinations across India.",
  },
  {
    question: "Can I book a round trip?",
    answer:
      "Yes. Select 'Round Trip' in the booking form and add your return date — we’ll hold the return and coordinate both legs with you.",
  },
  {
    question: "Do you provide outstation travel?",
    answer:
      "We do. Outstation travel from Puducherry across Tamil Nadu, Karnataka, Kerala and beyond is a core part of what we offer.",
  },
  {
    question: "Can I travel outside Tamil Nadu?",
    answer:
      "Yes. We travel to Bangalore, Kerala, Goa, Hyderabad and other destinations across India. If you have a custom destination, just tell us where.",
  },
  {
    question: "How do I confirm my booking?",
    answer:
      "Submitting the form sends a request — it is not a confirmed booking. After you message us on WhatsApp, our team confirms the vehicle, driver and fare with you directly.",
  },
  {
    question: "How is the fare decided?",
    answer:
      "Fare depends on distance, trip type, vehicle and dates. We share a clear fare with you on WhatsApp before anything is confirmed — no hidden charges.",
  },
  {
    question: "Can I request a specific vehicle?",
    answer:
      "Yes. Mention your preference in the additional requirements field or on WhatsApp, and we'll do our best to match it based on availability.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "The earlier the better, especially for weekends and festival dates. For airport transfers, a day's notice usually works. We'll always try to accommodate last-minute requests.",
  },
  {
    question: "What happens after I submit the travel request?",
    answer:
      "Your request is saved and a WhatsApp message is prepared. Open WhatsApp to send it, and our team will coordinate the rest with you.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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