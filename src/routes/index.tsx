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
  "Já tentou várias dietas e recuperou o peso perdido",
  "Treina mas sente que não evolui",
  "Não sabe montar refeições sem ficar contando calorias",
  "Se sente culpado(a) quando sai da dieta um dia",
  "Não sabe se está progredindo no treino",
  "Fica confuso(a) sobre o que realmente vale em suplementação",
  "Não sabe o que fazer quando o peso estagna",
];

const CONTENTS = [
  {
    icon: Utensils,
    title: "Recomposição Corporal",
    text: "Um método que funciona tanto para emagrecer quanto para ganhar massa muscular.",
  },
  {
    icon: Flame,
    title: "Sistema Anti-Falhas",
    text: "Pensado para funcionar mesmo nos dias ruins, sem depender apenas de força de vontade.",
  },
  {
    icon: CalendarCheck,
    title: "Plano de Ação + Planner",
    text: "Checklist e acompanhamento de 90 dias prontos para usar, sem precisar criar nada do zero.",
  },
  {
    icon: Utensils,
    title: "Alimentação Prática",
    text: "Guia do prato e substituições inteligentes sem precisar contar calorias o dia inteiro.",
  },
  {
    icon: Dumbbell,
    title: "Guia de Treino",
    text: "Foco em progressão segura e técnica correta antes de pensar em carga.",
  },
  {
    icon: Target,
    title: "Situações Reais",
    text: "Respostas prontas para eventos sociais, vontade de doce e treinos perdidos.",
  },
];

const FAQ = [
  {
    q: "Posso emagrecer e ganhar músculo ao mesmo tempo?",
    a: "Sim, o ebook foca em recomposição corporal, ensinando como ajustar a rotina para ambos os objetivos.",
  },
  {
    q: "Preciso fazer cardio todos os dias?",
    a: "Não é obrigatório. O guia explica como integrar o cardio de forma estratégica na sua rotina de 90 dias.",
  },
  {
    q: "Quantas vezes na semana devo treinar?",
    a: "O método é flexível. O guia ajuda você a organizar sua semana de acordo com sua disponibilidade real.",
  },
  {
    q: "Posso comer fora ou ir a eventos sociais?",
    a: "Com certeza. Temos uma seção específica sobre como lidar com situações sociais sem abandonar o processo.",
  },
  {
    q: "E se eu perder um treino ou sair da dieta?",
    a: "O sistema é baseado em consistência, não perfeição. Ensinamos como retomar imediatamente sem culpa.",
  },
  {
    q: "E se meu peso não mudar por alguns dias?",
    a: "O peso é apenas uma métrica. O planner ensina a acompanhar fotos, medidas e energia para ver a evolução real.",
  },
];

function Index() {
  const goToCheckout = () => {
    window.location.assign(CHECKOUT_URL);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white antialiased selection:bg-[#22C55E]/30">
      <div className="bg-yellow-400 p-2 text-center text-xs font-bold text-black">'sim, faça' (on element 'body' at '/src/routes/index.tsx:1')</div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#22C55E]/20 blur-[120px]" />
        <div className="container relative mx-auto grid gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#22C55E]">
              Ebook digital • Acesso imediato
            </span>
            <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Reconstrua seu corpo{" "}
              <span className="text-[#22C55E]">antes que o ano acabe.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-400">
              Um MÉTODO simples de repetir. Não é mais uma dieta restritiva ou treino que você abandona em 2 semanas.
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
              Quero começar meu Projeto 90 Dias
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
          Se você se identifica com isso...
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Você não precisa de mais uma dieta ou treino aleatório. Precisa de uma estrutura simples para organizar seu processo.
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
            Por que este método funciona?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Não depende de motivação. Depende de um sistema (gatilhos, rotina e o "mínimo aceitável" nos dias ruins).
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {["Sistema de Rotina", "Plano de Ação", "Checklist Diário"].map((pillar, i) => (
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
        <div className="mt-16 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto text-left">
          <Card className="border-white/5 bg-[#121212] p-6 italic text-gray-400">
            "Espaço reservado para depoimento real de aluno. Em breve você verá transformações aqui."
          </Card>
          <Card className="border-white/5 bg-[#121212] p-6 italic text-gray-400">
            "Espaço reservado para depoimento real de aluno. Em breve você verá transformações aqui."
          </Card>
        </div>
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
              Quero começar meus 90 dias
            </Button>
            
            <div className="mt-10 space-y-4 text-left border-t border-white/5 pt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Turbine seu resultado (Order Bumps)</h3>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <p className="text-sm font-bold">Gerador de Dieta Personalizada</p>
                  <p className="text-xs text-gray-500">Ferramenta que aplica a teoria na prática.</p>
                </div>
                <span className="text-[#22C55E] font-bold">R$9,90</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <p className="text-sm font-bold">Gerador de Treino Personalizado</p>
                  <p className="text-xs text-gray-500">Monte seu treino com base no seu perfil.</p>
                </div>
                <span className="text-[#22C55E] font-bold">R$9,90</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30">
                <div>
                  <p className="text-sm font-bold text-[#22C55E]">Combo: Dieta + Treino</p>
                  <p className="text-xs text-[#22C55E]/70">Melhor custo-benefício (Economize R$4,90).</p>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-red-500 line-through">R$19,80</span>
                  <span className="text-white font-bold">R$14,90</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
              <span>Compra 100% Segura • Garantia Incondicional</span>
            </div>
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
            Comece seus próximos 90 dias hoje.
          </h2>
          <Button
            onClick={goToCheckout}
            className="mt-10 h-auto rounded-xl bg-[#22C55E] px-10 py-6 text-base font-black uppercase tracking-wide text-black shadow-[0_0_40px_-10px_rgba(34,197,94,0.7)] transition-transform hover:scale-[1.02] hover:bg-[#16a34a] active:scale-95"
          >
            Quero começar meus 90 dias
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
