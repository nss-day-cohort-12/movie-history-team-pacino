"use strict";

MovieApp.factory("MovieStorage", ($q, $http, firebaseURL) =>
  () =>
    $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get(`${firebaseURL}/movies/.json`)
        .then(
          moviesObject => resolve(moviesObject.data),
          error => reject(error)
        )
    )
);
