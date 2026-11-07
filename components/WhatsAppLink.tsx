"use client";

import { whatsappUrl } from "@/lib/config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Props = {
  message: string;
  source: string;
  className?: string;
  children: React.ReactNode;
};

export default function WhatsAppLink({ message, source, className, children }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        try {
          window.fbq?.("track", "Contact", { content_name: source });
        } catch {}
      }}
    >
      {children}
    </a>
  );
}
