"use strict";

const editProfile = {
    templateUrl: "edit-profile/edit-profile.html",
    controller: ["profileService", function(profileService){
        const vm = this;
        vm.sendProfile = (person) => {
            profileService.setProfile(person);
        };        
    }]
};

angular
    .module("App")
    .component("editProfile", editProfile);