import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Utensils, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "PROJETO 90 DIAS | Transformação Corporal Completa",
    meta: [
      { name: "description", content: "Método completo com ebook, treino e dieta personalizada para acelerar sua evolução em 90 dias por apenas R$27,90." },
      { property: "og:title", content: "PROJETO 90 DIAS" },
      { property: "og:description", content: "A transformação que você precisa por um preço que você pode pagar." },
      { name: "twitter:title", content: "PROJETO 90 DIAS" },
      { name: "twitter:description", content: "Transforme seu corpo em 90 dias." },
    ],
  }),
  component: Index,
});

function Index() {
  const handlePurchase = () => {
    // Redireciona para o checkout (Exemplo: Hotmart, Stripe, etc)
    window.location.href = "https://pay.hotmart.com/V97753443E?off=v7on64at&checkoutMode=10";
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            TRANSFORME SEU CORPO SEM PERDER TEMPO COM DIETAS E TREINOS GENÉRICOS.
          </h1>
          <p className="text-xl text-gray-400">
            Receba um método completo com ebook, treino personalizado e dieta personalizada para acelerar sua evolução.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            {["✔ Acesso imediato", "✔ Pagamento único", "✔ Funciona no celular"].map((item) => (
              <span key={item} className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
                {item}
              </span>
            ))}
          </div>
          <Button 
            onClick={handlePurchase}
            className="bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold text-lg px-8 py-6 h-auto w-full lg:w-auto transition-transform hover:scale-105 active:scale-95"
          >
            🚀 QUERO COMEÇAR AGORA
          </Button>
        </div>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">VOCÊ ESTÁ CANSADO DE...</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Não saber qual treino fazer",
            "Não saber o que comer",
            "Assistir dezenas de vídeos e continuar perdido",
            "Trocar de dieta toda semana",
            "Ir para academia sem planejamento",
            "Não ver resultados"
          ].map((item, i) => (
            <Card key={i} className="bg-[#1a1a1a] border-gray-800">
              <CardContent className="p-6 flex items-center gap-4">
                <span className="text-2xl">❌</span>
                <p className="font-medium text-gray-300">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-xl font-bold mt-12 text-gray-400">Então o Projeto 90 Dias foi criado para você.</p>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">O QUE VOCÊ VAI RECEBER</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Ebook Projeto 90 Dias", icon: <BookOpen className="w-10 h-10 text-[#22C55E]" />, content: ["Como emagrecer", "Como ganhar massa", "Como montar refeições", "Como montar uma rotina", "Como acompanhar resultados"] },
            { title: "Gerador Inteligente de Dieta", icon: <Utensils className="w-10 h-10 text-[#22C55E]" />, content: ["Cálculo automático de macros", "Cardápio personalizado", "Lista de substituições"] },
            { title: "Gerador Inteligente de Treino", icon: <Dumbbell className="w-10 h-10 text-[#22C55E]" />, content: ["Treino personalizado", "Séries e repetições", "Descanso e cardio"] }
          ].map((card, i) => (
            <Card key={i} className="bg-[#1a1a1a] border-gray-800 p-8 space-y-4">
              {card.icon}
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {card.content.map((item, j) => <li key={j} className="flex items-center gap-2">✔ {item}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20 bg-[#0d0d0d]">
        <h2 className="text-4xl font-bold text-center mb-16">COMO FUNCIONA</h2>
        <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {["Adquira o acesso", "Receba o ebook", "Monte sua dieta", "Monte seu treino", "Comece sua evolução"].map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-12 h-12 bg-[#22C55E] text-black rounded-full flex items-center justify-center font-bold text-xl mx-auto">{i + 1}</div>
              <p className="font-bold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-16">QUANTO ISSO CUSTARIA?</h2>
        <div className="max-w-xl mx-auto bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
          <div className="space-y-4 mb-8">
            <div className="flex justify-between border-b border-gray-800 pb-4"><span>Ebook</span><span className="line-through text-gray-500">R$47</span></div>
            <div className="flex justify-between border-b border-gray-800 pb-4"><span>Gerador de Dieta</span><span className="line-through text-gray-500">R$37</span></div>
            <div className="flex justify-between border-b border-gray-800 pb-4"><span>Gerador de Treino</span><span className="line-through text-gray-500">R$37</span></div>
            <div className="flex justify-between font-bold text-xl"><span>Valor total</span><span>R$121</span></div>
          </div>
          <div className="text-2xl font-bold text-[#22C55E] mb-6">Hoje: R$27,90</div>
          <Button onClick={handlePurchase} className="bg-[#22C55E] hover:bg-[#16a34a] w-full text-black font-bold text-xl py-8 transition-transform hover:scale-105 active:scale-95">🚀 QUERO GARANTIR MEU ACESSO</Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible>
          {["O acesso é imediato?", "Serve para homens e mulheres?", "Posso acessar pelo celular?", "Preciso pagar mensalidade?", "Sou iniciante, serve para mim?"].map((q, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>Sim, o acesso é imediato logo após a confirmação do pagamento.</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">A SUA TRANSFORMAÇÃO COMEÇA AGORA.</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
          Você pode continuar tentando descobrir sozinho qual treino seguir e qual dieta fazer...
          Ou pode começar hoje utilizando um método organizado, simples e criado para ajudar você a dar os primeiros passos com mais clareza.
        </p>
        <Button onClick={handlePurchase} className="bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold text-xl px-12 py-8 h-auto transition-transform hover:scale-105 active:scale-95">
          🚀 QUERO COMEÇAR AGORA
        </Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-800 text-center text-gray-500">
        <p className="font-bold text-white mb-4">Projeto 90 Dias</p>
        <p className="text-sm">Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
        </div>
      </footer>
    </div>
  );
}
