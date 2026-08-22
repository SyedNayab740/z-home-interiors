import { MessageCircle } from "lucide-react";
import { company, contactConfigured } from "@/data/company";
import { toWhatsAppHref } from "@/lib/utils";

export function FloatingWhatsApp() {
  if (!contactConfigured.whatsapp) return null;

  const href = toWhatsAppHref(
    company.whatsapp,
    `Hi ${company.name}, I'd like to learn more about your design services.`,
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
