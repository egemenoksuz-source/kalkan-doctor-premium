import {
  ArrowRight,
  BedDouble,
  Check,
  HeartPulse,
  Home,
  Plane,
  Phone,
} from "lucide-react";

const touristServices = [
  "Hotel and villa doctor visits",
  "Food poisoning and dehydration care",
  "Ear infections and swimming-related problems",
  "Urgent medical assessment",
];

const residentServices = [
  "Home doctor consultations",
  "Routine health assessments",
  "Blood tests and medical follow-up",
  "Family and ongoing healthcare support",
];

export default function PatientCare() {
  return (
    <section id="patient-care" className="relative overflow-hidden bg-white">
      <div className="container-premium border-x border-black/10">
        <div className="grid lg:grid-cols-[0.37fr_0.63fr]">
          <div className="border-b border-black/10 bg-[#FFF6F3] px-6 py-16 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E52300]">
              01 / Patient care
            </p>

            <h2 className="mt-6 text-balance text-4xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-5xl">
              Different patients.
              <span className="mt-2 block font-light italic text-[#FF2800]">
                One trusted team.
              </span>
            </h2>

            <p className="mt-7 max-w-md font-medium leading-8 text-slate-600">
              Whether you are visiting the region for a holiday or living here
              permanently, medical care should feel simple, clear and
              reassuring.
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-black/10 pt-7">
              <span className="grid h-12 w-12 place-items-center bg-[#FF2800] text-white">
                <HeartPulse size={23} />
              </span>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                  Direct contact
                </p>

                <a
                  href="tel:+905519354800"
                  className="mt-1 flex items-center gap-2 font-black text-[#E52300]"
                >
                  <Phone size={16} />
                  +90 551 935 48 00
                </a>
              </div>
            </div>
          </div>

          <div className="grid bg-white md:grid-cols-2">
            <article className="group relative overflow-hidden border-b border-black/10 bg-white px-6 py-16 transition hover:bg-[#FFF6F3] sm:px-10 lg:border-b-0 lg:py-24">
              <span className="absolute right-7 top-10 text-8xl font-black text-[#FF2800]/5">
                A
              </span>

              <div className="grid h-14 w-14 place-items-center bg-[#FF2800] text-white shadow-[0_15px_35px_rgba(255,40,0,0.22)]">
                <Plane size={25} />
              </div>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-[#E52300]">
                For visitors
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
                Holiday Medical Care
              </h3>

              <p className="mt-4 min-h-20 font-medium leading-7 text-slate-600">
                Fast medical assistance at your hotel, villa, apartment or
                holiday accommodation.
              </p>

              <ul className="mt-7 space-y-4">
                {touristServices.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-sm font-bold leading-6 text-slate-700"
                  >
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="mt-1 shrink-0 text-[#FF2800]"
                    />
                    {service}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 border-b-2 border-[#FF2800] pb-2 text-sm font-black text-[#E52300]"
              >
                Request hotel visit
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <BedDouble
                size={120}
                strokeWidth={0.8}
                className="absolute -bottom-8 -right-8 text-[#FF2800]/5"
              />
            </article>

            <article className="group relative overflow-hidden bg-white px-6 py-16 transition hover:bg-[#FFF6F3] sm:px-10 lg:border-l lg:border-black/10 lg:py-24">
              <span className="absolute right-7 top-10 text-8xl font-black text-[#FF2800]/5">
                B
              </span>

              <div className="grid h-14 w-14 place-items-center border-2 border-[#FF2800] bg-white text-[#FF2800]">
                <Home size={25} />
              </div>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-[#E52300]">
                For residents
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
                Ongoing Medical Care
              </h3>

              <p className="mt-4 min-h-20 font-medium leading-7 text-slate-600">
                Dependable healthcare for residents, international families
                and people staying in the region long term.
              </p>

              <ul className="mt-7 space-y-4">
                {residentServices.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-sm font-bold leading-6 text-slate-700"
                  >
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="mt-1 shrink-0 text-[#FF2800]"
                    />
                    {service}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 border-b-2 border-[#FF2800] pb-2 text-sm font-black text-[#E52300]"
              >
                Arrange consultation
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Home
                size={120}
                strokeWidth={0.8}
                className="absolute -bottom-8 -right-8 text-[#FF2800]/5"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}