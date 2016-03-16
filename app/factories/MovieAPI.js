"use strict";

MovieApp.factory("UserSearchFactory", ($q, $http) =>
  () =>
    $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get('http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json')
        .success(
          console.log(searchedMovie);
          searchedMovie => resolve(searchedMovie),
          error => reject(error)
        )
    )
);
