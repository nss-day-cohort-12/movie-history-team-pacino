"use strict";

MovieApp.factory("MovieStorage", ($q, $http, firebaseURL) =>
  () =>
    $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get(`${firebaseURL}/movies/.json`)
        .success(
          moviesObject => resolve(moviesObject),
          error => reject(error)
        )
    )
);
