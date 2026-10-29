import Link from "next/link";
import Header from "@/components/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenu">
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                <span className="line">
                  <span>Après le</span>
                </span>{" "}
                <span className="line">
                  <span>coup de</span>
                </span>{" "}
                <span className="line">
                  <span>sifflet.</span>
                </span>
              </h1>
              <p className="hero-lead">
                Des coupes propres, une bonne ambiance et un endroit où tu te
                sens chez toi. Bienvenue au Troisième Temps.
              </p>
              <Link className="button button-dark" href="/rendez-vous">
                Réserver
              </Link>
              <p className="hero-info">
                Du mardi au samedi, de 10h à 20h · 18, avenue Michelet,
                Saint-Ouen
              </p>
            </div>
            <figure className="hero-art">
              <img
                src="/fauteuil-terrain.svg"
                alt="Dessin original d'un fauteuil de barbier dressé sur un terrain de football, tracé au trait fluorescent."
                width="680"
                height="660"
              />
            </figure>
          </div>
        </section>

        <section className="services" aria-labelledby="services-title">
          <div className="services-intro">
            <h2 id="services-title">Les prestations</h2>
            <p>
              Dis-nous ce que tu veux, on s&apos;en occupe. Les durées et tous
              les détails sont sur la page des prestations.
            </p>
            <Link className="text-link" href="/coupes">
              Voir toutes les prestations
            </Link>
          </div>
          <ul className="service-list">
            <li>
              <Link className="service" href="/coupes#coupe">
                <h3>La coupe courte</h3>
                <p>
                  Dégradé, classique ou à la tondeuse. On en parle avant de
                  commencer.
                </p>
                <span className="price">28 €</span>
              </Link>
            </li>
            <li>
              <Link className="service" href="/coupes#barbe">
                <h3>Le travail de barbe</h3>
                <p>Contours au fil, taille aux ciseaux et serviette chaude.</p>
                <span className="price">18 €</span>
              </Link>
            </li>
            <li>
              <Link className="service" href="/coupes#duo">
                <h3>Coupe + barbe</h3>
                <p>La coupe et la barbe en une seule fois, sans courir.</p>
                <span className="price">42 €</span>
              </Link>
            </li>
            <li>
              <Link className="service" href="/coupes#junior">
                <h3>La coupe junior</h3>
                <p>
                  Pour les moins de 12 ans, avec la même attention que pour les
                  grands.
                </p>
                <span className="price">20 €</span>
              </Link>
            </li>
          </ul>
        </section>

        <section className="salon" aria-labelledby="salon-title">
          <h2 id="salon-title">
            <span>Un bon dégradé.</span>
            <span>Une bonne ambiance.</span>
            <span>Rien de plus.</span>
          </h2>
          <div className="salon-text">
            <p>
              Yacine a joué arrière gauche jusqu&apos;à trente ans avant de
              passer au rasoir. Il a ouvert le salon à Saint-Ouen en 2017.
            </p>
            <p>
              Depuis, on y croise des supporters, des voisins, des gamins, et
              des gens qui n&apos;ont jamais regardé un match. On parle foot si
              tu veux, ou de rien. L&apos;important, c&apos;est que tu repartes
              avec la bonne coupe.
            </p>
            <Link className="text-link" href="/rendez-vous">
              Trouver un créneau
            </Link>
          </div>
        </section>

        <section className="visit" aria-labelledby="visit-title">
          <h2 id="visit-title">Passer au salon</h2>
          <div className="visit-body">
            <dl className="visit-info">
              <div>
                <dt>Adresse</dt>
                <dd>
                  18, avenue Michelet
                  <br />
                  93400 Saint-Ouen-sur-Seine
                  <br />
                  <a
                    href="https://www.openstreetmap.org/search?query=18%20avenue%20Michelet%20Saint-Ouen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir le plan
                  </a>
                </dd>
              </div>
              <div>
                <dt>Horaires</dt>
                <dd>
                  Du mardi au samedi
                  <br />
                  10h – 20h
                  <br />
                  Fermé dimanche et lundi
                </dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  <a href="tel:+33140119090">01 40 11 90 90</a>
                  <br />
                  Les soirs de match, on ferme plus tard.
                </dd>
              </div>
            </dl>
            <Link className="button button-dark" href="/rendez-vous">
              Réserver
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
