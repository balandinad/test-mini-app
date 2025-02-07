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
    const heading = document.querySelector('h1'); // Убрал точку перед h1, так как это тег

    // Обработчик клика по кнопке
    button.addEventListener('click', function() {
        // Меняем текст заголовка
        heading.textContent = "Энвер лох)";

        // Меняем текст кнопки
        this.textContent = "Подтверждаю";

        // Можно добавить вибрацию (опционально)
        if (tg.HapticFeedback) {
            tg.HapticFeedback.impactOccurred('light');
        }
    });
});
