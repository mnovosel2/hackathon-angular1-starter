import template from './profile.tmpl.html';
import {ProfileController} from './profile.controller.js';

export const profileDirective=()=>{
	return {
		template: template,
		scope:{},
		replace:true,
		controller:ProfileController,
		controllerAs:'vm',
		restrict:'E'
	};
};