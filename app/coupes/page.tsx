import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Prestations & tarifs — Le Troisième Temps",
  description:
    "Coupes, tailles de barbe et tarifs du Troisième Temps, barber shop à Saint-Ouen.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="contenu" className="inside">
        <section className="page-head">
          <h1>Les prestations</h1>
          <p>
            Pas de grille compliquée. On discute de ce que tu veux, et on se met
            d&apos;accord avant le premier coup de ciseaux.
          </p>
        </section>
        <section className="price-list" aria-label="Prestations et tarifs">
          <article className="price-entry" id="coupe">
            <div>
              <h2>La coupe courte</h2>
              <p>
                Classique, dégradé, tondeuse ou ciseaux. On s&apos;adapte à ta
                tête, pas à une photo de référence.
              </p>
              <span className="price-time">
                30 min · serviette chaude offerte
              </span>
            </div>
            <strong className="price">28 €</strong>
            <Link
              className="text-link price-book"
              href="/rendez-vous?service=coupe"
              aria-label="Réserver la coupe courte"
            >
              Réserver
            </Link>
          </article>
          <article className="price-entry" id="barbe">
            <div>
              <h2>Le travail de barbe</h2>
              <p>
                Contours au fil, taille aux ciseaux, serviette chaude. Prends
                le temps de retrouver ta joue.
              </p>
              <span className="price-time">
                25 min · serviette chaude comprise
              </span>
            </div>
            <strong className="price">18 €</strong>
            <Link
              className="text-link price-book"
              href="/rendez-vous?service=barbe"
              aria-label="Réserver une taille de barbe"
            >
              Réserver
            </Link>
          </article>
          <article className="price-entry featured-price" id="duo">
            <div>
              <h2>Coupe + barbe</h2>
              <p>
                La coupe et la barbe en une seule fois. Une heure au fauteuil,
                personne ne regarde le chrono.
              </p>
              <span className="price-time">55 min · le plus demandé</span>
            </div>
            <strong className="price">42 €</strong>
            <Link
              className="text-link price-book"
              href="/rendez-vous?service=duo"
              aria-label="Réserver coupe et barbe"
            >
              Réserver
            </Link>
          </article>
          <article className="price-entry" id="junior">
            <div>
              <h2>La coupe junior</h2>
              <p>
                Pour les moins de 12 ans. On explique chaque geste et ils
                choisissent la musique.
              </p>
              <span className="price-time">
                25 min · jusqu&apos;à 11 ans inclus
              </span>
            </div>
            <strong className="price">20 €</strong>
            <Link
              className="text-link price-book"
              href="/rendez-vous?service=junior"
              aria-label="Réserver une coupe junior"
            >
              Réserver
            </Link>
          </article>
        </section>
        <section className="price-note">
          <p>
            Tu ne sais pas exactement ce que tu veux ? On en parle au fauteuil.
            Tu ne paies pas plus cher pour avoir pris le temps de choisir.
          </p>
          <Link className="button button-lime" href="/rendez-vous">
            Réserver
          </Link>
        </section>
      </main>
    </>
  );
}
