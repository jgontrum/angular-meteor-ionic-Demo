import {
    Controller
} from '../../scripts/entities';

import {
    Meteor
} from 'meteor/meteor';

export default class SidemenuCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

SidemenuCtrl.$inject = ['$scope', '$state'];
