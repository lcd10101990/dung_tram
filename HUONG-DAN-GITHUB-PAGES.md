# CÁCH ĐƯA THIỆP LÊN GITHUB PAGES

## Cách dễ nhất — không cần biết code

### Bước 1 — Tạo tài khoản GitHub
Vào GitHub và đăng nhập.

### Bước 2 — Tạo repository
Bấm dấu `+` → `New repository`.

Đặt tên ví dụ:
`dung-tram`

Chọn:
- Public
- Không cần README
- Create repository

### Bước 3 — Upload website
Trong repository mới:
`Add file` → `Upload files`

Giải nén file ZIP trước.

Kéo **TOÀN BỘ nội dung bên trong thư mục** vào vùng upload:
- `index.html`
- `404.html`
- `README.md`
- `css/`
- `js/`
- `assets/`
- `music/`

Sau đó bấm:
`Commit changes`

QUAN TRỌNG:
`index.html` phải nằm ở thư mục gốc repository.

ĐÚNG:
dung-tram/index.html

SAI:
dung-tram/dung-tram-da04-github-pages-v2/index.html

### Bước 4 — Bật GitHub Pages
Vào:
`Settings` → `Pages`

Ở `Build and deployment`:
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`

Bấm `Save`.

Chờ khoảng 1–5 phút.

GitHub sẽ hiện:
`Your site is live at ...`

Website sẽ có dạng:
`https://TEN-TAI-KHOAN.github.io/dung-tram/`

## Cách cập nhật ảnh sau này

Vào repository → `assets`

Chọn file muốn thay → Upload file mới cùng tên.

Ví dụ muốn thay ảnh bìa:
`assets/01-cover.jpg`

Xóa ảnh cũ và upload ảnh mới tên:
`01-cover.jpg`

GitHub Pages tự cập nhật sau khi commit.

## Nếu muốn URL đẹp

Có thể mua tên miền riêng, ví dụ:
`dungtram.com`

Sau đó cấu hình Custom domain trong:
Settings → Pages → Custom domain.

Không bắt buộc. GitHub Pages miễn phí với địa chỉ github.io.

## Không cần cài XAMPP, WordPress hay hosting.

Website này là HTML/CSS/JS tĩnh nên GitHub Pages chạy trực tiếp.
