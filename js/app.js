(function(){
'use strict';

	angular.module('flickrApp', [])

	// setup FlickFeedController
	.controller('FlickrFeedController', ['$http', function($http){
		
		var flickr = this;
		flickr.feeds = [];

		// grab the json array
		var request = $http.get('http://crossorigin.me/https://api.flickr.com/services/feeds/photos_public.gne?tags=trees&format=json');

        	// on success
        	request.success(function(response){

        		// work-around since data is returned as a string
        		response = response.replace('jsonFlickrFeed(', '');
	        	response = response.replace('})', '}');
	        	response = response.replace(/\\'/g, "'");

	        	// parse the data
	        	response = JSON.parse(response);

            		flickr.feeds = response.items;

        	});

	}])

	// setup pannelController
	.controller("PanelController", function() {

		this.tab = 1;
		this.feed;
		this.number = 0;
		this.selectTab = function(setTab, feed) {

			// set the tab
			this.tab = setTab;
			// pass the currently selected feed so it can be accessed
			this.feed = feed;
		};
		this.isSelected = function(checkTab) {

			return this.tab === checkTab;	
		}
	})

	// flickFeed directive
	.directive('flickrFeed', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/flickr-feed.html',
			replace: true,
			// pass through feeds and panel data
			scope: {
				feeds: '=',
				panel: '='
			}

		};
	})

	// flickItem directive
	.directive('flickrItem', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/flickr-item.html',
			replace: true
		};
	});

})();
