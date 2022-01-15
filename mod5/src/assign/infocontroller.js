(function(){

    'use strict';

    angular.module('public')
    .controller('InfoController',InfoController);

    InfoController.$inject=['userInfo']
    function InfoController(userInfo){
        var infoctrl=this;
        
        infoctrl.user=userInfo;
        
    }
})();