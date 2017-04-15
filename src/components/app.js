angular.module('video-player')

.controller('DataCtrl', function($scope) {
  $scope.videos = window.exampleVideoData;
})

.directive('app', function() {
  return {
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.onClick = (index) => {
        alert(index)
      }
    },
    templateUrl: 'src/templates/app.html'
  };
});
