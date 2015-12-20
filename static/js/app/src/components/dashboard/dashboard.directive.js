import template from './dashboard.tmpl.html';
import {DashboardController as controller} from './dashboard.controller';
export const dashboardDirective = ()=>{
	return {
		restrict: 'E',
		template:template,
		controller:controller,
		controllerAs:'vm',
		scope:true,
		replace:true
	};
};