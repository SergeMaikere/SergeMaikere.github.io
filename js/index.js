import {LandingPage} from '../modules/component/landingPage/landingPage.js';
import {Header} from '../modules/component/header/header.js';
import {About} from '../modules/component/about/about.js';
	
customElements.define(`s-landingpage`, LandingPage);
customElements.define(`s-header`, Header);
customElements.define(`s-about`, About);

const pages = [
	{ container: '#landing', content: document.createElement('s-header')},
	{ container: '#main', content: document.createElement('s-landingpage')},
	{ container: '#main', content: document.createElement('s-about')}
]

pages.forEach( page => document.querySelector(page.container).appendChild(page.content) );
