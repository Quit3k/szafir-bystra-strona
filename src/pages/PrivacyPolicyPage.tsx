// src/pages/PrivacyPolicyPage.tsx

import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


const PrivacyPolicyPage = () => {
  // Funkcja do płynnego przewijania na stronie głównej
  const scrollToSectionOnHome = (sectionId: string) => {
    // Przekierowuje na stronę główną z hashem sekcji
    window.location.href = `/#${sectionId}`;
  };


  return (
    // Dodajemy nawigację i stopkę, aby podstrona wyglądała spójnie
    <>
      <Navigation />
      <div className="bg-white pt-32 pb-24 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-8">Polityka prywatności i plików cookies</h1>
          <p className="mb-6">Niniejsza Polityka prywatności i plików cookies określa zasady przetwarzania i ochrony danych osobowych oraz wykorzystania plików cookies na stronie internetowej Szafir Bystra.</p>

          <h2 className="text-2xl font-bold font-serif text-gray-900 mt-10 mb-4">§1 Definicje</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Administrator</strong> – Stanisław Ciepielowski, właściciel Sali Weselnej Szafir Bystra, z siedzibą pod adresem: Bystra 430, 38-300 Gorlice.</li>
            <li><strong>Strona Internetowa</strong> lub <strong>Serwis</strong> – serwis dostępny pod adresem: szafirbystra.pl</li>
            <li><strong>Użytkownik</strong> – każdy podmiot, który przegląda zawartość Strony internetowej.</li>
            <li><strong>RODO</strong> – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.</li>
          </ol>

          <h2 className="text-2xl font-bold font-serif text-gray-900 mt-10 mb-4">§2 Dane osobowe</h2>
          <p className="mb-4">1. Administratorem danych osobowych Użytkownika w rozumieniu RODO jest Administrator.</p>
          <p className="mb-4">2. Użytkownik może przekazywać swoje dane osobowe Administratorowi poprzez zainicjowanie kontaktu za pomocą podanego na Stronie Internetowej adresu e-mail lub numeru telefonu.</p>
          <p className="mb-4">3. Dane osobowe przekazywane Administratorowi przez Użytkownika w wiadomości e-mail lub podczas rozmowy telefonicznej przetwarzane są w celu udzielenia odpowiedzi na wysłane zapytanie, przygotowania oferty lub realizacji umowy.</p>
          <p className="mb-4">4. Podanie danych osobowych przez Użytkownika jest dobrowolne, ale niezbędne, by Użytkownik otrzymał odpowiedź lub ofertę. Przetwarzanie danych w tym celu odbywa się na podstawie prawnie uzasadnionego interesu realizowanego przez administratora (Art.6 ust.1 lit. f RODO). Dane te będą przetwarzane do czasu zakończenia korespondencji oraz do czasu przedawnienia ewentualnych roszczeń.</p>
          <p className="mb-4">5. Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych.</p>
          <p className="mb-4">6. Dane osobowe są gromadzone z należytą starannością i odpowiednio chronione przed dostępem przez osoby do tego nieupoważnione.</p>
          <p className="mb-4">7. W Serwisie mogą znajdować się odesłania do innych stron internetowych (np. mapa Google). Administrator nie ponosi odpowiedzialności za politykę prywatności stosowaną przez administratorów tych stron.</p>

          <h2 className="text-2xl font-bold font-serif text-gray-900 mt-10 mb-4">§3 Prawa użytkownika</h2>
          <p className="mb-4">1. Użytkownikowi przysługują prawa związane z przetwarzaniem jego danych osobowych, w tym:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>prawo dostępu do danych;</li>
            <li>prawo do poprawienia danych;</li>
            <li>prawo do ograniczenia przetwarzania danych;</li>
            <li>prawo do zgłoszenia sprzeciwu wobec przetwarzania danych;</li>
            <li>prawo do usunięcia danych (tzw. prawo do bycia zapomnianym);</li>
            <li>prawo do przenoszenia danych;</li>
            <li>prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
          </ul>
          <p className="mt-4">2. W celu realizacji swoich praw Użytkownik powinien skierować odpowiednie żądanie na adres e-mail Administratora.</p>
          
          <h2 className="text-2xl font-bold font-serif text-gray-900 mt-10 mb-4">§4 Pliki cookies i logi serwera</h2>
          <p className="mb-4">1. Podczas korzystania przez Użytkownika ze Strony internetowej automatycznie zbierane są dane takie jak adres IP, nazwa domeny, typ przeglądarki. Dane te mogą być zbierane przez pliki cookies (tzw. ciasteczka), a także mogą być zapisywane w logach serwera.</p>
          <p className="mb-4">2. Pliki cookies to niewielkie pliki tekstowe wysyłane do komputera Użytkownika. Strona wykorzystuje pliki cookies podmiotów trzecich, w szczególności Google Maps, w celu poprawnego wyświetlania osadzonej mapy.</p>
          <p className="mb-4">3. Użytkownik może zarządzać plikami cookies z poziomu swojej przeglądarki internetowej. Może je blokować lub usuwać.</p>
          <p className="mb-4">4. Korzystanie ze strony jest możliwe również bez wykorzystywania plików cookies, jednak niektóre funkcje, jak mapa, mogą nie działać poprawnie.</p>
          <p className="mb-4">5. Dane zapisane w logach serwera nie są łączone w żaden sposób z konkretnymi Użytkownikami Strony i nie są wykorzystywane w celu identyfikacji Użytkownika. Logi serwera służą do administrowania Stroną.</p>
          
          <h2 className="text-2xl font-bold font-serif text-gray-900 mt-10 mb-4">§5 Postanowienia końcowe</h2>
          <p className="mb-4">1. W niniejszym dokumencie mogą nastąpić zmiany, na które może wpłynąć rozwój technologii internetowej lub zmiany prawa. Wszelkie zmiany będą komunikowane Użytkownikom niezwłocznie.</p>
          <p className="mb-4">2. Wszelkie pytania lub uwagi dotyczące Polityki prywatności i plików cookies należy kierować na adres e-mail: <strong>kontakt@szafirbystra.pl</strong></p>
        
          <div className="text-center mt-12">
            <Link to="/" className="bg-szafir hover:bg-szafir-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg">
              Wróć na stronę główną
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;