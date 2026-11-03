# Academic Portfolio & Master's Scholarship Roadmap (2028 - 2029)
### Ứng viên: Lăng Ngân Anh (HUNRE)

Website tổng hợp hồ sơ năng lực học thuật và chiến lược chinh phục các chương trình **Học bổng Thạc sĩ Toàn phần 100% (Học phí + Sinh hoạt phí)** ngành **Quản lý Tài nguyên & Môi trường / Bền vững / Biến đổi khí hậu** cho kỳ nhập học 2028 – 2029.

---

## 🌟 Tính Năng Nổi Bật Của Website

1. **Hồ sơ ứng viên tương tác (Interactive Profile):**
   - Trưng bày ảnh chân dung cá nhân (`pic.jpg`) cùng thông tin ngày sinh (24/12/2005), trường đào tạo (Trường Đại học Tài nguyên và Môi trường Hà Nội - HUNRE).
   - Thống kê các chỉ số học thuật cốt lõi: GPA 3.2/4.0 (~80%), IELTS Target 7.0+, 01 năm kinh nghiệm thực tiễn.
2. **Khám phá & Lọc học bổng thông minh:**
   - Hơn 10 chương trình học bổng Thạc sĩ toàn phần hàng đầu thế giới (Erasmus Mundus, MEXT Nhật Bản, GKS Hàn Quốc, France Eiffel, Master Mind Bỉ, Manaaki New Zealand, RTP Úc, TU Delft, ETH Zurich, Wageningen...).
   - Tìm kiếm theo từ khóa thời gian thực và lọc theo khu vực (Châu Âu, Châu Á, Châu Đại Dương).
3. **Hyperlink & Cửa sổ Thông tin Chi tiết kèm Lộ trình Apply (Popup Modal & Deep Linking):**
   - Khi nhấp vào bất kỳ tên học bổng nào, hệ thống sẽ mở bảng phân tích chuyên sâu gồm:
     - Giá trị tài trợ trọn gói (Học phí, sinh hoạt phí, vé máy bay, bảo hiểm...).
     - Đối sánh chi tiết với năng lực của Lăng Ngân Anh (GPA, IELTS, kinh nghiệm 1 năm).
     - Danh mục hồ sơ cần chuẩn bị.
     - **Lộ trình từng bước (Action Roadmap) để Ngân Anh nộp hồ sơ & phỏng vấn.**
     - Bí quyết chiến lược nâng cao tỷ lệ trúng tuyển.
     - Hỗ trợ URL hash trực tiếp (VD: `#erasmus-mundus`, `#mext-japan`, `#gks-korea`) giúp dễ dàng chia sẻ đường link cụ thể.
4. **Bảng tổng hợp đối sánh nhanh (Comparison Table):**
   - So sánh trực quan giá trị, yêu cầu kinh nghiệm và hạn nộp của các chương trình.
   - Ghi chú riêng nhóm học bổng yêu cầu ≥ 2 năm kinh nghiệm (AAS Úc, Chevening Anh, DAAD Đức) cho tương lai.
5. **Lộ trình tổng thể 4 giai đoạn (Master Timeline 2026 - 2028):**
   - Chuẩn bị cốt lõi ➔ Nộp đơn cao điểm 1 ➔ Phỏng vấn & Đề cương cao điểm 2 ➔ Nhận kết quả, xin Visa & Lên đường du học.
6. **Checklist nhiệm vụ cá nhân tương tác (Interactive Task Tracker):**
   - 19 đầu việc cốt lõi được phân chia rõ ràng.
   - Ứng viên có thể tích chọn trực tiếp và hệ thống tự động lưu tiến độ vào `localStorage`.

---

## 🚀 Hướng Dẫn Đăng Tải Lên GitHub & Kích Hoạt GitHub Pages

Trang web được xây dựng bằng chuẩn **HTML5, CSS3, JavaScript thuần (Vanilla JS)** hoàn toàn không cần cài đặt môi trường hay build tool phức tạp, cực kỳ nhẹ và tương thích 100% với **GitHub Pages**.

### Bước 1: Khởi tạo Git và Commit mã nguồn
Mở Terminal / PowerShell tại thư mục này (`g:\My Drive\.FAWARE\2026\Lang`) và chạy các lệnh:

```bash
git init
git add .
git commit -m "Initial commit: Lăng Ngân Anh Academic Scholarship Portal"
```

### Bước 2: Tạo Repository trên GitHub và Push code
1. Đăng nhập vào tài khoản [GitHub](https://github.com) của bạn.
2. Tạo một Repository mới (ví dụ đặt tên là: `scholarship-roadmap` hoặc `lang-ngan-anh-portfolio`).
3. Liên kết và đẩy code lên:

```bash
git branch -M main
git remote add origin https://github.com/<username-cua-ban>/<ten-repo>.git
git push -u origin main
```

### Bước 3: Bật GitHub Pages để có link Website công khai
1. Trên giao diện Repository của bạn trên GitHub, nhấn vào tab **Settings** (Cài đặt).
2. Ở thanh menu bên trái, chọn mục **Pages**.
3. Tại phần **Branch** (dưới mục *Build and deployment*):
   - Chọn nhánh: **`main`**
   - Thư mục: **`/(root)`**
   - Nhấn **Save**.
4. Chờ khoảng 1–2 phút, bạn sẽ nhận được đường link website công khai dạng:
   👉 `https://<username-cua-ban>.github.io/<ten-repo>/`

---

## 📁 Cấu Trúc Thư Mục

```
Lang/
├── index.html              # Giao diện chính của website
├── style.css               # Phong cách thiết kế hiện đại, responsive
├── script.js               # Logic điều khiển, tìm kiếm, lọc, modal, checklist
├── scholarships-data.js    # Cơ sở dữ liệu 10+ học bổng & lộ trình apply chi tiết
├── pic.jpg                 # Ảnh chân dung ứng viên Lăng Ngân Anh
├── Information.docx        # Báo cáo gốc nghiên cứu chuyên sâu về học bổng
└── README.md               # Hướng dẫn chi tiết dự án & cách triển khai
```
