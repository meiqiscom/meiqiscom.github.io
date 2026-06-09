window.CODES = {
 "窗口不显示": {
  "cat": "Yükleme hatası",
  "name": "Sohbet penceresi / baloncuğu hiç görünmüyor",
  "alias": "görünmüyor widget görünmez baloncuk yok not showing 不显示",
  "trigger": "Kodu yapıştırdıktan sonra sağ altta sohbet baloncuğu / düğmesi yok",
  "official": "美洽 web widget'ı tek bir yapıştırılan JS parçasıyla yüzen bir sohbet penceresi yükler; kodun doğru gömüldüğünü ve entegrasyon sitesinin konsolda yapılandırıldığını doğrulayın.",
  "cause": "Widget, asenkron yüklemeden sonra DOM'a enjekte edilen meiqia.js'tir, bu yüzden «hiçbir şey yok» genelde «betik hiç yüklenmedi» demektir: yanlış konum, adblock / önbellek ile engellenmiş veya uyuşmayan alan / entId, bu yüzden enjeksiyon hiç çalışmadı.",
  "fix": "F12 → Network, meiqia.js arayın: istek yok → kod etkisiz (konumu kontrol edin / önbelleği temizleyin); istek var ama 200 değil → engellendi veya yol sorunu; her şey iyi ama hâlâ gizli → entId / alan yetkisini ve aşağıdaki grupları kontrol edin.",
  "scene": "Kod yapıştırıldı, yenilendi, baloncuk yok ve F12 hiç meiqia.js isteği göstermiyor → kod canlı şablonda yok / önbellekte; önbelleği temizleyin ve yeniden dağıtın."
 },
 "按钮不显示": {
  "cat": "Görüntüleme sorunları",
  "name": "Betik yüklendi ama sohbet düğmesi eksik",
  "alias": "düğme yok düğme eksik button missing konsol iyi 按钮不显示",
  "trigger": "F12 meiqia.js'i 200 gösteriyor ama sohbet düğmesi sayfada yok",
  "official": "Widget kodu siteye uyum sağlar ve bir sohbet düğmesi gösterir; görüntüleme başarısızsa stillerle gizlenip gizlenmediğini veya başlatmanın kesilip kesilmediğini kontrol edin.",
  "cause": "Betik yüklenir ama düğme eksikse, genelde «görüntüleme katmanı» sorunudur: genel CSS düğme konumunu geçersiz kılar / display:none yapar, z-index kaybeder veya başka sabit bir öğe onu kaplar; başka bir JS hatası da başlatmayı durdurabilir.",
  "fix": "F12 → Elements, 美洽 kapsayıcısını bulun — var mı, gizli mi, ekran dışı mı?; yeniden test için özel CSS / betikleri geçici devre dışı bırakın; yürütmeyi durduran bir hata için konsolu kontrol edin.",
  "scene": "meiqia.js 200, konsol typeof _MEIQIA function ama düğme yok → tema CSS'i onu ekran dışına konumlandırdı; stili / konumu düzeltin, görünür."
 },
 "广告拦截": {
  "cat": "Yükleme hatası",
  "name": "meiqia.js bir adblock uzantısıyla engellendi",
  "alias": "adblock ublock adguard err_blocked_by_client engellendi beyaz liste uzantı 广告拦截",
  "trigger": "Konsol: meiqia.js net::ERR_BLOCKED_BY_CLIENT ve sohbet penceresi görünmüyor",
  "official": "美洽 sohbet betiği üçüncü taraf bir alandan gelir; bir engelleme uzantısı kuruluysa onu reklam / izleyici sayıp yüklemeyi engelleyebilir — engellemeyi kapatın veya beyaz listeye alın.",
  "cause": "ERR_BLOCKED_BY_CLIENT, bir tarayıcı uzantısının (AdBlock / uBlock / AdGuard) isteği filtre listeleriyle engellediği anlamına gelir. 美洽 betiği «üçüncü taraf alan dışı + gerçek zamanlı iletişim»dir; bu kurallar genelde onu reklam / izleyici sanıp «konsol iyi, kullanıcı tarafı eksik» sahte hatasına yol açar.",
  "fix": "Gizli modda veya adblock kapalı yeniden test edin — görünürse neden engellemedir; kullanıcılardan siteyi beyaz listeye almasını isteyin; ön uç bazı otomatik kuralları atlatmak için sohbet betiğini gecikmeli / koşullu yükleyebilir.",
  "scene": "Sizin makinenizde iyi görünüyor, bazı kullanıcılar sohbet yok diyor → onlarda adblock var; konsol açıkça ERR_BLOCKED_BY_CLIENT gösteriyor."
 },
 "脚本未加载": {
  "cat": "Yükleme hatası",
  "name": "meiqia.js 404 / kötü durum / karışık içerik",
  "alias": "404 durum yüklenmedi önbellek cdn https karışık içerik sertifika 脚本未加载",
  "trigger": "meiqia.js F12 → Network'te 200 değil (404 / engellendi / pending)",
  "official": "Dağıtımdan sonra Network panelinde meiqia.js arayın; 200 durumu betiğin doğru yerleştirildiği ve yüklendiği anlamına gelir.",
  "cause": "Yaygın 200-olmayan nedenler: kod sayfa / CDN önbelleğinde takılı (yayından sonra yenilenmedi), HTTP sayfada yükleme / eksik sertifika zinciri karışık içerik engellemesini tetikler veya bozuk / kısmen kopyalanmış kod. Bu adım başarısız olursa enjeksiyon ve bağlantı asla gerçekleşmez.",
  "fix": "Yayından sonra CDN / tarayıcı önbelleğini temizleyin (veya gizli mod); bütün sertifika zinciriyle tam HTTPS ve karışık içerik olmadan sağlayın; kopyalanan kodun tam ve kaçışsız olduğunu doğrulayın.",
  "scene": "Şablonu değiştirdiniz ama canlı site hâlâ eski sohbet kodunu sunuyor → CDN önbelleği yenilenmedi; zorla yenileme / önbellek temizleme meiqia.js'i 200 yapar."
 },
 "代码位置": {
  "cat": "Yükleme hatası",
  "name": "Kod yanlış yerde (head engellemesi / etkisiz)",
  "alias": "konum nereye head body alt engelleme gömme kapanış etiketi 代码位置",
  "trigger": "Kod <head> içinde veya async betikte; boş sayfa / sohbet gelip gidiyor",
  "official": "美洽, kodu sayfanın altına, </body> öncesine yapıştırmayı önerir; widget ana içerik yüklendikten sonra çalışır.",
  "cause": "Widget, kapsayıcısını DOM hazır olduktan sonra enjekte etmelidir. <head> içinde işlemeyi engeller (zayıf ağda önce boş ekran) veya DOM hazır olmadan çalışıp başarısız olur; bazı async / modül kapsamlarında yükleme sırası da bozulabilir.",
  "fix": "美洽 JS'i her sayfanın ortak alt bilgisine, </body> öncesine koyun; SPA'lar için «SPA rota» girdisine bakın ve manualInit kullanın; bir paketleyicinin onu tree-shaking ile kaldırmadığından emin olun.",
  "scene": "Kolaylık için kodu <head>'e koydunuz; zayıf ağda kullanıcılar önce boş ekran görür ve sohbet geç çıkar → </body> öncesine taşıyın."
 },
 "样式错乱": {
  "cat": "Görüntüleme sorunları",
  "name": "Sohbet penceresi / düğme stili bozuk",
  "alias": "stil bozuk css çakışma deforme kaymış tema geçersiz kılar 样式错乱",
  "trigger": "Sohbet penceresi / düğmesi görünür ama bozuk stil / kaymış",
  "official": "Widget kendi stillerini enjekte eder ve siteye uyum sağlar; genel stillerle çakışma görsel anomalilere yol açabilir.",
  "cause": "美洽 betiği çalışma zamanında CSS enjekte eder; genel stiller (evrensel seçiciler / yüksek öncelikli kurallar / resetler) sınıflarını önce geçersiz kılarsa konum, yığılma ve yazı tipleri bozulur — «dinamik enjeksiyon + tek belge stil alanını paylaşma»nın yan etkisi.",
  "fix": "Hangi site kuralının 美洽 kapsayıcısını geçersiz kıldığını görmek için F12; genel stilleri daraltın / genel sınıflar üzerindeki etkiyi azaltın; gerekirse 美洽'den kapsayıcı yığılmasını ayarlamasını isteyin.",
  "scene": "Site * { position:... } gibi genel bir kural kullanıyor ve düğme ortaya itiliyor → genel seçiciyi daraltın, geri gelir."
 },
 "按钮跑屏外": {
  "cat": "Görüntüleme sorunları",
  "name": "Düğme ekran dışı / kaplı",
  "alias": "ekran dışı görünmez kaplı z-index yığılma sabit konum kaymış 跑屏外",
  "trigger": "Düğme DOM'da var ama görsel olarak yok / başka öğelerce kaplı",
  "official": "Widget düğmesi sabit konumlu yüzen olarak görünür; başka sabit öğelerce kaplıysa yığılmayı veya konumu ayarlayın.",
  "cause": "Sitenin diğer position:fixed öğeleri (başa dön, yüzen reklamlar, özel destek çubuğu) daha yüksek z-index ile 美洽 düğmesini kaplar veya tema koordinatlarını yanlış hesaplar, onu «ekran dışı / kaplı» bırakır.",
  "fix": "Gerçek koordinatları / z-index'i görmek için F12'de 美洽 kapsayıcısını seçin; onu yükseltin veya kaplayan öğenin z-index'ini düşürün; bir köşede birden çok sabit yüzeni yığmaktan kaçının.",
  "scene": "Bir «başa dön» ve sohbet ikisi de sağ altta ve birbirini kaplıyor → konumları kaydırın veya z-index'i ayarlayın, ikisi de görünür."
 },
 "插件冲突": {
  "cat": "Görüntüleme sorunları",
  "name": "Üçüncü taraf eklenti / analitik DOM çakışması",
  "alias": "eklenti çakışma ısı haritası analitik seo dönüşüm üçüncü taraf dom kaplama yığılma müdahale 插件冲突",
  "trigger": "Bir ısı haritası / analitik / reklam eklentisi ekledikten sonra sohbet görünmüyor / tuhaf davranıyor",
  "official": "Sayfadaki DOM'u değiştiren veya istekleri yakalayan diğer betikler widget'ın normal yüklenmesini ve görüntülenmesini etkileyebilir.",
  "cause": "Isı haritası / analitik / dönüşüm betikleri DOM'u yeniden yazar, kaplamalar enjekte eder veya istekleri yakalar; onlar ve 美洽 aynı belgeye enjekte ettiğinden yığılma / olaylar çakışır ve 美洽 kapsayıcısı kaplanır veya init'i kesilir.",
  "fix": "Çakışmayı yerelleştirmek için şüpheli eklentileri tek tek devre dışı bırakın; yükleme sırasını / kapsayıcı yığılmasını ayarlayın; ısı haritalarının vb. 美洽 kapsayıcı alanından kaçınmasını sağlayın.",
  "scene": "Bir ısı haritası eklentisi ekledikten sonra sohbet tıklanamaz oldu → ısı haritası kaplaması sohbetin üzerindeydi; yığılmayı ayarlayın veya alanı hariç tutun, geri gelir."
 },
 "SPA路由": {
  "cat": "Çerçeve entegrasyonu",
  "name": "SPA rota değişiminden sonra widget kayboluyor",
  "alias": "spa vue react next angular tek sayfa rota değişimi kayboluyor history pushstate yeniden bağla SPA路由",
  "trigger": "Ana sayfada sohbet var, ön uç rotası başka yere gittikten sonra yok",
  "official": "Tek sayfa uygulamaları (SPA) için 美洽 widget'ını yüklemek / başlatmak üzere çerçevenin rota kancalarını kullanın, böylece ön uç yönlendirmesine uyar.",
  "cause": "Bir SPA görünümleri ön uç yönlendirmesiyle değiştirir, DOM'u yok eder / yeniden oluşturur, ama meiqia.js varsayılan olarak ilk yüklemede bir kez enjekte eder ve rota değişiminde kendiliğinden yeniden oluşturulmaz, yani «sayfa değiştir, sohbet gitti».",
  "fix": "Auto-init'i durdurmak için _MEIQIA('manualInit') kullanın ve gerektiğinde yeniden bağlamak için bir rota kancasında (React useEffect / Vue mounted / router afterEach) _MEIQIA('init') çağırın; birden çok örnek başlatmaktan kaçının.",
  "scene": "Bir Next.js sitesinde ana sayfada sohbet var, detay sayfasında yok → her gezinmede yeniden bağlamak için rota kancasına _MEIQIA('init') ekleyin."
 },
 "手动初始化": {
  "cat": "Çerçeve entegrasyonu",
  "name": "Manuel init gerekli (manualInit / init)",
  "alias": "manualinit init manuel başlatma auto init _meiqia api zamanlama yüklendi 手动初始化",
  "trigger": "美洽'nin ne zaman başlatılacağını kontrol etmek istiyorsunuz veya auto-init zamanlaması yanlış",
  "official": "İndirmeden sonra auto-init'i durdurmak için 美洽 gömme kodundan sonra _MEIQIA('manualInit') ekleyin; gerektiğinde manuel başlatmak için _MEIQIA('init') çağırın.",
  "cause": "Varsayılan olarak 美洽 indirmeden hemen sonra başlar; kapsayıcı hazır / müşteri bilgisi geçilmiş / rota önce kararlı olmalıysa o zamanlama «çok erken» — sırayı kontrol etmek için manuel init'e geçin.",
  "fix": "Koddan sonra _MEIQIA('manualInit') ekleyin; koşullar hazır olunca (DOM / oturum / rota) _MEIQIA('init') çağırın; veri API'lerini belgeye göre init zamanı içinde sırayla çağırın.",
  "scene": "Girişten sonra sohbeti kullanıcı kimliğiyle başlatmak istiyorsunuz → manualInit + giriş geri çağrısında init, anonim ilk bağlantıdan kaçınarak."
 },
 "entId错误": {
  "cat": "Yapılandırma / yetki",
  "name": "entId uyuşmuyor / temsilciler sohbet almıyor",
  "alias": "entid şirket kimliği benzersiz uyuşmuyor sohbet yok kimlik arama yanlış kod 不一致",
  "trigger": "Sohbet penceresi açılıyor ama temsilciler ziyaretçi mesajı almıyor",
  "official": "Koddaki entId'den sonraki sayı şirketinizin benzersiz kimliğidir; çalışma masasıyla uyuşmazsa temsilciler sohbete bakamaz — şirket kimliğini Ayarlar - Ekip - kimlik arama'da bulun.",
  "cause": "entId parçayı belirli bir şirket hesabına bağlar. Başkasının / başka ortamın koduyla ya da karışmış hesaplarla ön uç pencereyi yükler ama mesajlar «başka bir şirkete» gider, bu yüzden bu çalışma masası hiçbirini almaz — klasik «iyi görünür ama hiçbir şey almaz».",
  "fix": "Ayarlar - Ekip - kimlik arama'daki şirket kimliğini sayfa kodundaki entId ile karşılaştırın; uyuşmazsa bu şirketin konsolundan kopyalanan en güncel kodla değiştirin.",
  "scene": "Test hesabı kodunu üretimle değiştirmeyi unuttunuz → ziyaretçiler sohbet edebilir ama üretim çalışma masası hiçbir şey almaz; entId'yi düzeltin, bağlanır."
 },
 "域名未授权": {
  "cat": "Yapılandırma / yetki",
  "name": "Site alanı konsolda yetkilendirilmemiş",
  "alias": "alan yetkisiz entegrasyon sitesi ekle beyaz liste üretim alanı test alanı site listesi 域名未授权",
  "trigger": "Testte / yerelde çalışıyor ama üretim alanı yüklenmiyor / hizmet vermiyor",
  "official": "美洽 konsolu, her biri kendi yapılandırmasıyla «Entegrasyon sitesi ekle»ye izin verir; yeni bir site iyi entegre olmadan önce konsolda yapılandırılmalıdır.",
  "cause": "美洽 birden çok siteyi «entegrasyon siteleri» olarak yönetir; alan tanınmak için konsolda kayıtlı / yetkili olmalıdır. Eklenmemiş yeni bir üretim alanı kabul edilmeyebilir veya yanlış yapılandırmaya eşlenebilir.",
  "fix": "Ayarlar - web widget'ı / entegrasyon sitelerine gidin, üretim alanı için «Entegrasyon sitesi ekle» yapın ve özel kodunu kullanın; alan / alt alan yazımını doğrulayın.",
  "scene": "localhost'ta ayarlandı, sohbet canlı www'de hizmet vermiyor → üretim alanını konsolda entegrasyon sitesi olarak ekleyin."
 },
 "子渠道": {
  "cat": "Yapılandırma / yetki",
  "name": "Çoklu site / alt kanal (sonda) karışması",
  "alias": "alt kanal sonda çoklu site iş kolları bağımsız yapılandırma karışma yönlendirme girişler 子渠道",
  "trigger": "Birden çok site / iş kolu tek parçayı paylaşıyor ve yönlendirme / otomatik mesajlar karışıyor",
  "official": "美洽, site başına farklı widget ve sohbet bağlantısı dağıtmayı destekler (alt kanallar / sonda); varsayılan site dışında daha fazla ekleyebilirsiniz, her biri kendi yapılandırmasıyla.",
  "cause": "Farklı iş kolları farklı temsilci grupları / otomatik mesajlar gerektirir, ama her site tek varsayılan parçayı paylaşırsa kaynaklar ayırt edilemez ve yapılandırmalar karışır. Alt kanallar (sonda) «tek şirket, çok giriş, yönlendirilmiş» için tasarlanmıştır.",
  "fix": "Ayarlar - web widget'ında, site başına ayrı alt kanal oluşturmak için «Entegrasyon sitesi ekle» yapın, her biri kendi kodu, görünümü ve otomatik mesajlarıyla.",
  "scene": "Ana site ve bir kampanya sayfası tek parçayı paylaşıyor ve kaynağı ayırt edemiyorsunuz → kampanya için ayrı bir alt kanal oluşturun."
 },
 "移动端不显示": {
  "cat": "Mobil / SDK",
  "name": "Mobil web sohbeti görünmüyor / ayrı dağıtım gerekir",
  "alias": "mobil telefon h5 mobil site görünmüyor ayrı dağıtım aynı kod uyarla wap 移动端",
  "trigger": "PC sitesinde sohbet var, mobil / H5 sitesinde yok",
  "official": "Widget kodu siteye uyum sağlar; mobil / PC aynı parçayı kullanır ama ayrı dağıtılmalıdır.",
  "cause": "Birçok ekip ayrı PC ve mobil sayfa / şablonlara sahiptir ve kodu yalnızca PC şablonuna yapıştırdı. Parça aynıdır ve kendini uyarlar, ama «yapıştır» adımı mobil şablonda da yapılmalıdır; atlanırsa mobilde sohbet olmaz.",
  "fix": "Aynı 美洽 kodunu mobil / H5 şablonunda da </body> öncesine dağıtın; F12 ile her ikisinde meiqia.js'in yüklendiğini doğrulayın; gerekirse mobile kendi görünümünü verin.",
  "scene": "Sohbet hep PC sitesinde ama telefon sitesinde yok → mobil şablonda kod yok; ekleyin, görünür."
 },
 "SDK接入": {
  "cat": "Mobil / SDK",
  "name": "Yerel uygulama SDK entegrasyonu / AppKey",
  "alias": "sdk app yerel appkey app yapılandırması ekle entegre ios android geliştir göm SDK接入",
  "trigger": "Web yerine kendi uygulamanızda sohbet istiyorsunuz",
  "official": "Uygulama içi entegrasyon 美洽 çalışma masasından bir AppKey gerektirir (Ayarlar - Entegrasyon - SDK, «APP yapılandırması ekle») ve geliştiriciler iOS / Android SDK'sını resmi belge ve demoya göre entegre eder.",
  "cause": "Bir uygulama web JS'i değil yerel SDK kullanır: önce AppKey için «APP yapılandırması ekle», sonra sohbet arayüzü, okunmamış, push vb. için platform başına SDK'yı entegre edin — web widget'ından tamamen farklı bir yol.",
  "fix": "AppKey için konsolda APP yapılandırması ekleyin; iOS / Android demosuna göre SDK'yı AppKey ile entegre edin; sohbet gezinme / okunmamış / push'u doğrulayın.",
  "scene": "Kendi uygulamanızda canlı sohbet istiyorsunuz → web JS'i bir WebView'a sokmak yerine SDK + AppKey ile gidin."
 },
 "SDK推送": {
  "cat": "Mobil / SDK",
  "name": "SDK mesaj push'u gelmiyor",
  "alias": "push gelmiyor push yok özel push sunucusu uygulamadan çık çevrimdışı mesaj bildirim SDK推送",
  "trigger": "SDK entegrasyonundan sonra kullanıcılar uygulamadan çıkınca push almıyor",
  "official": "美洽 SDK push'unun iki modu vardır: «push yok» ile temsilci mesajları yalnızca uygulamaya ulaşır (almak için açın); «özel push sunucusu» ile kullanıcılar uygulamadan çıktıktan sonra bile telefona push alır.",
  "cause": "Eksik «çevrimdışı push» genelde push modunun «push yok» olduğu veya özel push sunucusu / platform başına push sertifikalarının olmadığı anlamına gelir. Yol «美洽 → uygulama sunucusu → kullanıcı telefonu»dur; eksik bir halka yalnızca uygulama içi alımı bırakır.",
  "fix": "APP yapılandırmasında «özel push sunucusu» seçin ve her platformun push'unu ayarlayın (APNs / üretici kanalları); belgeye göre çevrimdışı push'u doğrulayın; «uygulama içi mesaj»ı «sistem push»undan ayırın.",
  "scene": "Testte uygulama açıkken geliyor ama kilit / çıkıştan sonra bildirim yok → push «push yok» ayarındaydı; çevrimdışı alım için özel push sunucusuna geçin."
 },
 "自定义按钮": {
  "cat": "API çağrıları",
  "name": "Varsayılan düğmeyi gizle / özel giriş",
  "alias": "withoutbtn showpanel düğme gizle özel düğme kendi düğmem sohbet aç destek giriş 自定义按钮",
  "trigger": "Kendi «Destek» düğmenizi isteyip 美洽'nin yuvarlak yerelini gizlemek istiyorsunuz",
  "official": "美洽'nin yerel sohbet düğmesini göstermemek için _MEIQIA('withoutBtn') çağırın; init başarılı olunca sohbeti açmak için _MEIQIA('showPanel') çağırın.",
  "cause": "Varsayılan olarak yerel yüzen düğme işlenir; kendi girişiniz için init öncesi / sırasında «yerel düğme yok» bildirmeli ve «sohbet aç»ı kendi öğenize bağlamalısınız — API zamanlaması meselesi, «bozuk düğme» değil.",
  "fix": "Gömme / init öncesi / sırasında _MEIQIA('withoutBtn') çağırın; düğmenizin onclick'ine _MEIQIA('showPanel') bağlayın; widget init başarısından sonra çalıştıklarından emin olun.",
  "scene": "Sayfada zaten görünür bir «Şimdi sohbet et» düğmesi var → withoutBtn yereli gizler ve sizinkine tıklamak pencereyi açmak için showPanel çağırır."
 },
 "传递顾客信息": {
  "cat": "API çağrıları",
  "name": "Müşteri bilgisi geçme / senkronize etme etkisiz",
  "alias": "müşteri bilgisi geç kimlik senkronize metadata müşteri verisi etkisiz zamanlama init özel bilgi 传递顾客信息",
  "trigger": "Giriş yapmış kullanıcının adı / seviyesi / siparişini temsilcilere geçmek istiyorsunuz ama göremiyorlar",
  "official": "美洽 web widget'ı, ziyaretçi verisini sohbete getirmek için «müşteri bilgisi geç», «müşteri kimliğini senkronize et» ve «özel olay bilgisi ekle» API'leri sunar.",
  "cause": "Bu API'ler doğru init zamanı içinde çağrılmalıdır: init başarısından sonra (veya manualInit + init zamanlamasıyla). Çok erken / geç ya da yanlış alan biçimleri «ayarlandı ama etkisiz» bırakır.",
  "fix": "Geçme / senkronize API'lerini belgeye göre başarılı init zamanı içinde çağırın; alan adları ve biçimlerini doğrulayın; bir SPA'da her init'ten sonra yeniden geçin.",
  "scene": "Giriş yapılmış sitede kullanıcı adını temsilcilere geçiyorsunuz ama anonim görünüyor → çağrı init öncesi çalıştı; onu init başarı geri çağrısına taşıyın, geçer."
 }
};
window.LABELS = {"miss": "Listede yok — başka bir anahtar kelime deneyin (not showing / adblock / entId / SPA / sdk) veya aşağıdaki tam tabloya bakın.", "codeword": ""};
window.FIELDS = [["trigger", "Ne zaman görünür"], ["official", "L1 davranışı / resmi konumlandırma"], ["cause", "L2 kök neden"], ["fix", "Nasıl çözülür"], ["scene", "Gerçek vaka"]];
window.THEAD = ["Belirti", "Grup", "L1 davranışı / resmi konumlandırma", "L2 kök neden"];
