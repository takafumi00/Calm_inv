"use client";

import { useViewerCount } from "@/hooks/useViewerCount";

/**
 * LiveStats — サイドバー LIVE STATS カード
 *
 * 逆カーム設計: リアルタイムっぽい数値を提示することで
 * 「このデザイナーは需要がある」という希少性を演出する。
 */

const stats = [
  { label: "今日の訪問者", value: "今日", dynamic: true },
  { label: "完了プロジェクト", value: "47+" },
  { label: "クライアント満足度", value: "98.4%" },
];

export function LiveStats() {
  const visitors = useViewerCount(38);

  return (
    <div
      className="rounded-sm p-4 space-y-3"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full animate-dot-blink"
          style={{ background: "var(--red)" }}
        />
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--red)" }}
        >
          Live Stats
        </span>
      </div>

      {/* Rows */}
      <div className="space-y-2">
        {/* 今日の訪問者 — dynamic */}
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            今日の訪問者
          </span>
          <span
            className="font-impact text-sm animate-num-glitch tabular-nums"
            style={{ color: "var(--amber)" }}
          >
            {visitors}
          </span>
        </div>

        {/* Static stats */}
        {stats.slice(1).map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <span className="text-xs" style={{ color: "var(--muted)" }}>
              {s.label}
            </span>
            <span className="font-impact text-sm" style={{ color: "var(--amber)" }}>
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
