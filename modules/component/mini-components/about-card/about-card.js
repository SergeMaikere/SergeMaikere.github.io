import Mother from '../../mother/mother.js';
import * as Template from './about-card.html';

export default class AboutCard extends Mother {
	constructor () {
		super();
		this.innerHtml = Template;
	}
}