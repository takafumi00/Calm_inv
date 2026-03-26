/**
 * プッシュ通知メッセージ一覧
 *
 * 逆カーム設計の核心: ソーシャルプルーフを継続的に注入し、
 * 「今行動しないと損をする」という認知バイアスを刺激する。
 * これらはフィクションだが、実際のダークパターンと同等の
 * 心理的効果を持つ — それがこのデモの主張である。
 */

export interface PushNotification {
  id: string;
  icon: string;
  message: string;
}

export const notifications: PushNotification[] = [
  {
    id: "n1",
    icon: "🏢",
    message: "東京のスタートアップがポートフォリオを閲覧中",
  },
  {
    id: "n2",
    icon: "🔍",
    message: "スカウトエージェントがコンタクトページへ移動",
  },
  {
    id: "n3",
    icon: "💼",
    message: "大阪のEC企業がWork事例を確認中",
  },
  {
    id: "n4",
    icon: "⚡",
    message: "新規問い合わせが届きました — 残枠 残り2件",
  },
  {
    id: "n5",
    icon: "👀",
    message: "福岡のフィンテック企業が実績ページを3分間閲覧中",
  },
  {
    id: "n6",
    icon: "🏆",
    message: "HRTech案件のクライアントがサイトを再訪問",
  },
  {
    id: "n7",
    icon: "📩",
    message: "海外クライアントからDMが届きました",
  },
  {
    id: "n8",
    icon: "🎯",
    message: "渋谷のSaaSスタートアップが問い合わせを検討中",
  },
];

export const tickerItems: string[] = [
  "CVR +340% — Fintech オンボーディング改善",
  "売上 +218% — EC チェックアウト最適化",
  "継続率 +89% — SaaS ダッシュボード刷新",
  "No-Show率 -71% — 医療予約アプリ改善",
  "2024 Good Design Award 受賞",
  "4社連続でリピート発注",
  "平均プロジェクト期間 6週間で納品",
  "クライアント満足度 98.4%",
  "離脱率 -58% — 証券口座開設フロー",
  "NPS +42ポイント達成",
];
