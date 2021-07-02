import {Mother} from '../mother/mother.js';
import * as Template from './about.html';
import * as Css from './about.scss';

export class About extends Mother {

	constructor () {
		super();
		this.elId = 'about';
		this.innerHtml = Template;
		this.css = Css;
	}
}