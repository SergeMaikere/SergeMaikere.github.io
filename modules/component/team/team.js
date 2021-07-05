import {Mother} from '../mother/mother.js';
import * as Template from './team.html';
import './team.scss';
export class Team extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;
	}
}