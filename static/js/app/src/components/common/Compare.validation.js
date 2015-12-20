export const compareTo=()=>{
	return{
		require:"ngModel",
		restrict:'A',
		scope:{
			valueToCompare:"=compareTo"
		},
		link:(scope,el,attrs,ngModel)=>{
			ngModel.$validators.compareTo=(modelValue)=>{
				return !validator.isNull(modelValue) ? modelValue===scope.valueToCompare : false;
			};
			scope.$watch('valueToCompare',()=>{
				ngModel.$validate();
			});
		}
	};
};