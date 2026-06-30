import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

const examTypes = [
  "MRI",
  "Open MRI",
  "Whole Body MRI",
  "CT Scan",
  "X-Ray",
  "Ultrasound",
  "3D Mammography",
  "DEXA Scan",
  "Lung Screening",
  "Cardiac Scoring",
];

export default function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#062f35]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f6fffc] to-[#dff5f0] px-5 pb-24 pt-32 lg:px-10">
          
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0a9b8c]">
                Appointment Request
              </p>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">
                Request To Make An{" "}
                <span className="text-[#0a9b8c]">Appointment</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#315866]">
                Use this secure form to request non-urgent and routine imaging
                appointments. Our scheduling team will contact you to confirm
                availability and next steps.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <InfoCard
                  icon={Phone}
                  title="Phone Consultations"
                  text="908-221-0603"
                />
                <InfoCard
                  icon={Clock3}
                  title="Routine Requests"
                  text="Non-urgent visits only"
                />
                <InfoCard
                  icon={ShieldCheck}
                  title="Secure Form"
                  text="Protected submission"
                />
              </div>

              <div className="mt-8 rounded-3xl border border-[#d8f1ed] bg-white/80 p-5 shadow-xl">
                <p className="text-sm font-bold leading-7 text-[#315866]">
                  For urgent medical concerns within 24 hours, please contact us
                  directly by phone.
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img
                src="/images/appointment-hero.jpg"
                alt="Schedule radiology appointment"
                className="relative h-[520px] w-full rounded-[44px] object-cover shadow-2xl"
              />

              <div className="absolute bottom-8 left-8 rounded-3xl bg-[#073b3b] p-6 text-white shadow-2xl">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#46d7c8] text-[#073b3b]">
                    <CalendarDays />
                  </span>
                  <div>
                    <h3 className="font-black">Fast Scheduling</h3>
                    <p className="mt-1 text-sm text-white/75">
                      Our team will follow up
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#073b3b]" />
        </section>

        <section className="relative bg-[#073b3b] px-5 pb-28 pt-20 lg:px-10">
          <div className="relative mx-auto max-w-6xl rounded-[44px] bg-[#e7f0ed] p-5 shadow-2xl shadow-[#073b3b]/20 sm:p-8 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-[#0a9b8c] shadow-sm">
                <FileText size={16} />
                Secure Request Form
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-[#062f35] sm:text-4xl">
                For routine and non-urgent appointment requests, please complete
                this secure form.
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 max-w-5xl rounded-[34px] bg-white p-6 shadow-2xl shadow-[#073b3b]/10 sm:p-10"
            >
              <FormSection title="Patient Information">
                <NameInput label="Full Name" placeholder="eg: John Doe" />
                <Select label="Gender" options={["Male", "Female", "Other"]} />

                <Input
                  label="Date of Birth (MM/DD/YYYY)"
                  placeholder="eg: 12/01/2004"
                />

                <NumberInput
                  label="Preferred Contact Number"
                  placeholder="543210987"
                  maxLength={10}
                />
              </FormSection>

              <FormSection title="Appointment Details">
                <NameInput
                  label="Referring Physician's Name"
                  placeholder="eg: Dr John Doe"
                />

                <Select label="Type of Exam" options={examTypes} />

                <NumberInput
                  label="Referring Physician's Phone No"
                  placeholder="543210987"
                  maxLength={10}
                />

                <Select
                  label="Patient Status"
                  options={["New Patient", "Existing Patient"]}
                />
              </FormSection>

              <FormSection title="Health Insurance Information">
                <NameInput
                  label="Insurance Company"
                  placeholder="eg: LIC Pvt Ltd"
                />

                <NumberInput
                  label="Policy Number"
                  placeholder="Policy number"
                  maxLength={20}
                />
              </FormSection>

              <div className="mt-8">
                <label className="mb-3 block text-sm font-bold text-[#073b3b]">
                  Comments
                </label>
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full resize-none rounded-2xl border border-transparent bg-[#f4f7fb] px-5 py-4 text-sm font-semibold text-[#073b3b] outline-none transition placeholder:text-slate-400 focus:border-[#46d7c8] focus:bg-white focus:ring-4 focus:ring-[#46d7c8]/15"
                />
              </div>

              <div className="mt-8 rounded-2xl border border-dashed border-[#0a9b8c]/35 bg-[#f7fffc] p-5">
                <label className="flex cursor-pointer items-center gap-4">
                  <input
                    type="checkbox"
                    required
                    className="h-5 w-5 rounded border-slate-300 accent-[#0a9b8c]"
                  />
                  <span className="text-sm font-bold text-[#315866]">
                    I confirm this is a routine, non-urgent appointment request.
                  </span>
                </label>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                <p className="max-w-xl text-sm leading-6 text-[#315866]">
                  By submitting, our scheduling team will contact you to confirm
                  your appointment request.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-[#0a9b8c] px-8 py-4 text-sm font-black text-white shadow-xl shadow-[#0a9b8c]/20 transition hover:-translate-y-1 hover:bg-[#073b3b]"
                >
                  {isSubmitted ? "Request Sent" : "Submit Request"}
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </div>

              {isSubmitted && (
                <p className="mt-6 rounded-2xl bg-[#e7f8f5] px-5 py-4 text-sm font-bold text-[#073b3b]">
                  Thank you. Your request is ready for our scheduling team to
                  review.
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="bg-white px-5 py-20 lg:px-10">
          <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[36px] bg-gradient-to-r from-[#f0fffb] to-[#dff5f0] p-8 shadow-xl md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#0a9b8c]">
                Need Help?
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#062f35]">
                Prefer to speak with our scheduling team?
              </h2>
              <p className="mt-3 text-base leading-7 text-[#315866]">
                Call us directly for appointment questions or confirmation.
              </p>
            </div>

            <a
              href="tel:9082210603"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#073b3b] px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#0a9b8c]"
            >
              <Phone size={18} />
              908-221-0603
            </a>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Phone;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-white/85 p-5 shadow-xl shadow-[#073b3b]/5 backdrop-blur">
      <Icon className="text-[#0a9b8c]" size={28} />
      <h3 className="mt-4 text-sm font-black text-[#062f35]">{title}</h3>
      <p className="mt-1 text-sm font-bold text-[#315866]">{text}</p>
    </div>
  );
}

function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h3 className="mb-6 text-2xl font-black text-[#062f35]">{title}</h3>
      <div className="grid gap-6 md:grid-cols-2">{children}</div>
    </section>
  );
}

function NameInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const onlyCharacters = event.target.value.replace(/[^a-zA-Z\s.]/g, "");
    setValue(onlyCharacters);
  };

  return (
    <label className="block">
      <span className="mb-3 block text-sm font-bold text-[#073b3b]">
        {label} *
      </span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
        className="w-full rounded-2xl border border-transparent bg-[#f4f7fb] px-5 py-4 text-sm font-semibold text-[#073b3b] outline-none transition placeholder:text-slate-400 focus:border-[#46d7c8] focus:bg-white focus:ring-4 focus:ring-[#46d7c8]/15"
      />
    </label>
  );
}

function NumberInput({
  label,
  placeholder,
  maxLength,
}: {
  label: string;
  placeholder: string;
  maxLength?: number;
}) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = event.target.value.replace(/\D/g, "");
    setValue(maxLength ? onlyNumbers.slice(0, maxLength) : onlyNumbers);
  };

  return (
    <label className="block">
      <span className="mb-3 block text-sm font-bold text-[#073b3b]">
        {label} *
      </span>
      <input
        type="tel"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
        className="w-full rounded-2xl border border-transparent bg-[#f4f7fb] px-5 py-4 text-sm font-semibold text-[#073b3b] outline-none transition placeholder:text-slate-400 focus:border-[#46d7c8] focus:bg-white focus:ring-4 focus:ring-[#46d7c8]/15"
      />
    </label>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-3 block text-sm font-bold text-[#073b3b]">
        {label} *
      </span>
      <input
        type="text"
        placeholder={placeholder}
        required
        className="w-full rounded-2xl border border-transparent bg-[#f4f7fb] px-5 py-4 text-sm font-semibold text-[#073b3b] outline-none transition placeholder:text-slate-400 focus:border-[#46d7c8] focus:bg-white focus:ring-4 focus:ring-[#46d7c8]/15"
      />
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-3 block text-sm font-bold text-[#073b3b]">
        {label} *
      </span>
      <select
        required
        className="w-full rounded-2xl border border-transparent bg-[#f4f7fb] px-5 py-4 text-sm font-semibold text-[#073b3b] outline-none transition focus:border-[#46d7c8] focus:bg-white focus:ring-4 focus:ring-[#46d7c8]/15"
      >
        <option value="">Select</option>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}
