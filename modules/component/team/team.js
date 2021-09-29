import Mother from '../mother/mother.js';
import * as Template from './team.html';
import './team.scss';
export default class Team extends Mother {

	constructor () {
		super();
		this.transition = 'rotateCubeTopIn';
		this.innerHtml = Template;
	}
}