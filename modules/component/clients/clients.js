import {Mother} from '../mother/mother.js';
import * as Template from './clients.html';
import * as Css from './clients.scss';

export class Clients extends Mother {

	constructor () {
		super();
		this.elId = 'clients';
		this.innerHtml = Template;
		this.css = Css;
	}
}