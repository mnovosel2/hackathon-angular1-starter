import angular from 'angular';
import {homeDirective} from './home.directive.js';

var config=($stateProvider)=>{
    $stateProvider.state('hackathon.home', {
        url: '/',
        views: {
            'main@': {
                template: '<home></home>'
            }
        }
    });
};
config.$inject=['$stateProvider'];


export const home = angular.module('hackathon.home', [])
    .config(config).directive('home', homeDirective);
