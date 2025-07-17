// Mobile menu logic
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuClose = document.getElementById('mobile-menu-close');

function openMobileMenu() {
  mobileNav.classList.add('active');
  mobileMenuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  mobileNav.classList.remove('active');
  mobileMenuOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);
if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMobileMenu();
});

// Language switcher logic
function setLanguage(lang) {
  // Sync desktop and mobile buttons
  document.querySelectorAll('#lang-en-btn, #mobile-lang-en-btn').forEach(btn => btn.classList.toggle('active', lang === 'en'));
  document.querySelectorAll('#lang-zh-btn, #mobile-lang-zh-btn').forEach(btn => btn.classList.toggle('active', lang === 'zh'));
  // Show/hide language-specific content (if any)
  document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
  document.querySelectorAll('.lang-zh').forEach(el => el.style.display = lang === 'zh' ? '' : 'none');
  localStorage.setItem('site-lang', lang);
}
function setupLanguageSwitcher() {
  const enBtns = document.querySelectorAll('#lang-en-btn, #mobile-lang-en-btn');
  const zhBtns = document.querySelectorAll('#lang-zh-btn, #mobile-lang-zh-btn');
  enBtns.forEach(btn => btn.addEventListener('click', () => setLanguage('en')));
  zhBtns.forEach(btn => btn.addEventListener('click', () => setLanguage('zh')));
  // Load saved language
  const savedLang = localStorage.getItem('site-lang') || 'en';
  setLanguage(savedLang);
}

document.addEventListener('DOMContentLoaded', setupLanguageSwitcher); 