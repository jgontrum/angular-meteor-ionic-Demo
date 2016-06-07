// Libs
import { Meteor } from 'meteor/meteor';

import angular from 'angular';
import 'angular-meteor';
import 'angular-ui-router';

// Modules
import Definer from '../definer';
import SidemenuCtrl from '../../components/sidemenu/sidemenu.controller';
import ContentCtrl from '../../components/content/content.controller';

import {
    RoutesConfig,
    RoutesRunner
} from '../routes';

// App
const App = angular.module('App', [
    'angular-meteor',
    'angular-meteor.auth',
    'ionic'
]);

new Definer(App)
    .define(SidemenuCtrl)
    .define(ContentCtrl)
    .define(RoutesConfig)
    .define(RoutesRunner);

// Startup
if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['App']);
}
