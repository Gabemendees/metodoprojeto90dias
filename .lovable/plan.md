# Plano de Reestruturação da Página de Vendas - Projeto 90 Dias

Reorganizar a página de vendas atual seguindo a estrutura solicitada, mantendo o design fitness premium (fundo escuro e verde) e preservando todas as funcionalidades de checkout.

## Alterações Propostas

### 1. Seção Hero (Promessa)
- **Headline:** "Reconstrua seu corpo antes que o ano acabe"
- **Subheadline:** Focar em método simples e sustentável (não dieta restritiva).
- **CTA:** "QUERO COMEÇAR MEUS 90 DIAS"
- Manter o mockup do ebook e o preço de R$ 22,90.

### 2. Como o Método Funciona (Sustentação)
- Explicar o sistema baseado em gatilhos, rotina e "mínimo aceitável".
- Destacar o plano de ação, checklist e planner de 90 dias.

### 3. Identificação (Dores)
- Atualizar a lista `PAINS` com as novas dores:
  - Dietas falhas e efeito sanfona.
  - Estagnação no treino.
  - Dificuldade em montar refeições/contar calorias.
  - Culpa ao sair da dieta.
  - Dúvidas sobre suplementação e peso estagnado.

### 4. O que o Material Oferece (Benefícios)
- Reformular a seção de conteúdos (`CONTENTS`) para focar em benefícios:
  - Recomposição corporal (emagrecer e ganhar massa).
  - Sistema resiliente a dias ruins.
  - Planner pronto para uso.
  - Guia prático sem contagem de calorias.
  - Respostas para situações reais (eventos, doces).

### 5. Seção de Depoimentos
- Criar um componente de placeholders para depoimentos futuros (conforme solicitado).

### 6. Itens Inclusos e Bônus
- Apresentar os geradores de Dieta e Treino como ferramentas que aplicam a teoria na prática.

### 7. Oferta Final e Order Bumps
- Reformular o card de oferta.
- Adicionar a seção de Order Bumps explicativa:
  - Dieta Personalizada: R$ 9,90.
  - Treino Personalizado: R$ 9,90.
  - Combo (Dieta + Treino): R$ 14,90 (destacando a ancoragem de R$ 19,80).

### 8. FAQ e CTA Final
- Atualizar o FAQ com as novas perguntas.
- CTA final reforçado.

## Detalhes Técnicos
- **Arquivo:** `src/routes/index.tsx`
- **Framework:** TanStack Start.
- **Estilização:** Tailwind CSS (cores `#0A0A0A` e `#22C55E`).
- **Componentes:** Shadcn/UI (Button, Card, Accordion).
- **Imagens:** Manter `ebook-mockup.jpg`.
- **Checkout:** Manter `CHECKOUT_URL` atual.
