import {
  Check,
  Languages,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const principles = [
  {
    icon: Languages,
    title: "Clear Communication",
    text: "Medical care and recommendations are explained clearly in English.",
  },
  {
    icon: LockKeyhole,
    title: "Private & Confidential",
    text: "Every consultation is handled discreetly and respectfully.",
  },
  {
    icon: MapPinned,
    title: "Care at Your Location",
    text: "Hotel, villa, apartment and home visits across the region.",
  },
];

const promises = [
  "Patient-focused medical assessment",
  "Clear explanation of the next steps",
  "Support for tourists and residents",
  "Professional and respectful communication",
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="container-premium">
        <div className="grid border border-black/10 bg-white lg:grid-cols-2">
          <div className="relative min-h-[32rem] overflow-hidden bg-[#FF2800] p-8 text-white sm:min-h-[40rem] sm:p-12">
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/15" />
            <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full border border-white/15" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#B61C00]/35 blur-3xl" />

            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 opacity-[0.08] sm:block">
              <div className="relative h-72 w-72">
                <span className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 bg-white" />
                <span className="absolute left-0 top-1/2 h-24 w-full -translate-y-1/2 bg-white" />
              </div>
            </div>

            <div className="relative flex h-full min-h-[27rem] flex-col justify-between sm:min-h-[34rem]">
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center border-2 border-white bg-white text-[#FF2800]">
                  <Stethoscope size={27} />
                </span>

                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/75">
                  Kalkan Doctor
                </span>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/75">
                  Our approach
                </p>

                <blockquote className="mt-5 max-w-xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                  “Professional medical care should feel clear, calm and
                  accessible—especially when you are away from home.”
                </blockquote>

                <div className="mt-8 flex items-center gap-3 border-t border-white/25 pt-6">
                  <ShieldCheck size={22} className="text-white" />

                  <div>
                    <p className="font-black">Patient-first medical support</p>

                    <p className="mt-1 text-sm text-white/70">
                      For tourists, residents and families
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-7 sm:p-12 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E52300]">
              05 / About our care
            </p>

            <h2 className="mt-6 text-balance text-4xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-5xl">
              Medical support built
              <span className="mt-2 block font-light italic text-[#FF2800]">
                around your comfort.
              </span>
            </h2>

            <p className="mt-7 text-base font-medium leading-8 text-slate-600">
              Feeling unwell while travelling or living abroad can be
              stressful. Kalkan Doctor provides direct access to
              English-speaking medical assistance at the patient’s location.
            </p>

            <div className="mt-9 space-y-7">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <div
                    key={principle.title}
                    className="grid grid-cols-[3.25rem_1fr] gap-4 border-b border-black/10 pb-7"
                  >
                    <span className="grid h-13 w-13 place-items-center border-2 border-[#FF2800] bg-white text-[#FF2800] transition hover:bg-[#FF2800] hover:text-white">
                      <Icon size={21} />
                    </span>

                    <div>
                      <h3 className="font-black text-slate-950">
                        {principle.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                        {principle.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {promises.map((promise) => (
                <div
                  key={promise}
                  className="flex items-start gap-3 text-sm font-bold leading-6 text-slate-700"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-[#FF2800] text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>

                  {promise}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/905519354800"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-14 items-center justify-center bg-[#FF2800] px-7 py-4 font-black text-white shadow-[0_15px_35px_rgba(255,40,0,0.22)] transition hover:bg-[#D62000]"
            >
              Speak to the Medical Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}