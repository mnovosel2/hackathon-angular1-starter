class HomeController{
	constructor(MainConfig,$http){
		this.page="Home";
		this.MainConfig=MainConfig;
		this.$http=$http;
	}
	users(){
		console.log('Usao');
		return this.$http.get(this.MainConfig.defaultUrl+'/api/1/users/admin').then(function(response){
			console.log(response.data);
		});
	}
}

HomeController.$inject=['MainConfig','$http'];
export {HomeController};