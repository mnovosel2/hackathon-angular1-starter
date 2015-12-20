import template from './profile.edit.tmpl.html';
import {ProfileController} from '../profile.controller.js';

export const profileEditDirective=()=>{
	return{
		template:template,
		restrict:'E',
		replace:true,
		controller:ProfileController,
		controllerAs:'vm'
	};
};
