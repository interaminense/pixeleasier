import { createElement, setStyle } from '../utils/dom';
import { classes } from '../utils/constants';

class Pixeleasier {
	constructor(arr = [[]], size = '10', measure = 'px') {
		this.arr = arr;
		this.size = size;
		this.measure = measure;
		this.width = this.arr[0].length * this.size;
		this.height = this.arr.length * this.size;
	}

	get arr() {
		return this._arr;
	}

	set arr(arr) {
		this._arr = arr;
	}

	get size() {
		return this._size;
	}

	set size(size) {
		this._size = size;
	}

	get measure() {
		return this._measure;
	}

	set measure(measure) {
		this._measure = measure;
	}

	createContainer() {
		const {container} = classes;
		const elementContainer = createElement('div', container);

		return elementContainer;
	}

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

export default Pixeleasier;