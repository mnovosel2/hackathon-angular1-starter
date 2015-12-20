class RegisterController{
	constructor($log,User){
		this.$log=$log;
		this.User=User;
	}
	registerUser(user){
		var registerController=this;
		this.User.addUser(user).then(function(result){
			registerController.$log.log(result);
		});
	}
}

RegisterController.$inject=['$log','User'];
export {RegisterController};