#### Add Apache Cordova local notifications plugin created by running the command 

`cordova plugin add de.appplant.cordova.plugin.local-notification`

#### Download the latest release and copied the minified [ng-cordova file](https://github.com/makers-memoria/ionic-push/blob/master/www/js/ng-cordova.min.js).

#### Require the [file](https://github.com/makers-memoria/ionic-push/blob/master/www/index.html#L19) in the `index.html`.

```<!-- cordova script (this will be a 404 during development) -->
    <script src="js/ng-cordova.min.js"></script>
    <script src="cordova.js"></script>```

#### Inject [ng-Cordova](https://github.com/makers-memoria/ionic-push/blob/master/www/js/app.js#L6) into the `app.js` file.

```angular.module('starter', ['ionic', 'firebase', 'ngCordova'])
  .factory('Items', ['$firebaseArray',function($firebaseArray) {
  var itemsRef = new Firebase("https://glaring-heat-6736.firebaseio.com/");
  return $firebaseArray(itemsRef);
}])```

By now you'll be able to use the `$cordovaLocalNotification` command in the controller.

#### Inject the [command](https://github.com/makers-memoria/ionic-push/blob/master/www/js/app.js#L11) controller.

#### Add the two methods [add()](https://github.com/makers-memoria/ionic-push/blob/master/www/js/app.js#L13) and [isScheduled()](https://github.com/makers-memoria/ionic-push/blob/master/www/js/app.js#L13).

The add() method triggers the local notification based on an alarm, which in this case will fire 10 seconds from adding.

By making use of the isScheduled() method, we can check to see if our notification is already scheduled.

#### Add the button [Add notification](https://github.com/makers-memoria/ionic-push/blob/master/www/index.html#L37) to add a notification and the button [Is Scheduled](https://github.com/makers-memoria/ionic-push/blob/master/www/index.html#L38) to see if the notification is scheduled.




