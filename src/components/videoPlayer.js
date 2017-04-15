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
      this.videoURL = () => {
        return  `https://www.youtube.com/embed/${this.video.id.videoId}`
      }
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
