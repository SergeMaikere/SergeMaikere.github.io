import * as Template from './mother.html';
import * as Css from './mother.css';
import {Constants} from '../../services/Constants.js';
import AOS from 'aos';

export class Mother extends HTMLElement {
	constructor () {
		super();

		this.elId = 'id';

		this.events = [];

		this.classes = [];

		this.elAttributes = [];

		this.constants = new Constants();

		this.Template = Template;

		this.Css = Css;

		this.AOS = AOS;

		this.useAOS = false;

	}

	setInnerCustomElement () {
		return this.constants.cssLinks 
			+ this.Template.default 
			+ `<style>${this.Css.default}</style>`
			+ this.constants.scripts;
	}

	connectedCallback () {
		this.id = this.elId;
		this.attachShadow({mode: 'open'}).innerHTML = this.setInnerCustomElement();
		this.setEventsListeners();
		this.setClassAndAttributes();
		this.initAnimationOnLoad();
	}

	setEventsListeners () {
		if (this.events.length == 0) return;
		this.events.forEach( event => event() );
	}

	setClassAndAttributes () {
		this.addAttribute(this, this.elAttributes);
		this.addClass(this, this.classes);
	}

	//HELPERS
	addClass (element, classNames) { 
		classNames.forEach( 
			className => {
				if (!this.hasClass(element, className)) element.classList.add(className)
			}
		) 
	}
	
	removeClass (element, classNames) { 
		classNames.forEach( 
			className => {
				if (this.hasClass(element, className)) element.classList.remove(className)
			}
		) 
	}

	hasClass (element, className) { return element.classList.contains(className) }

	addAttribute (element, attributes) { 
		attributes.forEach( 
			attribute =>  {
				if (!element.getAttribute(attribute.name)) element.setAttribute(attribute.name, attribute.value );
			}
		) 
	}

	addCustomElement (elClass) {
		const elName = `s-${elClass.constructor.name.toLowerCase()}`;
		customElements.define(elName, elClass);
		return document.createElement(elName);
	}

	initAnimationOnLoad () {
		if (!this.useAOS) return;

		console.log('AOS initiated in ' + this.constructor.name)
		this.AOS.init(
			{
				duration: 1000,
				easing: "ease-in-out",
			  	once: true,
			  	mirror: false
			}
		);
	}

	refreshAOSOnLoad () {
		this.shadowRoot.getElementById('inner-' + this.elId).addEventListener( 'load', () => this.AOS.refresh() );
	}

	refreshAOSOnScroll () {
		this.shadowRoot.getElementById('inner-' + this.elId).addEventListener( 'scroll', () => this.AOS.refresh() );
	}
}