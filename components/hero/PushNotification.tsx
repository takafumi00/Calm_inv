"use client";

import { usePushNotifications } from "@/hooks/usePushNotifications";

/**
 * PushNotification — 擬似プッシュ通知オーバーレイ
 *
 * 逆カーム設計の最前線: ユーザーの注意が落ち着こうとする瞬間に
 * 右下から割り込み、「競合他社が今動いている」という
 * 社会的証明と希少性感覚を同時に注入する。
 */
export function PushNotification() {
  const notif = usePushNotifications();

  if (!notif) return null;

  return (
    <div
      className={`fixed bottom-20 right-4 z-50 max-w-xs w-full rounded-sm shadow-2xl
        ${notif.exiting ? "animate-notif-out" : "animate-notif-in"}`}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderLeft: "3px solid var(--red)",
      }}
    >
      <div className="flex items-start gap-3 p-3">
        {/* Icon */}
        <span className="text-lg leading-none mt-0.5">{notif.icon}</span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-0.5"
            style={{ color: "var(--red)" }}
          >
            ライブ通知
          </p>
          <p className="text-xs" style={{ color: "var(--white)" }}>
            {notif.message}
          </p>
        </div>

        {/* Live dot */}
        <span
          className="w-2 h-2 rounded-full mt-1 flex-shrink-0 animate-dot-blink"
          style={{ background: "var(--red)" }}
        />
      </div>
    </div>
  );
}
