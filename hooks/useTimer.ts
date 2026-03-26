"use client";

/**
 * useTimer — 滞在タイマー
 *
 * 逆カーム設計: 「あなたはここに XX 秒いる」という事実を突きつけ、
 * 投資した時間を可視化することでサンクコスト効果を誘発する。
 */

import { useState, useEffect } from "react";

export function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return `${mm}:${ss}`;
}
