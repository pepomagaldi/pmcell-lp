# PM Cell Vacaria — Landing Page

Next.js 14 + Tailwind. Deploy na Vercel (cada push na `main` publica).

## Onde editar
- `lib/config.ts`: número do WhatsApp, selos, serviços, preços da blindagem, depoimentos.
- `public/images/`: imagens.

## Meta Pixel
Defina `NEXT_PUBLIC_META_PIXEL_ID` nas variáveis de ambiente da Vercel. Cada clique em botão de WhatsApp dispara o evento `Contact` com a origem do clique.

## Rodar local
```
npm install
npm run dev
```
