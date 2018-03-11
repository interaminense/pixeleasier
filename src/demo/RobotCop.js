import Pixeleasier from '../js/Pixeleasier';
import {createHTMLFrame} from '../js/utils';

const id = 'robotCop';

createHTMLFrame(id, 'Robot Cop', '#84776c');

const _ = 'transparent';
const A = '#999999';
const B = '#D3CAC1';
const C = '#BBE3E7';
const D = '#700B06';
const E = '#B80819';
const F = '#E53A32';
const G = '#000201';
const H = '#353230';
const I = '#EF8F24';
const J = '#F2A94C';

const arrRobotCop = [
	[_, _, _, _, _, _, _, A, A, B, _, _, _, _, _, _, _,],
	[_, _, _, _, _, _, A, A, B, B, C, _, _, _, _, _, _,],
	[_, _, _, _, _, A, A, B, B, B, B, C, _, _, _, _, _,],
	[_, _, _, _, _, A, A, B, B, B, B, B, _, _, _, _, _,],
	[_, _, _, _, _, A, D, E, E, F, E, B, _, _, _, _, _,],
	[_, _, _, _, _, A, A, B, B, B, B, B, _, _, _, _, _,],
	[_, _, _, _, _, G, I, I, I, I, I, G, _, _, _, _, _,],
	[_, _, _, _, _, G, J, J, J, J, J, H, _, _, _, _, _,],
	[_, _, _, _, _, _, G, G, H, H, H, _, _, _, _, _, _,],
	[_, _, _, _, _, _, _, G, G, H, _, _, _, _, _, _, _,],
	[_, _, B, H, B, B, B, B, B, B, B, C, C, H, B, _, _,],
	[_, B, B, H, B, B, B, B, B, B, B, B, C, H, B, C, _,],
	[A, B, A, G, B, B, B, B, B, B, B, B, C, H, B, B, C,],
	[A, B, _, _, A, B, B, B, B, B, B, B, C, _, _, B, C,],
	[A, B, _, _, A, A, A, A, G, A, A, A, B, _, _, B, C,],
	[A, B, _, _, A, B, B, G, G, H, A, B, C, _, _, B, C,],
	[A, B, _, _, A, B, G, G, G, H, H, B, C, _, _, B, C,],
	[A, B, _, _, A, G, G, G, G, H, H, H, C, _, _, B, C,],
	[G, H, _, _, _, G, G, G, G, H, H, H, _, _, _, G, H,],
	[G, H, _, _, _, G, G, G, G, H, H, H, _, _, _, G, H,],
	[G, H, H, _, _, G, G, G, G, H, H, H, _, _, G, G, H,],
	[G, _, H, _, B, G, G, G, G, H, H, H, C, _, G, _, H,],
	[G, H, _, _, A, B, G, G, G, H, H, B, C, _, _, G, H,],
	[_, _, _, _, A, B, B, G, G, H, B, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, B, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, A, B, C, _, _, _, A, B, C, _, _, _, _,],
	[_, _, _, _, H, A, C, _, _, _, A, B, H, _, _, _, _,],
	[_, _, _, B, B, B, A, _, _, _, A, A, B, B, _, _, _,],
	[_, _, B, B, B, B, B, _, _, _, A, B, B, B, B, _, _,],
]

const containerCss = document.querySelector(`#${id}CSS`);
const containerHtml = document.querySelector(`#${id}HTML`);
const containerSvg = document.querySelector(`#${id}SVG`);

const robotCop = new Pixeleasier(arrRobotCop, 5);
containerCss.appendChild(robotCop.css());
containerHtml.appendChild(robotCop.html());
containerSvg.appendChild(robotCop.svg());
