import { CalendarCheck, MessageCircle, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { images, site, waLink } from "@/config/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-primary-soft blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/70 px-4 py-1.5 text-sm text-foreground/80 backdrop-blur">
            <Sparkles className="h-4 w-4 text-gold" /> {site.name}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.3] sm:text-5xl lg:text-6xl">
            رحلتك نحو الأمومة
            <br />
            تبدأ برعاية <span className="text-primary">نطمئن لها</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-loose text-muted-foreground">
            نهتم بصحة المرأة في كل مراحلها، ونرافقك خطوة بخطوة خلال متابعة الحمل والولادة وما بعدها، في بيئة هادئة تحترم خصوصيتك وراحتك.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#booking" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">
              <CalendarCheck className="h-5 w-5" /> احجزي موعدك
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-card px-7 py-4 font-bold text-primary transition hover:border-primary">
              <MessageCircle className="h-5 w-5" /> تواصلي عبر واتساب
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> خصوصية تامة</span>
            <span className="flex items-center gap-2"><HeartHandshake className="h-5 w-5 text-primary" /> رعاية بالأم والطفل</span>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-gold/30" />
          <img
            src={images.hero}
            alt="استقبال عصري في مركز الدكتور منتصر"
            width={1600}
            height={1104}
            fetchPriority="high"
            className="relative aspect-[4/3.4] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="absolute -bottom-8 right-6 flex items-center gap-3 rounded-2xl border bg-card/95 p-4 shadow-soft backdrop-blur animate-float">
            <img src={images.mother} alt="" width={56} height={56} className="h-14 w-14 rounded-xl object-cover" loading="lazy" />
            <div>
              <p className="font-display font-bold">متابعة الحمل</p>
              <p className="text-xs text-muted-foreground">خطوة بخطوة حتى الولادة</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
