var myApp = angular.module('myApp', []);

myApp.controller('productController', function ($scope) {
    $scope.pages = [];
    $scope.pageSize = 5;
    $scope.isAddOrEdit = false;
    $scope.todayDate = new Date();
    $scope.products = [{ productId: 101, productName: 'Laptop', price: 500, category: "computer" }, { productId: 102, productName: 'Mac', price: 2000, category: "computer" }, { productId: 103, productName: 'Mouse', price: 1000, category: "Hardware" }, { productId: 101, productName: 'Laptop', price: 500, category: "computer" }, { productId: 102, productName: 'Mac', price: 2000, category: "computer" }, { productId: 103, productName: 'Mouse', price: 1000, category: "Hardware" }, { productId: 101, productName: 'Laptop', price: 500, category: "computer" }, { productId: 102, productName: 'Mac', price: 2000, category: "computer" }, { productId: 103, productName: 'Mouse', price: 1000, category: "Hardware" }, { productId: 101, productName: 'Laptop', price: 500, category: "computer" }, { productId: 102, productName: 'Mac', price: 2000, category: "computer" }, { productId: 103, productName: 'Mouse', price: 1000, category: "Hardware" }, { productId: 101, productName: 'Laptop', price: 500, category: "computer" }, { productId: 102, productName: 'Mac', price: 2000, category: "computer" }, { productId: 103, productName: 'Mouse', price: 1000, category: "Hardware" }, { productId: 101, productName: 'Laptop', price: 500, category: "computer" }, { productId: 102, productName: 'Mac', price: 2000, category: "computer" }, { productId: 103, productName: 'Mouse', price: 1000, category: "Hardware" }];
    $scope.categories = ["Mobile","Computer","Hardware"];
    $scope.newProduct = {};
    $scope.selectedProduct = null;
    $scope.isNewProduct = true;
    $scope.addNew = function () {
        $scope.isAddOrEdit = true;
        $scope.isNewProduct = true;
    }
    var init = function () {
        var noRecords = $scope.products.length;
        var noPages = noRecords / $scope.pageSize;
        for (var i = 1; i <= noPages; i++) {
            $scope.pages.push(i);
        }

    }
    init();
    $scope.cancel = function () {
        $scope.isAddOrEdit = false;
    }

    $scope.saveProduct = function () {
        $scope.products.push($scope.newProduct);
        $scope.newProduct = {};
        $scope.cancel();
    }

    $scope.viewDetails = function (prod) {
        $scope.selectedProduct = prod;
    }

    $scope.editProduct = function (id) {
        $scope.isNewProduct = false;
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].productId == id) {
                $scope.newProduct = $scope.products[i]
                break;
            }
        }
        $scope.isAddOrEdit = true;
    }

    $scope.updateProduct = function () {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].productId == $scope.newProduct.productId) {
                $scope.products[i].productName = $scope.newProduct.productName;
                $scope.products[i].price = $scope.newProduct.price;
                break;
            }
        }
        $scope.isAddOrEdit = false;
        $scope.newProduct = {};
        $scope.isNewProduct = true;
    }
});


myApp.controller('employeeController', function () {
    var vm = this;

    vm.Message = "Test Controller";
    vm.greet = function () {
        alert('Hello..');
    }

});

myApp.controller('indexController', function () {
    var vm = this;
    vm.Message = "Hello..Index Controller";

});