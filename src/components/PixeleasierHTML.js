import Pixeleasier from '../pixeleasier';
import { createElement, setStyle } from '../utils/dom';
import { classes } from '../utils/constants';

class PixeleasierHTML extends Pixeleasier {
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

	createRow(index) {
		const {row} = classes;
		const rowElement = createElement('div', row);

		setStyle(rowElement, {
			display: 'block',
			width: `${this.arr[0].length * this.size}${this.measure}`,
			height: `${this.size}${this.measure}`,
			position: 'absolute',
			left: 0,
			top: `${this.size * index}${this.measure}`
		});

		return rowElement;
	}

	createPixel(pixelColor, j) {
		const {pixel} = classes;
		const pixelElement = createElement('div', pixel);

		setStyle(pixelElement, {
			display: 'block',
			width: `${this.size}${this.measure}`,
			height: `${this.size}${this.measure}`,
			backgroundColor: pixelColor,
			position: 'absolute',
			left: `${this.size * j}${this.measure}`,
			top: 0
		});

		return pixelElement;
	}

	createDrawing() {
		const draw = this.createDraw();

		this.arr.forEach((rows, i) => {
			const row = this.createRow(i);

			rows.forEach((pixelColor, j) => {
				const pixel = this.createPixel(pixelColor, j);

				row.appendChild(pixel);
			});

			draw.appendChild(row);
		});

		return draw;
	}

	render() {
		const container = this.createContainer();
		const draw = this.createDrawing();

		container.appendChild(draw);

		return container;
	}
}

export default PixeleasierHTML;