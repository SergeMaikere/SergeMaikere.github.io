import {LandingPage} from '../modules/component/landingPage/landingPage.js';
import {Header} from '../modules/component/header/header.js';
import {About} from '../modules/component/about/about.js';
import {Services} from '../modules/component/services/services.js';
import {Portfolio} from '../modules/component/portfolio/portfolio.js';
import {Faq} from '../modules/component/FAQ/faq.js';
// import {Team} from '../modules/component/team/team.js';
import {Clients} from '../modules/component/clients/clients.js';
import {Contact} from '../modules/component/contact/contact.js';
import {Footer} from '../modules/component/footer/footer.js';
import AOS from 'aos';
	

const sections = [
	{ container: '#landing', ctrl: new Header()},
	{ container: '#landing', ctrl: new LandingPage()},
	{ container: '#main', ctrl: new About()},
	{ container: '#main', ctrl: new Services()},
	{ container: '#main', ctrl: new Portfolio()},
	{ container: '#main', ctrl: new Faq()},
	// { container: '#main', ctrl: new Team()},
	{ container: '#main', ctrl: new Clients()},
	{ container: '#main', ctrl: new Contact()},
	{ container: '#main', ctrl: new Footer()}
]

sections.forEach( section => document.querySelector(section.container).appendChild(section.ctrl.innerHtml) );


AOS.init();
