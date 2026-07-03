import { getCollection, type CollectionEntry } from 'astro:content';

export interface Noticia {
  slug: string;
  pt?: CollectionEntry<'noticias'>;
  en?: CollectionEntry<'noticias'>;
}

/**
 * Agrupa as entradas `noticias/<slug>/pt.md` e `noticias/<slug>/en.md`
 * em um único objeto por notícia, ordenado da mais recente para a mais antiga.
 */
export async function getNoticias(): Promise<Noticia[]> {
  const entries = await getCollection('noticias');
  const porSlug = new Map<string, Noticia>();

  for (const entry of entries) {
    const [slug, lang] = entry.id.split('/');
    const noticia = porSlug.get(slug) ?? { slug };
    if (lang === 'en') {
      noticia.en = entry;
    } else {
      noticia.pt = entry;
    }
    porSlug.set(slug, noticia);
  }

  return [...porSlug.values()].sort((a, b) => {
    const dataA = (a.pt ?? a.en)!.data.data.getTime();
    const dataB = (b.pt ?? b.en)!.data.data.getTime();
    return dataB - dataA;
  });
}
