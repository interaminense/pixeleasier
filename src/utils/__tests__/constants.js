import {prefix, classes} from '../constants';

describe('prefix', () => {
	it('should return the prefix name "pixeleasier"', () => {
		expect(prefix).toEqual('pixeleasier');
		expect(prefix).toMatchSnapshot();
	});
});

describe('classes', () => {
	const {container, draw, row, pixel, css} = classes;

	it('should return the container classname', () => {
		expect(container).toEqual(`${prefix}-container`);
		expect(container).toMatchSnapshot();
	});

	it('should return the draw classname', () => {
		expect(draw).toEqual(`${prefix}-draw`);
		expect(draw).toMatchSnapshot();
	});

	it('should return the row classname', () => {
		expect(row).toEqual(`${prefix}-row`);
		expect(row).toMatchSnapshot();
	});

	it('should return the pixel classname', () => {
		expect(pixel).toEqual(`${prefix}-pixel`);
		expect(pixel).toMatchSnapshot();
	});

	it('should return the css classname', () => {
		expect(css).toEqual(`${prefix}-css`);
		expect(css).toMatchSnapshot();
	});
});