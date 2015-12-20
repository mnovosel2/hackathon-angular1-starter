class User {
    constructor($log, $http, $q, $localStorage, MainConfig) {
        this.$log = $log;
        this.$http = $http;
        this.$q = $q;
        this.$localStorage = $localStorage;
        this.URLS = {
            login: MainConfig.defaultUrl + '/api/1/login',
            getUser: MainConfig.defaultUrl + '/api/1/user',
            editUser:MainConfig.defaultUrl+'/api/1/user/edit',
	        addUser:MainConfig.defaultUrl+'/api/1/register'
        };
    }
    login(user) {
        var userModel = this;
        return this.$http.post(this.URLS.login, user, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
        }).then(function(response) {
            userModel.$log.log("response");
            userModel.$log.log(response.data);
            return userModel.$q.when(userModel.extract(response));
        },function(err){
	        userModel.$log.log(err);
        });
    }
    getUser() {
        if (this.$localStorage.token) {
            this.$log.log('get user');
            var userModel = this;
            return this.user ? this.$q.when(this.user) : this.$http.get(this.URLS.getUser).then(function(data,status){
              return userModel.cacheUser.call(userModel,data);
            });
        } else {
            return this.$q.reject(MainConfig.errors.tokenMissing);
        }
    }
    editUser(user){
        if(this.$localStorage.token){
            var userModel=this;
            return this.$http.put(this.URLS.editUser,user).then(this.extract);
        }else{
            return this.$q.reject(MainConfig.errors.tokenMissing);
        }
    }
	addUser(user){
		return this.$http.post(this.URLS.addUser,user).then(this.extract);
	}
    cacheUser(data) {
        this.user = this.user ? this.user : this.extract(data);
        return this.user;
    }

    extract(result) {
        return result.data;
    }
}

User.$inject = ['$log', '$http', '$q', '$localStorage', 'MainConfig'];
export {User};
