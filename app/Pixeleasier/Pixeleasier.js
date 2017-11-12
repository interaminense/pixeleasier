export default class Pixeleasier {
	constructor(arr = [], size = 10) {
		this.arr = arr;
		this.size = size;
	}

	set arr(arr) {
		if (this.isArray(arr) && this.isArray(arr[0])) {
			this._arr = arr;
		} else {
			this.newError(`The first parameter is an ${typeof arr}, but must be an array`);
		}
	}

	get arr() {
		return this._arr;
	}

	set size(size) {
		if (this.isNumeric(size)) {
			this._size = size;
		} else {
			this.newError(`The second parameter is an ${typeof size}, but must be an numeric`);
		}
	}

	get size() {
		return this._size;
	}

	drawningCSS(arr) {
		let draw = this.createElement();
		let css = this.createElement();
		let shadow = '';

		draw.style.width = `${this.arr[0].length * this.size}px`;
		draw.style.height = `${this.arr.length * this.size}px`;
		draw.style.position = 'relative';

		arr.forEach((row, i) => {
			row.forEach((pixel, j) => {
				if(this.arr.length - 1 === i && this.arr[0].length - 1 === j) {
					shadow = shadow + `${this.size * j}px ${this.size * i}px 0 0 ${pixel}`;
				} else {
					shadow = shadow + `${this.size * j}px ${this.size * i}px 0 0 ${pixel}, `;
				}
			});
		});

		css.style.width = `${this.size}px`;
		css.style.height = `${this.size}px`;
		css.style.position = 'absolute';
		css.style.top = 0;
		css.style.left = 0;
		css.style.boxShadow = shadow;

		draw.appendChild(css);

		return draw;
	}

	drawningHTML(arr) {
		let draw = this.createElement();

		draw.style.width = `${this.arr[0].length * this.size}px`;
		draw.style.height = `${this.arr.length * this.size}px`;
		draw.style.position = 'relative';

		arr.forEach((row, i) => {
			let _row = this.createElement();

			_row.style.display = 'block';
			_row.style.width = `${this.arr[0].length * this.size}px`;
			_row.style.height = `${this.size}px`;
			_row.style.position = 'absolute';
			_row.style.left = 0;
			_row.style.top = `${this.size * i}px`;

			row.forEach((pixel, j) => {
				let _pixel = this.createElement();

				_pixel.style.display = 'block';
				_pixel.style.width = `${this.size}px`;
				_pixel.style.height = `${this.size}px`;
				_pixel.style.backgroundColor = pixel;
				_pixel.style.position = 'absolute';
				_pixel.style.left = `${this.size * j}px`;
				_pixel.style.top = 0;

				_row.appendChild(_pixel);
			});

			draw.appendChild(_row);
		});

		return draw;
	}

	createElement() {
		return document.createElement('div');
	}

	isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	isArray(a) {
		return Array.isArray(a);
	}

	newError(message) {
		throw new Error(message);
	}

	html() {
		return this.drawningHTML(this.arr);
	}

	css() {
		return this.drawningCSS(this.arr)
	}
}