import {Mother} from '../mother/mother.js';
import * as Template from './header.html';
import * as Css from './header.css';

export class Header extends Mother {

	constructor () {
		super();
		this.elId = 'header';
		this.innerHtml = Template;
		this.css = Css;

		this.events = [
			this.toggleMobileNavOnClick.bind(this),
			this.toggleLinkActiveOnScroll.bind(this),
			this.offsetHeaderOnScroll.bind(this),
			this.scrollToUrlHashLinkOnLoad.bind(this)
		]
	}

	toggleLinkActiveOnScroll (el) {
		window.addEventListener('load', this.toggleLinkActive.bind(this));
		document.addEventListener('scroll', this.toggleLinkActive.bind(this));
	}

	toggleLinkActive () {
		const test = [...document.querySelectorAll('#navbar .scrollto')];
		test.forEach(
			navlink => {
				const section = this.getSection(navlink.hash);

				if (!section) return;

				if (this.isInSectionRange(section)) navlink.classList.add('active');
				if (!this.isInSectionRange(section)) navlink.classList.remove('active');
			}
		)
	}

	getSection (hash) { 
		return hash ? document.querySelector(hash) : false;
	}

	isInSectionRange (el) { 
		let position = window.scrollY + 200;
		return el.offsetTop <= position && (el.offsetTop + el.offsetHeight) >= position; 
	}

	/**
   * Mobile nav toggle
   */
   toggleMobileNavOnClick (el) { el.querySelector('.mobile-nav-toggle').addEventListener('click', this.toggleMobileNav) }

   toggleMobileNav () {
   		document.getElementById('navbar').classList.toggle('navbar-mobile');
   		let mobileNavButton = document.getElementById('mobile-nav-button');
		mobileNavButton.classList.toggle('bi-list');
		mobileNavButton.classList.toggle('bi-x');
   }

   /**
   * Offset on Scroll
   */

   offsetHeaderOnScroll (el) {
   		[...el.querySelectorAll('.scrollto')].forEach(
   			link => {
   				link.addEventListener(
   					'click', 
   					e => {
   						e.preventDefault();
   						if (!link.hash) return;
   						if (document.getElementById('navbar').classList.contains('navbar-mobile')) this.toggleMobileNav();
   						window.location.hash = link.hash;
                     this.scrollTo(link.hash);
   					}
   				)
   			}
   		)
   }

   scrollTo (elId) {
   		const headerOffset = document.getElementById('header').offsetHeight;
   		const elPos = document.querySelector(elId).offsetTop;
   		window.scrollTo(
   			{
   				top: elPos - headerOffset,
   				behavior: 'smooth'
   			}
   		)
   }

   scrollToUrlHashLinkOnLoad () {
   		window.addEventListener(
   			'load',
   			() => {
   				if (!window.location.hash || !document.querySelector(window.location.hash)) return;
   				this.scrollTo(window.location.hash);

   			}
   		)
   }
}