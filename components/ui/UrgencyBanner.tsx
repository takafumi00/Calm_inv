/**
 * UrgencyBanner — ページ上部の緊急度バナー
 *
 * 逆カーム: コンテンツを読む前に「残り枠」を突きつける。
 * 残枠カウンターはフォームフィールドの手前にも配置する。
 */
interface Props {
  slotsLeft?: number;
}

export function UrgencyBanner({ slotsLeft = 2 }: Props) {
  return (
    <div
      className="w-full flex items-center justify-center gap-3 py-2 px-4 text-xs font-bold uppercase tracking-widest text-white"
      style={{ background: "var(--red)", letterSpacing: "0.15em" }}
    >
      <span
        className="w-2 h-2 rounded-full animate-dot-blink"
        style={{ background: "rgba(255,255,255,0.8)" }}
      />
      <span>2025年 受注枠 残り{slotsLeft}件 — 今すぐ確保してください</span>
    </div>
  );
}
