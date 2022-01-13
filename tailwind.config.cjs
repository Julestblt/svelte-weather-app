// tailwind.config.cjs

module.exports = {
	// add this section
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ["'Raleway'", 'sans-serif;']
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
