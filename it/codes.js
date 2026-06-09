window.CODES = {
 "窗口不显示": {
  "cat": "Errore di caricamento",
  "name": "La finestra / bolla di chat non si mostra affatto",
  "alias": "non si mostra widget invisibile niente bolla not showing 不显示",
  "trigger": "Dopo aver incollato il codice non c'è bolla / pulsante di chat in basso a destra",
  "official": "Il widget web di 美洽 carica una finestra di chat fluttuante con un singolo snippet JS incollato; conferma che il codice sia ben incorporato e il sito di integrazione configurato nella console.",
  "cause": "Il widget è meiqia.js iniettato nel DOM dopo un caricamento asincrono, quindi «niente del tutto» di solito significa «lo script non si è mai caricato»: posizione errata, bloccato da adblock / cache, o dominio / entId non corrispondenti, quindi l'iniezione non è mai avvenuta.",
  "fix": "F12 → Network, cerca meiqia.js: nessuna richiesta → codice senza effetto (controlla la posizione / svuota la cache); richiesta ma non-200 → bloccato o problema di percorso; tutto a posto ma ancora nascosto → controlla entId / autorizzazione dominio e i gruppi sotto.",
  "scene": "Codice incollato, ricarichi, niente bolla, e F12 non mostra alcuna richiesta meiqia.js → il codice non è nel template live / è in cache; svuota la cache e ridistribuisci."
 },
 "按钮不显示": {
  "cat": "Problemi di visualizzazione",
  "name": "Script caricato ma manca il pulsante di chat",
  "alias": "niente pulsante pulsante mancante button missing console ok 按钮不显示",
  "trigger": "F12 mostra meiqia.js in 200, ma il pulsante di chat semplicemente non è nella pagina",
  "official": "Il codice del widget si adatta al sito e mostra un pulsante di chat; se la visualizzazione fallisce, controlla se è nascosto dagli stili o se l'inizializzazione è stata interrotta.",
  "cause": "Se lo script carica ma manca il pulsante, di solito è un problema di «livello di visualizzazione»: il CSS globale sovrascrive la posizione del pulsante / mette display:none, lo z-index perde, o un altro elemento fisso lo copre; un altro errore JS può anche interrompere l'inizializzazione.",
  "fix": "F12 → Elements, trova il contenitore di 美洽 — presente, nascosto o fuori schermo?; disabilita temporaneamente CSS / script propri per ritestare; controlla la console per un errore che ha interrotto l'esecuzione.",
  "scene": "meiqia.js 200, console typeof _MEIQIA è function, ma niente pulsante → il CSS del tema lo ha posizionato fuori schermo; correggi stile / posizione e appare."
 },
 "广告拦截": {
  "cat": "Errore di caricamento",
  "name": "meiqia.js bloccato da un'estensione adblock",
  "alias": "adblock ublock adguard err_blocked_by_client bloccato whitelist estensione 广告拦截",
  "trigger": "Console: meiqia.js net::ERR_BLOCKED_BY_CLIENT, e la finestra di chat non appare",
  "official": "Lo script di chat di 美洽 proviene da un dominio di terze parti; se è installata un'estensione di blocco, può trattarlo come pubblicità / tracker e impedire il caricamento — disattiva il blocco o whitelist.",
  "cause": "ERR_BLOCKED_BY_CLIENT significa che un'estensione del browser (AdBlock / uBlock / AdGuard) ha bloccato la richiesta con le sue liste di filtri. Lo script di 美洽 è «terze parti fuori dominio + comunicazione in tempo reale», che queste regole spesso scambiano per pubblicità / tracker, causando un falso fallimento «console a posto, lato utente assente».",
  "fix": "Ritesta in incognito o con l'adblock off — se appare, il blocco era la causa; chiedi agli utenti di whitelist il sito; il front può caricare lo script di chat in modo ritardato / condizionale per aggirare alcune regole automatiche.",
  "scene": "Si mostra bene sul tuo computer, alcuni utenti segnalano niente chat → hanno un adblock; la console mostra chiaramente ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Errore di caricamento",
  "name": "meiqia.js 404 / stato errato / contenuto misto",
  "alias": "404 stato non caricato cache cdn https contenuto misto certificato 脚本未加载",
  "trigger": "meiqia.js è non-200 in F12 → Network (404 / bloccato / pending)",
  "official": "Dopo il deploy, cerca meiqia.js nel pannello Network; uno stato 200 significa che lo script è ben posizionato e caricato.",
  "cause": "Cause comuni di non-200: codice trattenuto da cache pagina / CDN (non aggiornata dopo la pubblicazione), caricamento su pagina HTTP / catena di certificati incompleta che scatena il blocco contenuto misto, o codice rotto / copiato parzialmente. Se questo passo fallisce, iniezione e connessione non avvengono mai.",
  "fix": "Svuota la cache CDN / browser (o incognito) dopo la pubblicazione; assicura HTTPS completo con catena di certificati integra e senza contenuto misto; verifica che il codice copiato sia completo e non escaped.",
  "scene": "Modificato il template ma il sito live serve ancora il vecchio codice di chat → la cache CDN non è stata aggiornata; un refresh forzato / svuotamento cache porta meiqia.js a 200."
 },
 "代码位置": {
  "cat": "Errore di caricamento",
  "name": "Codice mal posizionato (blocco in head / senza effetto)",
  "alias": "posizione dove mettere head body fondo blocco incorporare tag di chiusura 代码位置",
  "trigger": "Codice in <head> o dentro uno script async; pagina bianca / chat intermittente",
  "official": "美洽 raccomanda di incollare il codice in fondo alla pagina, prima di </body>; il widget gira dopo il caricamento del contenuto principale.",
  "cause": "Il widget deve iniettare il contenitore dopo che il DOM è pronto. In <head> blocca il render (schermo bianco prima su rete lenta) o gira prima che il DOM sia pronto e fallisce; in qualche scope async / di modulo anche l'ordine di caricamento può andare storto.",
  "fix": "Metti il JS di 美洽 nel footer comune di ogni pagina, prima di </body>; per le SPA vedi la voce «rotta SPA» e usa manualInit; assicurati che un bundler non lo elimini con il tree-shaking.",
  "scene": "Messo il codice in <head> per comodità; su rete lenta gli utenti vedono prima uno schermo bianco e la chat compare tardi → spostalo prima di </body>."
 },
 "样式错乱": {
  "cat": "Problemi di visualizzazione",
  "name": "Stile della finestra / pulsante di chat rotto",
  "alias": "stile rotto css conflitto deformato disallineato tema sovrascrive 样式错乱",
  "trigger": "La finestra / pulsante di chat appare ma con stile rotto / disallineato",
  "official": "Il widget inietta i propri stili e si adatta al sito; conflitti con stili globali possono causare anomalie visive.",
  "cause": "Lo script di 美洽 inietta CSS a runtime; se gli stili globali (selettori universali / regole ad alta priorità / reset) sovrascrivono prima le sue classi, posizione, impilamento e font si rompono — un effetto collaterale di «iniezione dinamica + condivisione di un unico spazio di stile del documento».",
  "fix": "F12 per vedere quale regola del sito sovrascrive il contenitore di 美洽; restringi gli stili globali / riduci l'impatto sulle classi generiche; se serve, chiedi a 美洽 di regolare l'impilamento del contenitore.",
  "scene": "Il sito usa una regola globale tipo * { position:... } e il pulsante è spinto al centro → restringi il selettore globale e torna."
 },
 "按钮跑屏外": {
  "cat": "Problemi di visualizzazione",
  "name": "Pulsante fuori schermo / coperto",
  "alias": "fuori schermo invisibile coperto z-index impilamento posizione fissa spostato 跑屏外",
  "trigger": "Il pulsante è nel DOM ma visivamente assente / coperto da altri elementi",
  "official": "Il pulsante del widget appare come fluttuante a posizione fissa; se coperto da altri elementi fissi, regola l'impilamento o la posizione.",
  "cause": "Altri elementi position:fixed del sito (torna su, pubblicità fluttuanti, una barra di supporto propria) con z-index maggiore coprono il pulsante di 美洽, o il tema calcola male le sue coordinate, lasciandolo «fuori schermo / coperto».",
  "fix": "Seleziona il contenitore di 美洽 in F12 per vedere coordinate / z-index reali; alzalo o abbassa lo z-index dell'elemento che copre; evita di impilare più fluttuanti fissi in un angolo.",
  "scene": "Un «torna su» e la chat sono entrambi in basso a destra e si coprono → sposta le posizioni o regola lo z-index e si vedono entrambi."
 },
 "插件冲突": {
  "cat": "Problemi di visualizzazione",
  "name": "Conflitto DOM con plugin / analytics di terze parti",
  "alias": "conflitto plugin heatmap analytics seo conversione terze parti dom overlay impilamento interferenza 插件冲突",
  "trigger": "Dopo aver aggiunto un plugin di heatmap / analytics / pubblicità, la chat non appare / si comporta in modo strano",
  "official": "Altri script della pagina che modificano il DOM o intercettano richieste possono influire sul caricamento e la visualizzazione normali del widget.",
  "cause": "Gli script di heatmap / analytics / conversione riscrivono il DOM, iniettano overlay o intercettano richieste; poiché loro e 美洽 iniettano nello stesso documento, impilamento / eventi interferiscono e il contenitore di 美洽 viene coperto o il suo init interrotto.",
  "fix": "Disabilita i plugin sospetti uno a uno per localizzare il conflitto; regola ordine di caricamento / impilamento del contenitore; fai sì che le heatmap evitino l'area del contenitore di 美洽.",
  "scene": "La chat non era più cliccabile dopo aver aggiunto un plugin di heatmap → l'overlay della heatmap stava sopra la chat; regola l'impilamento o escludi l'area e torna."
 },
 "SPA路由": {
  "cat": "Integrazione framework",
  "name": "Il widget sparisce dopo un cambio rotta SPA",
  "alias": "spa vue react next angular pagina singola cambio rotta sparisce history pushstate rimontare SPA路由",
  "trigger": "Chat nella home, sparita dopo che la rotta del front naviga altrove",
  "official": "Per le app a pagina singola (SPA), usa gli hook di rotta del framework per caricare / inizializzare il widget di 美洽 così da adattarsi al routing del front.",
  "cause": "Una SPA cambia viste via routing del front, distruggendo / ricreando il DOM, ma meiqia.js inietta una volta al primo caricamento di default e non viene ricreato da solo al cambio rotta, quindi «cambi pagina, la chat sparisce».",
  "fix": "Usa _MEIQIA('manualInit') per fermare l'auto-init e chiama _MEIQIA('init') in un hook di rotta (React useEffect / Vue mounted / router afterEach) per rimontare su richiesta; evita di inizializzare più istanze.",
  "scene": "Un sito Next.js ha la chat nella home, non nella pagina di dettaglio → aggiungi _MEIQIA('init') nell'hook di rotta per rimontare a ogni navigazione."
 },
 "手动初始化": {
  "cat": "Integrazione framework",
  "name": "Init manuale necessario (manualInit / init)",
  "alias": "manualinit init inizializzazione manuale auto init _meiqia api tempistica caricato 手动初始化",
  "trigger": "Vuoi controllare quando 美洽 si inizializza, o la tempistica dell'auto-init è errata",
  "official": "Aggiungi _MEIQIA('manualInit') dopo il codice di embed di 美洽 per fermare l'auto-init dopo il download; chiama _MEIQIA('init') per inizializzare manualmente quando serve.",
  "cause": "Di default 美洽 si auto-inizializza subito dopo il download; quando ti serve il contenitore pronto / i dati cliente passati / la rotta stabile prima, quella tempistica è «troppo presto» — passa all'init manuale per controllare la sequenza.",
  "fix": "Aggiungi _MEIQIA('manualInit') dopo il codice; chiama _MEIQIA('init') quando le condizioni sono pronte (DOM / sessione / rotta); chiama le API dati in ordine entro il tempo di init secondo la doc.",
  "scene": "Vuoi inizializzare la chat con l'identità dell'utente dopo il login → manualInit + init nel callback di login, evitando una prima connessione anonima."
 },
 "entId错误": {
  "cat": "Config / autorizzazione",
  "name": "entId non corrisponde / gli agenti non ricevono chat",
  "alias": "entid id azienda univoco non corrisponde niente chat ricerca id codice errato 不一致",
  "trigger": "La finestra di chat si apre, ma gli agenti non ricevono messaggi dei visitatori",
  "official": "Il numero dopo entId nel codice è l'id univoco della tua azienda; se non corrisponde alla workbench, gli agenti non possono gestire la chat — trova l'ID azienda in Impostazioni - Team - ricerca ID.",
  "cause": "entId lega lo snippet a uno specifico account aziendale. Con codice di altri / di un altro ambiente, o account confusi, il front carica la finestra ma i messaggi vanno a «un'altra azienda», quindi questa workbench non ne riceve nessuno — il classico «sembra a posto ma non riceve nulla».",
  "fix": "Confronta l'ID azienda in Impostazioni - Team - ricerca ID con l'entId nel codice della pagina; se non corrisponde, sostituisci con il codice più recente copiato dalla console di questa azienda.",
  "scene": "Dimenticato di sostituire il codice dell'account di test con quello di produzione → i visitatori possono chattare ma la workbench di produzione non riceve nulla; correggi l'entId e si collega."
 },
 "域名未授权": {
  "cat": "Config / autorizzazione",
  "name": "Dominio del sito non autorizzato nella console",
  "alias": "dominio non autorizzato aggiungi sito di integrazione whitelist dominio produzione dominio test lista siti 域名未授权",
  "trigger": "Funziona in test / locale, ma il dominio di produzione non carica / non gestisce",
  "official": "La console di 美洽 permette «Aggiungi sito di integrazione», ciascuno con la sua config; un sito nuovo va configurato nella console prima di integrarsi bene.",
  "cause": "美洽 gestisce più siti come «siti di integrazione»; il dominio va registrato / autorizzato nella console per essere riconosciuto. Un nuovo dominio di produzione non aggiunto può non essere accettato o mappato alla config sbagliata.",
  "fix": "Vai in Impostazioni - widget web / siti di integrazione, «Aggiungi sito di integrazione» per il dominio di produzione e usa il suo codice dedicato; verifica l'ortografia di dominio / sottodominio.",
  "scene": "Sistemato su localhost, la chat non gestisce sul www live → aggiungi il dominio di produzione come sito di integrazione nella console."
 },
 "子渠道": {
  "cat": "Config / autorizzazione",
  "name": "Multi-sito / sotto-canale (sonda) incrociato",
  "alias": "sotto-canale sonda multi-sito linee di business config indipendente incrociato routing ingressi 子渠道",
  "trigger": "Più siti / linee di business condividono uno snippet e routing / messaggi automatici si mischiano",
  "official": "美洽 supporta il deploy di widget e link di chat diversi per sito (sotto-canali / sonda); oltre al sito predefinito puoi aggiungerne altri, ciascuno con la sua config.",
  "cause": "Linee di business diverse richiedono gruppi di agenti / messaggi automatici diversi, ma se ogni sito condivide l'unico snippet predefinito, le origini non si distinguono e le config si incrociano. I sotto-canali (sonda) sono pensati per «un'azienda, più ingressi, instradati».",
  "fix": "In Impostazioni - widget web, «Aggiungi sito di integrazione» per creare un sotto-canale separato per sito, ciascuno con il suo codice, aspetto e messaggi automatici.",
  "scene": "Il sito principale e una pagina campagna condividono uno snippet e non distingui l'origine → crea un sotto-canale a parte per la campagna."
 },
 "移动端不显示": {
  "cat": "Mobile / SDK",
  "name": "Chat web mobile non si mostra / richiede deploy a parte",
  "alias": "mobile telefono h5 sito mobile non si mostra deploy a parte stesso codice adattare wap 移动端",
  "trigger": "Il sito PC ha la chat, il sito mobile / H5 no",
  "official": "Il codice del widget si adatta al sito; mobile / PC usano lo stesso snippet ma vanno distribuiti separatamente.",
  "cause": "Molti team hanno pagine / template PC e mobile separati e hanno incollato il codice solo nel template PC. Lo snippet è lo stesso e si autoadatta, ma il passo di «incollare» va fatto anche nel template mobile; omesso, il mobile non ha chat.",
  "fix": "Distribuisci lo stesso codice di 美洽 prima di </body> anche nel template mobile / H5; verifica via F12 che meiqia.js carichi su entrambi; dai al mobile un aspetto proprio se serve.",
  "scene": "La chat è sempre sul sito PC ma non sul sito telefono → il template mobile non ha codice; aggiungilo e appare."
 },
 "SDK接入": {
  "cat": "Mobile / SDK",
  "name": "Integrazione dell'SDK nativo di app / AppKey",
  "alias": "sdk app nativo appkey aggiungi config app integrare ios android sviluppare incorporare SDK接入",
  "trigger": "Vuoi la chat dentro la tua app, non sul web",
  "official": "L'integrazione in-app richiede un AppKey dalla workbench di 美洽 (Impostazioni - Integrazione - SDK, «Aggiungi config APP»), e gli sviluppatori integrano l'SDK iOS / Android secondo la doc e il demo ufficiali.",
  "cause": "Un'app usa l'SDK nativo, non JS web: prima «Aggiungi config APP» per un AppKey, poi integra l'SDK per piattaforma per la UI di chat, non letti, push, ecc. — un percorso del tutto diverso dal widget web.",
  "fix": "Aggiungi config APP nella console per un AppKey; integra l'SDK secondo il demo iOS / Android con l'AppKey; verifica navigazione chat / non letti / push.",
  "scene": "Vuoi chat dal vivo nella tua app → vai con SDK + AppKey, non infilare il JS web in una WebView."
 },
 "SDK推送": {
  "cat": "Mobile / SDK",
  "name": "Il push di messaggi dell'SDK non arriva",
  "alias": "push non arriva niente push server push personalizzato uscire dall'app messaggio offline notifica SDK推送",
  "trigger": "Dopo l'integrazione SDK, gli utenti non ricevono push quando lasciano l'app",
  "official": "Il push dell'SDK di 美洽 ha due modalità: con «niente push», i messaggi dell'agente arrivano solo dentro l'app (aprila per ricevere); con un «server push personalizzato», gli utenti ricevono push sul telefono anche dopo aver lasciato l'app.",
  "cause": "La mancanza di «push offline» di solito significa che la modalità push è «niente push», o manca il server push personalizzato / i certificati push per piattaforma. Il percorso è «美洽 → server dell'app → telefono dell'utente»; un anello mancante lascia solo la ricezione in-app.",
  "fix": "Nella config APP, scegli «server push personalizzato» e configura il push di ogni piattaforma (APNs / canali del produttore); verifica il push offline secondo la doc; distingui «messaggio in-app» da «push di sistema».",
  "scene": "In test arriva con l'app aperta ma non dopo blocco / uscita → il push era su «niente push»; passa a un server push personalizzato per la ricezione offline."
 },
 "自定义按钮": {
  "cat": "Chiamate API",
  "name": "Nascondere il pulsante predefinito / ingresso proprio",
  "alias": "withoutbtn showpanel nascondi pulsante pulsante proprio apri chat contatta ingresso 自定义按钮",
  "trigger": "Vuoi il tuo pulsante «Contatta» e nascondere il rotondo nativo di 美洽",
  "official": "Chiama _MEIQIA('withoutBtn') per non mostrare il pulsante nativo di 美洽; dopo un init riuscito, chiama _MEIQIA('showPanel') per aprire la chat.",
  "cause": "Di default viene renderizzato il pulsante fluttuante nativo; per usare il tuo ingresso devi dichiarare «nessun pulsante nativo» prima / durante l'init e legare «apri chat» al tuo elemento — una questione di tempistica API, non un «pulsante rotto».",
  "fix": "Chiama _MEIQIA('withoutBtn') prima / durante embed / init; lega _MEIQIA('showPanel') all'onclick del tuo pulsante; assicurati che girino dopo un init riuscito del widget.",
  "scene": "La pagina ha già un pulsante «Chatta ora» visibile → withoutBtn nasconde il nativo, e un clic sul tuo chiama showPanel per aprire la finestra."
 },
 "传递顾客信息": {
  "cat": "Chiamate API",
  "name": "Passare / sincronizzare i dati cliente senza effetto",
  "alias": "passare dati cliente sincronizzare identità metadata dati cliente senza effetto tempistica init info personalizzata 传递顾客信息",
  "trigger": "Vuoi passare nome / livello / ordine di un utente loggato agli agenti, ma non lo vedono",
  "official": "Il widget web di 美洽 offre le API «passare dati cliente», «sincronizzare identità cliente» e «aggiungere info evento personalizzata» per portare i dati del visitatore nella chat.",
  "cause": "Queste API vanno chiamate entro la tempistica di init corretta: dopo un init riuscito (o nella tempistica manualInit + init). Troppo presto / tardi, o formati di campo errati, e resta «impostato ma senza effetto».",
  "fix": "Chiama le API di passaggio / sincronizzazione dati entro la tempistica di init riuscito secondo la doc; verifica nomi e formati dei campi; in una SPA, ripassa dopo ogni init.",
  "scene": "Passi il nome utente agli agenti su un sito loggato ma appare anonimo → la chiamata è girata prima dell'init; spostala nel callback di init riuscito e viene trasmesso."
 }
};
window.LABELS = {"miss": "Non elencato — prova un'altra parola chiave (not showing / adblock / entId / SPA / sdk) o vedi la tabella completa sotto.", "codeword": ""};
window.FIELDS = [["trigger", "Quando compare"], ["official", "Comportamento L1 / posizionamento ufficiale"], ["cause", "Causa radice L2"], ["fix", "Come risolvere"], ["scene", "Caso reale"]];
window.THEAD = ["Sintomo", "Gruppo", "Comportamento L1 / posizionamento ufficiale", "Causa radice L2"];
