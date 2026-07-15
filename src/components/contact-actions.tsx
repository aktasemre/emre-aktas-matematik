import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

type ContactActionsProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function ContactActions({
  variant = "light",
  compact = false,
}: ContactActionsProps) {
  const isDark = variant === "dark";
  const baseClass = compact
    ? "px-4 py-2.5 text-sm"
    : "px-5 py-3 text-sm";
  const whatsappClass = isDark
    ? "bg-[#f3bf5f] text-[#1d252f] hover:bg-[#ffd37b] focus-visible:ring-offset-[#1f2930]"
    : "bg-[#147874] text-white hover:bg-[#0f625f] focus-visible:ring-offset-white";
  const phoneClass = isDark
    ? "border-white/25 bg-white/5 text-white hover:bg-white/12 focus-visible:ring-offset-[#1f2930]"
    : "border-[#1d252f]/15 bg-white text-[#1d252f] hover:bg-[#ece7dc] focus-visible:ring-offset-white";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={siteConfig.contact.whatsappUrl}
        className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 ${baseClass} ${whatsappClass}`}
      >
        <MessageCircle aria-hidden="true" size={18} strokeWidth={2.25} />
        WhatsApp&apos;tan ön görüşme
      </a>
      <a
        href={siteConfig.contact.phoneUrl}
        className={`inline-flex items-center justify-center gap-2 rounded-md border font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 ${baseClass} ${phoneClass}`}
      >
        <Phone aria-hidden="true" size={17} strokeWidth={2.25} />
        {siteConfig.contact.phoneDisplay}
      </a>
    </div>
  );
}
