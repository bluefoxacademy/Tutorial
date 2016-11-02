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
    },
    resetPassword: function (username, oldPassword, newPassword) {
        if (localStorage.userData != null && localStorage.userData != undefined) {
            this.data = JSON.parse(localStorage.userData);
        }
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].username == username && this.data[i].password == oldPassword) {
                this.data[i].password = newPassword;
                break;
            }
        }
        localStorage.userData = JSON.stringify(this.data);
    }



};


function fnRequired(args) {
    var input = args.value;
    if (input == null || input == undefined || input=='' ) {
        var errorMessage = args.getAttribute('title');
        alert(errorMessage);
        args.focus();
        return false;
    } else {
        return true;
    }

}

function fnValidateMobile(args) {
    var input = args.value;

    //var regEx=/^\d{10}$/;
    var regEx = /^\d{3}\-\d{3}\-\d{4}$/;
    //if (input.length == 10 && isNaN(input) == false) {
    if(input.match(regEx)){
        return true;
    } else {
        var errorMessage = args.getAttribute('title');
        alert(errorMessage);
        args.focus();
        return false;
    }
}
function fnEmailValidate(args) {
    var input = args.value;

    var regEx = /^\w+\@\w+\.[a-zA-Z]{2,4}$/;

    if (input.match(regEx)) {
        return true;
    } else {
        var errorMessage = args.getAttribute('title');
        alert(errorMessage);
        args.focus();
        return false;
    }

}