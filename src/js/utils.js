/**
 * Return true if the parameter is a number
 * @param {number} n
 */
const isNumeric = (n) => {
	return !Number.isNaN(parseFloat(n)) && Number.isFinite(n);
}

/**
 * Return true if the parameter is a array
 * @param {array} a
 */
const isArray = (a) => {
	return Array.isArray(a);
}

/**
 * Return a new Error
 * @param {string} message
 */
const newError = (message) => {
	throw new Error(message);
}

/**
 * Create a new Element
 * @param {string} e
 */
const createElement = (e = 'div') => {
	if (e === 'svg' || e === 'rect') {
		const URL_W3_SVG = 'http://www.w3.org/2000/svg';

		return document.createElementNS(URL_W3_SVG, e);
	}
	return document.createElement(e);
}

/**
 * Set the style on html element
 * @param {html} element
 * @param {object} styles
 */
const setStyle = (element, styles) => {
	const elementStyle = element.style;

	for (const property in styles) {
		const value = styles[property];
		elementStyle[property] = value;
	}

	return element;
}

/**
 * Set attribute on html element
 * @param {html} element
 * @param {object} attributes
 */
const setAttr = (element, attributes) => {
	for (const property in attributes) {
		const value = attributes[property];

		element.setAttribute(property, value);
	}

	return element;
}

export {
	isNumeric,
	isArray,
	newError,
	createElement,
	setStyle,
	setAttr
};
