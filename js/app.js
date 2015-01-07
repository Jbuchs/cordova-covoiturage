document.addEventListener('deviceready', function(){
    //code à exécuter au démarrage de l'app
}, false);

var app = angular.module("app", [
    'ngRoute',
    'countryControllers'
]);

app.config(function($routeProvider){
   $routeProvider
       .when('/home', {templateUrl: 'pages/home.html'})
       .when('/country/:countryId', {templateUrl: 'pages/country.html', controller: 'CountryDetailCtrl'})
       .otherwise({redirectTo: '/home'});
});
