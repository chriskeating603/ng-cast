angular.module('video-player')

.service('youTube', function($http) {
  this.search = function() {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        q: 'basketball',
        type: 'video',
        maxResults: 5,
        videoDefinition: 'high',
        videoEmbeddable: 'true',
        relevanceLanguage: 'en',
        key: 'AIzaSyCuQV1HC8UYu0DJQ__TDJ6wmez7hU2xFvI'
      },
      method: 'GET'
    }).success(function(data) {
      
    })
  }
});
