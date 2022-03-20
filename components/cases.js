import React from "react";
import { RightArrow as CasesNext } from "../utils/svg-component";
import { ArrowLeft as CasesPrev } from "../utils/svg-component";
import Image from "next/image";
import Link from "next/link";
const caseStudies = [
  {
    id: 1,
    subtitle: "Coiffure & maquillage",
    title: "Ayez vos besoins de coiffure satisfait",
    image: "hair",
    slug: "coiffure-maquillage",
  },
  {
    id: 2,
    subtitle: "Marriage",
    title: "La location de robe de mariage et le maquillage",
    image: "wedding",
    slug: "marriage",
  },
  {
    id: 3,
    subtitle: "Manicure",
    title: "Pour vos soins de main et son embellissement",
    image: "nails",
    slug: "manicure",
  },
];

function Cases(props) {
  return (
    <section className={"cases"}>
      <div className={"container-fluid"}>
        <div className={"row"}>
          {caseStudies.map((caseItem) => (
            <div className={"case"} key={caseItem.id}>
              <Link href={`/services/${caseItem.slug}`}>
                <div>
                  <div className={"case-details"}>
                    <span>{caseItem.subtitle}</span>
                    <h2>{caseItem.title}</h2>
                  </div>
                  <div className={"case-image"}>
                    <Image
                      src={require(`../public/assets/ullistration/${caseItem.image}.jpg`)}
                      alt={caseItem.title}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;
