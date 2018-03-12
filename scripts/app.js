(function () {
    'use strict';

    var app = angular.module(
        'app',
        [
            'ngRoute',
            'ngMaterial',
            'ngAnimate'
        ]
    );
    app.config(
        [
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when(
                    '/', {
                        templateUrl: './scripts/login/login.html'

                    }
                ).when(
                    '/home', {
                        templateUrl: './scripts/home/home.html'

                    }
                ).when(
                    '/produtos', {
                        templateUrl: './scripts/produtos/produtos.html'

                    }
                ).when(
                    '/clientes', {
                        templateUrl: './scripts/clientes/clientes.html'

                    }
                ).when(
                    '/geracaorecibo', {
                        templateUrl: './scripts/geracaorecibo/geracaorecibo.html'

                    }
                );
                $routeProvider.otherwise({redirectTo: '/'});
            }
        ]
    );
})();