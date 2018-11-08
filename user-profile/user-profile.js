"use strict";

const userProfile = {
    templateUrl: "user-profile/user-profile.html",
    controller: ["ProfileService", function(ProfileService){
        const vm = this;
        
        vm.profile = ProfileService.getUserProfile();
        vm.editProfile = () => {
            ProfileService.editProfile();
        };
        
    }]
}
    

angular
    .module("App")
    .component("userProfile", userProfile);