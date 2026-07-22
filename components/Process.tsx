import {
  ArrowRight,
  CheckCircle2,
  MapPinned,
  MessageSquareText,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Contact the Medical Team",
    description:
      "Call or send a WhatsApp message with a short description of the patient’s condition.",
    detail: "Phone or WhatsApp",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Share Patient & Location Details",
    description:
      "Send the patient’s age, symptoms, hotel or villa name and exact location.",
    detail: "Simple information",
  },
  {
    number: "03",
    icon: UserRoundCheck,
    title: "Confirm the Visit",
    description:
      "The medical team reviews the request and confirms availability and the next step.",
    detail: "Clear confirmation",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Receive Medical Care",
    description:
      "The doctor visits your location, examines the patient and explains the recommended care.",
    detail: "Private consultation",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#FF2800] py-20 text-white sm:py-28"
    >
      <div className="absolute -left-48 top-0 h-[30rem] w-[30rem] rounded-full border border-white/10" />
      <div className="absolute -left-24 top-24 h-[18rem] w-[18rem] rounded-full border border-white/10" />
      <div className="absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#B61C00]/40 blur-3xl" />

      <div className="container-premium relative">
        <div className="grid gap-10 border-b border-white/25 pb-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/75">
              04 / How it works
            </p>

            <p className="mt-5 max-w-sm font-medium leading-7 text-white/75">
              One direct conversation is enough to begin arranging medical
              assistance.
            </p>
          </div>

          <h2 className="max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            From your first message
            <span className="block font-light italic text-white">
              to professional care.
            </span>
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[1.75rem] top-0 w-px bg-white/30 lg:left-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const rightSide = index % 2 !== 0;

              return (
                <article
                  key={step.number}
                  className="relative grid gap-7 pl-20 lg:grid-cols-2 lg:gap-24 lg:pl-0"
                >
                  <span className="absolute left-0 top-0 z-10 grid h-14 w-14 place-items-center border-2 border-white bg-[#FF2800] text-xs font-black tracking-wider text-white lg:left-1/2 lg:-translate-x-1/2">
                    {step.number}
                  </span>

                  <div
                    className={`${
                      rightSide
                        ? "lg:col-start-2 lg:pl-4"
                        : "lg:col-start-1 lg:pr-4 lg:text-right"
                    }`}
                  >
                    <div
                      className={`mb-5 flex ${
                        rightSide
                          ? "justify-start"
                          : "justify-start lg:justify-end"
                      }`}
                    >
                      <span className="grid h-12 w-12 place-items-center bg-white text-[#FF2800] shadow-[0_15px_35px_rgba(100,0,0,0.18)]">
                        <Icon size={22} />
                      </span>
                    </div>

                    <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/70">
                      {step.detail}
                    </p>

                    <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] sm:text-3xl">
                      {step.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-lg font-medium leading-7 text-white/75 ${
                        rightSide ? "" : "lg:ml-auto"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-20 grid border-2 border-white bg-white text-slate-950 lg:grid-cols-[1fr_auto]">
          <div className="flex items-start gap-4 p-7 sm:items-center sm:p-9">
            <CheckCircle2
              size={27}
              className="mt-1 shrink-0 text-[#FF2800] sm:mt-0"
            />

            <div>
              <h3 className="text-xl font-black">
                Ready to request medical assistance?
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                Send the patient’s symptoms and location to our medical team.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/905519354800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-24 items-center justify-center gap-3 border-t border-[#FF2800] bg-[#FFF6F3] px-8 font-black text-[#E52300] transition hover:bg-white lg:border-l lg:border-t-0"
          >
            Start on WhatsApp
            <ArrowRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}