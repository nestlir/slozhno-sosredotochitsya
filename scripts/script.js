const page = document.querySelector('.page');
const themeButtons = document.querySelectorAll('.header__theme-menu-button');

function setActiveButton(theme) {
  themeButtons.forEach((button) => {
    const isActive = button.classList.contains(
      `header__theme-menu-button_type_${theme}`
    );

    button.classList.toggle('header__theme-menu-button_active', isActive);
    button.disabled = isActive;
  });
}

function changeTheme(theme) {
  page.classList.remove('theme_light', 'theme_dark');

  if (theme !== 'auto') {
    page.classList.add(`theme_${theme}`);
  }

  localStorage.setItem('theme', theme);
  setActiveButton(theme);
}

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.classList.contains('header__theme-menu-button_type_light')
      ? 'light'
      : button.classList.contains('header__theme-menu-button_type_dark')
        ? 'dark'
        : 'auto';

    changeTheme(theme);
  });
});

changeTheme(localStorage.getItem('theme') || 'auto');
