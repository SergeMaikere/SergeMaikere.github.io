import {Mother} from '../mother/mother.js';
import * as Template from './portfolio-details.html';
import * as Css from './portfolio-details.css';

export class PortfolioDetails extends Mother {

	constructor () {
		super();
		this.elId = 'portfolio-details';
		this.innerHtml = Template;
		this.css = Css;
	}
}