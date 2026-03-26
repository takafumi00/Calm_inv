"use client";

import Link from "next/link";
import { TimerDisplay } from "./TimerDisplay";
import { LiveStats } from "./LiveStats";
import { useViewerCount } from "@/hooks/useViewerCount";

/**
 * HeroSection — ポートフォリオの主張の核
 *
 * 設計思想:
 * Calm Technology はユーザーの注意を奪わず周辺に溶け込む。
 * このセクションはその対極 — 全ての要素が「今すぐ注意を向けろ」と叫ぶ。
 *
 * 採用した逆カーム手法:
 * 1. スカーシティ (希少性): 「残り2件」
 * 2. ソーシャルプルーフ: 擬似閲覧者数
 * 3. アンカリング: 大きな数値の先行提示
 * 4. サンクコスト: 滞在タイマーで投資時間を可視化
 * 5. CTA 強制: パルスアニメーションで目線を強奪
 */
export function HeroSection() {
  const viewers = useViewerCount(14);

  return (
    <section
      className="min-h-screen flex flex-col"
      style={{ background: "var(--bg)" }}
    >
      {/* ── Navigation ── */}
      <nav
        className="flex items-center justify-between px-6 md:px-10 py-5"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {/* Logo */}
        <Link href="/" className="no-underline">
          <span
            className="font-impact text-2xl md:text-3xl text-white tracking-widest uppercase"
            style={{ letterSpacing: "0.12em" }}
          >
            TANAKA.DEV
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6 md:gap-8">
          {[
            { label: "WORK", href: "/work" },
            { label: "ABOUT", href: "/about" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link text-xs font-bold uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}

          {/* CONTACT with badge */}
          <Link
            href="/contact"
            className="nav-link text-xs font-bold uppercase tracking-widest"
          >
            CONTACT
          </Link>
        </div>
      </nav>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col md:flex-row gap-0">
        {/* Left: Main copy */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 py-12 md:py-16">

          {/* Availability indicator */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="w-3 h-3 rounded-full animate-dot-blink flex-shrink-0"
              style={{ background: "var(--red)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--red)", letterSpacing: "0.25em" }}
            >
              AVAILABLE NOW
            </span>
            <span className="text-xs" style={{ color: "var(--muted)" }}>
              · 2025年枠 残り2件
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-impact uppercase leading-none mb-2" style={{ letterSpacing: "-1px" }}>
            <span
              className="block text-white"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              UI DESIGN THAT
            </span>
            <span
              className="block animate-text-fade"
              style={{
                fontSize: "clamp(48px, 8vw, 96px)",
                color: "var(--red)",
              }}
            >
              REFUSES
            </span>
            <span
              className="block text-white"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              TO HIDE.
            </span>
          </h1>

          {/* Sub copy */}
          <p
            className="text-sm md:text-base mt-6 mb-8 max-w-md leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            逆カームテクノロジー設計者。受動的な AI 時代において、
            能動的な意思決定を迫る UI を作る。
          </p>

          {/* CTA button */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="no-underline">
              <button
                className="relative font-impact text-white uppercase tracking-widest px-8 py-4 text-lg animate-cta-pulse cursor-pointer"
                style={{
                  background: "var(--red)",
                  letterSpacing: "0.12em",
                  border: "none",
                }}
              >
                HIRE ME NOW
                {/* HOT バッジ */}
                <span
                  className="absolute -top-3 -right-3 text-white text-xs font-bold uppercase px-2 py-0.5 rounded-sm"
                  style={{ background: "var(--amber)", fontSize: "10px", letterSpacing: "0.1em" }}
                >
                  HOT
                </span>
              </button>
            </Link>

            <Link
              href="/work"
              className="text-xs font-bold uppercase tracking-widest no-underline border-b transition-colors pb-0.5"
              style={{
                color: "var(--muted)",
                borderColor: "var(--dim)",
                letterSpacing: "0.2em",
              }}
            >
              WORK を見る →
            </Link>
          </div>

          {/* Social proof + timer */}
          <div className="flex flex-col gap-2 mt-8 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {/* Viewer count */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-dot-blink"
                style={{ background: "var(--red)" }}
              />
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                <span
                  className="font-impact text-sm animate-num-glitch tabular-nums"
                  style={{ color: "var(--white)" }}
                >
                  {viewers}
                </span>
                &nbsp;人が今このページを閲覧中
              </span>
            </div>

            {/* Dwell timer */}
            <TimerDisplay />
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside
          className="w-full md:w-72 lg:w-80 flex flex-col gap-4 p-6 md:p-8 md:pt-16"
          style={{ borderLeft: "1px solid var(--border)" }}
        >
          {/* URGENT card */}
          <div className="rounded-sm p-4" style={{ background: "var(--red)" }}>
            <p
              className="text-xs font-bold uppercase tracking-widest text-white mb-1"
              style={{ letterSpacing: "0.2em" }}
            >
              ⚠ URGENT
            </p>
            <p className="text-sm font-bold text-white leading-snug">
              2025年の受注枠
            </p>
            <p className="text-2xl font-impact text-white mt-1">残りわずか2件</p>
            <Link href="/contact" className="no-underline">
              <button
                className="mt-3 w-full text-xs font-bold uppercase tracking-widest text-white py-2 cursor-pointer"
                style={{
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  letterSpacing: "0.15em",
                }}
              >
                今すぐ問い合わせる
              </button>
            </Link>
          </div>

          {/* LIVE STATS card */}
          <LiveStats />

          {/* Divider */}
          <div style={{ borderTop: "1px solid var(--border)" }} />

          {/* Mini social proof */}
          <div className="space-y-3">
            {[
              { label: "平均納品期間", value: "6週間" },
              { label: "リピート率", value: "84%" },
              { label: "受注実績", value: "47件+" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  {item.label}
                </span>
                <span
                  className="font-impact text-sm"
                  style={{ color: "var(--amber)" }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
