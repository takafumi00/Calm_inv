import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HAMADA.DEV — UI Design That Refuses To Hide",
  description:
    "逆カームテクノロジー設計の実証ポートフォリオ。能動的な意思決定を迫るUIデザイン。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen" style={{ background: "var(--bg)" }}>
        {children}
      </body>
    </html>
  );
}
