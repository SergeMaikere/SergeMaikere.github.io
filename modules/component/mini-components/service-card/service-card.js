import Mother from '../../mother/mother.js';
import * as Template from './service-card.html';

export default class ServiceCard extends Mother{
	constructor () {
		super();
		this.innerHtml = Template;
	}
}