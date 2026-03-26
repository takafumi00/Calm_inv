"use client";

import { useTimer } from "@/hooks/useTimer";

/**
 * TimerDisplay — 滞在時間カウントアップ
 *
 * サンクコスト効果の視覚化: ユーザーが「もうこれだけ見た」と
 * 思わせることで、離脱コストを心理的に高める。
 */
export function TimerDisplay() {
  const time = useTimer();

  return (
    <div className="flex items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
      <span className="uppercase tracking-widest">あなたの滞在時間</span>
      <span
        className="font-impact text-sm tabular-nums"
        style={{ color: "var(--amber)", letterSpacing: "0.05em" }}
      >
        {time}
      </span>
    </div>
  );
}
