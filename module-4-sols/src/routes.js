(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      template:'<h1>In home</h1>'
    })
    .state('categories',{
      url:'/categories',
      templateUrl:'data/categoriesViewTemplate.html',
      controller:'CategoriesController as Catctrl',
      resolve:{
        items:['MenuDataService',function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items',{
    url:'/items',
    template:'<h1>In item'
  })
}
})();
