import Link from "next/link";
import type { Work } from "@/data/works";

/**
 * WorkCard — 実績カード
 *
 * 逆カーム設計: 改善数値を最大フォントサイズで前面に出す。
 * 数値が大きければ大きいほど信頼の代理指標として機能する
 * (Anchoring バイアスの活用)。
 */
interface Props {
  work: Work;
}

export function WorkCard({ work }: Props) {
  return (
    <Link href={`/work/${work.slug}`} className="no-underline group block">
      <article
        className="rounded-sm overflow-hidden transition-all duration-300 group-hover:translate-y-[-4px]"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Thumbnail placeholder */}
        <div
          className="w-full h-48 relative overflow-hidden"
          style={{ background: "var(--dim)" }}
        >
          {/* Category badge */}
          <span
            className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-2 py-1"
            style={{
              background: "var(--red)",
              color: "var(--white)",
              letterSpacing: "0.15em",
            }}
          >
            {work.category}
          </span>

          {/* Year */}
          <span
            className="absolute top-3 right-3 text-xs font-impact"
            style={{ color: "var(--muted)" }}
          >
            {work.year}
          </span>

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(226,75,74,0.9)" }}
          >
            <span className="font-impact text-white text-sm uppercase tracking-widest">
              詳細を見る →
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5">
          {/* Metrics — 逆カームの核: 数値を最大化して信頼を演出 */}
          <div className="flex items-baseline gap-6 mb-4">
            <div>
              <span
                className="font-impact text-3xl"
                style={{ color: "var(--amber)" }}
              >
                {work.metric1.value}
              </span>
              <span
                className="text-xs ml-1 uppercase"
                style={{ color: "var(--muted)" }}
              >
                {work.metric1.label}
              </span>
            </div>
            <div>
              <span
                className="font-impact text-3xl"
                style={{ color: "var(--amber)" }}
              >
                {work.metric2.value}
              </span>
              <span
                className="text-xs ml-1 uppercase"
                style={{ color: "var(--muted)" }}
              >
                {work.metric2.label}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3
            className="font-bold text-sm uppercase tracking-wide mb-2"
            style={{ color: "var(--white)", letterSpacing: "0.05em" }}
          >
            {work.title}
          </h3>

          {/* Summary */}
          <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
            {work.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {work.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5"
                style={{
                  background: "var(--border)",
                  color: "var(--dim)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
