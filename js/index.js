import {LandingPage} from '../modules/component/landingPage/landingPage.js';
import {Header} from '../modules/component/header/header.js';
import {About} from '../modules/component/about/about.js';
import {Services} from '../modules/component/services/services.js';
import {Portfolio} from '../modules/component/portfolio/portfolio.js';
import {Faq} from '../modules/component/FAQ/faq.js';
import {Team} from '../modules/component/team/team.js';
import {Clients} from '../modules/component/clients/clients.js';
import {Contact} from '../modules/component/contact/contact.js';
import {Footer} from '../modules/component/footer/footer.js';
import AOS from 'aos';
	


const pages = [
	{ container: '#landing', content: new Header().innerHtml},
	{ container: '#landing', content: new LandingPage().innerHtml},
	{ container: '#main', content: new About().innerHtml},
	{ container: '#main', content: new Services().innerHtml},
	{ container: '#main', content: new Portfolio().innerHtml},
	{ container: '#main', content: new Faq().innerHtml},
	{ container: '#main', content: new Team().innerHtml},
	{ container: '#main', content: new Clients().innerHtml},
	{ container: '#main', content: new Contact().innerHtml},
	{ container: '#main', content: new Footer().innerHtml}
]

pages.forEach( page => document.querySelector(page.container).innerHTML += page.content );

AOS.init();
