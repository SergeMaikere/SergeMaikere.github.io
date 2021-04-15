import {Mother} from '../mother/mother.js';
import {PortfolioDetails} from '../portfolio_details/portfolio-details.js';
import * as Template from './portfolio.html';
import * as Css from './portfolio.css';

export class Portfolio extends Mother {

	constructor () {
		super();
		this.elId = 'portfolio';
		this.innerHtml = Template;
		this.css = Css;
	}


	filterPortfolioOnClick () {
		const portfolioFilters = [...this.innerHtml.querySelectorAll('#portfolio-flters li')]
		portfolioFilters.forEach(
			filter => {
				filter.addEventListener(
					'click',
					e => {
						let portfolioIsotope = new Isotope(
							document.querySelector('.portfolio-container'),
							{ itemSelector: '.portfolio-item', layoutMode: 'fitRows' }
						)
						
						portfolioFilters.forEach( filter => filter.classList.remove('filter-active') );
						e.target.classList.add('filter-active');

						portfolioIsotope.arrange( {filter: this.getAttribute('data-filter')} );

						portfolioIsotope.on( 'arrangeComplete', () => AOS.refresh() );

					}
				)			
			}
		)
	}
}