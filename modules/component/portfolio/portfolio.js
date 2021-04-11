import {Mother} from '../mother/mother.js';
import {PortfolioDetails} from '../portfolio_details/portfolio-details.js';
import * as Template from './portfolio.html';
import * as Css from './portfolio.css';

export class Portfolio extends Mother {

	constructor () {
		super();
		this.elId = 'portfolio';
		this.innerHtml = Template;
		this.css = Css;
	}
}