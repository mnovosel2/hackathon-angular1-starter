import template from './home.tmpl.html';
import {HomeController as controller} from './home.controller.js';

export const homeDirective=()=>{
	return{
		restrict:'E',
		template:template,
		scope:{},
		replace:true,
		controller:controller,
		controllerAs:'vm'
	};
};