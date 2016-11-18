app.factory('productFactory', function () {
    var factory = {};
    factory.testMethod = function () {
        return 'From Factory';
    }

    var data = [];
    var init = function () {
       if (localStorage.myProducts != null && localStorage.myProducts != undefined) {
            data = JSON.parse(localStorage.myProducts);
        } else {
            data.push({ Id: 101, Name: 'Mac', Price: 10000 });
            data.push({ Id: 102, Name: 'IPhone', Price: 20000 });
        }

        //Instead, you can get this data from RESTful using ajax
       
        
    }
    init();
    factory.getProducts = function () {
        if (localStorage.myProducts != null && localStorage.myProducts != undefined) {
            data = JSON.parse(localStorage.myProducts);
        }

        //instead, you can get this data from RESTful service.
        return data;
    }

    factory.getProductById = function (id) {
        var selectedProduct = null;
        if (localStorage.myProducts != null && localStorage.myProducts != undefined) {
            data = JSON.parse(localStorage.myProducts);
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i].Id == id) {
                selectedProduct = data[i];
                break;
            }
        }
        return selectedProduct;
    }
    factory.addProduct = function (newProduct) {
        data.push(newProduct);
        localStorage.myProducts = JSON.stringify(data);

        //Instead, you can submit this to RESTful service
    }
    return factory;
});