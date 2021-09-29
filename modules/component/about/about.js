import Mother from '../mother/mother.js';
import * as Template from './about.html';
import Section from '../mother/section.js';
import AboutCard from '../mini-components/about-card/about-card.js';
import './about.scss';
export default class About extends Mother {

	constructor () {
		super();
		//this.transition = 'rotateCubeTopIn';
		this.innerHtml = Template;
		this.sections = [ new Section('.about-card', new AboutCard) ]
	}

	customizeSubComponent = (card, i) => {
		card.querySelector('i').classList.add(i === 0 ? 'bx-receipt' : 'bx-cube-alt');
		card.querySelector('h4').id = `value${1}Ab`;
		card.querySelector('p').id = `value${1}TextAb`;
		return card;
	}
}