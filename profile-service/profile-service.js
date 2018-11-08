"use strict";

function ProfileService($location) {
    const self = this;

    self.userProfile = {
        name: "Caveman",
        contact: "caveman@caveman.com",
        bio: "bark bark bark, hooooooowwwwl!"
    };

    self.setUserProfile = (person) => {
        self.userProfile = person;
        $location.path("/user-profile");
    };

    self.getUserProfile = () => {
        return self.userProfile;
    };

    self.editProfile = () => {
        $location.path("/edit-profile");
    }


}

angular
    .module("App")
    .service("ProfileService", ProfileService);