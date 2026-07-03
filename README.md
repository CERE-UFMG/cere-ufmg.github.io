# Site do CERE — Centro de Estudos em Real Estate | UFMG

Site institucional do CERE, construído com [Astro](https://astro.build) e publicado
automaticamente no GitHub Pages a cada push na branch `main`.

## 📰 Como publicar uma notícia (sem saber programar)

Cada notícia é uma **pasta** dentro de [`src/content/noticias/`](src/content/noticias/)
com dois arquivos: `pt.md` (português) e `en.md` (inglês).

1. No GitHub, abra a pasta `src/content/noticias/`.
2. Copie a estrutura de uma notícia existente (ex.: `ufmg-lanca-o-cere/`):
   crie uma nova pasta com um nome curto, sem espaços nem acentos
   (ex.: `seminario-de-abertura`).
3. Dentro dela, crie o arquivo `pt.md` com este formato:

   ```markdown
   ---
   titulo: Título da notícia
   tag: Institucional
   data: 2026-07-15
   dataExibicao: Julho de 2026
   ---
   Primeiro parágrafo da notícia.

   Segundo parágrafo. Deixe uma linha em branco entre os parágrafos.
   ```

4. Crie também o `en.md` com o mesmo formato, com os textos em inglês.
5. Salve (faça o *commit*). Pronto: a notícia aparece na página
   **Mídia e Eventos** e na lista de notícias da página inicial.

Campos do cabeçalho (entre os `---`):

| Campo          | O que é                                                        |
| -------------- | -------------------------------------------------------------- |
| `titulo`       | Título exibido no site                                          |
| `tag`          | Categoria curta (ex.: `Institucional`, `Evento`)                |
| `data`         | Data no formato `AAAA-MM-DD` — usada para ordenar as notícias   |
| `dataExibicao` | Texto da data mostrado no site (ex.: `Julho de 2026`)           |

## 📅 Como editar os eventos

Os seminários exibidos nas páginas **Início** e **Mídia e Eventos** ficam em
[`src/data/eventos.yaml`](src/data/eventos.yaml). Basta copiar um bloco existente
e editar os textos. A página inicial mostra os três primeiros da lista.

## 🧑‍💻 Desenvolvimento

Pré-requisito: [Node.js](https://nodejs.org) (versão LTS).

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera o site estático em dist/
npm run preview  # pré-visualiza o build
```

## 🗂️ Estrutura do projeto

```
├── public/               # arquivos estáticos (imagens da equipe etc.)
├── src/
│   ├── components/       # TopBar, Header (menu), Footer, PageHero
│   ├── content/noticias/ # notícias em Markdown (uma pasta por notícia)
│   ├── data/eventos.yaml # lista de eventos
│   ├── layouts/          # layout base (head, topbar, menu, scripts)
│   ├── lib/              # utilitários (agrupamento de notícias PT/EN)
│   ├── pages/            # uma pasta/arquivo por página do site
│   ├── scripts/main.js   # seletor de idioma, menu mobile, abas, acordeão
│   └── styles/global.css # folha de estilos do site
└── .github/workflows/    # deploy automático no GitHub Pages
```

## 🌐 Idiomas

O site mantém os textos em português e inglês no mesmo HTML; o seletor
PT/EN no topo alterna a exibição via CSS (`data-lang="pt"` / `data-lang="en"`).

## 🚀 Publicação

O deploy é feito pelo GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
Em **Settings → Pages** do repositório, a opção *Source* deve estar configurada
como **GitHub Actions**.
