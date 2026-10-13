import { useEffect, useRef, useState } from 'react';

interface Props {
  items: { slug: string; title: string }[];
}

/**
 * Navigation collante de la carte : met en évidence la catégorie visible
 * et garde le bouton actif centré dans la barre (utile sur mobile).
 */
export default function CategoryNav({ items }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.slug))
      .filter((el): el is HTMLElement => el !== null);
    const visible = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        const first = sections.find((s) => visible.get(s.id));
        if (first) setActive(first.id);
      },
      // Zone d'observation : sous la barre collante, moitié haute de l'écran.
      { rootMargin: '-90px 0px -55% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!list || !link) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    list.scrollTo({
      left: link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2,
      behavior: reduce ? 'auto' : 'smooth',
    });
  }, [active]);

  return (
    <nav className="cats" aria-label="Catégories de la carte">
      <div className="wrap">
        <ul ref={listRef}>
          {items.map((i) => (
            <li key={i.slug}>
              <a href={`#${i.slug}`} aria-current={active === i.slug ? 'true' : undefined}>
                {i.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
