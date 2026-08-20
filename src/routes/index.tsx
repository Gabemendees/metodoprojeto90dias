import { createFileRoute } from "@tanstack/react-router";
import {
  Utensils,
  Dumbbell,
  Flame,
  TrendingUp,
  Target,
  CalendarCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ebookMockup from "@/assets/ebook-mockup.jpg";

const CHECKOUT_URL =
  "https://pay.sunize.com.br/ytcEyjZz#0935971d-10d4-4d70-b34e-079efc550af9";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Projeto 90 Dias | Ebook de Treino, Dieta e Consistência",
    meta: [
      {
        name: "description",
        content:
          "Ebook Projeto 90 Dias: um guia prático para organizar alimentação, treino e rotina e começar sua transformação corporal. R$22,90, pagamento único.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Projeto 90 Dias | Comece hoje" },
      {
        property: "og:description",
        content:
          "Guia prático de alimentação, treino e consistência para os seus próximos 90 dias. R$22,90, pagamento único.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Projeto 90 Dias | Comece hoje" },
      {
        name: "twitter:description",
        content:
          "Guia prático de alimentação, treino e consistência. R$22,90, pagamento único.",
      },
    ],
  }),
  component: Index,
});

const PAINS = [
  "Quer emagrecer, mas não sabe por onde começar",
  "Quer ganhar massa e se perde entre treinos aleatórios",
  "Troca de dieta toda semana e nunca conclui nenhuma",
  "Vai para a academia sem um plano definido",
  "Começa animado na segunda e para na quinta",
  "Consome muito conteúdo e aplica quase nada",
];

const CONTENTS = [
  {
    icon: Utensils,
    title: "Alimentação e dieta",
    text: "Como estruturar suas refeições, entender porções e criar uma rotina alimentar que você consiga manter.",
  },
  {
    icon: Dumbbell,
    title: "Treino",
    text: "Como organizar sua semana de treinos, escolher exercícios e progredir com clareza.",
  },
  {
    icon: Flame,
    title: "Emagrecimento",
    text: "Os princípios que realmente importam para reduzir gordura sem soluções mágicas.",
  },
  {
    icon: TrendingUp,
    title: "Ganho de massa",
    text: "O que considerar para construir músculo com treino, alimentação e recuperação.",
  },
  {
    icon: Target,
    title: "Definição",
    text: "Como alinhar treino e alimentação na fase de definição sem se perder no processo.",
  },
  {
    icon: CalendarCheck,
    title: "Consistência e planejamento dos 90 dias",
    text: "Um plano de 90 dias para transformar decisões diárias em hábito.",
  },
];

const FAQ = [
  {
    q: "Quanto custa e como funciona o pagamento?",
    a: "O Ebook Projeto 90 Dias custa R$22,90 em pagamento único. Não existe mensalidade nem cobrança recorrente.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação do pagamento, o acesso é liberado e enviado para o e-mail informado no checkout.",
  },
  {
    q: "É um produto digital?",
    a: "Sim. É um ebook digital, lido no celular, tablet ou computador. Nada é enviado fisicamente.",
  },
  {
    q: "Serve para emagrecer?",
    a: "O ebook explica os princípios de alimentação, treino e rotina aplicados ao emagrecimento, para você organizar o processo com clareza.",
  },
  {
    q: "Serve para ganho de massa e definição?",
    a: "Sim. Há conteúdos específicos sobre ganho de massa e sobre a fase de definição, com orientações de treino e alimentação.",
  },
  {
    q: "Os geradores de dieta e treino estão inclusos?",
    a: "Não. Os geradores de dieta e treino são produtos complementares, vendidos separadamente no checkout. O ebook é o produto principal e funciona de forma independente.",
  },
];

function Index() {
  const goToCheckout = () => {
    window.location.assign(CHECKOUT_URL);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white antialiased selection:bg-[#22C55E]/30">
      <div className="bg-yellow-400 p-2 text-center text-xs font-bold text-black">
        'nao e para adicionar informaçao nenhuma ai, quero que remova isso' (on element 'body' at '/src/routes/index.tsx:1')
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#22C55E]/20 blur-[120px]" />
        <div className="container relative mx-auto grid gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#22C55E]">
              Ebook digital • Acesso imediato
            </span>
            <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Seu Projeto 90 Dias{" "}
              <span className="text-[#22C55E]">começa hoje.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-400">
              Um guia prático para organizar alimentação, treino e rotina e
              começar sua transformação corporal nos próximos 90 dias.
            </p>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-4xl font-black text-[#22C55E]">R$22,90</span>
              <span className="text-sm font-medium text-gray-500">
                pagamento único
              </span>
            </div>
            <Button
              onClick={goToCheckout}
              className="h-auto w-full rounded-xl bg-[#22C55E] px-8 py-6 text-base font-black uppercase tracking-wide text-black shadow-[0_0_40px_-10px_rgba(34,197,94,0.7)] transition-transform hover:scale-[1.02] hover:bg-[#16a34a] active:scale-95 sm:w-auto"
            >
              Quero garantir meu acesso
            </Button>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full bg-[#22C55E]/10 blur-3xl" />
            <img
              src={ebookMockup}
              alt="Mockup do Ebook Projeto 90 Dias"
              width={1024}
              height={1024}
              className="relative w-full max-w-md rounded-2xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
          Se você se identifica com isso…
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Querer emagrecer, ganhar massa ou definir é fácil. Difícil é organizar
          dieta, treino e consistência ao mesmo tempo.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((item) => (
            <Card
              key={item}
              className="border-white/5 bg-[#121212] transition-colors hover:border-[#22C55E]/30"
            >
              <CardContent className="flex items-start gap-3 p-6">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500/80" />
                <p className="text-sm font-medium leading-relaxed text-gray-300">
                  {item}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solução */}
      <section className="border-y border-white/5 bg-[#0F0F0F]">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            O Projeto 90 Dias organiza o processo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Um guia direto que coloca as três peças essenciais no lugar certo.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {["Alimentação", "Treino", "Consistência"].map((pillar, i) => (
              <div
                key={pillar}
                className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-8"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E] text-sm font-black text-black">
                  {i + 1}
                </div>
                <p className="text-lg font-bold uppercase tracking-wide">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que existe dentro do ebook */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
          O que existe dentro do ebook
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CONTENTS.map(({ icon: Icon, title, text }) => (
            <Card
              key={title}
              className="group border-white/5 bg-[#121212] p-7 transition-all hover:-translate-y-1 hover:border-[#22C55E]/40"
            >
              <Icon className="mb-4 h-8 w-8 text-[#22C55E]" />
              <h3 className="mb-2 text-lg font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Para quem é */}
      <section className="border-y border-white/5 bg-[#0F0F0F]">
        <div className="container mx-auto px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Para quem é
          </h2>
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            {[
              {
                title: "Para quem está começando",
                text: "Você quer sair do zero com um caminho claro, sem depender de achismo ou de dezenas de vídeos soltos.",
              },
              {
                title: "Para quem já treina",
                text: "Você já treina, mas sente falta de organização, planejamento e consistência para evoluir de verdade.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border-white/5 bg-[#151515] p-7"
              >
                <CheckCircle2 className="mb-4 h-7 w-7 text-[#22C55E]" />
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformação */}
      <section className="container mx-auto px-6 py-24 text-center">
        <p className="mx-auto max-w-3xl text-2xl font-bold leading-snug sm:text-4xl">
          “Os próximos 90 dias vão passar de qualquer forma.{" "}
          <span className="text-[#22C55E]">
            A diferença é o que você vai fazer com eles.
          </span>
          ”
        </p>
      </section>

      {/* Oferta */}
      <section
        id="oferta"
        className="border-y border-white/5 bg-[#0F0F0F] px-6 py-20"
      >
        <div className="container mx-auto max-w-lg">
          <div className="rounded-3xl border border-[#22C55E]/30 bg-[#121212] p-8 text-center shadow-[0_0_60px_-25px_rgba(34,197,94,0.6)]">
            <img
              src={ebookMockup}
              alt="Ebook Projeto 90 Dias"
              width={1024}
              height={1024}
              loading="lazy"
              className="mx-auto mb-6 w-40 rounded-xl object-contain"
            />
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Ebook Projeto 90 Dias
            </h2>
            <div className="my-6">
              <div className="text-5xl font-black text-[#22C55E]">R$22,90</div>
              <p className="mt-2 text-sm font-medium text-gray-400">
                Pagamento único
              </p>
            </div>
            <Button
              onClick={goToCheckout}
              className="h-auto w-full rounded-xl bg-[#22C55E] py-6 text-base font-black uppercase tracking-wide text-black transition-transform hover:scale-[1.02] hover:bg-[#16a34a] active:scale-95"
            >
              Quero garantir meu acesso
            </Button>
            <p className="mt-4 text-xs text-gray-500">
              Produto digital. Acesso enviado por e-mail após a confirmação do
              pagamento.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="rounded-xl border border-white/5 bg-[#121212] px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22C55E]/15 blur-[120px]" />
        <div className="container relative mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
            Comece seus 90 dias hoje.
          </h2>
          <Button
            onClick={goToCheckout}
            className="mt-10 h-auto rounded-xl bg-[#22C55E] px-10 py-6 text-base font-black uppercase tracking-wide text-black shadow-[0_0_40px_-10px_rgba(34,197,94,0.7)] transition-transform hover:scale-[1.02] hover:bg-[#16a34a] active:scale-95"
          >
            Quero garantir meu acesso
          </Button>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-10 text-center text-sm text-gray-500">
        <p className="font-bold text-white">Projeto 90 Dias</p>
        <p className="mt-2">Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
