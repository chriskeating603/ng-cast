angular.module('video-player')

.controller('DataCtrl', function($scope) {
  $scope.videos = window.exampleVideoData;
})

.directive('app', function() {
  return {
    templateUrl: 'src/templates/app.html'
  };
});
