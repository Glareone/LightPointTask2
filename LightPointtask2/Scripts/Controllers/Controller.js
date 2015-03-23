var app = angular.module('app', []);

app.controller('ShopController', ['$scope', function ($scope) {
    $scope.Shops = [{
        id: 1,
        Name: 'Bakery',
        Description: 'From Oven With Love',
        Stores: [
            { id: 1, Name: 'Roll', Description: 'With Flavour' },
            { id: 2, Name: 'Roll', Description: 'With Plum' },
            { id: 3, Name: 'Roll', Description: 'Delicious' },
            { id: 4, Name: 'Cookie', Description: 'With Engine oil' },
            { id: 5, Name: 'Cookie', Description: 'True Evil Cookie' }
        ]
    },
        {
            id: 2,
            Name: 'Bike Shop',
            Description: 'We made bikes from nothing!',
            Stores: [
                { id: 1, Name: 'Suzuki Bandit', Description: '138HP' },
                { id: 2, Name: 'Honda Hornet', Description: '98HP' },
                { id: 3, Name: 'Ducati Multistrada', Description: '120HP' },
                { id: 4, Name: 'Yamaha V-star', Description: '78HP' },
                { id: 5, Name: 'Kawasaki H2R', Description: '300HP' }
            ]
        },
        {
            id: 3,
            Name: 'Bike Equipment Shop',
            Description: 'God Save Us!',
            Stores: [
                { id: 1, Name: 'Helmet', Description: '138HP' },
                { id: 2, Name: 'KneeGuard', Description: '98HP' },
                { id: 3, Name: 'Leather jacket', Description: '120HP' },
                { id: 4, Name: 'Elbow Protection', Description: '78HP' },
                { id: 5, Name: 'Kawasaki H2R', Description: '300HP' }
            ]
        }
    ];


    $scope.deleteShopbyName = function () {
    };
    
    $scope.deleteShopByID = function () {

    };

    $scope.addShop = function () {
      var id = $(shopid)
    };

    $scope.getAllShops = function () {

    };
}]);