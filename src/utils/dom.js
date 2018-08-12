export const createElement = (tagName = 'div', classes) => {
	const element = getElementByType(tagName);

	if (Array.isArray(classes)) {
		element.classList.add(...classes);
	} else {
		element.classList.add(classes);
	}

	return element;
};

export const getElementByType = tagName => {
	if (tagName === 'svg' || tagName === 'rect') {
		const URL_W3_SVG = 'http://www.w3.org/2000/svg';

		return document.createElementNS(URL_W3_SVG, tagName);
	}
	return document.createElement(tagName);
};


export const setStyle = (element, styles) => {
	const {style} = element;

	for (const property in styles) {
		const value = styles[property];

		style[property] = value;
	}

	return element;
};

export const setAttr = (element, attributes) => {
	for (const property in attributes) {
		const value = attributes[property];

		element.setAttribute(property, value);
	}

	return element;
};