import {Mother} from '../mother/mother.js';
import * as Template from './footer.html';
import './footer.scss';

export class Footer extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;
	}
}