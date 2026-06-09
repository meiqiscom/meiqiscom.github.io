window.CODES = {
 "窗口不显示": {
  "cat": "Laadfout",
  "name": "Chatvenster / bubbel verschijnt helemaal niet",
  "alias": "verschijnt niet widget onzichtbaar geen bubbel not showing 不显示",
  "trigger": "Na het plakken van de code is er geen chatbubbel / knop rechtsonder",
  "official": "De 美洽-webwidget laadt een zwevend chatvenster met één geplakte JS-snippet; bevestig dat de code goed is ingebed en de integratiesite in de console is geconfigureerd.",
  "cause": "De widget is meiqia.js die na een asynchrone lading in het DOM wordt geïnjecteerd, dus «helemaal niets» betekent meestal «het script is nooit geladen»: verkeerde plaatsing, geblokkeerd door adblock / cache, of niet-overeenkomend domein / entId, zodat de injectie nooit liep.",
  "fix": "F12 → Network, zoek meiqia.js: geen verzoek → code zonder effect (controleer plaatsing / wis cache); verzoek maar niet-200 → geblokkeerd of padprobleem; alles ok maar nog verborgen → controleer entId / domeinautorisatie en de groepen hieronder.",
  "scene": "Code geplakt, ververst, geen bubbel, en F12 toont geen meiqia.js-verzoek → de code staat niet in het live-template / is gecachet; wis de cache en deploy opnieuw."
 },
 "按钮不显示": {
  "cat": "Weergaveproblemen",
  "name": "Script geladen maar chatknop ontbreekt",
  "alias": "geen knop knop ontbreekt button missing console ok 按钮不显示",
  "trigger": "F12 toont meiqia.js op 200, maar de chatknop staat gewoon niet op de pagina",
  "official": "De widgetcode past zich aan de site aan en toont een chatknop; als de weergave faalt, controleer of hij door stijlen is verborgen of de initialisatie is onderbroken.",
  "cause": "Als het script laadt maar de knop ontbreekt, is het meestal een «weergavelaag»-probleem: de site-brede CSS overschrijft de knoppositie / zet display:none, de z-index verliest, of een ander vast element bedekt hem; een andere JS-fout kan de initialisatie ook afbreken.",
  "fix": "F12 → Elements, vind de 美洽-container — aanwezig, verborgen of buiten beeld?; schakel tijdelijk eigen CSS / scripts uit om opnieuw te testen; controleer de console op een fout die de uitvoering afbrak.",
  "scene": "meiqia.js 200, console typeof _MEIQIA is function, maar geen knop → de thema-CSS positioneerde hem buiten beeld; corrigeer stijl / positie en hij verschijnt."
 },
 "广告拦截": {
  "cat": "Laadfout",
  "name": "meiqia.js geblokkeerd door een adblock-extensie",
  "alias": "adblock ublock adguard err_blocked_by_client geblokkeerd whitelist extensie 广告拦截",
  "trigger": "Console: meiqia.js net::ERR_BLOCKED_BY_CLIENT, en het chatvenster verschijnt niet",
  "official": "Het 美洽-chatscript komt van een domein van derden; als er een blokkeer-extensie is geïnstalleerd, kan die het als advertentie / tracker behandelen en het laden verhinderen — schakel blokkeren uit of whitelist.",
  "cause": "ERR_BLOCKED_BY_CLIENT betekent dat een browserextensie (AdBlock / uBlock / AdGuard) het verzoek via zijn filterlijsten blokkeerde. Het 美洽-script is «derden buiten het domein + realtime communicatie», wat zulke regels vaak verwarren met advertentie / tracker, een valse fout «console ok, gebruikerskant ontbreekt».",
  "fix": "Test opnieuw in incognito of met adblock uit — verschijnt het, dan was blokkeren de oorzaak; vraag gebruikers de site te whitelisten; de front-end kan het chatscript vertraagd / voorwaardelijk laden om sommige autoregels te omzeilen.",
  "scene": "Op jouw machine zichtbaar, sommige gebruikers melden geen chat → ze hebben een adblock; de console toont duidelijk ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Laadfout",
  "name": "meiqia.js 404 / verkeerde status / gemengde inhoud",
  "alias": "404 status niet geladen cache cdn https gemengde inhoud certificaat 脚本未加载",
  "trigger": "meiqia.js is niet-200 in F12 → Network (404 / geblokkeerd / pending)",
  "official": "Zoek na het deployen meiqia.js in het Network-paneel; een 200-status betekent dat het script goed geplaatst en geladen is.",
  "cause": "Veelvoorkomende niet-200-oorzaken: code vastgehouden door pagina- / CDN-cache (niet ververst na publicatie), laden op een HTTP-pagina / onvolledige certificaatketen die gemengde-inhoud-blokkering triggert, of gebroken / deels gekopieerde code. Faalt deze stap, dan gebeuren injectie en verbinding nooit.",
  "fix": "Wis de CDN- / browsercache (of incognito) na publicatie; zorg voor volledig HTTPS met een intacte certificaatketen en zonder gemengde inhoud; controleer of de gekopieerde code volledig en niet-escaped is.",
  "scene": "Template gewijzigd maar de live site serveert nog de oude chatcode → de CDN-cache is niet ververst; een harde refresh / cache-wis maakt meiqia.js 200."
 },
 "代码位置": {
  "cat": "Laadfout",
  "name": "Code verkeerd geplaatst (head-blokkering / geen effect)",
  "alias": "plaatsing waar head body onder blokkering inbedden sluittag 代码位置",
  "trigger": "Code in <head> of in een async-script; lege pagina / chat komt en gaat",
  "official": "美洽 raadt aan de code onderaan de pagina te plakken, vóór </body>; de widget draait nadat de hoofdinhoud is geladen.",
  "cause": "De widget moet zijn container injecteren nadat het DOM klaar is. In <head> blokkeert het de render (eerst leeg scherm bij zwak netwerk) of draait vóór DOM-gereedheid en faalt; in sommige async- / modulescopes kan de laadvolgorde ook misgaan.",
  "fix": "Zet de 美洽-JS in de gemeenschappelijke footer van elke pagina, vóór </body>; voor SPA's zie het item «SPA-route» en gebruik manualInit; zorg dat een bundler hem niet via tree-shaking verwijdert.",
  "scene": "Code voor het gemak in <head> gestopt; bij zwak netwerk zien gebruikers eerst een leeg scherm en komt de chat laat → verplaats vóór </body>."
 },
 "样式错乱": {
  "cat": "Weergaveproblemen",
  "name": "Gebroken styling van chatvenster / knop",
  "alias": "stijl gebroken css conflict vervormd verschoven thema overschrijft 样式错乱",
  "trigger": "Het chatvenster / de knop verschijnt maar met gebroken stijl / verschoven",
  "official": "De widget injecteert eigen stijlen en past zich aan de site aan; conflicten met site-brede stijlen kunnen visuele afwijkingen veroorzaken.",
  "cause": "Het 美洽-script injecteert CSS tijdens runtime; overschrijven site-brede stijlen (universele selectors / regels met hoge prioriteit / resets) zijn klassen eerst, dan breken positie, stapeling en lettertypen — een neveneffect van «dynamische injectie + delen van één documentstijlruimte».",
  "fix": "F12 om te zien welke siteregel de 美洽-container overschrijft; versmal de site-brede stijlen / verminder de impact op generieke klassen; vraag indien nodig 美洽 de containerstapeling aan te passen.",
  "scene": "De site gebruikt een globale regel zoals * { position:... } en de knop wordt naar het midden geduwd → versmal de globale selector en het is terug."
 },
 "按钮跑屏外": {
  "cat": "Weergaveproblemen",
  "name": "Knop buiten beeld / bedekt",
  "alias": "buiten beeld onzichtbaar bedekt z-index stapeling vaste positie verschoven 跑屏外",
  "trigger": "De knop staat in het DOM maar is visueel afwezig / bedekt door andere elementen",
  "official": "De widgetknop verschijnt als zwevend met vaste positie; als bedekt door andere vaste elementen, pas stapeling of positie aan.",
  "cause": "Andere position:fixed-elementen van de site (terug naar boven, zwevende advertenties, een eigen supportbalk) met hogere z-index bedekken de 美洽-knop, of het thema berekent zijn coördinaten verkeerd, waardoor hij «buiten beeld / bedekt» is.",
  "fix": "Selecteer de 美洽-container in F12 om echte coördinaten / z-index te zien; verhoog hem of verlaag de z-index van het bedekkende element; vermijd meerdere vaste zwevers in één hoek te stapelen.",
  "scene": "Een «terug naar boven» en de chat staan beide rechtsonder en bedekken elkaar → verschuif de posities of pas de z-index aan en beide zijn zichtbaar."
 },
 "插件冲突": {
  "cat": "Weergaveproblemen",
  "name": "DOM-conflict met plugin / analytics van derden",
  "alias": "plugin conflict heatmap analytics seo conversie derden dom overlay stapeling interferentie 插件冲突",
  "trigger": "Na het toevoegen van een heatmap- / analytics- / advertentieplugin verschijnt de chat niet / gedraagt zich vreemd",
  "official": "Andere scripts op de pagina die het DOM wijzigen of verzoeken onderscheppen, kunnen het normale laden en weergeven van de widget beïnvloeden.",
  "cause": "Heatmap- / analytics- / conversiescripts herschrijven het DOM, injecteren overlays of onderscheppen verzoeken; omdat zij en 美洽 in hetzelfde document injecteren, interfereren stapeling / events en raakt de 美洽-container bedekt of zijn init onderbroken.",
  "fix": "Schakel verdachte plugins één voor één uit om het conflict te lokaliseren; pas laadvolgorde / containerstapeling aan; laat heatmaps enz. het 美洽-containergebied vermijden.",
  "scene": "Chat werd onklikbaar na het toevoegen van een heatmap-plugin → de heatmap-overlay lag boven de chat; pas de stapeling aan of sluit het gebied uit en het is terug."
 },
 "SPA路由": {
  "cat": "Framework-integratie",
  "name": "Widget verdwijnt na een SPA-routewissel",
  "alias": "spa vue react next angular single page routewissel verdwijnt history pushstate opnieuw mounten SPA路由",
  "trigger": "Chat op de homepagina, weg nadat de front-route elders navigeert",
  "official": "Gebruik voor single-page apps (SPA) de route-hooks van het framework om de 美洽-widget te laden / initialiseren zodat hij bij de front-routing past.",
  "cause": "Een SPA wisselt weergaven via front-routing, vernietigt / herbouwt het DOM, maar meiqia.js injecteert standaard eenmaal bij de eerste lading en wordt niet vanzelf herbouwd bij een routewissel, dus «wissel van pagina, chat weg».",
  "fix": "Gebruik _MEIQIA('manualInit') om auto-init te stoppen en roep _MEIQIA('init') aan in een route-hook (React useEffect / Vue mounted / router afterEach) om op verzoek te re-mounten; vermijd meerdere instanties te initialiseren.",
  "scene": "Een Next.js-site heeft chat op de homepagina, niet op de detailpagina → voeg _MEIQIA('init') toe in de route-hook om bij elke navigatie te re-mounten."
 },
 "手动初始化": {
  "cat": "Framework-integratie",
  "name": "Handmatige init nodig (manualInit / init)",
  "alias": "manualinit init handmatige initialisatie auto init _meiqia api timing geladen 手动初始化",
  "trigger": "Je wilt regelen wanneer 美洽 initialiseert, of de auto-init-timing is verkeerd",
  "official": "Voeg _MEIQIA('manualInit') toe na de 美洽-embedcode om auto-init na de download te stoppen; roep _MEIQIA('init') aan om handmatig te initialiseren wanneer nodig.",
  "cause": "Standaard initialiseert 美洽 direct na de download; wanneer je eerst de container gereed / klantgegevens doorgegeven / de route stabiel nodig hebt, is die timing «te vroeg» — schakel over op handmatige init om de volgorde te regelen.",
  "fix": "Voeg _MEIQIA('manualInit') toe na de code; roep _MEIQIA('init') aan zodra de voorwaarden klaar zijn (DOM / sessie / route); roep data-API's in volgorde binnen de init-timing aan volgens de doc.",
  "scene": "Je wilt de chat na login met de gebruikersidentiteit initialiseren → manualInit + init in de login-callback, een eerste anonieme verbinding vermijdend."
 },
 "entId错误": {
  "cat": "Config / autorisatie",
  "name": "entId komt niet overeen / agents krijgen geen chats",
  "alias": "entid bedrijfs-id uniek komt niet overeen geen chats id-opzoeken verkeerde code 不一致",
  "trigger": "Het chatvenster opent, maar agents krijgen geen bezoekersberichten",
  "official": "Het getal na entId in de code is de unieke id van je bedrijf; bij verschil met de workbench kunnen agents de chat niet bedienen — vind de bedrijfs-ID in Instellingen - Team - ID-opzoeken.",
  "cause": "entId bindt de snippet aan een specifiek bedrijfsaccount. Met andermans / een andere-omgeving-code, of door elkaar gehaalde accounts, laadt de front het venster maar gaan berichten naar «een ander bedrijf», dus deze workbench krijgt er geen — het klassieke «ziet er goed uit maar ontvangt niets».",
  "fix": "Vergelijk de bedrijfs-ID in Instellingen - Team - ID-opzoeken met het entId in de paginacode; bij verschil vervang door de nieuwste code gekopieerd uit de console van dit bedrijf.",
  "scene": "Vergeten de testaccountcode te vervangen door de productiecode → bezoekers kunnen chatten maar de productie-workbench ontvangt niets; corrigeer het entId en het verbindt."
 },
 "域名未授权": {
  "cat": "Config / autorisatie",
  "name": "Sitedomein niet geautoriseerd in de console",
  "alias": "domein niet geautoriseerd integratiesite toevoegen whitelist productiedomein testdomein sitelijst 域名未授权",
  "trigger": "Werkt op test / lokaal, maar het productiedomein laadt / bedient niet",
  "official": "De 美洽-console laat «Integratiesite toevoegen» toe, elk met eigen config; een nieuwe site moet in de console worden geconfigureerd voordat hij goed integreert.",
  "cause": "美洽 beheert meerdere sites als «integratiesites»; het domein moet in de console worden geregistreerd / geautoriseerd om herkend te worden. Een nieuw, niet-toegevoegd productiedomein wordt mogelijk niet geaccepteerd of op de verkeerde config gemapt.",
  "fix": "Ga naar Instellingen - webwidget / integratiesites, «Integratiesite toevoegen» voor het productiedomein en gebruik zijn dedicated code; controleer de spelling van domein / subdomein.",
  "scene": "Op localhost afgesteld, de chat bedient niet op de live www → voeg het productiedomein toe als integratiesite in de console."
 },
 "子渠道": {
  "cat": "Config / autorisatie",
  "name": "Multi-site / subkanaal (probe) door elkaar",
  "alias": "subkanaal probe multi-site business lines onafhankelijke config door elkaar routing ingangen 子渠道",
  "trigger": "Meerdere sites / business lines delen één snippet en routing / automatische berichten raken vermengd",
  "official": "美洽 ondersteunt het deployen van verschillende widgets en chatlinks per site (subkanalen / probe); naast de standaardsite kun je er meer toevoegen, elk met eigen config.",
  "cause": "Verschillende business lines hebben verschillende agentgroepen / automatische berichten nodig, maar als elke site de ene standaard-snippet deelt, zijn bronnen niet te onderscheiden en raken configs door elkaar. Subkanalen (probe) zijn ontworpen voor «één bedrijf, meerdere ingangen, gerout».",
  "fix": "Onder Instellingen - webwidget, «Integratiesite toevoegen» om per site een apart subkanaal te maken, elk met eigen code, uiterlijk en automatische berichten.",
  "scene": "De hoofdsite en een campagnepagina delen één snippet en je kunt de bron niet onderscheiden → maak een apart subkanaal voor de campagne."
 },
 "移动端不显示": {
  "cat": "Mobiel / SDK",
  "name": "Mobiele webchat verschijnt niet / vereist aparte deploy",
  "alias": "mobiel telefoon h5 mobiele site verschijnt niet aparte deploy zelfde code aanpassen wap 移动端",
  "trigger": "De pc-site heeft chat, de mobiele / H5-site niet",
  "official": "De widgetcode past zich aan de site aan; mobiel / pc gebruiken dezelfde snippet maar moeten apart worden gedeployed.",
  "cause": "Veel teams hebben aparte pc- en mobiele pagina's / templates en plakten de code alleen in het pc-template. De snippet is hetzelfde en past zich aan, maar de «plak»-stap moet ook in het mobiele template gebeuren; weggelaten, dan heeft mobiel geen chat.",
  "fix": "Deploy dezelfde 美洽-code vóór </body> ook in het mobiele / H5-template; controleer via F12 dat meiqia.js op beide laadt; geef mobiel een eigen uiterlijk indien nodig.",
  "scene": "De chat staat altijd op de pc-site maar niet op de telefoonsite → het mobiele template heeft geen code; voeg toe en hij verschijnt."
 },
 "SDK接入": {
  "cat": "Mobiel / SDK",
  "name": "Native app-SDK-integratie / AppKey",
  "alias": "sdk app native appkey app-config toevoegen integreren ios android ontwikkelen inbedden SDK接入",
  "trigger": "Je wilt chat in je eigen app, niet op het web",
  "official": "In-app-integratie vereist een AppKey uit de 美洽-workbench (Instellingen - Integratie - SDK, «APP-config toevoegen»), en ontwikkelaars integreren de iOS- / Android-SDK volgens de officiële doc en demo.",
  "cause": "Een app gebruikt de native SDK, niet web-JS: eerst «APP-config toevoegen» voor een AppKey, dan de SDK per platform integreren voor de chat-UI, ongelezen, push enz. — een totaal ander pad dan de webwidget.",
  "fix": "Voeg APP-config toe in de console voor een AppKey; integreer de SDK volgens de iOS- / Android-demo met de AppKey; controleer chatnavigatie / ongelezen / push.",
  "scene": "Je wilt live chat in je eigen app → ga voor SDK + AppKey, stop het web-JS niet in een WebView."
 },
 "SDK推送": {
  "cat": "Mobiel / SDK",
  "name": "SDK-berichtpush komt niet aan",
  "alias": "push komt niet geen push eigen push-server app verlaten offlinebericht melding SDK推送",
  "trigger": "Na SDK-integratie krijgen gebruikers geen push zodra ze de app verlaten",
  "official": "美洽-SDK-push heeft twee modi: bij «geen push» bereiken agentberichten alleen de app (open hem om te ontvangen); met een «eigen push-server» krijgen gebruikers push op de telefoon zelfs na het verlaten van de app.",
  "cause": "Ontbrekende «offline-push» betekent meestal dat de push-modus «geen push» is, of er geen eigen push-server / push-certificaten per platform zijn. Het pad is «美洽 → app-server → telefoon van de gebruiker»; een ontbrekende schakel laat alleen in-app-ontvangst.",
  "fix": "Kies in de APP-config «eigen push-server» en stel de push van elk platform in (APNs / fabrikantkanalen); controleer offline-push volgens de doc; onderscheid «in-app-bericht» van «systeempush».",
  "scene": "In de test komt het aan met open app maar niet na vergrendelen / verlaten → push stond op «geen push»; schakel over op een eigen push-server voor offline-ontvangst."
 },
 "自定义按钮": {
  "cat": "API-aanroepen",
  "name": "Standaardknop verbergen / eigen ingang",
  "alias": "withoutbtn showpanel knop verbergen eigen knop chat openen contact ingang 自定义按钮",
  "trigger": "Je wilt je eigen «Contact»-knop en de ronde native 美洽 verbergen",
  "official": "Roep _MEIQIA('withoutBtn') aan om de native 美洽-knop niet te tonen; na een geslaagde init roep _MEIQIA('showPanel') aan om de chat te openen.",
  "cause": "Standaard wordt de native zwevende knop gerenderd; voor je eigen ingang moet je vóór / tijdens init «geen native knop» declareren en «chat openen» aan je element koppelen — een kwestie van API-timing, geen «kapotte knop».",
  "fix": "Roep _MEIQIA('withoutBtn') aan vóór / tijdens embed / init; koppel _MEIQIA('showPanel') aan de onclick van je knop; zorg dat ze draaien na een geslaagde widget-init.",
  "scene": "De pagina heeft al een zichtbare «Chat nu»-knop → withoutBtn verbergt de native, en een klik op de jouwe roept showPanel aan om het venster te openen."
 },
 "传递顾客信息": {
  "cat": "API-aanroepen",
  "name": "Klantgegevens doorgeven / synchroniseren heeft geen effect",
  "alias": "klantgegevens doorgeven identiteit synchroniseren metadata klantdata geen effect timing init eigen info 传递顾客信息",
  "trigger": "Je wilt naam / niveau / bestelling van een ingelogde gebruiker aan agents doorgeven, maar ze zien het niet",
  "official": "De 美洽-webwidget biedt de API's «klantgegevens doorgeven», «klantidentiteit synchroniseren» en «eigen event-info toevoegen» om bezoekersdata in de chat te brengen.",
  "cause": "Deze API's moeten binnen de juiste init-timing worden aangeroepen: na een geslaagde init (of binnen de manualInit + init-timing). Te vroeg / laat, of verkeerde veldformaten, en het is «ingesteld maar zonder effect».",
  "fix": "Roep de doorgeef- / synchroniseer-API's aan binnen de geslaagde init-timing volgens de doc; controleer veldnamen en -formaten; in een SPA opnieuw doorgeven na elke init.",
  "scene": "Je geeft de gebruikersnaam door aan agents op een ingelogde site maar het toont anoniem → de aanroep liep vóór de init; verplaats hem naar de init-geslaagd-callback en hij wordt doorgegeven."
 }
};
window.LABELS = {"miss": "Niet vermeld — probeer een ander trefwoord (not showing / adblock / entId / SPA / sdk) of zie de volledige tabel hieronder.", "codeword": ""};
window.FIELDS = [["trigger", "Wanneer het optreedt"], ["official", "L1-gedrag / officiële positionering"], ["cause", "L2-grondoorzaak"], ["fix", "Hoe op te lossen"], ["scene", "Echt geval"]];
window.THEAD = ["Symptoom", "Groep", "L1-gedrag / officiële positionering", "L2-grondoorzaak"];
