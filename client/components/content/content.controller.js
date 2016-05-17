import {
    Controller
} from '../../scripts/entities';

export default class ContentCtrl extends Controller {
    constructor() {
      super(...arguments);

      //   this.subscribe('users');

      this.helpers({});
    }
}

ContentCtrl.$inject = ['$scope', '$state'];
