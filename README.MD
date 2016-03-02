# Flickr Public Feed AngularJS App

Flickr Public Feed AngularJS App is a single page AngularJS app that displays a list of flickr feeds.

Two Directives are used to modularize the app.
Main feed page: [partials/flickr-feed.html] [MFP]
Single feed page [partials/flickr-item.html] [SFP]


Main feed page includes:


  - Photo
  - Title - local link to [Single] [SFP] feed
  - Direct link to Post Author
  - Direct link to Photo on Flickr 


Feed details are passed through on clicking a feed title leading to the Single feed page  displayed the following details:

  - Direct link to Post Author
  - Published date
  - Tags
  - Back link to main feeds page


Directives are utilised to modularize code as well as passing data through directives to minimise code. 

### Version
0.0.4

### Tech

Flickr Public Feed AngularJS App uses a number of open source projects to work properly:

* [AngularJS]
* [Twitter Bootstrap]


### Installation

A bower.json file is included.

Run the following command in the root directory of the app to install the required bower components:

```sh
$ bower install
```

License
----

MIT

 [AngularJS]: <http://angularjs.org>
 [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>

 [MFP]: <https://github.com/chrisj-skinner/Flickr-Public-Feed-AngularJS-App/blob/master/partials/flickr-feed.html>
 [SFP]: <https://github.com/chrisj-skinner/Flickr-Public-Feed-AngularJS-App/blob/master/partials/flickr-item.html>
