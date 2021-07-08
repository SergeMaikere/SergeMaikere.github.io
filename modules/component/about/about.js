import Mother from '../mother/mother.js';
import * as Template from './about.html';
import './about.scss';
export default class About extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;
	}
}