import Pixeleasier from '../js/Pixeleasier';

const _ = 'transparent';
const GRAY_D = '#999999';
const GRAY = '#D3CAC1';
const GRAY_L = '#BBE3E7';
const RED_D = '#700B06';
const RED = '#B80819';
const RED_L = '#E53A32';
const BLACK_D = '#000201';
const BLACK = '#353230';
const SKIN_D = '#EF8F24';
const SKIN = '#F2A94C';

const arrRobotCop = [
	[_, _, _, _, _, _, _, GRAY_D, GRAY_D, GRAY, _, _, _, _, _, _, _,],
	[_, _, _, _, _, _, GRAY_D, GRAY_D, GRAY, GRAY, GRAY_L, _, _, _, _, _, _,],
	[_, _, _, _, _, GRAY_D, GRAY_D, GRAY, GRAY, GRAY, GRAY, GRAY_L, _, _, _, _, _,],
	[_, _, _, _, _, GRAY_D, GRAY_D, GRAY, GRAY, GRAY, GRAY, GRAY, _, _, _, _, _,],
	[_, _, _, _, _, GRAY_D, RED_D, RED, RED, RED_L, RED, GRAY, _, _, _, _, _,],
	[_, _, _, _, _, GRAY_D, GRAY_D, GRAY, GRAY, GRAY, GRAY, GRAY, _, _, _, _, _,],
	[_, _, _, _, _, BLACK_D, SKIN_D, SKIN_D, SKIN_D, SKIN_D, SKIN_D, BLACK_D, _, _, _, _, _,],
	[_, _, _, _, _, BLACK_D, SKIN, SKIN, SKIN, SKIN, SKIN, BLACK, _, _, _, _, _,],
	[_, _, _, _, _, _, BLACK_D, BLACK_D, BLACK, BLACK, BLACK, _, _, _, _, _, _,],
	[_, _, _, _, _, _, _, BLACK_D, BLACK_D, BLACK, _, _, _, _, _, _, _,],
	[_, _, GRAY, BLACK, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY_L, GRAY_L, BLACK, GRAY, _, _,],
	[_, GRAY, GRAY, BLACK, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY_L, BLACK, GRAY, GRAY_L, _,],
	[GRAY_D, GRAY, GRAY_D, BLACK_D, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY_L, BLACK, GRAY, GRAY, GRAY_L,],
	[GRAY_D, GRAY, _, _, GRAY_D, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY, GRAY_L, _, _, GRAY, GRAY_L,],
	[GRAY_D, GRAY, _, _, GRAY_D, GRAY_D, GRAY_D, GRAY_D, BLACK_D, GRAY_D, GRAY_D, GRAY_D, GRAY, _, _, GRAY, GRAY_L,],
	[GRAY_D, GRAY, _, _, GRAY_D, GRAY, GRAY, BLACK_D, BLACK_D, BLACK, GRAY_D, GRAY, GRAY_L, _, _, GRAY, GRAY_L,],
	[GRAY_D, GRAY, _, _, GRAY_D, GRAY, BLACK_D, BLACK_D, BLACK_D, BLACK, BLACK, GRAY, GRAY_L, _, _, GRAY, GRAY_L,],
	[GRAY_D, GRAY, _, _, GRAY_D, BLACK_D, BLACK_D, BLACK_D, BLACK_D, BLACK, BLACK, BLACK, GRAY_L, _, _, GRAY, GRAY_L,],
	[BLACK_D, BLACK, _, _, _, BLACK_D, BLACK_D, BLACK_D, BLACK_D, BLACK, BLACK, BLACK, _, _, _, BLACK_D, BLACK,],
	[BLACK_D, BLACK, _, _, _, BLACK_D, BLACK_D, BLACK_D, BLACK_D, BLACK, BLACK, BLACK, _, _, _, BLACK_D, BLACK,],
	[BLACK_D, BLACK, BLACK, _, _, BLACK_D, BLACK_D, BLACK_D, BLACK_D, BLACK, BLACK, BLACK, _, _, BLACK_D, BLACK_D, BLACK,],
	[BLACK_D, _, BLACK, _, GRAY, BLACK_D, BLACK_D, BLACK_D, BLACK_D, BLACK, BLACK, BLACK, GRAY_L, _, BLACK_D, _, BLACK,],
	[BLACK_D, BLACK, _, _, GRAY_D, GRAY, BLACK_D, BLACK_D, BLACK_D, BLACK, BLACK, GRAY, GRAY_L, _, _, BLACK_D, BLACK,],
	[_, _, _, _, GRAY_D, GRAY, GRAY, BLACK_D, BLACK_D, BLACK, GRAY, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, GRAY_D, GRAY, GRAY_L, _, _, _, _,],
	[_, _, _, _, BLACK, GRAY_D, GRAY_L, _, _, _, GRAY_D, GRAY, BLACK, _, _, _, _,],
	[_, _, _, GRAY, GRAY, GRAY, GRAY_D, _, _, _, GRAY_D, GRAY_D, GRAY, GRAY, _, _, _,],
	[_, _, GRAY, GRAY, GRAY, GRAY, GRAY, _, _, _, GRAY_D, GRAY, GRAY, GRAY, GRAY, _, _,],

]

const containerCss = document.querySelector('#robotCopCss');
const containerHtml = document.querySelector('#robotCopHtml');
const containerSvg = document.querySelector('#robotCopSvg');

const robotCop = new Pixeleasier(arrRobotCop, 5);
containerCss.appendChild(robotCop.css());
containerHtml.appendChild(robotCop.html());
containerSvg.appendChild(robotCop.svg());
