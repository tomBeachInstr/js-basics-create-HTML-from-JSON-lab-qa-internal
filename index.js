document.addEventListener("DOMContentLoaded", function() {
  console.log("== DOMContentLoaded ==");

  let movieData;
  let titanicBtn = document.getElementById("Titanic");
  let terminatorBtn = document.getElementById("Terminator_2");

  titanicBtn.addEventListener('click', function(e) {
    loadMovieData("Titanic");
  })
  terminatorBtn.addEventListener('click', function(e) {
    loadMovieData("Terminator_2");
  })

  function loadMovieData(whichMovie) {
    console.log("== loadMovieData ==");
    if (whichMovie === "Titanic") {
      console.log("--Titanic--");
      movieData = movies.Titanic;
    } else {
      console.log("--Terminator_2--");
      movieData = movies.Terminator_2;
    }
    console.log("movieData:", movieData);
    updatePage(movieData);
  }

  function updatePage(movieData) {
    console.log("== updatePage ==");
    document.getElementById("title").innerHTML = movieData.title;




  }







})
