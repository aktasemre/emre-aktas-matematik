"use client";

import { track } from "@vercel/analytics";
import type { ComponentPropsWithoutRef } from "react";
import { usePathname } from "next/navigation";

type AnalyticsValue = string | number | boolean | null;

type TrackedExternalLinkProps = ComponentPropsWithoutRef<"a"> & {
  eventName: string;
  eventProperties?: Record<string, AnalyticsValue>;
};

export type ContactChannel = "instagram" | "phone" | "whatsapp";

type TrackedContactLinkProps = ComponentPropsWithoutRef<"a"> & {
  channel: ContactChannel;
  placement: string;
};

export function TrackedExternalLink({
  eventName,
  eventProperties,
  onClick,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        track(eventName, eventProperties);
        onClick?.(event);
      }}
    />
  );
}

export function TrackedContactLink({
  channel,
  placement,
  ...props
}: TrackedContactLinkProps) {
  const pathname = usePathname();

  return (
    <TrackedExternalLink
      {...props}
      eventName="contact_click"
      eventProperties={{
        channel,
        path: pathname,
        placement,
      }}
    />
  );
}
