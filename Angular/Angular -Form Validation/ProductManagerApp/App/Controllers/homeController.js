app.controller('homeController', function ($scope,productFactory) {
    $scope.Message = "hello..world";

    var init = function () {
        console.log(productFactory.testMethod());
    }

    init();
});