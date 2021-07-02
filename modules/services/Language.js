
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
				nl: 'Begin hier',
				fr: 'Commencer ici'
			},
			langLink: {
				en: 'EN',
				nl: 'NL',
				fr: 'FR'
			}
		},
		landingPage: {
			titleLand: {
				en: 'Your property online with Host hand',
				nl: 'Uw eigendom online met Host hand',
				fr: 'Votre bien immobilier en ligne avec Host Hand'
			},
			subTitleLand: {
				en: 'No worries we got this',
				nl: 'Jij zorgt voor niets, wij zorgen voor alles',
				fr: "Tu s'occupe de rien on s'occupe de tout"
			},
			getStartedLand: {
				en: 'Get Started',
				nl: 'Begin hier',
				fr: 'Commencer ici'
			}
		}
	}


	/**
	* Language selection
	**/
	static setLang = newValue => {
		this.lang = newValue;
		this.refreshTexts();
	}

	static refreshTexts = () => {
		Object.keys(this.TEXTS).forEach(
			section => this.setTextByLanguage(document.querySelector('#' + section), section)
		)
	}

	static setTextByLanguage = (el, section) => {
		const lang = this.lang;
		const sectionText = this.TEXTS[section];

		Object.keys(sectionText).forEach( key =>  el.querySelector('#' + key).innerText = sectionText[key][lang] )
	}
}