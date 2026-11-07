import Image from "next/image";
import WhatsAppLink from "@/components/WhatsAppLink";
import { Arrow, Check, Icon, Whats } from "@/components/Icons";
import {
  BLINDAGEM_PLANS,
  GOOGLE_REVIEWS_URL,
  HERO_BADGES,
  SERVICES,
  TESTIMONIALS,
  TRUST_ITEMS,
} from "@/lib/config";

const GENERIC_MSG = "Olá! Quero um orçamento. Meu aparelho é: ";
const brl = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

function Logo() {
  return (
    <a href="#inicio" className="flex items-center" aria-label="PM Cell Vacaria">
      <Image
        src="/images/logo-horizontal.png"
        alt="PM Cell Vacaria"
        width={745}
        height={329}
        priority
        sizes="140px"
        className="h-11 w-auto sm:h-12"
      />
    </a>
  );
}

function Header() {
  const links = [
    ["Serviços", "#servicos"],
    ["Blindagem", "#blindagem"],
    ["Diferenciais", "#diferenciais"],
    ["Contato", "#contato"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-brand/20 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="transition hover:text-white">{l}</a>
          ))}
        </nav>
        <WhatsAppLink
          message={GENERIC_MSG}
          source="header"
          className="inline-flex items-center gap-2 rounded-full border border-brand/70 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand/20"
        >
          <Whats className="h-5 w-5" />
          <span className="hidden sm:inline">Solicitar Orçamento</span>
          <span className="sm:hidden">Orçamento</span>
        </WhatsAppLink>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(30,123,255,.28),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-end gap-6 px-4 pt-10 md:grid-cols-[1.1fr_1fr] md:pt-16">
        <div className="pb-10 md:pb-20">
          <p className="mb-3 text-xs font-bold tracking-[.35em] text-cyan">PM CELL VACARIA</p>
          <h1 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Assistência Técnica
            <span className="block font-black italic text-gradient">Especializada</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-slate-300">
            Reparos, blindagem e manutenção completa para o seu smartphone, com qualidade, segurança e garantia.
          </p>
          <ul className="mt-7 grid max-w-lg grid-cols-3 gap-3">
            {HERO_BADGES.map((b) => (
              <li key={b.icon} className="flex items-center gap-2 text-sm leading-tight text-slate-200">
                <Icon name={b.icon} className={`h-8 w-8 shrink-0 ${b.icon === "truck" ? "text-zap" : "text-brand"}`} />
                <span>{b.title}<br />{b.sub}</span>
              </li>
            ))}
          </ul>
          <WhatsAppLink message={GENERIC_MSG} source="hero" className="btn-primary mt-8 w-full text-lg sm:w-auto">
            <Whats className="h-6 w-6" /> Solicitar Orçamento Agora <Arrow className="h-5 w-5" />
          </WhatsAppLink>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <Image
            src="/images/hero-tecnico.png"
            alt="Técnico da PM Cell Vacaria"
            width={1196}
            height={1315}
            priority
            sizes="(max-width: 768px) 90vw, 520px"
            className="relative z-10 h-auto w-full drop-shadow-[0_0_40px_rgba(30,123,255,.35)]"
          />
          <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-ink to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="border-t border-brand/20 bg-navy py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-black italic text-white sm:text-4xl">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="mt-2 text-slate-300">Soluções completas para o seu smartphone, com peças de qualidade e garantia.<span className="sm:hidden"> Arraste para o lado →</span></p>
        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.id} className="group card w-[78%] shrink-0 snap-center overflow-hidden transition sm:w-auto hover:-translate-y-1 hover:border-cyan/60">
              <div className="relative aspect-[1189/1323]">
                <Image
                  src={s.image}
                  alt={`${s.title}: ${s.desc}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover"
                />
              </div>
              <h3 className="sr-only">{s.title}</h3>
              <div className="p-4">
                <WhatsAppLink message={s.message} source={`servico-${s.id}`} className="btn-primary w-full py-3 text-base">
                  <Whats className="h-5 w-5" /> Orçamento de {s.title.replace(/^(Troca|Reparo|Recuperação) de /, "")}
                </WhatsAppLink>
              </div>
            </article>
          ))}
          <article className="card flex w-[78%] shrink-0 snap-center flex-col justify-center p-6 sm:w-auto">
            <h3 className="text-2xl font-extrabold text-white">Outro problema?</h3>
            <p className="mt-2 text-slate-300">
              Câmera, alto-falante, microfone, botões, software… Manda o modelo e o defeito que a gente avalia.
            </p>
            <WhatsAppLink message="Olá! Meu celular está com este problema: " source="servico-outro" className="btn-zap mt-6 w-full">
              <Whats className="h-5 w-5" /> Falar com o técnico
            </WhatsAppLink>
          </article>
        </div>
      </div>
    </section>
  );
}

function Blindagem() {
  return (
    <section id="blindagem" className="relative overflow-hidden border-t border-brand/20 py-16">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black italic leading-none text-white sm:text-5xl">
            Blindagem
            <span className="block text-gradient">NanoTitanium</span>
          </h2>
          <p className="mt-5 text-slate-300">
            Proteção avançada com tecnologia de cura UV que aumenta a resistência do seu aparelho contra riscos e
            impactos, sem alterar a aparência e a sensibilidade da tela. Para iPhone e Android.
          </p>
          <ul className="mt-5 space-y-2 text-slate-200">
            {[
              "Proteção da tela, traseira e lentes",
              "Mais resistência no dia a dia",
              "Não afeta a nitidez das câmeras",
              "Aplicação em aproximadamente 50 minutos",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-cyan" /> {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {BLINDAGEM_PLANS.map((p) => (
              <div
                key={p.id}
                className={`card relative flex flex-col p-5 ${p.highlight ? "border-cyan/70 shadow-glow" : ""}`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-5 rounded-full bg-cyan px-3 py-0.5 text-xs font-bold text-ink">
                    MAIS PROCURADA
                  </span>
                )}
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <ul className="mt-2 flex-1 space-y-1 text-sm text-slate-300">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-1.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />{i}</li>
                  ))}
                </ul>
                <p className="mt-4 text-3xl font-extrabold text-white">
                  {brl(p.cash)} <span className="text-sm font-medium text-slate-400">à vista</span>
                </p>
                <p className="text-sm text-slate-400">ou {brl(p.card)} em 3x sem juros no cartão</p>
                <WhatsAppLink
                  message={p.message}
                  source={`blindagem-${p.id}`}
                  className={`${p.highlight ? "btn-primary" : "btn-primary bg-none bg-transparent"} mt-4 w-full py-3 text-base`}
                >
                  <Whats className="h-5 w-5" /> Quero essa
                </WhatsAppLink>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <Image
            src="/images/blindagem-iphone.png"
            alt="Blindagem iPhone com tecnologia NanoTitanium"
            width={1189}
            height={1323}
            sizes="(max-width: 768px) 90vw, 540px"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="diferenciais" className="border-y border-brand/20 bg-navy">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 py-8 md:grid-cols-4 md:divide-x md:divide-brand/20">
        {TRUST_ITEMS.map((t) => (
          <li key={t.icon} className="flex items-center justify-center gap-3 text-sm leading-tight">
            <Icon name={t.icon} className="h-9 w-9 shrink-0 text-brand" />
            <span><b className="text-white">{t.title}</b><br /><span className="text-slate-300">{t.sub}</span></span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section id="avaliacoes" className="py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[260px_1fr]">
        <div>
          <h2 className="text-3xl font-extrabold text-white">
            O que nossos <span className="block font-black italic text-gradient">clientes dizem</span>
          </h2>
          <p className="mt-3 text-slate-300">A confiança de quem já realizou o serviço com a gente.</p>
          {GOOGLE_REVIEWS_URL && (
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-cyan underline">
              Ver todas no Google
            </a>
          )}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card flex flex-col p-5">
              <span className="text-3xl font-black text-brand">“</span>
              <blockquote className="flex-1 text-sm text-slate-200">{t.text}</blockquote>
              <p className="mt-3 text-yellow-400" aria-label="5 estrelas">★★★★★</p>
              <figcaption className="mt-1 text-sm text-slate-300">{t.name} <span className="text-slate-500">· avaliação no Google</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(30,123,255,.25),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-[minmax(0,420px)_1fr]">
        <Image
          src="/images/whatsapp-mao.png"
          alt="Solicite seu orçamento pelo WhatsApp"
          width={1189}
          height={1323}
          sizes="(max-width: 768px) 90vw, 420px"
          className="mx-auto h-auto w-full max-w-sm rounded-2xl md:max-w-none"
        />
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Precisa de um reparo ou quer blindar seu aparelho?
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Fale agora pelo WhatsApp: manda o modelo e o problema que respondemos com o orçamento. Buscamos e
            entregamos em Vacaria.
          </p>
          <WhatsAppLink message={GENERIC_MSG} source="cta-final" className="btn-zap mt-7 w-full text-lg sm:w-auto">
            <Whats className="h-7 w-7" /> Solicitar Orçamento pelo WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-brand/20 bg-ink py-8 pb-24 text-center text-sm text-slate-400 md:pb-8">
      <p>PM Cell Vacaria · Assistência técnica de celulares · Vacaria/RS</p>
      <p className="mt-1">© {new Date().getFullYear()} PM Cell Vacaria</p>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <WhatsAppLink
      message={GENERIC_MSG}
      source="flutuante"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-zap text-white shadow-zap transition hover:scale-105"
    >
      <Whats className="h-8 w-8" />
      <span className="sr-only">Falar no WhatsApp</span>
    </WhatsAppLink>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Blindagem />
        <Trust />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhats />
    </>
  );
}
