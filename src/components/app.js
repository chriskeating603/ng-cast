angular.module('video-player')
.directive('app', function() {
  return {
    scope: {

    },
    restrict: 'E',  
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(youTube) {
      this.selectVideo = () => {

      },
      this.searchResults = () => {

      },
      this.videos = window.exampleVideoData,
      this.currentVideo = this.videos[0],
      this.onClick = (index) => {
        this.currentVideo = window.exampleVideoData[index];
      },
      this.result = () => {
        console.log(youTube.search());
      }
    },
    templateUrl: 'src/templates/app.html'
  };
});