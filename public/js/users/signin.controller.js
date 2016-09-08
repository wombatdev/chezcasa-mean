
"use strict";

(function() {
    angular
        .module("chezcasa")
        .controller("SigninController", [
            SigninControllerFunction
        ])

    function SigninControllerFunction() {
        console.log("I'm in the sign in controller!")
        var vm = this;

    }

})();
