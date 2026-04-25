# Portfólio Profissional — Patrick Thiago Rezende dos Santos

Portfólio profissional em React + Vite + Tailwind com foco em Blue Team, SOC, Threat Hunting, Microsoft Defender, resposta a incidentes, gestão de vulnerabilidades, GRC e IAM.

## Stack

- React
- Vite
- Tailwind CSS

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Como adicionar o currículo manualmente

1. Pegue o arquivo PDF do currículo.
2. Renomeie para: `patrickcv0426.pdf`
3. Coloque em: `public/assets/`
4. Caminho final no projeto: `public/assets/patrickcv0426.pdf`
5. No código use: `'/assets/patrickcv0426.pdf'`
6. Rode `npm run dev` e teste o botão **Baixar currículo**.

> Em Vite, arquivos dentro de `public/` são servidos a partir da raiz do site. Use `/assets/...` no código (não use `/public/assets/...`).

## Como trocar a foto de perfil

1. Coloque a nova imagem em: `public/assets/`
2. Edite: `src/data/portfolioData.js`
3. Troque:

```js
profileImagePath: '/assets/patrickseg.png'
```

por:

```js
profileImagePath: '/assets/NOME-DA-NOVA-FOTO.png'
```

4. Para ajustar enquadramento, altere `profileImagePosition`.

Exemplos:

```js
profileImagePosition: 'center center'
profileImagePosition: 'center 28%'
profileImagePosition: 'center top'
```

## Como publicar na Vercel

1. Entrar na Vercel.
2. Login com GitHub.
3. Clicar em **Add New Project**.
4. Importar o repositório.
5. Framework Preset: **Vite**.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Deploy.
9. Copiar URL pública.

## Como adicionar o portfólio no LinkedIn

1. Copiar o link público da Vercel.
2. Entrar no LinkedIn.
3. Ir no perfil.
4. Adicionar o link em Informações de contato como Website/Site.
5. Adicionar também em Destaques/Featured (se disponível).
6. Usar título: `Portfólio | Segurança da Informação | Blue Team`.

## Como adicionar novos projetos no futuro

### Projetos técnicos
Editar `projects` em `src/data/portfolioData.js`.

### Blue Team Lab
Para adicionar novo app ao Blue Team Lab, editar `blueTeamLab` em `src/data/portfolioData.js` e adicionar novo objeto no array.

Modelo:

```js
{
  title: 'Nome do App',
  category: 'SOC / Blue Team',
  status: 'Planejado',
  maturity: 'Ideia',
  problem: 'Problema que o app resolve.',
  description: 'Descrição objetiva da solução.',
  stack: ['React', 'API', 'Dashboard'],
  value: 'Valor prático para operação de segurança.',
  nextStep: 'Próximo passo de desenvolvimento.'
}
```

## Observações

- Se `public/assets/patrickcv0426.pdf` não existir, o botão de currículo fica desabilitado com “Currículo em breve”.
- Se `public/assets/patrickseg.png` não existir ou falhar, o fallback `PT` é exibido.
- O projeto está pronto para publicação na Vercel (output em `dist`).
