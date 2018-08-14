import Pixeleasier from './Pixeleasier';
import { createElement, setStyle } from '../utils/dom';
import { classes } from '../utils/constants';

class PixeleasierCSS extends Pixeleasier {
	createDraw() {
		const {draw} = classes;
		const elementDraw = createElement('div', draw);

		setStyle(elementDraw, {
			width: `${this.width}${this.measure}`,
			height: `${this.height}${this.measure}`,
			position: 'relative'
		});

		return elementDraw;
	}

	createCSS(shadow) {
		const {css} = classes;
		const elementCss = createElement('div', css);

		setStyle(elementCss, {
			width: `${this.size}${this.measure}`,
			height: `${this.size}${this.measure}`,
			position: 'absolute',
			top: 0,
			left: 0,
			boxShadow: shadow
		});

		return elementCss;
	}

	createDrawing() {
		const draw = this.createDraw();
		let shadow = '';

		this.arr.forEach((rows, i) => {
			rows.forEach((pixelColor, j) => {
				if (this.arr.length - 1 === i && this.arr[0].length - 1 === j) {
					shadow += this.getShadow(i, j, pixelColor);
				} else {
					shadow += `${this.getShadow(i, j, pixelColor)}, `;
				}
			});
		});

		const css = this.createCSS(shadow);

		draw.appendChild(css);

		return draw;
	}

	getShadow(i, j, pixelColor) {
		return `${this.size * j}${this.measure} ${this.size * i}${this.measure} 0 0 ${pixelColor}`;
	}
}

export default PixeleasierCSS;