import {
  Ambulance,
  ArrowUpRight,
  FlaskConical,
  HeartPulse,
  House,
  Pill,
  Stethoscope,
  Syringe,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Private Doctor Visit",
    description:
      "Professional medical examination, assessment and treatment planning at your location.",
    details: ["General examination", "Treatment guidance", "Medical follow-up"],
  },
  {
    number: "02",
    icon: House,
    title: "Hotel, Villa & Home Care",
    description:
      "Private medical visits without the stress of travelling while you feel unwell.",
    details: ["Hotel rooms", "Private villas", "Homes and apartments"],
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Urgent Medical Assistance",
    description:
      "Fast assessment for sudden illness and suitable non-life-threatening medical concerns.",
    details: ["Acute illness", "Minor injuries", "Urgent assessment"],
  },
  {
    number: "04",
    icon: Syringe,
    title: "IV Therapy & Hydration",
    description:
      "Supportive intravenous treatment provided only when considered medically appropriate.",
    details: ["Hydration support", "Medical monitoring", "Recovery care"],
  },
  {
    number: "05",
    icon: FlaskConical,
    title: "Tests & Health Checks",
    description:
      "Laboratory support, routine assessments and professional medical follow-up.",
    details: ["Blood tests", "Health checks", "Result guidance"],
  },
  {
    number: "06",
    icon: Pill,
    title: "Prescription Support",
    description:
      "Clinical evaluation and prescription assistance according to the patient’s medical needs.",
    details: ["Medication review", "Treatment planning", "Follow-up support"],
  },
  {
    number: "07",
    icon: Ambulance,
    title: "Medical Transport",
    description:
      "Support with ambulance coordination and hospital referral when further care is required.",
    details: ["Transport support", "Hospital guidance", "Care coordination"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="absolute -right-56 top-10 h-[30rem] w-[30rem] rounded-full bg-[#FF2800]/5 blur-3xl" />

      <div className="container-premium relative">
        <div className="grid gap-10 border-b border-black/10 pb-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E52300]">
              02 / Medical services
            </p>

            <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
              Complete healthcare support
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Medical care for the moments
              <span className="block font-light italic text-[#FF2800]">
                that cannot wait.
              </span>
            </h2>
          </div>
        </div>

        <div>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group grid border-b border-black/10 py-9 transition-colors hover:bg-[#FFF6F3] sm:py-11 lg:grid-cols-[0.11fr_0.12fr_0.38fr_0.39fr] lg:items-center"
              >
                <div className="mb-5 lg:mb-0">
                  <span className="text-sm font-black tracking-[0.15em] text-[#FF2800]">
                    {service.number}
                  </span>
                </div>

                <div className="mb-5 lg:mb-0">
                  <span className="grid h-14 w-14 place-items-center border-2 border-[#FF2800] bg-white text-[#FF2800] transition duration-300 group-hover:bg-[#FF2800] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="pr-6">
                  <h3 className="text-2xl font-black tracking-[-0.035em] text-slate-950 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-end justify-between gap-6 lg:mt-0">
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-3 text-sm font-bold text-slate-600"
                      >
                        <span className="h-0.5 w-5 bg-[#FF2800]" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/905519354800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-12 w-12 shrink-0 place-items-center bg-[#FF2800] text-white shadow-[0_12px_30px_rgba(255,40,0,0.20)] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#D62000]"
                    aria-label={`Request ${service.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid overflow-hidden border border-[#FF2800] bg-[#FF2800] text-white lg:grid-cols-[1fr_auto]">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/75">
              Cannot find the service you need?
            </p>

            <h3 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Tell our medical team how we can help.
            </h3>

            <p className="mt-4 max-w-2xl font-medium leading-7 text-white/75">
              Contact us with the patient’s location, age and a short
              description of the medical concern.
            </p>
          </div>

          <a
            href="https://wa.me/905519354800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-32 items-center justify-center gap-3 border-t border-white/25 bg-white px-10 font-black text-[#D62000] transition hover:bg-[#FFF6F3] lg:min-w-72 lg:border-l lg:border-t-0"
          >
            Contact Medical Team
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}