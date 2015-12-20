import angular from 'angular';
import {dashboardDirective} from './dashboard.directive';
import {profile} from './profile/profile';



var config=($stateProvider)=>{
		$stateProvider.state('hackathon.dashboard',{
			url:'/dashboard',
			views:{
				'main@':{
					template:'<dashboard></dashboard>'
				}
			},
			policy:'auth'
		});
	};
config.$inject=['$stateProvider'];
export const dashboard = angular.module('hackathon.dashboard', [profile.name])
	.config(config)
    .directive('dashboard',dashboardDirective);