(() => {
  const refs = {
    // Кнопка відкриття меню
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Кнопка закриття меню
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    // Само мобільне меню
    menu: document.querySelector("[data-menu]"),
  };

  // Відкриття меню
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  // Закриття меню
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // Додаємо/видаляємо клас is-open для меню
    refs.menu.classList.toggle("is-open");
  }
})();