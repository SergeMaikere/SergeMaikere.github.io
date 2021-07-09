import * as Template from './mother.html';
import Section from './section.js';
import './mother.scss';
import Utils from '../../services/Utils.js';
import Language from '../../services/Language.js';


export default class Mother {
	constructor () {
		this.innerHtml = Template;
		this.events = [];
		this.sections = [];
	}

	get innerHtml () { 
		let el = document.createElement('div');
		el.innerHTML = `${this._innerHtml}`;
		this.injectSections(el);
		this.setEventsListeners(el);
		this.#setTextByLanguage(el)
		return el; 
	}

	set innerHtml (newValue) { this._innerHtml = newValue.default }

	setEventsListeners = el => {
		if (this.events.length == 0) return;
		this.events.forEach( event => event(el) );
	}

	#setTextByLanguage = el => {
		if (!Language.TEXTS.hasOwnProperty(Utils.lowerCaseFirstLetter(this.constructor.name))) return;
		Language.setTextByLanguage(el, Utils.lowerCaseFirstLetter(this.constructor.name));
	}

	injectSections = el => {
		if ( this.sections.length === 0 ) return;

		this.sections.forEach(
			section => section.container.charAt(0) === '#' ? this.#injectOne(el, section) : this.#injectMany(el, section)
		)
	}

	#injectMany = (el, section) => [...el.querySelectorAll(section.container)].forEach(
		miniContainer => this.#injectOne(el, new Section(miniContainer, section.component))
	)

	#injectOne = (el, section) => el.querySelector(section.container).appendChild(section.component.innerHtml);

}