import {Mother} from '../mother/mother.js';
import * as Template from './services.html';
import * as Css from './services.css';

export class Services extends Mother {

	constructor () {
		super();
		this.elId = 'services';
		this.innerHtml = Template;
		this.css = Css;
	}
}