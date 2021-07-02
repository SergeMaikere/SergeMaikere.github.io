import {Mother} from '../mother/mother.js';
import * as Template from './team.html';
import * as Css from './team.scss';

export class Team extends Mother {

	constructor () {
		super();
		this.elId = 'team';
		this.innerHtml = Template;
		this.css = Css;
	}
}