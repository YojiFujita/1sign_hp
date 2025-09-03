document.addEventListener('DOMContentLoaded', () => {
  console.log('Site initialized');

  const hamburgerButton = document.getElementById('hamburgerButton');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburgerButton && mobileNav) {
    const closeMobileNav = () => {
      hamburgerButton.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      hamburgerButton.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    const openMobileNav = () => {
      hamburgerButton.classList.add('is-open');
      mobileNav.classList.add('is-open');
      hamburgerButton.setAttribute('aria-expanded', 'true');
      mobileNav.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    hamburgerButton.addEventListener('click', () => {
      const isOpen = hamburgerButton.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // メニュー内リンククリックで閉じる
    mobileNav.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a')) {
        closeMobileNav();
      }
    });

    // エスケープキーで閉じる
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileNav();
    });
  }
});


