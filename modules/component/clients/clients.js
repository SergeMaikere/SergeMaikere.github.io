import {Mother} from '../mother/mother.js';
import * as Template from './clients.html';
import './clients.scss';

export class Clients extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;
	}
}