const mix = require('laravel-mix');
require('mix-html-builder');

const virtualHost = 'http://style-guide.test/';

mix.js('resources/js/app.js', 'js/')
   .sass('resources/sass/app.scss', 'css/')
   .options({
     postCss: [require('cssnano')()],
   })
   .setPublicPath('public')
  .html({
    htmlRoot: './resources/templates/index.html',
    output: '.',
    partialRoot: './resources/templates/_/partials',
    layoutRoot: './resources/templates/_/layouts',
    versioning: true,
    inject:true,
    postHtmlConfig: {
      include: { encoding: 'utf-8' },
      extend: { encoding: 'utf-8' },
    }
  })
  .browserSync({
    proxy: virtualHost,
    files: ['resources/templates/**/*.html', 'public/css/**/*.css', 'public/js/**/*.js'],
    browser: 'google chrome'
  });

if(mix.inProduction()){
  mix.version();
} else {
  mix.sourceMaps(true, 'source-map');
}