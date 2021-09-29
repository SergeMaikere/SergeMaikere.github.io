import Mother from '../mother/mother.js';
import * as Template from './landingPage.html';
import './landingPage.scss';
export default class LandingPage extends Mother {

	constructor () {
		super();
		this.transition = 'rotateCubeTopIn';
		this.innerHtml = Template;
	}
}