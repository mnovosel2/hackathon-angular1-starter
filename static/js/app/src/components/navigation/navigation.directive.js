import template from './navigation.tmpl.html';
import {NavigationController as controller} from './navigation.controller.js';

export const navigationDirective=()=>{
	return{
		restrict:'E',
		template:template,
		controller:controller,
		scope:{},
		controllerAs:'vm',
		replace:true
	};
};
