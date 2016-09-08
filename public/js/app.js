
"use strict";

(function() {
    angular.module ("chezcasa", [
            "ui.router",
            "ngResource",
            "ngAnimate"
        ])
        .config ([
            "$stateProvider",
            "$locationProvider",
            "$urlRouterProvider",
            RouterFunction
        ])

        function RouterFunction($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true)
            $stateProvider
                .state("Home", {
                    url: "/",
                    templateUrl: "/assets/js/home.html",
                    controller: "HomeController",
                    controllerAs: "HomeViewModel"
                })
                .state("About", {
                    url: "/about",
                    templateUrl: "/assets/js/about.html",
                    controller: "AboutController",
                    controllerAs: "AboutViewModel"
                })
                .state("Dishes",{
                    url:"/dishes",
                    templateUrl:"/assets/js/dishes/dishes.html",
                    controller: "DishesController",
                    controllerAs: "DishesViewModel"
                })
                .state("Signin",{
                    url:"/signin",
                    templateUrl:"/assets/js/users/signin.html",
                    controller: "SigninController",
                    controllerAs: "SigninViewModel"
                })
                .state("Signup",{
                    url:"/signup",
                    templateUrl:"/assets/js/users/signup.html",
                    controller: "SignupController",
                    controllerAs: "SignupViewModel"
                })
                .state("Apply",{
                    url:"/apply",
                    templateUrl:"/assets/js/users/apply.html",
                    controller: "ApplyController",
                    controllerAs: "ApplyViewModel"
                })
            $urlRouterProvider.otherwise("/")
        }

// END OF IIFE
})();
