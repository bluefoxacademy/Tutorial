var app = angular.module('app', []);
app.controller('sampleController', function ($scope,$http) {
    $scope.username = 'satya';
    $scope.updateCount = 0;

    $scope.data = [{id:1,userId:1,title:'test title',body:'test body'}];

    $scope.$watch('username', function (newValue, oldValue) {
        if (newValue == oldValue)
            return;
        $scope.updateCount += 1;
    });

    $scope.addNew = function () {
        //$scope.data.push({ Id: 3, Name: 'jason' });
        $http.get('http://jsonplaceholder.typicode.com/posts/').then(function (response) {
            $scope.data = response.data;
        });
    }
});


app.controller('demoController', function ($scope) {
    $scope.time = (new Date()).toLocaleTimeString();

    $scope.updateTime = function () {
        $scope.time = (new Date()).toLocaleTimeString();
    }
    $scope.$watch('time', function (newValue, oldValue) {
        alert(newValue);
    });
    document.getElementById("btn1").addEventListener('click', function () {
      
        $scope.time = (new Date()).toLocaleTimeString();
        $scope.$apply(function () {
            alert("clicked...");
        });
       
    });
});

app.filter('reverse', function () {
    return function (input,isUpper) {
        input = input || '';

        var out = "";
        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        if (isUpper == true) {
            out = out.toUpperCase();
        }

        return out;
    };
});

app.controller('employeeController', function ($scope) {
    $scope.employees = [{ Id: 1, Name: 'satya', Job: 'Manager', salary: 1000 }, { Id: 2, Name: 'John', Job: 'Dev', salary: 1500 }, { Id: 3, Name: 'Jason', Job: 'Trainer', salary: 500 }];
});

app.filter('status', function () {
    return function (input) {
        var statusValue = 'Basic';
        if (input >= 500 && input <= 1000) {
            statusValue = 'Average';
        } else if (input > 1000) {
            statusValue = "Excellent";
        } else {
            statusValue = 'Basic';
        }
        return statusValue;
    };
});


app.controller('loginController', function ($scope) {
    $scope.submitted = false;
});


app.directive('greetDirective', function () {
    return {
        transclude:true,
        template: '<h1 ng-transclude>Welcome to Angular</h1>'
    };
});

app.controller('myController1', function ($scope) {
    $scope.customer = {Name:'satya',Address:'PA'};
});

app.controller('myController2', function ($scope) {
    $scope.customer = { Name: 'Scott', Address: 'NJ' };
});

app.directive('myCustomer', function () {
    return {
        template: 'Name:{{customer.Name}} Address:{{customer.Address}}'
    };
});
app.controller('employeeController', function ($scope) {
    $scope.employees = [{Id:1,Name:'satya',Address:'PA'}, {Id:2,Name:'john',Address:'NJ'}];
});

app.controller('customerController', function ($scope) {
    $scope.customers = [{ Id: 1, Name: 'James', Address: 'NY' }, { Id: 2, Name: 'Scott', Address: 'CA' }];
});

app.directive('myGrid', function () {
    return {
        restrict:'AE',
        templateUrl: 'App/Partials/my-grid-template.html',
        scope: {
            data:'=info'
        }
    };
});

app.directive('myDirective', function () {
    return {
        templateUrl: 'App/Partials/myDirective-template.html',
        controller: function ($scope) {
            $scope.clickMe = function () {
                alert('clicked...');
            }
        }
    };
});