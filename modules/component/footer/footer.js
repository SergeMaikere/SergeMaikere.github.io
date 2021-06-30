import {Mother} from '../mother/mother.js';
import * as Template from './footer.html';
import * as Css from './footer.scss';

export class Footer extends Mother {

	constructor () {
		super();
		this.elId = 'footer';
		this.innerHtml = Template;
		this.css = Css;
	}
}