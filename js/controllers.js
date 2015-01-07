var countryControllers = angular.module('countryControllers',[]);

countryControllers.controller('CountryDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('datas/' + $routeParams.countryId + '.json').success(function(data) {
            $scope.country = data;
        });
    }]);