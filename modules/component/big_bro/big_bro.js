import Mother from '../mother/mother.js';
import * as Template from './big_bro.html';

import Section from '../mother/section.js';
import About from '../about/about.js';
import Services from '../services/services.js';
import Portfolio from '../portfolio/portfolio.js';

export default class Big_bro extends Mother {

	constructor () {
		super();
		this.transition = 'rotateCubeTopIn';
		this.innerHtml = Template;

		this.sections = [
			new Section('#big_bro_main', new About),
			new Section('#big_bro_main', new Services),
			new Section('#big_bro_main', new Portfolio)
		]
	}
}