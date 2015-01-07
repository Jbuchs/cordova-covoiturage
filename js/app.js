document.addEventListener('deviceready', function(){
    //code à exécuter au démarrage de l'app
}, false);

var app = angular.module("app", [
    'ngRoute',
    'dataControllers'
]);

app.config(function($routeProvider){
   $routeProvider
       .when('/home', {templateUrl: 'pages/home.html'})
       .when('/tes-trajets', {templateUrl: 'pages/tes-trajets.html'})
       .otherwise({redirectTo: '/home'});
});
