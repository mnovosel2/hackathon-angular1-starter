import template from './app.tmpl.html';


export const appDirective=()=>{
	return{
		restrict:'E',
		scope:{},
		template:template,
		replace:true,
		transclude:true
	};	
};