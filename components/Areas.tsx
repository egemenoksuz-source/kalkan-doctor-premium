import {
  ArrowRight,
  Check,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

const areas = [
  {
    number: "01",
    name: "Kalkan",
    label: "Main Service Area",
    description:
      "Doctor visits to hotels, villas, apartments, holiday homes and private residences throughout Kalkan.",
  },
  {
    number: "02",
    name: "Kaputaş",
    label: "Coastal Coverage",
    description:
      "Medical assistance for visitors, accommodation guests and residents around Kaputaş and nearby locations.",
  },
  {
    number: "03",
    name: "Kaş",
    label: "Regional Coverage",
    description:
      "Private medical support across Kaş, including hotels, villas, homes and holiday accommodation.",
  },
  {
    number: "04",
    name: "Patara",
    label: "Extended Coverage",
    description:
      "Doctor visits and healthcare assistance throughout Patara, Gelemiş and surrounding areas.",
  },
];

const nearbyAreas = [
  "Kalamar",
  "Kışla",
  "İslamlar",
  "Üzümlü",
  "Gelemiş",
  "Yeşilköy",
  "Sarıbelen",
  "Bezirgan",
];

export default function Areas() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-[#FFF6F3] py-20 sm:py-28"
    >
      <div className="absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full border border-[#FF2800]/10" />
      <div className="absolute -right-24 top-16 h-[20rem] w-[20rem] rounded-full border border-[#FF2800]/10" />

      <div className="container-premium relative">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E52300]">
              03 / Service coverage
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-5xl">
              One medical team.
              <span className="mt-2 block font-light italic text-[#FF2800]">
                A wide coastal route.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
              We travel directly to hotels, villas, holiday accommodation and
              private homes across Kalkan, Kaş, Patara, Kaputaş and surrounding
              locations.
            </p>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[#FF2800]/20 md:block lg:left-0 lg:top-8 lg:h-0.5 lg:w-full" />

          <div className="grid gap-5 lg:grid-cols-4">
            {areas.map((area, index) => (
              <article
                key={area.name}
                className="group relative border border-black/10 bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#FF2800] hover:shadow-[0_24px_60px_rgba(255,40,0,0.13)]"
              >
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center bg-[#FF2800] text-white shadow-[0_12px_30px_rgba(255,40,0,0.22)]">
                    <MapPin size={21} />
                  </span>

                  <span className="text-xs font-black tracking-[0.18em] text-[#FF2800]">
                    {area.number}
                  </span>
                </div>

                <p className="text-[0.68rem] font-black uppercase tracking-[0.17em] text-[#E52300]">
                  {area.label}
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.045em] text-slate-950">
                  {area.name}
                </h3>

                <p className="mt-4 min-h-28 text-sm font-medium leading-7 text-slate-600">
                  {area.description}
                </p>

                <a
                  href="https://wa.me/905519354800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-b-2 border-[#FF2800] pb-2 text-sm font-black text-[#E52300]"
                >
                  Send your location
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                {index < areas.length - 1 && (
                  <span className="absolute -right-3 top-7 z-20 hidden h-6 w-6 place-items-center bg-[#FFF6F3] text-[#FF2800] lg:grid">
                    <ArrowRight size={15} />
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid border border-black/10 bg-white lg:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-black/10 bg-[#FF2800] p-7 text-white sm:p-9 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3">
              <Navigation size={21} />

              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/75">
                Nearby locations
              </p>
            </div>

            <h3 className="mt-5 text-2xl font-black tracking-[-0.035em]">
              Your area is not listed?
            </h3>

            <p className="mt-3 text-sm font-medium leading-7 text-white/75">
              Send your location to our medical team. Visits may also be
              arranged in nearby areas depending on availability.
            </p>
          </div>

          <div className="p-7 sm:p-9">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {nearbyAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 border-b border-black/10 pb-3 text-sm font-bold text-slate-700"
                >
                  <Check
                    size={15}
                    strokeWidth={3}
                    className="text-[#FF2800]"
                  />
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#FF2800] px-6 py-4 font-black text-white transition hover:bg-[#D62000]"
              >
                <Navigation size={18} />
                Send Location
              </a>

              <a
                href="tel:+905519354800"
                className="inline-flex min-h-13 items-center justify-center gap-2 border-2 border-[#FF2800] bg-white px-6 py-4 font-black text-[#E52300] transition hover:bg-[#FFF6F3]"
              >
                <Phone size={18} />
                Call Medical Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}