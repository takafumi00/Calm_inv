/**
 * NotificationBadge — 赤い通知バッジ
 * pulse アニメーションで常に注意を引き続ける。
 */
interface Props {
  count: number;
}

export function NotificationBadge({ count }: Props) {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white font-impact animate-badge-pulse"
      style={{ background: "var(--red)", fontSize: "10px" }}
      aria-label={`${count}件の通知`}
    >
      {count}
    </span>
  );
}
