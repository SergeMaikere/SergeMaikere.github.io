 export class Utils {

	emptyContainers (containers) { 
		containers.forEach( container => { if (!container.innerHTML == "") container.innerHTML = "" } ) 
	}

	isContainerEmpty (container) { return container.innerHTML == "" }

	toggleClass (element, className) { element.classList.toggle(className) }

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

	// Funnels an object into a pipe of functions
	pipe (array_of_f, x) {
		return array_of_f.reduce( (acc, f) =>  f(acc), x )
	}

	// Return random index from array
	getRandom (arr) { return arr[ Math.floor( Math.random() * arr.length ) ] }

	// Check equality between 2 objects
	isEquivalent (objA, objB) {
		const objAProperties = Object.getOwnPropertyNames(objA);
		const objBProperties = Object.getOwnPropertyNames(objB);

		if (objAProperties.length !== objBProperties.length) return false;

		return objAProperties.every( property => objA[property] === objB[property]);
	}

	range (start, end) {
    	if(start === end) return [start];
    	return [start, ...range(start + 1, end)];
	}
}