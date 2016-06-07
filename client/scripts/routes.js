import {
    Config,
    Runner
} from './entities';

export class RoutesConfig extends Config {
    constructor() {
        super(...arguments);

        this.isAuthorized = ['$auth', this.isAuthorized.bind(this)];
    }

    configure() {
        this.$stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'client/components/sidemenu/sidemenu.html',
                controller: 'SidemenuCtrl as sidemenu'
            })
            .state('app.content', {
                url: '/content',
                views: {
                    'menu-content': {
                        templateUrl: 'client/components/content/content.html',
                        controller: 'ContentCtrl as content'
                    }
                }
            });

        this.$urlRouterProvider.otherwise('/app/content');
    }

    isAuthorized($auth) {
        return $auth.awaitUser();
    }
}

export class RoutesRunner extends Runner {
    run() {
        this.$rootScope.$on('$stateChangeError', (...args) => {
            const err = _.last(args);

            if (err === 'AUTH_REQUIRED') {
                this.$state.go('app.content');
            }
        });
    }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
RoutesRunner.$inject = ['$rootScope', '$state'];
