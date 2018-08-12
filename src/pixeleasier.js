import { createElement } from './utils/dom';
import { classes } from './utils/constants';

class Pixeleasier {
	constructor(arr = [], size = '10', measure = 'px') {
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

	render() {
		const container = this.createContainer();
		const draw = this.createDrawing();

		container.appendChild(draw);

		return container;
	}
}

export default Pixeleasier;