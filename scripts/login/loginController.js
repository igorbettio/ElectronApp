var app = angular.module('app');

app.controller('loginController', function($scope, $location, $window, $route) {
    var ctrl = this;

    $scope.Login = function(){
        if($scope.user == 'admin' && $scope.password == '123'){
            console.log($route.current);
            $window.location.href = '#!home';
        }
    };
});
