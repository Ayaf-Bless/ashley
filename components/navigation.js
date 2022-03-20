import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link href={"/achievement"}>Nos Oeuvre</Link>
              </li>
              <li>
                <Link href={"/about"}>À propos de nous</Link>
              </li>
              <li>
                <Link href={"/contact"}>Nous contacter</Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>aba@gmail.com</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+243 891154985</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Ou on est situé </li>
                <li>Avanue luvungi 166</li>
                <li>Rond-point huilerie</li>
                <li>Réf: Restaurant ALI BABA</li>
                <li>Commune: Kinshasa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
