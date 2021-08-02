import * as Template from './mother.html';
import Section from './section.js';
import './mother.scss';

import Utils from '../../services/Utils.js';
import Language from '../../services/Language.js';
import Transition from '../../services/transition/Transition.js';


export default class Mother {
	constructor () {
		this.id = Utils.lowerCaseFirstLetter(this.constructor.name);
		this.transition;
		this.innerHtml = Template;
		this.events = [];
		this.sections = [];
	}

	get innerHtml () { 
		let el = this.#setElement();
		this.injectSections(el);
		this.setEventsListeners(el);
		this.#setTextByLanguage(el);
		this.#setTransitionData(el);
		return el; 
	}

	set innerHtml (newValue) { this._innerHtml = newValue.default }

	setEventsListeners = el => {
		if (this.events.length == 0) return;
		this.events.forEach( event => event(el) );
	}

	#setElement = () => {
		let el = document.createElement('div');
		el.id = this.id;
		el.innerHTML = `${this._innerHtml}`;
		return el;
	}

	#setTextByLanguage = el => {
		if (!Language.TEXTS.hasOwnProperty(this.id)) return;
		Language.setTextByLanguage(el, this.id);
	}

	injectSections = el => {
		if ( this.sections.length === 0 ) return;

		this.sections.forEach(
			section => section.container.charAt(0) === '#' ? this.#injectOne(el, section) : this.#injectMany(el, section)
		)
	}

	#injectOne = (el, section) => el.querySelector(section.container).appendChild(section.component.innerHtml);
	
	#injectMany = (el, section) => [...el.querySelectorAll(section.container)].forEach(
		(miniContainer, i) => miniContainer.appendChild(this.customizeSubComponent(section.component.innerHtml, i))
	)

	customizeSubComponent = (html, i) => html;

	#setTransitionData = el => {
		if (!this.transition) return;

		this.#setTransition(el);
		this.#setClasses(el);
		this.#setTransitionCss(el);	
	}

	#setTransition = el => el.setAttribute('transition', this.transition);

	#setClasses = el => this.id == 'landingPage' ? this.#setLandingClasses(el) : this.#setNotLandingClass(el);

	#setLandingClasses = el => Utils.addClasses(el, ['star', this.transition]);

	#setNotLandingClass = el => el.classList.add( Transition.getExitName(this.transition) );

	#setTransitionCss = el => Transition.getCssTransition(el, this.transition);
}


