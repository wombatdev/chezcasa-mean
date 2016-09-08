
"use strict";

(function(){
  angular
  .module ( "chezcasa" )
  .factory ( "DishFactory", [
    "$resource",
    DishFactoryFunction
  ]);

  function DishFactoryFunction ( $resource ) {
    return $resource( "https://chezcasa.herokuapp.com/dishes/:id.json", {}, {
      update: {method: "PUT"}
    });
  }


})();
