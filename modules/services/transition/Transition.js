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

	static removeOldStar = () => {
		const oldStar = document.querySelector('.star');
		const transEnter = oldStar.getAttribute('transition');
		oldStar.classList.toggle('star');
		oldStar.classList.toggle( Transition.getExitName(transEnter) );
		oldStar.classList.toggle( transEnter);
	}

	static introduceNewStar = href => {
		const newStar = document.querySelector(href);
		const transEnter = newStar.getAttribute('transtion');
		newStar.classList.toggle('star');
		newStar.classList.toggle( Transition.getExitName(transEnter) );
		newStar.classList.toggle(transEnter);
	}

	static getCssTransition = transition => {
		const transitionData = this.transitions.from[ transition ];
		return this.setTranslation(transitionData.enter, '120') + this.setTranslation(this.transitions.to[ transitionData.exitName ].enter, '120');
	}

	// Adjust de % of the translation
	static setTranslation = (str, value) => {
		return str.replace(/translateX\(100/g, `translateX(${value}`)
		.replace(/translateX\(\-100/g, `translateX(-${value}`);
	}
}