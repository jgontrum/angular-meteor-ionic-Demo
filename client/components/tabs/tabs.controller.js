import {
    Controller
} from '../../scripts/entities';

import {
    Meteor
} from 'meteor/meteor';


export default class TabsCtrl extends Controller {
    constructor() {
        super(...arguments);

    }
}

TabsCtrl.$inject = ['$scope', '$state'];
