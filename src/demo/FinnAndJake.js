import Pixeleasier from '../js/Pixeleasier';
import {createHTMLFrame} from '../js/utils';

const id = 'finnandjake';

createHTMLFrame(id, 'Finn & Jake', '#E91E63');

const _ = 'transparent';
const A = '#FFFFFF';
const B = '#FECB9C';
const C = '#000000';
const D = '#149718';
const E = '#1FCA23';
const F = '#189AC9';
const G = '#FECB2F';
const H = '#CA9922';

const arrFinnAndJake = [
	[_, _, A, _, _, _, _, A, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
	[_, _, A, A, A, A, A, A, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
	[_, _, A, B, B, B, B, A, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
	[_, _, A, C, B, B, C, A, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
	[_, _, A, B, B, B, B, A, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
	[_, D, A, A, A, A, A, A, D, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
	[_, E, F, F, F, F, F, F, E, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
	[F, E, F, F, F, F, F, F, E, F, _, _, _, _, _, _, G, G, G, G, G, _, _, _, _],
	[F, D, F, F, F, F, F, F, D, F, _, _, _, _, _, G, G, G, G, G, G, G, _, _, _],
	[B, D, F, F, F, F, F, F, D, B, _, _, _, _, _, G, C, A, G, C, A, G, _, _, _],
	[B, D, F, F, F, F, F, F, D, B, _, _, _, _, _, G, C, C, G, C, C, G, _, _, _],
	[B, _, F, F, F, F, F, F, _, B, _, _, _, _, G, G, G, H, C, H, G, G, G, _, _],
	[B, _, F, F, F, F, F, F, _, B, _, _, _, G, _, G, G, H, G, H, G, G, _, G, _],
	[_, _, F, F, F, F, F, F, _, _, _, _, _, G, _, G, G, G, G, G, G, G, _, G, _],
	[_, _, D, D, D, D, D, D, _, _, _, _, _, G, _, G, G, G, G, G, G, G, _, G, _],
	[_, _, _, D, D, D, D, _, _, _, _, _, _, _, _, G, G, G, G, G, G, G, _, _, _],
	[_, _, _, D, _, _, D, _, _, _, _, _, _, _, _, G, G, G, G, G, G, G, _, _, _],
	[_, _, _, D, _, _, D, _, _, _, _, _, _, _, _, G, G, G, G, G, G, G, _, _, _],
	[_, _, _, B, _, _, B, _, _, _, _, _, _, _, G, _, G, G, G, G, G, _, _, _, _],
	[_, _, _, B, _, _, B, _, _, _, _, _, _, _, _, _, G, _, _, _, G, _, _, _, _],
	[_, _, _, B, _, _, B, _, _, _, _, _, _, _, _, _, G, _, _, _, G, _, _, _, _],
	[_, _, _, B, _, _, B, _, _, _, _, _, _, _, _, _, G, _, _, _, G, _, _, _, _],
	[_, _, _, B, _, _, B, _, _, _, _, _, _, _, _, _, G, _, _, _, G, _, _, _, _],
	[_, _, C, C, _, _, C, C, _, _, _, _, _, _, _, _, G, _, _, _, G, _, _, _, _],
];

const containerCss = document.querySelector(`#${id}CSS`);
const containerHtml = document.querySelector(`#${id}HTML`);
const containerSvg = document.querySelector(`#${id}SVG`);

const finnAndJake = new Pixeleasier(arrFinnAndJake, 5);
containerCss.appendChild(finnAndJake.css());
containerHtml.appendChild(finnAndJake.html());
containerSvg.appendChild(finnAndJake.svg());
