import Constants from './Constants.js';


export default class Language {
	static lang = 'en';

	#TEXTS = {
		header: {
			aboutLink: {
				en: 'About',
				nl: 'About',
				fr: 'À propos'
			},
			servicesLink: {
				en: 'Services',
				nl: 'Services',
				fr: 'Services'
			},
			portfolioLink: {
				en: 'Portfolio',
				nl: 'Portfolio',
				fr: 'Portfolio'
			},
			faqLink: {
				en: 'FAQ',
				nl: 'FAQ',
				fr: 'FAQ'
			},
			contactLink: {
				en: 'Contact',
				nl: 'Contact',
				fr: 'Contact'
			},
			getStartedLink: {
				en: 'Get Started',
				nl: 'Get Started',
				fr: 'Commencer ici'
			},
			langLink: {
				en: 'EN',
				nl: 'NL',
				fr: 'FR'
			}
		}
	}

	static setTextByLanguage (el) {
		const lang = Language.lang;
		const sectionText = Language.TEXTS[this.constructor.name.toLowerCase()];
		const sectionTextKeys = Object.keys(sectionText);

		sectionTextKeys.forEach( key =>  el.querySelector('#' + key).innerText = sectionText[key][lang] )
	}

	/*static set lang (newValue) {
		Object.keys(this.#TEXTS).forEach(
			section => {
				Object.keys(section).forEach(
					key => this.setTextByLanguage(document.querySelector('#' + key))
				)
			}
		)
	}*/
}