/**
 * Copyright (c) 2017-present, Pixeleasier.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {isNumeric, isArray, newError, createElement, setStyle, setAttr} from './utils';

class Pixeleasier {
	/**
	 * @param {array} arr
	 * @param {number} size
	 * @param {string} measure
	 */
	constructor(arr = [], size = 10, measure = 'px') {
		this.arr = arr;
		this.size = size;
		this.width = this.arr[0].length * this.size;
		this.height = this.arr.length * this.size;
		this.measure = measure;
	}

	/**
	 * Set the measure
	 * @param {string} measure
	 */
	set measure(measure) {
		this.newMeasure = measure;
	}

	/**
	 * Get the measure
	 */
	get measure() {
		return this.newMeasure;
	}

	/**
	 * Set the array
	 * @param {array} arr
	 */
	set arr(arr) {
		if (isArray(arr) && isArray(arr[0])) {
			this.newArr = arr;
		} else {
			newError(`The first parameter is an '${typeof arr}', but must be an array`);
		}
	}

	/**
	 * Get the array
	 */
	get arr() {
		return this.newArr;
	}


	/**
	 * Set the size
	 * @param {number} size
	 */
	set size(size) {
		if (isNumeric(size)) {
			this.Newsize = size;
		} else {
			newError(`The second parameter is an '${typeof size}', but must be an numeric`);
		}
	}

	/**
	 * Get the size
	 */
	get size() {
		return this.Newsize;
	}

	/**
	 * Draw in CSS
	 * @param {array} arr
	 */
	drawningCSS(arr) {
		const draw = createElement();
		const css = createElement();
		let shadow = '';

		setStyle(draw, {
			width: `${this.width}${this.measure}`,
			height: `${this.height}${this.measure}`,
			position: 'relative'
		});

		arr.forEach((row, i) => {
			row.forEach((pixel, j) => {
				if (this.arr.length - 1 === i && this.arr[0].length - 1 === j) {
					shadow += `${this.size * j}${this.measure} ${this.size * i}${this.measure} 0 0 ${pixel}`;
				} else {
					shadow += `${this.size * j}${this.measure} ${this.size * i}${this.measure} 0 0 ${pixel}, `;
				}
			});
		});

		setStyle(css, {
			width: `${this.size}${this.measure}`,
			height: `${this.size}${this.measure}`,
			position: 'absolute',
			top: 0,
			left: 0,
			boxShadow: shadow
		});

		draw.appendChild(css);

		return draw;
	}

	/**
	 * Draw in HTML
	 * @param {array} arr
	 */
	drawningHTML(arr) {
		const draw = createElement();

		setStyle(draw, {
			width: `${this.width}${this.measure}`,
			height: `${this.height}${this.measure}`,
			position: 'relative'
		});

		arr.forEach((row, i) => {
			const newRow = createElement();

			setStyle(newRow, {
				display: 'block',
				width: `${this.arr[0].length * this.size}${this.measure}`,
				height: `${this.size}${this.measure}`,
				position: 'absolute',
				left: 0,
				top: `${this.size * i}${this.measure}`
			});

			row.forEach((pixel, j) => {
				const newPixel = createElement();

				setStyle(newPixel, {
					display: 'block',
					width: `${this.size}${this.measure}`,
					height: `${this.size}${this.measure}`,
					backgroundColor: pixel,
					position: 'absolute',
					left: `${this.size * j}${this.measure}`,
					top: 0
				});

				newRow.appendChild(newPixel);
			});

			draw.appendChild(newRow);
		});

		return draw;
	}

	/**
	 * Draw in SVG
	 * @param {array} arr
	 */
	drawningSVG(arr) {
		const draw = createElement('svg');

		setAttr(draw, {
			width: this.width,
			height: this.height
		});

		arr.forEach((row, i) => {
			row.forEach((pixel, j) => {
				const newPixel = createElement('rect');

				setAttr(newPixel, {
					style: `fill:${pixel}`,
					width: this.size,
					height: this.size,
					x: this.size * j,
					y: this.size * i
				});

				draw.appendChild(newPixel);
			});
		});

		return draw;
	}

	/**
	 * Return the draw in HTML
	 */
	html() {
		return this.drawningHTML(this.arr);
	}

	/**
	 * Return the draw in CSS
	 */
	css() {
		return this.drawningCSS(this.arr);
	}

	/**
	 * Return the draw in SVG
	 */
	svg() {
		return this.drawningSVG(this.arr);
	}
}

export default Pixeleasier;
