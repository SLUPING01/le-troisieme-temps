"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header className={`masthead${isHome ? " home" : ""}`}>
      <Link
        className="brand"
        href="/"
        aria-label="Le Troisième Temps, accueil"
        onClick={() => setMenuOpen(false)}
      >
        <svg
          className="brand-mark"
          viewBox="0 0 52 52"
          role="img"
          aria-label="Terrain de football stylisé"
        >
          <rect x="2" y="2" width="48" height="48" />
          <path d="M26 2v48M26 18a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 15h8v22H2m48-22h-8v22h8" />
        </svg>
        <span className="brand-title">
          Le Troisième
          <br />
          Temps<span className="brand-period">.</span>
        </span>
        <span className="brand-descriptor">
          BARBER
          <br />
          CLUB
        </span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>Menu</span>
        <b aria-hidden="true">+</b>
      </button>
      <nav
        className={`site-nav${menuOpen ? " is-open" : ""}`}
        id="primary-nav"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          aria-current={isHome ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Le salon
        </Link>
        <Link
          href="/coupes"
          aria-current={pathname === "/coupes" ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Prestations &amp; tarifs
        </Link>
        <Link
          className="nav-cta"
          href="/rendez-vous"
          aria-current={pathname === "/rendez-vous" ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Réserver
        </Link>
      </nav>
    </header>
  );
}
