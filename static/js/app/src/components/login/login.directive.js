import template from './login.tmpl.html';
import {LoginController as controller} from './login.controller.js';

export const loginDirective=()=>{
	return {
		restrict:'E',
		scope:{},
		template:template,
		controller:controller,
		controllerAs:'vm'
	};
};	