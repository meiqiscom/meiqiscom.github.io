window.CODES = {
 "窗口不显示": {
  "cat": "Ladefehler",
  "name": "Chat-Fenster / Bubble wird gar nicht angezeigt",
  "alias": "nicht sichtbar widget unsichtbar keine bubble not showing 不显示",
  "trigger": "Nach dem Einfügen des Codes gibt es unten rechts keine Chat-Bubble / keinen Button",
  "official": "Das 美洽-Web-Widget lädt ein schwebendes Chat-Fenster mit einem einzigen eingefügten JS-Snippet; bestätige, dass der Code korrekt eingebettet und die Integrationssite in der Konsole konfiguriert ist.",
  "cause": "Das Widget ist meiqia.js, das nach asynchronem Laden ins DOM injiziert wird, daher heißt «gar nichts» meist «das Skript wurde nie geladen» — falsche Platzierung, von Adblock / Cache blockiert, oder Domain / entId stimmen nicht, sodass die Injektion nie lief.",
  "fix": "F12 → Network, suche meiqia.js: keine Anfrage → Code wirkungslos (Platzierung prüfen / Cache leeren); Anfrage, aber Nicht-200 → blockiert oder Pfadproblem; alles ok, aber weiterhin verdeckt → entId / Domain-Autorisierung und die Gruppen unten prüfen.",
  "scene": "Code eingefügt, neu geladen, keine Bubble, und F12 zeigt gar keine meiqia.js-Anfrage → der Code ist nicht im Live-Template / ist gecacht; Cache leeren und neu deployen."
 },
 "按钮不显示": {
  "cat": "Anzeigeprobleme",
  "name": "Skript geladen, aber Chat-Button fehlt",
  "alias": "kein button button fehlt button not showing konsole ok 按钮不显示",
  "trigger": "F12 zeigt meiqia.js mit 200, aber der Chat-Button ist einfach nicht auf der Seite",
  "official": "Der Widget-Code passt sich der Site an und zeigt einen Chat-Button; bei Anzeigeproblemen prüfe, ob er durch Styles versteckt oder die Initialisierung unterbrochen ist.",
  "cause": "Wenn das Skript lädt, aber der Button fehlt, ist es meist ein «Anzeige-Layer»-Problem: site-weites CSS überschreibt die Button-Position / setzt display:none, der z-index verliert, oder ein anderes festes Element verdeckt ihn; ein anderer JS-Fehler kann die Initialisierung ebenfalls abbrechen.",
  "fix": "F12 → Elements, finde den 美洽-Container — vorhanden, versteckt oder außerhalb des Bildes?; eigenes CSS / andere Skripte testweise deaktivieren; Konsole auf einen Fehler prüfen, der die Ausführung abbrach.",
  "scene": "meiqia.js 200, Konsole typeof _MEIQIA ist function, aber kein Button → Theme-CSS hat ihn aus dem Bild positioniert; Stil / Position korrigieren und er erscheint."
 },
 "广告拦截": {
  "cat": "Ladefehler",
  "name": "meiqia.js durch eine Adblock-Erweiterung blockiert",
  "alias": "adblock ublock adguard err_blocked_by_client blockiert whitelist erweiterung 广告拦截",
  "trigger": "Konsole: meiqia.js net::ERR_BLOCKED_BY_CLIENT, und das Chat-Fenster erscheint nicht",
  "official": "Das 美洽-Chat-Skript kommt von einer Drittanbieter-Domain; ist eine Blockier-Erweiterung installiert, kann sie es als Werbung / Tracker behandeln und das Laden verhindern — Blockierung ausschalten oder whitelisten.",
  "cause": "ERR_BLOCKED_BY_CLIENT bedeutet, dass eine Browser-Erweiterung (AdBlock / uBlock / AdGuard) die Anfrage per Filterlisten blockierte. Das 美洽-Skript ist «Drittanbieter außerhalb der Domain + Echtzeit-Kommunikation», was solche Regeln oft als Werbung / Tracker fehldeuten — ein falscher Ausfall «Konsole ok, Nutzerseite fehlt».",
  "fix": "Im Inkognito oder mit ausgeschaltetem Adblock testen — erscheint es, war die Blockierung die Ursache; Nutzer bitten, die Site zu whitelisten; das Frontend kann das Chat-Skript verzögert / bedingt laden, um manche Auto-Regeln zu umgehen.",
  "scene": "Auf deinem Gerät sichtbar, manche Nutzer melden keinen Chat → sie haben einen Adblocker; die Konsole zeigt klar ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Ladefehler",
  "name": "meiqia.js 404 / falscher Status / Mixed Content",
  "alias": "404 status nicht geladen cache cdn https mixed content zertifikat 脚本未加载",
  "trigger": "meiqia.js ist Nicht-200 in F12 → Network (404 / blockiert / pending)",
  "official": "Nach dem Deployment suche meiqia.js im Network-Panel; ein 200-Status heißt, das Skript ist korrekt platziert und geladen.",
  "cause": "Häufige Nicht-200-Ursachen: Code von Seiten- / CDN-Cache zurückgehalten (nach dem Publizieren nicht aktualisiert), Laden auf einer HTTP-Seite / unvollständige Zertifikatskette löst Mixed-Content-Blockierung aus, oder kaputter / teilweise kopierter Code. Schlägt dieser Schritt fehl, passieren Injektion und Verbindung nie.",
  "fix": "Nach dem Publizieren CDN- / Browser-Cache leeren (oder Inkognito); volles HTTPS mit vollständiger Zertifikatskette und ohne Mixed Content sicherstellen; prüfen, dass der kopierte Code vollständig und nicht escaped ist.",
  "scene": "Template geändert, aber die Live-Site liefert noch den alten Chat-Code → CDN-Cache nicht aktualisiert; ein harter Reload / Cache-Leeren macht meiqia.js zu 200."
 },
 "代码位置": {
  "cat": "Ladefehler",
  "name": "Code falsch platziert (head-Blockierung / wirkungslos)",
  "alias": "platzierung wohin head body unten blockierung einbetten schliess-tag 代码位置",
  "trigger": "Code im <head> oder in einem async-Skript; leere Seite / Chat kommt und geht",
  "official": "美洽 empfiehlt, den Code am Seitenende vor </body> einzufügen; das Widget läuft, nachdem der Hauptinhalt geladen ist.",
  "cause": "Das Widget muss seinen Container nach DOM-Bereitschaft injizieren. Im <head> blockiert es das Rendern (leerer Bildschirm zuerst bei langsamem Netz) oder läuft vor DOM-Bereitschaft und scheitert; in manchem async- / Modul-Scope kann auch die Ladereihenfolge danebengehen.",
  "fix": "Setze das 美洽-JS in den gemeinsamen Footer jeder Seite, vor </body>; für SPAs siehe den Eintrag «SPA-Route» und nutze manualInit; stelle sicher, dass ein Bundler es nicht per Tree-Shaking entfernt.",
  "scene": "Code aus Bequemlichkeit in den <head> gesteckt; bei langsamem Netz sehen Nutzer zuerst einen leeren Bildschirm und der Chat kommt spät → vor </body> verschieben."
 },
 "样式错乱": {
  "cat": "Anzeigeprobleme",
  "name": "Chat-Fenster / Button-Styling kaputt",
  "alias": "stil kaputt css konflikt verzerrt verschoben theme ueberschreibt 样式错乱",
  "trigger": "Chat-Fenster / Button erscheint, aber mit kaputtem Stil / verschoben",
  "official": "Das Widget injiziert eigene Styles und passt sich der Site an; Konflikte mit site-weiten Styles können visuelle Fehler verursachen.",
  "cause": "Das 美洽-Skript injiziert CSS zur Laufzeit; überschreiben site-weite Styles (Universalselektoren / hochpriore Regeln / Resets) seine Klassen zuerst, brechen Position, Stacking und Schriften — eine Nebenwirkung von «dynamischer Injektion + geteiltem Dokument-Stilraum».",
  "fix": "F12, um zu sehen, welche Site-Regel den 美洽-Container überschreibt; site-weite Styles enger fassen / Einfluss auf generische Klassen reduzieren; bei Bedarf 美洽 bitten, das Container-Stacking anzupassen.",
  "scene": "Die Site nutzt eine Globalregel wie * { position:... } und der Button wird in die Mitte geschoben → den Globalselektor enger fassen und es ist zurück."
 },
 "按钮跑屏外": {
  "cat": "Anzeigeprobleme",
  "name": "Button außerhalb des Bildes / verdeckt",
  "alias": "ausserhalb des bildes unsichtbar verdeckt z-index stacking feste position verschoben 跑屏外",
  "trigger": "Der Button ist im DOM, aber visuell fehlt er / wird von anderen Elementen verdeckt",
  "official": "Der Widget-Button erscheint als schwebendes Element mit fester Position; wird er von anderen festen Elementen verdeckt, passe Stacking oder Position an.",
  "cause": "Andere position:fixed-Elemente der Site (Nach-oben, schwebende Werbung, eine eigene Support-Leiste) mit höherem z-index verdecken den 美洽-Button, oder das Theme berechnet seine Koordinaten falsch, sodass er «außerhalb des Bildes / verdeckt» ist.",
  "fix": "Wähle den 美洽-Container in F12, um echte Koordinaten / z-index zu sehen; ihn anheben oder den z-index des verdeckenden Elements senken; vermeide, mehrere feste Elemente in einer Ecke zu stapeln.",
  "scene": "Ein «Nach-oben» und der Chat sind beide unten rechts und verdecken sich → Positionen versetzen oder z-index anpassen, und beide sind sichtbar."
 },
 "插件冲突": {
  "cat": "Anzeigeprobleme",
  "name": "DOM-Konflikt mit Drittanbieter-Plugin / Analytics",
  "alias": "plugin konflikt heatmap analytics seo conversion drittanbieter dom overlay stacking stoerung 插件冲突",
  "trigger": "Nach Hinzufügen eines Heatmap- / Analytics- / Werbe-Plugins erscheint der Chat nicht / verhält sich seltsam",
  "official": "Andere Skripte der Seite, die das DOM ändern oder Anfragen abfangen, können das normale Laden und Anzeigen des Widgets beeinträchtigen.",
  "cause": "Heatmap- / Analytics- / Conversion-Skripte schreiben das DOM um, injizieren Overlays oder fangen Anfragen ab; da sie und 美洽 ins selbe Dokument injizieren, stören sich Stacking / Events und der 美洽-Container wird verdeckt oder seine Init unterbrochen.",
  "fix": "Verdächtige Plugins einzeln deaktivieren, um den Konflikt zu lokalisieren; Ladereihenfolge / Container-Stacking anpassen; Heatmaps usw. den 美洽-Container-Bereich meiden lassen.",
  "scene": "Chat nach Hinzufügen eines Heatmap-Plugins nicht mehr klickbar → das Heatmap-Overlay lag über dem Chat; Stacking anpassen oder Bereich ausschließen und es ist zurück."
 },
 "SPA路由": {
  "cat": "Framework-Integration",
  "name": "Widget verschwindet nach einem SPA-Routenwechsel",
  "alias": "spa vue react next angular single page routenwechsel verschwindet history pushstate neu mounten SPA路由",
  "trigger": "Chat auf der Startseite, weg nach Navigation zu einer anderen Frontend-Route",
  "official": "Für Single-Page-Apps (SPA) nutze die Routen-Hooks des Frameworks, um das 美洽-Widget zu laden / zu initialisieren, damit es zum Frontend-Routing passt.",
  "cause": "Eine SPA wechselt Ansichten per Frontend-Routing, zerstört / erstellt das DOM neu, aber meiqia.js injiziert standardmäßig einmal beim ersten Laden und wird beim Routenwechsel nicht automatisch neu erstellt — also «Seite wechseln, Chat weg».",
  "fix": "Nutze _MEIQIA('manualInit'), um Auto-Init zu stoppen, und rufe _MEIQIA('init') in einem Routen-Hook (React useEffect / Vue mounted / router afterEach) auf, um bei Bedarf neu zu mounten; vermeide mehrere Instanzen.",
  "scene": "Eine Next.js-Site hat Chat auf der Startseite, nicht auf der Detailseite → füge _MEIQIA('init') im Routen-Hook hinzu, um bei jeder Navigation neu zu mounten."
 },
 "手动初始化": {
  "cat": "Framework-Integration",
  "name": "Manuelle Init nötig (manualInit / init)",
  "alias": "manualinit init manuelle initialisierung auto init _meiqia api timing geladen 手动初始化",
  "trigger": "Du willst steuern, wann 美洽 initialisiert, oder das Auto-Init-Timing ist falsch",
  "official": "Füge _MEIQIA('manualInit') nach dem 美洽-Einbettungscode ein, um Auto-Init nach dem Download zu stoppen; rufe _MEIQIA('init') auf, um bei Bedarf manuell zu initialisieren.",
  "cause": "Standardmäßig initialisiert 美洽 direkt nach dem Download; wenn du den Container bereit / Kundendaten übergeben / die Route stabil zuerst brauchst, ist dieses Timing «zu früh» — wechsle zu manueller Init, um die Reihenfolge zu steuern.",
  "fix": "Füge _MEIQIA('manualInit') nach dem Code ein; rufe _MEIQIA('init') auf, sobald die Bedingungen bereit sind (DOM / Login / Route); rufe Daten-APIs in Reihenfolge innerhalb des Init-Timings laut Doku auf.",
  "scene": "Du willst den Chat nach dem Login mit der Nutzeridentität initialisieren → manualInit + init im Login-Callback, eine anonyme Erstverbindung vermeidend."
 },
 "entId错误": {
  "cat": "Konfig / Autorisierung",
  "name": "entId stimmt nicht / Agenten erhalten keine Chats",
  "alias": "entid unternehmens-id eindeutig stimmt nicht keine chats id-suche falscher code 不一致",
  "trigger": "Das Chat-Fenster öffnet, aber Agenten erhalten keine Besuchernachrichten",
  "official": "Die Zahl nach entId im Code ist die eindeutige ID deines Unternehmens; stimmt sie nicht mit der Workbench überein, können Agenten den Chat nicht bedienen — finde die Unternehmens-ID unter Einstellungen - Team - ID-Suche.",
  "cause": "entId bindet den Snippet an ein bestimmtes Unternehmenskonto. Mit fremdem / Code aus anderer Umgebung oder vermischten Konten lädt das Frontend das Fenster, aber Nachrichten gehen an «ein anderes Unternehmen», sodass diese Workbench keine erhält — das klassische «sieht gut aus, empfängt aber nichts».",
  "fix": "Vergleiche die Unternehmens-ID unter Einstellungen - Team - ID-Suche mit der entId im Seitencode; bei Abweichung mit dem neuesten Code aus der Konsole dieses Unternehmens ersetzen.",
  "scene": "Vergessen, den Testkonto-Code gegen den Produktionscode zu tauschen → Besucher können chatten, aber die Produktions-Workbench erhält nichts; entId korrigieren und es verbindet."
 },
 "域名未授权": {
  "cat": "Konfig / Autorisierung",
  "name": "Site-Domain in der Konsole nicht autorisiert",
  "alias": "domain nicht autorisiert integrationssite hinzufuegen whitelist produktionsdomain testdomain site-liste 域名未授权",
  "trigger": "Funktioniert im Test / lokal, aber die Produktions-Domain lädt / bedient nicht",
  "official": "Die 美洽-Konsole erlaubt «Integrationssite hinzufügen», jede mit eigener Konfig; eine neue Site muss in der Konsole konfiguriert werden, bevor sie korrekt integriert.",
  "cause": "美洽 verwaltet mehrere Sites als «Integrationssites»; die Domain muss in der Konsole registriert / autorisiert werden, um erkannt zu werden. Eine neue, nicht hinzugefügte Produktions-Domain wird evtl. nicht akzeptiert oder auf die falsche Konfig gemappt.",
  "fix": "Gehe zu Einstellungen - Web-Widget / Integrationssites, «Integrationssite hinzufügen» für die Produktions-Domain und nutze ihren dedizierten Code; Schreibweise von Domain / Subdomain prüfen.",
  "scene": "Auf localhost eingerichtet, der Chat bedient nicht auf der Live-www-Site → die Produktions-Domain als Integrationssite in der Konsole hinzufügen."
 },
 "子渠道": {
  "cat": "Konfig / Autorisierung",
  "name": "Multi-Site / Subkanal (Sonde) vermischt",
  "alias": "subkanal sonde multi-site geschaeftsbereiche eigene konfig vermischt routing eingaenge 子渠道",
  "trigger": "Mehrere Sites / Geschäftsbereiche teilen einen Snippet und Routing / Auto-Nachrichten vermischen sich",
  "official": "美洽 unterstützt das Deployment unterschiedlicher Widgets und Chat-Links pro Site (Subkanäle / Sonde); zusätzlich zur Standard-Site kannst du weitere hinzufügen, jede mit eigener Konfig.",
  "cause": "Verschiedene Geschäftsbereiche brauchen verschiedene Agentengruppen / Auto-Nachrichten, aber teilen alle Sites den einen Standard-Snippet, lassen sich Quellen nicht unterscheiden und Konfigs vermischen sich. Subkanäle (Sonde) sind für «ein Unternehmen, mehrere Eingänge, geroutet» gedacht.",
  "fix": "Unter Einstellungen - Web-Widget «Integrationssite hinzufügen», um pro Site einen eigenen Subkanal zu erstellen, jeder mit eigenem Code, Aussehen und Auto-Nachrichten.",
  "scene": "Hauptsite und eine Kampagnenseite teilen einen Snippet und du kannst die Herkunft nicht unterscheiden → erstelle einen eigenen Subkanal für die Kampagne."
 },
 "移动端不显示": {
  "cat": "Mobil / SDK",
  "name": "Mobil-Web-Chat nicht sichtbar / braucht eigenes Deployment",
  "alias": "mobil telefon h5 mobile site nicht sichtbar eigenes deployment selber code anpassen wap 移动端",
  "trigger": "Die PC-Site hat Chat, die Mobil- / H5-Site nicht",
  "official": "Der Widget-Code passt sich der Site an; Mobil / PC nutzen denselben Snippet, müssen aber separat deployed werden.",
  "cause": "Viele Teams haben getrennte PC- und Mobil-Seiten / -Templates und fügten den Code nur im PC-Template ein. Der Snippet ist derselbe und passt sich an, aber der «Einfügen»-Schritt muss auch im Mobil-Template erfolgen; ausgelassen, hat Mobil keinen Chat.",
  "fix": "Deploye denselben 美洽-Code vor </body> auch im Mobil- / H5-Template; prüfe per F12, dass meiqia.js auf beiden lädt; gib Mobil bei Bedarf ein eigenes Aussehen.",
  "scene": "Chat immer auf der PC-Site, aber nicht auf der Telefon-Site → das Mobil-Template hat keinen Code; hinzufügen und er erscheint."
 },
 "SDK接入": {
  "cat": "Mobil / SDK",
  "name": "Natives App-SDK-Integration / AppKey",
  "alias": "sdk app nativ appkey app-konfig hinzufuegen integrieren ios android entwickeln einbetten SDK接入",
  "trigger": "Du willst Chat in deiner eigenen App, nicht im Web",
  "official": "Die In-App-Integration braucht einen AppKey aus der 美洽-Workbench (Einstellungen - Integration - SDK, «APP-Konfig hinzufügen»), und Entwickler integrieren das iOS- / Android-SDK laut offizieller Doku und Demo.",
  "cause": "Eine App nutzt das native SDK, nicht Web-JS: zuerst «APP-Konfig hinzufügen» für einen AppKey, dann das SDK je Plattform integrieren für Chat-UI, Ungelesen, Push usw. — ein völlig anderer Pfad als das Web-Widget.",
  "fix": "App-Konfig in der Konsole für einen AppKey hinzufügen; das SDK laut iOS- / Android-Demo mit dem AppKey integrieren; Chat-Navigation / Ungelesen / Push prüfen.",
  "scene": "Du willst Live-Chat in deiner App → nimm SDK + AppKey, stecke nicht das Web-JS in ein WebView."
 },
 "SDK推送": {
  "cat": "Mobil / SDK",
  "name": "SDK-Nachrichten-Push kommt nicht an",
  "alias": "push kommt nicht kein push eigener push-server app verlassen offline nachricht benachrichtigung SDK推送",
  "trigger": "Nach SDK-Integration erhalten Nutzer keinen Push, wenn sie die App verlassen",
  "official": "美洽-SDK-Push hat zwei Modi: bei «kein Push» erreichen Agenten-Nachrichten nur die App (zum Empfang öffnen); mit einem «eigenen Push-Server» erhalten Nutzer Push aufs Telefon auch nach Verlassen der App.",
  "cause": "Fehlender «Offline-Push» heißt meist, der Push-Modus ist «kein Push», oder es fehlt der eigene Push-Server / Push-Zertifikate je Plattform. Der Pfad ist «美洽 → App-Server → Telefon des Nutzers»; ein fehlendes Glied lässt nur In-App-Empfang.",
  "fix": "In der App-Konfig «eigenen Push-Server» wählen und den Push jeder Plattform einrichten (APNs / Hersteller-Kanäle); Offline-Push laut Doku prüfen; «In-App-Nachricht» von «System-Push» unterscheiden.",
  "scene": "Im Test kommt es bei offener App an, aber nicht nach Sperren / Verlassen → der Push stand auf «kein Push»; auf eigenen Push-Server umstellen für Offline-Empfang."
 },
 "自定义按钮": {
  "cat": "API-Aufrufe",
  "name": "Standard-Button ausblenden / eigener Einstieg",
  "alias": "withoutbtn showpanel button ausblenden eigener button chat oeffnen support einstieg 自定义按钮",
  "trigger": "Du willst deinen eigenen «Support»-Button und den runden nativen 美洽-Button ausblenden",
  "official": "Rufe _MEIQIA('withoutBtn') auf, um den nativen 美洽-Button nicht zu zeigen; nach erfolgreicher Init rufe _MEIQIA('showPanel') auf, um den Chat zu öffnen.",
  "cause": "Standardmäßig wird der native schwebende Button gerendert; für deinen Einstieg musst du vor / während der Init «kein nativer Button» deklarieren und «Chat öffnen» an dein Element binden — eine Frage des API-Timings, kein «kaputter Button».",
  "fix": "Rufe _MEIQIA('withoutBtn') vor / während Einbettung / Init auf; binde _MEIQIA('showPanel') an das onclick deines Buttons; stelle sicher, dass sie nach erfolgreicher Widget-Init laufen.",
  "scene": "Die Seite hat bereits einen sichtbaren «Jetzt chatten»-Button → withoutBtn blendet den nativen aus, und ein Klick auf deinen ruft showPanel auf, um das Fenster zu öffnen."
 },
 "传递顾客信息": {
  "cat": "API-Aufrufe",
  "name": "Kundendaten übergeben / synchronisieren wirkt nicht",
  "alias": "kundendaten uebergeben identitaet synchronisieren metadata kundendaten kein effekt timing init eigene info 传递顾客信息",
  "trigger": "Du willst Name / Stufe / Bestellung eines eingeloggten Nutzers an Agenten übergeben, aber sie sehen es nicht",
  "official": "Das 美洽-Web-Widget bietet APIs «Kundendaten übergeben», «Kundenidentität synchronisieren» und «benutzerdefinierte Ereignisinfo hinzufügen», um Besucherdaten in den Chat zu bringen.",
  "cause": "Diese APIs müssen innerhalb des korrekten Init-Timings aufgerufen werden: nach erfolgreicher Init (oder im manualInit + init-Timing). Zu früh / spät oder falsche Feldformate, und es ist «gesetzt, aber wirkungslos».",
  "fix": "Rufe die APIs zum Übergeben / Synchronisieren laut Doku innerhalb des erfolgreichen Init-Timings auf; Feldnamen und -formate prüfen; in einer SPA nach jeder Init erneut übergeben.",
  "scene": "Du übergibst den Nutzernamen auf einer eingeloggten Site, aber er erscheint anonym → der Aufruf lief vor der Init; ihn in den Init-Erfolg-Callback verschieben und er wird übertragen."
 }
};
window.LABELS = {"miss": "Nicht gelistet — probiere ein anderes Stichwort (not showing / adblock / entId / SPA / sdk) oder sieh die vollständige Tabelle unten.", "codeword": ""};
window.FIELDS = [["trigger", "Wann es auftritt"], ["official", "L1-Verhalten / offizielle Einordnung"], ["cause", "L2-Grundursache"], ["fix", "Behebung"], ["scene", "Realer Fall"]];
window.THEAD = ["Symptom", "Gruppe", "L1-Verhalten / offizielle Einordnung", "L2-Grundursache"];
