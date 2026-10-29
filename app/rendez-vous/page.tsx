import type { Metadata } from "next";
import Header from "@/components/header";
import BookingForm from "@/components/booking-form";

export const metadata: Metadata = {
  title: "Réserver — Le Troisième Temps",
  description:
    "Réserver une coupe ou une taille de barbe au Troisième Temps, 18 avenue Michelet à Saint-Ouen.",
};

export default function BookingPage() {
  return (
    <>
      <Header />
      <main id="contenu" className="inside">
        <div className="booking-layout">
          <div className="booking-intro">
            <h1>Réserver</h1>
            <p>
              Choisis ta prestation et ton créneau. Ta messagerie prépare la
              demande : rien n&apos;est confirmé tant qu&apos;on ne t&apos;a pas
              répondu.
            </p>
            <aside className="booking-address">
              <h2>Le salon</h2>
              <p>
                18, avenue Michelet
                <br />
                93400 Saint-Ouen-sur-Seine
                <br />
                Du mardi au samedi, 10h – 20h
              </p>
              <p>
                <a
                  href="https://www.openstreetmap.org/search?query=18%20avenue%20Michelet%20Saint-Ouen"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir le plan
                </a>
              </p>
              <p>
                Un doute ? <a href="tel:+33140119090">01 40 11 90 90</a>
              </p>
            </aside>
          </div>
          <BookingForm />
        </div>
      </main>
    </>
  );
}
