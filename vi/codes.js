window.CODES = {
 "窗口不显示": {
  "cat": "Tải lỗi",
  "name": "Cửa sổ / bong bóng chat hoàn toàn không hiển thị",
  "alias": "không hiển thị widget vô hình không bong bóng not showing 不显示",
  "trigger": "Sau khi dán mã không có bong bóng / nút chat ở góc dưới phải",
  "official": "Widget web 美洽 tải cửa sổ chat nổi bằng một snippet JS được dán; xác nhận mã đã nhúng đúng và trang tích hợp đã cấu hình trong console.",
  "cause": "Widget là meiqia.js được chèn vào DOM sau khi tải bất đồng bộ, nên «không có gì» thường nghĩa là «script chưa từng tải»: sai vị trí, bị adblock / cache chặn, hoặc miền / entId không khớp, nên bước chèn không bao giờ chạy.",
  "fix": "F12 → Network, tìm meiqia.js: không request → mã không có hiệu lực (kiểm vị trí / xóa cache); có request nhưng khác 200 → bị chặn hoặc lỗi đường dẫn; mọi thứ ổn mà vẫn ẩn → kiểm entId / cấp phép miền và các nhóm dưới.",
  "scene": "Dán mã, làm mới, không bong bóng, và F12 không có request meiqia.js → mã không có trong template live / bị cache; xóa cache và deploy lại."
 },
 "按钮不显示": {
  "cat": "Lỗi hiển thị",
  "name": "Script đã tải nhưng mất nút chat",
  "alias": "không nút mất nút button missing console ổn 按钮不显示",
  "trigger": "F12 hiện meiqia.js 200, nhưng nút chat đơn giản không có trên trang",
  "official": "Mã widget tự thích ứng site và hiện nút chat; nếu hiển thị lỗi, kiểm xem có bị kiểu ẩn hay khởi tạo bị ngắt.",
  "cause": "Nếu script tải nhưng mất nút, thường là vấn đề «lớp hiển thị»: CSS toàn site ghi đè vị trí nút / đặt display:none, z-index thua, hoặc phần tử cố định khác che; lỗi JS khác cũng có thể ngắt khởi tạo.",
  "fix": "F12 → Elements, tìm container 美洽 — có, bị ẩn, hay ngoài màn hình?; tạm tắt CSS / script riêng để thử lại; kiểm console xem lỗi ngắt thực thi.",
  "scene": "meiqia.js 200, console typeof _MEIQIA là function, nhưng không nút → CSS theme định vị nó ngoài màn hình; sửa kiểu / vị trí và nó hiện."
 },
 "广告拦截": {
  "cat": "Tải lỗi",
  "name": "meiqia.js bị tiện ích adblock chặn",
  "alias": "adblock ublock adguard err_blocked_by_client bị chặn whitelist tiện ích 广告拦截",
  "trigger": "Console: meiqia.js net::ERR_BLOCKED_BY_CLIENT, và cửa sổ chat không hiện",
  "official": "Script chat 美洽 đến từ miền bên thứ ba; nếu có tiện ích chặn cài đặt, nó có thể coi là quảng cáo / theo dõi và ngăn tải — tắt chặn hoặc whitelist.",
  "cause": "ERR_BLOCKED_BY_CLIENT nghĩa là tiện ích trình duyệt (AdBlock / uBlock / AdGuard) chặn request theo danh sách lọc. Script 美洽 là «bên thứ ba ngoài miền + giao tiếp thời gian thực», thường bị quy tắc đó hiểu nhầm là quảng cáo / theo dõi, gây lỗi giả «console ổn, phía người dùng mất».",
  "fix": "Thử lại ở ẩn danh hoặc tắt adblock — nếu hiện, chặn là nguyên nhân; nhắc người dùng whitelist site; frontend có thể tải script chat trễ / có điều kiện để né một số quy tắc tự động.",
  "scene": "Hiện tốt trên máy bạn, một số người dùng báo không chat → họ có adblock; console hiện rõ ERR_BLOCKED_BY_CLIENT."
 },
 "脚本未加载": {
  "cat": "Tải lỗi",
  "name": "meiqia.js 404 / trạng thái xấu / nội dung hỗn hợp",
  "alias": "404 trạng thái chưa tải cache cdn https nội dung hỗn hợp chứng chỉ 脚本未加载",
  "trigger": "meiqia.js khác 200 ở F12 → Network (404 / bị chặn / pending)",
  "official": "Sau khi deploy, tìm meiqia.js trong bảng Network; trạng thái 200 nghĩa là script đặt đúng và đã tải.",
  "cause": "Nguyên nhân khác-200 thường gặp: mã bị cache trang / CDN giữ (chưa làm mới sau xuất bản), tải trên trang HTTP / chuỗi chứng chỉ không đầy đủ kích hoạt chặn nội dung hỗn hợp, hoặc mã hỏng / sao chép thiếu. Bước này lỗi thì chèn và kết nối không bao giờ xảy ra.",
  "fix": "Xóa cache CDN / trình duyệt (hoặc ẩn danh) sau xuất bản; đảm bảo HTTPS đầy đủ với chuỗi chứng chỉ nguyên vẹn và không nội dung hỗn hợp; xác minh mã sao chép đầy đủ và không bị escape.",
  "scene": "Sửa template nhưng site live vẫn phục vụ mã chat cũ → cache CDN chưa làm mới; làm mới mạnh / xóa cache đưa meiqia.js về 200."
 },
 "代码位置": {
  "cat": "Tải lỗi",
  "name": "Mã sai vị trí (chặn head / không hiệu lực)",
  "alias": "vị trí đặt đâu head body dưới chặn nhúng thẻ đóng 代码位置",
  "trigger": "Mã trong <head> hoặc trong script async; trang trắng / chat lúc có lúc không",
  "official": "美洽 khuyến nghị dán mã ở cuối trang, trước </body>; widget chạy sau khi nội dung chính tải xong.",
  "cause": "Widget phải chèn container sau khi DOM sẵn sàng. Trong <head> nó chặn render (màn hình trắng trước trên mạng yếu) hoặc chạy trước khi DOM sẵn sàng và chèn lỗi; trong một số scope async / module thứ tự tải cũng có thể sai.",
  "fix": "Đặt JS 美洽 ở footer chung mọi trang, trước </body>; với SPA xem mục «route SPA» và dùng manualInit; đảm bảo bundler không loại bỏ nó qua tree-shaking.",
  "scene": "Nhét mã vào <head> cho tiện; trên mạng yếu người dùng thấy màn trắng trước và chat hiện trễ → chuyển trước </body>."
 },
 "样式错乱": {
  "cat": "Lỗi hiển thị",
  "name": "Kiểu cửa sổ / nút chat vỡ",
  "alias": "kiểu vỡ css xung đột méo lệch theme ghi đè 样式错乱",
  "trigger": "Cửa sổ / nút chat hiện nhưng kiểu vỡ / lệch vị trí",
  "official": "Widget chèn kiểu riêng và tự thích ứng site; xung đột với kiểu toàn site có thể gây bất thường thị giác.",
  "cause": "Script 美洽 chèn CSS lúc runtime; nếu kiểu toàn site (bộ chọn phổ quát / quy tắc ưu tiên cao / reset) ghi đè lớp của nó trước, vị trí, xếp chồng và phông vỡ — tác dụng phụ của «chèn động + chia sẻ một không gian kiểu tài liệu».",
  "fix": "F12 để xem quy tắc site nào ghi đè container 美洽; thu hẹp kiểu toàn site / giảm tác động lên lớp chung; nếu cần nhờ 美洽 chỉnh xếp chồng container.",
  "scene": "Site dùng quy tắc toàn cục như * { position:... } và nút bị đẩy ra giữa → thu hẹp bộ chọn toàn cục là về."
 },
 "按钮跑屏外": {
  "cat": "Lỗi hiển thị",
  "name": "Nút ra ngoài màn hình / bị che",
  "alias": "ngoài màn hình vô hình bị che z-index xếp chồng vị trí cố định lệch 跑屏外",
  "trigger": "Nút có trong DOM nhưng về thị giác mất / bị phần tử khác che",
  "official": "Nút widget xuất hiện dạng nổi vị trí cố định; nếu bị phần tử cố định khác che, chỉnh xếp chồng hoặc vị trí.",
  "cause": "Phần tử position:fixed khác trên site (lên đầu, quảng cáo nổi, thanh hỗ trợ riêng) với z-index cao hơn che nút 美洽, hoặc theme tính sai tọa độ, để nó «ngoài màn hình / bị che».",
  "fix": "Chọn container 美洽 trong F12 để xem tọa độ / z-index thực; nâng nó lên hoặc hạ z-index phần tử che; tránh xếp nhiều nổi cố định một góc.",
  "scene": "Nút «lên đầu» và chat đều ở góc dưới phải và che nhau → lệch vị trí hoặc chỉnh z-index và cả hai đều hiện."
 },
 "插件冲突": {
  "cat": "Lỗi hiển thị",
  "name": "Xung đột DOM plugin / phân tích bên thứ ba",
  "alias": "xung đột plugin heatmap phân tích seo chuyển đổi bên thứ ba dom overlay xếp chồng nhiễu 插件冲突",
  "trigger": "Sau khi thêm plugin heatmap / phân tích / quảng cáo, chat không hiện / hành xử lạ",
  "official": "Script khác trên trang sửa DOM hoặc chặn request có thể ảnh hưởng việc tải và hiển thị bình thường của widget.",
  "cause": "Script heatmap / phân tích / chuyển đổi viết lại DOM, chèn overlay hoặc chặn request; vì chúng và 美洽 cùng chèn vào một tài liệu, xếp chồng / sự kiện nhiễu nhau và container 美洽 bị che hoặc init bị ngắt.",
  "fix": "Tắt từng plugin nghi ngờ để khoanh xung đột; chỉnh thứ tự tải / xếp chồng container; cho heatmap v.v. né vùng container 美洽.",
  "scene": "Chat không nhấp được sau khi thêm plugin heatmap → overlay heatmap nằm trên chat; chỉnh xếp chồng hoặc loại vùng là về."
 },
 "SPA路由": {
  "cat": "Tích hợp framework",
  "name": "Widget biến mất sau khi đổi route SPA",
  "alias": "spa vue react next angular một trang đổi route biến mất history pushstate gắn lại SPA路由",
  "trigger": "Có chat ở trang chủ, mất sau khi route frontend chuyển nơi khác",
  "official": "Với ứng dụng một trang (SPA), dùng hook route của framework để tải / init widget 美洽 hợp với routing frontend.",
  "cause": "SPA đổi view qua routing frontend, hủy / dựng lại DOM, nhưng meiqia.js mặc định chèn một lần ở lần tải đầu và không tự dựng lại khi đổi route, nên «đổi trang, chat mất».",
  "fix": "Dùng _MEIQIA('manualInit') để dừng auto-init, và gọi _MEIQIA('init') trong hook route (React useEffect / Vue mounted / router afterEach) để gắn lại khi cần; tránh khởi tạo nhiều instance.",
  "scene": "Site Next.js có chat ở trang chủ, không ở trang chi tiết → thêm _MEIQIA('init') trong hook route để gắn lại mỗi điều hướng."
 },
 "手动初始化": {
  "cat": "Tích hợp framework",
  "name": "Cần init thủ công (manualInit / init)",
  "alias": "manualinit init khởi tạo thủ công auto init _meiqia api thời điểm đã tải 手动初始化",
  "trigger": "Bạn muốn kiểm soát khi nào 美洽 init, hoặc thời điểm auto-init sai",
  "official": "Thêm _MEIQIA('manualInit') sau mã nhúng 美洽 để dừng auto-init sau khi tải xuống; gọi _MEIQIA('init') để init thủ công khi cần.",
  "cause": "Mặc định 美洽 tự init ngay sau khi tải; khi bạn cần container sẵn sàng / thông tin khách đã truyền / route ổn định trước, thời điểm đó «quá sớm» — chuyển sang init thủ công để kiểm soát trình tự.",
  "fix": "Thêm _MEIQIA('manualInit') sau mã; gọi _MEIQIA('init') khi điều kiện sẵn sàng (DOM / phiên / route); gọi API thông tin theo thứ tự trong thời gian init theo tài liệu.",
  "scene": "Muốn init chat với danh tính người dùng sau đăng nhập → manualInit + init trong callback đăng nhập, tránh kết nối ẩn danh lần đầu."
 },
 "entId错误": {
  "cat": "Cấu hình / cấp phép",
  "name": "entId không khớp / nhân viên không nhận chat",
  "alias": "entid id công ty duy nhất không khớp không chat tra id mã sai 不一致",
  "trigger": "Cửa sổ chat mở, nhưng nhân viên không nhận tin của khách",
  "official": "Số sau entId trong mã là id duy nhất của công ty bạn; không khớp workbench thì nhân viên không thể phục vụ chat — tra ID công ty ở Cài đặt - Nhóm - tra ID.",
  "cause": "entId gắn snippet với một tài khoản công ty cụ thể. Với mã của người khác / môi trường khác, hoặc lẫn tài khoản, frontend tải cửa sổ nhưng tin nhắn tới «công ty khác», nên workbench này không nhận gì — kiểu kinh điển «trông ổn mà không nhận».",
  "fix": "Đối chiếu ID công ty ở Cài đặt - Nhóm - tra ID với entId trong mã trang; nếu không khớp, thay bằng mã mới nhất sao từ console công ty này.",
  "scene": "Quên đổi mã tài khoản thử sang sản xuất → khách chat được nhưng workbench sản xuất không nhận; sửa entId là nối."
 },
 "域名未授权": {
  "cat": "Cấu hình / cấp phép",
  "name": "Miền site chưa cấp phép trong console",
  "alias": "miền chưa cấp phép thêm trang tích hợp whitelist miền sản xuất miền thử danh sách site 域名未授权",
  "trigger": "Chạy ở thử / local, nhưng miền sản xuất không tải / không phục vụ",
  "official": "Console 美洽 cho «Thêm trang tích hợp», mỗi cái có cấu hình riêng; site mới phải cấu hình trong console trước khi tích hợp đúng.",
  "cause": "美洽 quản lý nhiều site như «trang tích hợp»; miền phải đăng ký / cấp phép trong console để được nhận. Miền sản xuất mới chưa thêm có thể không được chấp nhận hoặc ánh xạ sai cấu hình.",
  "fix": "Vào Cài đặt - widget web / trang tích hợp, «Thêm trang tích hợp» cho miền sản xuất và dùng mã riêng của nó; xác minh chính tả miền / tên miền phụ.",
  "scene": "Chỉnh ở localhost, chat không phục vụ trên www live → thêm miền sản xuất làm trang tích hợp trong console."
 },
 "子渠道": {
  "cat": "Cấu hình / cấp phép",
  "name": "Đa site / kênh con (probe) lẫn lộn",
  "alias": "kênh con probe đa site mảng kinh doanh cấu hình riêng lẫn lộn routing lối vào 子渠道",
  "trigger": "Nhiều site / mảng kinh doanh dùng chung một snippet và routing / tin tự động bị trộn",
  "official": "美洽 hỗ trợ deploy widget và link chat khác nhau mỗi site (kênh con / probe); ngoài site mặc định bạn có thể thêm nữa, mỗi cái cấu hình riêng.",
  "cause": "Mảng kinh doanh khác cần nhóm nhân viên / tin tự động khác, nhưng nếu mọi site dùng chung một snippet mặc định, không phân biệt được nguồn và cấu hình lẫn nhau. Kênh con (probe) thiết kế cho «một công ty, nhiều lối vào, được routing».",
  "fix": "Ở Cài đặt - widget web, «Thêm trang tích hợp» để tạo kênh con riêng mỗi site, mỗi cái mã, giao diện và tin tự động riêng.",
  "scene": "Site chính và trang chiến dịch dùng chung một snippet và bạn không phân biệt được nguồn → tạo kênh con riêng cho chiến dịch."
 },
 "移动端不显示": {
  "cat": "Di động / SDK",
  "name": "Chat web di động không hiển thị / cần deploy riêng",
  "alias": "di động điện thoại h5 site di động không hiển thị deploy riêng cùng mã thích ứng wap 移动端",
  "trigger": "Site PC có chat, site di động / H5 thì không",
  "official": "Mã widget tự thích ứng site; di động / PC dùng cùng snippet nhưng phải deploy riêng.",
  "cause": "Nhiều nhóm có trang / template PC và di động riêng và chỉ dán mã ở template PC. Snippet như nhau và tự thích ứng, nhưng bước «dán» phải làm cả ở template di động; bỏ sót thì di động không có chat.",
  "fix": "Deploy cùng mã 美洽 trước </body> cả ở template di động / H5; xác minh qua F12 meiqia.js tải ở cả hai; cho di động giao diện riêng nếu cần.",
  "scene": "Chat luôn ở site PC nhưng không ở site điện thoại → template di động không có mã; thêm vào là hiện."
 },
 "SDK接入": {
  "cat": "Di động / SDK",
  "name": "Tích hợp SDK gốc của app / AppKey",
  "alias": "sdk app gốc appkey thêm cấu hình app tích hợp ios android phát triển nhúng SDK接入",
  "trigger": "Bạn muốn chat trong app riêng, không phải web",
  "official": "Tích hợp in-app cần AppKey từ workbench 美洽 (Cài đặt - Tích hợp - SDK, «Thêm cấu hình APP»), và lập trình viên tích hợp SDK iOS / Android theo tài liệu và demo chính thức.",
  "cause": "App dùng SDK gốc, không phải JS web: trước hết «Thêm cấu hình APP» để lấy AppKey, rồi tích hợp SDK theo nền tảng cho UI chat, chưa đọc, push, v.v. — đường hoàn toàn khác widget web.",
  "fix": "Thêm cấu hình APP trong console để lấy AppKey; tích hợp SDK theo demo iOS / Android với AppKey; xác minh điều hướng chat / chưa đọc / push.",
  "scene": "Muốn chat trực tiếp trong app riêng → dùng SDK + AppKey, đừng nhét JS web vào WebView."
 },
 "SDK推送": {
  "cat": "Di động / SDK",
  "name": "Push tin SDK không tới",
  "alias": "push không tới không push máy chủ push tùy chỉnh thoát app tin offline thông báo SDK推送",
  "trigger": "Sau khi tích hợp SDK, người dùng không nhận push khi thoát app",
  "official": "Push SDK 美洽 có hai chế độ: với «không push», tin nhân viên chỉ tới trong app (mở app để nhận); với «máy chủ push tùy chỉnh», người dùng nhận push tới điện thoại cả khi đã thoát app.",
  "cause": "Thiếu «push offline» thường nghĩa là chế độ push «không push», hoặc không có máy chủ push tùy chỉnh / chứng chỉ push theo nền tảng. Đường là «美洽 → máy chủ app → điện thoại người dùng»; thiếu mắt xích chỉ còn nhận in-app.",
  "fix": "Trong cấu hình APP, chọn «máy chủ push tùy chỉnh» và thiết lập push mỗi nền tảng (APNs / kênh hãng); xác minh push offline theo tài liệu; phân biệt «tin in-app» với «push hệ thống».",
  "scene": "Khi thử tới với app mở nhưng không sau khi khóa / thoát → push đặt «không push»; chuyển sang máy chủ push tùy chỉnh để nhận offline."
 },
 "自定义按钮": {
  "cat": "Gọi API",
  "name": "Ẩn nút mặc định / lối vào tùy chỉnh",
  "alias": "withoutbtn showpanel ẩn nút nút riêng mở chat liên hệ lối vào 自定义按钮",
  "trigger": "Bạn muốn nút «Liên hệ» riêng và ẩn nút tròn gốc của 美洽",
  "official": "Gọi _MEIQIA('withoutBtn') để không hiện nút gốc 美洽; sau khi init thành công, gọi _MEIQIA('showPanel') để mở chat.",
  "cause": "Mặc định nút nổi gốc được render; để dùng lối vào riêng bạn phải khai báo «không nút gốc» trước / trong init và gắn «mở chat» vào phần tử của bạn — vấn đề thời điểm API, không phải «nút hỏng».",
  "fix": "Gọi _MEIQIA('withoutBtn') trước / trong nhúng / init; gắn _MEIQIA('showPanel') vào onclick nút bạn; đảm bảo chúng chạy sau khi init widget thành công.",
  "scene": "Trang đã có nút «Chat ngay» nổi bật → withoutBtn ẩn nút gốc, và nhấp nút bạn gọi showPanel để mở cửa sổ."
 },
 "传递顾客信息": {
  "cat": "Gọi API",
  "name": "Truyền / đồng bộ thông tin khách không hiệu lực",
  "alias": "truyền thông tin khách đồng bộ danh tính metadata dữ liệu khách không hiệu lực thời điểm init thông tin tùy chỉnh 传递顾客信息",
  "trigger": "Bạn muốn truyền tên / cấp / đơn của người dùng đã đăng nhập cho nhân viên, nhưng họ không thấy",
  "official": "Widget web 美洽 cung cấp API «truyền thông tin khách», «đồng bộ danh tính khách» và «thêm thông tin sự kiện tùy chỉnh» để đưa dữ liệu khách vào chat.",
  "cause": "Các API này phải gọi trong thời điểm init đúng: sau khi init thành công (hoặc trong thời điểm manualInit + init). Quá sớm / muộn, hoặc sai định dạng trường, thành «đã đặt mà không hiệu lực».",
  "fix": "Gọi API truyền / đồng bộ thông tin trong thời điểm init thành công theo tài liệu; xác minh tên và định dạng trường; ở SPA, truyền lại sau mỗi init.",
  "scene": "Bạn truyền tên người dùng cho nhân viên trên site đã đăng nhập nhưng hiện ẩn danh → gọi chạy trước init; chuyển vào callback init thành công là truyền được."
 }
};
window.LABELS = {"miss": "Chưa có — thử từ khóa khác (not showing / adblock / entId / SPA / sdk) hoặc xem bảng đầy đủ bên dưới.", "codeword": ""};
window.FIELDS = [["trigger", "Khi nào xuất hiện"], ["official", "Hành vi L1 / định vị chính thức"], ["cause", "Nguyên nhân gốc L2"], ["fix", "Cách sửa"], ["scene", "Tình huống thực"]];
window.THEAD = ["Triệu chứng", "Nhóm", "Hành vi L1 / định vị chính thức", "Nguyên nhân gốc L2"];
