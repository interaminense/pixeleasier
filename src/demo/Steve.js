import Pixeleasier from '../js/Pixeleasier';

const _ = 'transparent';
const H = '#564D40';
const S1 = '#D9B78A';
const S2 = '#CB9E68';
const Y = '#000000';
const B = '#7A7063';
const T = '#272726';
const P = '#3B5E78';
const P2 = '#2B4456';
const _s = 'rgba(0, 0, 0, .2)';

const arrSteve = [
	[_, _, _, _, _, _, _, _, H, B, B, H, B, _, _, _, _],
	[_, _, _, _, _, _, _, H, H, S2, S1, S1, S1, _, _, _, _],
	[_, _, _, _, _, _, _, H, H, S2, S1, S1, S1, _, _, _, _],
	[_, _, _, _, _, _, _, H, S2, S2, S1, S1, S1, _, _, _, _],
	[_, _, _, _, _, _, _, H, S2, Y, S1, S1, S1, Y, _, _, _],
	[_, _, _, _, _, _, _, H, Y, S2, Y, S1, Y, _, Y, _, _],
	[_, _, _, _, _, _, S2, B, S2, Y, S1, S1, S1, Y, _, _, _],
	[_, _, _, _, _, _, S2, S2, H, S1, S1, S2, S1, _, _, _, _],
	[_, _, _, _, _, _, _, S2, H, S1, B, B, B, _, _, _, _],
	[_, _, _, _, _, _, _, S2, H, H, S1, S1, S1, _, _, _, _],
	[_, _, _, _, _, _, _, S2, H, H, B, B, B, _, _, _, _],
	[_, _, _, _, _, _, _, Y, Y, Y, _, _, _, _, _, _, _],
	[_, _, _, _, _, _, _, Y, T, T, _, _, _, _, _, _, _],
	[_, _, _, Y, Y, Y, Y, T, T, T, T, T, T, _, _, _, _],
	[_, _, _, Y, T, T, T, T, T, T, T, T, T, _, _, _, _],
	[_, _, _, Y, T, T, T, T, T, T, T, T, T, _, _, _, _],
	[_, _, Y, T, T, T, T, T, T, T, T, T, T, _, _, _, _],
	[_, _, Y, T, T, T, T, T, T, T, T, T, T, _, _, _, _],
	[_, _, Y, T, Y, T, T, T, T, T, T, T, T, _, _, _, _],
	[_, Y, T, T, _, Y, T, T, T, T, T, T, T, _, _, _, _],
	[_, Y, T, T, _, Y, T, T, T, T, T, T, T, _, _, _, _],
	[_, Y, T, T, _, Y, T, T, T, T, T, T, T, _, _, _, _],
	[_, Y, T, T, _, Y, T, T, T, T, T, T, T, _, _, _, _],
	[_, Y, T, _, _, Y, Y, T, T, T, T, T, T, Y, _, _, _],
	[_, Y, Y, _, _, Y, Y, T, T, T, T, T, T, Y, _, _, _],
	[Y, T, T, _, _, Y, Y, T, T, T, T, T, T, Y, T, _, _],
	[_, Y, Y, _, _, Y, Y, Y, T, T, T, T, T, Y, _, _, _],
	[Y, T, T, _, _, Y, T, T, Y, Y, T, T, T, Y, T, _, _],
	[Y, Y, Y, _, _, Y, Y, T, T, T, T, T, T, Y, T, _, _],
	[_, S2, S2, _, _, P2, P2, Y, Y, Y, Y, Y, P2, S2, _, _, _],
	[_, S2, S1, _, _, P2, P2, P2, P2, P2, P2, P2, P, S1, _, _, _],
	[_, S2, S1, _, _, P2, P2, P, P, P, P, P, P, S1, _, _, _],
	[_, S2, S1, _, _, P2, P2, P, P, P, P, P, P, S1, _, _, _],
	[_, S2, S1, _, _, P2, P2, P, P, P, P, P, P, S1, _, _, _],
	[_, _, S1, _, _, P2, P2, P, P, P, P, P, P, S1, _, _, _],
	[_, _, S1, _, _, P2, P2, P, P, P, P, P, P, S1, _, _, _],
	[_, _, S1, _, _, P2, P2, P, P, _, P2, P2, P, S1, _, _, _],
	[_, _, S1, _, _, P2, P2, P, P, _, P2, P2, P, S1, _, _, _],
	[_, _, S1, _, _, P2, P2, P, P, _, P2, P2, P, S1, _, _, _],
	[_, _, S1, S1, S1, P2, P2, P, P, _, P2, P2, P, S1, _, _, _],
	[_, _, S1, S1, _, S1, P2, P, _, _, P2, P2, P, S1, _, _, _],
	[_, _, S2, S1, _, P2, P2, P, _, _, P2, P2, P, S1, _, _, _],
	[_, _, _, S2, _, P2, P2, P, _, _, P2, P2, P, _, _, _, _],
	[_, _, _, _, S1, P2, P2, P, _, _, P2, P2, P, _, _, _, _],
	[_, _, _, _, _, P2, P2, P, _, _, P2, P2, P, _, _, _, _],
	[_, _, _, _, _, P2, P2, P, _, _, P2, P2, P, _, _, _, _],
	[_, _, _, _, _, P2, P2, P, _, _, P2, P, P, _, _, _, _],
	[_, _, _, _, _, P2, P, P, _, _, P2, P, P, _, _, _, _],
	[_, _, _, _, _, P2, P2, _, _, _, P2, P2, _, _, _, _, _],
	[_, _, _, _, _, P2, P2, _, _, _, P2, P2, _, _, _, _, _],
	[_, _, _, _, _, P2, P2, _, _, _, P2, P2, _, _, _, _, _],
	[_, _, _, _, _, P2, P, _, _, _, P2, P, _, _, _, _, _],
	[_, _, _, _, _, P2, P, _, _, _, P2, P, _, _, _, _, _],
	[_, _, _, _, _, P2, P, _, _, _, P2, P, _, _, _, _, _],
	[_, _, _, _, _, P2, P, _, _, _, P2, P, _, _, _, _, _],
	[_, _, _, _, _, P2, P, _, _, _, P2, P, _, _, _, _, _],
	[_, _, _, _, _, P2, P, _, _, _, P2, P, _, _, _, _, _],
	[_, _, _, _s, _s, T, T, _s, _s, _s, T, T, T, _s, _s, _, _],
	[_, _s, _s, _s, _s, Y, Y, Y, _s, _s, Y, Y, Y, Y, _s, _s, _s],
	[_, _, _, _s, _s, _s, _s, _s, _s, _s, _s, _s, _s, _s, _s, _, _]
];

const containerCss = document.querySelector('#steveCss');
const containerHtml = document.querySelector('#steveHtml');
const containerSvg = document.querySelector('#steveSvg');

const steve = new Pixeleasier(arrSteve, 5);
containerCss.appendChild(steve.css());
containerHtml.appendChild(steve.html());
containerSvg.appendChild(steve.svg());
