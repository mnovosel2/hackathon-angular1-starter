import {User} from '../../common/User.model.js';
class ProfileController {
    constructor(User, $log, $stateParams) {
        this.$log = $log;
        this.User = User;
        this.$stateParams = $stateParams;
        this.profile = {};
    }
/*    viewProfile() {
        var profileController = this;
        this.User.getUser().then(function(user) {
            profileController.profile = user.payload;
            profileController.$log.log(user.payload);
        });
    }
    editProfile(user) {    	
    	var profileController=this;
        this.User.editUser(user).then(function(response) {
            profileController.$log.log("Edit");
            profileController.$log.log(response);
        }, function(reason) {
            profileController.$log.log(reason);
        });
    }*/
}
ProfileController.$inject = ['User', '$log', '$stateParams'];
export {ProfileController};
