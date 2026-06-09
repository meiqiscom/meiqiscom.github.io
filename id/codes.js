window.CODES = {
 "窗口不显示": {
  "cat": "Gagal muat",
  "name": "Jendela / gelembung chat tak muncul sama sekali",
  "alias": "tidak muncul widget tak terlihat tanpa gelembung not showing 不显示",
  "trigger": "Setelah menempel kode tak ada gelembung / tombol chat di kanan bawah",
  "official": "Widget web 美洽 memuat jendela chat mengambang dengan satu snippet JS yang ditempel; pastikan kode tertanam benar dan situs integrasi dikonfigurasi di konsol.",
  "cause": "Widget adalah meiqia.js yang disuntik ke DOM setelah pemuatan asinkron, jadi «tak ada apa-apa» biasanya berarti «skrip tak pernah dimuat»: salah tempat, diblokir adblock / cache, atau domain / entId tak cocok, sehingga injeksi tak pernah berjalan.",
  "fix": "F12 → Network, cari meiqia.js: tanpa permintaan → kode tak berlaku (cek penempatan / bersihkan cache); ada permintaan tapi bukan-200 → diblokir atau masalah jalur; semua baik tapi masih tertutup → cek entId / otorisasi domain dan kelompok di bawah.",
  "scene": "Kode ditempel, refresh, tak ada gelembung, dan F12 tak menampilkan permintaan meiqia.js → kode tak ada di template live / di-cache; bersihkan cache dan deploy ulang."
 },
 "按钮不显示": {
  "cat": "Masalah tampilan",
  "name": "Skrip dimuat tapi tombol chat hilang",
  "alias": "tanpa tombol tombol hilang button missing konsol ok 按钮不显示",
  "trigger": "F12 menampilkan meiqia.js 200, tapi tombol chat tak ada di halaman",
  "official": "Kode widget menyesuaikan situs dan menampilkan tombol chat; jika tampilan gagal, periksa apakah tersembunyi oleh gaya atau inisialisasi terputus.",
  "cause": "Jika skrip dimuat tapi tombol hilang, biasanya masalah «lapisan tampilan»: CSS global menimpa posisi tombol / set display:none, z-index kalah, atau elemen fiks lain menutupinya; error JS lain juga bisa membatalkan inisialisasi.",
  "fix": "F12 → Elements, cari kontainer 美洽 — ada, tersembunyi, atau di luar layar?; nonaktifkan sementara CSS / skrip sendiri untuk uji ulang; cek konsol untuk error yang membatalkan eksekusi.",
  "scene": "meiqia.js 200, konsol typeof _MEIQIA adalah function, tapi tanpa tombol → CSS tema memosisikannya di luar layar; perbaiki gaya / posisi dan ia muncul."
 },
 "广告拦截": {
  "cat": "Gagal muat",
  "name": "meiqia.js diblokir ekstensi adblock",
  "alias": "adblock ublock adguard err_blocked_by_client diblokir whitelist ekstensi 广告拦截",
  "trigger": "Konsol: meiqia.js net::ERR_BLOCKED_BY_CLIENT, dan jendela chat tak muncul",
  "official": "Skrip chat 美洽 berasal dari domain pihak ketiga; jika ada ekstensi pemblokir, ia mungkin menganggapnya iklan / pelacak dan mencegah pemuatan — matikan pemblokiran atau whitelist.",
  "cause": "ERR_BLOCKED_BY_CLIENT berarti ekstensi browser (AdBlock / uBlock / AdGuard) memblokir permintaan lewat daftar filter. Skrip 美洽 adalah «pihak ketiga lintas domain + komunikasi real-time», yang sering disalahbaca aturan tersebut sebagai iklan / pelacak, menyebabkan kegagalan palsu «konsol baik, sisi pengguna hilang».",
  "fix": "Uji ulang di penyamaran atau dengan adblock mati — jika muncul, pemblokiran penyebabnya; minta pengguna whitelist situs; frontend bisa memuat skrip chat tertunda / kondisional untuk menghindari sebagian aturan otomatis.",
  "scene": "Tampil baik di mesin Anda, sebagian pengguna melapor tanpa chat → mereka punya adblock; konsol jelas menampilkan ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Gagal muat",
  "name": "meiqia.js 404 / status buruk / konten campuran",
  "alias": "404 status tak dimuat cache cdn https konten campuran sertifikat 脚本未加载",
  "trigger": "meiqia.js bukan-200 di F12 → Network (404 / diblokir / pending)",
  "official": "Setelah deploy, cari meiqia.js di panel Network; status 200 berarti skrip ditempatkan benar dan dimuat.",
  "cause": "Sebab umum bukan-200: kode tertahan cache halaman / CDN (tak di-refresh setelah publikasi), dimuat di halaman HTTP / rantai sertifikat tak lengkap memicu blokir konten campuran, atau kode rusak / disalin sebagian. Jika langkah ini gagal, injeksi dan koneksi tak pernah terjadi.",
  "fix": "Bersihkan cache CDN / browser (atau penyamaran) setelah publikasi; pastikan HTTPS penuh dengan rantai sertifikat utuh dan tanpa konten campuran; verifikasi kode yang disalin lengkap dan tak ter-escape.",
  "scene": "Template diubah tapi situs live masih menyajikan kode chat lama → cache CDN tak di-refresh; refresh paksa / bersihkan cache membuat meiqia.js jadi 200."
 },
 "代码位置": {
  "cat": "Gagal muat",
  "name": "Kode salah tempat (blokir head / tak berlaku)",
  "alias": "penempatan di mana head body bawah blokir tanam tag penutup 代码位置",
  "trigger": "Kode di <head> atau dalam skrip async; halaman kosong / chat timbul-tenggelam",
  "official": "美洽 menyarankan menempel kode di bagian bawah halaman, sebelum </body>; widget berjalan setelah konten utama dimuat.",
  "cause": "Widget harus menyuntik kontainer setelah DOM siap. Di <head> ia memblokir render (layar kosong dulu di jaringan lemah) atau berjalan sebelum DOM siap dan gagal; dalam sebagian scope async / modul urutan muat juga bisa kacau.",
  "fix": "Letakkan JS 美洽 di footer umum tiap halaman, sebelum </body>; untuk SPA lihat entri «rute SPA» dan pakai manualInit; pastikan bundler tak menghapusnya lewat tree-shaking.",
  "scene": "Kode dimasukkan ke <head> demi praktis; di jaringan lemah pengguna lihat layar kosong dulu dan chat muncul telat → pindahkan sebelum </body>."
 },
 "样式错乱": {
  "cat": "Masalah tampilan",
  "name": "Gaya jendela / tombol chat rusak",
  "alias": "gaya rusak css konflik berubah bentuk melenceng tema menimpa 样式错乱",
  "trigger": "Jendela / tombol chat muncul tapi gayanya rusak / melenceng",
  "official": "Widget menyuntik gayanya sendiri dan menyesuaikan situs; konflik dengan gaya global bisa menyebabkan anomali visual.",
  "cause": "Skrip 美洽 menyuntik CSS saat runtime; jika gaya global (selektor universal / aturan prioritas tinggi / reset) menimpa kelasnya lebih dulu, posisi, penumpukan, dan font rusak — efek samping «injeksi dinamis + berbagi satu ruang gaya dokumen».",
  "fix": "F12 untuk lihat aturan situs mana yang menimpa kontainer 美洽; persempit gaya global / kurangi dampaknya pada kelas umum; bila perlu minta 美洽 menyesuaikan penumpukan kontainer.",
  "scene": "Situs pakai aturan global seperti * { position:... } dan tombol terdorong ke tengah → persempit selektor global dan kembali."
 },
 "按钮跑屏外": {
  "cat": "Masalah tampilan",
  "name": "Tombol di luar layar / tertutup",
  "alias": "luar layar tak terlihat tertutup z-index penumpukan posisi fiks bergeser 跑屏外",
  "trigger": "Tombol ada di DOM tapi secara visual hilang / tertutup elemen lain",
  "official": "Tombol widget muncul sebagai mengambang posisi fiks; jika tertutup elemen fiks lain, sesuaikan penumpukan atau posisi.",
  "cause": "Elemen position:fixed lain di situs (kembali ke atas, iklan mengambang, bilah dukungan kustom) dengan z-index lebih tinggi menutup tombol 美洽, atau tema salah hitung koordinatnya, membuatnya «di luar layar / tertutup».",
  "fix": "Pilih kontainer 美洽 di F12 untuk lihat koordinat / z-index nyata; naikkan atau turunkan z-index elemen penutup; hindari menumpuk banyak mengambang fiks di satu sudut.",
  "scene": "«Kembali ke atas» dan chat sama-sama di kanan bawah dan saling tutup → geser posisi atau sesuaikan z-index dan keduanya terlihat."
 },
 "插件冲突": {
  "cat": "Masalah tampilan",
  "name": "Konflik DOM plugin / analitik pihak ketiga",
  "alias": "konflik plugin heatmap analitik seo konversi pihak ketiga dom overlay penumpukan ganggu 插件冲突",
  "trigger": "Setelah menambah plugin heatmap / analitik / iklan, chat tak muncul / aneh",
  "official": "Skrip lain di halaman yang mengubah DOM atau mencegat permintaan bisa memengaruhi pemuatan dan tampilan normal widget.",
  "cause": "Skrip heatmap / analitik / konversi menulis ulang DOM, menyuntik overlay atau mencegat permintaan; karena mereka dan 美洽 menyuntik ke dokumen yang sama, penumpukan / event saling ganggu dan kontainer 美洽 tertutup atau init-nya terputus.",
  "fix": "Nonaktifkan plugin mencurigakan satu per satu untuk melokalkan konflik; sesuaikan urutan muat / penumpukan kontainer; buat heatmap dll. menghindari area kontainer 美洽.",
  "scene": "Chat tak bisa diklik setelah menambah plugin heatmap → overlay heatmap di atas chat; sesuaikan penumpukan atau kecualikan area dan kembali."
 },
 "SPA路由": {
  "cat": "Integrasi framework",
  "name": "Widget hilang setelah ganti rute SPA",
  "alias": "spa vue react next angular satu halaman ganti rute hilang history pushstate pasang ulang SPA路由",
  "trigger": "Chat di beranda, hilang setelah rute frontend pindah ke lain",
  "official": "Untuk aplikasi satu halaman (SPA), pakai hook rute framework untuk memuat / init widget 美洽 agar cocok dengan routing frontend.",
  "cause": "SPA menukar tampilan via routing frontend, menghancurkan / membangun ulang DOM, tapi meiqia.js menyuntik sekali saat muat pertama secara default dan tak dibangun ulang otomatis saat ganti rute, jadi «ganti halaman, chat hilang».",
  "fix": "Pakai _MEIQIA('manualInit') untuk menghentikan auto-init, dan panggil _MEIQIA('init') di hook rute (React useEffect / Vue mounted / router afterEach) untuk memasang ulang sesuai kebutuhan; hindari menginisialisasi banyak instance.",
  "scene": "Situs Next.js punya chat di beranda, tidak di halaman detail → tambah _MEIQIA('init') di hook rute untuk memasang ulang tiap navigasi."
 },
 "手动初始化": {
  "cat": "Integrasi framework",
  "name": "Perlu init manual (manualInit / init)",
  "alias": "manualinit init inisialisasi manual auto init _meiqia api waktu dimuat 手动初始化",
  "trigger": "Anda ingin mengatur kapan 美洽 init, atau waktu auto-init salah",
  "official": "Tambah _MEIQIA('manualInit') setelah kode sematan 美洽 untuk menghentikan auto-init setelah unduh; panggil _MEIQIA('init') untuk init manual saat diperlukan.",
  "cause": "Secara default 美洽 auto-init tepat setelah unduh; saat Anda perlu kontainer siap / info pelanggan terkirim / rute stabil dulu, waktu itu «terlalu dini» — beralih ke init manual untuk mengatur urutan.",
  "fix": "Tambah _MEIQIA('manualInit') setelah kode; panggil _MEIQIA('init') begitu kondisi siap (DOM / sesi / rute); panggil API info berurutan dalam waktu init sesuai dok.",
  "scene": "Ingin init chat dengan identitas pengguna setelah login → manualInit + init di callback login, menghindari koneksi anonim pertama."
 },
 "entId错误": {
  "cat": "Konfigurasi / otorisasi",
  "name": "entId tidak cocok / agen tidak menerima chat",
  "alias": "entid id perusahaan unik tak cocok tanpa chat cari id kode salah 不一致",
  "trigger": "Jendela chat terbuka, tapi agen tidak menerima pesan pengunjung",
  "official": "Angka setelah entId di kode adalah id unik perusahaan Anda; jika tak cocok dengan workbench, agen tak bisa melayani chat — cari ID perusahaan di Pengaturan - Tim - cari ID.",
  "cause": "entId mengikat snippet ke akun perusahaan tertentu. Dengan kode orang lain / lingkungan lain, atau akun tercampur, frontend memuat jendela tapi pesan pergi ke «perusahaan lain», jadi workbench ini tak menerima apa pun — klasik «tampak baik tapi tak menerima».",
  "fix": "Bandingkan ID perusahaan di Pengaturan - Tim - cari ID dengan entId di kode halaman; jika tak cocok, ganti dengan kode terbaru yang disalin dari konsol perusahaan ini.",
  "scene": "Lupa mengganti kode akun uji dengan produksi → pengunjung bisa chat tapi workbench produksi tak menerima; perbaiki entId dan tersambung."
 },
 "域名未授权": {
  "cat": "Konfigurasi / otorisasi",
  "name": "Domain situs tak diotorisasi di konsol",
  "alias": "domain tak diotorisasi tambah situs integrasi whitelist domain produksi domain uji daftar situs 域名未授权",
  "trigger": "Jalan di uji / lokal, tapi domain produksi tak dimuat / tak melayani",
  "official": "Konsol 美洽 bisa «Tambah situs integrasi», masing-masing dengan konfig sendiri; situs baru harus dikonfigurasi di konsol sebelum terintegrasi benar.",
  "cause": "美洽 mengelola banyak situs sebagai «situs integrasi»; domain harus terdaftar / diotorisasi di konsol untuk dikenali. Domain produksi baru yang tak ditambahkan mungkin tak diterima atau dipetakan ke konfig salah.",
  "fix": "Ke Pengaturan - widget web / situs integrasi, «Tambah situs integrasi» untuk domain produksi dan pakai kode khususnya; verifikasi ejaan domain / subdomain.",
  "scene": "Disetel di localhost, chat tak melayani di www live → tambah domain produksi sebagai situs integrasi di konsol."
 },
 "子渠道": {
  "cat": "Konfigurasi / otorisasi",
  "name": "Multi-situs / sub-kanal (probe) tercampur",
  "alias": "sub-kanal probe multi-situs lini bisnis konfig terpisah tercampur routing pintu masuk 子渠道",
  "trigger": "Beberapa situs / lini bisnis berbagi satu snippet dan routing / pesan otomatis tercampur",
  "official": "美洽 mendukung deploy widget dan tautan chat berbeda per situs (sub-kanal / probe); selain situs default Anda bisa menambah lagi, masing-masing dengan konfig sendiri.",
  "cause": "Lini bisnis berbeda perlu grup agen / pesan otomatis berbeda, tapi jika tiap situs berbagi satu snippet default, sumber tak bisa dibedakan dan konfig tercampur. Sub-kanal (probe) dirancang untuk «satu perusahaan, banyak pintu masuk, di-routing».",
  "fix": "Di Pengaturan - widget web, «Tambah situs integrasi» untuk membuat sub-kanal terpisah per situs, masing-masing dengan kode, tampilan, dan pesan otomatis sendiri.",
  "scene": "Situs utama dan halaman kampanye berbagi satu snippet dan Anda tak bisa bedakan asal → buat sub-kanal terpisah untuk kampanye."
 },
 "移动端不显示": {
  "cat": "Seluler / SDK",
  "name": "Chat web seluler tak muncul / perlu deploy terpisah",
  "alias": "seluler ponsel h5 situs seluler tak muncul deploy terpisah kode sama menyesuaikan wap 移动端",
  "trigger": "Situs PC punya chat, situs seluler / H5 tidak",
  "official": "Kode widget menyesuaikan situs; seluler / PC pakai snippet yang sama tapi harus di-deploy terpisah.",
  "cause": "Banyak tim punya halaman / template PC dan seluler terpisah dan hanya menempel kode di template PC. Snippet-nya sama dan menyesuaikan, tapi langkah «tempel» harus dilakukan juga di template seluler; jika terlewat, seluler tak punya chat.",
  "fix": "Deploy kode 美洽 yang sama sebelum </body> juga di template seluler / H5; verifikasi via F12 meiqia.js dimuat di keduanya; beri seluler tampilan sendiri bila perlu.",
  "scene": "Chat selalu di situs PC tapi tidak di situs ponsel → template seluler tak punya kode; tambahkan dan ia muncul."
 },
 "SDK接入": {
  "cat": "Seluler / SDK",
  "name": "Integrasi SDK native app / AppKey",
  "alias": "sdk app native appkey tambah konfig app integrasi ios android kembangkan sematkan SDK接入",
  "trigger": "Anda ingin chat di dalam app sendiri, bukan web",
  "official": "Integrasi in-app perlu AppKey dari workbench 美洽 (Pengaturan - Integrasi - SDK, «Tambah konfig APP»), dan pengembang mengintegrasikan SDK iOS / Android sesuai dok dan demo resmi.",
  "cause": "App pakai SDK native, bukan JS web: dulu «Tambah konfig APP» untuk AppKey, lalu integrasikan SDK per platform untuk UI chat, belum dibaca, push, dll. — jalur yang sama sekali beda dari widget web.",
  "fix": "Tambah konfig APP di konsol untuk AppKey; integrasikan SDK sesuai demo iOS / Android dengan AppKey; verifikasi navigasi chat / belum dibaca / push.",
  "scene": "Ingin chat langsung di app sendiri → pakai SDK + AppKey, jangan masukkan JS web ke WebView."
 },
 "SDK推送": {
  "cat": "Seluler / SDK",
  "name": "Push pesan SDK tak datang",
  "alias": "push tak datang tanpa push server push kustom keluar app pesan offline notifikasi SDK推送",
  "trigger": "Setelah integrasi SDK, pengguna tak menerima push begitu keluar app",
  "official": "Push SDK 美洽 punya dua mode: dengan «tanpa push», pesan agen hanya sampai dalam app (buka app untuk menerima); dengan «server push kustom», pengguna menerima push ke ponsel bahkan setelah keluar app.",
  "cause": "«Push offline» yang hilang biasanya berarti mode push «tanpa push», atau tak ada server push kustom / sertifikat push per platform. Jalurnya «美洽 → server app → ponsel pengguna»; mata rantai hilang menyisakan penerimaan in-app saja.",
  "fix": "Di konfig APP, pilih «server push kustom» dan siapkan push tiap platform (APNs / kanal vendor); verifikasi push offline sesuai dok; bedakan «pesan in-app» dari «push sistem».",
  "scene": "Saat uji datang dengan app terbuka tapi tidak setelah kunci / keluar → push diset «tanpa push»; beralih ke server push kustom untuk penerimaan offline."
 },
 "自定义按钮": {
  "cat": "Panggilan API",
  "name": "Sembunyikan tombol default / pintu masuk kustom",
  "alias": "withoutbtn showpanel sembunyikan tombol tombol sendiri buka chat hubungi pintu masuk 自定义按钮",
  "trigger": "Anda ingin tombol «Hubungi» sendiri dan menyembunyikan tombol bundar native 美洽",
  "official": "Panggil _MEIQIA('withoutBtn') agar tak menampilkan tombol native 美洽; setelah init sukses, panggil _MEIQIA('showPanel') untuk membuka chat.",
  "cause": "Secara default tombol mengambang native dirender; untuk pintu masuk Anda harus mendeklarasikan «tanpa tombol native» sebelum / saat init dan mengikat «buka chat» ke elemen Anda — soal waktu API, bukan «tombol rusak».",
  "fix": "Panggil _MEIQIA('withoutBtn') sebelum / saat sematan / init; ikat _MEIQIA('showPanel') ke onclick tombol Anda; pastikan berjalan setelah init widget sukses.",
  "scene": "Halaman sudah punya tombol «Chat sekarang» mencolok → withoutBtn menyembunyikan native, dan klik tombol Anda memanggil showPanel untuk membuka jendela."
 },
 "传递顾客信息": {
  "cat": "Panggilan API",
  "name": "Kirim / sinkron info pelanggan tak berlaku",
  "alias": "kirim info pelanggan sinkron identitas metadata data pelanggan tak berlaku waktu init info kustom 传递顾客信息",
  "trigger": "Anda ingin mengirim nama / tingkat / pesanan pengguna login ke agen, tapi mereka tak melihatnya",
  "official": "Widget web 美洽 menyediakan API «kirim info pelanggan», «sinkron identitas pelanggan» dan «tambah info event kustom» untuk membawa data pengunjung ke chat.",
  "cause": "API ini harus dipanggil dalam waktu init yang benar: setelah init sukses (atau dalam waktu manualInit + init). Terlalu dini / lambat, atau format field salah, dan jadi «diset tapi tak berlaku».",
  "fix": "Panggil API kirim / sinkron info dalam waktu init sukses sesuai dok; verifikasi nama dan format field; di SPA, kirim ulang setelah tiap init.",
  "scene": "Anda mengirim nama pengguna ke agen di situs login tapi tampil anonim → panggilan berjalan sebelum init; pindahkan ke callback init sukses dan ia terbawa."
 }
};
window.LABELS = {"miss": "Tidak terdaftar — coba kata kunci lain (not showing / adblock / entId / SPA / sdk) atau lihat tabel lengkap di bawah.", "codeword": ""};
window.FIELDS = [["trigger", "Kapan muncul"], ["official", "Perilaku L1 / posisi resmi"], ["cause", "Akar masalah L2"], ["fix", "Cara memperbaiki"], ["scene", "Kasus nyata"]];
window.THEAD = ["Gejala", "Kelompok", "Perilaku L1 / posisi resmi", "Akar masalah L2"];
