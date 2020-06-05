import anime from 'animejs'

export function menuAnim(top, bot, menuActive) {
	if (menuActive) {
		anime({
			targets: top,
			translateX: 200,
			easing: 'easeInOutQuart',
			duration: 250,
		})
		anime({
			targets: bot,
			translateX: -200,
			easing: 'easeInOutQuart',
			duration: 250,
		})
	} else {
		anime({
			targets: top,
			translateX: 0,
			easing: 'easeInOutQuart',
			duration: 250,
		})
		anime({
			targets: bot,
			translateX: 0,
			easing: 'easeInOutQuart',
			duration: 250,
		})
	}
}

export function homeAnim(triangle) {
	anime({
		targets: triangle,
		translateY: -50,
		easing: 'easeInOutSine',
		delay: anime.stagger(50),
		direction: 'alternate',
		duration: 250,
	})
}

export function mapAnim(pointer) {
	anime({
		targets: pointer,
		translateY: -50,
		easing: 'easeInOutSine',
		direction: 'alternate',
		duration: 250,
	})
}

export function QRcodeAnim(line) {
	anime({
		targets: line,
		opacity: [0, 1],
		translateY: '100%',
		easing: 'easeInOutQuad',
		direction: 'alternate',
		duration: 400,
	})
}

export function slideRight(el) {
	anime({
		targets: el,
		translateX: ['75%', '0%'],
		easing: 'easeInOutCubic',
		opacity: [0, 1],
		duration: 300,
		offset: 0,
	})
}
