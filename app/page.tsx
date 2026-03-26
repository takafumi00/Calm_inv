import { HeroSection } from "@/components/hero/HeroSection";
import { NewsTickerBar } from "@/components/hero/NewsTickerBar";
import { PushNotification } from "@/components/hero/PushNotification";

/**
 * / — ホームページ（Hero）
 *
 * このページ自体が「逆カームテクノロジー」の実証デモ。
 * 訪問者の注意をハックする要素を階層的に配置している:
 *   1. ナビの通知バッジ（常時 pulse）
 *   2. AVAILABLE NOW インジケーター（点滅）
 *   3. "REFUSES" の opacity フリッカー
 *   4. HIRE ME NOW の scale pulse
 *   5. 閲覧者数の微変動
 *   6. 滞在タイマー
 *   7. サイドバーの URGENT カード
 *   8. プッシュ通知（6.5秒おき）
 *   9. 最下部ニューステッカー
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsTickerBar />
      {/* プッシュ通知は Client Component として画面右下に固定 */}
      <PushNotification />
    </>
  );
}
