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
    // Redirecionamento real do navegador para evitar bloqueio por iframe/embed
    window.location.assign("https://pay.sunize.com.br/ytcEyjZz#0935971d-10d4-4d70-b34e-079efc550af9");
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white relative">
      <div className="absolute top-0 left-0 w-full p-2 bg-yellow-500 text-black text-center text-[10px] leading-tight font-bold z-50 whitespace-pre-wrap">
        'Reestruture completamente minha página de vendas do Projeto 90 Dias, deixando-a moderna, premium, fitness e focada em conversão.\n\nPRODUTO\n\nO produto principal é o Ebook Projeto 90 Dias, vendido por R$22,90, pagamento único.\n\nO ebook contém conteúdos de:\n\nAlimentação e dieta\n\nTreino\n\nEmagrecimento\n\nGanho de massa\n\nDefinição\n\nConsistência\n\nPlanejamento dos 90 dias\n\nIMPORTANTE: os geradores de dieta e treino NÃO estão incluídos no ebook. Eles são order bumps vendidos separadamente no checkout. Não apresentar os geradores como bônus ou parte do produto principal.\n\nESTRUTURA DA PÁGINA\n\n1. Hero\nHeadline:\nSEU PROJETO 90 DIAS COMEÇA HOJE.\n\nSubheadline:\nUm guia prático para organizar alimentação, treino e rotina e começar sua transformação corporal nos próximos 90 dias.\n\nMostrar mockup do ebook, preço R$22,90 e botão:\nQUERO GARANTIR MEU ACESSO\n\n2. Problema\nCriar identificação com quem quer emagrecer, ganhar massa ou definir, mas não sabe por onde começar, tem dificuldade com dieta, treino e consistência.\n\n3. Solução\nApresentar o Projeto 90 Dias como um guia que organiza o processo em:\nAlimentação + Treino + Consistência.\n\n4. O que existe dentro do ebook\nMostrar visualmente os principais conteúdos de dieta, treino, emagrecimento, ganho de massa, definição e planejamento.\n\n5. Para quem é\nMostrar que serve para iniciantes e pessoas que já treinam e querem mais organização.\n\n6. Transformação\nCriar uma seção emocional com:\n“Os próximos 90 dias vão passar de qualquer forma. A diferença é o que você vai fazer com eles.”\n\nSem prometer resultados específicos.\n\n7. Oferta\nMostrar claramente:\n\nEbook Projeto 90 Dias\nR$22,90\nPagamento único.\n\nCTA:\nQUERO GARANTIR MEU ACESSO\n\n8. FAQ\nIncluir dúvidas sobre preço, acesso, formato digital, emagrecimento, ganho de massa, definição e deixar claro que os geradores são produtos complementares vendidos separadamente.\n\n9. CTA final\nHeadline:\nCOMECE SEUS 90 DIAS HOJE.\n\nBotão:\nQUERO GARANTIR MEU ACESSO\n\nCHECKOUT\n\nTodos os botões “QUERO GARANTIR MEU ACESSO” devem redirecionar diretamente para:\n\nhttps://pay.sunize.com.br/ytcEyjZz#0935971d-10d4-4d70-b34e-079efc550af9\n\nUsar redirecionamento real do navegador (window.location.href ou equivalente).\n\nNão usar iframe, embed, modal ou página intermediária.\n\nDESIGN\n\nVisual premium fitness, fundo escuro, verde como destaque, tipografia forte, mockups do ebook, cards modernos, animações discretas e totalmente responsivo.\n\nRemover o menu tradicional e qualquer elemento que distraia da compra.\n\nNão criar depoimentos, resultados, números de alunos ou promessas falsas.' (on element 'body' at '/src/routes/index.tsx:1')
      </div>
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
            onClick={scrollToPricing}
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
      <section id="pricing" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-16">QUANTO ISSO CUSTARIA?</h2>
        <div className="max-w-xl mx-auto bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
          <div className="space-y-4 mb-8">
            <div className="flex justify-between border-b border-gray-800 pb-4"><span>Ebook</span><span className="line-through text-gray-500">R$46,90</span></div>
            <div className="flex justify-between border-b border-gray-800 pb-4"><span>Gerador de Dieta</span><span className="line-through text-gray-500">R$37,10</span></div>
            <div className="flex justify-between border-b border-gray-800 pb-4"><span>Gerador de Treino</span><span className="line-through text-gray-500">R$37,10</span></div>
            <div className="flex justify-between font-bold text-xl"><span>Valor total</span><span>R$121,10</span></div>
          </div>
          <div className="text-3xl font-bold text-[#22C55E] mb-2">Hoje: R$27,90</div>
          <div className="text-gray-400 font-medium mb-6">ou 6x de R$5,35</div>
          <Button onClick={handlePurchase} className="bg-[#22C55E] hover:bg-[#16a34a] w-full text-black font-bold text-xl py-8 transition-transform hover:scale-105 active:scale-95">🚀 QUERO GARANTIR MEU ACESSO</Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible>
          {[
            { q: "O acesso é imediato?", a: "Sim, logo após a confirmação do pagamento você receberá os dados de acesso em seu e-mail imediatamente." },
            { q: "Serve para homens e mulheres?", a: "Sim, o método e os geradores inteligentes foram desenvolvidos para se adaptar a ambos os sexos e diferentes objetivos." },
            { q: "Posso acessar pelo celular?", a: "Com certeza! Todo o material é otimizado para celulares, tablets e computadores, permitindo que você leve seu treino e dieta para qualquer lugar." },
            { q: "Preciso pagar mensalidade?", a: "Não. O pagamento é único e você terá acesso vitalício a todo o conteúdo e atualizações do Projeto 90 Dias." },
            { q: "Sou iniciante, serve para mim?", a: "Sim, o material foi construído de forma simples e didática para que qualquer pessoa, mesmo começando do zero, consiga aplicar e ter resultados." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
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
        <Button onClick={scrollToPricing} className="bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold text-xl px-12 py-8 h-auto transition-transform hover:scale-105 active:scale-95">
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
