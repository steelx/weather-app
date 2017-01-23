# Weather APP
Simple weather app made with love and AngularJs, SASS-Bootstrap, Gulp

### Ajinkya Borade

1. App structure is simple, inside JS folder, each folder contains JS dependencies for that current module.
2. Single Responsibility: Since I have only 1 controller and service I didnt create more folders, otherwise I usually create a FOLDER for each controller and its dependencies in it.
3. IIFE (JavaScript Scopes): Rather than wrapping Angular components in an Immediately Invoked Function Expression (IIFE), I use angular.module. I prefer angular.module over IIFEs (both are good for hidding scope from globally)
4. controllerAs View Syntax: Helps avoid using $parent calls in Views with nested controllers, promotes proper namespacing `weatherCtrl.currentCity`, `controllerAs` is more closer to the Javascript classic constructor than `$scope syntax`
5. Defer Controller Logic to Services
6. Services: `.service` are instantiated with the `new` keyword, since these are so similar to factories, I use `.factory` instead for consistency.
7. Also I return the service logic up-top to be more readable.
8. In productions setups I tend to use CI-builds and love to use Yoeman-gulp or Webpack (incase of Angular 2)

Thank you.

### HOW TO:
To make AJAX requests you need a local server.
Just open the folder with local server, `cd` to the director and run: `http-server`

Make sure you have http-server install globally via NPM:
`npm install -g http-server`


App is also hosted at `https://steelx.github.io/weather-app/` but due to openweathermap SSL restrictions it wont load.
