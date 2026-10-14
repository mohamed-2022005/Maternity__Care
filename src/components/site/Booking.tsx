import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { services, waLink } from "@/config/site";
import { Reveal, SectionTitle } from "./Reveal";

type Errors = Partial<Record<"name" | "phone" | "service" | "date", string>>;

export function validateBooking(d: { name: string; phone: string; service: string; date: string }): Errors {
  const e: Errors = {};
  if (d.name.trim().length < 3) e.name = "من فضلك أدخلي الاسم (3 أحرف على الأقل)";
  if (!/^\+?[0-9\s-]{8,15}$/.test(d.phone.trim())) e.phone = "رقم الهاتف غير صحيح";
  if (!d.service) e.service = "اختاري نوع الخدمة";
  if (!d.date) e.date = "اختاري التاريخ المفضل";
  return e;
}

const field = "w-full rounded-xl border border-input bg-background px-4 py-3.5 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";

export function Booking() {
  const [data, setData] = useState({ name: "", phone: "", service: "", date: "", notes: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof data) => (e: { target: { value: string } }) => setData({ ...data, [k]: e.target.value });

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validateBooking(data);
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  const waText = `طلب حجز موعد\nالاسم: ${data.name}\nالهاتف: ${data.phone}\nالخدمة: ${data.service}\nالتاريخ المفضل: ${data.date}${data.notes ? `\nملاحظات: ${data.notes}` : ""}`;
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle eyebrow="حجز موعد" title="احجزي موعدك بخطوات بسيطة" desc="املئي البيانات وسيتواصل معك فريق المركز لتأكيد الموعد." />
        <Reveal>
          <div className="rounded-[2rem] border bg-card p-6 shadow-soft sm:p-10">
            {sent ? (
              <div className="py-8 text-center animate-in fade-in zoom-in-95">
                <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
                <h3 className="mt-5 text-2xl font-bold">تم تجهيز طلب الحجز</h3>
                <p className="mx-auto mt-3 max-w-md leading-loose text-muted-foreground">
                  الحجز لم يُؤكَّد بعد. لإرسال طلبك إلى المركز اضغطي على الزر أدناه لإرساله عبر واتساب، وسيتم التواصل معك للتأكيد.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <a href={waLink(waText)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-bold text-primary-foreground">
                    <MessageCircle className="h-5 w-5" /> إرسال الطلب عبر واتساب
                  </a>
                  <button onClick={() => { setSent(false); setData({ name: "", phone: "", service: "", date: "", notes: "" }); }} className="rounded-full border px-7 py-3.5 font-bold">
                    طلب جديد
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field label="الاسم" error={errors.name}>
                  <input className={field} value={data.name} onChange={set("name")} autoComplete="name" />
                </Field>
                <Field label="رقم الهاتف" error={errors.phone}>
                  <input className={field} value={data.phone} onChange={set("phone")} type="tel" dir="ltr" inputMode="tel" autoComplete="tel" />
                </Field>
                <Field label="نوع الخدمة" error={errors.service}>
                  <select className={field} value={data.service} onChange={set("service")}>
                    <option value="">اختاري الخدمة</option>
                    {services.map((s) => <option key={s.title}>{s.title}</option>)}
                  </select>
                </Field>
                <Field label="التاريخ المفضل" error={errors.date}>
                  <input className={field} type="date" min={today} value={data.date} onChange={set("date")} />
                </Field>
                <Field label="ملاحظات (اختياري)" className="sm:col-span-2">
                  <textarea className={`${field} min-h-28`} value={data.notes} onChange={set("notes")} />
                </Field>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 sm:col-span-2">
                  <Send className="h-5 w-5" /> إرسال طلب الحجز
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-destructive" role="alert">{error}</span>}
    </label>
  );
}
