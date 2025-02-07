document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Telegram WebApp
    let tg = window.Telegram.WebApp;

    // Расширяем на весь экран
    tg.expand();

    // Активируем основные цвета темы Telegram
    document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
    document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);

    // Сообщаем Telegram, что приложение готово
    tg.ready();

    // Получаем элементы
    const button = document.getElementById('changeTextBtn');
    const heading = document.querySelector('h1');

    // Сохраняем исходные тексты сразу после загрузки DOM
    const originalHeadingText = "Добро пожаловать в крутой mini app"; // или то, что у вас изначально в HTML
    const originalButtonText = "Начать знакомство"; // или то, что у вас изначально в HTML

    let isChanged = false;

    button.addEventListener('click', function() {
        if (!isChanged) {
            heading.textContent = "Энвер лох)";
            this.textContent = "Подтверждаю";
            isChanged = true;
        } else {
            heading.textContent = originalHeadingText;
            this.textContent = originalButtonText;
            isChanged = false;
        }

        // Добавляем вибрацию
        if (tg.HapticFeedback) {
            tg.HapticFeedback.impactOccurred('light');
        }
    });
});
