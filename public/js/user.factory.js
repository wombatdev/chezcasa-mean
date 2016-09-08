
"use strict";

(function(){
  angular
  .module ( "chezcasa" )
  .factory ( "UserFactory", [
    "$resource",
    UserFactoryFunction
  ]);

  function UserFactoryFunction ( $resource ) {
    return $resource( "https://chezcasa.herokuapp.com/users/:id.json", {}, {
      update: {method: "PUT"}
    });
  }


})();
