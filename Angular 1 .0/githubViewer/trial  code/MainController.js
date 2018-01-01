(function() {

    var app = angular.module("githubViewer", []);

    var MainController = function(
        $scope, $interval, $location) {
   
        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function(username) {
            $log.info("Searching for " + username);
            github.getUser(username).then(onUserComplete, onError);
            if(countdownInterval)    {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            // take the user to the specified location
            $location.path("/user/"+ username);

        };

        $scope.username = "stymsingh";
        $scope.countdown = 5;
        startCountdown();


    };

    app.controller("MainController", MainController);

}());