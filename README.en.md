# Color Converter

![](https://img.shields.io/badge/version-1.0.0-blue)
![](https://img.shields.io/badge/license-MIT-green)
![](https://img.shields.io/badge/themes-light/dark-orange)
![](https://img.shields.io/badge/access-online-brightgreen)

## 🌐 Access the app: [Website](https://skr1pmen.github.io/ColorConverter/)
Read this in other languages:
[Русский](https://github.com/skr1pmen/ColorConverter/blob/main/README.md),
[English](https://github.com/skr1pmen/ColorConverter/blob/main/README.en.md)

A web app for converting colors between different formats with a modern interface and a custom color picker.
## 🌟 Key Features
### Color Format Conversion
- HEX → OKLCH, HLS, HSV, RGB
- RGB → OKLCH, HLS, HSV, HEX
- HSV/HSL → all other formats

### Supported Formats
- OKLCH - modern perceptually uniform format (Lightness, Chroma, Hue)
- HSL - Hue, Saturation, Lightness
- HSV - Hue, Saturation, Value (used in the color picker)
- RGB - Red, Green, Blue
- HEX - hexadecimal representation

### Interface Features
- 🎨 Custom HSV-based color picker
- 🌓 Light and dark themes with automatic saving
- 📱 Fully responsive design for all devices
- 📋 Quickly copy all Formats to the clipboard
- 🔄 Real-time synchronization between all formats
- 🎯 Intuitive preview of the selected color
- 📖 Detailed documentation in a modal window

## 🎮 Usage
### Color selection
1. Via the color picker:
- Move the Hue slider
- Adjust saturation and brightness in a square area
- Use the numeric fields for fine-tuning

2. Manual entry:
- Enter the color in HEX format (#RRGGBB)
- Enter the color in RGB format (rgb(R, G, B))

### Conversion
- All formats are updated automatically
- To copy, click the "Copy" button next to the desired format
- A notification will confirm successful copying

### Themes
- Switch in the upper right corner
- The theme is saved between sessions

## 🎨 Technical details
### Conversion Algorithms
- RGB → HSV/HSL - Mathematically precise conversions
- HSV → RGB - conversion algorithm for the color picker
- RGB → OKLCH - simplified implementation for demonstration

### Color Picker
- Based on the HSV (Hue, Saturation, Value) model
- Gradient generated using Canvas
- Mouse and touch device support
- Real-time update

### Implementation Features
- Input value validation
- Incorrect input recovery

## 🌈 Color Formats
### OKLCH (modern)

oklch(Lightness%, Chroma Hue)

### HSL (Hue, Saturation, Lightness)

hsl(H, S%, L%)

### HSV (Hue, Saturation, Value)

hsv(H, S%, V%)

### RGB (Red, Green, Blue)

rgb(R, G, B)

### HEX (hexadecimal)

#RRGGBB

## 📱 Responsiveness

The app displays correctly on:
- 🖥️ Desktops (width from 901px)
- 📱 Tablets (width 600px-900px)
- 📲 Smartphones (width up to 600px)

## 🛠️ Technologies
- HTML5 - app structure
- CSS3 - styling and animations
- JavaScript (ES6+) - logic and interaction
- Canvas API - color picker gradient generation
- Font Awesome - interface icons
- Local Storage - theme saving

## 🔧 Potential improvements
1. Additional formats:
- [ ] CMYK for printing
- [ ] LAB Color space
- [ ] XYZ color model

2. New features:
- [ ] Saving history of selected colors
- [ ] Harmonious color palettes
- [ ] Export colors to CSS/SCSS
- [ ] Text contrast against background

3. Technical improvements:
- [ ] More accurate OKLCH algorithm
- [ ] PWA version for offline work
- [ ] Browser plugin

## 🤝 Contribute to development
- Fork the repository
- Create a branch for the new feature
- Contribute changes
- Create a pull request

## 📄 License
This project is distributed under the MIT license. See the LICENSE file for details.

## 👏 Thanks
- Font Awesome for the great icons
- The developer community for ideas and inspiration
- To all testers and users

---

## 📞 Contact and Support

If you have questions, suggestions, or found a bug:

- Create an issue in the repository
- Describe the problem in as much detail as possible
- Provide steps to reproduce

---

Made with ❤️ for the designer and developer community

_Use colors wisely and create beautiful interfaces!_