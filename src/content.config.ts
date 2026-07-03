import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * Notícias / artigos do site.
 *
 * Cada notícia é uma PASTA dentro de `src/content/noticias/` contendo
 * dois arquivos Markdown: `pt.md` (português) e `en.md` (inglês).
 * Veja o README.md na raiz do projeto para o passo a passo.
 */
const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    titulo: z.string(),
    tag: z.string(),
    // Data usada para ordenar as notícias (a mais recente aparece primeiro).
    data: z.date(),
    // Texto da data exibido no site, ex.: "Junho de 2026" / "June 2026".
    dataExibicao: z.string(),
  }),
});

/**
 * Eventos (Ciclo de Seminários CERE).
 * Lista simples editável em `src/data/eventos.yaml`.
 */
const eventos = defineCollection({
  loader: file('./src/data/eventos.yaml'),
  schema: z.object({
    id: z.string(),
    tag_pt: z.string(),
    tag_en: z.string(),
    titulo_pt: z.string(),
    titulo_en: z.string(),
    data_pt: z.string(),
    data_en: z.string(),
  }),
});

export const collections = { noticias, eventos };
