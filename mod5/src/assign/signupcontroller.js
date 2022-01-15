(function(){
    'use strict';

    angular.module('public')
    .controller('SignUpController',SignUpController);
    
    SignUpController.$inject=['MenuService','InfoService']
    function SignUpController(MenuService,InfoService){
        var signup=this;
        signup. user={
            Fname:"",
            Lname:"",
            email:"",
            phone:"",
            item:"",
            fav:""
        };
        signup.msg="";
        

        signup.submit=function(){
            var promise=MenuService.getItem(signup.user.item);
            promise.then(function(response){
               
                InfoService.putInfo(signup.user);

                signup.user.fav=response.name;
                
                signup.msg="Your information has been saved";
                
            },function(error){
                 
                 signup.msg="No such menu number exists";
                 signup.success=false;
            });
        }
    }
})();