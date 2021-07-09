import Mother from '../mother/mother.js';
import * as Template from './about.html';
import Section from '../mother/section.js';
import AboutCard from '../mini-components/about-card/about-card.js';
import './about.scss';
export default class About extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;
		this.sections = [ new Section('.about-card', new AboutCard) ]
	}
}