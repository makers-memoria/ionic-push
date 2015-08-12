I first added Apache Cordova local notifications plugin created by running the command 'cordova plugin add de.appplant.cordova.plugin.local-notification'. I then literally downloaded the latest release and copied the minified [ng-cordova file](https://github.com/makers-memoria/ionic-push/blob/master/www/js/ng-cordova.min.js). I require the [file](https://github.com/makers-memoria/ionic-push/blob/master/www/index.html#L19) in the index.html. I then injected the [ng-Cordova](https://github.com/makers-memoria/ionic-push/blob/master/www/js/app.js#L6) into the app.js file. By now i was ready to use the $cordovaLocalNotification command in the controller. So I injected the [command](https://github.com/makers-memoria/ionic-push/blob/master/www/js/app.js#L11) in the controller. I the added the two methods [add()](https://github.com/makers-memoria/ionic-push/blob/master/www/js/app.js#L13) and [isScheduled()](https://github.com/makers-memoria/ionic-push/blob/master/www/js/app.js#L13). The add() method triggers the local notification based on an alarm, which in this case will fire 10 seconds from adding. By making use of the isScheduled() method, we can check to see if our notification is already scheduled. I the added the button [Add notification](https://github.com/makers-memoria/ionic-push/blob/master/www/index.html#L37) to add a notification and the button [Is Scheduled](https://github.com/makers-memoria/ionic-push/blob/master/www/index.html#L38) to see if the notification is scheduled.




