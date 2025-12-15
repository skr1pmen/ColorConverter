// Элементы DOM
const themeToggle = document.getElementById('themeToggle');
const hexInput = document.getElementById('hexInput');
const rgbInput = document.getElementById('rgbInput');
const colorDisplay = document.getElementById('colorDisplay');
const colorHexDisplay = document.getElementById('colorHexDisplay');
const oklchValue = document.getElementById('oklchValue');
const hlsValue = document.getElementById('hlsValue');
const hsvValue = document.getElementById('hsvValue');
const rgbValue = document.getElementById('rgbValue');
const hexValue = document.getElementById('hexValue');
const notification = document.getElementById('notification');
const copyButtons = document.querySelectorAll('.copy-btn');

// Элементы модального окна
const infoButton = document.getElementById('infoButton');
const modalOverlay = document.getElementById('modalOverlay');
const infoModal = document.getElementById('infoModal');
const modalClose = document.getElementById('modalClose');
const modalOkButton = document.getElementById('modalOkButton');

// Элементы цветового пикера
const pickerPreview = document.getElementById('pickerPreview');
const hueSlider = document.getElementById('hueSlider');
const hueThumb = document.getElementById('hueThumb');
const svGradient = document.getElementById('slGradient');
const svThumb = document.getElementById('slThumb');
const hueInput = document.getElementById('hueInput');
const saturationInput = document.getElementById('saturationInput');
const valueInput = document.getElementById('lightnessInput');
const resetPicker = document.getElementById('resetPicker');

// Canvas для градиента
let gradientCanvas = null;
let gradientCtx = null;

// Текущий цвет в формате HSV (для пикера)
let currentHsv = { h: 242, s: 78, v: 90 };
let isDraggingHue = false;
let isDraggingSv = false;

// Текущий цвет в формате RGB
let currentColor = { r: 79, g: 70, b: 229 };

// Флаг для предотвращения циклических обновлений
let isUpdatingFromPicker = false;
let isUpdatingFromInput = false;

// Переключение темы
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    updatePickerGradient();
});

// Загрузка темы из localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Управление модальным окном
infoButton.addEventListener('click', () => {
    modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden'; // Блокируем скролл фона
});

function closeModal() {
    modalOverlay.classList.remove('show');
    document.body.style.overflow = 'auto'; // Восстанавливаем скролл
}

modalClose.addEventListener('click', closeModal);
modalOkButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике на оверлей
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Закрытие модального окна по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
        closeModal();
    }
});

// Отключаем автодополнение для полей ввода
hexInput.setAttribute('autocomplete', 'off');
rgbInput.setAttribute('autocomplete', 'off');
hueInput.setAttribute('autocomplete', 'off');
saturationInput.setAttribute('autocomplete', 'off');
valueInput.setAttribute('autocomplete', 'off');

// Инициализация canvas для градиента
function initGradientCanvas() {
    gradientCanvas = document.createElement('canvas');
    gradientCtx = gradientCanvas.getContext('2d');

    // Устанавливаем размеры canvas
    const rect = svGradient.getBoundingClientRect();
    gradientCanvas.width = Math.max(rect.width, 1);
    gradientCanvas.height = Math.max(rect.height, 1);

    // Вставляем canvas в контейнер
    svGradient.appendChild(gradientCanvas);
    gradientCanvas.style.width = '100%';
    gradientCanvas.style.height = '100%';
    gradientCanvas.style.position = 'absolute';
    gradientCanvas.style.top = '0';
    gradientCanvas.style.left = '0';
    gradientCanvas.style.borderRadius = 'inherit';
}

// Преобразование HEX в RGB
function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }

    const num = parseInt(hex, 16);
    return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255
    };
}

// Преобразование RGB в HEX
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toLowerCase();
}

// Преобразование RGB в HSL (для вывода)
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
}

// Преобразование RGB в HSV
function rgbToHsv(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;

    let h = 0;
    const s = max === 0 ? 0 : d / max;
    const v = max;

    if (max !== min) {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}

// Преобразование HSV в RGB
function hsvToRgb(h, s, v) {
    h /= 360;
    s /= 100;
    v /= 100;

    let r, g, b;

    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

// Преобразование RGB в OKLCH (упрощенная версия)
function rgbToOklch(r, g, b) {
    // Упрощенная реализация для демонстрации
    const hsl = rgbToHsl(r, g, b);

    // Вычисляем яркость (Lightness) как средневзвешенное значение RGB
    const lightness = Math.round((r * 0.2126 + g * 0.7152 + b * 0.0722) / 2.55) / 100;

    // Вычисляем насыщенность (Chroma) на основе разницы между каналами
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = (max - min) / 255;

    // Форматируем значения
    const l = Math.round(lightness * 1000) / 10;
    const c = Math.round(chroma * 1000) / 1000;
    const h = hsl.h;

    return { l, c, h };
}

// Создание правильного HSV градиента на canvas
function createHsvGradient(hue) {
    if (!gradientCtx || !gradientCanvas) return;

    const width = gradientCanvas.width;
    const height = gradientCanvas.height;

    if (width <= 0 || height <= 0) return;

    const imageData = gradientCtx.createImageData(width, height);
    const data = imageData.data;

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            // Вычисляем насыщенность и значение
            const s = x / width; // 0..1
            const v = 1 - (y / height); // 0..1 (инвертируем, так как y идет сверху вниз)

            // Вычисляем цвет в HSV пространстве и преобразуем в RGB
            let r, g, b;

            if (s === 0) {
                // Если насыщенность 0, то это оттенок серого
                r = g = b = v;
            } else {
                const h = hue / 360;
                const i = Math.floor(h * 6);
                const f = h * 6 - i;
                const p = v * (1 - s);
                const q = v * (1 - f * s);
                const t = v * (1 - (1 - f) * s);

                switch (i % 6) {
                    case 0: r = v; g = t; b = p; break;
                    case 1: r = q; g = v; b = p; break;
                    case 2: r = p; g = v; b = t; break;
                    case 3: r = p; g = q; b = v; break;
                    case 4: r = t; g = p; b = v; break;
                    case 5: r = v; g = p; b = q; break;
                }
            }

            // Устанавливаем пиксель
            const index = (y * width + x) * 4;
            data[index] = Math.round(r * 255);     // R
            data[index + 1] = Math.round(g * 255); // G
            data[index + 2] = Math.round(b * 255); // B
            data[index + 3] = 255;                 // A
        }
    }

    gradientCtx.putImageData(imageData, 0, 0);
}

// Обновление градиента пикера на основе текущего Hue
function updatePickerGradient() {
    if (!gradientCtx || !gradientCanvas) {
        initGradientCanvas();
    }

    // Используем canvas для создания точного HSV градиента
    createHsvGradient(currentHsv.h);

    // Также обновляем CSS градиент как fallback
    const hueColor = `hsl(${currentHsv.h}, 100%, 50%)`;
    svGradient.style.background = `
        linear-gradient(to right, 
            #fff 0%, 
            ${hueColor} 100%
        ),
        linear-gradient(to bottom, 
            rgba(255,255,255,1) 0%, 
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0) 50%,
            rgba(0,0,0,1) 100%
        )
    `;
    svGradient.style.backgroundBlendMode = 'multiply';
}

// Обновление всех значений на основе текущего цвета
function updateAllValues() {
    const { r, g, b } = currentColor;

    // Обновляем текущий HSV для пикера
    if (!isUpdatingFromPicker) {
        currentHsv = rgbToHsv(r, g, b);
    }

    // Обновляем HEX
    const hex = rgbToHex(r, g, b);
    if (!isUpdatingFromInput) {
        hexInput.value = hex;
    }

    // Обновляем RGB
    if (!isUpdatingFromInput) {
        rgbInput.value = `rgb(${r}, ${g}, ${b})`;
    }

    // Обновляем отображение цвета
    colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    colorHexDisplay.textContent = hex;

    // Обновляем OKLCH
    const oklch = rgbToOklch(r, g, b);
    oklchValue.textContent = `oklch(${oklch.l}% ${oklch.c} ${oklch.h})`;

    // Обновляем HSL (для вывода)
    const hsl = rgbToHsl(r, g, b);
    hlsValue.textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

    // Обновляем HSV
    hsvValue.textContent = `hsv(${currentHsv.h}, ${currentHsv.s}%, ${currentHsv.v}%)`;

    // Обновляем RGB значение для копирования
    rgbValue.textContent = `rgb(${r}, ${g}, ${b})`;

    // Обновляем HEX значение для копирования
    hexValue.textContent = hex;

    // Обновляем пикер
    updatePickerUI();
}

// Обновление UI пикера
function updatePickerUI() {
    // Обновляем превью
    const rgb = hsvToRgb(currentHsv.h, currentHsv.s, currentHsv.v);
    pickerPreview.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    // Обновляем позицию Hue ползунка
    const huePercent = (currentHsv.h / 360) * 100;
    hueThumb.style.left = `${huePercent}%`;

    // Обновляем позицию Saturation/Value ползунка
    // X = насыщенность (0-100%), Y = значение (0-100%)
    const svX = (currentHsv.s / 100) * 100;
    const svY = (currentHsv.v / 100) * 100;

    // В CSS: 0% сверху, 100% снизу, поэтому инвертируем значение
    const cssY = 100 - svY;

    svThumb.style.left = `${svX}%`;
    svThumb.style.top = `${cssY}%`;

    // Обновляем значения в полях ввода пикера
    if (!isUpdatingFromInput) {
        hueInput.value = currentHsv.h;
        saturationInput.value = currentHsv.s;
        valueInput.value = currentHsv.v;
    }

    // Обновляем градиент
    updatePickerGradient();
}

// Применение цвета из пикера на лету
function applyPickerColor() {
    isUpdatingFromPicker = true;
    currentColor = hsvToRgb(currentHsv.h, currentHsv.s, currentHsv.v);
    updateAllValues();
    isUpdatingFromPicker = false;
}

// Обработчики событий для ввода HEX
hexInput.addEventListener('input', (e) => {
    let hex = e.target.value.trim();

    // Добавляем # если его нет
    if (hex && hex[0] !== '#') {
        hex = '#' + hex;
        e.target.value = hex;
    }

    // Проверяем корректность HEX
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexRegex.test(hex)) {
        isUpdatingFromInput = true;
        currentColor = hexToRgb(hex);
        updateAllValues();
        isUpdatingFromInput = false;
    }
});

// Обработчики событий для ввода RGB
rgbInput.addEventListener('input', (e) => {
    const rgbStr = e.target.value.trim();

    // Проверяем корректность RGB
    const rgbRegex = /^rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
    const match = rgbStr.match(rgbRegex);

    if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);

        // Проверяем диапазон значений (0-255)
        if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
            isUpdatingFromInput = true;
            currentColor = { r, g, b };
            updateAllValues();
            isUpdatingFromInput = false;
        }
    }
});

// Обработчики событий для полей ввода пикера
hueInput.addEventListener('input', () => {
    const h = parseInt(hueInput.value);
    if (h >= 0 && h <= 360) {
        currentHsv.h = h;
        applyPickerColor();
    }
});

saturationInput.addEventListener('input', () => {
    const s = parseInt(saturationInput.value);
    if (s >= 0 && s <= 100) {
        currentHsv.s = s;
        applyPickerColor();
    }
});

valueInput.addEventListener('input', () => {
    const v = parseInt(valueInput.value);
    if (v >= 0 && v <= 100) {
        currentHsv.v = v;
        applyPickerColor();
    }
});

// Обработчики событий для перетаскивания Hue ползунка
hueSlider.addEventListener('mousedown', (e) => {
    isDraggingHue = true;
    updateHueFromEvent(e);

    const mouseMove = (e) => {
        if (isDraggingHue) {
            updateHueFromEvent(e);
        }
    };

    const mouseUp = () => {
        isDraggingHue = false;
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
});

function updateHueFromEvent(e) {
    const rect = hueSlider.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));

    const percent = x / rect.width;
    currentHsv.h = Math.round(percent * 360);
    applyPickerColor();
}

// Обработчики событий для перетаскивания Saturation/Value ползунка
svGradient.addEventListener('mousedown', (e) => {
    isDraggingSv = true;
    updateSvFromEvent(e);

    const mouseMove = (e) => {
        if (isDraggingSv) {
            updateSvFromEvent(e);
        }
    };

    const mouseUp = () => {
        isDraggingSv = false;
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
});

function updateSvFromEvent(e) {
    const rect = svGradient.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(0, Math.min(y, rect.height));

    // X = насыщенность (0-100%)
    const s = Math.round((x / rect.width) * 100);

    // Y = значение (0-100%), но в CSS Y идет сверху вниз
    // Поэтому: сверху (y=0) = значение 100%, снизу (y=height) = значение 0%
    const v = 100 - Math.round((y / rect.height) * 100);

    currentHsv.s = s;
    currentHsv.v = v;
    applyPickerColor();
}

// Сброс пикера к начальному цвету
resetPicker.addEventListener('click', () => {
    currentHsv = { h: 242, s: 78, v: 90 };
    applyPickerColor();
    showNotification('Цвет сброшен к начальному');
});

// Функция для показа уведомления
function showNotification(message) {
    const notificationMessage = notification.querySelector('.notification-message');
    notificationMessage.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Функция для копирования текста в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showNotification('Цвет скопирован в буфер обмена!');
        })
        .catch(err => {
            console.error('Ошибка при копировании: ', err);
            showNotification('Не удалось скопировать цвет');
        });
}

// Обработчики событий для кнопок копирования
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-clipboard-target');
        const targetElement = document.querySelector(targetId);
        const textToCopy = targetElement.textContent;

        // Визуальная обратная связь
        button.classList.add('copied');
        button.innerHTML = '<i class="fas fa-check"></i> Скопировано!';

        copyToClipboard(textToCopy);

        setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = '<i class="far fa-copy"></i> Копировать';
        }, 2000);
    });
});

// Улучшенные обработчики для полей ввода
hexInput.addEventListener('blur', () => {
    let hex = hexInput.value.trim();
    if (!hex) return;

    if (hex[0] !== '#') {
        hex = '#' + hex;
        hexInput.value = hex;
    }

    // Проверяем и корректируем некорректные значения
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
        // Если значение некорректное, восстанавливаем текущий цвет
        hexInput.value = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
    }
});

rgbInput.addEventListener('blur', () => {
    let rgb = rgbInput.value.trim();
    if (!rgb) return;

    // Добавляем rgb() если его нет
    if (!/^rgb/i.test(rgb)) {
        rgb = 'rgb(' + rgb + ')';
        rgbInput.value = rgb;
    }

    // Проверяем корректность
    const rgbRegex = /^rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
    if (!rgbRegex.test(rgb)) {
        // Если значение некорректное, восстанавливаем текущий цвет
        rgbInput.value = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
    }
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Обновляем label для Value
    const valueLabel = document.querySelector('.picker-input-group:nth-child(3) label');
    if (valueLabel) {
        valueLabel.textContent = 'V';
        valueInput.placeholder = 'Value';
    }

    // Инициализируем canvas для градиента
    initGradientCanvas();

    updateAllValues();
    updatePickerUI();

    // Добавляем поддержку тач-устройств для пикера
    hueSlider.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDraggingHue = true;
        updateHueFromEvent(e.touches[0]);
    });

    svGradient.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDraggingSv = true;
        updateSvFromEvent(e.touches[0]);
    });

    document.addEventListener('touchend', () => {
        isDraggingHue = false;
        isDraggingSv = false;
    });

    document.addEventListener('touchmove', (e) => {
        if (isDraggingHue) {
            e.preventDefault();
            updateHueFromEvent(e.touches[0]);
        }
        if (isDraggingSv) {
            e.preventDefault();
            updateSvFromEvent(e.touches[0]);
        }
    });

    // Инициализируем поля ввода с отключенным автодополнением
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('autocorrect', 'off');
        input.setAttribute('autocapitalize', 'off');
        input.setAttribute('spellcheck', 'false');
    });

    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        if (gradientCanvas && svGradient) {
            const rect = svGradient.getBoundingClientRect();
            gradientCanvas.width = Math.max(rect.width, 1);
            gradientCanvas.height = Math.max(rect.height, 1);
            updatePickerGradient();
        }
    });
});