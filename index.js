document.addEventListener("DOMContentLoaded", function() {
  console.log("== DOMContentLoaded ==");

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
      let movieData = movies.Titanic;
      console.log("movieData:", movieData);
    } else {
      console.log("--Terminator_2--");
    }
  }
})
