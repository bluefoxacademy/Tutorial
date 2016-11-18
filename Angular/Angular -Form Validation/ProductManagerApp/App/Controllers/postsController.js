app.controller('postsController', function ($scope, $http,$routeParams) {

    $scope.posts = [];
    $scope.selectedPost = null;
    $scope.isLoading = true;
    var init = function () {
        var url = 'http://jsonplaceholder.typicode.com/posts';
        $http.get(url).then(function (response) {
            $scope.posts = response.data;
        }, $scope.error);


        if ($routeParams.id != null && $routeParams.id != undefined) {
            $http.get(url + "/" + $routeParams.id).then(function (response) {
                $scope.selectedPost = response.data;
                $scope.isLoading = false;
            }, $scope.error);
               
        }
    }

    init();

    $scope.error = function (data) {
        console.log(data);
    }
});