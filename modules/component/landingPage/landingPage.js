import {Mother} from '../mother/mother.js';
import * as Template from './landingPage.html';
import './landingPage.scss';
export class LandingPage extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;
	}
}