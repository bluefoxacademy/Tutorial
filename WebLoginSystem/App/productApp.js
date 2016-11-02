var productApp = {};
productApp.ProductRepository = function () {
    this.data = []; //public & instance
    var self = this;
   
    function init() {
        self.data.push({ Id: 1, Name: 'IPhone', Price: 1000 });
        self.data.push({ Id: 2, Name: 'Mac', Price: 2000 });

        //testData.push(); 
    }

    init();

    this.getProducts = function () {

    }

    this.addNewProduct = function () {


    }

    this.updateProduct = function () {


    }

    this.getProductById = function () {

    }

    this.deleteProduct = function (id) {

    }

}