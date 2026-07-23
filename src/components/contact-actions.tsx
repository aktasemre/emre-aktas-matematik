"use client";

import { MessageCircle, Phone } from "lucide-react";
import { TrackedContactLink } from "@/components/tracked-external-link";
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
  const isDark = variant === "dark";
  const sizeClass = compact ? "btn-compact" : "btn-lg";
  const whatsappVariant = isDark ? "btn-primary" : "btn-secondary";
  const phoneVariant = isDark ? "btn-outline-dark" : "btn-outline-light";
  const focusOffset = isDark ? "btn-offset-dark" : "";

  return (
    <div className="flex flex-wrap gap-3">
      <TrackedContactLink
        href={whatsappUrl}
        channel="whatsapp"
        placement={analyticsPlacement}
        className={`btn ${whatsappVariant} ${sizeClass} ${focusOffset}`}
      >
        <MessageCircle aria-hidden="true" size={18} strokeWidth={2.25} />
        WhatsApp&apos;tan ön görüşme
      </TrackedContactLink>
      <TrackedContactLink
        href={siteConfig.contact.phoneUrl}
        channel="phone"
        placement={analyticsPlacement}
        className={`btn ${phoneVariant} ${sizeClass} ${focusOffset} ${hidePhoneOnMobile ? "hidden sm:inline-flex" : ""}`}
      >
        <Phone aria-hidden="true" size={17} strokeWidth={2.25} />
        {siteConfig.contact.phoneDisplay}
      </TrackedContactLink>
    </div>
  );
}
