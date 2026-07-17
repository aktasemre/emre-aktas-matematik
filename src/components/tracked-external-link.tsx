"use client";

import { track } from "@vercel/analytics";
import type { ComponentPropsWithoutRef } from "react";

type AnalyticsValue = string | number | boolean | null;

type TrackedExternalLinkProps = ComponentPropsWithoutRef<"a"> & {
  eventName: string;
  eventProperties?: Record<string, AnalyticsValue>;
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
