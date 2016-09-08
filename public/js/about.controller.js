
"use strict";

(function() {
    angular
        .module("chezcasa")
        .controller("AboutController", [
            AboutControllerFunction
        ])

    function AboutControllerFunction() {
        console.log("I'm in the about controller!")
        var vm = this;

    }

})();
