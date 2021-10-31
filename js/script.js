
// HEADER SECTION - toggle [click-to-show]

let toggleClass = document.querySelector('.click-to-show');
let navItems = document.querySelectorAll('ul');

function toggleActive (){
	navItems[0].classList.toggle("show")
	navItems[1].classList.toggle("show");
}

toggleClass.addEventListener('click', toggleActive);



// ANIMATION ON SCROLL 

const animationHeader = document.querySelectorAll('div.about-me-header');
const skillsHeader = document.querySelectorAll('div.skills-header');
const projectsHeader = document.querySelectorAll('div.projects-header');
const contactMeHeader = document.querySelectorAll('div.contact-me-header');
const textAppear = document.querySelectorAll('div.about-me-description p');
const imgAppear = document.querySelectorAll('div.about-me-main .about-me-images img');
const imgProjectsAppear = document.querySelectorAll('div.projects-item img');


const AboutMeInView = (el, percentageScroll = 100) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		 ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
		);
};

const skillsInView = (el, percentageScroll = 200) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		 ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/200))
		);
};

const projectsInView = (el, percentageScroll = 600) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		 ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/300))
		);
};

const contactMeInView = (el, percentageScroll = 400) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		 ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/400))
		);
};

const textInView = (el, percentageScroll = 200) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		 ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/200))
		);
};

const imgInView = (el, percentageScroll = 200) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		 ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/200))
		);
};

const imgProjectsInView = (el, percentageScroll = 300) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		 ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/300))
		);
};



const displayScrollElement = (element) => {
	element.classList.add('scrolled');
};

const NotdisplayScrollElement = (element) => {
	element.classList.remove('scrolled');
};

const headerScrollAnimation = () => {
	animationHeader.forEach((el) => {
		if (AboutMeInView(el,100)) {
			displayScrollElement(el);
		} 
		 else {
			NotdisplayScrollElement(el);
		}
	})
}

const skillsScrollAnimation = () => {
	skillsHeader.forEach((el) => {
		if (skillsInView(el,200)) {
			displayScrollElement(el);
		} else {
			NotdisplayScrollElement(el);
		}
	})
}

const projectsScrollAnimation = () => {
	projectsHeader.forEach((el) => {
		if (projectsInView(el,300)) {
			displayScrollElement(el);
		} else {
			NotdisplayScrollElement(el);
		}
	})
}

const contactMeScrollAnimation = () => {
	contactMeHeader.forEach((el) => {
		if (contactMeInView(el,400)) {
			displayScrollElement(el);
		} else {
			NotdisplayScrollElement(el);
		}
	})
}

const textAppearAnimation = () => {
	textAppear.forEach((el) => {
		if (textInView(el,200)) {
			displayScrollElement(el);
		} else {
			NotdisplayScrollElement(el);
		}
	})
}

const imgAppearAnimation = () => {
	imgAppear.forEach((el) => {
		if (imgInView(el,200)) {
			displayScrollElement(el);
		} else {
			NotdisplayScrollElement(el);
		}
	})
}

const imgProjectsAppearAnimation = () => {
	imgProjectsAppear.forEach((el) => {
		if (imgProjectsInView(el,300)) {
			displayScrollElement(el);
		} else {
			NotdisplayScrollElement(el);
		}
	})
}

window.addEventListener('scroll', () => {
	headerScrollAnimation();
	skillsScrollAnimation();
	projectsScrollAnimation();
	textAppearAnimation();
	imgAppearAnimation();
	imgProjectsAppearAnimation();
	contactMeScrollAnimation();
})


//----------------------------------------------------------------------


// OWL CAROUSEL----------------------------------------------------------

const responsive={
	0:{
		items:1
	},
	320: {
		items: 1
	},
	560: {
		items: 2
	},
	960: {
		items: 3
	}
}

	$(".owl-carousel").owlCarousel({
		loop:true,
		autoplay:false,
		autoplayTimeout:3000,
		dots:false,
		nav:true,
		navText:[$('.owl-nav-prev'),$('.owl-nav-next')],
		responsive:responsive
	});
