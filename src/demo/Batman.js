import Pixeleasier from '../js/Pixeleasier';
import {createHTMLFrame} from '../js/utils';

createHTMLFrame('batman', 'Batman', '#485779');

const _ = 'transparent';
const A = '#142132';
const B = '#36445e';
const C = '#ac978b';
const D = '#bfad8c';
const E = '#bfad8c';
const F = '#75726a';
const G = '#a7a398';
const H = '#9c7a16';
const I = '#c19e30';
const J = '#253047';

const arrBatman = [
	[_, _, _, _, _, A, _, _, _, _, _, A, _, _, _, _, _],
	[_, _, _, _, _, A, _, _, _, _, _, A, _, _, _, _, _],
	[_, _, _, _, _, A, A, B, B, B, A, A, _, _, _, _, _],
	[_, _, _, _, _, A, A, B, B, B, A, A, _, _, _, _, _],
	[_, _, _, _, _, A, A, B, B, B, A, A, _, _, _, _, _],
	[_, _, _, _, _, A, A, A, B, A, A, A, _, _, _, _, _],
	[_, _, _, _, _, A, A, B, B, B, A, A, _, _, _, _, _],
	[_, _, _, _, _, A, C, C, B, C, C, A, _, _, _, _, _],
	[_, _, _, _, _, A, D, D, C, D, D, A, _, _, _, _, _],
	[_, _, _, B, B, A, D, D, D, D, D, A, B, B, _, _, _],
	[_, _, B, A, A, A, A, D, D, D, A, A, A, A, B, _, _],
	[_, B, A, A, F, F, A, A, A, A, A, F, F, A, A, B, _],
	[B, B, A, F, G, G, G, A, A, A, G, G, G, F, A, B, B],
	[B, A, F, G, G, G, G, F, F, F, G, G, G, G, F, A, B],
	[B, A, G, G, G, G, G, A, G, A, G, G, G, G, G, A, B],
	[B, A, G, G, F, G, A, A, A, A, A, G, F, G, G, A, B],
	[B, A, G, F, A, F, G, G, A, G, G, F, A, F, G, A, B],
	[B, A, G, F, A, F, G, G, G, G, G, F, A, F, G, A, B],
	[B, A, G, F, A, F, G, G, G, G, G, F, A, F, G, A, B],
	[B, A, B, J, A, H, I, H, H, H, I, H, A, J, B, A, B],
	[B, A, B, J, A, H, I, H, H, H, I, H, A, J, B, A, B],
	[B, A, B, J, A, J, J, J, J, J, J, J, A, J, B, A, B],
	[B, A, B, J, A, J, J, J, J, J, J, J, A, J, B, A, B],
	[B, A, B, J, A, G, G, J, J, J, G, G, A, J, B, A, B],
	[B, A, B, J, A, G, G, F, A, F, G, G, A, J, B, A, B],
	[B, A, A, A, A, G, G, F, A, F, G, G, A, A, A, A, B],
	[B, A, A, A, A, G, G, F, A, F, G, G, A, A, A, A, B],
	[B, A, A, A, A, A, G, F, A, F, G, A, A, A, A, A, B],
	[B, A, A, A, A, A, B, F, A, F, B, A, A, A, A, A, B],
	[B, A, _, A, A, A, B, F, A, F, B, A, A, A, _, A, B],
	[B, _, _, _, B, _, B, F, A, F, B, _, B, _, _, _, B],
	[_, _, _, _, _, _, B, F, _, F, B, _, _, _, _, _, _],
	[_, _, _, _, B, B, B, F, _, F, B, B, B, _, _, _, _],
	[_, _, _, A, A, A, A, A, _, A, A, A, A, A, _, _, _]
]

const containerCss = document.querySelector('#batmanCSS');
const containerHtml = document.querySelector('#batmanHTML');
const containerSvg = document.querySelector('#batmanSVG');

const batman = new Pixeleasier(arrBatman, 5);
containerCss.appendChild(batman.css());
containerHtml.appendChild(batman.html());
containerSvg.appendChild(batman.svg());
