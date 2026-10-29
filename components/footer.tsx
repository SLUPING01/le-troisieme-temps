import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link className="footer-logo" href="/">
          Le Troisième Temps
        </Link>
        <address>
          18, avenue Michelet
          <br />
          93400 Saint-Ouen-sur-Seine
        </address>
      </div>
      <div className="footer-contact">
        <a href="tel:+33140119090">01 40 11 90 90</a>
        <a href="mailto:rdv@letroisiemetemps.fr">
          rdv@letroisiemetemps.fr
        </a>
      </div>
      <ul className="footer-links">
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Mentions légales</a>
        </li>
      </ul>
    </footer>
  );
}
