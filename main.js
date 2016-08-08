$(document).on('ready', function () {
  console.log('test');
});

function searchMovie (title) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      method: 'GET',
      url: 'https://www.omdbapi.com/?t=' + title
    }).done(data => {
      resolve(data);
    })
  })
}

// movie is data. Resolve returns it to this function
searchMovie('Frozen').then(function(movie) {
  console.log(movie);
})

function searchByYear(year) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      method: 'GET',
      url: 'https://www.omdbapi.com/?s=all&y=' + year
    }).done(function (movies) {
      console.log(movies);
      resolve(movies)
    })
  })
}

searchByYear(2010).then(function(movies) {
  var title = movies.Search[1].Title
  // calls the serachMovie function and passes through the title from search year
  return searchMovie(title);
}).then(function (movie) {
  console.log(movie);
})
