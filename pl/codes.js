window.CODES = {
 "窗口不显示": {
  "cat": "Błąd ładowania",
  "name": "Okno / bąbel czatu w ogóle się nie pokazuje",
  "alias": "nie pokazuje się widget niewidoczny brak bąbla not showing 不显示",
  "trigger": "Po wklejeniu kodu brak bąbla / przycisku czatu w prawym dolnym rogu",
  "official": "Widget web 美洽 ładuje pływające okno czatu jednym wklejonym snippetem JS; potwierdź, że kod jest dobrze osadzony, a witryna integracji skonfigurowana w konsoli.",
  "cause": "Widget to meiqia.js wstrzyknięty do DOM po asynchronicznym załadowaniu, więc «nic w ogóle» zwykle oznacza «skrypt nigdy się nie załadował»: złe umiejscowienie, zablokowany przez adblock / cache, lub niezgodna domena / entId, więc wstrzyknięcie nigdy nie nastąpiło.",
  "fix": "F12 → Network, wyszukaj meiqia.js: brak żądania → kod bez efektu (sprawdź umiejscowienie / wyczyść cache); żądanie, ale nie-200 → zablokowany lub problem ścieżki; wszystko OK, ale wciąż ukryty → sprawdź entId / autoryzację domeny i grupy poniżej.",
  "scene": "Kod wklejony, odświeżasz, brak bąbla, a F12 nie pokazuje żądania meiqia.js → kod nie jest w szablonie live / jest zcache'owany; wyczyść cache i wdroż ponownie."
 },
 "按钮不显示": {
  "cat": "Problemy wyświetlania",
  "name": "Skrypt załadowany, ale brak przycisku czatu",
  "alias": "brak przycisku przycisk znikł button missing konsola ok 按钮不显示",
  "trigger": "F12 pokazuje meiqia.js w 200, ale przycisku czatu po prostu nie ma na stronie",
  "official": "Kod widgetu dostosowuje się do witryny i pokazuje przycisk czatu; jeśli wyświetlanie zawodzi, sprawdź, czy jest ukryty przez style lub czy inicjalizacja została przerwana.",
  "cause": "Jeśli skrypt się ładuje, ale brak przycisku, zwykle to problem «warstwy wyświetlania»: globalny CSS nadpisuje pozycję / ustawia display:none, z-index przegrywa, lub inny stały element go zakrywa; inny błąd JS też może przerwać inicjalizację.",
  "fix": "F12 → Elements, znajdź kontener 美洽 — obecny, ukryty czy poza ekranem?; tymczasowo wyłącz własny CSS / skrypty, by przetestować; sprawdź w konsoli błąd, który przerwał wykonanie.",
  "scene": "meiqia.js 200, konsola typeof _MEIQIA to function, ale brak przycisku → CSS motywu ustawił go poza ekranem; popraw styl / pozycję i się pojawia."
 },
 "广告拦截": {
  "cat": "Błąd ładowania",
  "name": "meiqia.js zablokowany przez rozszerzenie adblock",
  "alias": "adblock ublock adguard err_blocked_by_client zablokowany biała lista rozszerzenie 广告拦截",
  "trigger": "Konsola: meiqia.js net::ERR_BLOCKED_BY_CLIENT, a okno czatu się nie pojawia",
  "official": "Skrypt czatu 美洽 pochodzi z domeny firm trzecich; jeśli zainstalowane jest rozszerzenie blokujące, może uznać go za reklamę / tracker i uniemożliwić ładowanie — wyłącz blokowanie lub dodaj do białej listy.",
  "cause": "ERR_BLOCKED_BY_CLIENT oznacza, że rozszerzenie przeglądarki (AdBlock / uBlock / AdGuard) zablokowało żądanie listami filtrów. Skrypt 美洽 to «firmy trzecie spoza domeny + komunikacja w czasie rzeczywistym», którą takie reguły często mylą z reklamą / trackerem, powodując fałszywą awarię «konsola OK, strona użytkownika pusta».",
  "fix": "Przetestuj w incognito lub z wyłączonym adblock — jeśli się pojawia, blokowanie było przyczyną; poproś użytkowników o dodanie witryny do białej listy; front może ładować skrypt czatu z opóźnieniem / warunkowo, by ominąć część reguł automatycznych.",
  "scene": "Widoczne na Twoim komputerze, część użytkowników zgłasza brak czatu → mają adblock; konsola wyraźnie pokazuje ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Błąd ładowania",
  "name": "meiqia.js 404 / zły status / mieszana treść",
  "alias": "404 status niezaładowany cache cdn https mieszana treść certyfikat 脚本未加载",
  "trigger": "meiqia.js jest nie-200 w F12 → Network (404 / zablokowany / pending)",
  "official": "Po wdrożeniu wyszukaj meiqia.js w panelu Network; status 200 oznacza, że skrypt jest dobrze umieszczony i załadowany.",
  "cause": "Częste przyczyny nie-200: kod wstrzymany przez cache strony / CDN (brak odświeżenia po publikacji), ładowanie na stronie HTTP / niekompletny łańcuch certyfikatów wyzwalający blokadę mieszanej treści, lub uszkodzony / częściowo skopiowany kod. Gdy ten krok zawodzi, wstrzyknięcie i połączenie nigdy nie następują.",
  "fix": "Wyczyść cache CDN / przeglądarki (lub incognito) po publikacji; zapewnij pełne HTTPS z całym łańcuchem certyfikatów i bez mieszanej treści; sprawdź, czy skopiowany kod jest kompletny i nie escape'owany.",
  "scene": "Zmieniłeś szablon, ale strona live wciąż serwuje stary kod czatu → cache CDN nie został odświeżony; twarde odświeżenie / wyczyszczenie cache zmienia meiqia.js na 200."
 },
 "代码位置": {
  "cat": "Błąd ładowania",
  "name": "Kod w złym miejscu (blokada w head / bez efektu)",
  "alias": "umiejscowienie gdzie head body dół blokada osadzić tag zamykający 代码位置",
  "trigger": "Kod w <head> lub w skrypcie async; pusta strona / czat raz jest, raz nie",
  "official": "美洽 zaleca wklejenie kodu na dole strony, przed </body>; widget działa po załadowaniu głównej treści.",
  "cause": "Widget musi wstrzyknąć kontener po gotowości DOM. W <head> blokuje render (pusty ekran najpierw przy wolnej sieci) lub działa przed gotowością DOM i zawodzi; w niektórych zakresach async / modułu kolejność ładowania też może się popsuć.",
  "fix": "Umieść JS 美洽 we wspólnej stopce każdej strony, przed </body>; dla SPA zobacz wpis «trasa SPA» i użyj manualInit; upewnij się, że bundler nie usunie go przez tree-shaking.",
  "scene": "Wrzuciłeś kod do <head> dla wygody; przy wolnej sieci użytkownicy widzą najpierw pusty ekran, a czat pojawia się późno → przenieś przed </body>."
 },
 "样式错乱": {
  "cat": "Problemy wyświetlania",
  "name": "Popsuty styl okna / przycisku czatu",
  "alias": "styl popsuty css konflikt zniekształcony przesunięty motyw nadpisuje 样式错乱",
  "trigger": "Okno / przycisk czatu się pojawia, ale ze złym stylem / przesunięty",
  "official": "Widget wstrzykuje własne style i dostosowuje się do witryny; konflikty z globalnymi stylami mogą powodować anomalie wizualne.",
  "cause": "Skrypt 美洽 wstrzykuje CSS w czasie działania; jeśli globalne style (selektory uniwersalne / reguły wysokiego priorytetu / resety) nadpisują jego klasy najpierw, pozycja, nakładanie i czcionki się psują — efekt uboczny «dynamicznego wstrzykiwania + współdzielenia jednej przestrzeni stylów dokumentu».",
  "fix": "F12, by zobaczyć, która reguła witryny nadpisuje kontener 美洽; zawęź globalne style / zmniejsz wpływ na klasy ogólne; w razie potrzeby poproś 美洽 o dostosowanie nakładania kontenera.",
  "scene": "Witryna używa globalnej reguły typu * { position:... } i przycisk jest wypychany do środka → zawęź selektor globalny i wraca."
 },
 "按钮跑屏外": {
  "cat": "Problemy wyświetlania",
  "name": "Przycisk poza ekranem / zakryty",
  "alias": "poza ekranem niewidoczny zakryty z-index nakładanie pozycja stała przesunięty 跑屏外",
  "trigger": "Przycisk jest w DOM, ale wizualnie nieobecny / zakryty przez inne elementy",
  "official": "Przycisk widgetu pojawia się jako pływający o stałej pozycji; jeśli zakryty przez inne stałe elementy, dostosuj nakładanie lub pozycję.",
  "cause": "Inne elementy position:fixed witryny (powrót na górę, pływające reklamy, własny pasek wsparcia) z wyższym z-index zakrywają przycisk 美洽, lub motyw źle liczy jego współrzędne, zostawiając go «poza ekranem / zakrytym».",
  "fix": "Wybierz kontener 美洽 w F12, by zobaczyć rzeczywiste współrzędne / z-index; podnieś go lub obniż z-index elementu zakrywającego; unikaj układania wielu stałych pływaków w jednym rogu.",
  "scene": "«Powrót na górę» i czat są oba w prawym dolnym rogu i się zakrywają → przesuń pozycje lub dostosuj z-index i oba są widoczne."
 },
 "插件冲突": {
  "cat": "Problemy wyświetlania",
  "name": "Konflikt DOM z wtyczką / analityką firm trzecich",
  "alias": "konflikt wtyczka heatmap analityka seo konwersja firmy trzecie dom nakładka nakładanie zakłócenie 插件冲突",
  "trigger": "Po dodaniu wtyczki heatmap / analityki / reklam czat się nie pokazuje / działa dziwnie",
  "official": "Inne skrypty strony, które modyfikują DOM lub przechwytują żądania, mogą wpływać na normalne ładowanie i wyświetlanie widgetu.",
  "cause": "Skrypty heatmap / analityki / konwersji przepisują DOM, wstrzykują nakładki lub przechwytują żądania; ponieważ one i 美洽 wstrzykują do tego samego dokumentu, nakładanie / zdarzenia zakłócają się i kontener 美洽 zostaje zakryty lub jego init przerwany.",
  "fix": "Wyłączaj podejrzane wtyczki po kolei, by zlokalizować konflikt; dostosuj kolejność ładowania / nakładanie kontenera; spraw, by heatmapy itd. omijały obszar kontenera 美洽.",
  "scene": "Czat przestał być klikalny po dodaniu wtyczki heatmap → nakładka heatmapy była nad czatem; dostosuj nakładanie lub wyklucz obszar i wraca."
 },
 "SPA路由": {
  "cat": "Integracja frameworka",
  "name": "Widget znika po zmianie trasy SPA",
  "alias": "spa vue react next angular jedna strona zmiana trasy znika history pushstate ponowny montaż SPA路由",
  "trigger": "Czat na stronie głównej, znika po nawigacji trasy frontu gdzie indziej",
  "official": "Dla aplikacji jednostronicowych (SPA) użyj hooków trasy frameworka, by załadować / zainicjować widget 美洽 zgodnie z routingiem frontu.",
  "cause": "SPA zmienia widoki przez routing frontu, niszcząc / odtwarzając DOM, ale meiqia.js wstrzykuje raz przy pierwszym załadowaniu domyślnie i nie jest odtwarzany sam przy zmianie trasy, więc «zmieniasz stronę, czat znika».",
  "fix": "Użyj _MEIQIA('manualInit'), by zatrzymać auto-init, i wywołaj _MEIQIA('init') w hooku trasy (React useEffect / Vue mounted / router afterEach), by montować ponownie na żądanie; unikaj inicjowania wielu instancji.",
  "scene": "Witryna Next.js ma czat na stronie głównej, nie na stronie szczegółów → dodaj _MEIQIA('init') w hooku trasy, by montować ponownie przy każdej nawigacji."
 },
 "手动初始化": {
  "cat": "Integracja frameworka",
  "name": "Potrzebny ręczny init (manualInit / init)",
  "alias": "manualinit init ręczna inicjalizacja auto init _meiqia api moment załadowany 手动初始化",
  "trigger": "Chcesz kontrolować, kiedy 美洽 się inicjuje, lub moment auto-init jest zły",
  "official": "Dodaj _MEIQIA('manualInit') po kodzie osadzenia 美洽, by zatrzymać auto-init po pobraniu; wywołaj _MEIQIA('init'), by zainicjować ręcznie w razie potrzeby.",
  "cause": "Domyślnie 美洽 inicjuje się tuż po pobraniu; gdy potrzebujesz najpierw gotowego kontenera / przekazanych danych klienta / stabilnej trasy, ten moment jest «za wczesny» — przejdź na ręczny init, by kontrolować kolejność.",
  "fix": "Dodaj _MEIQIA('manualInit') po kodzie; wywołaj _MEIQIA('init'), gdy warunki gotowe (DOM / sesja / trasa); wywołuj API danych po kolei w czasie init zgodnie z dok.",
  "scene": "Chcesz zainicjować czat z tożsamością użytkownika po logowaniu → manualInit + init w callbacku logowania, unikając pierwszego anonimowego połączenia."
 },
 "entId错误": {
  "cat": "Konfiguracja / autoryzacja",
  "name": "entId niezgodny / agenci nie odbierają czatów",
  "alias": "entid id firmy unikalny niezgodny brak czatów wyszukiwanie id zły kod 不一致",
  "trigger": "Okno czatu się otwiera, ale agenci nie odbierają wiadomości odwiedzających",
  "official": "Liczba po entId w kodzie to unikalny id Twojej firmy; przy niezgodności z panelem agenci nie mogą obsłużyć czatu — znajdź ID firmy w Ustawienia - Zespół - wyszukiwanie ID.",
  "cause": "entId wiąże snippet z konkretnym kontem firmy. Przy cudzym / z innego środowiska kodzie, lub pomylonych kontach, front ładuje okno, ale wiadomości idą do «innej firmy», więc ten panel nic nie odbiera — klasyk «wygląda dobrze, ale nic nie odbiera».",
  "fix": "Porównaj ID firmy w Ustawienia - Zespół - wyszukiwanie ID z entId w kodzie strony; przy niezgodności zastąp najnowszym kodem skopiowanym z konsoli tej firmy.",
  "scene": "Zapomniałeś zamienić kod konta testowego na produkcyjny → odwiedzający mogą czatować, ale panel produkcyjny nic nie odbiera; popraw entId i się łączy."
 },
 "域名未授权": {
  "cat": "Konfiguracja / autoryzacja",
  "name": "Domena witryny nieautoryzowana w konsoli",
  "alias": "domena nieautoryzowana dodaj witrynę integracji biała lista domena produkcyjna domena testowa lista witryn 域名未授权",
  "trigger": "Działa na teście / lokalnie, ale domena produkcyjna nie ładuje / nie obsługuje",
  "official": "Konsola 美洽 pozwala «Dodaj witrynę integracji», każda z własną konfig; nowa witryna musi być skonfigurowana w konsoli, by się dobrze integrować.",
  "cause": "美洽 zarządza wieloma witrynami jako «witryny integracji»; domena musi być zarejestrowana / autoryzowana w konsoli, by była rozpoznana. Nowa, niedodana domena produkcyjna może nie zostać zaakceptowana lub zmapowana do złej konfig.",
  "fix": "Wejdź w Ustawienia - widget web / witryny integracji, «Dodaj witrynę integracji» dla domeny produkcyjnej i użyj jej dedykowanego kodu; sprawdź pisownię domeny / subdomeny.",
  "scene": "Dostroiłeś na localhost, czat nie obsługuje na www live → dodaj domenę produkcyjną jako witrynę integracji w konsoli."
 },
 "子渠道": {
  "cat": "Konfiguracja / autoryzacja",
  "name": "Wiele witryn / podkanał (sonda) pomieszany",
  "alias": "podkanał sonda wiele witryn linie biznesowe niezależna konfig pomieszany routing wejścia 子渠道",
  "trigger": "Wiele witryn / linii biznesowych dzieli jeden snippet i routing / wiadomości automatyczne się mieszają",
  "official": "美洽 wspiera wdrażanie różnych widgetów i linków czatu na witrynę (podkanały / sonda); poza domyślną witryną możesz dodać więcej, każda z własną konfig.",
  "cause": "Różne linie biznesowe potrzebują różnych grup agentów / wiadomości automatycznych, ale gdy każda witryna dzieli jeden domyślny snippet, źródła nie da się odróżnić i konfig się mieszają. Podkanały (sonda) są zaprojektowane dla «jedna firma, wiele wejść, routowanych».",
  "fix": "W Ustawienia - widget web, «Dodaj witrynę integracji», by utworzyć osobny podkanał na witrynę, każdy z własnym kodem, wyglądem i wiadomościami automatycznymi.",
  "scene": "Witryna główna i strona kampanii dzielą jeden snippet i nie odróżniasz źródła → utwórz osobny podkanał dla kampanii."
 },
 "移动端不显示": {
  "cat": "Mobile / SDK",
  "name": "Czat web mobilny się nie pokazuje / wymaga osobnego wdrożenia",
  "alias": "mobile telefon h5 witryna mobilna nie pokazuje osobne wdrożenie ten sam kod dostosować wap 移动端",
  "trigger": "Witryna PC ma czat, witryna mobilna / H5 nie",
  "official": "Kod widgetu dostosowuje się do witryny; mobile / PC używają tego samego snippetu, ale muszą być wdrożone osobno.",
  "cause": "Wiele zespołów ma osobne strony / szablony PC i mobilne i wkleiło kod tylko w szablonie PC. Snippet jest ten sam i samodostosowuje się, ale krok «wklejenia» musi nastąpić też w szablonie mobilnym; pominięty, mobile nie ma czatu.",
  "fix": "Wdroż ten sam kod 美洽 przed </body> również w szablonie mobilnym / H5; sprawdź przez F12, że meiqia.js ładuje się na obu; daj mobile własny wygląd w razie potrzeby.",
  "scene": "Czat zawsze jest na witrynie PC, ale nie na witrynie telefonu → szablon mobilny nie ma kodu; dodaj i się pojawia."
 },
 "SDK接入": {
  "cat": "Mobile / SDK",
  "name": "Integracja natywnego SDK aplikacji / AppKey",
  "alias": "sdk app natywny appkey dodaj konfig app integracja ios android programować osadzić SDK接入",
  "trigger": "Chcesz czat we własnej aplikacji, nie w web",
  "official": "Integracja in-app wymaga AppKey z panelu 美洽 (Ustawienia - Integracja - SDK, «Dodaj konfig APP»), a programiści integrują SDK iOS / Android wg oficjalnej dok i dema.",
  "cause": "Aplikacja używa natywnego SDK, nie JS web: najpierw «Dodaj konfig APP» po AppKey, potem integruj SDK na platformę dla UI czatu, nieprzeczytanych, push itd. — zupełnie inna ścieżka niż widget web.",
  "fix": "Dodaj konfig APP w konsoli po AppKey; integruj SDK wg dema iOS / Android z AppKey; sprawdź nawigację czatu / nieprzeczytane / push.",
  "scene": "Chcesz czat na żywo we własnej aplikacji → idź w SDK + AppKey, nie wpychaj JS web do WebView."
 },
 "SDK推送": {
  "cat": "Mobile / SDK",
  "name": "Push wiadomości SDK nie dochodzi",
  "alias": "push nie dochodzi brak push własny serwer push opuszczenie aplikacji wiadomość offline powiadomienie SDK推送",
  "trigger": "Po integracji SDK użytkownicy nie odbierają push po opuszczeniu aplikacji",
  "official": "Push SDK 美洽 ma dwa tryby: przy «brak push» wiadomości agenta docierają tylko w aplikacji (otwórz ją, by odebrać); z «własnym serwerem push» użytkownicy odbierają push na telefon nawet po opuszczeniu aplikacji.",
  "cause": "Brak «push offline» zwykle oznacza tryb push «brak push», lub brak własnego serwera push / certyfikatów push na platformę. Ścieżka to «美洽 → serwer aplikacji → telefon użytkownika»; brakujące ogniwo zostawia tylko odbiór w aplikacji.",
  "fix": "W konfig APP wybierz «własny serwer push» i skonfiguruj push każdej platformy (APNs / kanały producenta); sprawdź push offline wg dok; odróżnij «wiadomość w aplikacji» od «push systemowego».",
  "scene": "W teście dochodzi przy otwartej aplikacji, ale nie po blokadzie / wyjściu → push był na «brak push»; przejdź na własny serwer push dla odbioru offline."
 },
 "自定义按钮": {
  "cat": "Wywołania API",
  "name": "Ukryj domyślny przycisk / własne wejście",
  "alias": "withoutbtn showpanel ukryj przycisk własny przycisk otwórz czat kontakt wejście 自定义按钮",
  "trigger": "Chcesz własny przycisk «Kontakt» i ukryć okrągły natywny 美洽",
  "official": "Wywołaj _MEIQIA('withoutBtn'), by nie pokazywać natywnego przycisku 美洽; po udanym init wywołaj _MEIQIA('showPanel'), by otworzyć czat.",
  "cause": "Domyślnie renderowany jest natywny pływający przycisk; by użyć własnego wejścia, musisz zadeklarować «brak natywnego przycisku» przed / w trakcie init i powiązać «otwórz czat» z własnym elementem — kwestia momentu API, nie «zepsuty przycisk».",
  "fix": "Wywołaj _MEIQIA('withoutBtn') przed / w trakcie osadzenia / init; powiąż _MEIQIA('showPanel') z onclick własnego przycisku; upewnij się, że działają po udanym init widgetu.",
  "scene": "Strona ma już widoczny przycisk «Czatuj teraz» → withoutBtn ukrywa natywny, a klik w Twój wywołuje showPanel, by otworzyć okno."
 },
 "传递顾客信息": {
  "cat": "Wywołania API",
  "name": "Przekazanie / synchronizacja danych klienta bez efektu",
  "alias": "przekaż dane klienta synchronizuj tożsamość metadata dane klienta bez efektu moment init własne info 传递顾客信息",
  "trigger": "Chcesz przekazać imię / poziom / zamówienie zalogowanego użytkownika agentom, ale ich nie widzą",
  "official": "Widget web 美洽 oferuje API «przekaż dane klienta», «synchronizuj tożsamość klienta» i «dodaj własne info zdarzenia», by wnieść dane odwiedzającego do czatu.",
  "cause": "Te API trzeba wywołać w poprawnym momencie init: po udanym init (lub w momencie manualInit + init). Za wcześnie / późno, lub złe formaty pól, i jest «ustawione, ale bez efektu».",
  "fix": "Wywołuj API przekazania / synchronizacji danych w momencie udanego init wg dok; sprawdź nazwy i formaty pól; w SPA przekazuj ponownie po każdym init.",
  "scene": "Przekazujesz nazwę użytkownika agentom na zalogowanej witrynie, ale pokazuje się anonim → wywołanie nastąpiło przed init; przenieś je do callbacku udanego init i jest przekazywane."
 }
};
window.LABELS = {"miss": "Brak na liście — wypróbuj inne słowo (not showing / adblock / entId / SPA / sdk) lub zobacz pełną tabelę poniżej.", "codeword": ""};
window.FIELDS = [["trigger", "Kiedy się pojawia"], ["official", "Zachowanie L1 / pozycja oficjalna"], ["cause", "Przyczyna źródłowa L2"], ["fix", "Jak naprawić"], ["scene", "Realny przypadek"]];
window.THEAD = ["Objaw", "Grupa", "Zachowanie L1 / pozycja oficjalna", "Przyczyna źródłowa L2"];
