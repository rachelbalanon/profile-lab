"use strict";

const editProfile = {
    templateUrl: "edit-profile/edit-profile.html",
    controller: ["ProfileService", function(ProfileService){
        const vm = this;
        vm.userProfile = angular.copy(ProfileService.getUserProfile());
        vm.sendUserProfile = (person) => {
            ProfileService.setUserProfile(person);
        };
    }]
};

angular
    .module("App")
    .component("editProfile", editProfile);