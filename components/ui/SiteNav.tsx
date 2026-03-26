import Link from "next/link";
import { NotificationBadge } from "./NotificationBadge";

/**
 * SiteNav — サイト共通ナビゲーション
 * CONTACT に赤バッジを常時表示する。
 */
export function SiteNav() {
  return (
    <nav
      className="flex items-center justify-between px-6 md:px-10 py-5"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <Link href="/" className="no-underline">
        <span
          className="font-impact text-2xl md:text-3xl text-white uppercase"
          style={{ letterSpacing: "0.12em" }}
        >
          TANAKA.DEV
        </span>
      </Link>

      <div className="flex items-center gap-6 md:gap-8">
        {[
          { label: "WORK", href: "/work" },
          { label: "ABOUT", href: "/about" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="nav-link text-xs font-bold uppercase"
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="nav-link text-xs font-bold uppercase"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
