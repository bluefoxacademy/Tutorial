var myApp = {};
myApp.UserModule = function () {
    this.validateUser = function (username, password) {
        if (username == password) {
            return true;
        } else {
            return false;
        }
    }
}