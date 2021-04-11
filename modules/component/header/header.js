import {Mother} from '../mother/mother.js';
import * as Template from './header.html';
import * as Css from './header.css';

export class Header extends Mother {

	constructor () {
		super();
		this.elId = 'header';
		this.innerHtml = Template;
		this.css = Css;
	}
}