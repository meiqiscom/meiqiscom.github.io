window.CODES = {
 "窗口不显示": {
  "cat": "Fallo de carga",
  "name": "La ventana / burbuja de chat no aparece en absoluto",
  "alias": "no aparece widget invisible sin burbuja not showing 不显示",
  "trigger": "Tras pegar el código no hay burbuja / botón de chat abajo a la derecha",
  "official": "El widget web de 美洽 carga una ventana de chat flotante con un solo snippet JS pegado; confirma que el código esté bien incrustado y el sitio de integración configurado en la consola.",
  "cause": "El widget es meiqia.js inyectado en el DOM tras una carga asíncrona, así que «nada en absoluto» suele significar «el script nunca cargó»: mala ubicación, bloqueado por adblock / caché, o dominio / entId sin coincidir, así que la inyección nunca corrió.",
  "fix": "F12 → Network, busca meiqia.js: sin petición → código sin efecto (revisa ubicación / limpia caché); con petición pero no-200 → bloqueado o problema de ruta; todo bien pero sigue oculto → revisa entId / autorización de dominio y los grupos de abajo.",
  "scene": "Pegaste el código, recargas, sin burbuja, y F12 no muestra ninguna petición de meiqia.js → el código no está en la plantilla en vivo / está cacheado; limpia caché y vuelve a desplegar."
 },
 "按钮不显示": {
  "cat": "Problemas de visualización",
  "name": "El script cargó pero falta el botón de chat",
  "alias": "sin boton boton no aparece button missing consola ok 按钮不显示",
  "trigger": "F12 muestra meiqia.js en 200, pero el botón de chat simplemente no está en la página",
  "official": "El código del widget se adapta al sitio y muestra un botón de chat; si la visualización falla, revisa si está oculto por estilos o si la inicialización se interrumpió.",
  "cause": "Si el script carga pero falta el botón, suele ser un problema de «capa de visualización»: el CSS global anula la posición / pone display:none, pierde el z-index, u otro elemento fijo lo tapa; otro error JS en la página también puede abortar la inicialización.",
  "fix": "F12 → Elements, busca el contenedor de 美洽 — ¿está presente, oculto o fuera de pantalla?; desactiva temporalmente CSS / scripts propios para reprobar; revisa la consola por un error que abortó la ejecución.",
  "scene": "meiqia.js 200, consola typeof _MEIQIA es function, pero sin botón → el CSS del tema lo posicionó fuera de pantalla; arregla el estilo / posición y aparece."
 },
 "广告拦截": {
  "cat": "Fallo de carga",
  "name": "meiqia.js bloqueado por una extensión de adblock",
  "alias": "adblock ublock adguard err_blocked_by_client bloqueado lista blanca extension 广告拦截",
  "trigger": "Consola: meiqia.js net::ERR_BLOCKED_BY_CLIENT, y la ventana de chat no aparece",
  "official": "El script de chat de 美洽 viene de un dominio de terceros; si hay una extensión de bloqueo instalada puede tratarlo como anuncio / rastreador e impedir la carga — desactiva el bloqueo o añade a lista blanca.",
  "cause": "ERR_BLOCKED_BY_CLIENT significa que una extensión del navegador (AdBlock / uBlock / AdGuard) bloqueó la petición por sus listas de filtros. El script de 美洽 es «terceros fuera de dominio + comunicación en tiempo real», que esas reglas suelen confundir con anuncio / rastreador, causando un fallo falso «consola bien, lado del usuario ausente».",
  "fix": "Reprueba en incógnito o con el adblock apagado — si aparece, el bloqueo era la causa; pide a los usuarios que añadan el sitio a lista blanca; el frontend puede cargar el script de forma diferida / condicional para esquivar algunas reglas automáticas.",
  "scene": "Se ve bien en tu equipo, algunos usuarios reportan sin chat → tienen un adblock; la consola muestra claramente ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Fallo de carga",
  "name": "meiqia.js 404 / estado erróneo / contenido mixto",
  "alias": "404 estado no cargado cache cdn https contenido mixto certificado 脚本未加载",
  "trigger": "meiqia.js es no-200 en F12 → Network (404 / bloqueado / pending)",
  "official": "Tras desplegar, busca meiqia.js en el panel Network; un estado 200 significa que el script está bien ubicado y cargado.",
  "cause": "Causas comunes de no-200: código retenido por caché de página / CDN (sin refrescar tras publicar), carga en página HTTP / cadena de certificado incompleta que dispara bloqueo de contenido mixto, o código roto / copiado parcialmente. Con este paso fallido, la inyección y la conexión nunca ocurren.",
  "fix": "Limpia la caché CDN / navegador (o usa incógnito) tras publicar; asegura HTTPS completo con cadena de certificado íntegra y sin contenido mixto; verifica que el código copiado esté completo y sin escapar.",
  "scene": "Editaste la plantilla pero el sitio en vivo sigue sirviendo el código viejo → la caché CDN no se refrescó; un refresco forzado / limpieza de caché pone meiqia.js en 200."
 },
 "代码位置": {
  "cat": "Fallo de carga",
  "name": "Código mal ubicado (bloqueo en head / sin efecto)",
  "alias": "ubicacion donde poner head body abajo bloqueo incrustar etiqueta de cierre 代码位置",
  "trigger": "Código en <head> o dentro de un script asíncrono; página en blanco / chat intermitente",
  "official": "美洽 recomienda pegar el código al final de la página, antes de </body>; el widget corre tras cargar el contenido principal.",
  "cause": "El widget debe inyectar su contenedor tras estar listo el DOM. En <head> bloquea el render (pantalla en blanco primero en red lenta) o corre antes de listo el DOM y falla la inyección; dentro de algún ámbito asíncrono / de módulo el orden de carga también puede salir mal.",
  "fix": "Pon el JS de 美洽 en el pie común de cada página, antes de </body>; para SPAs ve la entrada «ruta SPA» y usa manualInit; asegúrate de que un bundler no lo elimine por tree-shaking.",
  "scene": "Metiste el código en <head> por comodidad; en red lenta los usuarios ven una pantalla en blanco y el chat sale tarde → muévelo antes de </body>."
 },
 "样式错乱": {
  "cat": "Problemas de visualización",
  "name": "Estilo roto de la ventana / botón de chat",
  "alias": "estilo roto css conflicto deformado descuadrado tema anula 样式错乱",
  "trigger": "La ventana / botón de chat aparece pero con estilo roto / descuadrado",
  "official": "El widget inyecta sus propios estilos y se adapta al sitio; los conflictos con estilos globales pueden causar fallos visuales.",
  "cause": "El script de 美洽 inyecta CSS en tiempo de ejecución; si los estilos globales (selectores universales / reglas de alta prioridad / resets) anulan sus clases primero, se rompen posición, apilamiento y fuentes — un efecto secundario de «inyección dinámica + compartir un mismo espacio de estilos del documento».",
  "fix": "F12 para ver qué regla del sitio anula el contenedor de 美洽; acota los estilos globales / reduce su impacto en clases genéricas; si hace falta, pide a 美洽 ajustar el apilamiento del contenedor.",
  "scene": "El sitio usa una regla global tipo * { position:... } y el botón se desplaza al centro → acota el selector global y vuelve."
 },
 "按钮跑屏外": {
  "cat": "Problemas de visualización",
  "name": "Botón fuera de pantalla / tapado",
  "alias": "fuera de pantalla invisible tapado z-index apilamiento posicion fija desplazado 跑屏外",
  "trigger": "El botón está en el DOM pero visualmente ausente / tapado por otros elementos",
  "official": "El botón del widget aparece como flotante de posición fija; si lo tapan otros elementos fijos, ajusta el apilamiento o la posición.",
  "cause": "Otros elementos position:fixed del sitio (volver arriba, anuncios flotantes, una barra de soporte propia) con mayor z-index tapan el botón de 美洽, o el tema calcula mal sus coordenadas, dejándolo «fuera de pantalla / tapado».",
  "fix": "Selecciona el contenedor de 美洽 en F12 para ver coordenadas / z-index reales; súbelo o baja el z-index del elemento que tapa; evita apilar varios flotantes fijos en una esquina.",
  "scene": "Un «volver arriba» y el chat están abajo a la derecha y se tapan → desplaza las posiciones o ajusta el z-index y ambos se ven."
 },
 "插件冲突": {
  "cat": "Problemas de visualización",
  "name": "Conflicto de DOM con plugin / analítica de terceros",
  "alias": "conflicto plugin mapa de calor analitica seo conversion terceros dom overlay apilamiento interferencia 插件冲突",
  "trigger": "Tras añadir un plugin de mapa de calor / analítica / anuncios, el chat no aparece / se comporta raro",
  "official": "Otros scripts de la página que modifican el DOM o interceptan peticiones pueden afectar la carga y visualización normales del widget.",
  "cause": "Los scripts de mapa de calor / analítica / conversión reescriben el DOM, inyectan overlays o interceptan peticiones; como ellos y 美洽 inyectan en el mismo documento, el apilamiento / eventos interfieren y el contenedor de 美洽 queda tapado o su init interrumpido.",
  "fix": "Desactiva plugins sospechosos uno a uno para localizar el conflicto; ajusta orden de carga / apilamiento del contenedor; haz que los mapas de calor eviten la zona del contenedor de 美洽.",
  "scene": "El chat dejó de ser clicable tras añadir un plugin de mapa de calor → el overlay del mapa quedó sobre el chat; ajusta el apilamiento o excluye la zona y vuelve."
 },
 "SPA路由": {
  "cat": "Integración de framework",
  "name": "El widget desaparece tras un cambio de ruta SPA",
  "alias": "spa vue react next angular una pagina cambio de ruta desaparece history pushstate remontar SPA路由",
  "trigger": "Hay chat en la página de inicio, desaparece al navegar a otra ruta del frontend",
  "official": "Para apps de una sola página (SPA), usa los hooks de ruta del framework para cargar / iniciar el widget de 美洽 y que encaje con el enrutado del frontend.",
  "cause": "Una SPA cambia vistas vía enrutado del frontend, destruyendo / recreando el DOM, pero meiqia.js inyecta una vez en la primera carga por defecto y no se recrea solo al cambiar de ruta, así que «cambias de página y el chat desaparece».",
  "fix": "Usa _MEIQIA('manualInit') para detener el auto-init y llama _MEIQIA('init') en un hook de ruta (React useEffect / Vue mounted / router afterEach) para remontar bajo demanda; evita iniciar varias instancias.",
  "scene": "Un sitio Next.js tiene chat en inicio, no en la página de detalle → añade _MEIQIA('init') en el hook de ruta para remontar en cada navegación."
 },
 "手动初始化": {
  "cat": "Integración de framework",
  "name": "Init manual necesario (manualInit / init)",
  "alias": "manualinit init inicializacion manual auto init _meiqia api momento cargado 手动初始化",
  "trigger": "Quieres controlar cuándo se inicia 美洽, o el momento del auto-init es incorrecto",
  "official": "Añade _MEIQIA('manualInit') tras el código de incrustación de 美洽 para detener el auto-init tras la descarga; llama _MEIQIA('init') para iniciar manualmente cuando haga falta.",
  "cause": "Por defecto 美洽 se autoinicia justo tras descargar; cuando necesitas el contenedor listo / datos del cliente pasados / la ruta estable primero, ese momento es «demasiado pronto» — cambia a init manual para controlar la secuencia.",
  "fix": "Añade _MEIQIA('manualInit') tras el código; llama _MEIQIA('init') cuando estén listas las condiciones (DOM / sesión / ruta); llama las APIs de datos en orden dentro del tiempo de init según la doc.",
  "scene": "Quieres iniciar el chat con la identidad del usuario tras el login → manualInit + init en el callback de login, evitando una primera conexión anónima."
 },
 "entId错误": {
  "cat": "Configuración / autorización",
  "name": "entId no coincide / los agentes no reciben chats",
  "alias": "entid id de empresa unico no coincide sin chats no atiende busqueda de id codigo erroneo 不一致",
  "trigger": "La ventana de chat abre, pero los agentes no reciben mensajes de visitantes",
  "official": "El número tras entId en el código es el id único de tu empresa; si no coincide con el panel los agentes no pueden atender el chat — encuentra el ID de empresa en Ajustes - Equipo - búsqueda de ID.",
  "cause": "entId vincula el snippet a una cuenta de empresa concreta. Con el código de otro / de otro entorno, o cuentas mezcladas, el frontend carga la ventana pero los mensajes van a «otra empresa», así que este panel no recibe ninguno — el clásico «se ve bien pero no recibe nada».",
  "fix": "Compara el ID de empresa en Ajustes - Equipo - búsqueda de ID con el entId del código de la página; si no coincide, reemplázalo con el código más reciente copiado de la consola de esta empresa.",
  "scene": "Olvidaste cambiar el código de la cuenta de prueba por el de producción → los visitantes pueden chatear pero el panel de producción no recibe nada; arregla el entId y conecta."
 },
 "域名未授权": {
  "cat": "Configuración / autorización",
  "name": "Dominio del sitio no autorizado en la consola",
  "alias": "dominio no autorizado anadir sitio de integracion lista blanca dominio produccion dominio prueba lista de sitios 域名未授权",
  "trigger": "Funciona en prueba / local, pero el dominio de producción no carga / no atiende",
  "official": "La consola de 美洽 permite «Añadir sitio de integración», cada uno con su config; un sitio nuevo debe configurarse en la consola antes de integrarse bien.",
  "cause": "美洽 gestiona varios sitios como «sitios de integración»; el dominio debe registrarse / autorizarse en la consola para ser reconocido. Un dominio de producción nuevo sin añadir puede no aceptarse o mapearse a la config equivocada.",
  "fix": "Ve a Ajustes - widget web / sitios de integración, «Añadir sitio de integración» para el dominio de producción y usa su código dedicado; verifica la ortografía del dominio / subdominio.",
  "scene": "Lo ajustaste en localhost, el chat no atiende en el www en vivo → añade el dominio de producción como sitio de integración en la consola."
 },
 "子渠道": {
  "cat": "Configuración / autorización",
  "name": "Multi-sitio / subcanal (sonda) cruzado",
  "alias": "subcanal sonda multi-sitio lineas de negocio config independiente cruzado enrutado entradas 子渠道",
  "trigger": "Varios sitios / líneas de negocio comparten un snippet y el enrutado / mensajes automáticos se mezclan",
  "official": "美洽 permite desplegar distintos widgets y enlaces de chat por sitio (subcanales / sonda); además del sitio por defecto puedes añadir más, cada uno con su config.",
  "cause": "Distintas líneas de negocio necesitan distintos grupos de agentes / mensajes automáticos, pero si cada sitio comparte el único snippet por defecto, no se distinguen orígenes y las configs se cruzan. Los subcanales (sonda) están diseñados para «una empresa, varias entradas, enrutadas».",
  "fix": "En Ajustes - widget web, «Añadir sitio de integración» para crear un subcanal separado por sitio, cada uno con su código, apariencia y mensajes automáticos.",
  "scene": "El sitio principal y una página de campaña comparten un snippet y no distingues el origen → crea un subcanal aparte para la campaña."
 },
 "移动端不显示": {
  "cat": "Móvil / SDK",
  "name": "Chat web móvil no aparece / necesita despliegue aparte",
  "alias": "movil telefono h5 sitio movil no aparece despliegue aparte mismo codigo adaptar wap 移动端",
  "trigger": "El sitio PC tiene chat, el sitio móvil / H5 no",
  "official": "El código del widget se adapta al sitio; móvil / PC usan el mismo snippet pero debe desplegarse por separado.",
  "cause": "Muchos equipos tienen páginas / plantillas PC y móvil separadas y solo pegaron el código en la plantilla PC. El snippet es el mismo y se autoadapta, pero el paso de «pegar» debe hacerse también en la plantilla móvil; si se omite, móvil no tiene chat.",
  "fix": "Despliega el mismo código de 美洽 antes de </body> también en la plantilla móvil / H5; verifica que meiqia.js cargue en ambas vía F12; da apariencia propia a móvil si hace falta.",
  "scene": "El chat siempre está en el sitio PC pero no en el del teléfono → la plantilla móvil no tiene código; añádelo y aparece."
 },
 "SDK接入": {
  "cat": "Móvil / SDK",
  "name": "Integración del SDK nativo de app / AppKey",
  "alias": "sdk app nativo appkey anadir config app integrar ios android desarrollar incrustar SDK接入",
  "trigger": "Quieres chat dentro de tu propia app, no en la web",
  "official": "La integración in-app necesita un AppKey del panel de 美洽 (Ajustes - Integración - SDK, «Añadir config APP»), y los desarrolladores integran el SDK iOS / Android según la doc y el demo oficiales.",
  "cause": "Una app usa el SDK nativo, no JS web: primero «Añadir config APP» para un AppKey, luego integra el SDK por plataforma para la UI de chat, no leídos, push, etc. — una ruta totalmente distinta del widget web.",
  "fix": "Añade config APP en la consola para un AppKey; integra el SDK según el demo iOS / Android con el AppKey; verifica navegación de chat / no leídos / push.",
  "scene": "Quieres chat en vivo dentro de tu app → ve con SDK + AppKey, no metas el JS web en un WebView."
 },
 "SDK推送": {
  "cat": "Móvil / SDK",
  "name": "El push de mensajes del SDK no llega",
  "alias": "push no llega sin push servidor de push propio salir app mensaje offline notificacion SDK推送",
  "trigger": "Tras integrar el SDK, los usuarios no reciben push al salir de la app",
  "official": "El push del SDK de 美洽 tiene dos modos: con «sin push», los mensajes del agente llegan solo dentro de la app (ábrela para recibir); con un «servidor de push propio», los usuarios reciben push al teléfono incluso tras salir de la app.",
  "cause": "La falta de «push offline» suele significar que el modo de push es «sin push», o no hay servidor de push propio / certificados de push por plataforma. La ruta es «美洽 → servidor de la app → teléfono del usuario»; un eslabón faltante deja solo recepción in-app.",
  "fix": "En la config APP, elige «servidor de push propio» y configura el push de cada plataforma (APNs / canales de fabricante); verifica el push offline según la doc; distingue «mensaje in-app» de «push del sistema».",
  "scene": "En pruebas llega con la app abierta pero no tras bloquear / salir → el push estaba en «sin push»; cambia a servidor de push propio para recepción offline."
 },
 "自定义按钮": {
  "cat": "Llamadas a la API",
  "name": "Ocultar el botón por defecto / entrada propia",
  "alias": "withoutbtn showpanel ocultar boton boton propio abrir chat contactar entrada 自定义按钮",
  "trigger": "Quieres tu propio botón «Contactar» y ocultar el redondo nativo de 美洽",
  "official": "Llama _MEIQIA('withoutBtn') para no mostrar el botón nativo de 美洽; tras un init exitoso, llama _MEIQIA('showPanel') para abrir el chat.",
  "cause": "Por defecto se renderiza el botón flotante nativo; para usar tu entrada debes declarar «sin botón nativo» antes / durante el init y enlazar «abrir chat» a tu elemento — un asunto de tiempo de API, no un «botón roto».",
  "fix": "Llama _MEIQIA('withoutBtn') antes / durante la incrustación / init; enlaza _MEIQIA('showPanel') al onclick de tu botón; asegúrate de que corran tras un init exitoso del widget.",
  "scene": "La página ya tiene un botón «Chatear ahora» visible → withoutBtn oculta el nativo, y al hacer clic en el tuyo llama showPanel para abrir la ventana."
 },
 "传递顾客信息": {
  "cat": "Llamadas a la API",
  "name": "Pasar / sincronizar datos del cliente no surte efecto",
  "alias": "pasar datos cliente sincronizar identidad metadata datos cliente sin efecto momento init info personalizada 传递顾客信息",
  "trigger": "Quieres pasar el nombre / nivel / pedido de un usuario logueado a los agentes, pero no lo ven",
  "official": "El widget web de 美洽 ofrece APIs «pasar datos del cliente», «sincronizar identidad» y «añadir info de evento personalizada» para llevar datos del visitante al chat.",
  "cause": "Estas APIs deben llamarse dentro del tiempo de init correcto: tras un init exitoso (o con el tiempo de manualInit + init). Demasiado pronto / tarde, o formatos de campo erróneos, y queda «puesto pero sin efecto».",
  "fix": "Llama las APIs de pasar / sincronizar datos dentro del tiempo de init exitoso según la doc; verifica nombres y formatos de campo; en una SPA, vuelve a pasar tras cada init.",
  "scene": "Pasas el nombre de usuario a los agentes en un sitio logueado pero sale anónimo → la llamada corrió antes del init; muévela al callback de init exitoso y se transmite."
 }
};
window.LABELS = {"miss": "No listado — prueba otra palabra clave (not showing / adblock / entId / SPA / sdk) o mira la tabla completa abajo.", "codeword": ""};
window.FIELDS = [["trigger", "Cuándo aparece"], ["official", "Comportamiento L1 / ubicación oficial"], ["cause", "Causa raíz L2"], ["fix", "Cómo solucionar"], ["scene", "Caso real"]];
window.THEAD = ["Síntoma", "Grupo", "Comportamiento L1 / ubicación oficial", "Causa raíz L2"];
