import Mother from '../mother/mother.js';
import * as Template from './services.html';
import Section from '../mother/section.js';
import ServiceCard from '../mini-components/service-card/service-card.js';
import './services.scss';

export default class Services extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;

		this.sections = [ new Section('.service', new ServiceCard) ]
	}

	customizeSubComponent = (card, i) => {
		const datas = [
			'bxl-dribbble',
			'bx-file',
			'bx-tachometer',
			'bx-world'
		]
		card.querySelector('.icon i').classList.add(datas[i]);
		return card;
	}
}