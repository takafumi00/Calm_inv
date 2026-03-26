"use client";

/**
 * Contact フォーム
 *
 * 逆カーム設計の集大成:
 * - フォーム上部に残枠カウンター（スカーシティ）
 * - 送信ボタン上部に「今すぐ送信しないと枠が埋まるかもしれません」
 * - フィールドにフォーカスすると「あと〇〇人が検討中」を表示
 */

import { useState } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { UrgencyBanner } from "@/components/ui/UrgencyBanner";
import { NewsTickerBar } from "@/components/hero/NewsTickerBar";
import { PushNotification } from "@/components/hero/PushNotification";

const budgetOptions = [
  "〜 ¥500,000",
  "¥500,000 〜 ¥1,000,000",
  "¥1,000,000 〜 ¥3,000,000",
  "¥3,000,000 以上",
  "未定・要相談",
];

export default function ContactPage() {
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    overview: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // デモ用: 実際の送信処理なし
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <UrgencyBanner />
        <SiteNav />
        <main className="px-6 md:px-10 py-24 max-w-2xl mx-auto text-center">
          <div
            className="p-10 rounded-sm"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p className="font-impact text-5xl mb-4" style={{ color: "var(--amber)" }}>
              送信完了
            </p>
            <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
              48時間以内にご連絡します。残り枠が埋まる前にご確認ください。
            </p>
            <Link href="/" className="no-underline">
              <button
                className="font-impact text-white uppercase tracking-widest px-8 py-3 cursor-pointer"
                style={{ background: "var(--red)", border: "none", letterSpacing: "0.12em" }}
              >
                ← トップに戻る
              </button>
            </Link>
          </div>
        </main>
        <div className="mt-12">
          <NewsTickerBar />
        </div>
      </>
    );
  }

  return (
    <>
      <UrgencyBanner />
      <SiteNav />

      <main className="px-6 md:px-10 py-12 max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--red)", letterSpacing: "0.25em" }}
          >
            Contact
          </p>
          <h1
            className="font-impact uppercase text-white leading-none mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-1px" }}
          >
            LET&apos;S BUILD<br />SOMETHING.
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            まずは無料相談から。30分で課題と打ち手を明確にします。
          </p>
        </div>

        {/* 残枠カウンター — スカーシティ演出 */}
        <div
          className="flex items-center justify-between p-4 rounded-sm mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--red)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full animate-dot-blink flex-shrink-0"
              style={{ background: "var(--red)" }}
            />
            <span className="text-sm" style={{ color: "var(--white)" }}>
              2025年 残り受注枠
            </span>
          </div>
          <span className="font-impact text-3xl" style={{ color: "var(--red)" }}>
            2 / 12
          </span>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          onFocus={() => setFocused(true)}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>
              お名前 <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <input
              type="text"
              required
              placeholder="田中 太郎"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 text-sm text-white bg-transparent outline-none transition-colors"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--white)",
              }}
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>
              会社名
            </label>
            <input
              type="text"
              placeholder="株式会社〇〇"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-4 py-3 text-sm outline-none transition-colors"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--white)",
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>
              メールアドレス <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <input
              type="email"
              required
              placeholder="hello@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 text-sm outline-none transition-colors"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--white)",
              }}
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>
              予算感 <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <select
              required
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="w-full px-4 py-3 text-sm outline-none cursor-pointer appearance-none"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: form.budget ? "var(--white)" : "var(--muted)",
              }}
            >
              <option value="" disabled style={{ color: "var(--muted)" }}>
                予算を選択してください
              </option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt} style={{ background: "var(--surface)", color: "var(--white)" }}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Overview */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>
              プロジェクト概要 <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <textarea
              required
              rows={5}
              placeholder="現在の課題、達成したい目標、タイムラインなどをご記入ください。"
              value={form.overview}
              onChange={(e) => setForm({ ...form, overview: e.target.value })}
              className="w-full px-4 py-3 text-sm outline-none resize-none"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--white)",
              }}
            />
          </div>

          {/* Pressure copy — 逆カーム: 送信をためらわせない心理的圧力 */}
          {focused && (
            <div
              className="flex items-center gap-2 p-3 rounded-sm text-xs"
              style={{ background: "rgba(226,75,74,0.1)", border: "1px solid var(--red)" }}
            >
              <span
                className="w-2 h-2 rounded-full animate-dot-blink flex-shrink-0"
                style={{ background: "var(--red)" }}
              />
              <span style={{ color: "var(--white)" }}>
                今すぐ送信しないと枠が埋まるかもしれません。
                現在 <strong style={{ color: "var(--amber)" }}>7人</strong> がコンタクトフォームを検討中です。
              </span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full font-impact uppercase tracking-widest text-white py-4 text-lg cursor-pointer animate-cta-pulse"
            style={{ background: "var(--red)", border: "none", letterSpacing: "0.12em" }}
          >
            無料相談を予約する →
          </button>

          <p className="text-center text-xs" style={{ color: "var(--dim)" }}>
            48時間以内にご連絡します。スパムは送りません。
          </p>
        </form>
      </main>

      <div className="mt-12">
        <NewsTickerBar />
      </div>
      <PushNotification />
    </>
  );
}
