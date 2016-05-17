// Libs
import angular from 'angular';
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';

// Modules
import Definer from '../definer';
import ContentCtrl from '../../components/content/content.controller';
import {
    RoutesConfig,
    RoutesRunner
} from '../routes';

// App
const App = angular.module('App', [
    'angular-meteor',
    'ionic'
]);

new Definer(App)
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
