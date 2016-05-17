import {
    Config,
    Runner
} from './entities';

export class RoutesConfig extends Config {
    constructor() {
        super(...arguments);
    }

    configure() {
        this.$stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'client/components/tabs/tabs.html'
            })
            .state('tab.content', {
                url: '/content',
                views: {
                    'tab-content': {
                        templateUrl: 'client/components/content/content.html',
                        controller: 'ContentCtrl as content',
                    }
                }
            });

        this.$urlRouterProvider.otherwise('tab/content');
    }

    isAuthorized($auth) {
        return true;
        // return $auth.awaitUser();
    }
}

export class RoutesRunner extends Runner {
    run() {
        this.$rootScope.$on('$stateChangeError', (...args) => {
            const err = _.last(args);

            if (err === 'AUTH_REQUIRED') {
                this.$state.go('login');
            }
        });
    }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
RoutesRunner.$inject = ['$rootScope', '$state'];
