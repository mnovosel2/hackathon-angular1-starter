import template from './register.tmpl.html';
import {RegisterController} from './register.controller.js';

export const registerDirective=()=>{
	return{
		restrict:'E',
		controller:RegisterController,
		replace:true,
		template:template,
		controllerAs:'vm',
		scope:{}
	};
};