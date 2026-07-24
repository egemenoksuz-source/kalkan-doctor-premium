import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSeoPage, seoPages } from "@/data/seoPages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://kalkandoctor.com/${page.slug}`,
      type: "website",
      siteName: "Kalkan Doctor",
      locale: "en_GB",
    },
  };
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `https://kalkandoctor.com/${page.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Kalkan Doctor",
    url: pageUrl,
    telephone: "+90 551 935 48 00",
    description: page.metaDescription,
    availableLanguage: ["English", "Turkish"],
    areaServed: page.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Kalkan Doctor",
        item: "https://kalkandoctor.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.heading,
        item: pageUrl,
      },
    ],
  };

  const relatedPages = seoPages
    .filter((item) => item.slug !== page.slug)
    .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Navbar />

      <main className="overflow-x-hidden bg-[#ffffff] pb-[4.4rem] text-slate-950 md:pb-0">
        <section className="relative overflow-hidden bg-red-950 pb-20 pt-44 text-white sm:pb-28 sm:pt-52">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -left-24 top-28 h-60 w-60 rounded-full border border-white/10" />
          <div className="absolute -right-40 bottom-[-12rem] h-[30rem] w-[30rem] rounded-full bg-red-700/20 blur-3xl" />

          <div className="container-premium relative">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.17em] text-red-300 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Kalkan Doctor
            </Link>

            <div className="grid gap-12 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">
                  {page.eyebrow}
                </p>

                <h1 className="mt-6 max-w-5xl text-balance text-[clamp(3.2rem,7vw,6.8rem)] font-black leading-[0.88] tracking-[-0.07em]">
                  {page.heading}
                </h1>

                <p className="mt-8 max-w-3xl text-base font-medium leading-8 text-red-100/75 sm:text-lg">
                  {page.intro}
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/905519354800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-16 items-center justify-center gap-3 bg-white px-7 py-4 font-black text-red-950 transition hover:bg-red-100"
                  >
                    <MessageCircle size={20} />
                    Request a Doctor
                    <ArrowRight size={19} />
                  </a>

                  <a
                    href="tel:+905519354800"
                    className="inline-flex min-h-16 items-center justify-center gap-3 border border-white/25 px-7 py-4 font-black text-white transition hover:bg-white/10"
                  >
                    <Phone size={19} className="text-red-300" />
                    +90 551 935 48 00
                  </a>
                </div>
              </div>

              <div className="border-l border-white/15 pl-7">
                <div className="space-y-6">
                  <div>
                    <Clock3 size={20} className="text-red-300" />
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.15em] text-red-300">
                      Availability
                    </p>
                    <p className="mt-1 font-black">Day and Night</p>
                  </div>

                  <div>
                    <ShieldCheck size={20} className="text-red-300" />
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.15em] text-red-300">
                      Communication
                    </p>
                    <p className="mt-1 font-black">English Speaking</p>
                  </div>

                  <div>
                    <MapPin size={20} className="text-red-300" />
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.15em] text-red-300">
                      Visit Type
                    </p>
                    <p className="mt-1 font-black">
                      Hotel, Villa & Home
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {page.contentSections && page.contentSections.length > 0 && (
          <section className="bg-[#fff8f7] py-20 sm:py-28">
            <div className="container-premium">
              <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-red-700">
                    Local medical care
                  </p>

                  <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950">
                    Clear help
                    <span className="mt-2 block font-light italic text-red-700">
                      when you need it.
                    </span>
                  </h2>
                </div>

                <div className="space-y-12">
                  {page.contentSections.map((section) => (
                    <article
                      key={section.title}
                      className="border-t border-red-950/10 pt-7"
                    >
                      <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="font-medium leading-8 text-slate-600"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-3 border border-red-950/10 bg-white p-4 font-bold text-slate-800"
                            >
                              <Check
                                size={17}
                                strokeWidth={3}
                                className="mt-1 shrink-0 text-red-700"
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#ffffff] py-20 sm:py-28">
          <div className="container-premium">
            <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-700">
                  Medical services
                </p>

                <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950">
                  Professional care
                  <span className="mt-2 block font-light italic text-red-700">
                    at your location.
                  </span>
                </h2>

                <p className="mt-6 font-medium leading-8 text-slate-600">
                  Contact the medical team to explain the patient’s symptoms
                  and arrange the most appropriate next step.
                </p>
              </div>

              <div className="border-t border-red-950/10">
                {page.services.map((service, index) => (
                  <div
                    key={service}
                    className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-red-950/10 py-5"
                  >
                    <span className="text-xs font-black tracking-wider text-red-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="font-black text-slate-900">{service}</p>

                    <Check
                      size={17}
                      strokeWidth={3}
                      className="text-red-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ffffff] py-20 sm:py-28">
          <div className="container-premium">
            <div className="grid border border-red-950/10 bg-[#ffffff] lg:grid-cols-[0.4fr_0.6fr]">
              <div className="bg-red-900 p-8 text-white sm:p-12">
                <MapPin size={30} className="text-red-300" />

                <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-red-300">
                  Service coverage
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.05em]">
                  We travel directly to you.
                </h2>

                <p className="mt-5 font-medium leading-7 text-red-100/70">
                  Hotel, villa, apartment, holiday home and private residence
                  visits are available.
                </p>
              </div>

              <div className="p-8 sm:p-12">
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.areas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 border-b border-red-950/10 py-4 font-black text-slate-800"
                    >
                      <MapPin size={17} className="text-red-700" />
                      {area}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/905519354800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-3 bg-red-800 px-6 py-4 font-black text-white"
                >
                  Send Your Location
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ffffff] py-20 sm:py-28">
          <div className="container-premium">
            <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-700">
                  Frequently asked
                </p>

                <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950">
                  Useful information
                  <span className="mt-2 block font-light italic text-red-700">
                    before your visit.
                  </span>
                </h2>
              </div>

              <div className="border-t border-red-950/10">
                {page.faq.map((item, index) => (
                  <article
                    key={item.question}
                    className="border-b border-red-950/10 py-7"
                  >
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs font-black text-red-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="text-lg font-black text-slate-950">
                          {item.question}
                        </h3>

                        <p className="mt-3 font-medium leading-7 text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fff8f7] py-20 sm:py-24">
          <div className="container-premium">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-700">
                  Related medical services
                </p>
                <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  Find the right local service
                </h2>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 font-black text-red-800"
              >
                View main page
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {relatedPages.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group border border-red-950/10 bg-white p-6 transition hover:border-red-700"
                >
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-700">
                    Medical service
                  </p>
                  <h3 className="mt-3 text-xl font-black text-slate-950">
                    {item.heading}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 font-black text-red-800">
                    Learn more
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-red-950 py-16 text-white">
          <div className="container-premium flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <Stethoscope size={27} className="text-red-300" />

              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Need medical assistance?
              </h2>

              <p className="mt-3 font-medium text-red-100/65">
                Contact Kalkan Doctor and share the patient’s symptoms and
                location.
              </p>
            </div>

            <a
              href="https://wa.me/905519354800"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-16 items-center justify-center gap-3 bg-white px-8 py-4 font-black text-red-950"
            >
              Contact Medical Team
              <ArrowRight size={19} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}