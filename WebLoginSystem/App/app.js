window.onload = function () {
    var today = new Date();
    document.getElementById("spnDateTime").innerHTML = today.getYear();

    if (sessionStorage.loggedUser != null && sessionStorage.loggedUser != undefined) {
        document.getElementById("loggedPanel").style.display = "block";
        document.getElementById("spnUsername").innerHTML = sessionStorage.loggedUser;

    } else {
        //document.getElementById("loggedPanel").style.display = "none";
    }
}

function logOut() {
    sessionStorage.clear();
    document.location.href = "Index.html";
}
var myApp = {}; //container object 
myApp.appVersion = "1.0";
myApp.UserModule = {
    data: [{ userId: 1, username: 'admin', password: 'admin', email: 'satya@gmail.com' }, {userId:2,username:'satya',password:'satya',email:'dotnetsatya@gmail.com'}],
    validateUser: function (username, passsword) {
        var isValid = false;
        if (localStorage.userData != null && localStorage.userData != undefined) {
            this.data = JSON.parse(localStorage.userData);
        }
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].username == username && this.data[i].password == passsword) {
                isValid = true;
                break;
            }
        }
        return isValid;
    },
    getUserById: function (userId) {
        var selectedUser = null;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].userId == userId) {
                selectedUser = this.data[i];
                break;
            }
        }
        return selectedUser;
        
    },
    registerUser: function (newUser) {
        if (this.data.length > 0) {
            newUser.userId = this.data.length + 1;
        }
        
        if (localStorage.userData != null && localStorage.userData != undefined) {
            var userData = JSON.parse(localStorage.userData);
            userData.push(newUser);
            localStorage.userData = JSON.stringify(userData);
        } else {
            this.data.push(newUser);
            localStorage.userData = JSON.stringify(this.data);
        }
    }
};