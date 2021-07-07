import './css/style.scss';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {LandingPage} from './modules/component/landingPage/landingPage.js';
import {Header} from './modules/component/header/header.js';
import {About} from './modules/component/about/about.js';
import {Services} from './modules/component/services/services.js';
import {Portfolio} from './modules/component/portfolio/portfolio.js';
import {Faq} from './modules/component/FAQ/faq.js';
import {Team} from './modules/component/team/team.js';
import {Clients} from './modules/component/clients/clients.js';
import {Contact} from './modules/component/contact/contact.js';
import {Footer} from './modules/component/footer/footer.js';


class App {

	constructor () {

		this.events = [
			this.#injectSections.bind(this),
			this.#initAOS.bind(this),
			this.#initPortfolioGlightbox.bind(this),
			this.#initClientSwiper.bind(this)
		]

		this.sections = [
			{ container: '#landing', ctrl: new Header()},
			{ container: '#landing', ctrl: new LandingPage()},
			{ container: '#main', ctrl: new About()},
			{ container: '#main', ctrl: new Services()},
			{ container: '#main', ctrl: new Portfolio()},
			{ container: '#main', ctrl: new Faq()},
			{ container: '#main', ctrl: new Team()},
			{ container: '#main', ctrl: new Clients()},
			{ container: '#main', ctrl: new Contact()},
			{ container: '#main', ctrl: new Footer()}
		]
	}

	init () {
		if (this.events.length == 0) return;
		this.events.forEach( event => event() );
	}

	#injectSections () {
		this.sections.forEach( 
			section => document.querySelector(section.container).appendChild(section.ctrl.innerHtml) 
		)
	}

	#initAOS () { AOS.init() }

	#initPortfolioGlightbox () { const portfolioLightbox = GLightbox( {selector: '.portfolio-lightbox'} ) }

	#initClientSwiper () {
		return  new Swiper(
			'.clients-slider', {
			    speed: 400,
			    loop: true,
			    autoplay: {
			      	delay: 5000,
			      	disableOnInteraction: false
			    },
			    slidesPerView: 'auto',
			    pagination: {
			      	el: '.swiper-pagination',
			      	type: 'bullets',
			      	clickable: true
			    },
			    breakpoints: {
			      	320: {
			        	slidesPerView: 2,
			        	spaceBetween: 40
			      	},
			      	480: {
			        	slidesPerView: 3,
			        	spaceBetween: 60
			      	},
			      	640: {
			        	slidesPerView: 4,
			       		spaceBetween: 80
			      	},
			      	992: {
			        	slidesPerView: 6,
			        	spaceBetween: 120
			      	}
			    }
		  	}
		)
	}
}

const app = new App();

app.init();

