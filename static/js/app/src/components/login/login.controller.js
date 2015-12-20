class LoginController {
    constructor(User, $log, $localStorage, $state, $auth) {
        this.User = User;
        this.$log = $log;
        this.$localStorage = $localStorage;
        this.$state = $state;
        this.$auth = $auth;
    }
    login(loginData) {
        var loginController = this;
        loginData.grant_type = "password";
        this.User.login(loginData).then(function(user) {
            loginController.$localStorage.token = user.access_token;
            loginController.$state.go('hackathon.home');
        });
    }
    loginFacebook() {
        var loginController = this;
        this.$auth.authenticate('facebook').then(function(response) {
                console.log(response);
                loginController.$state.go('hackathon.home');
            })
            .catch(function(response) {
                console.log("ERR");
                console.log(response);
            });
    }
    loginGoogle() {
        var loginController = this;
        this.$auth.authenticate('google').then(function(response) {
                console.log(response);
                loginController.$state.go('hackathon.home');
            })
            .catch(function(response) {
                console.log("ERR");
                console.log(response);
            });
    }
}
LoginController.$inject = ['User', '$log', '$localStorage', '$state', '$auth'];
export {
    LoginController
};
