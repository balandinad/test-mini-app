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

    // Сохраняем исходные тексты
    const originalHeadingText = heading.textContent;
    const originalButtonText = button.textContent;

    // Флаг для отслеживания состояния
    let isChanged = false;

    // Обработчик клика по кнопке
    button.addEventListener('click', function() {
        if (!isChanged) {
            // Меняем текст заголовка и кнопки
            heading.textContent = "Энвер лох)";
            this.textContent = "Подтверждаю";
            isChanged = true;
        } else {
            // Возвращаем исходные значения
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
