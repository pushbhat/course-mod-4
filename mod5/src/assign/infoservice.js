(function() {
    "use strict";
    /**
     * Public restaurant application. Includes the common module and ui-router.
     */
    angular.module('public')
    .service('InfoService',InfoService);

    function InfoService(){
        var service=this;
        
        var user

        service.putInfo=function(userInfo){
            user=userInfo;
            
        };
        service.getInfo=function(){
            return user;
        };
    }
    
    })();
    