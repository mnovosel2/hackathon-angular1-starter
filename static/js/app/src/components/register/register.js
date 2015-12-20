import {registerDirective} from './register.directive.js';



var config = ($stateProvider) => {
    $stateProvider.state('hackathon.register', {
        url: '/register',
        views: {
            'main@': {
                template: '<register></register>'
            }
        }
    });
};
config.$inject=['$stateProvider'];
export const register = angular.module('hackathon.register', [])
    .config(config)
    .directive('register', registerDirective);