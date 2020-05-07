import anime from 'animejs'

export function indexAnimation(logo, buttons, footer) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add({
		targets: logo,
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		delay: anime.stagger(500),

		opacity: [0, 1],
		duration: 1000,
	})
		.add(
			{
				targets: buttons,
				translateY: ['400%', '0%'],
				easing: 'easeInOutElastic',
				delay: anime.stagger(50),

				opacity: [0, 1],
				duration: 2500,
			},
			0,
		)
		.add(
			{
				targets: footer,
				easing: 'easeInOutElastic',
				translateY: ['150%', '0%'],

				opacity: [0, 1],
				duration: 3000,
			},
			500,
		)
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
