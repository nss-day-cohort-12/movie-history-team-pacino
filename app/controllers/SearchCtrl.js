"use strict";

MovieApp.controller("SearchCtrl",
[
  "$scope",
  "$location",
  "$http",
  "firebaseURL",


  function ($scope, $location, $http, firebaseURL) {

    // Default property values for keys bound to input fields
    $scope.newMovie = {
      name: "",
      year: "",
      actors: "",
      rating: "",
      watched: false
    };

    $scope.userName = "";

    // $scope.searchMovie = function() {

    //     $http
    //       // batman test
    //       .get(`http://www.omdbapi.com/?t=batman&y=&plot=short&r=json`)
    //       .then(
    //         moviesObject => resolve(moviesObject.data),
    //         error => reject(error)
    //       );

    // };

    // Function bound to the Add Song button in the view template
    $scope.addMovie = function () {

      // POST the song to Firebase
      $http.post(
        // "https://nss-demo-instructor.firebaseio.com/songs.json", original line
        `${firebaseURL}/${$scope.currentUser}/movies`, // new line

        // Remember to stringify objects/arrays before
        // sending them to an API
        JSON.stringify({
          name: $scope.newSong.name,
          album: {
            name: $scope.newSong.albumName,
            year: $scope.newSong.albumYear,
          },
          artist: $scope.newSong.artist
        })

      // The $http.post() method returns a promise, so you can use then()
      ).then(
        // should probably add success popup
        // Materialize.toast('Movie successfully added to list', 2000, 'testClassForCss');
        () => $location.url("/list/"),      // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };

  }
  
]);
