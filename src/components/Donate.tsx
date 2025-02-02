export default async function Donate({ lang }: { lang: string }) {
  if (lang === "de") {
    return <DonateDe />;
  } else {
    return <DonateEn />;
  }
}

const DonateDe = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Spenden</h1>

      <p>
        Die Projekte des Chaostreff Osnabrück e.V. sind nur durch die
        Mitgliedsbeiträge und durch Spenden möglich. Wenn Sie den Verein
        finanziell unterstützen wollen, finden Sie hier die Informationen dazu.
      </p>

      <p>
        Grundsätzlich gibt es drei Möglichkeiten, den Verein finanziell zu
        unterstützen. Möglichkeiten für direkte Zuwendungen sind, einerseits die
        Banküberweisung, andererseits eine Transaktion via PayPal. Zudem gibt es
        die Möglichkeit, Fördermitglied im Verein zu werden.
      </p>

      <p>
        Wenn Sie unseren Verein langfristig unterstützen wollen, ist eine
        Fördermitgliedschaft zu empfehlen.
      </p>

      <dl>
        <dt>Dem Chaostreff Osnabrück e.V. spenden via Banküberweisung</dt>
        <dd>
          <ul>
            <li>Frei wählbarer Beitrag</li>
            <li>Einmalig oder regelmäßig (Dauerauftrag)</li>
            <li>
              Die Kontodaten können Sie per{" "}
              <a href="mailto:schatzmeister@chaostreff-osnabrueck.de">E-Mail</a>{" "}
              unkompliziert bei unserem{" "}
              <a href="mailto:schatzmeister@chaostreff-osnabrueck.de">
                Schatzmeister
              </a>{" "}
              erfragen
            </li>
          </ul>
        </dd>
        <dt>Spende via PayPal</dt>
        <dd>
          <ul>
            <li>Frei wählbarer Beitrag</li>
            <li>Einmalig oder regelmäßig</li>
            <li>
              Mit wenigen Klicks auf unserer{" "}
              <a
                href="https://www.paypal.com/donate?hosted_button_id=AKT457NDPPH4J"
                rel="noreferer"
                target="_blank"
              >
                PayPal-Seite
              </a>
            </li>
            <li>
              <i>
                Information: PayPal behält 1,5 % des Spendenbetrages sowie 0,35
                € pro Transaktion ein
              </i>
            </li>
          </ul>
        </dd>
        <dt>Fördermitglied werden</dt>
        <ul>
          <li>
            <a
              href="https://github.com/CTreffOS/Verwaltung/raw/master/Formulare/foerdermitgliedsantrag.pdf"
              rel="noreferer"
              target="_blank"
            >
              Antrag
            </a>
          </li>
          <li>Frei wählbarer Beitrag (mindestens 60 €/Jahr)</li>
        </ul>
        <dd></dd>
      </dl>
    </div>
  );
};

const DonateEn = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Donate</h1>

      <p>
        The projects of the Chaostreff Osnabrueck e.V. are possible only with
        membership fees and donations. If you like to support us financially,
        you will find here the corresponding information.
      </p>

      <p>
        Basically, there are three options to support us. For a direct support
        you can choose between bank transfer and a transfer using PayPal.
        Furthermore, you can become a supporting member of the Chaostreff
        Osnabrück e.V..
      </p>

      <p>
        If you would like to support our association in a long-term way, we
        recommend to choose a supporting membership.
      </p>

      <dl>
        <dt>Support the Chaostreff Osnabrück e.V. with a bank transfer</dt>
        <dd>
          <ul>
            <li>Freely selectable amount</li>
            <li>Once-only or regularly (standing order)</li>
            <li>
              The account data can be obtained by{" "}
              <a href="mailto:schatzmeister@chaostreff-osnabrueck.de">email</a>{" "}
              from our{" "}
              <a href="mailto:schatzmeister@chaostreff-osnabrueck.de">
                treasurer
              </a>
              .
            </li>
          </ul>
        </dd>

        <dt>Donation using PayPal</dt>
        <dd>
          <ul>
            <li>Once-only or regularly</li>
            <li>
              With a few clicks only to our{" "}
              <a
                href="https://www.paypal.com/donate?hosted_button_id=AKT457NDPPH4J"
                rel="noreferer"
                target="_blank"
              >
                PayPal site
              </a>
            </li>
            <li>
              <i>
                Information: PayPal keeps 1.5% of the donation amount and
                additionally €0.35 per transaction.
              </i>
            </li>
          </ul>
        </dd>
        <dt>Become a supporting member</dt>
        <dd>
          <ul>
            <li>
              <a
                href="https://github.com/CTreffOS/Verwaltung/raw/master/Formulare/foerdermitgliedsantrag.pdf"
                rel="noreferer"
                target="_blank"
              >
                application form
              </a>
            </li>
            <li>Freely selectable amount (at least €60 per year)</li>
          </ul>
        </dd>
      </dl>
    </div>
  );
};
