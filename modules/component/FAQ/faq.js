import {Mother} from '../mother/mother.js';
import * as Template from './faq.html';
import faq from './faq.scss';

export class Faq extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;
	}
}