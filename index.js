document.addEventListener("DOMContentLoaded", e => {
  console.log("== DOMContentLoaded ==");

  let btnT = document.getElementById('Titanic');
  let btnT2 = document.getElementById('Terminator 2');
  let movieData = movies;
  console.log("movieData:", movieData);

  btnT.addEventListener("click", loadTitanic);
  btnT2.addEventListener("click", loadTerminator);

  // ======= loadTitanic =======
  function loadTitanic() {
    console.log("== loadTitanic ==");
    updatePage("Titanic");
  }

  // ======= loadTerminator =======
  function loadTerminator() {
    console.log("== loadTerminator ==");
    updatePage("Terminator 2");
  }

  // ======= updatePage =======
  function updatePage(whichMovie) {
    console.log("== loadTerminator ==");
    console.log("whichMovie:", whichMovie);
    console.log("movieData:", movieData);
    console.log("movieData[whichMovie]:", movieData[whichMovie]);
    console.log("movieData[whichMovie].title:", movieData[whichMovie].title);

    let title = movieData[whichMovie].title;
    let director = movieData[whichMovie].director;
    let genre = movieData[whichMovie].genre;
    let filmRating = movieData[whichMovie].filmRating;
    let poster = movieData[whichMovie].poster;
    let description = movieData[whichMovie].description;
    let audienceScore = movieData[whichMovie].audienceScore;
    let cast = movieData[whichMovie].cast;
    let reviews = movieData[whichMovie].reviews;
    console.log("cast:", cast);

    // ======= update innerHTML =======
    let titleEl = document.getElementById('title');
    console.log("titleEl:", titleEl);
    console.log("title:", title);
    titleEl.innerHTML = title;
    let directorEl = document.getElementById('director');
    directorEl.innerHTML = director;
    let genreEl = document.getElementById('genre');
    genreEl.innerHTML = genre;
    let filmRatingEl = document.getElementById('filmRating');
    filmRatingEl.innerHTML = filmRating;
    let descriptionEl = document.getElementById('description');
    descriptionEl.innerHTML = description;
    let audienceScoreEl = document.getElementById('audienceScore');
    audienceScoreEl.innerHTML = audienceScore;

    // ======= update image source =======
    let posterEl = document.getElementById('poster');
    posterEl.setAttribute("src", poster);

    // ======= loop through array =======
    let castEl = document.getElementById('cast');
    let castString = "";
    for (var i = 0; i < cast.length; i++) {
      console.log("cast[i]:", cast[i]);
      castString += "<p class='listItem'>" + cast[i].role + ": " + cast[i].actor + "</p>";
    }
    castEl.innerHTML = castString;
    var castPs = document.querySelectorAll('#cast p')
    for (var i = 0; i < castPs.length; i++) {
      castPs[i].style.height = "14px";
      castPs[i].style.margin = "10px";
    }

    let reviewsEl = document.getElementById('reviews');
    let reviewsString = "";
    for (var i = 0; i < reviews.length; i++) {
      console.log("reviews[i]:", reviews[i]);
      reviewsString += "<p class='listItem'>" + reviews[i].username + ": " + reviews[i].content + "</p>";
    }
    reviewsEl.innerHTML = reviewsString;
    var reviewsPs = document.querySelectorAll('#reviews p')
    for (var i = 0; i < reviewsPs.length; i++) {
      reviewsPs[i].style.height = "14px";
      reviewsPs[i].style.margin = "10px";
    }
  }
})
