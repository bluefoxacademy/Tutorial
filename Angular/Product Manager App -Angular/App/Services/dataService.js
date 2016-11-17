app.service('dataService', function ($http) {
    var baseUrl = 'http://localhost:49613/api/';

    this.processGet = function (url) {
        return $http.get(baseUrl + url);
    }
    this.processPost = function (url, data) {
        return $http.post(baseUrl + url, data);
    }
    this.processPut = function (url, data) {
        return $http.put(baseUrl + url, data);
    }
    this.processDelete = function (url) {
        return $http.delete(baseUrl + url);
    }
});