app.controller('productsController', function ($scope, $routeParams, $location, productFactory, logService) {
    $scope.products = [];
    $scope.selectedProduct = null;
    $scope.newProductModel = {};
    var init = function () {
        //productFactory.testMethod();

        $scope.products = productFactory.getProducts();

        if ($routeParams.id != null && $routeParams.id != undefined) {
            $scope.selectedProduct = productFactory.getProductById($routeParams.id);
        }
    }
    init();

    $scope.saveProduct = function () {
        productFactory.addProduct($scope.newProductModel);
        logService.logMe('Product is Saved...');
        $location.path('/products');
    }
});