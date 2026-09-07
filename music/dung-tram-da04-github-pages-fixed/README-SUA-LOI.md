# Bản đã rà soát và sửa

## Đã sửa
1. Google Maps:
   - Nhà trai -> link maps mới trong config.
   - Nhà gái -> link maps mới trong config.
2. Ngày/ thứ tiệc:
   - Đưa ngày nhà gái và nhà trai vào `config.js`, không hard-code trong HTML.
3. Binding dữ liệu:
   - Dùng `textContent` cho nội dung text để tránh chèn HTML ngoài ý muốn.
   - Chỉ dùng `innerHTML` cho các địa chỉ đang chứa `<br>`.
4. Form lời chúc:
   - Bỏ iframe ẩn dùng làm target POST, tránh lỗi xuất hiện ô trắng.
   - Dùng `fetch()` gửi trực tiếp đến Google Apps Script.
   - Có trạng thái đang gửi / thành công / lỗi.
   - Không còn giả lập thành công bằng `setTimeout`.
5. Giữ nguyên cấu trúc giao diện và các đường dẫn asset hiện có.

## Lưu ý
- Thư mục này được dựng từ 3 file bạn vừa tải lên.
- Các file ảnh, nhạc và `style.css` chưa được đưa vào gói vì chưa được tải lên cùng lượt này. Hãy chép chúng từ bộ GitHub hiện tại vào đúng các thư mục `assets/`, `music/`, `css/`.
