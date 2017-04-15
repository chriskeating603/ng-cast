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
        return  "https://www.youtube.com/embed/" + id;
      }
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
