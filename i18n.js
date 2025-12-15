const i18n = {
    currentLang: 'ru',
    translations: {
        'ru': {
            'title': 'Конвертер цветов: Hex/RGB в OKLCH и HLS',
            'header_title': 'Конвертер цветов',
            'about_colors': 'О цветах',
            'color_preview': 'Предпросмотр цвета',
            'hex_color': 'HEX цвет',
            'rgb_color': 'RGB цвет',
            'select_color': 'Выберите цвет:',
            'reset': 'Сбросить',
            'conversion_results': 'Результаты конвертации',
            'oklch_color': 'OKLCH цвет',
            'hls_color': 'HLS цвет',
            'hsv_color': 'HSV цвет',
            'copy': 'Копировать',
            'copied': 'Скопировано!',
            'copy_error': 'Не удалось скопировать цвет',
            'modal_title': 'Информация о цветовых форматах',
            'oklch_title': 'OKLCH',
            'oklch_description': 'Современный перцептуально-однородный цветовой формат, который учитывает особенности человеческого зрения. Состоит из трех компонентов:',
            'oklch_lightness': 'Lightness (L)',
            'oklch_lightness_desc': 'воспринимаемая яркость (0-100%)',
            'oklch_chroma': 'Chroma (C)',
            'oklch_chroma_desc': 'насыщенность цвета (0-0.5+)',
            'oklch_hue': 'Hue (H)',
            'oklch_hue_desc': 'оттенок цвета (0-360 градусов)',
            'oklch_conclusion': 'Более точно отражает восприятие цвета человеком по сравнению с другими моделями.',
            'hsl_title': 'HSL (Hue, Saturation, Lightness)',
            'hsl_description': 'Цилиндрическая модель представления цвета, более интуитивная для человека чем RGB:',
            'hsl_hue': 'Hue (H)',
            'hsl_hue_desc': 'оттенок цвета (0-360°)',
            'hsl_saturation': 'Saturation (S)',
            'hsl_saturation_desc': 'насыщенность (0-100%)',
            'hsl_lightness': 'Lightness (L)',
            'hsl_lightness_desc': 'светлота (0-100%)',
            'hsl_conclusion': 'При 0% светлота - черный, при 100% - белый, при 50% - чистый цвет.',
            'hsv_title': 'HSV (Hue, Saturation, Value)',
            'hsv_description': 'Альтернатива HSL, также известная как HSB (Hue, Saturation, Brightness). Используется в большинстве графических редакторов:',
            'hsv_hue': 'Hue (H)',
            'hsv_hue_desc': 'оттенок цвета (0-360°)',
            'hsv_saturation': 'Saturation (S)',
            'hsv_saturation_desc': 'насыщенность (0-100%)',
            'hsv_value': 'Value (V)',
            'hsv_value_desc': 'яркость (0-100%)',
            'hsv_conclusion': 'При 0% значения - черный, при 100% насыщенности и значения - чистый цвет.',
            'rgb_title': 'RGB (Red, Green, Blue)',
            'rgb_description': 'Аддитивная цветовая модель, основанная на смешении трех основных цветов:',
            'rgb_red': 'Red (R)',
            'rgb_red_desc': 'красный компонент (0-255)',
            'rgb_green': 'Green (G)',
            'rgb_green_desc': 'зеленый компонент (0-255)',
            'rgb_blue': 'Blue (B)',
            'rgb_blue_desc': 'синий компонент (0-255)',
            'rgb_conclusion': 'Используется в мониторах, телевизорах и других устройствах отображения.',
            'hex_title': 'HEX (шестнадцатеричный)',
            'hex_description': 'Шестнадцатеричное представление RGB цвета в веб-разработке:',
            'hex_format': 'Формат',
            'hex_format_desc': '#RRGGBB (например: #FF0000 - красный)',
            'hex_short': 'Сокращенный формат',
            'hex_short_desc': '#RGB (например: #F00 - красный)',
            'hex_components': 'Каждая пара символов представляет компонент RGB в шестнадцатеричной системе',
            'hex_conclusion': 'Стандартный формат для указания цветов в HTML и CSS.',
            'tip_title': 'Совет по использованию',
            'tip_description': 'Используйте цветовой пикер для интуитивного выбора цвета или вводите значения вручную в любом формате. Все форматы автоматически синхронизируются. Нажмите на кнопку "Копировать" рядом с нужным форматом, чтобы скопировать значение в буфер обмена.',
            'modal_ok': 'Понятно',
            'copy_notification': 'Цвет скопирован в буфер обмена!',
            'reset_notification': 'Цвет сброшен к начальному',
            'picker_notification': 'Цвет применен из пикера',
            'footer_copyright': 'Конвертер цветов Hex/RGB в OKLCH, HLS и HSV от skr1pmen © 2025',
        },
        'en': {
            'title': 'Color Converter: Hex/RGB to OKLCH and HLS',
            'header_title': 'Color Converter',
            'about_colors': 'About Colors',
            'color_preview': 'Color Preview',
            'hex_color': 'HEX Color',
            'rgb_color': 'RGB Color',
            'select_color': 'Select color:',
            'reset': 'Reset',
            'conversion_results': 'Conversion Results',
            'oklch_color': 'OKLCH Color',
            'hls_color': 'HLS Color',
            'hsv_color': 'HSV Color',
            'copy': 'Copy',
            'copied': 'Copied!',
            'copy_error': 'Failed to copy color',
            'modal_title': 'Color Formats Information',
            'oklch_title': 'OKLCH',
            'oklch_description': 'A modern perceptually uniform color format that takes into account the characteristics of human vision. Consists of three components:',
            'oklch_lightness': 'Lightness (L)',
            'oklch_lightness_desc': 'perceived brightness (0-100%)',
            'oklch_chroma': 'Chroma (C)',
            'oklch_chroma_desc': 'color saturation (0-0.5+)',
            'oklch_hue': 'Hue (H)',
            'oklch_hue_desc': 'color shade (0-360 degrees)',
            'oklch_conclusion': 'More accurately reflects human color perception compared to other models.',
            'hsl_title': 'HSL (Hue, Saturation, Lightness)',
            'hsl_description': 'Cylindrical color representation model, more intuitive for humans than RGB:',
            'hsl_hue': 'Hue (H)',
            'hsl_hue_desc': 'color shade (0-360°)',
            'hsl_saturation': 'Saturation (S)',
            'hsl_saturation_desc': 'saturation (0-100%)',
            'hsl_lightness': 'Lightness (L)',
            'hsl_lightness_desc': 'lightness (0-100%)',
            'hsl_conclusion': 'At 0% lightness - black, at 100% - white, at 50% - pure color.',
            'hsv_title': 'HSV (Hue, Saturation, Value)',
            'hsv_description': 'Alternative to HSL, also known as HSB (Hue, Saturation, Brightness). Used in most graphics editors:',
            'hsv_hue': 'Hue (H)',
            'hsv_hue_desc': 'color shade (0-360°)',
            'hsv_saturation': 'Saturation (S)',
            'hsv_saturation_desc': 'saturation (0-100%)',
            'hsv_value': 'Value (V)',
            'hsv_value_desc': 'brightness (0-100%)',
            'hsv_conclusion': 'At 0% value - black, at 100% saturation and value - pure color.',
            'rgb_title': 'RGB (Red, Green, Blue)',
            'rgb_description': 'Additive color model based on mixing three primary colors:',
            'rgb_red': 'Red (R)',
            'rgb_red_desc': 'red component (0-255)',
            'rgb_green': 'Green (G)',
            'rgb_green_desc': 'green component (0-255)',
            'rgb_blue': 'Blue (B)',
            'rgb_blue_desc': 'blue component (0-255)',
            'rgb_conclusion': 'Used in monitors, TVs and other display devices.',
            'hex_title': 'HEX (Hexadecimal)',
            'hex_description': 'Hexadecimal representation of RGB color in web development:',
            'hex_format': 'Format',
            'hex_format_desc': '#RRGGBB (e.g.: #FF0000 - red)',
            'hex_short': 'Short format',
            'hex_short_desc': '#RGB (e.g.: #F00 - red)',
            'hex_components': 'Each pair of characters represents an RGB component in hexadecimal system',
            'hex_conclusion': 'Standard format for specifying colors in HTML and CSS.',
            'tip_title': 'Usage Tip',
            'tip_description': 'Use the color picker for intuitive color selection or enter values manually in any format. All formats are automatically synchronized. Click the "Copy" button next to the desired format to copy the value to the clipboard.',
            'modal_ok': 'Got it',
            'copy_notification': 'Color copied to clipboard!',
            'reset_notification': 'Color reset to default',
            'picker_notification': 'Color applied from picker',
            'footer_copyright': 'Color Converter Hex/RGB to OKLCH, HLS and HSV by skr1pmen © 2025',
        }
    },
    elements: {
        copyButtons: null,
        languageButtons: null
    },
    init: function() {
        this.elements.copyButtons = document.querySelectorAll('.copy-btn');
        this.elements.languageButtons = document.querySelectorAll('.language-btn');
        this.setInitialLanguage();
        this.initLanguageButtons();
        this.initCopyButtons();
    },
    setInitialLanguage: function() {
        const savedLang = localStorage.getItem('language');

        if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
            this.translatePage(savedLang);
        } else {
            const browserLang = this.detectBrowserLanguage();
            this.translatePage(browserLang);
        }
    },
    detectBrowserLanguage: function() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('en') ? 'en' : 'ru';
    },
    translatePage: function(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[lang] && this.translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', this.translations[lang][key]);
                } else {
                    element.textContent = this.translations[lang][key];
                }
            }
        });
        this.elements.languageButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        document.title = this.translations[lang]['title'];
        this.updateAllCopyButtons();
    },
    initLanguageButtons: function() {
        this.elements.languageButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                this.translatePage(lang);
            });
        });
    },
    initCopyButtons: function() {
        this.elements.copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-clipboard-target');
                const targetElement = document.querySelector(targetId);
                const textToCopy = targetElement.textContent;
                button.classList.add('copied');
                this.updateCopyButtonState(button, true);
                this.copyToClipboard(textToCopy, button);
                setTimeout(() => {
                    button.classList.remove('copied');
                    this.updateCopyButtonState(button, false);
                }, 2000);
            });
        });
    },
    updateCopyButtonState: function(button, isCopied) {
        if (isCopied) {
            button.innerHTML = `<i class="fas fa-check"></i> ${this.translations[this.currentLang]['copied']}`;
        } else {
            button.innerHTML = `<i class="far fa-copy"></i> ${this.translations[this.currentLang]['copy']}`;
        }
    },
    updateAllCopyButtons: function() {
        this.elements.copyButtons.forEach(button => {
            this.updateCopyButtonState(button, button.classList.contains('copied'));
        });
    },
    copyToClipboard: function(text, button) {
        navigator.clipboard.writeText(text)
            .then(() => {
                this.showNotification(this.translations[this.currentLang]['copy_notification']);
            })
            .catch(err => {
                console.error('Copy error: ', err);
                this.showNotification(this.translations[this.currentLang]['copy_error']);
            });
    },
    showNotification: function(message) {
        const notification = document.getElementById('notification');
        const notificationMessage = notification.querySelector('.notification-message');
        notificationMessage.textContent = message;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    },
    t: function(key) {
        return this.translations[this.currentLang][key] || key;
    },
    getCurrentLang: function() {
        return this.currentLang;
    },
    showResetNotification: function() {
        this.showNotification(this.translations[this.currentLang]['reset_notification']);
    }
};
document.addEventListener('DOMContentLoaded', function() {
    i18n.init();
});
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
} else {
    window.i18n = i18n;
}