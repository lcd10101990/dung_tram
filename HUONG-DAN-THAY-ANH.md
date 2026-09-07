# HƯỚNG DẪN THAY ẢNH — DŨNG & TRÂM / DA04

## 1. Quy tắc nhanh

Bạn chỉ cần thay file ảnh trong thư mục `assets/` và **GIỮ NGUYÊN TÊN FILE**.
Không cần sửa HTML.

Nếu muốn đổi tên file, sửa đường dẫn tương ứng trong `js/config.js`.

## 2. Kích thước ảnh khuyến nghị

| File | Vị trí | Tỷ lệ | Kích thước khuyên dùng | Ghi chú |
|---|---|---:|---:|---|
| `01-cover.jpg` | Ảnh bìa đầu trang | 2:3 | 1600×2400 px | Ảnh dọc, nhân vật nên ở giữa |
| `02-bride.jpg` | Thông tin cô dâu | 3:4 | 1200×1600 px | Chụp toàn thân/nửa người |
| `04-groom.jpg` | Thông tin chú rể | 3:4 | 1200×1600 px | Chụp toàn thân/nửa người |
| `05-bride-card.jpg` | Ảnh cô dâu polaroid | 3:4 | 1200×1600 px | Có thể dùng ảnh khác |
| `06-story-01.jpg` | Câu chuyện #1 | ~16:9 | 1400×800 px | Ảnh ngang |
| `07-story-02.jpg` | Câu chuyện #2 | ~16:9 | 1400×800 px | Ảnh ngang |
| `08-story-03.jpg` | Câu chuyện #3 | ~16:9 | 1400×800 px | Ảnh ngang |
| `09-story-04.jpg` | Câu chuyện #4 | ~16:9 | 1400×800 px | Ảnh ngang |
| `gallery-01.jpg` → `08` | Album | 2:3 hoặc 3:4 | 1200×1800 px | Có thể trộn ngang/dọc |
| `qr-placeholder.png` | QR | 1:1 | 800×800 px | Thay bằng QR thật |

## 3. Vị trí ảnh trên trang

### Ảnh bìa
`assets/01-cover.jpg`
- Nằm toàn màn hình.
- Desktop: ảnh phủ khoảng 100vw × 100vh.
- Mobile: khoảng 100vw × 100svh.
- CSS dùng `object-fit: cover`, vì vậy **mép ảnh có thể bị cắt**.
- Để mặt cô dâu/chú rể không bị cắt, đặt mặt gần trung tâm ảnh.

### Cô dâu / chú rể
`assets/04-groom.jpg` và `assets/05-bride-card.jpg`
- Hiển thị dạng polaroid.
- Khung khoảng tỷ lệ 3:4.
- Ảnh bị cắt nhẹ nếu không đúng tỷ lệ.
- Nhân vật nên nằm trong vùng giữa 70% ảnh.

### Câu chuyện tình yêu
4 ảnh:
`06-story-01.jpg` → `09-story-04.jpg`
- Hiển thị ngang.
- Tỷ lệ khoảng 1.55:1.
- Khuyên dùng 1400×800.
- Mỗi ảnh nằm phía trên đoạn mô tả.

### Album
`gallery-01.jpg` → `gallery-08.jpg`
- Hiển thị dạng lưới.
- Một số ô cao hơn để tạo cảm giác giống mẫu DA04.
- `object-fit: cover` nên ảnh sẽ được crop tự động.

## 4. Muốn đổi nội dung chữ

Mở:
`js/config.js`

Ở đó bạn có thể sửa:
- tên cô dâu
- tên chú rể
- ngày cưới
- giờ
- cha mẹ hai bên
- địa chỉ
- link Google Maps
- danh sách ảnh
- QR

Ví dụ:
`groom: "Lê Chung Dũng"`

## 5. Thêm ảnh album thứ 9, 10...

Mở `js/config.js`:

`gallery: ["assets/gallery-01.jpg", ...]`

Thêm:
`"assets/gallery-09.jpg"`

Không cần sửa HTML.

## 6. Nhạc

Tạo:
`music/wedding.mp3`

Tên file PHẢI là:
`wedding.mp3`

Trình duyệt có thể chặn tự động phát nhạc. Người xem cần bấm nút ♪.

## 7. Lưu ý chất lượng

Không nên dùng ảnh chụp màn hình website làm ảnh cưới chính thức.
Các ảnh hiện có trong gói chỉ là ảnh mẫu lấy từ file bạn đã cung cấp.

Ảnh cưới nên:
- JPEG chất lượng 85–95%
- cạnh dài khoảng 1600–2500 px
- mỗi ảnh khoảng 300 KB – 2 MB
- tránh ảnh quá 8–10 MB vì website sẽ tải chậm trên 4G.


## Font tiếng Việt
Bản V3 dùng **Great Vibes** cho chữ viết tay vì font này có bộ ký tự tiếng Việt đầy đủ hơn Parisienne, tránh lỗi dấu như “Nguyễn”, “Thị”, “Cúc”, “Trâm”.
