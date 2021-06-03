import {Mother} from '../mother/mother.js';
import * as Template from './landingPage.html';
import * as Css from './landingPage.css';

export class LandingPage extends Mother {

	constructor () {
		super();
		this.elId = 'landingPage';
		this.innerHtml = Template;
		this.css = Css;
	}
}