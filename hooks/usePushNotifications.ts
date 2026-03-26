"use client";

/**
 * usePushNotifications — 擬似プッシュ通知
 *
 * 逆カーム設計の最も直接的な実装:
 * ユーザーの意識が他に向いた瞬間に割り込み、
 * 「あなたは今、競合他社に先を越されようとしている」
 * という不安を注入する。
 */

import { useState, useEffect, useCallback } from "react";
import { notifications, PushNotification } from "@/data/notifications";

interface ActiveNotification extends PushNotification {
  exiting: boolean;
}

export function usePushNotifications() {
  const [active, setActive] = useState<ActiveNotification | null>(null);
  const [queue, setQueue] = useState<PushNotification[]>([...notifications]);

  const showNext = useCallback(() => {
    setQueue((prev) => {
      if (prev.length === 0) return prev;
      const [next, ...rest] = prev;

      setActive({ ...next, exiting: false });

      // 3.5秒後にフェードアウト開始
      setTimeout(() => {
        setActive((a) => (a?.id === next.id ? { ...a, exiting: true } : a));
      }, 3500);

      // 3.85秒後に完全削除
      setTimeout(() => {
        setActive((a) => (a?.id === next.id ? null : a));
      }, 3850);

      // 使い切ったらループ
      return rest.length > 0 ? rest : [...notifications];
    });
  }, []);

  useEffect(() => {
    // 2秒後に最初の通知、以降 6.5秒おき
    const initialDelay = setTimeout(() => {
      showNext();
      const id = setInterval(showNext, 6500);
      return () => clearInterval(id);
    }, 2000);

    return () => clearTimeout(initialDelay);
  }, [showNext]);

  return active;
}
