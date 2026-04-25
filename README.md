# Portfólio Profissional — Patrick Thiago Rezende dos Santos

Site de portfólio profissional para atuação em **Segurança da Informação**, com foco em Blue Team, SOC, Threat Hunting, Microsoft Defender XDR, KQL, GRC, IAM, gestão de vulnerabilidades e resposta a incidentes.

## Stack

- React
- Vite
- Tailwind CSS

## Como executar localmente

```bash
npm install
npm run dev
```

Aplicação disponível em: `http://localhost:5173`

## Build para produção

```bash
npm run build
npm run preview
```

## Estrutura principal

```text
src/
  components/
  data/
  App.jsx
  main.jsx
  index.css
public/
  assets/
```

## Personalização

- Atualize dados em `src/data/portfolioData.js`.
- Para foto de perfil, adicione: `public/assets/profile.jpg`.
- Para currículo, adicione: `public/assets/curriculo-patrick-thiago.pdf`.
- Se os arquivos não existirem:
  - A foto usa avatar automático com iniciais **PT**.
  - O botão de currículo fica desabilitado com mensagem discreta.

## Deploy

### Vercel
1. Conecte o repositório na Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

### GitHub Pages
Use GitHub Actions com build Vite e publique a pasta `dist`.

> Todos os projetos apresentados no portfólio devem utilizar dados fictícios, simulados ou anonimizados.


## Atualizações incrementais

- Identidade visual Blue Team atualizada com paleta técnica e grid discreto.
- Nova seção **Estudo de Caso** com resposta a incidente em Microsoft Defender.
- Dados de contato reais atualizados (LinkedIn/GitHub) e botão discreto de WhatsApp sem exibir número em texto aberto.
