window.CODES = {
 "窗口不显示": {
  "cat": "Load failure",
  "name": "Chat window / bubble not showing at all",
  "alias": "not showing widget not showing no chat bubble invisible cant see chat 不显示",
  "trigger": "After pasting the code, there's no chat bubble / button at the bottom-right",
  "official": "The Meiqia web widget loads a floating chat window from a single pasted JS snippet; confirm the code is correctly embedded and the integration site is configured in the console.",
  "cause": "The widget is meiqia.js injected into the DOM after an async load, so \"nothing at all\" usually means \"the script never loaded\" - wrong placement, blocked by an ad blocker / cache, or unmatched domain / entId, so the injection step never ran.",
  "fix": "F12 -> Network, search meiqia.js: no request -> code not in effect (check placement / clear cache); a request but non-200 -> blocked or a path issue; all fine but still hidden -> check entId / domain authorization and the buckets below.",
  "scene": "Pasted the code, refresh, no bubble, and F12 shows no meiqia.js request at all -> the code isn't in the live template / is cached; clear cache and redeploy."
 },
 "按钮不显示": {
  "cat": "Display issues",
  "name": "Script loaded but chat button missing",
  "alias": "button missing not appearing button not showing console fine loaded 按钮不显示",
  "trigger": "F12 shows meiqia.js is 200, but the chat button just isn't on the page",
  "official": "The widget code auto-adapts to the site and shows a chat button; if display is off, check whether it's hidden by styles or initialization was interrupted.",
  "cause": "If the script loads but the button is missing, it's usually a \"display layer\" issue: site-wide CSS overrides the button position / sets display:none, the z-index loses, or another fixed element covers it; another JS error on the page can also abort initialization.",
  "fix": "F12 -> Elements, find the Meiqia container - is it present, hidden, or off-screen; temporarily disable custom CSS / other scripts to retest; check the console for an error that aborted execution.",
  "scene": "meiqia.js 200, console typeof _MEIQIA is function, but no button -> theme CSS positioned it off-screen; fix the style / position and it appears."
 },
 "广告拦截": {
  "cat": "Load failure",
  "name": "meiqia.js blocked by an ad-blocker extension",
  "alias": "adblock ublock adguard err_blocked_by_client blocked whitelist extension 广告拦截",
  "trigger": "Console: meiqia.js net::ERR_BLOCKED_BY_CLIENT, and the chat window doesn't appear",
  "official": "The Meiqia chat script comes from a third-party domain; if a blocking extension is installed it may treat it as an ad / tracker and prevent loading - turn off blocking or whitelist.",
  "cause": "ERR_BLOCKED_BY_CLIENT means a browser extension (AdBlock / uBlock / AdGuard) blocked the request by its filter lists. The Meiqia script is \"third-party off-domain + realtime comms\", which such rules often misread as an ad / tracker, causing a \"console fine, user side missing\" false failure.",
  "fix": "Retest in incognito or with the ad blocker off - if it shows, blocking was the cause; ask users to whitelist the site; the front end can delay / conditionally load the chat script to dodge some auto-rules.",
  "scene": "It shows fine on your machine, some users report no chat -> they have an ad blocker; the console plainly shows ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Load failure",
  "name": "meiqia.js 404 / bad status / mixed content",
  "alias": "404 status not loaded meiqia.js cache cdn https mixed content certificate 脚本未加载",
  "trigger": "meiqia.js is non-200 in F12 -> Network (404 / blocked / pending)",
  "official": "After deploying, search meiqia.js in the Network panel; a 200 status means the script is correctly placed and loaded.",
  "cause": "Common non-200 causes: code held by page / CDN cache (no refresh after publishing), loaded on an HTTP page / incomplete cert chain triggering mixed-content blocking, or broken / partially copied code. With this step failed, injection and the connection never happen.",
  "fix": "Clear CDN / browser cache (or use incognito) after publishing; ensure full HTTPS with a complete cert chain and no mixed content; verify the copied code is complete and unescaped.",
  "scene": "Edited the template but the live site still serves the old chat code -> the CDN cache wasn't refreshed; a hard refresh / cache clear turns meiqia.js to 200."
 },
 "代码位置": {
  "cat": "Load failure",
  "name": "Code in the wrong place (head blocking / no effect)",
  "alias": "placement where to put head body bottom blocking embed position closing tag 代码位置",
  "trigger": "Code in <head> or inside an async script; blank page / chat comes and goes",
  "official": "Meiqia recommends pasting the code at the bottom of the page, before the </body> tag; the widget runs after the page's main content loads.",
  "cause": "The widget must inject its container after the DOM is ready. In <head> it blocks rendering (a blank screen first on a weak network) or runs before the DOM is ready and fails to inject; inside some async / module scope the load order can also go wrong.",
  "fix": "Put the Meiqia JS in the common footer of every page, before </body>; for SPAs see the \"SPA route\" entry and use manualInit; make sure a bundler doesn't tree-shake it away.",
  "scene": "Stuffed the code into <head> for convenience; on a weak network users see a blank screen and chat pops late -> move it before </body>."
 },
 "样式错乱": {
  "cat": "Display issues",
  "name": "Chat window / button styling broken",
  "alias": "style broken css conflict styling messed up distorted misaligned theme override 样式错乱",
  "trigger": "The chat window / button appears but is mis-styled / misplaced",
  "official": "The widget injects its own styles and auto-adapts to the site; conflicts with site-wide styles can cause visual glitches.",
  "cause": "The Meiqia script injects CSS at runtime; if site-wide styles (universal selectors / high-priority rules / resets) override its classes first, the button position, stacking and fonts break - a side effect of \"dynamic injection + sharing one document style space\".",
  "fix": "F12 to see which site rule overrides the Meiqia container; scope site-wide styles more narrowly / reduce their impact on generic classes; if needed ask Meiqia to adjust the container layering.",
  "scene": "The site uses a global rule like * { position:... } and the chat button gets shoved to the middle -> narrow the global selector and it's back."
 },
 "按钮跑屏外": {
  "cat": "Display issues",
  "name": "Button off-screen / covered",
  "alias": "off-screen invisible covered z-index stacking fixed position overlaid offset position 跑屏外",
  "trigger": "The button is in the DOM but visually missing / covered by other elements",
  "official": "The widget button appears as a fixed-position float; if covered by other fixed elements, adjust the stacking or position.",
  "cause": "Other position:fixed elements on the site (back-to-top, floating ads, a custom support bar) with a higher z-index cover the Meiqia button, or the theme miscomputes its coords, so the button is \"off-screen / covered\".",
  "fix": "Select the Meiqia container in F12 to see its real coords / z-index; raise it or lower the covering element's z-index; avoid stacking multiple fixed floats in one corner.",
  "scene": "A \"back-to-top\" and the chat both sit bottom-right and cover each other -> offset the positions or adjust z-index and both show."
 },
 "插件冲突": {
  "cat": "Display issues",
  "name": "Third-party plugin / analytics DOM conflict",
  "alias": "plugin conflict heatmap analytics seo conversion third-party dom overlay stacking interference script conflict 插件冲突",
  "trigger": "After adding a heatmap / analytics / ad plugin, chat won't show / behaves oddly",
  "official": "Other scripts on the page that modify the DOM or intercept requests can affect the widget's normal loading and display.",
  "cause": "Heatmap / analytics / conversion scripts rewrite the DOM, inject overlays or intercept requests; since they and Meiqia both inject into the same document, stacking / events interfere and the Meiqia container gets covered or its init interrupted.",
  "fix": "Disable suspect plugins one by one to locate the conflict; adjust load order / container layering; have heatmaps etc. avoid the Meiqia container area.",
  "scene": "Chat became unclickable after adding a heatmap plugin -> the heatmap overlay sat above chat; adjust layering or exclude the area and it's back."
 },
 "SPA路由": {
  "cat": "Framework integration",
  "name": "Widget disappears after an SPA route change",
  "alias": "spa vue react next angular single page route change disappears history pushstate re-mount SPA路由",
  "trigger": "Chat on the home page, gone after the front-end route navigates elsewhere",
  "official": "For single-page apps (SPA), use the framework's route hooks to load / init the Meiqia widget so it fits front-end routing.",
  "cause": "An SPA swaps views via front-end routing, destroying / rebuilding the DOM, but meiqia.js injects once on first load by default and won't auto-rebuild on a route change, so \"change page, chat's gone\".",
  "fix": "Use _MEIQIA('manualInit') to stop auto-init, and call _MEIQIA('init') in a route hook (React useEffect / Vue mounted / router afterEach) to re-mount on demand; avoid initializing multiple instances.",
  "scene": "A Next.js site has chat on the home page, gone on the detail page -> add _MEIQIA('init') in the route hook to re-mount on each navigation."
 },
 "手动初始化": {
  "cat": "Framework integration",
  "name": "Manual init needed (manualInit / init)",
  "alias": "manualinit init manual initialization auto init _meiqia api timing loaded 手动初始化",
  "trigger": "You want to control when Meiqia initializes, or the auto-init timing is wrong",
  "official": "Add _MEIQIA('manualInit') after the Meiqia embed code to stop auto-init after download; call _MEIQIA('init') to initialize manually when needed.",
  "cause": "By default Meiqia auto-inits right after download; when you need the container ready / customer info passed / the route settled first, that timing is \"too early\" - switch to manual init to control the sequence.",
  "fix": "Add _MEIQIA('manualInit') after the embed code; call _MEIQIA('init') once conditions are ready (DOM / login state / route); call info APIs in order within the init timing per the docs.",
  "scene": "You want to init chat with the user's identity after login -> manualInit + init in the login callback, avoiding an anonymous first connect."
 },
 "entId错误": {
  "cat": "Config / authorization",
  "name": "entId mismatch / agents get no chats",
  "alias": "entid company id unique mismatch no chats cant serve id lookup wrong code 不一致",
  "trigger": "The chat window opens, but agents receive no visitor messages",
  "official": "The number after entId in the code is your company's unique id; a mismatch with the workbench means agents can't serve the chat - find the company ID under Settings - Team - ID lookup.",
  "cause": "entId binds the snippet to a specific company account. With someone else's / another environment's code, or mixed-up accounts, the front end loads the window but messages go to \"another company\", so this workbench gets none - the classic \"shows fine but receives nothing\".",
  "fix": "Check the company ID under Settings - Team - ID lookup against the entId in the page code; if mismatched, replace it with the latest code copied from this company's console.",
  "scene": "Forgot to swap the test-account code for the production one -> visitors can chat on the site but the production workbench gets nothing; fix the entId and it connects."
 },
 "域名未授权": {
  "cat": "Config / authorization",
  "name": "Site domain not authorized in the console",
  "alias": "domain not authorized add integration site whitelist production domain test domain site list 域名未授权",
  "trigger": "Works on test / locally, but the production domain won't load / serve",
  "official": "The Meiqia console can \"Add integration site\", each with its own config; a new site must be configured in the console before it integrates properly.",
  "cause": "Meiqia manages multiple sites as \"integration sites\"; the domain must be registered / authorized in the console to be recognized. A new production domain not added there may not be accepted or mapped to the right config.",
  "fix": "Go to Settings - Web widget / Integration sites, \"Add integration site\" for the production domain and use its dedicated code; verify the domain / subdomain spelling.",
  "scene": "Tuned it on localhost, chat won't serve on the live www site -> add the production domain as an integration site in the console."
 },
 "子渠道": {
  "cat": "Config / authorization",
  "name": "Multi-site / sub-channel (probe) cross-wiring",
  "alias": "sub-channel probe multi-site business lines independent config cross-wired routing entries 子渠道",
  "trigger": "Multiple sites / business lines share one snippet, and routing / auto-messages get mixed",
  "official": "Meiqia supports deploying different widgets and chat links per site (sub-channels / probe); beyond the default site you can add more, each with its own config.",
  "cause": "Different business lines need different agent groups / auto-messages, but if every site shares the one default snippet, sources can't be told apart and configs cross-wire. Sub-channels (probe) are designed for \"one company, many entries, routed\".",
  "fix": "Under Settings - Web widget, \"Add integration site\" to create a separate sub-channel per site, each with its own code, appearance and auto-message config.",
  "scene": "The main site and a campaign page share one snippet and you can't tell where visitors came from -> create a separate sub-channel for the campaign page."
 },
 "移动端不显示": {
  "cat": "Mobile / SDK",
  "name": "Mobile web chat not showing / needs separate deploy",
  "alias": "mobile phone h5 mobile site not showing separate deploy same code adapt wap 移动端",
  "trigger": "PC site has chat, the mobile / H5 site doesn't",
  "official": "The widget code auto-adapts to the site; mobile / PC use the same snippet but it must be deployed separately.",
  "cause": "Many teams have separate PC and mobile pages / templates and only pasted the code in the PC template. The snippet is the same and self-adapts, but the \"paste\" step must happen in the mobile template too; miss it and mobile has none.",
  "fix": "Deploy the same Meiqia code before </body> of the mobile / H5 template too; verify meiqia.js loads on both via F12; give mobile its own appearance if needed.",
  "scene": "Chat's always on the PC site but not on the phone site -> the mobile template has no code; add it and it appears."
 },
 "SDK接入": {
  "cat": "Mobile / SDK",
  "name": "Native app SDK integration / AppKey",
  "alias": "sdk app native appkey add app config integrate ios android develop embed SDK接入",
  "trigger": "You want chat inside your own app, not the web",
  "official": "In-app integration needs an AppKey from the Meiqia workbench (Settings - Integration - SDK, \"Add APP config\"), with developers integrating the iOS / Android SDK per the official docs and demo.",
  "cause": "An app uses the native SDK, not web JS: first \"Add APP config\" for an AppKey, then integrate the SDK per platform for the chat UI, unread counts, push, etc. - a completely different path from the web widget.",
  "fix": "Add APP config in the console for an AppKey; integrate the SDK per the iOS / Android demo with the AppKey filled in; verify chat navigation / unread / push.",
  "scene": "You want live chat in your own app -> go with SDK + AppKey, not stuffing the web JS into a WebView."
 },
 "SDK推送": {
  "cat": "Mobile / SDK",
  "name": "SDK message push not arriving",
  "alias": "push not arriving no push custom push server left app offline message notification SDK推送",
  "trigger": "After SDK integration, users get no message push once they leave the app",
  "official": "Meiqia SDK push has two modes: with \"no push\", agent messages reach only inside the app (open the app to receive); with a \"custom push server\", users get push to the phone even after leaving the app.",
  "cause": "Missing \"offline push\" usually means the push mode is \"no push\", or there's no custom push server / per-platform push certs. The path is \"Meiqia -> app server -> user's phone\"; a missing link means in-app-only receipt.",
  "fix": "In the APP config, choose \"custom push server\" and set up each platform's push (APNs / vendor channels); verify offline push per the docs; distinguish \"in-app message\" from \"system push\".",
  "scene": "In testing it arrives with the app open but not after lock-screen / exit -> push was set to \"no push\"; switch to a custom push server for offline receipt."
 },
 "自定义按钮": {
  "cat": "API calls",
  "name": "Hide the default button / custom entry",
  "alias": "withoutbtn showpanel hide button custom button own button open chat contact support entry 自定义按钮",
  "trigger": "You want your own \"Contact support\" button and to hide Meiqia's built-in round one",
  "official": "Call _MEIQIA('withoutBtn') to not show Meiqia's built-in chat button; after init succeeds, call _MEIQIA('showPanel') to open the chat.",
  "cause": "By default the built-in floating button renders; to use your own entry you must declare \"no built-in button\" before / during init and bind \"open chat\" to your element - an API-timing matter, not a \"broken button\".",
  "fix": "Call _MEIQIA('withoutBtn') before / during the embed / init; bind _MEIQIA('showPanel') to your button's onclick; ensure these run after the widget init succeeds.",
  "scene": "The page already has a prominent \"Chat now\" button -> withoutBtn hides the built-in one, and clicking yours calls showPanel to open the window."
 },
 "传递顾客信息": {
  "cat": "API calls",
  "name": "Passing / syncing customer info has no effect",
  "alias": "pass customer info sync customer identity metadata customer data no effect timing init custom info 传递顾客信息",
  "trigger": "You want to pass a logged-in user's name / tier / order to agents, but they can't see it",
  "official": "The Meiqia web widget offers \"pass customer info\", \"sync customer identity\" and \"add customer custom event info\" APIs to bring visitor data into the chat.",
  "cause": "These APIs must be called within the correct init timing: set after init succeeds (or with manualInit + init timing). Too early / too late, or wrong field formats, and it's \"set but no effect\".",
  "fix": "Call the pass / sync customer-info APIs within the successful-init timing per the docs; verify field names and formats; in an SPA, re-pass after each init.",
  "scene": "You pass the username to agents on a logged-in site but it shows anonymous -> the call ran before init; move it into the init-success callback and it carries through."
 }
};
window.LABELS = {"miss": "Not listed - try another keyword (not showing / adblock / entid / spa / sdk) or see the full table below.", "codeword": ""};
window.FIELDS = [["trigger", "When it shows up"], ["official", "L1 behavior / official positioning"], ["cause", "L2 root cause"], ["fix", "How to fix"], ["scene", "Real case"]];
window.THEAD = ["Symptom", "Bucket", "L1 behavior / official positioning", "L2 root cause"];
