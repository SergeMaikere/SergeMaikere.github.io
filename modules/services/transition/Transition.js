import jsonpath from 'jsonpath';
import * as json from './transition.json';

export default class Transition {

	static getTransitions = transition => {
		const exitname = Transition.getJSON(transition, 'exitName');
		const exit = Transition.getJSON(exitname, 'css');
		const enter = Transition.getJSON(transition, 'css');
		return `${enter} ${exit}`;
	}

	static getJSON = (transition, path) => jsonpath.query( json.default, `$.${transition}.${path}` )[0];

	static isAlreadyStar = href => document.querySelector(href).classList.contains('star');

	static moveComponent = selector => {
		const page = document.querySelector(selector);
		const transition = page.getAttribute('transition');
		page.classList.toggle('star');
		page.classList.toggle( Transition.getJSON(transition, 'exitName') );
		page.classList.toggle(transition);
	}

	static addCssTransition = (el, transition) => {
		const absolute = `#${el.id} { position: absolute; right: 0; left: 0; }`;
		el.innerHTML += `<style>${absolute} ${Transition.getTransitions(transition)}</style>`;
		return el;
	}

}