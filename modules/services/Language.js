
export default class Language {
	static lang = 'en';

	static TEXTS = {
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

	static setTextByLanguage (el, section) {
		const lang = this.lang;
		const sectionText = this.TEXTS[section];

		Object.keys(sectionText).forEach( key =>  el.querySelector('#' + key).innerText = sectionText[key][lang] )
	}

	static setLang (newValue) {
		this.lang = newValue;
		this.refreshTexts();
	}

	static refreshTexts () {
		Object.keys(this.TEXTS).forEach(
			section => this.setTextByLanguage(document.querySelector('#' + section), section)
		)
	}
}