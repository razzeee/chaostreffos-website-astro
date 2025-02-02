export default async function Chaostalks({ lang }: { lang: string }) {
  if (lang === "de") {
    return <ChaostalksDe />;
  } else {
    return <ChaostalksEn />;
  }
}

const ChaostalksDe = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>chaOStalks</h1>

      <dl>
        <dt>chaOStalk #1</dt>
        <dd>
          <em>Politische Lösungen für technische Probleme</em>- Linus Neumann -
          2015-11-27 -{" "}
          <a href="../downloads/chaostalk1_a4.pdf" target="_blank">
            zum Flyer
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/ChaOStalk-1-Linus-Neumann"
          >
            zum Video
          </a>
        </dd>
        <dt>chaOStalk #2</dt>
        <dd>
          <em>#NSAUA</em>- Anna Biselli und Prof. Martin &quot;maha&quot; Haase
          - 2016-04-22 -{" "}
          <a href="../downloads/chaostalk2_a3.pdf" target="_blank">
            zum Flyer
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-2.1-NSAUA"
          >
            zum Video (Anna Biselli)
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-2.2-NSAUA"
          >
            zum Video (Prof. Martin &quot;maha&quot; Haase)
          </a>
        </dd>
        <dt>chaOStalk #3</dt>
        <dd>
          <em>#SearchWing</em>- Andreas &quot;Steini&quot; Steinhauser -
          2017-06-29 -{" "}
          <a href="../downloads/chaostalk3_a3.pdf" target="_blank">
            zum Flyer
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-3-searchwing"
          >
            zum Video
          </a>
        </dd>
        <dt>chaOStalk #4</dt>
        <dd>
          <em>Künstliche Intelligenz & Neuronale Netze</em>- Prof. Dr. Joachim
          Hertzberg und Volker Strübing - 2019-01-18 -{" "}
          <a href="../downloads/chaostalk4_a4.pdf" target="_blank">
            zum Flyer
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-4.1-Kuenstliche-Intelligenz"
          >
            zum Video (Volker Strübing)
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-4.2-Kuenstliche-Intelligenz"
          >
            zum Video (Prof. Dr. Joachim Hertzberg)
          </a>
        </dd>
      </dl>
    </div>
  );
};

const ChaostalksEn = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>chaOStalks</h1>

      <p>The following talks are only available in German unfortunately.</p>

      <dl>
        <dt>chaOStalk #1</dt>
        <dd>
          <em>Politische Lösungen für technische Probleme</em>- Linus Neumann -
          2015-11-27 -{" "}
          <a href="../downloads/chaostalk1_a4.pdf" target="_blank">
            View leaflet
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/ChaOStalk-1-Linus-Neumann"
          >
            Watch recording
          </a>
        </dd>
        <dt>chaOStalk #2</dt>
        <dd>
          <em>#NSAUA</em>- Anna Biselli and Prof. Martin &quot;maha&quot; Haase
          - 2016-04-22 -{" "}
          <a href="../downloads/chaostalk2_a3.pdf" target="_blank">
            View leaflet
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-2.1-NSAUA"
          >
            Watch recording (Anna Biselli)
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-2.2-NSAUA"
          >
            Watch recording (Prof. Martin &quot;maha&quot; Haase)
          </a>
        </dd>
        <dt>chaOStalk #3</dt>
        <dd>
          <em>#SearchWing</em>- Andreas &quot;Steini&quot; Steinhauser -
          2017-06-29 -{" "}
          <a href="../downloads/chaostalk3_a3.pdf" target="_blank">
            View leaflet
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-3-searchwing"
          >
            Watch recording
          </a>
        </dd>
        <dt>chaOStalk #4</dt>
        <dd>
          <em>Künstliche Intelligenz & Neuronale Netze</em>- Prof. Dr. Joachim
          Hertzberg and Volker Strübing - 2019-01-18 -{" "}
          <a href="../downloads/chaostalk4_a4.pdf" target="_blank">
            View leaflet
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-4.1-Kuenstliche-Intelligenz"
          >
            Watch recording (Volker Strübing)
          </a>{" "}
          -{" "}
          <a
            rel="noreferer"
            target="_blank"
            href="https://media.ccc.de/v/chaostalk-4.2-Kuenstliche-Intelligenz"
          >
            Watch recording (Prof. Dr. Joachim Hertzberg)
          </a>
        </dd>
      </dl>
    </div>
  );
};
