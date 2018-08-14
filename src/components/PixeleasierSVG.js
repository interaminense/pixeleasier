import Pixeleasier from './Pixeleasier';
import { createElement, setAttr } from '../utils/dom';
import { classes } from '../utils/constants';

class PixeleasierSVG extends Pixeleasier {
	createDraw() {
		const {draw} = classes;
		const elementDraw = createElement('svg', draw);

		setAttr(elementDraw, {
			width: this.width,
			height: this.height
		});

		return elementDraw;
	}

	createPixel(pixelColor, i, j) {
		const {pixel} = classes;
		const pixelElement = createElement('rect', pixel);

		setAttr(pixelElement, {
			style: `fill:${pixelColor}`,
			width: this.size,
			height: this.size,
			x: this.size * j,
			y: this.size * i
		});

		return pixelElement;
	}

	createDrawing() {
		const draw = this.createDraw();

		this.arr.forEach((rows, i) => {
			rows.forEach((pixelColor, j) => {
				const pixel = this.createPixel(pixelColor, i, j);

				draw.appendChild(pixel);
			});

		});

		return draw;
	}
}

export default PixeleasierSVG;