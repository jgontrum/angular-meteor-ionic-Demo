import {
    Controller
} from '../../scripts/entities';

import {
    Meteor
} from 'meteor/meteor';

export default class ContentCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

ContentCtrl.$inject = ['$scope', '$state'];
