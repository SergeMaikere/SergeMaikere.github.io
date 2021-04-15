import {Mother} from '../mother/mother.js';
import * as Template from './faq.html';
import * as Css from './faq.css';

export class Faq extends Mother {

	constructor () {
		super();
		this.elId = 'faq';
		this.innerHtml = Template;
		this.css = Css;
	}
}