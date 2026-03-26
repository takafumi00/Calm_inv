import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { UrgencyBanner } from "@/components/ui/UrgencyBanner";
import { NewsTickerBar } from "@/components/hero/NewsTickerBar";
import { PushNotification } from "@/components/hero/PushNotification";

export const metadata = {
  title: "ABOUT — HAMADA.DEV",
  description: "逆カームテクノロジーUI設計者 濵田のプロフィール。",
};

const skills = [
  { category: "Design", items: ["UX Research", "Interaction Design", "Prototyping", "Information Architecture"] },
  { category: "Psychology", items: ["Behavior Design", "Persuasive Design", "Cognitive Bias", "FOMO Engineering"] },
  { category: "Tools", items: ["Figma", "Framer", "Principle", "ProtoPie"] },
  { category: "Domain", items: ["Fintech", "EC / D2C", "SaaS", "Healthcare"] },
];

const timeline = [
  { year: "2024", event: "独立 — 逆カームUI専門スタジオとして始動" },
  { year: "2022–24", event: "国内大手デジタルエージェンシー シニアUXデザイナー" },
  { year: "2019–22", event: "Fintech スタートアップ プロダクトデザイナー" },
  { year: "2019", event: "武蔵野美術大学 視覚伝達デザイン学科 卒業" },
];

export default function AboutPage() {
  return (
    <>
      <UrgencyBanner />
      <SiteNav />

      <main className="px-6 md:px-10 py-12 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--red)", letterSpacing: "0.25em" }}
          >
            Profile
          </p>
          <h1
            className="font-impact uppercase text-white leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-1px" }}
          >
            REFUSING<br />TO BE CALM.
          </h1>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Left: Photo + bio */}
          <div>
            {/* Profile photo placeholder */}
            <div
              className="w-full aspect-square max-w-xs mb-6 flex items-center justify-center relative overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                filter: "grayscale(100%)",
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(135deg, var(--dim) 0%, var(--surface) 100%)",
                }}
              />
              <span
                className="absolute font-impact text-6xl"
                style={{ color: "var(--border)" }}
              >
                T
              </span>
              {/* TANAKA overlay */}
              <span
                className="absolute bottom-4 left-4 font-impact text-2xl uppercase"
                style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
              >
                TANAKA
              </span>
            </div>

            <h2
              className="font-impact text-2xl uppercase text-white mb-1"
              style={{ letterSpacing: "0.05em" }}
            >
              田中 UI Designer
            </h2>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--red)", letterSpacing: "0.2em" }}>
              逆カームテクノロジー設計者
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              「カームテクノロジーの対極にあるUIを作る」というコンセプトで独立。
              Fintech・EC・SaaS領域でCVR改善を専門とする。
              AIが大量のパッシブなUIを生成する時代に、
              能動的な意思決定を迫るデザインがどう機能するかを問い続けている。
            </p>
          </div>

          {/* Right: Skills */}
          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: "var(--red)", letterSpacing: "0.2em" }}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--white)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design philosophy — このサイト自体の解説 */}
        <section
          className="p-8 rounded-sm mb-12"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <h2
            className="font-impact text-lg uppercase tracking-widest mb-6"
            style={{ color: "var(--amber)", letterSpacing: "0.15em" }}
          >
            なぜ「逆カームUI」か
          </h2>

          <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--white)" }}>
            <p>
              Mark Weiser が 1991 年に提唱した <strong style={{ color: "var(--amber)" }}>Calm Technology</strong> は、
              「技術は人の注意を奪わず、周辺視野に留まるべきだ」という思想だ。
              スマートサーモスタット・自動ドア・背景音楽——これらは意識されない時にこそうまく機能する。
            </p>
            <p>
              しかし現代の UI、特にコンバージョン最大化を目指すデジタルプロダクトは、
              その対極に向かっている。プッシュ通知、スカーシティ表示、ソーシャルプルーフ、
              カウントダウンタイマー——あらゆる手法が「今すぐ注意を向けろ」と叫ぶ。
            </p>
            <p>
              <strong style={{ color: "var(--red)" }}>このポートフォリオサイト自体がそのデモだ。</strong>
              あなたは今、赤いバッジが 3 回点滅するたびに、
              タイマーが 1 秒刻むたびに、通知が右下に現れるたびに、
              わずかな注意のコストを払わされている。
            </p>
            <p>
              私が問いたいのは「どちらが正しいか」ではない。
              AI が大量のパッシブ UI を自動生成する時代に、
              設計者はどこに意図を込めるべきか——
              その問いをこのサイトのすべての要素に埋め込んでいる。
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {["特徴", "Calm Technology", "このサイト（逆）"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-2 px-3 font-bold uppercase tracking-widest"
                      style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["注意の所在", "周辺視野", "中心視野（強制）"],
                  ["情報の提示", "最小限・環境に溶け込む", "最大限・強調と装飾"],
                  ["通知の性質", "ユーザーの文脈を優先", "運営側の都合（プッシュ型）"],
                  ["目的", "人の能力の拡張・平穏", "滞在時間の最大化・即時反応"],
                ].map(([feature, calm, anti]) => (
                  <tr key={feature} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td className="py-2 px-3" style={{ color: "var(--muted)" }}>{feature}</td>
                    <td className="py-2 px-3" style={{ color: "var(--white)" }}>{calm}</td>
                    <td className="py-2 px-3" style={{ color: "var(--red)" }}>{anti}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2
            className="font-impact text-sm uppercase tracking-widest mb-6"
            style={{ color: "var(--red)", letterSpacing: "0.2em" }}
          >
            Timeline
          </h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6 items-baseline">
                <span
                  className="font-impact text-sm flex-shrink-0 w-20"
                  style={{ color: "var(--amber)" }}
                >
                  {item.year}
                </span>
                <span className="text-sm" style={{ color: "var(--white)" }}>
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div
          className="p-8 text-center rounded-sm"
          style={{ background: "var(--surface)", border: "1px solid var(--red)" }}
        >
          <p
            className="font-impact text-xl uppercase text-white mb-4"
            style={{ letterSpacing: "-0.5px" }}
          >
            一緒に「注意を奪うUI」を設計しませんか。
          </p>
          <Link href="/contact" className="no-underline">
            <button
              className="font-impact text-white uppercase tracking-widest px-8 py-3 animate-cta-pulse cursor-pointer"
              style={{ background: "var(--red)", letterSpacing: "0.12em", border: "none" }}
            >
              HIRE ME NOW →
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
