import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export const navLinks = [
  { href: "#about", label: "عن المركز" },
  { href: "#services", label: "الخدمات" },
  { href: "#why", label: "لماذا نحن" },
  { href: "#gallery", label: "المعرض" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "تواصل معنا" },
];
export function Logo() {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-3">
      <img
        src="/images/logo.jfif"
        alt="دار الولادة التخصصي"
        className="h-14 w-14 shrink-0 rounded-full object-cover bg-transparent shadow-sm"
        style={{
          imageRendering: "auto",
        }}
      />
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-base font-bold">
          دار الولادة التخصصي
        </span>
        <span className="block truncate text-xs text-muted-foreground">
          للنساء والتوليد
        </span>
      </span>
    </a>
  );
}
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b bg-background/85 py-3 backdrop-blur-lg shadow-card" : "py-5",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="القائمة الرئيسية">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#booking"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 sm:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" /> احجزي موعدك
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full border bg-card lg:hidden"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-5 mt-3 rounded-3xl border bg-card p-4 shadow-soft lg:hidden animate-in fade-in slide-in-from-top-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium hover:bg-muted">
              {l.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center font-bold text-primary-foreground">
            احجزي موعدك
          </a>
        </div>
      )}
    </header>
  );
}
