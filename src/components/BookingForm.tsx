import { useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
  ReactNode,
} from "react";

interface BookingFormData {
  pickupLocation: string;
  dropLocation: string;
  journeyDate: string;
  tripType: string;
  passengers: string;
  pickupTime: string;
  phone: string;
  name: string;
  requirements: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: "",
    dropLocation: "",
    journeyDate: "",
    tripType: "One Way",
    passengers: "1",
    pickupTime: "",
    phone: "",
    name: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /*
   * =========================================================
   * HANDLE FORM CHANGE
   * =========================================================
   */

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * =========================================================
   * FORMAT DATE
   *
   * Converts:
   * 2026-10-20
   *
   * Into:
   * 20-10-2026
   * =========================================================
   */

  const formatDate = (date: string) => {
    if (!date) {
      return "Not specified";
    }

    const [year, month, day] = date.split("-");

    if (!year || !month || !day) {
      return date;
    }

    return `${day}-${month}-${year}`;
  };

  /*
   * =========================================================
   * FORMAT TIME
   *
   * Converts:
   * 05:30
   *
   * Into:
   * 05:30 AM
   * =========================================================
   */

  const formatTime = (time: string) => {
    if (!time) {
      return "Not specified";
    }

    const [hoursString, minutes] = time.split(":");

    const hours = Number(hoursString);

    if (
      Number.isNaN(hours) ||
      !minutes
    ) {
      return time;
    }

    const suffix = hours >= 12 ? "PM" : "AM";

    const formattedHour = hours % 12 || 12;

    return `${String(formattedHour).padStart(
      2,
      "0"
    )}:${minutes} ${suffix}`;
  };

  /*
   * =========================================================
   * HANDLE FORM SUBMIT
   * =========================================================
   */

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    /*
     * =======================================================
     * KARAI TRAVELS WHATSAPP NUMBER
     * =======================================================
     *
     * Country code included.
     * No +, spaces or -
     *
     * Current Karai Travels number:
     * 919342832151
     */

    const WHATSAPP_NUMBER = "919342832151";

    /*
     * =======================================================
     * PREMIUM WHATSAPP BOOKING MESSAGE
     * =======================================================
     */

    const message = `
Hello Karai Travels! 👋

I would like to request a ride.

━━━━━━━━━━━━━━━━━━
🚕 BOOKING DETAILS
━━━━━━━━━━━━━━━━━━

👤 Name: ${formData.name}

📱 Phone / WhatsApp: ${formData.phone}

📍 Pickup: ${formData.pickupLocation}

📍 Drop: ${formData.dropLocation}

📅 Journey Date: ${formatDate(formData.journeyDate)}

🔄 Trip Type: ${formData.tripType}

👥 Passengers: ${formData.passengers}

⏰ Pickup Time: ${formatTime(formData.pickupTime)}

📝 Additional Requirements:
${formData.requirements || "Nothing"}

━━━━━━━━━━━━━━━━━━

Please confirm the availability and fare.

Thank you!
Karai Travels
`.trim();

    /*
     * =======================================================
     * WHATSAPP URL
     * =======================================================
     */

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    /*
     * =======================================================
     * REDIRECT TO WHATSAPP
     * =======================================================
     */

    window.location.href = whatsappUrl;
  };

  return (
    <section
      id="book-a-ride"
      className="
        relative
        z-20
        -mt-[65px]
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1030px]
          rounded-[20px]
          border
          border-black/[0.04]
          bg-white
          px-5
          py-8
          shadow-[0_20px_55px_rgba(0,0,0,0.12)]
          sm:px-7
          sm:py-9
          md:px-8
          md:py-9
          lg:px-[34px]
          lg:py-[34px]
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-7">
          <p
            className="
              mb-2
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#006b73]
            "
          >
            Plan Your Ride
          </p>

          <h2
            className="
              text-[28px]
              font-medium
              leading-[1.15]
              tracking-[-0.035em]
              text-[#111111]
              sm:text-[30px]
              md:text-[32px]
              lg:text-[34px]
            "
          >
            Where are you going?
          </h2>
        </div>

        {/* =====================================================
            FORM
        ====================================================== */}

        <form onSubmit={handleSubmit}>
          <div
            className="
              grid
              grid-cols-1
              gap-x-5
              gap-y-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {/* =================================================
                PICKUP LOCATION
            ================================================== */}

            <FormField
              label="Pickup Location"
              required
              htmlFor="pickupLocation"
            >
              <input
                id="pickupLocation"
                name="pickupLocation"
                type="text"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="e.g. Puducherry"
                required
                className={inputClasses}
              />
            </FormField>

            {/* =================================================
                DROP LOCATION
            ================================================== */}

            <FormField
              label="Drop Location"
              required
              htmlFor="dropLocation"
            >
              <input
                id="dropLocation"
                name="dropLocation"
                type="text"
                value={formData.dropLocation}
                onChange={handleChange}
                placeholder="e.g. Chennai Airport"
                required
                className={inputClasses}
              />
            </FormField>

            {/* =================================================
                JOURNEY DATE
            ================================================== */}

            <FormField
              label="Journey Date"
              required
              htmlFor="journeyDate"
            >
              <input
                id="journeyDate"
                name="journeyDate"
                type="date"
                value={formData.journeyDate}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </FormField>

            {/* =================================================
                TRIP TYPE
            ================================================== */}

            <FormField
              label="Trip Type"
              required
              htmlFor="tripType"
            >
              <div className="relative">
                <select
                  id="tripType"
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  required
                  className={`
                    ${inputClasses}
                    cursor-pointer
                    appearance-auto
                    pr-10
                  `}
                >
                  <option value="One Way">
                    One Way
                  </option>

                  <option value="Round Trip">
                    Round Trip
                  </option>
                </select>
              </div>
            </FormField>

            {/* =================================================
                PASSENGERS
            ================================================== */}

            <FormField
              label="Passengers"
              required
              htmlFor="passengers"
            >
              <input
                id="passengers"
                name="passengers"
                type="number"
                min="1"
                max="20"
                value={formData.passengers}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </FormField>

            {/* =================================================
                PICKUP TIME
            ================================================== */}

            <FormField
              label="Preferred Pickup Time"
              htmlFor="pickupTime"
            >
              <input
                id="pickupTime"
                name="pickupTime"
                type="time"
                value={formData.pickupTime}
                onChange={handleChange}
                className={inputClasses}
              />
            </FormField>

            {/* =================================================
                PHONE
            ================================================== */}

            <FormField
              label="WhatsApp / Phone Number"
              required
              htmlFor="phone"
            >
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 98765 43210"
                required
                className={inputClasses}
              />
            </FormField>

            {/* =================================================
                NAME
            ================================================== */}

            <FormField
              label="Your Name"
              required
              htmlFor="name"
            >
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                className={inputClasses}
              />
            </FormField>

            {/* =================================================
                EMPTY GRID SPACE ON DESKTOP
            ================================================== */}

            <div className="hidden lg:block" />

            {/* =================================================
                ADDITIONAL REQUIREMENTS
            ================================================== */}

            <div className="md:col-span-2 lg:col-span-3">
              <label
                htmlFor="requirements"
                className={labelClasses}
              >
                Additional Requirements

                <span className="ml-1 font-normal text-[#777]">
                  (Optional)
                </span>
              </label>

              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={3}
                placeholder="Any special requests — luggage, stops, vehicle preference..."
                className={`
                  ${inputClasses}
                  min-h-[64px]
                  resize-y
                  py-3
                `}
              />
            </div>
          </div>

          {/* =====================================================
              BOTTOM ACTIONS
          ====================================================== */}

          <div
            className="
              mt-7
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
            "
          >
            {/* =================================================
                SUBMIT
            ================================================== */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                group
                flex
                h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-[8px]
                bg-[#006b73]
                px-7
                text-[16px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#005c63]
                hover:shadow-md
                active:scale-[0.99]
                disabled:cursor-not-allowed
                disabled:opacity-70
                sm:w-auto
              "
            >
              {isSubmitting ? (
                "Opening WhatsApp..."
              ) : (
                <>
                  <span>
                    Check &amp; Request Ride
                  </span>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>

            {/* =================================================
                INFORMATION
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-2
                text-[13px]
                leading-5
                text-[#667085]
              "
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-[#006b73]"
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
                  d="M8 12.2L10.5 14.5L16 9"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>
                No payment now — we confirm on WhatsApp
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

/* =============================================================
   REUSABLE FORM FIELD
============================================================= */

interface FormFieldProps {
  label: string;
  required?: boolean;
  htmlFor: string;
  children: ReactNode;
}

const FormField = ({
  label,
  required = false,
  htmlFor,
  children,
}: FormFieldProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={htmlFor}
        className={labelClasses}
      >
        {label}

        {required && (
          <span className="ml-1 text-[#006b73]">
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
};

/* =============================================================
   SHARED STYLES
============================================================= */

const labelClasses = `
  mb-2
  block
  text-[12px]
  font-medium
  uppercase
  tracking-[0.02em]
  text-[#526070]
`;

const inputClasses = `
  block
  h-[40px]
  w-full
  rounded-[8px]
  border
  border-[#dedbd6]
  bg-white
  px-[14px]
  text-[15px]
  text-[#30343b]
  outline-none
  transition-all
  duration-200
  placeholder:text-[#7b8491]
  hover:border-[#c9c5bf]
  focus:border-[#006b73]
  focus:ring-[3px]
  focus:ring-[#006b73]/10
`;

export default BookingForm;