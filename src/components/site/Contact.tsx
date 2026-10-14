import { useEffect, useState } from "react";
import { ArrowUp, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, waLink } from "@/config/site";
import { Reveal, SectionTitle } from "./Reveal";
import { Logo, navLinks } from "./Header";

export function Contact() {
  const cards = [
    { i: Phone, t: "الهاتف", v: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, ltr: true },
    { i: MessageCircle, t: "واتساب", v: "راسلينا الآن", href: waLink() },
    { i: MapPin, t: "العنوان", v: site.address },
  ];
  return (
    <section id="contact" className="bg-muted/60 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="تواصل معنا" title="نحن هنا من أجلك" />
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map(({ i: I, t, v, href, ltr }, n) => (
            <Reveal key={t} delay={n * 80}>
              <div className="h-full rounded-3xl border bg-card p-7 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><I className="h-6 w-6" /></span>
                <h3 className="mt-5 font-bold">{t}</h3>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" dir={ltr ? "ltr" : undefined} className="mt-1 inline-block text-muted-foreground hover:text-primary">{v}</a>
                ) : (
                  <p className="mt-1 text-muted-foreground">{v}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="grid gap-6 rounded-3xl border bg-card p-7 shadow-card md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex items-center gap-3"><Clock className="h-6 w-6 text-gold" /><h3 className="font-bold">مواعيد العمل</h3></div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between rounded-xl bg-muted px-4 py-3"><span>{h.day}</span><span className="text-muted-foreground">{h.time}</span></li>
              ))}
            </ul>
          </div>
        </Reveal>
        {site.mapEmbedUrl && (
          <Reveal className="mt-6 overflow-hidden rounded-3xl border shadow-card">
            <iframe src={site.mapEmbedUrl} title="موقع المركز" className="h-80 w-full" loading="lazy" />
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-card py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm leading-loose text-muted-foreground">رعاية هادئة ومنظمة لصحة المرأة، ومتابعة الحمل والولادة بكل اهتمام.</p>
        </div>
        <nav aria-label="روابط الأقسام">
          <h4 className="font-bold">روابط سريعة</h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => <li key={l.href}><a href={l.href} className="text-muted-foreground hover:text-primary">{l.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <h4 className="font-bold">احجزي الآن</h4>
          <a href="#booking" className="mt-4 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">احجزي موعدك</a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t px-5 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-3">
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="العودة إلى الأعلى" className="grid h-12 w-12 place-items-center rounded-full border bg-card shadow-soft animate-in fade-in">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب" className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
