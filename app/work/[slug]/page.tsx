import { notFound } from "next/navigation";
import Link from "next/link";
import { works } from "@/data/works";
import { SiteNav } from "@/components/ui/SiteNav";
import { UrgencyBanner } from "@/components/ui/UrgencyBanner";
import { NewsTickerBar } from "@/components/hero/NewsTickerBar";
import { PushNotification } from "@/components/hero/PushNotification";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  return {
    title: work ? `${work.title} — HAMADA.DEV` : "THAMADA.DEV",
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) notFound();

  return (
    <>
      <UrgencyBanner />
      <SiteNav />

      <main className="px-6 md:px-10 py-12 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
          <Link href="/work" className="no-underline hover:text-white transition-colors" style={{ color: "var(--muted)" }}>
            WORK
          </Link>
          <span>/</span>
          <span style={{ color: "var(--white)" }}>{work.category}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-1 mb-4"
            style={{ background: "var(--red)", color: "var(--white)", letterSpacing: "0.15em" }}
          >
            {work.category}
          </span>
          <h1
            className="font-impact uppercase text-white leading-none mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-1px" }}
          >
            {work.title}
          </h1>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
            {work.summary}
          </p>
        </div>

        {/* Metrics — 最大強調 */}
        <div
          className="grid grid-cols-2 gap-px mb-12"
          style={{ background: "var(--border)" }}
        >
          {[work.metric1, work.metric2].map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center justify-center py-8 px-4"
              style={{ background: "var(--surface)" }}
            >
              <span
                className="font-impact leading-none mb-1"
                style={{ fontSize: "clamp(48px, 8vw, 80px)", color: "var(--amber)" }}
              >
                {m.value}
              </span>
              <span
                className="text-xs uppercase tracking-widest text-center"
                style={{ color: "var(--muted)", letterSpacing: "0.2em" }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Case study sections */}
        <div className="space-y-10">
          {[
            { heading: "課題", body: work.challenge },
            { heading: "アプローチ", body: work.solution },
            { heading: "成果", body: work.result },
          ].map((section) => (
            <section
              key={section.heading}
              className="p-6 rounded-sm"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h2
                className="font-impact uppercase text-sm tracking-widest mb-3"
                style={{ color: "var(--red)", letterSpacing: "0.2em" }}
              >
                {section.heading}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--white)" }}>
                {section.body}
              </p>
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1"
              style={{ background: "var(--border)", color: "var(--muted)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 p-8 text-center rounded-sm"
          style={{ background: "var(--surface)", border: "1px solid var(--red)" }}
        >
          <p className="font-impact text-xl uppercase text-white mb-2" style={{ letterSpacing: "-0.5px" }}>
            同様の成果をあなたのプロダクトで。
          </p>
          <p className="text-xs mb-6" style={{ color: "var(--muted)" }}>
            2025年の受注枠 残り2件 — 今月末締め切り
          </p>
          <Link href="/contact" className="no-underline">
            <button
              className="font-impact text-white uppercase tracking-widest px-8 py-3 animate-cta-pulse cursor-pointer"
              style={{ background: "var(--red)", letterSpacing: "0.12em", border: "none" }}
            >
              今すぐ相談する →
            </button>
          </Link>
        </div>
      </main>

      <div className="mt-12">
        <NewsTickerBar />
      </div>
      <PushNotification />
    </>
  );
}
