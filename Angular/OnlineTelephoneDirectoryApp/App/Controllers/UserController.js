app.controller('UserController', function ($scope, $rootScope, $location, userFactory) {
    $scope.LoginModel = {};
    $scope.RegisterModel = {};
    $scope.ResetModel = {};
    $scope.IsUserValid = null;
    $scope.submitted = false;
    var init = function () {
        if ($rootScope.loggedInUser != null && $rootScope.loggedInUser != undefined) {
            $scope.RegisterModel = userFactory.getUserByName({ Username: $rootScope.loggedInUser });
        }
        //$rootScope.loggedInUser.getUsers();
    }
    init();
    $scope.ValidateUser = function () {
        if ($scope.loginForm.$valid) {
            $scope.submitted = false;
            $scope.IsUserValid = userFactory.validateUser($scope.LoginModel.Username, $scope.LoginModel.Password);
            if ($scope.IsUserValid) {
                $rootScope.IsAlreadyLogin = true;
                $rootScope.loggedInUser = $scope.LoginModel.Username;
                sessionStorage['loggedUsername'] = $scope.LoginModel.Username;
                $location.path("/welcome");
            }
        } else {
            $scope.submitted = true;
        }
       
    }

    $scope.registerUser = function () {
        if ($scope.registerForm.$valid) {
            $scope.submitted = false;
            var data = userFactory.getUsers();
            if (data != null && data != undefined && data.length > 0) {
                $scope.RegisterModel.Id = data.length + 1;
            } else {
                $scope.RegisterModel.Id = 1;
            }
            userFactory.addUser($scope.RegisterModel);
            $location.path('/login');
        }
        else {
            $scope.submitted = true;
        }
       

    }
    $scope.logout = function () {
        $scope.RegisterModel = null;
        $rootScope.IsAlreadyLogin = false;
        $rootScope.loggedInUser = null;
        sessionStorage['loggedUsername'] = null;
        $location.path("/");
    }

    $scope.cancelEdit = function () {
        $location.path("/welcome");
    }

    $scope.updateUser = function () {
        userFactory.updateUser($scope.RegisterModel);
        $location.path("/welcome");
    }

    $scope.resetPassword = function () {
        $scope.ResetModel.Username = $scope.RegisterModel.Username;
        $scope.IsUserValid = userFactory.validateUser($scope.ResetModel.Username, $scope.ResetModel.OldPassword);
        if ($scope.IsUserValid) {
            userFactory.resetPassword($scope.ResetModel);
            $location.path("/welcome");
        }
    }
});