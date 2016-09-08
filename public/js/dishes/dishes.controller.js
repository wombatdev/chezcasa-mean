
"use strict";

(function() {
    angular
        .module("chezcasa")
        .controller("DishesController", [
            DishesControllerFunction
        ])

    function DishesControllerFunction() {
        console.log("I'm in the dishes controller!")
        var vm = this;

    }

})();
