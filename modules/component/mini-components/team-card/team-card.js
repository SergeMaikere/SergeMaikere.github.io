import Mother from '../../mother/mother.js';
import * as Template from './team-card.html';

export default class TeamCard extends Mother {
	constructor () {
		super();
		this.innerHtml = Template;
	}
}