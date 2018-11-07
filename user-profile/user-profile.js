"use strict";

const userProfile = {
    templateUrl: "user-profile/user-profile.html",
    controller: ["profileService", function(profileService){
        const vm = this;
        vm.profileService = () => {
            vm.profile = profileService.getProfile();
        }
    }]
}
    

angular
    .module("App")
    .component("userProfile", userProfile);