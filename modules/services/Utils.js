 export default class Utils {

	static emptyContainers (containers) { 
		containers.forEach( container => { if (!container.innerHTML == "") container.innerHTML = "" } ) 
	}

	static isContainerEmpty (container) { return container.innerHTML == "" }

	static toggleClass (element, className) { element.classList.toggle(className) }

	static addClass (element, classNames) { 
		classNames.forEach( 
			className => {
				if (!this.hasClass(element, className)) element.classList.add(className)
			}
		) 
	}
	
	static removeClass (element, classNames) { 
		classNames.forEach( 
			className => {
				if (this.hasClass(element, className)) element.classList.remove(className)
			}
		) 
	}

	static hasClass (element, className) { return element.classList.contains(className) }

	static addAttribute (element, attributes) { 
		attributes.forEach( 
			attribute =>  {
				if (!element.getAttribute(attribute.name)) element.setAttribute(attribute.name, attribute.value );
			}
		) 
	}

	// Funnels an object into a pipe of functions
	static pipe (array_of_f, x) {
		return array_of_f.reduce( (acc, f) =>  f(acc), x )
	}

	// Return random index from array
	static getRandom (arr) { return arr[ Math.floor( Math.random() * arr.length ) ] }

	// Check equality between 2 objects
	static isEquivalent (objA, objB) {
		const objAProperties = Object.getOwnPropertyNames(objA);
		const objBProperties = Object.getOwnPropertyNames(objB);

		if (objAProperties.length !== objBProperties.length) return false;

		return objAProperties.every( property => objA[property] === objB[property]);
	}

	static range (start, end) {
    	if(start === end) return [start];
    	return [start, ...range(start + 1, end)];
	}

	static lowerCaseFirstLetter (str) {
		return str.charAt(0).toLowerCase() + str.slice(1);
	}
}