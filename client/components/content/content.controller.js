import {
    Controller
} from '../../scripts/entities';

import {
    Meteor
} from 'meteor/meteor';

export default class ContentCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.meh = "xyz";

        this.subscribe("tamagotchi");

        this.helpers({
          tamagotchi() {
            return Tamagotchi.find();
          }
        });
    }
}

ContentCtrl.$inject = ['$scope', '$state'];
