import Mother from '../mother/mother.js';
import * as Template from './contact.html';
import './contact.scss';

export default class Contact extends Mother {

	constructor () {
		super();
		this.transition = 'rotateCubeTopIn';
		this.innerHtml = Template;
	}
}