import angular from 'angular';
import {profileEditDirective} from './profile.edit.directive';

var config = ($stateProvider) => {
    $stateProvider.state('hackathon.edit-profile', {
        url: '/profile/:id/edit',
        views: {
            'main@': {
                template: '<edit-profile></edit-profile>'
            }
        },
        policy: 'auth'
    });
};
config.$inject=['$stateProvider'];

export const profileEdit = angular.module('hackathon.profile.edit', []).config(config).directive('editProfile', profileEditDirective);