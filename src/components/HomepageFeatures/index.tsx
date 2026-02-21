import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "homepage.features.easyToUse.title",
    Svg: require("@site/static/img/chess-player.svg").default,
    description: (
      <Translate id="homepage.features.easyToUse.description">
        Lichess Studien sind sehr einfach zu erstellen und zu bedienen, aber sie sind sehr mächtig, und haben viele, teils versteckte Möglichkeiten.
      </Translate>
    ),
  },
  {
    title: "homepage.features.whatMatters.title",
    Svg: require("@site/static/img/morphing.svg").default,
    description: (
      <Translate id="homepage.features.whatMatters.description">
        Diese Dokumentation hilft mit dem Einstieg, und versucht dabei den Brückenschlag von "was man zu Beginn wissen sollte" zu "wie man erweiterte Funktionen
        nutzen kann, um überraschendes zu erreichen."
      </Translate>
    ),
  },
  {
    title: "homepage.features.surprisingResults.title",
    Svg: require("@site/static/img/lichess-knight.svg").default,
    description: (
      <Translate id="homepage.features.surprisingResults.description">
        Alles von Partienalaysen, Unterrichtseinheiten, Selbstlernmaterial, und auch die Integration in den Rest der Welt.
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Translate id={title}>{title}</Translate>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
