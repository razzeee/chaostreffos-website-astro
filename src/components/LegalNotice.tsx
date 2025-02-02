export default async function LegalNotice({ lang }: { lang: string }) {
  if (lang === "de") {
    return <LegalNoticeDe />;
  } else {
    return <LegalNoticeEn />;
  }
}

const LegalNoticeDe = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Rechtliche Hinweise</h1>

      <h2>Haftungsbeschränkung</h2>

      <p>
        Diese Website enthält Verknüpfungen (Verlinkungen) zu Websites Dritter
        (externe Links). Diese Websites unterliegen der Haftung der jeweiligen
        Betreiber. Die Inhalte der verküpften Websites wurden bei der
        erstmaligen Verknüpfung von uns (dem Anbieter der aktuellen Website) auf
        etwaige Rechtsverstöße überprüft, und es waren keine Rechtsverstöße
        ersichtlich. Auf die Inhalte der verlinkten Seiten haben wir keinerlei
        Einfluss. Eine ständige Kontrolle dieser externen Links ist für den
        Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei
        Kenntnis von Rechtsverstößen werden jedoch derartige externe Links
        unverzüglich gelöscht.
      </p>
    </div>
  );
};

const LegalNoticeEn = () => {
  // metadata.title = "Chaostreff Osnabrück e.V. - Legal Notice";
  return (
    <div className="prose dark:prose-invert">
      <h1>Legal Notices</h1>

      <h2>Diclaimer</h2>

      <p>
        This website contains links to third party websites (external links).
        These websites are the responsibilities of the respective operators. The
        content of the linked websites has been checked by us (the operator of
        the current website) on their first linkage with respect to possible
        statutory violation and we have not found any legal violation. We have
        no influence on the content of the linked pages. We cannot permanently
        control these externally linked pages with respect to statutory
        violation without concrete hints. On awareness of statutory violation
        these external links are removed immediately.
      </p>
    </div>
  );
};
