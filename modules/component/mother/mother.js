import * as Template from './mother.html';
import * as Css from './mother.css';


export class Mother {
	constructor () {

		this.elId = 'id';

		this.events = [];

		this.innerHtml = Template;

		this.css = Css;

	}

	get innerHtml () { return this._innerHtml + `<style>${this.css.default}</style>` }

	set innerHtml (newValue) { this._innerHtml = newValue.default }

	setEventsListeners () {
		if (this.events.length == 0) return;
		this.events.forEach( event => event() );
	}
}