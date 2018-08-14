import {
	createElement,
	getElementByType,
	setStyle,
	setAttr
} from '../dom';

describe('createElement', () => {
	it('should return a div element created without any parameter', () => {
		const element = createElement();

		expect(element).toMatchSnapshot();
	});

	it('should return a div element created', () => {
		const element = createElement('div');

		expect(element).toMatchSnapshot();
	});

	it('should return a div element created with a classname', () => {
		const element = createElement('div', 'my-classname');

		expect(element).toMatchSnapshot();
	});

	it('should return a div element created with two classnames', () => {
		const element = createElement('div', ['my-classname', 'my-classname-2']);

		expect(element).toMatchSnapshot();
	});
});

describe('getElementByType', () => {
	it('should return a element type span', () => {
		const span = getElementByType('span');

		expect(span).toMatchSnapshot();
	});

	it('should return a element type h1', () => {
		const h1 = getElementByType('h1');

		expect(h1).toMatchSnapshot();
	});

	it('should return a element type svg', () => {
		const svg = getElementByType('svg');

		expect(svg).toMatchSnapshot();
	});

	it('should return a element type rect', () => {
		const rect = getElementByType('rect');

		expect(rect).toMatchSnapshot();
	});
});

describe('setStyle', () => {
	it('should return a div element with background-color red style', () => {
		const element = createElement('div');

		expect(setStyle(element, {backgroundColor: 'red'})).toMatchSnapshot();
	});

	it('should return a div element with more than one style', () => {
		const element = createElement('div');
		const styles = setStyle(element, {
			backgroundColor: 'red',
			color: 'green',
			fontSize: '14px',
			height: '100px',
			width: '100px',
		});

		expect(styles).toMatchSnapshot();
	});
});

describe('setAttr', () => {
	it('should return a div element with a title attribute', () => {
		const element = createElement('div');

		expect(setAttr(element, {title: 'my title'})).toMatchSnapshot();
	});

	it('should return a div element with more than one attribute', () => {
		const element = createElement('svg');
		const attrs = setAttr(element, {
			style: 'fill:red',
			width: '100px',
			height: '100px',
			x: '10px',
			y: '10px'
		});

		expect(attrs).toMatchSnapshot();
	});
});