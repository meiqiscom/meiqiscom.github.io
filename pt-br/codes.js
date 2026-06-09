window.CODES = {
 "窗口不显示": {
  "cat": "Falha de carga",
  "name": "Janela / balão de chat não aparece de jeito nenhum",
  "alias": "não aparece widget invisível sem balão not showing 不显示",
  "trigger": "Após colar o código não há balão / botão de chat no canto inferior direito",
  "official": "O widget web do 美洽 carrega uma janela de chat flutuante com um único snippet JS colado; confirme que o código está bem embutido e o site de integração configurado no console.",
  "cause": "O widget é meiqia.js injetado no DOM após carga assíncrona, então «nada de nada» costuma significar «o script nunca carregou»: posição errada, bloqueado por adblock / cache, ou domínio / entId divergentes, então a injeção nunca rodou.",
  "fix": "F12 → Network, busque meiqia.js: sem requisição → código sem efeito (verifique a posição / limpe o cache); requisição mas não-200 → bloqueado ou problema de caminho; tudo ok mas ainda oculto → verifique entId / autorização de domínio e os grupos abaixo.",
  "scene": "Código colado, recarrega, sem balão, e o F12 não mostra requisição de meiqia.js → o código não está no template ao vivo / está em cache; limpe o cache e refaça o deploy."
 },
 "按钮不显示": {
  "cat": "Problemas de exibição",
  "name": "Script carregou mas falta o botão de chat",
  "alias": "sem botão botão sumido button missing console ok 按钮不显示",
  "trigger": "F12 mostra meiqia.js em 200, mas o botão de chat simplesmente não está na página",
  "official": "O código do widget se adapta ao site e mostra um botão de chat; se a exibição falhar, verifique se está oculto por estilos ou se a inicialização foi interrompida.",
  "cause": "Se o script carrega mas falta o botão, costuma ser problema de «camada de exibição»: o CSS global sobrescreve a posição / coloca display:none, o z-index perde, ou outro elemento fixo o cobre; outro erro JS também pode abortar a inicialização.",
  "fix": "F12 → Elements, ache o contêiner do 美洽 — presente, oculto ou fora da tela?; desative temporariamente CSS / scripts próprios para retestar; veja no console um erro que abortou a execução.",
  "scene": "meiqia.js 200, console typeof _MEIQIA é function, mas sem botão → o CSS do tema o posicionou fora da tela; corrija o estilo / posição e ele aparece."
 },
 "广告拦截": {
  "cat": "Falha de carga",
  "name": "meiqia.js bloqueado por uma extensão de adblock",
  "alias": "adblock ublock adguard err_blocked_by_client bloqueado whitelist extensão 广告拦截",
  "trigger": "Console: meiqia.js net::ERR_BLOCKED_BY_CLIENT, e a janela de chat não aparece",
  "official": "O script de chat do 美洽 vem de um domínio de terceiros; se há uma extensão de bloqueio instalada, ela pode tratá-lo como anúncio / rastreador e impedir a carga — desative o bloqueio ou whitelist.",
  "cause": "ERR_BLOCKED_BY_CLIENT significa que uma extensão do navegador (AdBlock / uBlock / AdGuard) bloqueou a requisição por suas listas de filtros. O script do 美洽 é «terceiros fora do domínio + comunicação em tempo real», que essas regras costumam confundir com anúncio / rastreador, causando falha falsa «console ok, lado do usuário ausente».",
  "fix": "Reteste em anônima ou com o adblock off — se aparece, o bloqueio era a causa; peça aos usuários para whitelist o site; o front pode carregar o script de chat de forma adiada / condicional para driblar algumas regras automáticas.",
  "scene": "Aparece bem na sua máquina, alguns usuários relatam sem chat → têm um adblock; o console mostra claramente ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Falha de carga",
  "name": "meiqia.js 404 / status ruim / conteúdo misto",
  "alias": "404 status não carregado cache cdn https conteúdo misto certificado 脚本未加载",
  "trigger": "meiqia.js é não-200 no F12 → Network (404 / bloqueado / pending)",
  "official": "Após o deploy, busque meiqia.js no painel Network; um status 200 significa que o script está bem posicionado e carregado.",
  "cause": "Causas comuns de não-200: código retido por cache de página / CDN (sem atualizar após publicar), carga em página HTTP / cadeia de certificado incompleta disparando bloqueio de conteúdo misto, ou código quebrado / copiado parcialmente. Com este passo falho, injeção e conexão nunca ocorrem.",
  "fix": "Limpe o cache CDN / navegador (ou anônima) após publicar; garanta HTTPS completo com cadeia de certificado íntegra e sem conteúdo misto; verifique se o código copiado está completo e não escapado.",
  "scene": "Editou o template mas o site ao vivo ainda serve o código de chat antigo → o cache CDN não foi atualizado; um refresh forçado / limpeza de cache deixa meiqia.js em 200."
 },
 "代码位置": {
  "cat": "Falha de carga",
  "name": "Código mal posicionado (bloqueio no head / sem efeito)",
  "alias": "posição onde colocar head body fim bloqueio embutir tag de fechamento 代码位置",
  "trigger": "Código no <head> ou dentro de um script async; página em branco / chat intermitente",
  "official": "O 美洽 recomenda colar o código no fim da página, antes de </body>; o widget roda após o conteúdo principal carregar.",
  "cause": "O widget precisa injetar seu contêiner após o DOM estar pronto. No <head> bloqueia o render (tela branca primeiro em rede lenta) ou roda antes do DOM pronto e falha; dentro de algum escopo async / de módulo a ordem de carga também pode dar errado.",
  "fix": "Ponha o JS do 美洽 no rodapé comum de cada página, antes de </body>; para SPAs veja a entrada «rota SPA» e use manualInit; garanta que um bundler não o elimine por tree-shaking.",
  "scene": "Enfiou o código no <head> por comodidade; em rede lenta os usuários veem tela branca primeiro e o chat surge tarde → mova para antes de </body>."
 },
 "样式错乱": {
  "cat": "Problemas de exibição",
  "name": "Estilo da janela / botão de chat quebrado",
  "alias": "estilo quebrado css conflito distorcido desalinhado tema sobrescreve 样式错乱",
  "trigger": "A janela / botão de chat aparece mas com estilo quebrado / desalinhado",
  "official": "O widget injeta seus próprios estilos e se adapta ao site; conflitos com estilos globais podem causar falhas visuais.",
  "cause": "O script do 美洽 injeta CSS em tempo de execução; se estilos globais (seletores universais / regras de alta prioridade / resets) sobrescrevem suas classes primeiro, posição, empilhamento e fontes quebram — efeito colateral de «injeção dinâmica + compartilhar um mesmo espaço de estilo do documento».",
  "fix": "F12 para ver qual regra do site sobrescreve o contêiner do 美洽; restrinja os estilos globais / reduza o impacto em classes genéricas; se preciso, peça ao 美洽 ajustar o empilhamento do contêiner.",
  "scene": "O site usa uma regra global tipo * { position:... } e o botão é empurrado para o centro → restrinja o seletor global e volta."
 },
 "按钮跑屏外": {
  "cat": "Problemas de exibição",
  "name": "Botão fora da tela / coberto",
  "alias": "fora da tela invisível coberto z-index empilhamento posição fixa deslocado 跑屏外",
  "trigger": "O botão está no DOM mas visualmente ausente / coberto por outros elementos",
  "official": "O botão do widget aparece como flutuante de posição fixa; se coberto por outros elementos fixos, ajuste o empilhamento ou a posição.",
  "cause": "Outros elementos position:fixed do site (voltar ao topo, anúncios flutuantes, uma barra de suporte própria) com z-index maior cobrem o botão do 美洽, ou o tema calcula mal suas coordenadas, deixando-o «fora da tela / coberto».",
  "fix": "Selecione o contêiner do 美洽 no F12 para ver coordenadas / z-index reais; suba-o ou baixe o z-index do elemento que cobre; evite empilhar vários flutuantes fixos num canto.",
  "scene": "Um «voltar ao topo» e o chat estão no canto inferior direito e se cobrem → desloque as posições ou ajuste o z-index e ambos aparecem."
 },
 "插件冲突": {
  "cat": "Problemas de exibição",
  "name": "Conflito de DOM com plugin / analytics de terceiros",
  "alias": "conflito plugin heatmap analytics seo conversão terceiros dom overlay empilhamento interferência 插件冲突",
  "trigger": "Após adicionar um plugin de heatmap / analytics / anúncios, o chat não aparece / age estranho",
  "official": "Outros scripts da página que modificam o DOM ou interceptam requisições podem afetar a carga e exibição normais do widget.",
  "cause": "Scripts de heatmap / analytics / conversão reescrevem o DOM, injetam overlays ou interceptam requisições; como eles e o 美洽 injetam no mesmo documento, empilhamento / eventos interferem e o contêiner do 美洽 é coberto ou seu init interrompido.",
  "fix": "Desative plugins suspeitos um a um para localizar o conflito; ajuste ordem de carga / empilhamento do contêiner; faça heatmaps etc. evitarem a área do contêiner do 美洽.",
  "scene": "O chat ficou não clicável após adicionar um plugin de heatmap → o overlay do heatmap ficou acima do chat; ajuste o empilhamento ou exclua a área e volta."
 },
 "SPA路由": {
  "cat": "Integração de framework",
  "name": "O widget some após troca de rota SPA",
  "alias": "spa vue react next angular página única troca de rota some history pushstate remontar SPA路由",
  "trigger": "Chat na home, sumido após a rota do front navegar para outro lugar",
  "official": "Para apps de página única (SPA), use os hooks de rota do framework para carregar / iniciar o widget do 美洽 para encaixar no roteamento do front.",
  "cause": "Uma SPA troca de vistas via roteamento do front, destruindo / recriando o DOM, mas meiqia.js injeta uma vez na primeira carga por padrão e não é recriado sozinho na troca de rota, então «troca de página, chat some».",
  "fix": "Use _MEIQIA('manualInit') para parar o auto-init e chame _MEIQIA('init') num hook de rota (React useEffect / Vue mounted / router afterEach) para remontar sob demanda; evite iniciar várias instâncias.",
  "scene": "Um site Next.js tem chat na home, não na página de detalhe → adicione _MEIQIA('init') no hook de rota para remontar a cada navegação."
 },
 "手动初始化": {
  "cat": "Integração de framework",
  "name": "Init manual necessário (manualInit / init)",
  "alias": "manualinit init inicialização manual auto init _meiqia api momento carregado 手动初始化",
  "trigger": "Você quer controlar quando o 美洽 inicia, ou o momento do auto-init está errado",
  "official": "Adicione _MEIQIA('manualInit') após o código de embed do 美洽 para parar o auto-init após o download; chame _MEIQIA('init') para iniciar manualmente quando preciso.",
  "cause": "Por padrão o 美洽 auto-inicia logo após o download; quando você precisa do contêiner pronto / dados do cliente passados / a rota estável primeiro, esse momento é «cedo demais» — mude para init manual para controlar a sequência.",
  "fix": "Adicione _MEIQIA('manualInit') após o código; chame _MEIQIA('init') quando as condições estiverem prontas (DOM / sessão / rota); chame as APIs de dados em ordem dentro do tempo de init conforme a doc.",
  "scene": "Você quer iniciar o chat com a identidade do usuário após o login → manualInit + init no callback de login, evitando uma primeira conexão anônima."
 },
 "entId错误": {
  "cat": "Config / autorização",
  "name": "entId divergente / atendentes não recebem chats",
  "alias": "entid id empresa único divergente sem chats busca de id código errado 不一致",
  "trigger": "A janela de chat abre, mas os atendentes não recebem mensagens de visitantes",
  "official": "O número após entId no código é o id único da sua empresa; se não bate com o painel, os atendentes não conseguem atender o chat — ache o ID da empresa em Config - Equipe - busca de ID.",
  "cause": "entId vincula o snippet a uma conta de empresa específica. Com código de outro / de outro ambiente, ou contas misturadas, o front carrega a janela mas as mensagens vão para «outra empresa», então este painel não recebe nenhuma — o clássico «parece ok mas não recebe nada».",
  "fix": "Compare o ID da empresa em Config - Equipe - busca de ID com o entId do código da página; se divergir, substitua pelo código mais recente copiado do console desta empresa.",
  "scene": "Esqueceu de trocar o código da conta de teste pelo de produção → visitantes podem conversar mas o painel de produção não recebe nada; corrija o entId e conecta."
 },
 "域名未授权": {
  "cat": "Config / autorização",
  "name": "Domínio do site não autorizado no console",
  "alias": "domínio não autorizado adicionar site de integração whitelist domínio produção domínio teste lista de sites 域名未授权",
  "trigger": "Funciona em teste / local, mas o domínio de produção não carrega / não atende",
  "official": "O console do 美洽 permite «Adicionar site de integração», cada um com sua config; um site novo deve ser configurado no console antes de integrar bem.",
  "cause": "O 美洽 gerencia vários sites como «sites de integração»; o domínio deve ser registrado / autorizado no console para ser reconhecido. Um domínio de produção novo não adicionado pode não ser aceito ou mapeado para a config errada.",
  "fix": "Vá em Config - widget web / sites de integração, «Adicionar site de integração» para o domínio de produção e use seu código dedicado; verifique a grafia do domínio / subdomínio.",
  "scene": "Ajustou no localhost, o chat não atende no www ao vivo → adicione o domínio de produção como site de integração no console."
 },
 "子渠道": {
  "cat": "Config / autorização",
  "name": "Multi-site / subcanal (sonda) cruzado",
  "alias": "subcanal sonda multi-site linhas de negócio config independente cruzado roteamento entradas 子渠道",
  "trigger": "Vários sites / linhas de negócio compartilham um snippet e o roteamento / mensagens automáticas se misturam",
  "official": "O 美洽 suporta deploy de widgets e links de chat diferentes por site (subcanais / sonda); além do site padrão você pode adicionar mais, cada um com sua config.",
  "cause": "Linhas de negócio diferentes precisam de grupos de atendentes / mensagens automáticas diferentes, mas se cada site compartilha o único snippet padrão, as origens não se distinguem e as configs se cruzam. Subcanais (sonda) são feitos para «uma empresa, várias entradas, roteadas».",
  "fix": "Em Config - widget web, «Adicionar site de integração» para criar um subcanal separado por site, cada um com seu código, aparência e mensagens automáticas.",
  "scene": "O site principal e uma página de campanha compartilham um snippet e você não distingue a origem → crie um subcanal à parte para a campanha."
 },
 "移动端不显示": {
  "cat": "Mobile / SDK",
  "name": "Chat web mobile não aparece / precisa de deploy à parte",
  "alias": "mobile celular h5 site mobile não aparece deploy à parte mesmo código adaptar wap 移动端",
  "trigger": "O site PC tem chat, o site mobile / H5 não",
  "official": "O código do widget se adapta ao site; mobile / PC usam o mesmo snippet mas devem ser deployados separadamente.",
  "cause": "Muitas equipes têm páginas / templates PC e mobile separados e só colaram o código no template PC. O snippet é o mesmo e se autoadapta, mas o passo de «colar» deve acontecer também no template mobile; omitido, o mobile não tem chat.",
  "fix": "Deploye o mesmo código do 美洽 antes de </body> também no template mobile / H5; verifique via F12 que meiqia.js carrega em ambos; dê ao mobile aparência própria se preciso.",
  "scene": "O chat está sempre no site PC mas não no site do celular → o template mobile não tem código; adicione e ele aparece."
 },
 "SDK接入": {
  "cat": "Mobile / SDK",
  "name": "Integração do SDK nativo de app / AppKey",
  "alias": "sdk app nativo appkey adicionar config app integrar ios android desenvolver embutir SDK接入",
  "trigger": "Você quer chat dentro do seu próprio app, não na web",
  "official": "A integração in-app precisa de um AppKey do painel do 美洽 (Config - Integração - SDK, «Adicionar config APP»), e os devs integram o SDK iOS / Android conforme a doc e o demo oficiais.",
  "cause": "Um app usa o SDK nativo, não JS web: primeiro «Adicionar config APP» para um AppKey, depois integre o SDK por plataforma para a UI de chat, não lidas, push, etc. — um caminho totalmente diferente do widget web.",
  "fix": "Adicione config APP no console para um AppKey; integre o SDK conforme o demo iOS / Android com o AppKey; verifique navegação de chat / não lidas / push.",
  "scene": "Você quer chat ao vivo no seu app → vá de SDK + AppKey, não enfie o JS web num WebView."
 },
 "SDK推送": {
  "cat": "Mobile / SDK",
  "name": "Push de mensagens do SDK não chega",
  "alias": "push não chega sem push servidor de push próprio sair do app mensagem offline notificação SDK推送",
  "trigger": "Após integrar o SDK, os usuários não recebem push ao sair do app",
  "official": "O push do SDK do 美洽 tem dois modos: com «sem push», as mensagens do atendente chegam só dentro do app (abra-o para receber); com um «servidor de push próprio», os usuários recebem push no celular mesmo após sair do app.",
  "cause": "A falta de «push offline» costuma significar que o modo de push é «sem push», ou não há servidor de push próprio / certificados de push por plataforma. O caminho é «美洽 → servidor do app → celular do usuário»; um elo faltando deixa só recepção in-app.",
  "fix": "Na config APP, escolha «servidor de push próprio» e configure o push de cada plataforma (APNs / canais do fabricante); verifique o push offline conforme a doc; distinga «mensagem in-app» de «push do sistema».",
  "scene": "No teste chega com o app aberto mas não após bloquear / sair → o push estava em «sem push»; mude para servidor de push próprio para recepção offline."
 },
 "自定义按钮": {
  "cat": "Chamadas de API",
  "name": "Ocultar o botão padrão / entrada própria",
  "alias": "withoutbtn showpanel ocultar botão botão próprio abrir chat suporte entrada 自定义按钮",
  "trigger": "Você quer seu próprio botão «Suporte» e ocultar o redondo nativo do 美洽",
  "official": "Chame _MEIQIA('withoutBtn') para não mostrar o botão nativo do 美洽; após um init bem-sucedido, chame _MEIQIA('showPanel') para abrir o chat.",
  "cause": "Por padrão o botão flutuante nativo é renderizado; para usar sua entrada você deve declarar «sem botão nativo» antes / durante o init e vincular «abrir chat» ao seu elemento — uma questão de tempo de API, não um «botão quebrado».",
  "fix": "Chame _MEIQIA('withoutBtn') antes / durante o embed / init; vincule _MEIQIA('showPanel') ao onclick do seu botão; garanta que rodem após um init bem-sucedido do widget.",
  "scene": "A página já tem um botão «Conversar agora» visível → withoutBtn oculta o nativo, e um clique no seu chama showPanel para abrir a janela."
 },
 "传递顾客信息": {
  "cat": "Chamadas de API",
  "name": "Passar / sincronizar dados do cliente sem efeito",
  "alias": "passar dados cliente sincronizar identidade metadata dados cliente sem efeito momento init info personalizada 传递顾客信息",
  "trigger": "Você quer passar o nome / nível / pedido de um usuário logado aos atendentes, mas eles não veem",
  "official": "O widget web do 美洽 oferece APIs «passar dados do cliente», «sincronizar identidade do cliente» e «adicionar info de evento personalizada» para levar dados do visitante ao chat.",
  "cause": "Essas APIs devem ser chamadas dentro do tempo de init correto: após um init bem-sucedido (ou no tempo de manualInit + init). Cedo / tarde demais, ou formatos de campo errados, e fica «setado mas sem efeito».",
  "fix": "Chame as APIs de passar / sincronizar dados dentro do tempo de init bem-sucedido conforme a doc; verifique nomes e formatos de campo; numa SPA, repasse após cada init.",
  "scene": "Você passa o nome do usuário aos atendentes num site logado mas aparece anônimo → a chamada rodou antes do init; mova para o callback de init bem-sucedido e é transmitido."
 }
};
window.LABELS = {"miss": "Não listado — tente outra palavra-chave (not showing / adblock / entId / SPA / sdk) ou veja a tabela completa abaixo.", "codeword": ""};
window.FIELDS = [["trigger", "Quando aparece"], ["official", "Comportamento L1 / posicionamento oficial"], ["cause", "Causa raiz L2"], ["fix", "Como resolver"], ["scene", "Caso real"]];
window.THEAD = ["Sintoma", "Grupo", "Comportamento L1 / posicionamento oficial", "Causa raiz L2"];
