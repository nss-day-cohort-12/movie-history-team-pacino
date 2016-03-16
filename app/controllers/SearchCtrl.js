"use strict";

MovieApp.controller("SearchCtrl",
[
  "$scope",
  "$location",
  "$http",
  "firebaseURL",


  function ($scope, $location, $http, firebaseURL) {

    // Default property values for keys bound to input fields
    // $scope.newMovie = {
    //   name: "",
    //   year: "",
    //   actors: "",
    //   rating: "",
    //   watched: false
    // };

    $scope.search = "";
    $scope.searchResultObj = "";

    $scope.searchMovie = function() {

        $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&y=&plot=short&r=json")
        .then(function(response){ $scope.searchResultObj = response.data;
        console.log("response.data", response.data);
        console.log("response.data.Poster", response.data.Poster);

        });

      // // var searchTerm = frozen;
      // UserSearchFactory().then(
      //   serachedMovieObject => console.log("serachedMovieObject", serachedMovieObject),
      //   error => console.log(error)
      // )

    };

    // Function bound to the Add Song button in the view template
    $scope.addMovie = function () {
      console.log("searchResultObj.Title", $scope.searchResultObj.Title);

      // POST this movie to firebase and add the user's ID as a property
      $http.post(
        // "https://nss-demo-instructor.firebaseio.com/songs.json", //***original line***//
        // POST obj to firebase
        `${firebaseURL}/movies.json`, // new line

        // Remember to stringify objects/arrays before
        // sending them to an API
        JSON.stringify({
          title: searchResultObj.Title,
          year: searchResultObj.Year,
          actors: searchResultObj.Actors,
          rating: 0,
          watched: false
        })

      // The $http.post() method returns a promise, so you can use then()
      ).then(
        // should probably add success popup
        // Materialize.toast('Movie successfully added to list', 2000, 'testClassForCss');
        // () => $location.url("/list/"),      // Handle resolve
        () => console.log("added"),      // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };

  }
  
]);
