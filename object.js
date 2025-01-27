const myFavoriteMovie = {
  title: "Friends",
  year: 1994,
  director: "David Crane, Marta Kauffman",
  actors:
    "Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, David Schwimmer",
  rating: 8.9,
  timesWatched: 5,

  recommend() {
    console.log(
      `I highly recommend watching "${this.title}"! It's a classic TV show.`,
    );
  },

  watch() {
    this.timesWatched++;
    console.log(`You've watched "${this.title}" ${this.timesWatched} times.`);
  },

  setRating(newRating) {
    this.rating = newRating;
    console.log(
      `The rating for "${this.title}" has been updated to ${newRating}.`,
    );
  },

  addActor(actorName) {
    this.actors += `, ${actorName}`;
    console.log(
      `"${actorName}" has been added to the list of actors for "${this.title}".`,
    );
  },

  isPopular() {
    return this.rating >= 8;
  },

  summary() {
    console.log(
      `Title: ${this.title}\nYear: ${this.year}\nDirector: ${this.director}\nActors: ${this.actors}\nRating: ${this.rating}\nTimes Watched: ${this.timesWatched}\n\nSummary: "Friends" is a popular TV show that aired from 1994 to 2004. It revolves around a group of six friends living in New York City, played by Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, and David Schwimmer. The show follows their personal and professional lives, relationships, and humorous adventures. With a rating of 8.9 on IMDb, "Friends" has become a beloved and iconic show that continues to captivate audiences worldwide.`,
    );
  },
};

const newMovie = Object.assign({}, myFavoriteMovie);
// const newMovie = {...myFavoriteMovie};

// Modify properties of the new object
newMovie.title = "Suits TV Show";
newMovie.year = 2011;
newMovie.director = "Aaron Korsh";
newMovie.actors =
  "Gabriel Macht, Patrick J. Adams, Meghan Markle, Sarah Rafferty, Gina Torres, Rick Hoffman";
newMovie.rating = 8.5;
newMovie.timesWatched = 3;
newMovie.myRating = 9.2;

// Test the methods and properties
newMovie.recommend();
newMovie.watch();
newMovie.setRating(8.8);
newMovie.addActor("Dulé Hill");
console.log(`Is Popular: ${newMovie.isPopular()}`);
newMovie.summary();

console.log(newMovie);
console.log(myFavoriteMovie);
