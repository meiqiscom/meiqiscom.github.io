window.CODES = {
 "窗口不显示": {
  "cat": "Pagkabigo sa pag-load",
  "name": "Hindi talaga lumalabas ang chat window / bubble",
  "alias": "hindi lumalabas widget hindi nakikita walang bubble not showing 不显示",
  "trigger": "Pagkatapos idikit ang code walang chat bubble / button sa kanang ibaba",
  "official": "Nilo-load ng 美洽 web widget ang isang floating chat window gamit ang isang idinikit na JS snippet; kumpirmahin na maayos na naka-embed ang code at naka-configure ang integration site sa console.",
  "cause": "Ang widget ay meiqia.js na ini-inject sa DOM pagkatapos ng asynchronous load, kaya ang «walang anuman» ay kadalasang nangangahulugang «hindi kailanman na-load ang script»: maling placement, naharang ng adblock / cache, o hindi tugmang domain / entId, kaya hindi tumakbo ang injection.",
  "fix": "F12 → Network, hanapin ang meiqia.js: walang request → walang bisa ang code (suriin ang placement / linisin ang cache); may request pero hindi-200 → naharang o isyu sa path; lahat maayos pero natatago pa rin → suriin ang entId / awtorisasyon ng domain at ang mga grupo sa ibaba.",
  "scene": "Naidikit ang code, nag-refresh, walang bubble, at walang ipinapakitang meiqia.js request ang F12 → wala ang code sa live template / naka-cache; linisin ang cache at muling i-deploy."
 },
 "按钮不显示": {
  "cat": "Mga isyu sa display",
  "name": "Na-load ang script pero nawawala ang chat button",
  "alias": "walang button nawawalang button button missing console ok 按钮不显示",
  "trigger": "Ipinapakita ng F12 ang meiqia.js sa 200, pero wala lang sa pahina ang chat button",
  "official": "Umaangkop ang widget code sa site at nagpapakita ng chat button; kung nabigo ang display, suriin kung natago ito ng mga style o naputol ang initialization.",
  "cause": "Kung na-load ang script pero nawawala ang button, kadalasang isyu sa «display layer» ito: ni-override ng site-wide CSS ang posisyon ng button / nag-set ng display:none, natalo ang z-index, o tinakpan ng ibang fixed element; maaari ring putulin ng ibang JS error ang initialization.",
  "fix": "F12 → Elements, hanapin ang 美洽 container — naroon, natago, o nasa labas ng screen?; pansamantalang i-disable ang custom CSS / ibang scripts para muling subukan; suriin ang console para sa error na pumutol sa execution.",
  "scene": "meiqia.js 200, console typeof _MEIQIA ay function, pero walang button → inilagay ito ng theme CSS sa labas ng screen; ayusin ang style / posisyon at lalabas ito."
 },
 "广告拦截": {
  "cat": "Pagkabigo sa pag-load",
  "name": "meiqia.js naharang ng adblock extension",
  "alias": "adblock ublock adguard err_blocked_by_client naharang whitelist extension 广告拦截",
  "trigger": "Console: meiqia.js net::ERR_BLOCKED_BY_CLIENT, at hindi lumalabas ang chat window",
  "official": "Galing sa third-party domain ang 美洽 chat script; kung may naka-install na blocking extension, maaari nitong ituring na ad / tracker at pigilan ang pag-load — patayin ang blocking o i-whitelist.",
  "cause": "Ang ERR_BLOCKED_BY_CLIENT ay nangangahulugang hinarang ng browser extension (AdBlock / uBlock / AdGuard) ang request sa pamamagitan ng filter lists nito. Ang 美洽 script ay «third-party off-domain + realtime communication», na madalas ipinagkakamali ng mga panuntunang iyon na ad / tracker, na nagdudulot ng false failure na «maayos ang console, nawawala sa gilid ng user».",
  "fix": "Muling subukan sa incognito o nakapatay ang adblock — kung lumabas, ang blocking ang sanhi; hilingin sa mga user na i-whitelist ang site; maaaring i-load ng front end ang chat script nang delayed / conditional para iwasan ang ilang auto rules.",
  "scene": "Maayos na lumalabas sa makina mo, may mga user na nag-uulat ng walang chat → may adblock sila; malinaw na ipinapakita ng console ang ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Pagkabigo sa pag-load",
  "name": "meiqia.js 404 / masamang status / mixed content",
  "alias": "404 status hindi na-load cache cdn https mixed content certificate 脚本未加载",
  "trigger": "Hindi-200 ang meiqia.js sa F12 → Network (404 / naharang / pending)",
  "official": "Pagkatapos i-deploy, hanapin ang meiqia.js sa Network panel; ang status 200 ay nangangahulugang tama ang placement at na-load ang script.",
  "cause": "Karaniwang sanhi ng hindi-200: code na hawak ng page / CDN cache (hindi na-refresh pagkatapos i-publish), na-load sa HTTP page / hindi kumpletong certificate chain na nagti-trigger ng mixed-content blocking, o sirang / bahagyang nakopyang code. Kapag nabigo ang hakbang na ito, hindi kailanman nangyayari ang injection at koneksyon.",
  "fix": "Linisin ang CDN / browser cache (o incognito) pagkatapos i-publish; tiyakin ang buong HTTPS na may buong certificate chain at walang mixed content; suriin na kumpleto at hindi naka-escape ang nakopyang code.",
  "scene": "Binago ang template pero patuloy na naghahain ang live site ng lumang chat code → hindi na-refresh ang CDN cache; ang hard refresh / cache clear ay ginagawang 200 ang meiqia.js."
 },
 "代码位置": {
  "cat": "Pagkabigo sa pag-load",
  "name": "Maling lugar ng code (head blocking / walang bisa)",
  "alias": "placement saan ilalagay head body ibaba blocking embed closing tag 代码位置",
  "trigger": "Code sa <head> o sa loob ng async script; blangkong pahina / pabago-bago ang chat",
  "official": "Inirerekomenda ng 美洽 na idikit ang code sa ibaba ng pahina, bago ang </body>; tumatakbo ang widget pagkatapos ma-load ang pangunahing nilalaman.",
  "cause": "Dapat i-inject ng widget ang container nito pagkatapos maging handa ang DOM. Sa <head> humaharang ito sa render (blangkong screen muna sa mahinang network) o tumatakbo bago handa ang DOM at nabibigo; sa ilang async / module scope maaari ring magkamali ang load order.",
  "fix": "Ilagay ang 美洽 JS sa karaniwang footer ng bawat pahina, bago ang </body>; para sa SPA tingnan ang entry na «SPA route» at gamitin ang manualInit; tiyaking hindi ito tinatanggal ng bundler sa pamamagitan ng tree-shaking.",
  "scene": "Inilagay ang code sa <head> para sa kaginhawaan; sa mahinang network nakikita muna ng mga user ang blangkong screen at huli lumalabas ang chat → ilipat bago ang </body>."
 },
 "样式错乱": {
  "cat": "Mga isyu sa display",
  "name": "Sirang styling ng chat window / button",
  "alias": "sirang style css conflict baluktot mali ang ayos theme override 样式错乱",
  "trigger": "Lumalabas ang chat window / button pero may sirang style / mali ang ayos",
  "official": "Nag-iinject ang widget ng sariling mga style at umaangkop sa site; ang mga conflict sa site-wide styles ay maaaring magdulot ng visual glitches.",
  "cause": "Nag-iinject ang 美洽 script ng CSS sa runtime; kung ni-override muna ng site-wide styles (universal selectors / high-priority rules / resets) ang mga class nito, nasisira ang posisyon, stacking at fonts — side effect ng «dynamic injection + pagbabahagi ng iisang document style space».",
  "fix": "F12 para makita kung aling site rule ang nag-override sa 美洽 container; paliitin ang site-wide styles / bawasan ang epekto sa generic classes; kung kailangan hilingin sa 美洽 na i-adjust ang container layering.",
  "scene": "Gumagamit ang site ng global rule na tulad ng * { position:... } at naitutulak ang button sa gitna → paliitin ang global selector at babalik."
 },
 "按钮跑屏外": {
  "cat": "Mga isyu sa display",
  "name": "Button nasa labas ng screen / natakpan",
  "alias": "labas ng screen hindi nakikita natakpan z-index stacking fixed position naka-offset 跑屏外",
  "trigger": "Nasa DOM ang button pero visual na nawawala / natakpan ng ibang elemento",
  "official": "Lumalabas ang button ng widget bilang fixed-position float; kung natakpan ng ibang fixed elements, i-adjust ang stacking o posisyon.",
  "cause": "Ang ibang position:fixed na elemento ng site (back-to-top, floating ads, custom support bar) na may mas mataas na z-index ay tinatakpan ang 美洽 button, o mali ang pagkalkula ng theme sa coordinate nito, na iniiwan itong «labas ng screen / natakpan».",
  "fix": "Piliin ang 美洽 container sa F12 para makita ang totoong coordinate / z-index; itaas ito o ibaba ang z-index ng nakatakip na elemento; iwasang mag-stack ng maraming fixed float sa isang sulok.",
  "scene": "Magkasama ang «back-to-top» at chat sa kanang ibaba at nagtatakpan → i-offset ang mga posisyon o i-adjust ang z-index at nakikita pareho."
 },
 "插件冲突": {
  "cat": "Mga isyu sa display",
  "name": "DOM conflict ng third-party plugin / analytics",
  "alias": "plugin conflict heatmap analytics seo conversion third-party dom overlay stacking sagabal 插件冲突",
  "trigger": "Pagkatapos magdagdag ng heatmap / analytics / ad plugin, hindi lumalabas / kakaiba ang chat",
  "official": "Ang ibang script sa pahina na nagbabago ng DOM o humaharang ng request ay maaaring makaapekto sa normal na pag-load at display ng widget.",
  "cause": "Muling isinusulat ng heatmap / analytics / conversion scripts ang DOM, nag-iinject ng overlay o humaharang ng request; dahil sila at ang 美洽 ay nag-iinject sa iisang dokumento, nag-iinterfere ang stacking / events at natatakpan ang 美洽 container o naputol ang init nito.",
  "fix": "I-disable ang mga kahina-hinalang plugin isa-isa para matukoy ang conflict; i-adjust ang load order / container layering; ipaiwas sa heatmaps atbp. ang lugar ng 美洽 container.",
  "scene": "Naging hindi-clickable ang chat pagkatapos magdagdag ng heatmap plugin → nasa ibabaw ng chat ang heatmap overlay; i-adjust ang stacking o ibukod ang lugar at babalik."
 },
 "SPA路由": {
  "cat": "Framework integration",
  "name": "Nawawala ang widget pagkatapos ng SPA route change",
  "alias": "spa vue react next angular single page route change nawawala history pushstate muling i-mount SPA路由",
  "trigger": "May chat sa home page, nawala pagkatapos mag-navigate ang front-end route sa ibang lugar",
  "official": "Para sa single-page apps (SPA), gamitin ang route hooks ng framework para i-load / i-init ang 美洽 widget upang umangkop sa front-end routing.",
  "cause": "Nagpapalit ng view ang SPA sa pamamagitan ng front-end routing, sinisira / muling itinatayo ang DOM, pero nag-iinject ang meiqia.js nang isang beses sa unang load bilang default at hindi muling itinatayo nang kusa sa route change, kaya «magpalit ng pahina, nawala ang chat».",
  "fix": "Gamitin ang _MEIQIA('manualInit') para itigil ang auto-init at tawagin ang _MEIQIA('init') sa route hook (React useEffect / Vue mounted / router afterEach) para muling i-mount kung kailangan; iwasang mag-initialize ng maraming instance.",
  "scene": "May chat sa home page ng Next.js site, wala sa detail page → magdagdag ng _MEIQIA('init') sa route hook para muling i-mount sa bawat navigation."
 },
 "手动初始化": {
  "cat": "Framework integration",
  "name": "Kailangan ng manual init (manualInit / init)",
  "alias": "manualinit init manual initialization auto init _meiqia api timing na-load 手动初始化",
  "trigger": "Gusto mong kontrolin kung kailan mag-i-init ang 美洽, o mali ang timing ng auto-init",
  "official": "Idagdag ang _MEIQIA('manualInit') pagkatapos ng embed code ng 美洽 para itigil ang auto-init pagkatapos ng download; tawagin ang _MEIQIA('init') para manu-manong i-init kung kailangan.",
  "cause": "Bilang default nag-i-init ang 美洽 kaagad pagkatapos ng download; kapag kailangan mo munang handa ang container / naipasa ang impormasyon ng customer / stable ang route, ang timing na iyon ay «masyadong maaga» — lumipat sa manual init para kontrolin ang pagkakasunod-sunod.",
  "fix": "Idagdag ang _MEIQIA('manualInit') pagkatapos ng code; tawagin ang _MEIQIA('init') kapag handa na ang mga kondisyon (DOM / session / route); tawagin ang info APIs ayon sa pagkakasunod sa loob ng init timing ayon sa doc.",
  "scene": "Gusto mong i-init ang chat gamit ang identity ng user pagkatapos mag-login → manualInit + init sa login callback, iniiwasan ang anonymous na unang koneksyon."
 },
 "entId错误": {
  "cat": "Config / awtorisasyon",
  "name": "Hindi tugma ang entId / walang chat ang mga ahente",
  "alias": "entid company id natatangi hindi tugma walang chat id lookup maling code 不一致",
  "trigger": "Bumubukas ang chat window, pero walang natatanggap na mensahe ng bisita ang mga ahente",
  "official": "Ang numero pagkatapos ng entId sa code ay natatanging id ng kumpanya mo; kung hindi tugma sa workbench, hindi maaasikaso ng mga ahente ang chat — hanapin ang company ID sa Settings - Team - ID lookup.",
  "cause": "Iniuugnay ng entId ang snippet sa isang partikular na company account. Sa code ng iba / ibang environment, o nagkahalong account, nilo-load ng front end ang window pero napupunta ang mga mensahe sa «ibang kumpanya», kaya walang natatanggap ang workbench na ito — ang klasikong «mukhang maayos pero walang natatanggap».",
  "fix": "Ihambing ang company ID sa Settings - Team - ID lookup sa entId sa page code; kung hindi tugma, palitan ng pinakabagong code na kinopya mula sa console ng kumpanyang ito.",
  "scene": "Nakalimutang palitan ang code ng test account ng production → makakapag-chat ang mga bisita pero walang natatanggap ang production workbench; ayusin ang entId at kumokonekta."
 },
 "域名未授权": {
  "cat": "Config / awtorisasyon",
  "name": "Hindi awtorisado ang domain ng site sa console",
  "alias": "domain hindi awtorisado add integration site whitelist production domain test domain site list 域名未授权",
  "trigger": "Gumagana sa test / lokal, pero hindi nalo-load / hindi nag-aasikaso ang production domain",
  "official": "Pinapayagan ng 美洽 console ang «Add integration site», bawat isa may sariling config; dapat i-configure ang bagong site sa console bago ito maayos na ma-integrate.",
  "cause": "Pinamamahalaan ng 美洽 ang maraming site bilang «integration sites»; dapat nakarehistro / awtorisado ang domain sa console para makilala. Ang bagong production domain na hindi naidagdag ay maaaring hindi tanggapin o ma-map sa maling config.",
  "fix": "Pumunta sa Settings - web widget / integration sites, «Add integration site» para sa production domain at gamitin ang dedikadong code nito; suriin ang pagbaybay ng domain / subdomain.",
  "scene": "Na-tune sa localhost, hindi nag-aasikaso ang chat sa live www → idagdag ang production domain bilang integration site sa console."
 },
 "子渠道": {
  "cat": "Config / awtorisasyon",
  "name": "Multi-site / sub-channel (probe) nagkakahalo",
  "alias": "sub-channel probe multi-site business lines independent config nagkakahalo routing entries 子渠道",
  "trigger": "Maraming site / business line ang nagbabahagi ng isang snippet at nagkakahalo ang routing / auto-messages",
  "official": "Sinusuportahan ng 美洽 ang pag-deploy ng iba't ibang widget at chat link bawat site (sub-channels / probe); bukod sa default site maaari kang magdagdag pa, bawat isa may sariling config.",
  "cause": "Kailangan ng iba't ibang business line ng iba't ibang agent group / auto-message, pero kung bawat site ay nagbabahagi ng iisang default snippet, hindi matukoy ang pinagmulan at nagkakahalo ang config. Dinisenyo ang sub-channels (probe) para sa «isang kumpanya, maraming entry, naka-route».",
  "fix": "Sa Settings - web widget, «Add integration site» para gumawa ng hiwalay na sub-channel bawat site, bawat isa may sariling code, hitsura at auto-message.",
  "scene": "Nagbabahagi ng isang snippet ang main site at campaign page at hindi mo matukoy ang pinagmulan → gumawa ng hiwalay na sub-channel para sa campaign."
 },
 "移动端不显示": {
  "cat": "Mobile / SDK",
  "name": "Hindi lumalabas ang mobile web chat / kailangan ng hiwalay na deploy",
  "alias": "mobile telepono h5 mobile site hindi lumalabas hiwalay na deploy parehong code umangkop wap 移动端",
  "trigger": "May chat ang PC site, wala ang mobile / H5 site",
  "official": "Umaangkop ang widget code sa site; parehong snippet ang mobile / PC pero dapat i-deploy nang hiwalay.",
  "cause": "Maraming team ang may hiwalay na PC at mobile page / template at idinikit lang ang code sa PC template. Pareho ang snippet at kusang umaangkop, pero dapat gawin din ang hakbang na «idikit» sa mobile template; kapag nalampasan, walang chat ang mobile.",
  "fix": "I-deploy ang parehong 美洽 code bago ang </body> din sa mobile / H5 template; suriin sa F12 na nalo-load ang meiqia.js sa pareho; bigyan ang mobile ng sariling hitsura kung kailangan.",
  "scene": "Laging nasa PC site ang chat pero wala sa telepono site → walang code ang mobile template; idagdag at lalabas."
 },
 "SDK接入": {
  "cat": "Mobile / SDK",
  "name": "Native app SDK integration / AppKey",
  "alias": "sdk app native appkey add app config integrate ios android develop embed SDK接入",
  "trigger": "Gusto mo ng chat sa loob ng sariling app, hindi sa web",
  "official": "Kailangan ng in-app integration ng AppKey mula sa 美洽 workbench (Settings - Integration - SDK, «Add APP config»), at ini-integrate ng mga developer ang iOS / Android SDK ayon sa opisyal na doc at demo.",
  "cause": "Gumagamit ang app ng native SDK, hindi web JS: una «Add APP config» para sa AppKey, tapos i-integrate ang SDK bawat platform para sa chat UI, unread, push, atbp. — ganap na ibang path kaysa web widget.",
  "fix": "Magdagdag ng APP config sa console para sa AppKey; i-integrate ang SDK ayon sa iOS / Android demo na may AppKey; suriin ang chat navigation / unread / push.",
  "scene": "Gusto mo ng live chat sa sariling app → gamitin ang SDK + AppKey, huwag isaksak ang web JS sa WebView."
 },
 "SDK推送": {
  "cat": "Mobile / SDK",
  "name": "Hindi dumarating ang SDK message push",
  "alias": "push hindi dumarating walang push custom push server umalis sa app offline message notification SDK推送",
  "trigger": "Pagkatapos ng SDK integration, walang natatanggap na push ang mga user kapag umalis na sa app",
  "official": "May dalawang mode ang 美洽 SDK push: sa «walang push», umaabot lang sa loob ng app ang mga mensahe ng ahente (buksan ang app para matanggap); sa «custom push server», nakakatanggap ang mga user ng push sa telepono kahit umalis na sa app.",
  "cause": "Ang nawawalang «offline push» ay kadalasang nangangahulugang «walang push» ang push mode, o walang custom push server / per-platform push certificates. Ang path ay «美洽 → app server → telepono ng user»; ang nawawalang link ay nag-iiwan lang ng in-app receipt.",
  "fix": "Sa APP config, piliin ang «custom push server» at i-set up ang push ng bawat platform (APNs / vendor channels); suriin ang offline push ayon sa doc; ihiwalay ang «in-app message» sa «system push».",
  "scene": "Sa test dumarating habang bukas ang app pero hindi pagkatapos i-lock / umalis → naka-set sa «walang push» ang push; lumipat sa custom push server para sa offline receipt."
 },
 "自定义按钮": {
  "cat": "Mga API call",
  "name": "Itago ang default button / custom entry",
  "alias": "withoutbtn showpanel itago ang button sariling button buksan ang chat makipag-ugnayan entry 自定义按钮",
  "trigger": "Gusto mo ng sariling «Makipag-ugnayan» button at itago ang bilog na native ng 美洽",
  "official": "Tawagin ang _MEIQIA('withoutBtn') para hindi ipakita ang native button ng 美洽; pagkatapos ng matagumpay na init, tawagin ang _MEIQIA('showPanel') para buksan ang chat.",
  "cause": "Bilang default na-render ang native floating button; para sa sariling entry kailangan mong ideklara ang «walang native button» bago / habang init at i-bind ang «buksan ang chat» sa elemento mo — usapin ng API timing, hindi «sirang button».",
  "fix": "Tawagin ang _MEIQIA('withoutBtn') bago / habang embed / init; i-bind ang _MEIQIA('showPanel') sa onclick ng button mo; tiyaking tumakbo sila pagkatapos ng matagumpay na widget init.",
  "scene": "May kitang «Mag-chat ngayon» button na ang pahina → itinatago ng withoutBtn ang native, at ang pag-click sa iyo ay tumatawag ng showPanel para buksan ang window."
 },
 "传递顾客信息": {
  "cat": "Mga API call",
  "name": "Walang bisa ang pagpasa / pag-sync ng impormasyon ng customer",
  "alias": "ipasa ang impormasyon ng customer i-sync ang identity metadata customer data walang bisa timing init custom info 传递顾客信息",
  "trigger": "Gusto mong ipasa ang pangalan / level / order ng naka-login na user sa mga ahente, pero hindi nila nakikita",
  "official": "Nag-aalok ang 美洽 web widget ng API na «ipasa ang impormasyon ng customer», «i-sync ang identity ng customer» at «magdagdag ng custom event info» para dalhin ang data ng bisita sa chat.",
  "cause": "Dapat tawagin ang mga API na ito sa loob ng tamang init timing: pagkatapos ng matagumpay na init (o sa manualInit + init timing). Masyadong maaga / huli, o maling field formats, at «naka-set pero walang bisa».",
  "fix": "Tawagin ang pass / sync info APIs sa loob ng matagumpay na init timing ayon sa doc; suriin ang field names at formats; sa SPA, muling ipasa pagkatapos ng bawat init.",
  "scene": "Ipinasa mo ang username sa mga ahente sa naka-login na site pero anonymous ang ipinapakita → tumakbo ang call bago ang init; ilipat ito sa init-success callback at maipapasa."
 }
};
window.LABELS = {"miss": "Wala sa listahan — subukan ang ibang keyword (not showing / adblock / entId / SPA / sdk) o tingnan ang buong talahanayan sa ibaba.", "codeword": ""};
window.FIELDS = [["trigger", "Kailan lumilitaw"], ["official", "L1 behavior / opisyal na posisyon"], ["cause", "L2 root cause"], ["fix", "Paano aayusin"], ["scene", "Totoong kaso"]];
window.THEAD = ["Sintomas", "Grupo", "L1 behavior / opisyal na posisyon", "L2 root cause"];
