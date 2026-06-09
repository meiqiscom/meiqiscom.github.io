window.CODES = {
 "窗口不显示": {
  "cat": "Gagal muat",
  "name": "Tetingkap / gelembung sembang langsung tidak muncul",
  "alias": "tidak muncul widget halimunan tiada gelembung not showing 不显示",
  "trigger": "Selepas tampal kod tiada gelembung / butang sembang di bawah kanan",
  "official": "Widget web 美洽 memuatkan tetingkap sembang terapung dengan satu snippet JS yang ditampal; sahkan kod tertanam betul dan tapak integrasi dikonfigur dalam konsol.",
  "cause": "Widget ialah meiqia.js yang disuntik ke DOM selepas muatan tak segerak, jadi «tiada langsung» biasanya bermaksud «skrip tak pernah dimuatkan»: salah tempat, disekat adblock / cache, atau domain / entId tak padan, jadi suntikan tak pernah berjalan.",
  "fix": "F12 → Network, cari meiqia.js: tiada permintaan → kod tak berkesan (semak penempatan / bersih cache); ada permintaan tetapi bukan-200 → disekat atau masalah laluan; semua baik tetapi masih tertutup → semak entId / kebenaran domain dan kumpulan di bawah.",
  "scene": "Kod ditampal, segar semula, tiada gelembung, dan F12 tak tunjuk permintaan meiqia.js → kod tiada dalam templat langsung / di-cache; bersih cache dan kerah semula."
 },
 "按钮不显示": {
  "cat": "Masalah paparan",
  "name": "Skrip dimuatkan tetapi butang sembang hilang",
  "alias": "tiada butang butang hilang button missing konsol ok 按钮不显示",
  "trigger": "F12 tunjuk meiqia.js 200, tetapi butang sembang tiada pada halaman",
  "official": "Kod widget menyesuaikan tapak dan tunjuk butang sembang; jika paparan gagal, semak sama ada disembunyikan oleh gaya atau pemulaan terganggu.",
  "cause": "Jika skrip dimuatkan tetapi butang hilang, biasanya masalah «lapisan paparan»: CSS seluruh tapak menindih kedudukan butang / set display:none, z-index kalah, atau elemen tetap lain menutupnya; ralat JS lain juga boleh batal pemulaan.",
  "fix": "F12 → Elements, cari bekas 美洽 — wujud, tersembunyi, atau luar skrin?; nyahaktif sementara CSS / skrip sendiri untuk uji semula; semak konsol untuk ralat yang membatalkan pelaksanaan.",
  "scene": "meiqia.js 200, konsol typeof _MEIQIA ialah function, tetapi tiada butang → CSS tema meletakkannya luar skrin; baiki gaya / kedudukan dan ia muncul."
 },
 "广告拦截": {
  "cat": "Gagal muat",
  "name": "meiqia.js disekat sambungan adblock",
  "alias": "adblock ublock adguard err_blocked_by_client disekat senarai putih sambungan 广告拦截",
  "trigger": "Konsol: meiqia.js net::ERR_BLOCKED_BY_CLIENT, dan tetingkap sembang tak muncul",
  "official": "Skrip sembang 美洽 datang dari domain pihak ketiga; jika sambungan penyekat dipasang, ia mungkin anggap ia iklan / penjejak dan halang muatan — matikan penyekatan atau senarai putih.",
  "cause": "ERR_BLOCKED_BY_CLIENT bermakna sambungan pelayar (AdBlock / uBlock / AdGuard) menyekat permintaan melalui senarai penapis. Skrip 美洽 ialah «pihak ketiga luar domain + komunikasi masa nyata», yang sering disalah anggap peraturan itu sebagai iklan / penjejak, menyebabkan kegagalan palsu «konsol baik, sisi pengguna hilang».",
  "fix": "Uji semula dalam menyamar atau adblock mati — jika muncul, penyekatan puncanya; minta pengguna senarai putih tapak; bahagian depan boleh muat skrip sembang bertangguh / bersyarat untuk elak sebahagian peraturan auto.",
  "scene": "Muncul baik pada mesin anda, sesetengah pengguna lapor tiada sembang → mereka ada adblock; konsol jelas tunjuk ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Gagal muat",
  "name": "meiqia.js 404 / status buruk / kandungan campuran",
  "alias": "404 status tak dimuatkan cache cdn https kandungan campuran sijil 脚本未加载",
  "trigger": "meiqia.js bukan-200 dalam F12 → Network (404 / disekat / pending)",
  "official": "Selepas kerah, cari meiqia.js dalam panel Network; status 200 bermakna skrip diletak betul dan dimuatkan.",
  "cause": "Punca biasa bukan-200: kod tertahan cache halaman / CDN (tak segar selepas terbit), muat pada halaman HTTP / rantai sijil tak lengkap mencetus sekatan kandungan campuran, atau kod rosak / disalin separa. Jika langkah ini gagal, suntikan dan sambungan tak pernah berlaku.",
  "fix": "Bersih cache CDN / pelayar (atau menyamar) selepas terbit; pastikan HTTPS penuh dengan rantai sijil utuh dan tanpa kandungan campuran; sahkan kod disalin lengkap dan tak ter-escape.",
  "scene": "Tukar templat tetapi tapak langsung masih sajikan kod sembang lama → cache CDN tak disegarkan; segar paksa / bersih cache tukar meiqia.js jadi 200."
 },
 "代码位置": {
  "cat": "Gagal muat",
  "name": "Kod salah tempat (sekat head / tak berkesan)",
  "alias": "penempatan di mana head body bawah sekat tanam tag tutup 代码位置",
  "trigger": "Kod dalam <head> atau dalam skrip async; halaman kosong / sembang timbul-tenggelam",
  "official": "美洽 mengesyorkan tampal kod di bahagian bawah halaman, sebelum </body>; widget berjalan selepas kandungan utama dimuatkan.",
  "cause": "Widget perlu suntik bekas selepas DOM sedia. Dalam <head> ia menyekat papar (skrin kosong dahulu pada rangkaian lemah) atau berjalan sebelum DOM sedia dan gagal; dalam sesetengah skop async / modul susunan muat juga boleh kacau.",
  "fix": "Letak JS 美洽 dalam pengaki sepunya setiap halaman, sebelum </body>; untuk SPA lihat entri «laluan SPA» dan guna manualInit; pastikan bundler tak buang ia melalui tree-shaking.",
  "scene": "Masuk kod ke <head> demi mudah; pada rangkaian lemah pengguna lihat skrin kosong dahulu dan sembang muncul lewat → alih sebelum </body>."
 },
 "样式错乱": {
  "cat": "Masalah paparan",
  "name": "Gaya tetingkap / butang sembang rosak",
  "alias": "gaya rosak css konflik herot terpesong tema menindih 样式错乱",
  "trigger": "Tetingkap / butang sembang muncul tetapi gaya rosak / terpesong",
  "official": "Widget menyuntik gayanya sendiri dan menyesuaikan tapak; konflik dengan gaya global boleh menyebabkan anomali visual.",
  "cause": "Skrip 美洽 menyuntik CSS semasa runtime; jika gaya global (pemilih sejagat / peraturan keutamaan tinggi / reset) menindih kelasnya dahulu, kedudukan, penindanan dan fon rosak — kesan sampingan «suntikan dinamik + kongsi satu ruang gaya dokumen».",
  "fix": "F12 untuk lihat peraturan tapak mana menindih bekas 美洽; sempitkan gaya global / kurangkan kesan pada kelas umum; jika perlu minta 美洽 laras penindanan bekas.",
  "scene": "Tapak guna peraturan global seperti * { position:... } dan butang ditolak ke tengah → sempitkan pemilih global dan kembali."
 },
 "按钮跑屏外": {
  "cat": "Masalah paparan",
  "name": "Butang luar skrin / tertutup",
  "alias": "luar skrin halimunan tertutup z-index penindanan kedudukan tetap teralih 跑屏外",
  "trigger": "Butang ada dalam DOM tetapi secara visual hilang / tertutup elemen lain",
  "official": "Butang widget muncul sebagai terapung kedudukan tetap; jika tertutup elemen tetap lain, laras penindanan atau kedudukan.",
  "cause": "Elemen position:fixed lain pada tapak (kembali atas, iklan terapung, bar sokongan sendiri) dengan z-index lebih tinggi menutup butang 美洽, atau tema salah kira koordinatnya, jadikannya «luar skrin / tertutup».",
  "fix": "Pilih bekas 美洽 dalam F12 untuk lihat koordinat / z-index sebenar; naikkannya atau turun z-index elemen penutup; elak tindan banyak terapung tetap di satu sudut.",
  "scene": "«Kembali atas» dan sembang sama-sama di bawah kanan dan saling tutup → alih kedudukan atau laras z-index dan kedua-duanya kelihatan."
 },
 "插件冲突": {
  "cat": "Masalah paparan",
  "name": "Konflik DOM pemalam / analitik pihak ketiga",
  "alias": "konflik pemalam heatmap analitik seo penukaran pihak ketiga dom tindih penindanan ganggu 插件冲突",
  "trigger": "Selepas tambah pemalam heatmap / analitik / iklan, sembang tak muncul / pelik",
  "official": "Skrip lain pada halaman yang mengubah DOM atau memintas permintaan boleh menjejas muatan dan paparan normal widget.",
  "cause": "Skrip heatmap / analitik / penukaran menulis semula DOM, menyuntik tindihan atau memintas permintaan; kerana ia dan 美洽 menyuntik ke dokumen sama, penindanan / peristiwa berganggu dan bekas 美洽 tertutup atau init-nya terganggu.",
  "fix": "Nyahaktif pemalam disyaki satu per satu untuk cari konflik; laras susunan muat / penindanan bekas; buat heatmap dsb. elak kawasan bekas 美洽.",
  "scene": "Sembang tak boleh diklik selepas tambah pemalam heatmap → tindihan heatmap di atas sembang; laras penindanan atau kecuali kawasan dan kembali."
 },
 "SPA路由": {
  "cat": "Integrasi rangka kerja",
  "name": "Widget hilang selepas tukar laluan SPA",
  "alias": "spa vue react next angular satu halaman tukar laluan hilang history pushstate pasang semula SPA路由",
  "trigger": "Sembang di laman utama, hilang selepas laluan depan navigasi ke tempat lain",
  "official": "Untuk apl satu halaman (SPA), guna cangkuk laluan rangka kerja untuk muat / init widget 美洽 supaya padan penghalaan depan.",
  "cause": "SPA tukar paparan melalui penghalaan depan, memusnah / membina semula DOM, tetapi meiqia.js menyuntik sekali pada muat pertama secara lalai dan tak dibina semula sendiri semasa tukar laluan, jadi «tukar halaman, sembang hilang».",
  "fix": "Guna _MEIQIA('manualInit') untuk hentikan auto-init dan panggil _MEIQIA('init') dalam cangkuk laluan (React useEffect / Vue mounted / router afterEach) untuk pasang semula bila perlu; elak init banyak tika.",
  "scene": "Tapak Next.js ada sembang di laman utama, tiada di halaman butiran → tambah _MEIQIA('init') dalam cangkuk laluan untuk pasang semula setiap navigasi."
 },
 "手动初始化": {
  "cat": "Integrasi rangka kerja",
  "name": "Perlu init manual (manualInit / init)",
  "alias": "manualinit init pemulaan manual auto init _meiqia api masa dimuatkan 手动初始化",
  "trigger": "Anda mahu kawal bila 美洽 init, atau masa auto-init salah",
  "official": "Tambah _MEIQIA('manualInit') selepas kod benam 美洽 untuk hentikan auto-init selepas muat turun; panggil _MEIQIA('init') untuk init manual bila perlu.",
  "cause": "Secara lalai 美洽 auto-init sebaik selepas muat turun; bila anda perlu bekas sedia / maklumat pelanggan dihantar / laluan stabil dahulu, masa itu «terlalu awal» — tukar ke init manual untuk kawal urutan.",
  "fix": "Tambah _MEIQIA('manualInit') selepas kod; panggil _MEIQIA('init') bila keadaan sedia (DOM / sesi / laluan); panggil API maklumat mengikut urutan dalam masa init ikut dok.",
  "scene": "Mahu init sembang dengan identiti pengguna selepas log masuk → manualInit + init dalam panggil balik log masuk, elak sambungan tanpa nama pertama."
 },
 "entId错误": {
  "cat": "Konfigurasi / kebenaran",
  "name": "entId tidak padan / ejen tidak menerima sembang",
  "alias": "entid id syarikat unik tak padan tiada sembang cari id kod salah 不一致",
  "trigger": "Tetingkap sembang terbuka, tetapi ejen tidak menerima mesej pelawat",
  "official": "Nombor selepas entId dalam kod ialah id unik syarikat anda; jika tak padan dengan papan kerja, ejen tak boleh layan sembang — cari ID syarikat di Tetapan - Pasukan - cari ID.",
  "cause": "entId mengikat snippet pada akaun syarikat tertentu. Dengan kod orang lain / persekitaran lain, atau akaun bercampur, depan muat tetingkap tetapi mesej pergi ke «syarikat lain», jadi papan kerja ini tak terima apa-apa — klasik «nampak baik tetapi tak terima».",
  "fix": "Banding ID syarikat di Tetapan - Pasukan - cari ID dengan entId dalam kod halaman; jika tak padan, ganti dengan kod terkini disalin dari konsol syarikat ini.",
  "scene": "Lupa tukar kod akaun ujian kepada pengeluaran → pelawat boleh sembang tetapi papan kerja pengeluaran tak terima; baiki entId dan ia sambung."
 },
 "域名未授权": {
  "cat": "Konfigurasi / kebenaran",
  "name": "Domain tapak tak dibenarkan dalam konsol",
  "alias": "domain tak dibenarkan tambah tapak integrasi senarai putih domain pengeluaran domain ujian senarai tapak 域名未授权",
  "trigger": "Berfungsi di ujian / setempat, tetapi domain pengeluaran tak dimuatkan / tak melayan",
  "official": "Konsol 美洽 membenarkan «Tambah tapak integrasi», setiap satu dengan konfig sendiri; tapak baharu mesti dikonfigur dalam konsol sebelum terintegrasi baik.",
  "cause": "美洽 urus banyak tapak sebagai «tapak integrasi»; domain mesti didaftar / dibenarkan dalam konsol untuk dikenali. Domain pengeluaran baharu yang tak ditambah mungkin tak diterima atau dipetakan ke konfig salah.",
  "fix": "Ke Tetapan - widget web / tapak integrasi, «Tambah tapak integrasi» untuk domain pengeluaran dan guna kod khasnya; sahkan ejaan domain / subdomain.",
  "scene": "Dilaras di localhost, sembang tak melayan di www langsung → tambah domain pengeluaran sebagai tapak integrasi dalam konsol."
 },
 "子渠道": {
  "cat": "Konfigurasi / kebenaran",
  "name": "Berbilang tapak / subsaluran (kuar) bersilang",
  "alias": "subsaluran kuar berbilang tapak barisan perniagaan konfig bebas bersilang penghalaan pintu masuk 子渠道",
  "trigger": "Beberapa tapak / barisan perniagaan kongsi satu snippet dan penghalaan / mesej auto bercampur",
  "official": "美洽 sokong kerah widget dan pautan sembang berbeza setiap tapak (subsaluran / kuar); selain tapak lalai anda boleh tambah lagi, setiap satu dengan konfig sendiri.",
  "cause": "Barisan perniagaan berbeza perlu kumpulan ejen / mesej auto berbeza, tetapi jika setiap tapak kongsi satu snippet lalai, sumber tak boleh dibeza dan konfig bersilang. Subsaluran (kuar) direka untuk «satu syarikat, banyak pintu masuk, dihala».",
  "fix": "Di Tetapan - widget web, «Tambah tapak integrasi» untuk cipta subsaluran berasingan setiap tapak, setiap satu dengan kod, rupa dan mesej auto sendiri.",
  "scene": "Tapak utama dan halaman kempen kongsi satu snippet dan anda tak boleh beza sumber → cipta subsaluran berasingan untuk kempen."
 },
 "移动端不显示": {
  "cat": "Mudah alih / SDK",
  "name": "Sembang web mudah alih tak muncul / perlu kerah berasingan",
  "alias": "mudah alih telefon h5 tapak mudah alih tak muncul kerah berasingan kod sama sesuai wap 移动端",
  "trigger": "Tapak PC ada sembang, tapak mudah alih / H5 tiada",
  "official": "Kod widget menyesuaikan tapak; mudah alih / PC guna snippet sama tetapi mesti dikerah berasingan.",
  "cause": "Banyak pasukan ada halaman / templat PC dan mudah alih berasingan dan hanya tampal kod dalam templat PC. Snippet sama dan menyesuai sendiri, tetapi langkah «tampal» mesti berlaku juga dalam templat mudah alih; terlepas, mudah alih tiada sembang.",
  "fix": "Kerah kod 美洽 sama sebelum </body> juga dalam templat mudah alih / H5; sahkan melalui F12 meiqia.js dimuatkan pada kedua-dua; beri mudah alih rupa sendiri jika perlu.",
  "scene": "Sembang sentiasa di tapak PC tetapi tiada di tapak telefon → templat mudah alih tiada kod; tambah dan ia muncul."
 },
 "SDK接入": {
  "cat": "Mudah alih / SDK",
  "name": "Integrasi SDK natif apl / AppKey",
  "alias": "sdk app natif appkey tambah konfig app integrasi ios android bangun benam SDK接入",
  "trigger": "Anda mahu sembang dalam apl sendiri, bukan web",
  "official": "Integrasi dalam apl perlu AppKey dari papan kerja 美洽 (Tetapan - Integrasi - SDK, «Tambah konfig APP»), dan pembangun integrasi SDK iOS / Android ikut dok dan demo rasmi.",
  "cause": "Apl guna SDK natif, bukan JS web: dahulu «Tambah konfig APP» untuk AppKey, kemudian integrasi SDK setiap platform untuk UI sembang, belum dibaca, tolak, dsb. — laluan langsung berbeza dari widget web.",
  "fix": "Tambah konfig APP dalam konsol untuk AppKey; integrasi SDK ikut demo iOS / Android dengan AppKey; sahkan navigasi sembang / belum dibaca / tolak.",
  "scene": "Mahu sembang langsung dalam apl sendiri → guna SDK + AppKey, jangan masuk JS web ke WebView."
 },
 "SDK推送": {
  "cat": "Mudah alih / SDK",
  "name": "Tolak mesej SDK tak sampai",
  "alias": "tolak tak sampai tiada tolak pelayan tolak tersuai keluar apl mesej luar talian pemberitahuan SDK推送",
  "trigger": "Selepas integrasi SDK, pengguna tak terima tolak sebaik keluar apl",
  "official": "Tolak SDK 美洽 ada dua mod: dengan «tiada tolak», mesej ejen hanya sampai dalam apl (buka untuk terima); dengan «pelayan tolak tersuai», pengguna terima tolak ke telefon walaupun selepas keluar apl.",
  "cause": "«Tolak luar talian» yang hilang biasanya bermaksud mod tolak «tiada tolak», atau tiada pelayan tolak tersuai / sijil tolak setiap platform. Laluan ialah «美洽 → pelayan apl → telefon pengguna»; pautan hilang tinggal terima dalam apl sahaja.",
  "fix": "Dalam konfig APP, pilih «pelayan tolak tersuai» dan sediakan tolak setiap platform (APNs / saluran pengeluar); sahkan tolak luar talian ikut dok; bezakan «mesej dalam apl» dari «tolak sistem».",
  "scene": "Semasa ujian sampai dengan apl terbuka tetapi tidak selepas kunci / keluar → tolak diset «tiada tolak»; tukar ke pelayan tolak tersuai untuk terima luar talian."
 },
 "自定义按钮": {
  "cat": "Panggilan API",
  "name": "Sembunyi butang lalai / pintu masuk tersuai",
  "alias": "withoutbtn showpanel sembunyi butang butang sendiri buka sembang hubungi pintu masuk 自定义按钮",
  "trigger": "Anda mahu butang «Hubungi» sendiri dan sembunyi bulat natif 美洽",
  "official": "Panggil _MEIQIA('withoutBtn') untuk tak tunjuk butang natif 美洽; selepas init berjaya, panggil _MEIQIA('showPanel') untuk buka sembang.",
  "cause": "Secara lalai butang terapung natif dipapar; untuk pintu masuk anda mesti isytihar «tiada butang natif» sebelum / semasa init dan ikat «buka sembang» pada elemen anda — soal masa API, bukan «butang rosak».",
  "fix": "Panggil _MEIQIA('withoutBtn') sebelum / semasa benam / init; ikat _MEIQIA('showPanel') pada onclick butang anda; pastikan ia berjalan selepas init widget berjaya.",
  "scene": "Halaman sudah ada butang «Sembang sekarang» menonjol → withoutBtn sembunyi natif, dan klik butang anda panggil showPanel untuk buka tetingkap."
 },
 "传递顾客信息": {
  "cat": "Panggilan API",
  "name": "Hantar / segerak maklumat pelanggan tak berkesan",
  "alias": "hantar maklumat pelanggan segerak identiti metadata data pelanggan tak berkesan masa init maklumat tersuai 传递顾客信息",
  "trigger": "Anda mahu hantar nama / peringkat / pesanan pengguna log masuk kepada ejen, tetapi mereka tak nampak",
  "official": "Widget web 美洽 tawarkan API «hantar maklumat pelanggan», «segerak identiti pelanggan» dan «tambah maklumat acara tersuai» untuk bawa data pelawat ke sembang.",
  "cause": "API ini mesti dipanggil dalam masa init betul: selepas init berjaya (atau dengan masa manualInit + init). Terlalu awal / lewat, atau format medan salah, jadi «diset tetapi tak berkesan».",
  "fix": "Panggil API hantar / segerak maklumat dalam masa init berjaya ikut dok; sahkan nama dan format medan; dalam SPA, hantar semula selepas setiap init.",
  "scene": "Anda hantar nama pengguna kepada ejen di tapak log masuk tetapi papar tanpa nama → panggilan berjalan sebelum init; alih ke panggil balik init berjaya dan ia dibawa."
 }
};
window.LABELS = {"miss": "Tiada dalam senarai — cuba kata kunci lain (not showing / adblock / entId / SPA / sdk) atau lihat jadual penuh di bawah.", "codeword": ""};
window.FIELDS = [["trigger", "Bila muncul"], ["official", "Tingkah laku L1 / kedudukan rasmi"], ["cause", "Punca akar L2"], ["fix", "Cara baiki"], ["scene", "Kes sebenar"]];
window.THEAD = ["Simptom", "Kumpulan", "Tingkah laku L1 / kedudukan rasmi", "Punca akar L2"];
