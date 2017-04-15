angular.module('video-player')
.controller('DataCtrl', function($scope) {
  $scope.videos = window.exampleVideoData;

})

.directive('app', function() {
  return {
    scope: {

    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.selectVideo = () => {

      },
      this.searchResults = () => {

      },
      this.currentVideo = {},
      this.videos = [],
      this.onClick = (index) => {
        alert(index)
      };
    },
    templateUrl: 'src/templates/app.html'
  };
});
