import Mother from '../mother/mother.js';
import * as Template from './clients.html';
import './clients.scss';

export default class Clients extends Mother {

	constructor () {
		super();
		this.transition = 'moveFromLeft';
		this.innerHtml = Template;
	}
}