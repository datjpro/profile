# 🚀 Đạt Nguyễn - Portfolio Website

## 📋 Giới thiệu

Đây là trang portfolio cá nhân của Đạt Nguyễn - Full Stack Developer & UI/UX Designer. Website được thiết kế với giao diện hiện đại, responsive và tối ưu trải nghiệm người dùng.

## ✨ Tính năng

### 🎨 Thiết kế

- **Modern UI/UX**: Thiết kế hiện đại với gradient và animations
- **Responsive Design**: Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- **Dark/Light Mode**: Hỗ trợ chế độ sáng/tối (optional)
- **Smooth Animations**: Hiệu ứng mượt mà và professional

### 📱 Tính năng chính

- **Hero Section**: Giới thiệu bản thân với call-to-action
- **About Section**: Thông tin chi tiết và achievements
- **Experience Timeline**: Lịch sử kinh nghiệm làm việc
- **Skills Showcase**: Hiển thị kỹ năng với progress bars
- **Projects Gallery**: Portfolio dự án với hover effects
- **Contact Form**: Form liên hệ với validation
- **CV Download**: Tải CV trực tiếp

### 🔧 Công nghệ sử dụng

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations, CSS Variables
- **JavaScript ES6+**: Modern JS features
- **Font Awesome**: Icons library
- **Google Fonts**: Typography (Inter font)

## 📁 Cấu trúc dự án

```
profile/
├── index.html          # Trang chính
├── style.css           # Styles chính
├── script.js           # JavaScript functionality
├── README.md           # Tài liệu dự án
└── assets/
    ├── images/
    │   └── Oberon.jpg   # Ảnh profile
    └── CV_DatNguyen.pdf # File CV
```

## 🚀 Cách sử dụng

### 1. Clone hoặc Download

```bash
git clone https://github.com/datjpro/profile.git
cd profile
```

### 2. Mở trong VS Code

```bash
code .
```

### 3. Chạy Live Server

- Cài đặt extension "Live Server" trong VS Code
- Right-click vào `index.html` → "Open with Live Server"
- Hoặc mở trực tiếp file `index.html` trong browser

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân

1. **Ảnh profile**: Thay thế `assets/images/Oberon.jpg`
2. **Thông tin cá nhân**: Chỉnh sửa trong `index.html`
3. **Màu sắc**: Chỉnh sửa CSS variables trong `:root`
4. **CV**: Thay thế `assets/CV_DatNguyen.pdf`

### Tùy chỉnh màu sắc

Trong file `style.css`, section `:root`:

```css
:root {
  --primary-color: #667eea; /* Màu chính */
  --secondary-color: #764ba2; /* Màu phụ */
  --accent-color: #f093fb; /* Màu accent */
  --text-primary: #2c3e50; /* Màu text chính */
  --text-secondary: #7f8c8d; /* Màu text phụ */
}
```

### Thêm/Sửa sections

1. **Experience**: Chỉnh sửa `.timeline-item` trong HTML
2. **Skills**: Cập nhật `.skill-item` và progress levels
3. **Projects**: Thêm/sửa `.project-card`
4. **Social Links**: Cập nhật `.social-link` URLs

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🔧 JavaScript Features

### Smooth Scrolling

```javascript
scrollToSection("about");
```

### Form Validation

- Email validation
- Required fields check
- Notification system

### Animations

- Scroll-triggered animations
- Skill bars animation
- Parallax effects

### Mobile Menu

- Hamburger menu
- Touch-friendly navigation

## 🎯 SEO & Performance

### SEO Optimizations

- Semantic HTML5 structure
- Meta tags
- Alt attributes for images
- Proper heading hierarchy

### Performance Features

- Lazy loading images
- Optimized CSS/JS
- Minimal external dependencies
- Fast loading times

## 📧 Contact Form

Form liên hệ bao gồm:

- Validation client-side
- Email format check
- Required fields validation
- Success/Error notifications
- Auto-open email client

## 🌟 Tính năng nâng cao

### Intersection Observer

- Animate elements on scroll
- Lazy loading
- Active navigation highlighting

### CSS Grid & Flexbox

- Modern layout techniques
- Responsive design
- Flexible components

### CSS Custom Properties

- Easy theming
- Maintainable code
- Dynamic styling

## 🚀 Deployment

### GitHub Pages

1. Push code lên GitHub repository
2. Vào Settings → Pages
3. Chọn source branch (main)
4. Access via `https://username.github.io/profile`

### Netlify

1. Connect GitHub repository
2. Auto-deploy on push
3. Custom domain support

### Vercel

1. Import GitHub repository
2. Zero-config deployment
3. Built-in optimizations

## 📝 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 👨‍💻 Tác giả

**Đạt Nguyễn**

- Website: [datjpro.github.io](https://datjpro.github.io)
- Email: datjpro@gmail.com
- LinkedIn: [linkedin.com/in/datjpro](https://linkedin.com/in/datjpro)
- GitHub: [@datjpro](https://github.com/datjpro)

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📞 Hỗ trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi:

- Tạo Issue trên GitHub
- Email: datjpro@gmail.com
- LinkedIn message

---

⭐ **Nếu project hữu ích, hãy cho 1 star nhé!** ⭐
