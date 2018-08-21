document.addEventListener("DOMContentLoaded", function() {
  console.log("== DOMContentLoaded ==");

  let titanicBtn = document.getElementById("Titanic");
  let terminatorBtn = document.getElementById("Terminator_2");

  titanicBtn.addEventListener('click', loadMovieData);

  function loadMovieData() {
    console.log("== loadMovieData ==");
  }


})
