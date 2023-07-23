let tailwindcss = require('tailwindcss');
let mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix.js('./client/src/js/app.js', './dist/js/app.min.js')

	.copy('./client/src/images', './dist/images')
	.copy('./client/src/fonts', './dist/fonts')
	.sass('./client/src/scss/base.scss', './dist/css/base.css')
	.sass('./client/src/scss/global.scss', './dist/css/global.css')
	.sass('./client/src/scss/app.scss', './dist/css/app.css')
	.tailwind()

	// Options
	.sourceMaps()
	.options({
		processCssUrls: false,
		postCss: [
			require('autoprefixer'), // auto prefix
			require('postcss-pxtorem')({
				// convert all pixel values to rem
				rootValue: 16,
				propList: ['*'],
			}),
		],
		clearConsole: true,
		publicPath: '',
	});
