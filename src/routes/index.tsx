import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About, Services, WhyUs, Gallery, Testimonials, Faq } from "@/components/site/Sections";
import { Booking } from "@/components/site/Booking";
import { Contact, Footer, FloatingButtons } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مركز الدكتور منتصر للنساء والتوليد | متابعة الحمل والولادة" },
      { name: "description", content: "مركز الدكتور منتصر للنساء والتوليد: متابعة الحمل، صحة المرأة، السونار ورعاية ما قبل وبعد الولادة. احجزي موعدك الآن." },
      { property: "og:title", content: "مركز الدكتور منتصر للنساء والتوليد" },
      { property: "og:description", content: "رحلتك نحو الأمومة تبدأ برعاية نطمئن لها. احجزي موعدك بسهولة." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Faq />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
