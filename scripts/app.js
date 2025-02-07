let tg = window.Telegram.WebApp;

// Расширяем на весь экран
tg.expand();

// Активируем основные цвета темы Telegram
document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color); document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);

// Сообщаем Telegram, что приложение готово
tg.ready();

document.getElementById('changeTextBtn').addEventListener('click', function() {
    // Меняем текст заголовка
    document.querySelector('.h1').textContent = "Энвер лох)";
    
    // Меняем текст кнопки
    this.textContent = "Подтверждаю";
    });
