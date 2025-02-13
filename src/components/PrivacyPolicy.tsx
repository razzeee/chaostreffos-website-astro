export default async function PrivacyPolicy({ lang }: { lang: string }) {
  if (lang === "de") {
    return <PrivacyPolicyDe />;
  } else {
    return <PrivacyPolicyEn />;
  }
}

const PrivacyPolicyDe = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Datenschutzerklärung</h1>

      <p>
        Der Chaostreff Osnabrück e.V. speichert nur so viele personenbezogene
        Daten wie unbedingt nötig sind, um Besuchern und Mitgliedern
        Informationen und Dienste zuverlässig und sicher anbieten zu können.
      </p>

      <p>
        Der Server wird als VServer mit allen Diensten ausschließlich von uns
        selbst administriert. Eine Auswertung der Dienste-Protokolle erfolgt nur
        von uns selbst und auch nur, um mögliche Fehler oder Einbruchsversuche
        in unseren Server zu analysieren.
      </p>

      <p>
        Wir haben uns daher auch ausdrücklich dafür entschieden, auf unserer
        Website auf die Nutzung von Cookies und Trackingtools zur Analyse des
        Datenverkehrs wie z.B. GoogleAnalytics zu verzichten.
      </p>

      <p>
        Eine Weitergabe von Teilen der erhobenen Daten erfolgt ausschließlich
        gemäß gesetzlicher Verpflichtung z.B. an Strafverfolgungs- oder
        Steuerbehörden.
      </p>

      <p>
        Nachfolgend wird genau aufgeschlüsselt, bei welcher Gelegenheit welche
        Daten wie lange gespeichert sind. Bei der nachfolgend beschriebenen
        Passwortspeicherung handelt es sich nicht um die Speicherung der
        Passworte im Klartext sondern ausschließlich um die Speicherung der
        Passwort-Hashwerte. Zudem wird beschrieben, welche Schritte erforderlich
        sind, nicht automatisch gelöschte Daten zu löschen.
      </p>

      <h2>Besuch unserer Website</h2>

      <h3>Logfiles des Webservers</h3>

      <p>
        Quell-IP-Adresse, Zeitstempel, genutztes Betriebssystem, verwendeter
        Web-Browser, Referer-URL und besuchte Seite.
      </p>

      <h3>Standort unseres Stammtisches</h3>

      <p>
        Für die Standortdarstellung unseres Stammtisch-Treffpunktes verlinken
        wir die Website des Anbieters OpenStreetMap.
      </p>

      <h3>Aufbewahrung und Löschung</h3>

      <p>
        Automatische Löschung der Logfiles des Webservers, wenn sie älter als 10
        Tage sind.
      </p>

      <h2>Nutzung unseres öffentlichen Videochats</h2>

      <p>
        Zur Übertragung von Video- und Audiosignalen innerhalb der Videochats
        kommt die quelloffene Software Jitsi Meet zum Einsatz. Auf Basis von
        WebRTC werden Daten bzw. Media-Streams via Datagram Transport Layer
        Security (DTLS) und Secure Real-time Transport Protocol (SRTP)
        verschlüsselt übertragen. WebRTC bietet allerdings (noch) keine
        Möglichkeit, Videochats mit mehreren Personen Ende-zu-Ende zu
        verschlüsseln. Das bedeutet: Auf dem Transportweg bzw. im Netzwerk ist
        der Videochat verschlüsselt, auf dem Videochat-Server hingegen, der
        Jitsi Meet hostet, wird der gesamte Datenverkehr entschlüsselt und ist
        damit für den Betreiber einsehbar.
      </p>

      <p>
        Als Betreiber speichern wir keine Informationen über Sie bzw. die
        Videochats. Es wird nichts protokolliert bzw.
        gespeichert/mitgeschnitten. Die Logging-Stufe ist soweit reduziert, dass
        nicht einmal die IP-Adressen der Nutzer gespeichert werden.
      </p>

      <p>
        Jeder Jitsi-Server speichert jedoch ein Minimum an Daten im lokalen
        Speicher eines Web-Browsers (local storage). Der lokale Speicher ist
        eine modernere Form sogenannter Cookies. Die gespeicherten Daten
        erleichtern die Bedienung von Jitsi im Web-Browser und umfassen z.B. die
        zuletzt besuchten Konferenzen sowie den Anzeigenamen (display name)
        eines Benutzer in einer Konferenz.
      </p>

      <p>
        Mit Hilfe des STUN-Servers können NAT-Clients ihre öffentliche
        IP-Adresse erfahren und sind anschließend in der Lage, eine direkte
        Kommunikationsverbindung zwischen Teilnehmern herzustellen.
      </p>

      <p>
        <a href="https://meet.osna.social" rel="noreferer" target="_blank">
          meet.osna.social
        </a>{" "}
        verwendet einen eigenen STUN-Server auf dem Jitsi-Server selbst. Dieser
        Jitsi-Server ist für viele gleichzeitige Nutzer und Konferenzen
        ausgelegt.
      </p>

      <p>
        Sofern Sie uns als Betreiber nicht vertrauen, haben Sie ebenfalls die
        Möglichkeit, Ihre eigene Jitsi-Instanz zu hosten.
      </p>

      <h2>Mitgliederverwaltung</h2>

      <h3>Kontaktdaten</h3>

      <p>
        Vor- und Nachname, Geburtsdatum, Straße, PLZ/Ort, E-Mail-Adresse,
        Telefonnummer, GnuPG-Fingerabdruck, Chaos-Nr. und überwiesene Beiträge.
      </p>

      <h3>Aufbewahrung und Löschung</h3>

      <p>
        Die Daten ausgeschiedener Mitglieder werden nach Ablauf der gesetzlichen
        Vorgaben gelöscht.
      </p>

      <h2>Mitglieder-Account für Dienste</h2>

      <h3>Voraussetzungen</h3>

      <p>
        Ein Mitglieder-Account ist ausschließlich Mitgliedern vorbehalten. Er
        wird erst eingerichtet, wenn ein Mitglied dies in einer formlosen E-Mail
        an folgende E-Mail-Adresse beantragt:{" "}
        <a href="mailto:member-accounts@chaostreff-osnabrueck.de">
          member-accounts@chaostreff-osnabrueck.de
        </a>
      </p>

      <h3>Account-Informationen</h3>

      <p>Benutzername, Vor- und Nachname und Passwort.</p>

      <h3>Zur Verfügung gestellte Dienste</h3>

      <p>
        Mit einem Mitglieder-Account kann ein Mitglied folgende Dienste auf
        unserem Server nutzen: Login-Shell, IMAP-/SMTP-Server und Jabber-Server.
      </p>

      <h3>Aufbewahrung und Löschung</h3>

      <p>
        Löschung eines Mitglieder-Accounts durch formlose E-Mail an:{" "}
        <a href="mailto:member-accounts@chaostreff-osnabrueck.de">
          member-accounts@chaostreff-osnabrueck.de
        </a>
      </p>

      <h2>Dienste für Mitglieder</h2>

      <h3>Logfiles bei Login-Shell</h3>

      <p>
        Quell-IP-Adresse, Zeitstempel des Ein- und Ausloggens und der
        Benutzername. Optional: Jeder Benutzer kann selbst entscheiden, ob
        ausgeführte Shell-Befehle als Shell-Historie protokolliert werden
        sollen.
      </p>

      <h3>Logfiles des IMAP-/SMTP-Servers</h3>

      <p>
        Quell-IP-Adresse, Zeitstempel und Benutzername. Beim SMTP-Dienst wird
        auch der von unserem SMTP-Server kontaktierte SMTP-Server als
        Ziel-IP-Adresse gespeichert.
      </p>

      <h3>Logfiles des Jabber-Servers</h3>

      <p>
        Jeder Login- und Logout-Vorgang, in Multi-User-Chats unserer Chaträume
        werden darüber hinaus die letzten zehn Meldungen gespeichert und
        entsprechend beim Betreten angeboten. Alle anderen Meldungen werden
        automatisch gelöscht. Lange Nachrichten (auch Bilder) werden automatisch
        in einer Zwischenablage gespeichert. Sie wird automatisch nach 24
        Stunden gelöscht. Bei Zweier-Chats werden generell keine Nachrichten
        gespeichert.
      </p>

      <h3>Aufbewahrung und Löschung</h3>

      <p>
        Automatische Löschung der Logfiles aller Dienste, wenn sie älter als 10
        Tage sind.
      </p>

      <h3>Web Key Directory (WKD)</h3>

      <p>
        Jedes Mitglied kann durch eine formlose E-Mail an{" "}
        <a href="mailto:member-accounts@chaostreff-osnabrueck.de">
          member-accounts@chaostreff-osnabrueck.de
        </a>{" "}
        beantragen, dass der öffentliche GPG-Schlüssel im WKD der Vereins-Domain
        abgelegt wird. Voraussetzung ist, dass die Vereins-E-Mail-Adresse als
        Identität am GPG-Schlüssel vorhanden ist. Löschung des öffentlichen
        GPG-Schlüssels: Durch formlose E-Mail an{" "}
        <a href="mailto:member-accounts@chaostreff-osnabrueck.de">
          member-accounts@chaostreff-osnabrueck.de
        </a>
        .
      </p>
    </div>
  );
};

const PrivacyPolicyEn = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Privacy Policy</h1>

      <p>
        The Chaostreff Osnabrück e.V. stores just that much personal data as is
        absolutley necessary in order to offer information and services to
        visitors and members in reliable and safe way.
      </p>

      <p>
        We ourselves operate the server as a VServer with all services. An
        evaluation of the logfiles of the services will be done exclusively by
        ourselves und only to detect possible errors or intrusion attempts.
      </p>

      <p>
        We therefore decided explicitely to avoid the usage of cookies and
        tracking tools for the analysis of the data traffic like e.g.
        GoogleAnalytics.
      </p>

      <p>
        We only pass any parts of the collected data according to legal demands
        e.g. to law enforcement authorities or tax authorities.
      </p>

      <p>
        Subsequently, we break down exactly at which opportunity we store which
        data for what time period. The subsequently mentioned password storage
        does not mean the plain text storage of the password but the storage of
        the password hashes instead. We further describe the steps necessary to
        delete those data that are not deleted automatically.
      </p>

      <h2>Visit of our Website</h2>

      <h3>Logfiles of the Web Server</h3>

      <p>
        Source-IP-Address, timestamp, used operating system, used web browser,
        referer URL and visited page.
      </p>

      <h3>Location of our Regular Meeting</h3>

      <p>
        We link OpenStreetMap to visualisze the location of our regular meeting.
      </p>

      <h3>Storage and Deletion</h3>

      <p>
        Automatic deletion of the web server logfiles as soon as they are elder
        than 10 days.
      </p>

      <h2>Use of our Public Video Chat</h2>

      <p>
        The open source software Jitsi Meet is used to transmit video and audio
        signals. Based on WebRTC, data and media streams are transmitted
        encrypted via Datagram Transport Layer Security (DTLS) and Secure
        Real-time Transport Protocol (SRTP). However, WebRTC does not (yet)
        offer the possibility of encrypting video chats with several people
        end-to-end. This means: On the transport route or in the network the
        video chat is encrypted, but on the video chat server the entire data
        traffic is decrypted and can therefore be viewed by the provider.
      </p>

      <p>
        As the provider we do not store any information about you or the video
        chats. Nothing is logged or saved/recorded. The logging level is reduced
        to such an extent that not even the IP addresses of the users are
        recorded.
      </p>

      <p>
        However, each Jitsi server stores a minimum of data in the local storage
        of a web browser. The local storage is a modern form of so the called
        cookies. The stored data make the usage of Jitsi more comfortable and
        they comprise e.g. the recently visited conferences and the display name
        of a user within a conference.
      </p>

      <p>
        Any NAT client can determine its pulic IP address using an STUN server
        and can thereby establish a direct connection between participants.
      </p>

      <p>
        <a href="https://meet.osna.social" rel="noreferer" target="_blank">
          meet.osna.social
        </a>{" "}
        uses an own STUN server running on the same server. This Jitsi server is
        dimensioned for many concurrent users and conferences.
      </p>

      <p>
        If you do not trust us as the provider, you also have the possibility of
        hosting your own Jitsi Meet instance.
      </p>

      <h2>Member Administration</h2>

      <h3>Contact Data</h3>

      <p>
        Firstname and lastname, date of birth, street, postal and location,
        email address, phone number, GnuPG fingerprint, Chaos-Nr. and transfered
        contributions.
      </p>

      <h3>Storage and Deletion</h3>

      <p>
        All data of former members will be deleted according to statutory
        provisions.
      </p>

      <h2>Member Account for Services</h2>

      <h3>Prerequisites</h3>

      <p>
        A member account is exclusively reserved to members. It will be created
        first, if requested by a member using an informal email to:
        <a href="mailto:member-accounts@chaostreff-osnabrueck.de">
          member-accounts@chaostreff-osnabrueck.de
        </a>
      </p>

      <h3>Account Information</h3>

      <p>Username, firstname, lastname and password.</p>

      <h3>Provided Services</h3>

      <p>
        A member account provides following services on our server to any
        member: Login shell, IMAP-/SMTP server and Jabber server.
      </p>

      <h3>Storage and Deletion</h3>

      <p>
        Deletion of a member account by informal email to:{" "}
        <a href="mailto:member-accounts@chaostreff-osnabrueck.de">
          member-accounts@chaostreff-osnabrueck.de
        </a>
      </p>

      <h2>Services for Members</h2>

      <h3>Logfiles when using the Login Shell</h3>

      <p>
        Source IP address, timestamp of login and logout and the username.
        Optional: Every user can decide, if executed shell commands are saved as
        shell history.
      </p>

      <h3>Logfiles of the IMAP/SMTP Server</h3>

      <p>
        Source IP address, timestamp and username. When using our SMTP server
        the contacted SMTP server is stored as target IP address.
      </p>

      <h3>Logfiles of the Jabber Server</h3>

      <p>
        Every login and logout process, the last ten messages of multi-user
        chats in our chat rooms are stored and provided on entry of a chat room.
        All other messages are deleted automatically. Long messages (including
        images) are stored automatically in a clipboard. They are deleted
        automatically after 24 hours. No messages are stored during any
        two-party chat.
      </p>

      <h3>Storage and Deletion</h3>

      <p>
        Automatically deletion of the logfiles of all services as soon as they
        are elder than 10 days.
      </p>

      <h3>Web Key Directory (WKD)</h3>

      <p>
        Each member can request by an informal email to{" "}
        <a href="mailto:member-accounts@chaostreff-osnabrueck.de">
          member-accounts@chaostreff-osnabrueck.de
        </a>{" "}
        his public GPG key to be stored in the WKD of the domain of our
        association. This requires the association email address of the member
        being an identity of the public GPG key. Deletion of the public GPG key:
        By an informal email to{" "}
        <a href="mailto:member-accounts@chaostreff-osnabrueck.de">
          member-accounts@chaostreff-osnabrueck.de
        </a>
        .
      </p>
    </div>
  );
};
