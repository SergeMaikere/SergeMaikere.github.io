import Mother from '../mother/mother.js';
import * as Template from './services.html';
import './services.scss';

export default class Services extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;
	}
}