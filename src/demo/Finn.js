import Pixeleasier from '../js/Pixeleasier';
import {createHTMLFrame} from '../js/utils';

createHTMLFrame('finn', 'Finn', '#75d64a');

const _ = 'transparent';
const A = '#0F3239';
const B = '#FFFFFF';
const C = '#71BE4E';
const D = '#F6DBD9';
const E = '#49C9F3';
const F = '#426AB0';

const arrFinn = [
	[_, _, A, A, _, _, _, _, _, _, A, A, _, _, ],
	[_, A, B, B, A, A, A, A, A, A, B, B, A, _, ],
	[_, A, B, B, B, B, B, B, B, B, B, B, A, _, ],
	[_, A, B, B, D, D, D, D, D, D, B, B, A, _, ],
	[_, A, B, D, D, D, D, D, D, D, D, B, A, _, ],
	[_, A, B, D, A, D, D, D, D, A, D, B, A, _, ],
	[_, A, B, D, D, D, A, A, D, D, D, B, A, _, ],
	[_, A, B, B, D, D, D, D, D, D, B, B, A, _, ],
	[A, C, C, B, B, B, B, B, B, B, B, C, C, A, ],
	[A, D, C, E, E, E, E, E, E, E, E, C, D, A, ],
	[A, D, C, E, E, E, E, E, E, E, E, C, D, A, ],
	[A, D, E, E, E, E, E, E, E, E, E, E, D, A, ],
	[_, A, E, E, E, E, E, E, E, E, E, E, A, _, ],
	[_, A, F, F, F, F, F, F, F, F, F, F, A, _, ],
	[_, A, F, F, F, A, A, A, A, F, F, F, A, _, ],
	[_, _, A, A, A, _, _, _, _, A, A, A, _, _, ]
]

const containerCss = document.querySelector('#finnCSS');
const containerHtml = document.querySelector('#finnHTML');
const containerSvg= document.querySelector('#finnSVG');

const finn = new Pixeleasier(arrFinn, 5);
containerCss.appendChild(finn.css());
containerHtml.appendChild(finn.html());
containerSvg.appendChild(finn.svg());
