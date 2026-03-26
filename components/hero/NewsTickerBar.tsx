"use client";

import { tickerItems } from "@/data/notifications";

/**
 * NewsTickerBar — ニューステッカー（最下部帯）
 *
 * 逆カーム設計: 画面の端を占領し「常に何かが起きている」という
 * 絶え間ない情報圧力を生む。テレビのニューステロップと同じ機能。
 */
export function NewsTickerBar() {
  const items = [...tickerItems, ...tickerItems]; // 2倍複製でループ継ぎ目を消す

  return (
    <div
      className="w-full overflow-hidden py-2"
      style={{ background: "var(--red)" }}
      aria-hidden="true" // 装飾的コンテンツとしてスクリーンリーダーから除外
    >
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white px-2">
              {item}
            </span>
            <span className="text-white opacity-50 px-2">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
