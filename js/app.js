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
       .when('/tes_trajets', {templateUrl: 'pages/tes_trajets.html'})
       .otherwise({redirectTo: '/home'});
});
