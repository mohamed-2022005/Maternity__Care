import { useEffect, useState } from "react";
import {
  Baby, HeartPulse, Stethoscope, ScanLine, CalendarHeart, Flower2, Users, Smile, PhoneCall,
  Sparkles, Lock, ClipboardList, X, ChevronLeft, ChevronRight, Expand,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, images, services, site } from "@/config/site";
import { Reveal, SectionTitle } from "./Reveal";

const icons = { Baby, HeartPulse, Stethoscope, ScanLine, CalendarHeart, Flower2, Users };

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <img src={images.about} alt="غرفة الكشف في المركز" width={1200} height={912} loading="lazy" className="w-full rounded-[2rem] object-cover shadow-soft" />
          <img src={images.ultrasound} alt="غرفة السونار" width={1200} height={912} loading="lazy" className="absolute -bottom-10 -left-4 hidden w-1/2 rounded-3xl border-8 border-background object-cover shadow-soft sm:block" />
        </Reveal>
        <Reveal delay={100} className="order-1 lg:order-2">
          <span className="text-sm font-bold text-gold">عن المركز</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">رعاية تبدأ بالإصغاء، وتستمر بالاهتمام</h2>
          <p className="mt-6 text-lg leading-loose text-muted-foreground">
            {site.name} مكان صُمّم ليمنحك الطمأنينة. نؤمن بأن كل امرأة تستحق رعاية هادئة ومنظمة، تحترم خصوصيتها وتستمع لاحتياجاتها، من أول استشارة وحتى ما بعد الولادة.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { i: Smile, t: "راحة المريضة" },
              { i: Lock, t: "الخصوصية" },
              { i: Sparkles, t: "جودة الرعاية" },
            ].map(({ i: I, t }) => (
              <div key={t} className="rounded-2xl border bg-card p-5 text-center shadow-card">
                <I className="mx-auto h-7 w-7 text-primary" />
                <p className="mt-3 font-bold">{t}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-muted/60 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="خدماتنا" title="رعاية متكاملة لصحتك وصحة طفلك" desc="مجموعة من الخدمات التي نرافقك بها في كل مرحلة." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => {
            const I = icons[s.icon];
            return (
              <Reveal key={s.title} delay={idx * 60}>
                <article className="group h-full rounded-3xl border bg-card p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-soft">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <I className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            );
          })}
          <Reveal delay={420}>
            <a href="#booking" className="flex h-full flex-col justify-between rounded-3xl bg-primary p-7 text-primary-foreground shadow-soft transition hover:-translate-y-1.5">
              <h3 className="text-xl font-bold">غير متأكدة من الخدمة المناسبة؟</h3>
              <span className="mt-6 inline-flex items-center gap-2 font-bold">احجزي استشارة <ChevronLeft className="h-5 w-5" /></span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    { i: Smile, t: "الاهتمام براحة المريضة", d: "أجواء هادئة ومعاملة إنسانية تجعل زيارتك مريحة." },
    { i: PhoneCall, t: "سهولة التواصل والحجز", d: "تواصلي معنا بسهولة عبر الهاتف أو واتساب أو نموذج الحجز." },
    { i: Sparkles, t: "بيئة نظيفة ومريحة", d: "مساحات مُعتنى بها تمنحك الإحساس بالأمان." },
    { i: Lock, t: "الاهتمام بالخصوصية", d: "نحترم خصوصيتك في كل تفاصيل الزيارة." },
    { i: ClipboardList, t: "تنظيم واضح للمواعيد", d: "مواعيد منظمة تقلل الانتظار وتحترم وقتك." },
  ];
  return (
    <section id="why" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Reveal className="relative">
          <img src={images.mother} alt="أم حامل تشعر بالطمأنينة" width={1008} height={1200} loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
          <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-card/90 p-5 backdrop-blur">
            <p className="font-display text-lg font-bold">نرافقك بكل اهتمام</p>
            <p className="text-sm text-muted-foreground">لأن صحتك وصحة طفلك أولويتنا.</p>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="text-sm font-bold text-gold">لماذا تختارين مركزنا؟</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">تفاصيل صغيرة تصنع تجربة مطمئنة</h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {items.map(({ i: I, t, d }, idx) => (
              <Reveal key={t} delay={idx * 70}>
                <div className="flex items-start gap-5 rounded-2xl border bg-card p-5 transition hover:border-primary/30 hover:shadow-card">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-beige text-primary"><I className="h-6 w-6" /></span>
                  <div className="min-w-0">
                    <h3 className="font-bold">{t}</h3>
                    <p className="mt-1 text-muted-foreground">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const g = images.gallery;
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => {
    if (idx === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowLeft") setIdx((i) => (i! + 1) % g.length);
      if (e.key === "ArrowRight") setIdx((i) => (i! - 1 + g.length) % g.length);
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [idx, g.length]);

  return (
    <section id="gallery" className="bg-muted/60 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="معرض الصور" title="جولة داخل المركز" />
        <div className="grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {g.map((img, i) => (
            <Reveal key={img.src + i} delay={i * 80} className={i === 0 ? "sm:col-span-2 sm:row-span-2" : i === 3 ? "lg:col-span-2" : ""}>
              <button onClick={() => setIdx(i)} className="group relative h-full w-full overflow-hidden rounded-3xl" aria-label={`عرض صورة: ${img.alt}`}>
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-foreground/60 to-transparent p-5 opacity-0 transition group-hover:opacity-100">
                  <span className="font-bold text-primary-foreground">{img.alt}</span>
                  <Expand className="h-5 w-5 text-primary-foreground" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {idx !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] grid place-items-center bg-foreground/85 p-4 backdrop-blur animate-in fade-in" onClick={() => setIdx(null)}>
          <img key={idx} src={g[idx].src} alt={g[idx].alt} className="max-h-[85vh] max-w-full rounded-2xl object-contain animate-in zoom-in-95 fade-in" onClick={(e) => e.stopPropagation()} />
          <button className="absolute top-5 left-5 grid h-11 w-11 place-items-center rounded-full bg-card" onClick={() => setIdx(null)} aria-label="إغلاق"><X className="h-5 w-5" /></button>
          <button className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-card" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + g.length) % g.length); }} aria-label="السابق"><ChevronRight className="h-6 w-6" /></button>
          <button className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-card" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % g.length); }} aria-label="التالي"><ChevronLeft className="h-6 w-6" /></button>
        </div>
      )}
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-muted/60 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="الأسئلة الشائعة" title="إجابات تهمك قبل زيارتك" />
        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`} className="rounded-2xl border bg-card px-6 shadow-card">
                <AccordionTrigger className="text-right text-base font-bold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-loose text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}