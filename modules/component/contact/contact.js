import {Mother} from '../mother/mother.js';
import * as Template from './contact.html';
import * as Css from './contact.css';

export class Contact extends Mother {

	constructor () {
		super();
		this.elId = 'contact';
		this.innerHtml = Template;
		this.css = Css;
	}
}