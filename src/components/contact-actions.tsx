"use client";

import { track } from "@vercel/analytics";
import { MessageCircle, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

type ContactActionsProps = {
  variant?: "light" | "dark";
  compact?: boolean;
  whatsappUrl?: string;
  hidePhoneOnMobile?: boolean;
  analyticsPlacement?: string;
};

export function ContactActions({
  variant = "light",
  compact = false,
  whatsappUrl = siteConfig.contact.whatsappUrl,
  hidePhoneOnMobile = false,
  analyticsPlacement = "content",
}: ContactActionsProps) {
  const pathname = usePathname();
  const isDark = variant === "dark";
  const sizeClass = compact ? "btn-compact" : "btn-lg";
  const whatsappVariant = isDark ? "btn-primary" : "btn-secondary";
  const phoneVariant = isDark ? "btn-outline-dark" : "btn-outline-light";
  const focusOffset = isDark ? "btn-offset-dark" : "";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={whatsappUrl}
        onClick={() =>
          track("contact_click", {
            channel: "whatsapp",
            path: pathname,
            placement: analyticsPlacement,
          })
        }
        className={`btn ${whatsappVariant} ${sizeClass} ${focusOffset}`}
      >
        <MessageCircle aria-hidden="true" size={18} strokeWidth={2.25} />
        WhatsApp&apos;tan ön görüşme
      </a>
      <a
        href={siteConfig.contact.phoneUrl}
        onClick={() =>
          track("contact_click", {
            channel: "phone",
            path: pathname,
            placement: analyticsPlacement,
          })
        }
        className={`btn ${phoneVariant} ${sizeClass} ${focusOffset} ${hidePhoneOnMobile ? "hidden sm:inline-flex" : ""}`}
      >
        <Phone aria-hidden="true" size={17} strokeWidth={2.25} />
        {siteConfig.contact.phoneDisplay}
      </a>
    </div>
  );
}
