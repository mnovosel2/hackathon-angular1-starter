/* beautify preserve:start */
import angular from 'angular';
import {loginDirective} from './login.directive.js';
import {User} from '../common/User.model';
/* beautify preserve:end */
var config = ($stateProvider) => {
    $stateProvider.state('hackathon.login', {
        url: '/login',
        views: {
            'main@': {
                template: '<login></login>'
            }
        }
    });
};

config.$inject = ['$stateProvider'];
export const login = angular.module('hackathon.login', [

    ])
    .config(config)
    .service('User', User)
    .directive('login', loginDirective);
