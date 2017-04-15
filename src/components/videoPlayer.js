angular.module('video-player')

.directive('videoPlayer', function() {

  return {
    scope: {
      video: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function () {
      this.videoURL = (id) => {
        if (id) {
          return  "https://www.youtube.com/embed/" + id;
        } else {
          return false;
        }
      }
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
