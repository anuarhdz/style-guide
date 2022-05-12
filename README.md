# Style Guide Template

Template for simple style guide. You can use the compiled code in `./public` or edit, adjust or modify the workflow at your convenience to fit your development.

## Local environment
* NodeJS 16.15.0
* Valet 3.1.6
* Laravel Mix 6

## Install and use

* Clone this repository, and run `npm install` to install the nodejs dependencies

* In the `./webpack.mix.js` file, edit the value of the `virtualHost` constant. The value must match the virtual host you are using on your computer. Otherwise browserSync may not work at all. 

* run `npx mix watch` to make modifications to the code and watch this change in the browser automatically.

* run `npx mix` to compile your assets

* run `npx mix` to compile assets for production
