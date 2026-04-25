import { navItems } from '../data/portfolioData';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-deep/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6" aria-label="Menu principal">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-cyantech">
          Patrick Thiago
        </a>
        <ul className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-sm text-lightgray transition hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
