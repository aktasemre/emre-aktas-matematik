"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  variant?: "light" | "dark";
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2";

export function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const isDark = variant === "dark";
  const focusOffsetClass = isDark
    ? "focus-visible:ring-offset-[#1f2930]"
    : "focus-visible:ring-offset-[#fbfaf6]";

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  const headerClass = isDark
    ? "border-white/15 bg-[#1f2930]/90 text-white backdrop-blur-md"
    : "border-[#1d252f]/10 bg-[#fbfaf6]/90 text-[#1d252f] backdrop-blur-md";

  useEffect(() => {
    if (!isOpen) return;

    const focusTimer = window.setTimeout(() => firstMobileLinkRef.current?.focus(), 0);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinkClass = (href: string) => {
    const active = isActive(href);

    if (isDark) {
      return [
        "rounded-md px-2.5 py-1.5 transition",
        focusRing,
        focusOffsetClass,
        active
          ? "bg-white/16 text-white"
          : "text-white/82 hover:bg-white/12 hover:text-white",
      ].join(" ");
    }

    return [
      "rounded-md px-2.5 py-1.5 transition",
      focusRing,
      focusOffsetClass,
      active
        ? "bg-[#eaf3ef] font-semibold text-[#147874]"
        : "text-[#43505d] hover:bg-[#ece7dc] hover:text-[#1d252f]",
    ].join(" ");
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${headerClass}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-6">
        <Link
          href="/"
          className={`rounded-md text-lg font-semibold ${focusRing} ${focusOffsetClass}`}
          aria-label={`${siteConfig.name} ana sayfa`}
          onClick={() => setIsOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-2 text-sm lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.contact.whatsappUrl}
            className={`ml-1 inline-flex items-center gap-2 rounded-md bg-[#f3bf5f] px-3.5 py-2 text-sm font-semibold text-[#1d252f] transition hover:bg-[#ffd37b] ${focusRing} ${focusOffsetClass}`}
          >
            <MessageCircle aria-hidden="true" size={16} strokeWidth={2.25} />
            WhatsApp
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition lg:hidden ${
            isDark
              ? "border-white/25 hover:bg-white/12"
              : "border-[#1d252f]/15 hover:bg-[#ece7dc]"
          } ${focusRing} ${focusOffsetClass}`}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? (
            <X aria-hidden="true" size={22} strokeWidth={2.25} />
          ) : (
            <Menu aria-hidden="true" size={22} strokeWidth={2.25} />
          )}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobil menü"
          className={`border-t px-5 pb-5 lg:hidden ${
            isDark ? "border-white/15" : "border-[#1d252f]/10"
          }`}
        >
          <div className="mx-auto grid max-w-6xl gap-1 pt-3">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                href={item.href}
                className={navLinkClass(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.contact.whatsappUrl}
              className={`mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-[#f3bf5f] px-4 py-3 text-sm font-semibold text-[#1d252f] transition hover:bg-[#ffd37b] ${focusRing} ${focusOffsetClass}`}
            >
              <MessageCircle aria-hidden="true" size={17} strokeWidth={2.25} />
              WhatsApp&apos;tan ücretsiz ön görüşme
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
