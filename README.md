# Validador GA4: site de apresentação

Landing page do **Validador GA4**, extensão para Chrome e Edge que confere o tagueamento do GA4 (dataLayer, hits e plano de mensuração). A ferramenta está em desenvolvimento e ainda não tem versão pública; o botão de instalação abre um aviso.

- Site: https://validador-ga4.phmr.com.br
- Stack: Astro (estático), TypeScript estrito, Tailwind CSS 4. Sem React e sem backend.
- Tema claro e escuro (chave `validador-ga4-tema`), pt-BR.
- A demonstração da página é uma **ilustração em código** com eventos de exemplo. Não há capturas da extensão nem dados de clientes.
- O logo é **provisório** (tipográfico, em SVG). `npm run marca` gera favicon, apple-touch-icon e `og-image.jpg` com sharp.

## Rodar

```bash
npm install
npm run dev       # desenvolvimento
npm run check     # astro check
npm run build     # saída em dist/
npm run preview   # servir dist/
```

## Estrutura

- `src/pages/index.astro` e `404.astro`
- `src/components/Mesa.astro`: a "mesa de conferência" do hero
- `src/scripts/interacoes.ts`: tema, rolagem das âncoras, menu, diálogo
- `docs/fontes.md`: de onde vem cada afirmação da página
- `docs/transicoes.md`: regras de movimento
- `public/.htaccess`: HTTPS, cabeçalhos e cache (Hostinger/Apache)

## Aviso

O Validador GA4 não é um produto do Google. Ferramenta em desenvolvimento pela PHMR Tech Solutions.
