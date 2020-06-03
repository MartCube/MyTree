import anime from 'animejs'

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
		translateY: -25,
		easing: 'easeInOutSine',
		direction: 'alternate',
		duration: 250,
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
