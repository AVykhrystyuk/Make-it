'use strict';

import angular from 'angular';

export class NotificationService {
    static get __name__() {
        return 'notificationService';
    }

    constructor(toastr) {
        'ngInject';
        this.toastr = toastr;
    }

    static configure(toastrConfig) {
        'ngInject';
        angular.extend(toastrConfig, {
            closeButton: true
        });
    }

    error(message, title) {
        return this.toastr.error(message, title || "Error");
    }

    warning(message, title) {
        return this.toastr.warning(message, title || "Warning");
    }

    info(message, title) {
        return this.toastr.info(message, title || "Information");
    }

    success(message, title) {
        return this.toastr.success(message, title || "Success");
    }
}