"use strict";

MovieApp.controller("getMovieAPICtrl",
[
  "$scope",
  "$location",
  "$http",
  "UserSearchFactory",

  UserSearchFactory().then(
      // Handle resolve() from the promise
      currentMovie => console.log("currentMovie", currentMovie);
      // Handle reject() from the promise
      err => console.log(err)
      ),

])