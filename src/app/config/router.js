'use strict';

// import {
//     AuthError
// } from 'auth';

export class Router {
    static configure($stateProvider, $urlRouterProvider) {
        'ngInject';
        new Router($stateProvider, $urlRouterProvider).registerRoutes();
    }

    constructor($stateProvider, $urlRouterProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
    }

    registerRoutes() {
        let states = this.getStates();
        states.forEach(s => this.$stateProvider.state(s));

        this.$urlRouterProvider.otherwise('/today');
    }

    getStates() {
        return [{
            name: 'today',
            url: '/today',
            component: 'today',
            resolve: {
                todaysData: todayService => {
                    'ngInject';
                    return todayService.getTodaysData();
                }
            }
        }, {
            name: 'tomorrow',
            url: '/tomorrow',
            component: 'tomorrow',
            resolve: {
                todaysData: todayService => {
                    'ngInject';
                    return todayService.getTodaysData();
                }
            }
        }, {
            name: 'next7Days',
            url: '/next-7-days',
            component: 'next7Days',
            resolve: {
                // next7DaysData: () => {
                //     throw new AuthError('Bad auth credantials');
                // }
            }
        }, {
            name: 'later',
            url: '/later',
            component: 'later',
            resolve: {
                // laterData: (laterService, $q) => {
                //     'ngInject';

                //     //return $q.reject(new AuthError("not authenticated"));
                //     return $q.reject('Some unexpected error!');
                //     //return laterService.getLaterData();
                // }

            }
        }];
    }
}