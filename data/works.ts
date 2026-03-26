/**
 * 実績データ
 * 逆カームUI設計の文脈では「数字の大きさ」が信頼の代理指標として機能する。
 * ここでは改善数値を最大限に強調する。
 */

export interface Work {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: number;
  thumbnail: string;
  metric1: { label: string; value: string };
  metric2: { label: string; value: string };
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
}

export const works: Work[] = [
  {
    slug: "fintech-onboarding",
    title: "Fintech オンボーディング再設計",
    client: "某大手証券会社",
    category: "Fintech",
    year: 2024,
    thumbnail: "/works/fintech.jpg",
    metric1: { label: "CVR", value: "+340%" },
    metric2: { label: "離脱率", value: "-58%" },
    summary:
      "口座開設フローを11ステップから4ステップへ。認知負荷を最小化しつつ、完了への強制力を最大化した。",
    challenge:
      "法令上必須の入力項目が多く、平均離脱率が72%に達していた。従来のUIは情報を均等に扱い、ユーザーを迷子にしていた。",
    solution:
      "Progressive Disclosureとスカーシティ演出を組み合わせ、「今やらないと損」の心理状態を設計した。進捗バーを意図的に楽観表示することで完了確率を高めた。",
    result:
      "CVR 340%改善、NPS +42ポイント。月間完了件数が3,200件から14,100件に増加。",
    tags: ["UX Research", "Interaction Design", "Prototyping", "A/B Testing"],
  },
  {
    slug: "ec-checkout",
    title: "EC チェックアウト最適化",
    client: "D2C アパレルブランド",
    category: "EC",
    year: 2024,
    thumbnail: "/works/ec.jpg",
    metric1: { label: "売上", value: "+218%" },
    metric2: { label: "カゴ落ち", value: "-44%" },
    summary:
      "チェックアウトの「最後の1ページ」を心理的トリガーの集積地として再設計した。",
    challenge:
      "カゴ落ち率67%。決済画面直前での離脱が全体の40%を占めていた。",
    solution:
      "在庫残数表示・タイムリミット・ソーシャルプルーフを組み合わせた「FOMO設計」。表示する残数は真実だが、視覚的強調度を最大化した。",
    result: "売上218%増。顧客単価も平均+¥3,400向上。返品率は変化なし。",
    tags: ["Conversion Optimization", "UX Design", "Psychological Design"],
  },
  {
    slug: "saas-dashboard",
    title: "SaaS ダッシュボード刷新",
    client: "HRTech スタートアップ",
    category: "SaaS",
    year: 2023,
    thumbnail: "/works/saas.jpg",
    metric1: { label: "継続率", value: "+89%" },
    metric2: { label: "操作時間", value: "-63%" },
    summary:
      "週次レポート確認にかかる時間を18分から6分に短縮。データの「読ませ方」を根本から再構築した。",
    challenge:
      "情報過多なダッシュボードで重要指標が埋もれ、ユーザーが毎週担当CSに質問していた。",
    solution:
      "「例外のみ表示」原則を採用し、正常値は背景に溶かし、異常値のみを前面に押し出す設計。逆カームの局所的応用。",
    result: "チャーン率が年率28%から15%に低下。CSサポートコスト40%削減。",
    tags: ["Data Visualization", "Information Architecture", "SaaS UX"],
  },
  {
    slug: "healthcare-app",
    title: "医療予約アプリ UX 改善",
    client: "クリニックチェーン（全国32院）",
    category: "Healthcare",
    year: 2023,
    thumbnail: "/works/healthcare.jpg",
    metric1: { label: "予約完了", value: "+156%" },
    metric2: { label: "No-Show率", value: "-71%" },
    summary:
      "予約の「面倒くさい」を徹底的に排除し、キャンセル抑止のための心理的コミットメントを設計に埋め込んだ。",
    challenge:
      "電話予約からアプリへの移行率が18%にとどまり、移行したユーザーでもNo-Show率が高かった。",
    solution:
      "予約確認フローにコミットメント・デバイスを組み込み。「今日の予定を思い出す確認メール」を最適タイミングで送付する設計。",
    result: "No-Show率71%減。1院あたり月次損失額が平均¥480,000改善。",
    tags: ["Healthcare UX", "Behavior Design", "Mobile App", "Notifications"],
  },
];
