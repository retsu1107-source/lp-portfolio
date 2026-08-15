// 共通JS（モバイルメニュー / ヘッダー影 / フォームの簡易バリデーション）
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  const header = document.getElementById("site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        e.preventDefault();
        return;
      }

      let hasError = false;
      form.querySelectorAll("[required]").forEach((field) => {
        const errorEl = document.getElementById(`${field.id}-error`);
        const isEmpty = !field.value.trim();
        const isInvalidEmail =
          field.type === "email" && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);

        if (isEmpty || isInvalidEmail) {
          hasError = true;
          field.classList.add("border-red-500");
          if (errorEl) {
            errorEl.textContent = isEmpty ? "この項目は必須です" : "メールアドレスの形式が正しくありません";
            errorEl.classList.remove("hidden");
          }
        } else {
          field.classList.remove("border-red-500");
          if (errorEl) errorEl.classList.add("hidden");
        }
      });

      if (hasError) {
        e.preventDefault();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.classList.add("is-submitting");
        submitBtn.textContent = "送信中...";
      }
    });
  }
});
