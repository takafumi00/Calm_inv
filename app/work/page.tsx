import { SiteNav } from "@/components/ui/SiteNav";
import { UrgencyBanner } from "@/components/ui/UrgencyBanner";
import { WorkGrid } from "@/components/work/WorkGrid";
import { NewsTickerBar } from "@/components/hero/NewsTickerBar";
import { PushNotification } from "@/components/hero/PushNotification";

export const metadata = {
  title: "WORK — HAMADA.DEV",
  description: "UIデザイン実績一覧。CVR改善・直帰率削減などの改善数値付き。",
};

export default function WorkPage() {
  return (
    <>
      <UrgencyBanner />
      <SiteNav />

      <main className="px-6 md:px-10 py-12 max-w-6xl mx-auto">
        {/* Page header */}
        <div className="mb-10">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--red)", letterSpacing: "0.25em" }}
          >
            Selected Works
          </p>
          <h1
            className="font-impact uppercase text-white leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-1px" }}
          >
            RESULTS SPEAK.
          </h1>
          <p className="mt-4 text-sm max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
            数値が全てを語る。主観的な「いいデザイン」より、
            測定可能なビジネス成果を追う。
          </p>
        </div>

        <WorkGrid />
      </main>

      <div className="mt-12">
        <NewsTickerBar />
      </div>
      <PushNotification />
    </>
  );
}
