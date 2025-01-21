import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TextBlock from "./components/TextBlock";

import { ReactComponent as Web } from "./assets/images/icons/web.svg";
import { ReactComponent as Instagram } from "./assets/images/icons/instagram.svg";
import { ReactComponent as Facebook } from "./assets/images/icons/facebook.svg";
import { ReactComponent as Twitter } from "./assets/images/icons/twitter.svg";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Hero />
        <TextBlock
          date={"April 2019"}
          headline={"Shopware als starker Partner"}
          description={
            "Wir haben eine Vielzahl von individuellen Webshops für ein diverses Kundenfeld entwickelt und umgesetzt - darunter sind namhafte Unternehmen wie Laack und die Rheinische Post"
          }
          text={
            "Bei der Umsetzung können wir auf Shopware als zuverlässigen Partner zurückgreifen. Durch die Business-Kooperation mit Shopware sind unsere zertifizierten Entwickler in der Lage, unseren Kunden immer die neusten, innovativsten und sichersten Shop-Lösungen anzubieten. Um immer auf dem aktuellsten Stand zu sein, treffen wir unseren Kooperationspartner auf der jährlichen Fachmesse „Shopware Community Day“ und stehen in einem regelmäßigen Austausch. Dadurch sind wir in der Lage, kurzfristig auf die neusten Entwicklungen zu reagieren – dazu gehört unter anderem die Verwendung von Shopware 6, wodurch wir schon jetzt qualitativ hochwertige Headless-Shop-Projekte (API-first) umsetzen können."
          }
          socials={[
            {
              link: "https://www.activevalue.de",
              icon: <Web />,
            },
            {
              link: "https://www.instagram.com/activevalue/?hl=de",
              icon: <Instagram />,
            },
            {
              link: "https://www.facebook.com/activevalue/",
              icon: <Facebook />,
            },
            {
              link: "https://twitter.com/activevalue",
              icon: <Twitter />,
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
