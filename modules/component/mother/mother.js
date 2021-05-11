import * as Template from './mother.html';
import * as Css from './mother.css';
import Language from '../../services/Language.js';


export class Mother {
	constructor () {

		this.elId = 'id';

		this.events = [];

		this.innerHtml = Template;

		this.css = Css;

		this.events = [];

	}

	get css () { return `<style>${this._css}</style>` }

	set css (newValue) { this._css = newValue.default }

	get innerHtml () { 
		let el = document.createElement('div');
		el.innerHTML = `${this._innerHtml} ${this.css}`;
		this.setTextByLanguage(el)
		this.setEventsListeners(el);
		return el; 
	}

	set innerHtml (newValue) { this._innerHtml = newValue.default }

	setEventsListeners (el) {
		if (this.events.length == 0) return;
		this.events.forEach( event => event(el) );
	}

	setTextByLanguage (el) {
		if (!Language.TEXTS.hasOwnProperty(this.constructor.name.toLowerCase())) return;
		Language.setTextByLanguage(el);
	}

}