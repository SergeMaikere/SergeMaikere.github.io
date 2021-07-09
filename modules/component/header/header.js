import Mother from '../mother/mother.js';
import * as Template from './header.html';
import * as Css from './header.scss';
import Language from '../../services/Language.js';

export default class Header extends Mother {

	constructor () {
		super();
		this.innerHtml = Template;

		this.events = [
         	this.#preventScrollOnEmptyHref,
			this.#toggleMobileNavOnClick,
			this.#toggleLinkActiveOnScroll,
			this.#offsetHeaderOnScroll,
			this.#scrollToUrlHashLinkOnLoad,
         	this.#setLanguageOnClick
		]
	}

	#toggleLinkActiveOnScroll = el => {
		window.addEventListener('load', this.#toggleLinkActive);
		document.addEventListener('scroll', this.#toggleLinkActive);
	}

	#toggleLinkActive = () => {
		const test = [...document.querySelectorAll('#navbar .scrollto')];
		test.forEach(
			navlink => {
				const section = this.#getSection(navlink.hash);

				if (!section) return;

				if (this.#isInSectionRange(section)) navlink.classList.add('active');
				if (!this.#isInSectionRange(section)) navlink.classList.remove('active');
			}
		)
	}

	#getSection = hash => { 
		return hash ? document.querySelector(hash) : false;
	}

	#isInSectionRange = el => { 
		let position = window.scrollY + 200;
		return el.offsetTop <= position && (el.offsetTop + el.offsetHeight) >= position; 
	}

	/**
   	* Mobile nav toggle
   	*/
   	#toggleMobileNavOnClick = el => { el.querySelector('.mobile-nav-toggle').addEventListener('click', this.#toggleMobileNav) }

   	#toggleMobileNav = () => {
		document.getElementById('navbar').classList.toggle('navbar-mobile');
		let mobileNavButton = document.getElementById('mobile-nav-button');
      	mobileNavButton.classList.toggle('bi-list');   	
      	mobileNavButton.classList.toggle('bi-x');
   	}

   	/**
   	* Offset on Scroll
   	*/
	#offsetHeaderOnScroll = el => {
		[...el.querySelectorAll('.scrollto')].forEach(
			link => {
				link.addEventListener(
					'click', 
					e => {
						e.preventDefault();
						if (!link.hash) return;
						if (document.getElementById('navbar').classList.contains('navbar-mobile')) this.#toggleMobileNav();
						window.location.hash = link.hash;
                  		this.#scrollTo(link.hash);
					}
				)
			}
		)
   	}

   	#scrollTo = elId => {
		const headerOffset = document.getElementById('header').offsetHeight;
		const elPos = document.querySelector(elId).offsetTop;
		window.scrollTo(
			{
				top: elPos - headerOffset,
				behavior: 'smooth'
			}
		)
   	}


   	/**
   	* Scroll on load
   	*/
   	#scrollToUrlHashLinkOnLoad = () => {
		window.addEventListener(
			'load',
			() => {
				if (!window.location.hash || !document.querySelector(window.location.hash)) return;
				this.#scrollTo(window.location.hash);
			}
		)
   	}


   	/**
   	* Stop default scroll when click on link with href="#"
   	*/
   	#preventScrollOnEmptyHref = el => {
   		el.querySelectorAll('a').forEach(
   			link => link.addEventListener( 'click', e => e.preventDefault() )
   		)
   	}


   	/**
   	* Language selection
   	*/
   	#setLanguageOnClick = el => {
		[...el.querySelectorAll('.dropdown li a')].forEach( 
	 		lang => lang.addEventListener(
	 			'click', 
	 			e => {
	 				Language.setLang(e.target.dataset.lang);
	 				if (document.getElementById('navbar').classList.contains('navbar-mobile')) this.#toggleMobileNav();
	 			}
	 		)
		)
   	}
}


