var app = angular.module('app');

app.controller('navbarController', function($scope, $location, $window, $route) {
    var ctrl = this;

    $scope.Show = function(){
        if($route.current)
            return $route.current.loadedTemplateUrl.indexOf('login.html') == -1;
        else
            return false;
    };
});
