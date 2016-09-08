
"use strict";

(function() {
    angular
        .module("chezcasa")
        .controller("SignupController", [
            SignupControllerFunction
        ])

    function SignupControllerFunction() {
        console.log("I'm in the sign up controller!")
        var vm = this;

    }

})();
