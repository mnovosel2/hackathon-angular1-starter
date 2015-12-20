import template from './upload.tmpl.html';
import {UploadController as controller} from './upload.controller.js';

export const uploadDirective=()=>{
	return{
		restrict:'E',
		replace:true,
		controller:controller,
		controllerAs:'vm',
		template:template,
		scope:{

		}
	};
};