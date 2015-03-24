var app = angular.module('app', []);

app.controller('ShopController', ['$scope', function ($scope) {
    $scope.Shops = [{
        id: 1,
        Name: 'Bakery',
        WorkStartTime: '9:00',
        WorkStopTime: '18:00',
        Address: '5,Chapaeva str.,Minsk',
        Description: 'From Oven With Love',
        Image: './img/Shops/bakery.jpg',
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
            WorkStartTime: '10:30',
            WorkStopTime: '20:30',
            Address: '155/5,Bogdanovich str.,Minsk',
            Description: 'We made bikes from nothing!',
            Image: './img/Shops/bikeShop.jpg',
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
            WorkStartTime: '10:00',
            WorkStopTime: '19:00',
            Address: '25,Sharangovich str.,Minsk',
            Description: 'God Save Us!',
            Image: './img/Shops/bikeEquip.jpg',
            Stores: [
                { id: 1, Name: 'Helmet', Description: 'Some Info' },
                { id: 2, Name: 'KneeGuard', Description: 'Another Info' },
                { id: 3, Name: 'Leather jacket', Description: 'Soft leather with protectors' },
                { id: 4, Name: 'Elbow Protection', Description: 'High durable plastic' },
                { id: 5, Name: 'Sun Glasses', Description: 'Polaroid' }
            ]
        }
    ];

    $scope.deleteShopbyName = function () {
    };
    
    $scope.deleteShopByID = function () {

    };

    $scope.AddShop = function (name,description) {
        var NewShop = {
            id: Shops.length + 1,
            Name: name,
            Desc: description
        }
        $.scope.Shops[Shops.length] = NewShop;
        $scope.$apply();
    };

    $scope.getAllShops = function () {

    };

    $scope.GetShopDesc = function (id) {

        $scope.Shops.forEach(function (shop) {
            if (shop.id == id) {
                alert(shop.Description);
            }
        });
    };

    $scope.GetItemDesc = function (ShopId,ItemId) {
        $scope.Shops[ShopId-1].Stores.forEach(function (item) {
            if (item.id == ItemId) {
                alert(item.Description);
                $("#StoreItemId").Text = item.id;
                $("#StoreItemName").Text = item.Name;
                $("#StoreItemDesc").Text = item.Description;
                $("#popupMask").Visible = true;

                
            }
        });
    };


    $scope.Visible = function () {
        showDetails = ! showDetails;
    }


    $scope.reloadPage = function () { window.location.reload(); }
}]);