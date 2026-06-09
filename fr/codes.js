window.CODES = {
 "窗口不显示": {
  "cat": "Échec de chargement",
  "name": "La fenêtre / bulle de chat ne s'affiche pas du tout",
  "alias": "ne s'affiche pas widget invisible pas de bulle not showing 不显示",
  "trigger": "Après avoir collé le code, aucune bulle / bouton de chat en bas à droite",
  "official": "Le widget web 美洽 charge une fenêtre de chat flottante avec un seul snippet JS collé ; confirmez que le code est bien intégré et le site d'intégration configuré dans la console.",
  "cause": "Le widget est meiqia.js injecté dans le DOM après un chargement asynchrone, donc « rien du tout » signifie souvent « le script n'a jamais chargé » : mauvais emplacement, bloqué par adblock / cache, ou domaine / entId incohérents, donc l'injection n'a jamais eu lieu.",
  "fix": "F12 → Network, cherchez meiqia.js : pas de requête → code sans effet (vérifiez l'emplacement / videz le cache) ; requête mais non-200 → bloqué ou problème de chemin ; tout est bon mais toujours masqué → vérifiez entId / autorisation de domaine et les groupes ci-dessous.",
  "scene": "Code collé, rechargé, pas de bulle, et F12 n'affiche aucune requête meiqia.js → le code n'est pas dans le template live / est en cache ; videz le cache et redéployez."
 },
 "按钮不显示": {
  "cat": "Problèmes d'affichage",
  "name": "Script chargé mais bouton de chat manquant",
  "alias": "pas de bouton bouton manquant button missing console ok 按钮不显示",
  "trigger": "F12 montre meiqia.js en 200, mais le bouton de chat n'est tout simplement pas sur la page",
  "official": "Le code du widget s'adapte au site et affiche un bouton de chat ; si l'affichage échoue, vérifiez s'il est masqué par des styles ou si l'initialisation a été interrompue.",
  "cause": "Si le script charge mais le bouton manque, c'est souvent un problème de « couche d'affichage » : le CSS global écrase la position du bouton / met display:none, le z-index perd, ou un autre élément fixe le recouvre ; une autre erreur JS peut aussi interrompre l'initialisation.",
  "fix": "F12 → Elements, trouvez le conteneur 美洽 — présent, masqué ou hors écran ?; désactivez temporairement le CSS / autres scripts perso pour retester ; vérifiez la console pour une erreur ayant interrompu l'exécution.",
  "scene": "meiqia.js 200, console typeof _MEIQIA est function, mais pas de bouton → le CSS du thème l'a positionné hors écran ; corrigez le style / la position et il apparaît."
 },
 "广告拦截": {
  "cat": "Échec de chargement",
  "name": "meiqia.js bloqué par une extension d'adblock",
  "alias": "adblock ublock adguard err_blocked_by_client bloqué liste blanche extension 广告拦截",
  "trigger": "Console : meiqia.js net::ERR_BLOCKED_BY_CLIENT, et la fenêtre de chat n'apparaît pas",
  "official": "Le script de chat 美洽 vient d'un domaine tiers ; si une extension de blocage est installée, elle peut le traiter comme pub / traqueur et empêcher le chargement — désactivez le blocage ou ajoutez à la liste blanche.",
  "cause": "ERR_BLOCKED_BY_CLIENT signifie qu'une extension de navigateur (AdBlock / uBlock / AdGuard) a bloqué la requête via ses listes de filtres. Le script 美洽 est « tiers hors domaine + communication temps réel », que ces règles confondent souvent avec pub / traqueur, causant un faux échec « console correcte, côté utilisateur absent ».",
  "fix": "Retestez en navigation privée ou avec l'adblock désactivé — s'il apparaît, le blocage était la cause ; demandez aux utilisateurs d'ajouter le site à la liste blanche ; le frontend peut charger le script en différé / conditionnellement pour contourner certaines règles auto.",
  "scene": "Visible sur votre machine, certains utilisateurs signalent pas de chat → ils ont un adblock ; la console montre clairement ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Échec de chargement",
  "name": "meiqia.js 404 / mauvais statut / contenu mixte",
  "alias": "404 statut non chargé cache cdn https contenu mixte certificat 脚本未加载",
  "trigger": "meiqia.js est non-200 dans F12 → Network (404 / bloqué / pending)",
  "official": "Après déploiement, cherchez meiqia.js dans le panneau Network ; un statut 200 signifie que le script est bien placé et chargé.",
  "cause": "Causes courantes de non-200 : code retenu par le cache page / CDN (non rafraîchi après publication), chargement sur une page HTTP / chaîne de certificat incomplète déclenchant un blocage de contenu mixte, ou code cassé / partiellement copié. Si cette étape échoue, l'injection et la connexion n'ont jamais lieu.",
  "fix": "Videz le cache CDN / navigateur (ou navigation privée) après publication ; assurez un HTTPS complet avec chaîne de certificat intègre et sans contenu mixte ; vérifiez que le code copié est complet et non échappé.",
  "scene": "Template modifié mais le site live sert encore l'ancien code de chat → le cache CDN n'a pas été rafraîchi ; un rechargement forcé / vidage de cache met meiqia.js en 200."
 },
 "代码位置": {
  "cat": "Échec de chargement",
  "name": "Code mal placé (blocage head / sans effet)",
  "alias": "emplacement où mettre head body bas blocage intégrer balise fermante 代码位置",
  "trigger": "Code dans <head> ou dans un script async ; page blanche / chat intermittent",
  "official": "美洽 recommande de coller le code en bas de page, avant </body> ; le widget s'exécute après le chargement du contenu principal.",
  "cause": "Le widget doit injecter son conteneur après que le DOM est prêt. Dans <head> il bloque le rendu (écran blanc d'abord sur réseau lent) ou s'exécute avant que le DOM soit prêt et échoue ; dans certains scopes async / module l'ordre de chargement peut aussi mal tourner.",
  "fix": "Placez le JS 美洽 dans le pied commun de chaque page, avant </body> ; pour les SPA voir l'entrée « route SPA » et utilisez manualInit ; assurez-vous qu'un bundler ne l'élimine pas par tree-shaking.",
  "scene": "Code mis dans <head> par commodité ; sur réseau lent les utilisateurs voient un écran blanc d'abord et le chat arrive tard → déplacez-le avant </body>."
 },
 "样式错乱": {
  "cat": "Problèmes d'affichage",
  "name": "Style cassé de la fenêtre / bouton de chat",
  "alias": "style cassé css conflit déformé décalé thème écrase 样式错乱",
  "trigger": "La fenêtre / bouton de chat apparaît mais avec un style cassé / décalé",
  "official": "Le widget injecte ses propres styles et s'adapte au site ; les conflits avec les styles globaux peuvent causer des anomalies visuelles.",
  "cause": "Le script 美洽 injecte du CSS à l'exécution ; si les styles globaux (sélecteurs universels / règles haute priorité / resets) écrasent ses classes en premier, la position, l'empilement et les polices cassent — un effet de bord de « injection dynamique + partage d'un même espace de style du document ».",
  "fix": "F12 pour voir quelle règle du site écrase le conteneur 美洽 ; restreignez les styles globaux / réduisez leur impact sur les classes génériques ; au besoin, demandez à 美洽 d'ajuster l'empilement du conteneur.",
  "scene": "Le site utilise une règle globale type * { position:... } et le bouton est poussé au centre → restreignez le sélecteur global et c'est revenu."
 },
 "按钮跑屏外": {
  "cat": "Problèmes d'affichage",
  "name": "Bouton hors écran / recouvert",
  "alias": "hors écran invisible recouvert z-index empilement position fixe décalé 跑屏外",
  "trigger": "Le bouton est dans le DOM mais visuellement absent / recouvert par d'autres éléments",
  "official": "Le bouton du widget apparaît en flottant à position fixe ; s'il est recouvert par d'autres éléments fixes, ajustez l'empilement ou la position.",
  "cause": "D'autres éléments position:fixed du site (retour en haut, pub flottante, une barre de support perso) avec un z-index supérieur recouvrent le bouton 美洽, ou le thème calcule mal ses coordonnées, le laissant « hors écran / recouvert ».",
  "fix": "Sélectionnez le conteneur 美洽 dans F12 pour voir les coordonnées / z-index réels ; remontez-le ou baissez le z-index de l'élément qui recouvre ; évitez d'empiler plusieurs flottants fixes dans un coin.",
  "scene": "Un « retour en haut » et le chat sont tous deux en bas à droite et se recouvrent → décalez les positions ou ajustez le z-index et les deux sont visibles."
 },
 "插件冲突": {
  "cat": "Problèmes d'affichage",
  "name": "Conflit de DOM avec plugin / analytics tiers",
  "alias": "conflit plugin heatmap analytics seo conversion tiers dom overlay empilement interférence 插件冲突",
  "trigger": "Après ajout d'un plugin de heatmap / analytics / pub, le chat n'apparaît pas / se comporte bizarrement",
  "official": "D'autres scripts de la page qui modifient le DOM ou interceptent des requêtes peuvent affecter le chargement et l'affichage normaux du widget.",
  "cause": "Les scripts de heatmap / analytics / conversion réécrivent le DOM, injectent des overlays ou interceptent des requêtes ; comme eux et 美洽 injectent dans le même document, l'empilement / les événements interfèrent et le conteneur 美洽 est recouvert ou son init interrompu.",
  "fix": "Désactivez les plugins suspects un par un pour localiser le conflit ; ajustez l'ordre de chargement / l'empilement du conteneur ; faites que les heatmaps évitent la zone du conteneur 美洽.",
  "scene": "Le chat est devenu non cliquable après ajout d'un plugin de heatmap → l'overlay de la heatmap était au-dessus du chat ; ajustez l'empilement ou excluez la zone et c'est revenu."
 },
 "SPA路由": {
  "cat": "Intégration framework",
  "name": "Le widget disparaît après un changement de route SPA",
  "alias": "spa vue react next angular page unique changement de route disparaît history pushstate remonter SPA路由",
  "trigger": "Chat sur la page d'accueil, disparu après navigation vers une autre route du frontend",
  "official": "Pour les apps à page unique (SPA), utilisez les hooks de route du framework pour charger / initialiser le widget 美洽 afin qu'il colle au routage du frontend.",
  "cause": "Une SPA change de vues via le routage du frontend, détruisant / recréant le DOM, mais meiqia.js injecte une fois au premier chargement par défaut et n'est pas recréé seul au changement de route, donc « on change de page, le chat disparaît ».",
  "fix": "Utilisez _MEIQIA('manualInit') pour stopper l'auto-init et appelez _MEIQIA('init') dans un hook de route (React useEffect / Vue mounted / router afterEach) pour remonter à la demande ; évitez d'initialiser plusieurs instances.",
  "scene": "Un site Next.js a un chat sur l'accueil, pas sur la page détail → ajoutez _MEIQIA('init') dans le hook de route pour remonter à chaque navigation."
 },
 "手动初始化": {
  "cat": "Intégration framework",
  "name": "Init manuelle nécessaire (manualInit / init)",
  "alias": "manualinit init initialisation manuelle auto init _meiqia api timing chargé 手动初始化",
  "trigger": "Vous voulez contrôler quand 美洽 s'initialise, ou le timing d'auto-init est mauvais",
  "official": "Ajoutez _MEIQIA('manualInit') après le code d'intégration 美洽 pour stopper l'auto-init après le téléchargement ; appelez _MEIQIA('init') pour initialiser manuellement au besoin.",
  "cause": "Par défaut 美洽 s'auto-initialise juste après le téléchargement ; quand vous avez besoin du conteneur prêt / des infos client transmises / de la route stable d'abord, ce timing est « trop tôt » — passez à l'init manuelle pour contrôler la séquence.",
  "fix": "Ajoutez _MEIQIA('manualInit') après le code ; appelez _MEIQIA('init') une fois les conditions prêtes (DOM / session / route) ; appelez les API de données dans l'ordre dans le timing d'init selon la doc.",
  "scene": "Vous voulez initialiser le chat avec l'identité de l'utilisateur après le login → manualInit + init dans le callback de login, évitant une première connexion anonyme."
 },
 "entId错误": {
  "cat": "Config / autorisation",
  "name": "entId incohérent / les agents ne reçoivent pas de chats",
  "alias": "entid id entreprise unique incohérent pas de chats recherche d'id mauvais code 不一致",
  "trigger": "La fenêtre de chat s'ouvre, mais les agents ne reçoivent pas les messages des visiteurs",
  "official": "Le nombre après entId dans le code est l'id unique de votre entreprise ; s'il ne correspond pas au backoffice, les agents ne peuvent pas traiter le chat — trouvez l'ID d'entreprise dans Paramètres - Équipe - recherche d'ID.",
  "cause": "entId lie le snippet à un compte d'entreprise précis. Avec le code d'autrui / d'un autre environnement, ou des comptes mélangés, le frontend charge la fenêtre mais les messages vont à « une autre entreprise », donc ce backoffice n'en reçoit aucun — le classique « semble correct mais ne reçoit rien ».",
  "fix": "Comparez l'ID d'entreprise dans Paramètres - Équipe - recherche d'ID avec l'entId du code de la page ; en cas d'écart, remplacez par le code le plus récent copié depuis la console de cette entreprise.",
  "scene": "Oublié de remplacer le code du compte de test par celui de production → les visiteurs peuvent discuter mais le backoffice de production ne reçoit rien ; corrigez l'entId et ça connecte."
 },
 "域名未授权": {
  "cat": "Config / autorisation",
  "name": "Domaine du site non autorisé dans la console",
  "alias": "domaine non autorisé ajouter site d'intégration liste blanche domaine production domaine test liste de sites 域名未授权",
  "trigger": "Fonctionne en test / local, mais le domaine de production ne charge / ne traite pas",
  "official": "La console 美洽 permet « Ajouter un site d'intégration », chacun avec sa config ; un nouveau site doit être configuré dans la console avant de s'intégrer correctement.",
  "cause": "美洽 gère plusieurs sites comme « sites d'intégration » ; le domaine doit être enregistré / autorisé dans la console pour être reconnu. Un nouveau domaine de production non ajouté peut ne pas être accepté ou mappé à la mauvaise config.",
  "fix": "Allez dans Paramètres - widget web / sites d'intégration, « Ajouter un site d'intégration » pour le domaine de production et utilisez son code dédié ; vérifiez l'orthographe du domaine / sous-domaine.",
  "scene": "Réglé sur localhost, le chat ne traite pas sur le www live → ajoutez le domaine de production comme site d'intégration dans la console."
 },
 "子渠道": {
  "cat": "Config / autorisation",
  "name": "Multi-site / sous-canal (sonde) croisé",
  "alias": "sous-canal sonde multi-site lignes métier config indépendante croisé routage entrées 子渠道",
  "trigger": "Plusieurs sites / lignes métier partagent un snippet et le routage / messages auto se mélangent",
  "official": "美洽 permet de déployer différents widgets et liens de chat par site (sous-canaux / sonde) ; en plus du site par défaut vous pouvez en ajouter d'autres, chacun avec sa config.",
  "cause": "Différentes lignes métier ont besoin de différents groupes d'agents / messages auto, mais si chaque site partage l'unique snippet par défaut, les sources ne se distinguent pas et les configs se croisent. Les sous-canaux (sonde) sont conçus pour « une entreprise, plusieurs entrées, routées ».",
  "fix": "Dans Paramètres - widget web, « Ajouter un site d'intégration » pour créer un sous-canal séparé par site, chacun avec son code, son apparence et ses messages auto.",
  "scene": "Le site principal et une page de campagne partagent un snippet et vous ne distinguez pas l'origine → créez un sous-canal à part pour la campagne."
 },
 "移动端不显示": {
  "cat": "Mobile / SDK",
  "name": "Chat web mobile ne s'affiche pas / nécessite un déploiement à part",
  "alias": "mobile téléphone h5 site mobile ne s'affiche pas déploiement à part même code adapter wap 移动端",
  "trigger": "Le site PC a un chat, le site mobile / H5 non",
  "official": "Le code du widget s'adapte au site ; mobile / PC utilisent le même snippet mais doivent être déployés séparément.",
  "cause": "Beaucoup d'équipes ont des pages / templates PC et mobile séparés et n'ont collé le code que dans le template PC. Le snippet est le même et s'auto-adapte, mais l'étape « coller » doit aussi se faire dans le template mobile ; omise, le mobile n'a pas de chat.",
  "fix": "Déployez le même code 美洽 avant </body> aussi dans le template mobile / H5 ; vérifiez via F12 que meiqia.js charge sur les deux ; donnez au mobile sa propre apparence au besoin.",
  "scene": "Le chat est toujours sur le site PC mais pas sur le site téléphone → le template mobile n'a pas de code ; ajoutez-le et il apparaît."
 },
 "SDK接入": {
  "cat": "Mobile / SDK",
  "name": "Intégration du SDK natif d'app / AppKey",
  "alias": "sdk app natif appkey ajouter config app intégrer ios android développer intégrer SDK接入",
  "trigger": "Vous voulez le chat dans votre propre app, pas sur le web",
  "official": "L'intégration in-app nécessite un AppKey du backoffice 美洽 (Paramètres - Intégration - SDK, « Ajouter config APP »), et les développeurs intègrent le SDK iOS / Android selon la doc et le démo officiels.",
  "cause": "Une app utilise le SDK natif, pas le JS web : d'abord « Ajouter config APP » pour un AppKey, puis intégrez le SDK par plateforme pour l'UI de chat, les non-lus, le push, etc. — un chemin totalement différent du widget web.",
  "fix": "Ajoutez config APP dans la console pour un AppKey ; intégrez le SDK selon le démo iOS / Android avec l'AppKey ; vérifiez navigation chat / non-lus / push.",
  "scene": "Vous voulez un chat en direct dans votre app → optez pour SDK + AppKey, ne mettez pas le JS web dans une WebView."
 },
 "SDK推送": {
  "cat": "Mobile / SDK",
  "name": "Le push de messages du SDK n'arrive pas",
  "alias": "push n'arrive pas pas de push serveur de push perso quitter app message hors ligne notification SDK推送",
  "trigger": "Après intégration du SDK, les utilisateurs ne reçoivent pas de push en quittant l'app",
  "official": "Le push du SDK 美洽 a deux modes : avec « pas de push », les messages de l'agent n'arrivent que dans l'app (ouvrez-la pour recevoir) ; avec un « serveur de push perso », les utilisateurs reçoivent un push sur le téléphone même après avoir quitté l'app.",
  "cause": "Le « push hors ligne » manquant signifie souvent que le mode de push est « pas de push », ou qu'il manque le serveur de push perso / les certificats de push par plateforme. Le chemin est « 美洽 → serveur de l'app → téléphone de l'utilisateur » ; un maillon manquant ne laisse qu'une réception in-app.",
  "fix": "Dans la config APP, choisissez « serveur de push perso » et configurez le push de chaque plateforme (APNs / canaux constructeur) ; vérifiez le push hors ligne selon la doc ; distinguez « message in-app » de « push système ».",
  "scene": "En test ça arrive app ouverte mais pas après verrouillage / sortie → le push était sur « pas de push » ; passez à un serveur de push perso pour la réception hors ligne."
 },
 "自定义按钮": {
  "cat": "Appels API",
  "name": "Masquer le bouton par défaut / entrée perso",
  "alias": "withoutbtn showpanel masquer bouton bouton perso ouvrir chat contact entrée 自定义按钮",
  "trigger": "Vous voulez votre propre bouton « Contact » et masquer le rond natif de 美洽",
  "official": "Appelez _MEIQIA('withoutBtn') pour ne pas montrer le bouton natif de 美洽 ; après un init réussi, appelez _MEIQIA('showPanel') pour ouvrir le chat.",
  "cause": "Par défaut le bouton flottant natif est rendu ; pour votre entrée vous devez déclarer « pas de bouton natif » avant / pendant l'init et lier « ouvrir le chat » à votre élément — une question de timing d'API, pas un « bouton cassé ».",
  "fix": "Appelez _MEIQIA('withoutBtn') avant / pendant l'intégration / init ; liez _MEIQIA('showPanel') au onclick de votre bouton ; assurez-vous qu'ils s'exécutent après un init réussi du widget.",
  "scene": "La page a déjà un bouton « Discuter » visible → withoutBtn masque le natif, et un clic sur le vôtre appelle showPanel pour ouvrir la fenêtre."
 },
 "传递顾客信息": {
  "cat": "Appels API",
  "name": "Transmettre / synchroniser les infos client sans effet",
  "alias": "transmettre infos client synchroniser identité metadata données client sans effet timing init info perso 传递顾客信息",
  "trigger": "Vous voulez transmettre le nom / niveau / commande d'un utilisateur connecté aux agents, mais ils ne le voient pas",
  "official": "Le widget web 美洽 propose les API « transmettre les infos client », « synchroniser l'identité client » et « ajouter une info d'événement perso » pour amener les données du visiteur dans le chat.",
  "cause": "Ces API doivent être appelées dans le bon timing d'init : après un init réussi (ou dans le timing manualInit + init). Trop tôt / tard, ou de mauvais formats de champ, et c'est « réglé mais sans effet ».",
  "fix": "Appelez les API de transmission / synchronisation dans le timing d'init réussi selon la doc ; vérifiez les noms et formats de champ ; dans une SPA, retransmettez après chaque init.",
  "scene": "Vous transmettez le nom d'utilisateur aux agents sur un site connecté mais il s'affiche anonyme → l'appel a eu lieu avant l'init ; déplacez-le dans le callback d'init réussi et il est transmis."
 }
};
window.LABELS = {"miss": "Non répertorié — essayez un autre mot-clé (not showing / adblock / entId / SPA / sdk) ou voyez le tableau complet ci-dessous.", "codeword": ""};
window.FIELDS = [["trigger", "Quand cela survient"], ["official", "Comportement L1 / positionnement officiel"], ["cause", "Cause racine L2"], ["fix", "Comment résoudre"], ["scene", "Cas réel"]];
window.THEAD = ["Symptôme", "Groupe", "Comportement L1 / positionnement officiel", "Cause racine L2"];
