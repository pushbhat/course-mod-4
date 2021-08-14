(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categories',{
    templateUrl:'src/data/categories.template.html',
    bindings:{
      items: '<',
    }
  });

})();
