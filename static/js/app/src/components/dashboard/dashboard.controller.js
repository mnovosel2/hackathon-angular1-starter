class DashboardController{
	constructor(){
		this.navigation=[{
			url:'/dashboard/add/',
			label:'Add'
		},{
			url:'/dashboard/users/',
			label:'Users'
		},{
			url:'/dashboard/stats',
			label:'Statistics'
		}];
	}
}

export {DashboardController};