import * as Template from './mother.html';
import './mother.scss';
import Utils from '../../services/Utils.js';
import Language from '../../services/Language.js';


export class Mother {
	constructor () {
		this.innerHtml = Template;

		this.events = [];
	}

	get innerHtml () { 
		let el = document.createElement('div');
		el.innerHTML = `${this._innerHtml}`;
		this.setTextByLanguage(el)
		this.setEventsListeners(el);
		return el; 
	}

	set innerHtml (newValue) { this._innerHtml = newValue.default }

	setEventsListeners = el => {
		if (this.events.length == 0) return;
		this.events.forEach( event => event(el) );
	}

	setTextByLanguage = el => {
		if (!Language.TEXTS.hasOwnProperty(Utils.lowerCaseFirstLetter(this.constructor.name))) return;
		Language.setTextByLanguage(el, Utils.lowerCaseFirstLetter(this.constructor.name));
	}
}