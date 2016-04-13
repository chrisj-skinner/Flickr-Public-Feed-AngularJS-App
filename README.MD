# Flickr Public Feed AngularJS App
Flickr Public Feed API AngularJS App is a single page AngularJS app that displays a list of flickr feeds through an API call and using JSON data. Directives are utilised to modularize code as well as passing data through directives to minimise code.

- Main feed page: [partials/flickr-feed.html] [MFP]
- Single feed page [partials/flickr-item.html] [SFP]


**Main feed page displays:**

  - Photo
  - Title with internal link to **Single feed**
  - External link to Post Author
  - External link to Photo on Flickr 


**Single feed page displays:**

Feed details are passed through on clicking a feed title with the following details displayed:

  - External link to Post Author
  - Published date
  - Tags
  - Back link to Main feeds page




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
