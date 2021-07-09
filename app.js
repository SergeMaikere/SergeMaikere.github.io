import './css/style.scss';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import Swiper from 'swiper';

import Mother from './modules/component/mother/mother.js';
import Section from './modules/component/mother/section.js';
import LandingPage from './modules/component/landingPage/landingPage.js';
import Header from './modules/component/header/header.js';
import About from './modules/component/about/about.js';
import Services from './modules/component/services/services.js';
import Portfolio from './modules/component/portfolio/portfolio.js';
import Faq from './modules/component/FAQ/faq.js';
import Team from './modules/component/team/team.js';
import Clients from './modules/component/clients/clients.js';
import Contact from './modules/component/contact/contact.js';
import Footer from './modules/component/footer/footer.js';


class App extends Mother {

	constructor () {
		super();
		this.events = [
			this.#initClientSwiper,
			this.#initAOS
		]

		this.sections = [
			new Section('#landing', new Header),
			new Section('#landing', new LandingPage),
			new Section('#main', new About),
			new Section('#main', new Services),
			new Section('#main', new Portfolio),
			new Section('#main', new Faq),
			new Section('#main', new Team),
			new Section('#main', new Clients),
			new Section('#main', new Contact),
			new Section('#main', new Footer)
		]
	}

	init = () => {
		this.injectSections(document);
		this.setEventsListeners(document);
	}

	#initAOS = () => AOS.init();

	#initClientSwiper = () => {
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

