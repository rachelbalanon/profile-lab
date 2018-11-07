"use strict";

function profileService() {
    const self = this;

    self.setProfile = (person) => {
        self.profile = person;
    };

    self.getProfile = () => {
        return self.profile;
    };

}

angular
    .module("App")
    .service("profileService", profileService);