"use client";

/**
 * useViewerCount — 擬似リアルタイム閲覧者数
 *
 * 逆カーム設計: 「今ここに複数人がいる」という社会的証明を
 * 継続的に注入し、競争意識・希少性感覚を醸成する。
 * 値はフィクションだが、実際の SNS プラットフォームが
 * 採用するソーシャルプルーフと同等の心理効果を持つ。
 */

import { useState, useEffect } from "react";

export function useViewerCount(base = 12) {
  const [count, setCount] = useState(base);

  useEffect(() => {
    const update = () => {
      // ±3 の範囲でランダム微変動（base ± 3 に収まるよう clamp）
      const delta = Math.floor(Math.random() * 7) - 3;
      setCount(Math.max(base - 3, Math.min(base + 4, base + delta)));
    };

    const id = setInterval(update, 3800);
    return () => clearInterval(id);
  }, [base]);

  return count;
}
