import Mother from '../mother/mother.js';
import {PortfolioDetails} from '../portfolio_details/portfolio-details.js';
import * as Template from './portfolio.html';
import Isotope from 'isotope-layout';
import AOS from 'aos';
import './portfolio.scss';

export default class Portfolio extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;

		this.events = [ this.filterPortfolioOnClick ]
	}


	filterPortfolioOnClick = el => {
		window.addEventListener(
			'load',
			() => {
				const portfolioFilters = [...el.querySelectorAll('#portfolio-flters li')]
				let portfolioIsotope = new Isotope(
					el.querySelector('.portfolio-container'),
					{ itemSelector: '.portfolio-item', layoutMode: 'fitRows' }
				)
				portfolioFilters.slice().forEach(
					filter => {
						filter.addEventListener(
							'click',
							e => {
								
								portfolioFilters.forEach( filter => filter.classList.remove('filter-active') );
								e.target.classList.add('filter-active');

								portfolioIsotope.arrange( {filter: e.target.getAttribute('data-filter')} );

								portfolioIsotope.on( 'arrangeComplete', () => AOS.refresh() );

							}
						)			
					}
				)
			}
		)
	}
}