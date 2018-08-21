document.addEventListener("DOMContentLoaded", function() {
  console.log("== DOMContentLoaded ==");
  console.log("movies:", movies);

  let titanicBtn = document.getElementById("Titanic");
  let terminatorBtn = document.getElementById("Terminator_2");

  titanicBtn.addEventListener('click', loadMovieData);
  terminatorBtn.addEventListener('click', loadMovieData);

  function loadMovieData() {
    console.log("== loadMovieData ==");
  }
})
