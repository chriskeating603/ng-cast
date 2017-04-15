angular.module('video-player')

.directive('videoPlayer', function() {

  return {
    scope: {
      videos: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function () {

    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
