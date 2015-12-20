import angular from 'angular';
import {profileDirective} from './profile.directive.js';

export const profile = angular.module('hackathon.profile',[
						]).directive('profile',profileDirective);