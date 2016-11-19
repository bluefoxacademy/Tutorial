app.factory('userFactory', function () {
    var factory = {};
    var data = [];
    var init = function () {
       
        if (localStorage["userData"] != null && localStorage["userData"] != undefined) {
            data = JSON.parse(localStorage["userData"]);
        } else {
            data.push({Id:1, Username: 'satya', Password: 'satya', Email: 'satya@gmail.com', Mobile: '12345679' });
            localStorage["userData"] = JSON.stringify(data);
        }
    }
    init();

    factory.getUsers = function () {
        if (localStorage["userData"] != null && localStorage["userData"] != undefined) {
            data = JSON.parse(localStorage["userData"]);
        }
        return data;
    }
    factory.getUserByName = function (UserObj) {
      
        var selectedUser = null;
        if (localStorage["userData"] != null && localStorage["userData"] != undefined) {
            data = JSON.parse(localStorage["userData"]);
        }

        
        for (var i = 0; i < data.length; i++) {
            if (data[i].Username == UserObj.Username) {
                selectedUser = data[i];
                break;
            }
        }
      
        return selectedUser;
    }
    factory.getUserById = function (id) {

        if (localStorage["userData"] != null && localStorage["userData"] != undefined) {
            data = JSON.parse(localStorage["userData"]);
        }

        var selectedUser = null;
        for (var i = 0; i < data.length; i++) {
            if (data[i].Id == id) {
                selectedUser = data[i];
                break;
            }
        }
        return selectedUser;
    }
    factory.addUser = function (user) {
        if (localStorage["userData"] != null && localStorage["userData"] != undefined) {
            data = JSON.parse(localStorage["userData"]);
        }
        data.push(user);
        localStorage["userData"] = JSON.stringify(data);
    }
    factory.updateUser = function (user) {
        if (localStorage["userData"] != null && localStorage["userData"] != undefined) {
            data = JSON.parse(localStorage["userData"]);
        }

        for (var i = 0; i < data.length; i++) {
            if (data[i].Username == user.Username && data[i].Password == user.Password) {
                data[i].Username = user.Username;
                data[i].Email = user.Email;
                data[i].Mobile = user.Mobile;
                break;
            }
        }
        localStorage["userData"] = JSON.stringify(data);
    }
    factory.deleteUser = function (id) {
        if (localStorage["userData"] != null && localStorage["userData"] != undefined) {
            data = JSON.parse(localStorage["userData"]);
        }

        
        for (var i = 0; i < data.length; i++) {
            if (data[i].Id == id) {
                data.splice(i, 1);
                break;
            }
        }
    }

    factory.validateUser = function (username, password) {
        if (localStorage["userData"] != null && localStorage["userData"] != undefined) {
            data = JSON.parse(localStorage["userData"]);
        }
        var isValid = false;

        for (var i = 0; i < data.length; i++) {
            if (data[i].Username==username && data[i].Password==password) {
                isValid = true;
                break;
            }
        }
        return isValid;
    }

    factory.resetPassword = function (resetModel) {
        if (localStorage["userData"] != null && localStorage["userData"] != undefined) {
            data = JSON.parse(localStorage["userData"]);
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i].Username == resetModel.Username && data[i].Password == resetModel.OldPassword) {
                data[i].Password = resetModel.NewPassword;
                break;
            }
        }
        localStorage["userData"] = JSON.stringify(data);
    }


    return factory;
});