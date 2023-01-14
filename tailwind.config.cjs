/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#1c1d26',
				'secondary': '#272833',
				'terciary': '#e44c65',
			},
			keyframes: {
				loading: {
					'0%': {
						opacity: 1,
						visibility: 'visible',
					},

					'95%': {
						opacity: 1,
						visibility: 'visible',
					},

					'100%': {
						opacity: 0,
						visibility: 'hidden',
					},
				},
				move: {
					'0%': {
						left: 0,
					},
					'50%': {
						left: '100%',
						transform: 'rotate(450deg)',
						width: '150px',
						height: '150px',
					},

					'75%': {
						left: '100%',
						transform: 'rotate(450deg)',
						width: '150px',
						height: '150px',
					},

					'100%': {
						right: '100%',
					},
				}
			},
			animation: {
				loading: 'loading 5.5s linear forwards',
				move: 'move 5s cubic-bezier(0,.3,1,.64) forwards',
			},
			backgroundImage: {
				'coding-with-glasses': "url('./src/assets/img/code_with_glasses.png')",
				'setup': "url('./src/assets/img/setup_pc.png')",
				'code-alone': "url('./src/assets/img/code_alone.png')",
				'mymtech': "url('./src/assets/img/mymtech.jpg')",
				'video-games': "url('./src/assets/img/video_games.png')",
			},
			fontFamily: {
				'roboto-flex': 'Roboto Flex, sans-serif',
			}

		},
		plugins: [],
	}
}