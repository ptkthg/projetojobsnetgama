# Portfólio Profissional — Patrick Thiago Rezende dos Santos

Site em React + Vite + Tailwind para apresentação profissional em Segurança da Informação (Blue Team, SOC, Threat Hunting, IAM, GRC, vulnerabilidades e resposta a incidentes).

## Stack

- React
- Vite
- Tailwind CSS

## Como executar localmente

```bash
npm install
npm run dev
```

Aplicação em: `http://localhost:5173`

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

---

## Como adicionar o currículo manualmente

1. Pegue o arquivo PDF do currículo.
2. Renomeie para: `patrickcv0426.pdf`
3. Coloque o arquivo nesta pasta: `public/assets/`
4. O caminho final deve ser: `public/assets/patrickcv0426.pdf`
5. No código, o caminho usado deve ser: `'/assets/patrickcv0426.pdf'`
6. Rode:
   ```bash
   npm run dev
   ```
7. Confira se o botão **Baixar currículo** abre o PDF.
8. Depois faça commit no GitHub Desktop com:
   - Summary: `add: adiciona currículo em PDF`
   - Description: `Adiciona currículo em PDF aos assets públicos do portfólio.`

> Em projetos Vite, arquivos dentro de `public/` são servidos a partir da raiz do site.  
> Portanto, no código use `'/assets/arquivo.ext'` (e não `'/public/assets/arquivo.ext'`).

---

## Como trocar a foto de perfil

1. Coloque a nova imagem em: `public/assets/`
2. Atualize em: `src/data/portfolioData.js`
3. Troque:
   ```js
   profileImagePath: '/assets/patrickseg.png'
   ```
   por:
   ```js
   profileImagePath: '/assets/NOME-DA-NOVA-FOTO.png'
   ```
4. Se a foto ficar mal enquadrada, ajuste `profileImagePosition`.

Exemplos:

```js
profileImagePosition: 'center center'
profileImagePosition: 'center top'
profileImagePosition: 'center 35%'
```

`profileImagePosition` controla o enquadramento da foto sem precisar editar o componente.

---

## Como publicar na Vercel

1. Entrar na Vercel.
2. Fazer login com GitHub.
3. Importar o repositório.
4. Conferir se o framework foi detectado como **Vite**.
5. Usar:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clicar em **Deploy**.
7. Copiar o link público.
8. Colocar esse link no LinkedIn.

---

## Como adicionar o portfólio no LinkedIn

1. Publique o site na Vercel.
2. Copie o link público.
3. No LinkedIn, adicione o link em **Informações de contato** como site.
4. Adicione também o link na seção **Destaques**.
5. Use um título profissional, por exemplo:
   - `Portfólio | Segurança da Informação | Blue Team`

---

## Como adicionar novos projetos

Os projetos ficam em: `src/data/portfolioData.js` (array `projects`).

Para adicionar um novo projeto, copie um objeto dentro do array `projects` e altere `title`, `description`, `skills` e `scenarios`.

Exemplo:

```js
{
  title: 'Nome do Projeto',
  description: 'Descrição curta explicando o problema, a solução e o valor defensivo.',
  skills: ['KQL', 'Microsoft Defender XDR', 'Threat Hunting', 'MITRE ATT&CK'],
  scenarios: [
    'Cenário investigado',
    'Técnica ou comportamento analisado',
    'Resultado ou aprendizado'
  ]
}
```

---

## Observações

- Se `public/assets/patrickcv0426.pdf` ainda não existir, o botão de currículo ficará desabilitado com mensagem discreta.
- Se a foto `public/assets/patrickseg.png` não existir ou falhar, o site usa fallback com avatar `PT`.
- Todos os projetos e estudos de caso apresentados no portfólio utilizam dados públicos, fictícios, simulados, resumidos ou anonimizados.
