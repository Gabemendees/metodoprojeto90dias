import { createFileRoute } from "@tanstack/react-router";
import { Check, Dumbbell, Utensils, Zap, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
          <Button className="bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold text-lg px-8 py-6 h-auto w-full lg:w-auto">
            🚀 QUERO COMEÇAR AGORA
          </Button>
        </div>
        <div className="flex-1 w-full relative">
          {/* Mockup Placeholder */}
          <div className="aspect-square bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center p-8">
            <span className="text-gray-600 font-medium">Premium Mockup Placeholder</span>
          </div>
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

      {/* CTA Footer */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">A SUA TRANSFORMAÇÃO COMEÇA AGORA.</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
          Você pode continuar tentando descobrir sozinho qual treino seguir e qual dieta fazer...
          Ou pode começar hoje utilizando um método organizado, simples e criado para ajudar você a dar os primeiros passos com mais clareza.
        </p>
        <Button className="bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold text-xl px-12 py-8 h-auto">
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
