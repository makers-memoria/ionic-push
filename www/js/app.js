// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'ngCordova'])
  .factory('Items', ['$firebaseArray',function($firebaseArray) {
  var itemsRef = new Firebase("https://glaring-heat-6736.firebaseio.com/");
  return $firebaseArray(itemsRef);
}])
  .controller('ListController', function($scope, $cordovaLocalNotification, $ionicListDelegate, Items) {

      $scope.add = function() {
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
            id: "1234",
            date: alarmTime,
            message: "This is a message",
            title: "This is a title",
            autoCancel: true,
            sound: null
        }).then(function () {
            console.log("The notification has been set");
        });
    };
 
    $scope.isScheduled = function() {
        $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {
            alert("Notification 1234 Scheduled: " + isScheduled);
        });
    };

      $scope.items = Items;
      $scope.addItem = function() {
        var name = prompt('What do you want to buy?');
          if(name) {
            $scope.items.$add({
              'name': name
            });
          }
      };

      $scope.purchaseItem = function(item) {
        $scope.item = item;
        $scope.item['status'] = 'purchased';
        $ionicListDelegate.closeOptionButtons();
      };
  })
  
// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })
