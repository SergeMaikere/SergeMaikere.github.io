export default class Scroll {

	static toggleLinkActiveOnScroll = el => {
		window.addEventListener('load', Scroll.toggleLinkActive);
		document.addEventListener('scroll', Scroll.toggleLinkActive);
	}

	static toggleLinkActive = () => {
		const navlinks = [...document.querySelectorAll('#navbar .scrollto')];
		navlinks.forEach(
			navlink => {
				const section = Scroll.getSection(navlink.hash);

				if (!section) return;

				if (Scroll.isInSectionRange(section)) navlink.classList.add('active');
				if (!Scroll.isInSectionRange(section)) navlink.classList.remove('active');
			}
		)
	}

	static getSection = hash => hash ? document.querySelector(hash) : false;

	static isInSectionRange = el => { 
		let position = window.scrollY + 200;
		return el.offsetTop <= position && (el.offsetTop + el.offsetHeight) >= position; 
	}

	/**
   	* Offset on Scroll
   	*/
	static offsetHeaderOnScroll = el => {
		[...el.querySelectorAll('.scrollto')].forEach(
			link => {
				link.addEventListener(
					'click', 
					e => {
						e.preventDefault();
						if (!link.hash) return;
						if (document.getElementById('navbar').classList.contains('navbar-mobile')) Scroll.toggleMobileNav();
						window.location.hash = link.hash;
                  		Scroll.scrollTo(link.hash);
					}
				)
			}
		)
   	}

   	static scrollTo = elId => {
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
   	static scrollToUrlHashLinkOnLoad = () => {
		window.addEventListener(
			'load',
			() => {
				if (!window.location.hash || !document.querySelector(window.location.hash)) return;
				Scroll.scrollTo(window.location.hash);
			}
		)
   	}


   	/**
   	* Stop default scroll when click on link with href="#"
   	*/
   	static preventScrollOnEmptyHref = el => {
   		el.querySelectorAll('a').forEach(
   			link => link.addEventListener( 'click', e => e.preventDefault() )
   		)
   	}
}