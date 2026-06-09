window.CODES = {
 "窗口不显示": {
  "cat": "Load မအောင်မြင်",
  "name": "chat window / bubble လုံးဝမပေါ်",
  "alias": "မပေါ် widget မမြင်ရ bubble မရှိ not showing 不显示",
  "trigger": "code ကူးထည့်ပြီးနောက် အောက်ညာတွင် chat bubble / ခလုတ်မရှိ",
  "official": "美洽 ဝက်ဘ် widget သည် ကူးထည့်သော JS snippet တစ်ခုဖြင့် floating chat window load လုပ်; code မှန်ကန်စွာမြှုပ်ထားကြောင်းနှင့် ပေါင်းစပ်ဆိုဒ်ကို console တွင် config လုပ်ထားကြောင်းသေချာပါ.",
  "cause": "widget သည် အချိန်မကိုက် load ပြီးနောက် DOM ထဲ inject ဖြစ်သော meiqia.js ဖြစ်၍ «လုံးဝဘာမှမရှိ» က များသောအားဖြင့် «script ဘယ်တော့မှ load မဖြစ်» — နေရာမှား, adblock / cache ဖြင့်ပိတ်ဆို့, သို့မဟုတ် domain / entId မကိုက်, ၍ injection ဘယ်တော့မှ run မဖြစ်.",
  "fix": "F12 → Network, meiqia.js ရှာ: request မရှိ → code အကျိုးမသက် (နေရာစစ် / cache ရှင်း); request ပေမယ့် non-200 → ပိတ်ဆို့ သို့မဟုတ် path ပြဿနာ; အားလုံးကောင်းပေမယ့် ပုန်းနေ → entId / domain ခွင့်ပြုချက်နှင့် အောက်ပါအုပ်စုစစ်.",
  "scene": "code ကူးထည့်, refresh, bubble မရှိ, F12 တွင် meiqia.js request ပင်မရှိ → code က live template တွင်မရှိ / cache ဖြစ်; cache ရှင်းပြီး ပြန် deploy."
 },
 "按钮不显示": {
  "cat": "ပြသခြင်းပြဿနာ",
  "name": "script load ဖြစ်ပေမယ့် chat ခလုတ်ပျောက်",
  "alias": "ခလုတ်မရှိ ခလုတ်ပျောက် button missing console ပုံမှန် 按钮不显示",
  "trigger": "F12 က meiqia.js 200 ပြ, ပေမယ့် chat ခလုတ် စာမျက်နှာတွင်မရှိ",
  "official": "widget code က ဆိုဒ်နှင့်လိုက်လျောညီထွေဖြစ်ပြီး chat ခလုတ်ပြ; ပြသမအောင်မြင်လျှင် style ဖြင့်ပုန်းနေလား init ပြတ်တောက်လားစစ်ပါ.",
  "cause": "script load ဖြစ်ပြီး ခလုတ်ပျောက်လျှင် များသောအားဖြင့် «ပြသ layer» ပြဿနာ: ဆိုဒ်တစ်ခုလုံး CSS က ခလုတ်တည်နေရာ override / display:none, z-index ရှုံး, သို့မဟုတ် အခြား fixed element ဖုံး; အခြား JS error ကလည်း init ပြတ်စေနိုင်.",
  "fix": "F12 → Elements, 美洽 container ရှာ — ရှိ, ပုန်း, screen ပြင်ပ?; ပြန်စမ်းရန် custom CSS / အခြား script ယာယီပိတ်; execution ရပ်စေသော error အတွက် console စစ်.",
  "scene": "meiqia.js 200, console typeof _MEIQIA က function, ပေမယ့် ခလုတ်မရှိ → theme CSS က screen ပြင်ပထား; style / တည်နေရာပြင်လျှင်ပေါ်."
 },
 "广告拦截": {
  "cat": "Load မအောင်မြင်",
  "name": "meiqia.js ကို adblock extension ပိတ်ဆို့",
  "alias": "adblock ublock adguard err_blocked_by_client ပိတ်ဆို့ whitelist extension 广告拦截",
  "trigger": "console: meiqia.js net::ERR_BLOCKED_BY_CLIENT, chat window မပေါ်",
  "official": "美洽 chat script က တတိယပါတီ domain မှလာ; ပိတ်ဆို့ extension တပ်ဆင်ထားလျှင် ၎င်းကို ကြော်ငြာ / tracker အဖြစ်ယူဆ၍ load တားနိုင် — ပိတ်ဆို့ခြင်းပိတ် သို့မဟုတ် whitelist.",
  "cause": "ERR_BLOCKED_BY_CLIENT ဆိုသည်မှာ browser extension (AdBlock / uBlock / AdGuard) က filter စာရင်းဖြင့် request ပိတ်ဆို့. 美洽 script က «တတိယပါတီ off-domain + real-time communication» ဖြစ်၍ ထိုစည်းမျဉ်းများက ကြော်ငြာ / tracker အဖြစ်မှားယွင်းယူဆတတ်, «console ကောင်း, အသုံးပြုသူဘက်ပျောက်» false failure ဖြစ်စေ.",
  "fix": "incognito တွင် သို့မဟုတ် adblock ပိတ်၍ပြန်စမ်း — ပေါ်လျှင် ပိတ်ဆို့ခြင်းကအကြောင်းရင်း; အသုံးပြုသူများကို ဆိုဒ် whitelist ခိုင်း; frontend က auto စည်းမျဉ်းအချို့ရှောင်ရန် chat script ကို delay / conditional load လုပ်နိုင်.",
  "scene": "သင့်စက်တွင်ကောင်းပေါ်, အသုံးပြုသူအချို့ chat မရဟုတင်ပြ → သူတို့တွင် adblock ရှိ; console က ERR_BLOCKED_BY_CLIENT ရှင်းရှင်းပြ."
 },
 "脚本未加载": {
  "cat": "Load မအောင်မြင်",
  "name": "meiqia.js 404 / status ဆိုး / mixed content",
  "alias": "404 status load မဖြစ် cache cdn https mixed content certificate 脚本未加载",
  "trigger": "F12 → Network တွင် meiqia.js non-200 (404 / ပိတ်ဆို့ / pending)",
  "official": "deploy ပြီးနောက် Network panel တွင် meiqia.js ရှာ; status 200 ဆိုသည်မှာ script မှန်ကန်စွာထား၍ load ဖြစ်.",
  "cause": "non-200 အကြောင်းရင်းများ: code က page / CDN cache တွင်ပိတ်မိ (ထုတ်ဝေပြီး refresh မဖြစ်), HTTP page တွင် load / certificate chain မပြည့်စုံ၍ mixed-content ပိတ်ဆို့ ဖြစ်, သို့မဟုတ် code ပျက် / တစ်ပိုင်းတစ်စကူး. ဤအဆင့်မအောင်မြင်လျှင် injection နှင့် connection ဘယ်တော့မှမဖြစ်.",
  "fix": "ထုတ်ဝေပြီး CDN / browser cache ရှင်း (သို့မဟုတ် incognito); certificate chain ပြည့်စုံသော HTTPS အပြည့်နှင့် mixed content မပါဘဲသေချာ; ကူးသော code ပြည့်စုံ၍ escape မဖြစ်ကြောင်းအတည်ပြု.",
  "scene": "template ပြောင်းပေမယ့် live ဆိုဒ်က chat code အဟောင်းကိုပဲ serve → CDN cache refresh မဖြစ်; hard refresh / cache ရှင်းလျှင် meiqia.js 200 ဖြစ်."
 },
 "代码位置": {
  "cat": "Load မအောင်မြင်",
  "name": "code နေရာမှား (head ပိတ်ဆို့ / အကျိုးမသက်)",
  "alias": "တည်နေရာ ဘယ်မှာထား head body အောက် ပိတ်ဆို့ မြှုပ် ပိတ် tag 代码位置",
  "trigger": "code က <head> ထဲ သို့မဟုတ် async script ထဲ; page အလွတ် / chat လာလိုက်ပျောက်လိုက်",
  "official": "美洽 က code ကို page အောက်, </body> ရှေ့ကူးထည့်ရန်အကြံပြု; widget က main content load ပြီးနောက် run.",
  "cause": "widget က DOM အဆင်သင့်ဖြစ်ပြီးနောက် container inject လုပ်ရ. <head> တွင် ၎င်းက render ပိတ်ဆို့ (network အားနည်းလျှင် page အလွတ်အရင်) သို့မဟုတ် DOM အဆင်သင့်မဖြစ်မီ run ၍မအောင်မြင်; async / module scope အချို့တွင် load order လည်းမှားနိုင်.",
  "fix": "美洽 JS ကို page တိုင်း၏ shared footer, </body> ရှေ့ထား; SPA အတွက် «SPA route» entry ကြည့်ပြီး manualInit သုံး; bundler က tree-shaking ဖြင့်မဖယ်ကြောင်းသေချာ.",
  "scene": "အဆင်ပြေရန် code ကို <head> ထဲထား; network အားနည်းလျှင် အသုံးပြုသူ page အလွတ်အရင်မြင်ပြီး chat နောက်ကျလာ → </body> ရှေ့ရွှေ့."
 },
 "样式错乱": {
  "cat": "ပြသခြင်းပြဿနာ",
  "name": "chat window / ခလုတ် style ပျက်",
  "alias": "style ပျက် css ပဋိပက္ခ ပုံပျက် ရွှေ့ theme override 样式错乱",
  "trigger": "chat window / ခလုတ်ပေါ်ပေမယ့် style ပျက် / ရွှေ့",
  "official": "widget က ကိုယ်ပိုင် style inject လုပ်ပြီး ဆိုဒ်နှင့်လိုက်လျောညီထွေ; ဆိုဒ်တစ်ခုလုံး style နှင့်ပဋိပက္ခက visual ချွတ်ယွင်းစေနိုင်.",
  "cause": "美洽 script က runtime တွင် CSS inject; ဆိုဒ်တစ်ခုလုံး style (universal selector / high-priority rule / reset) က ၎င်း class အရင် override လျှင် တည်နေရာ, stacking, font ပျက် — «dynamic injection + document style space တစ်ခုမျှဝေ» ၏ ဘေးထွက်ဆိုးကျိုး.",
  "fix": "ဘယ်ဆိုဒ် rule က 美洽 container override သည်ကို F12 ဖြင့်ကြည့်; ဆိုဒ်တစ်ခုလုံး style ကျဉ်း / common class အပေါ်အကျိုးသက်ရောက်မှုလျှော့; လိုအပ်လျှင် container stacking ချိန်ညှိရန် 美洽 ကိုခိုင်း.",
  "scene": "ဆိုဒ်က * { position:... } ကဲ့သို့ global rule သုံး၍ ခလုတ်ကိုအလယ်တွန်း → global selector ကျဉ်းလျှင်ပြန်လာ."
 },
 "按钮跑屏外": {
  "cat": "ပြသခြင်းပြဿနာ",
  "name": "ခလုတ် screen ပြင်ပ / ဖုံး",
  "alias": "screen ပြင်ပ မမြင်ရ ဖုံး z-index stacking fixed တည်နေရာ ရွှေ့ 跑屏外",
  "trigger": "ခလုတ် DOM ထဲရှိပေမယ့် visual ပျောက် / အခြား element ဖုံး",
  "official": "widget ခလုတ်က fixed-position floating အဖြစ်ပေါ်; အခြား fixed element ဖုံးလျှင် stacking သို့မဟုတ် တည်နေရာချိန်ညှိ.",
  "cause": "ဆိုဒ်၏ အခြား position:fixed element (အပေါ်သို့, floating ကြော်ငြာ, ကိုယ်ပိုင် support bar) က z-index မြင့်ဖြင့် 美洽 ခလုတ်ဖုံး, သို့မဟုတ် theme က coordinate မှားတွက်၍ «screen ပြင်ပ / ဖုံး» ထား.",
  "fix": "တကယ် coordinate / z-index ကြည့်ရန် F12 တွင် 美洽 container ရွေး; ၎င်းကိုမြှင့် သို့မဟုတ် ဖုံးသော element z-index လျှော့; ထောင့်တစ်ခုတွင် fixed floating များစုပုံခြင်းရှောင်.",
  "scene": "«အပေါ်သို့» နှင့် chat နှစ်ခုလုံးအောက်ညာတွင် တစ်ခုကိုတစ်ခုဖုံး → တည်နေရာရွှေ့ သို့မဟုတ် z-index ချိန်လျှင်နှစ်ခုလုံးမြင်."
 },
 "插件冲突": {
  "cat": "ပြသခြင်းပြဿနာ",
  "name": "တတိယပါတီ plugin / analytics DOM ပဋိပက္ခ",
  "alias": "ပဋိပက္ခ plugin heatmap analytics seo conversion တတိယပါတီ dom overlay stacking နှောင့်ယှက် 插件冲突",
  "trigger": "heatmap / analytics / ကြော်ငြာ plugin ထည့်ပြီးနောက် chat မပေါ် / ထူးဆန်းပြုမူ",
  "official": "DOM ပြောင်းသော သို့မဟုတ် request ကြားဖြတ်သော page ၏ အခြား script များက widget ၏ ပုံမှန် load နှင့် ပြသခြင်းကို သက်ရောက်နိုင်.",
  "cause": "heatmap / analytics / conversion script များက DOM ပြန်ရေး, overlay inject သို့မဟုတ် request ကြားဖြတ်; ၎င်းတို့နှင့် 美洽 က document တစ်ခုတည်းတွင် inject ဖြစ်၍ stacking / event နှောင့်ယှက်ကာ 美洽 container ဖုံး သို့မဟုတ် ၎င်း init ပြတ်.",
  "fix": "ပဋိပက္ခရှာရန် သံသယ plugin များတစ်ခုချင်းပိတ်; load order / container stacking ချိန်; heatmap စသည်တို့ကို 美洽 container ဧရိယာရှောင်စေ.",
  "scene": "heatmap plugin ထည့်ပြီးနောက် chat click မရ → heatmap overlay က chat အပေါ်; stacking ချိန် သို့မဟုတ် ဧရိယာချန်လျှင်ပြန်လာ."
 },
 "SPA路由": {
  "cat": "Framework ပေါင်းစပ်",
  "name": "SPA route ပြောင်းပြီးနောက် widget ပျောက်",
  "alias": "spa vue react next angular single page route ပြောင်း ပျောက် history pushstate ပြန် mount SPA路由",
  "trigger": "home page တွင် chat ရှိ, frontend route အခြားသို့သွားပြီးပျောက်",
  "official": "single-page app (SPA) အတွက် framework route hook သုံး၍ 美洽 widget load / init လုပ်, frontend routing နှင့်လိုက်လျောညီထွေ.",
  "cause": "SPA က frontend routing ဖြင့် view ပြောင်း, DOM ဖျက် / ပြန်တည်ဆောက်, ပေမယ့် meiqia.js က default အရ ပထမ load တွင်တစ်ကြိမ် inject ပြီး route ပြောင်းချိန် အလိုအလျောက်ပြန်မတည်ဆောက်, ၍ «page ပြောင်း, chat ပျောက်».",
  "fix": "auto-init ရပ်ရန် _MEIQIA('manualInit') သုံးပြီး လိုအပ်လျှင် ပြန် mount ရန် route hook (React useEffect / Vue mounted / router afterEach) တွင် _MEIQIA('init') ခေါ်; multiple instance init ရှောင်.",
  "scene": "Next.js ဆိုဒ် home page တွင် chat ရှိ, detail page တွင်မရှိ → navigation တိုင်း ပြန် mount ရန် route hook တွင် _MEIQIA('init') ထည့်."
 },
 "手动初始化": {
  "cat": "Framework ပေါင်းစပ်",
  "name": "manual init လို (manualInit / init)",
  "alias": "manualinit init manual စတင် auto init _meiqia api timing load 手动初始化",
  "trigger": "美洽 ဘယ်အချိန် init ဖြစ်မည်ထိန်းချုပ်ချင်, သို့မဟုတ် auto-init timing မှား",
  "official": "ဒေါင်းလုဒ်ပြီးနောက် auto-init ရပ်ရန် 美洽 embed code နောက်တွင် _MEIQIA('manualInit') ထည့်; လိုအပ်လျှင် manual init ရန် _MEIQIA('init') ခေါ်.",
  "cause": "default အရ 美洽 က ဒေါင်းလုဒ်ပြီးချက်ချင်း init; container အဆင်သင့် / customer info ပို့ / route တည်ငြိမ်ကို အရင်လိုသောအခါ ထို timing က «စောလွန်း» — order ထိန်းရန် manual init သို့ပြောင်း.",
  "fix": "code နောက် _MEIQIA('manualInit') ထည့်; condition အဆင်သင့်လျှင် (DOM / session / route) _MEIQIA('init') ခေါ်; info API များကို doc အတိုင်း init timing တွင် order အလိုက်ခေါ်.",
  "scene": "login ပြီးနောက် user identity ဖြင့် chat init လုပ်ချင် → manualInit + login callback တွင် init, anonymous ပထမ connection ရှောင်."
 },
 "entId错误": {
  "cat": "Config / ခွင့်ပြုချက်",
  "name": "entId မကိုက် / agent များ chat မရ",
  "alias": "entid company id သီးသန့် မကိုက် chat မရ id ရှာ code မှား 不一致",
  "trigger": "chat window ဖွင့်, ပေမယ့် agent များ visitor message မရ",
  "official": "code ထဲ entId နောက်ဂဏန်းသည် သင့်ကုမ္ပဏီ၏ သီးသန့် id; workbench နှင့်မကိုက်လျှင် agent များ chat မကိုင်တွယ်နိုင် — settings - team - ID ရှာ တွင် company ID ရှာ.",
  "cause": "entId က snippet ကို သတ်မှတ်ကုမ္ပဏီ account နှင့်ချည်နှောင်. သူများ / အခြား environment code, သို့မဟုတ် account ရောထွေးလျှင် frontend က window load ပေမယ့် message «အခြားကုမ္ပဏီ» သို့သွား, ၍ ဤ workbench ဘာမှမရ — classic «ကောင်းပေါ်ပေမယ့်ဘာမှမရ».",
  "fix": "settings - team - ID ရှာ ၏ company ID ကို page code ၏ entId နှင့်တိုက်ဆိုင်; မကိုက်လျှင် ဤကုမ္ပဏီ console မှကူးသော နောက်ဆုံး code ဖြင့်အစားထိုး.",
  "scene": "test account code ကို production သို့ပြောင်းဖို့မေ့ → visitor များ chat နိုင်ပေမယ့် production workbench ဘာမှမရ; entId ပြင်လျှင်ချိတ်."
 },
 "域名未授权": {
  "cat": "Config / ခွင့်ပြုချက်",
  "name": "ဆိုဒ် domain ကို console တွင်ခွင့်မပြု",
  "alias": "domain ခွင့်မပြု ပေါင်းစပ်ဆိုဒ်ထည့် whitelist production domain test domain ဆိုဒ်စာရင်း 域名未授权",
  "trigger": "test / local တွင်အလုပ်လုပ်, ပေမယ့် production domain တွင် load / serve မဖြစ်",
  "official": "美洽 console က «ပေါင်းစပ်ဆိုဒ်ထည့်ရန်» ခွင့်ပြု, တစ်ခုစီတွင် ကိုယ်ပိုင် config; ဆိုဒ်အသစ်ကို ပေါင်းစပ်ကောင်းမီ console တွင် config လုပ်ရ.",
  "cause": "美洽 က ဆိုဒ်များစွာကို «ပေါင်းစပ်ဆိုဒ်» အဖြစ်စီမံ; domain ကို မှတ်မိရန် console တွင် register / ခွင့်ပြုရ. မထည့်ရသေးသော production domain အသစ်ကို လက်မခံ သို့မဟုတ် config မှားသို့ map နိုင်.",
  "fix": "settings - ဝက်ဘ် widget / ပေါင်းစပ်ဆိုဒ်များသို့သွား, production domain အတွက် «ပေါင်းစပ်ဆိုဒ်ထည့်ရန်» ပြီး ၎င်း dedicated code သုံး; domain / subdomain စာလုံးပေါင်းအတည်ပြု.",
  "scene": "localhost တွင် tune လုပ်, live www တွင် chat မ serve → console တွင် production domain ကို ပေါင်းစပ်ဆိုဒ်အဖြစ်ထည့်."
 },
 "子渠道": {
  "cat": "Config / ခွင့်ပြုချက်",
  "name": "multi-site / sub-channel (probe) ရောထွေး",
  "alias": "sub-channel probe multi-site business line သီးခြား config ရောထွေး routing entry 子渠道",
  "trigger": "ဆိုဒ် / business line များစွာက snippet တစ်ခုမျှဝေ၍ routing / auto-message ရော",
  "official": "美洽 က ဆိုဒ်တစ်ခုစီအတွက် မတူသော widget နှင့် chat link deploy ထောက်ပံ့ (sub-channel / probe); default ဆိုဒ်အပြင် ပိုထည့်နိုင်, တစ်ခုစီတွင် ကိုယ်ပိုင် config.",
  "cause": "မတူသော business line များက မတူသော agent group / auto-message လို, ပေမယ့် ဆိုဒ်တိုင်းက default snippet တစ်ခုမျှဝေလျှင် source မခွဲနိုင်ပြီး config ရော. sub-channel (probe) က «ကုမ္ပဏီတစ်ခု, entry များစွာ, routed» အတွက်ဒီဇိုင်း.",
  "fix": "settings - ဝက်ဘ် widget တွင်, ဆိုဒ်တစ်ခုစီအတွက် သီးခြား sub-channel ဖန်တီးရန် «ပေါင်းစပ်ဆိုဒ်ထည့်ရန်», တစ်ခုစီတွင် ကိုယ်ပိုင် code, ပုံပန်းသဏ္ဍာန်, auto-message.",
  "scene": "main ဆိုဒ်နှင့် campaign page က snippet တစ်ခုမျှဝေ၍ source မခွဲနိုင် → campaign အတွက် သီးခြား sub-channel ဖန်တီး."
 },
 "移动端不显示": {
  "cat": "Mobile / SDK",
  "name": "mobile ဝက်ဘ် chat မပေါ် / သီးခြား deploy လို",
  "alias": "mobile ဖုန်း h5 mobile ဆိုဒ် မပေါ် သီးခြား deploy code တူ adapt wap 移动端",
  "trigger": "PC ဆိုဒ်တွင် chat ရှိ, mobile / H5 ဆိုဒ်တွင်မရှိ",
  "official": "widget code က ဆိုဒ်နှင့်လိုက်လျောညီထွေ; mobile / PC က snippet တူသုံးပေမယ့် သီးခြား deploy ရ.",
  "cause": "team များစွာတွင် သီးခြား PC နှင့် mobile page / template ရှိ၍ code ကို PC template တွင်သာကူးထည့်. snippet တူ၍ self-adapt, ပေမယ့် «ကူးထည့်» အဆင့်ကို mobile template တွင်လည်းလုပ်ရ; ကျန်လျှင် mobile တွင် chat မရှိ.",
  "fix": "တူသော 美洽 code ကို </body> ရှေ့ mobile / H5 template တွင်လည်း deploy; F12 ဖြင့် နှစ်ခုစလုံးတွင် meiqia.js load အတည်ပြု; လိုအပ်လျှင် mobile ကို ကိုယ်ပိုင်ပုံပန်းပေး.",
  "scene": "chat က PC ဆိုဒ်တွင်အမြဲရှိပေမယ့် ဖုန်းဆိုဒ်တွင်မရှိ → mobile template တွင် code မရှိ; ထည့်လျှင်ပေါ်."
 },
 "SDK接入": {
  "cat": "Mobile / SDK",
  "name": "native app SDK ပေါင်းစပ် / AppKey",
  "alias": "sdk app native appkey APP config ထည့် ပေါင်းစပ် ios android develop embed SDK接入",
  "trigger": "web တွင်မဟုတ်, ကိုယ်ပိုင် app တွင် chat လိုချင်",
  "official": "in-app ပေါင်းစပ်က 美洽 workbench မှ AppKey လို (settings - ပေါင်းစပ် - SDK, «APP config ထည့်»), developer များက တရားဝင် doc နှင့် demo အတိုင်း iOS / Android SDK ပေါင်းစပ်.",
  "cause": "app က web JS မဟုတ်, native SDK သုံး: အရင် AppKey အတွက် «APP config ထည့်», ပြီးနောက် chat UI, မဖတ်ရသေး, push စသည်အတွက် platform တစ်ခုစီတွင် SDK ပေါင်းစပ် — web widget နှင့်လုံးဝမတူသောလမ်းကြောင်း.",
  "fix": "AppKey အတွက် console တွင် APP config ထည့်; AppKey ဖြင့် iOS / Android demo အတိုင်း SDK ပေါင်းစပ်; chat navigation / မဖတ်ရသေး / push အတည်ပြု.",
  "scene": "ကိုယ်ပိုင် app တွင် live chat လိုချင် → web JS ကို WebView ထဲမထည့်ဘဲ SDK + AppKey ဖြင့်သွား."
 },
 "SDK推送": {
  "cat": "Mobile / SDK",
  "name": "SDK message push မရောက်",
  "alias": "push မရောက် push မရှိ custom push server app ထွက် offline message notification SDK推送",
  "trigger": "SDK ပေါင်းစပ်ပြီးနောက် အသုံးပြုသူ app ထွက်လိုက်သည်နှင့် push မရ",
  "official": "美洽 SDK push တွင် mode နှစ်ခု: «push မရှိ» ဖြင့် agent message များ app ထဲသာရောက် (ရရန် app ဖွင့်); «custom push server» ဖြင့် အသုံးပြုသူ app ထွက်ပြီးနောက်လည်း ဖုန်းသို့ push ရ.",
  "cause": "«offline push» မရှိခြင်းက များသောအားဖြင့် push mode «push မရှိ», သို့မဟုတ် custom push server / platform တစ်ခုစီ push certificate မရှိ. လမ်းကြောင်း «美洽 → app server → user ဖုန်း»; ပျောက်နေသော link က in-app ရရှိမှုသာချန်.",
  "fix": "APP config တွင် «custom push server» ရွေးပြီး platform တစ်ခုစီ push set (APNs / vendor channel); doc အတိုင်း offline push အတည်ပြု; «in-app message» ကို «system push» မှခွဲ.",
  "scene": "test တွင် app ဖွင့်ထားလျှင်ရောက်ပေမယ့် lock / ထွက်ပြီးနောက်မရောက် → push «push မရှိ» သို့ set ဖြစ်; offline ရရှိရန် custom push server သို့ပြောင်း."
 },
 "自定义按钮": {
  "cat": "API ခေါ်ဆိုမှု",
  "name": "default ခလုတ်ဖုံး / custom entry",
  "alias": "withoutbtn showpanel ခလုတ်ဖုံး ကိုယ်ပိုင်ခလုတ် chat ဖွင့် ဆက်သွယ် entry 自定义按钮",
  "trigger": "ကိုယ်ပိုင် «ဆက်သွယ်ရန်» ခလုတ်လိုချင်ပြီး 美洽 round native ဖုံးချင်",
  "official": "美洽 native chat ခလုတ်မပြရန် _MEIQIA('withoutBtn') ခေါ်; init အောင်မြင်ပြီးနောက် chat ဖွင့်ရန် _MEIQIA('showPanel') ခေါ်.",
  "cause": "default အရ native floating ခလုတ် render; ကိုယ်ပိုင် entry အတွက် init ရှေ့ / အတွင်း «native ခလုတ်မရှိ» ကြေညာပြီး «chat ဖွင့်» ကို ကိုယ့် element နှင့်ချည်ရ — API timing ကိစ္စ, «ခလုတ်ပျက်» မဟုတ်.",
  "fix": "embed / init ရှေ့ / အတွင်း _MEIQIA('withoutBtn') ခေါ်; ကိုယ့်ခလုတ် onclick နှင့် _MEIQIA('showPanel') ချည်; ၎င်းတို့ widget init အောင်မြင်ပြီးနောက် run ကြောင်းသေချာ.",
  "scene": "page တွင် «ယခု chat» ခလုတ်ထင်ရှားရှိပြီး → withoutBtn က native ဖုံး, ကိုယ့်ခလုတ် click လျှင် window ဖွင့်ရန် showPanel ခေါ်."
 },
 "传递顾客信息": {
  "cat": "API ခေါ်ဆိုမှု",
  "name": "customer info ပို့ / sync အကျိုးမသက်",
  "alias": "customer info ပို့ identity sync metadata customer data အကျိုးမသက် timing init custom info 传递顾客信息",
  "trigger": "login user ၏ name / level / order ကို agent များသို့ပို့ချင်, ပေမယ့်သူတို့မမြင်",
  "official": "美洽 ဝက်ဘ် widget က visitor data ကို chat ထဲယူရန် «customer info ပို့», «customer identity sync», «custom event info ထည့်» API များပေး.",
  "cause": "ဤ API များကို မှန်ကန်သော init timing တွင်ခေါ်ရ: init အောင်မြင်ပြီးနောက် (သို့မဟုတ် manualInit + init timing). စော / နောက်ကျလွန်း, သို့မဟုတ် field format မှားလျှင် «set ဖြစ်ပေမယ့်အကျိုးမသက်».",
  "fix": "doc အတိုင်း အောင်မြင်သော init timing တွင် ပို့ / sync info API ခေါ်; field name နှင့် format အတည်ပြု; SPA တွင် init တိုင်းပြီးနောက်ပြန်ပို့.",
  "scene": "login ဆိုဒ်တွင် agent များသို့ username ပို့ပေမယ့် anonymous ပြ → call က init ရှေ့ run; init-အောင်မြင် callback သို့ရွှေ့လျှင်ပို့."
 }
};
window.LABELS = {"miss": "စာရင်းတွင်မရှိ — အခြား keyword စမ်းပါ (not showing / adblock / entId / SPA / sdk) သို့မဟုတ် အောက်ပါ ဇယားအပြည့်အစုံကြည့်ပါ.", "codeword": ""};
window.FIELDS = [["trigger", "ဘယ်အချိန်ပေါ်"], ["official", "L1 အပြုအမူ / တရားဝင်ရပ်တည်ချက်"], ["cause", "L2 အရင်းခံအကြောင်းရင်း"], ["fix", "ဘယ်လိုဖြေရှင်း"], ["scene", "တကယ်ဖြစ်ရပ်"]];
window.THEAD = ["လက္ခဏာ", "အုပ်စု", "L1 အပြုအမူ / တရားဝင်ရပ်တည်ချက်", "L2 အရင်းခံအကြောင်းရင်း"];
