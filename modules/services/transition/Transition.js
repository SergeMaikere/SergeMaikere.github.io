import jsonpath from 'jsonpath';
import * as json from './transition.json';

export default class Transition {

	static getTransitions = transition => {
		const exitname = Transition.getExitName(transition);
		const exit = Transition.getEnterTransition(exitname);
		const enter = Transition.getEnterTransition(transition);
		return `${enter} ${exit}`;
	}

	static getEnterTransition = transition => jsonpath.query( json.default, `$.${transition}.enter` )[0];

	static getExitName = transition => jsonpath.query( json.default, `$.${transition}.exitName` )[0];

	static isAlreadyStar = href => document.querySelector(href).classList.contains('star');

	static moveComponent = selector => {
		const oldStar = document.querySelector(selector);
		const transEnter = oldStar.getAttribute('transition');
		oldStar.classList.toggle('star');
		oldStar.classList.toggle( Transition.getExitName(transEnter) );
		oldStar.classList.toggle(transEnter);
	}

	static getCssTransition = (el, transition) => {
		const absolute = `#${el.id} { position: absolute; right: 0; left: 0; }`;
		el.innerHTML += `<style>${absolute} ${Transition.getTransitions(transition)}</style>`;
		return el;
	}
}