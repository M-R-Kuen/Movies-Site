const tempData = [
  {
    title: "Home Alone",
    year: 1991,
    director: "Chris Columbus",
    duration: "103 min",
    genre: "Comedy, Family",
    rate: 7.6,
    poster:
      "https://www.joblo.com/wp-content/uploads/2010/05/1992-home-alone-2-lost-in-new-york-poster1-1.jpg",
    id: 1,
  },
  {
    title: "Jurassic Park",
    year: 1993,
    director: "Steven Spielberg",
    duration: "127 min",
    genre: "Adventure, Sci-Fi",
    rate: 8.1,
    poster:
      "https://www.joblo.com/wp-content/uploads/2012/11/jurassic-park3d-poster-1-400x600.jpg",
    id: 2,
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski, Lilly Wachowski",
    duration: "136 min",
    genre: "Action, Sci-Fi",
    rate: 8.7,
    poster:
      "https://www.joblo.com/wp-content/uploads/2010/06/1999-poster-matrix-1-1.jpg",
    id: 3,
  },
  {
    title: "Titanic",
    year: 1997,
    director: "James Cameron",
    duration: "195 min",
    genre: "Drama, Romance",
    rate: 7.8,
    poster:
      "https://www.joblo.com/wp-content/uploads/1997/12/1997-titanic-poster1-1.jpg",
    id: 4,
  },
  {
    title: "The Lord of the Rings",
    director: "Peter Jackson",
    year: 2001,
    duration: "2h 15min",
    genre: ["Action", "Fantasy", "Adventure"],
    rate: 8.9,
    poster:
      "https://www.joblo.com/wp-content/uploads/2010/03/2001-poster-lord_of_the_rings_the_fellowship_of_the_ring-3-1.jpg",
  },
  {
    title: "Batman",
    year: 2005,
    director: "Christopher Nolan",
    duration: "3h",
    genre: ["Action", "superHeroes"],
    rate: 9,
    poster:
      "https://www.joblo.com/wp-content/uploads/2010/05/2005-batman_begins-5-1.jpg",
  },
  {
    title: "Back to the Future",
    year: 1985,
    director: "Robert Zemeckis",
    duration: "2h 20min",
    genre: ["Adventure", "Comedy", "Fantasy"],
    rate: 9.7,
    poster:
      "https://www.joblo.com/wp-content/uploads/1985/07/1985-back-to-the-future-poster1-1.jpg",
  },
  // Add your new movie here
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Drama"],
    rate: 9.3,
    poster:
      "https://www.joblo.com/wp-content/uploads/2010/05/1994-the-shawshank-redemption-poster1-1-400x600.jpg",
  },
];
const moviesContainer = document.getElementById("cardContenedor");

function filterMovieByTitle(title, tempData) {
  const filteredMovies = tempData.filter((movie) => {
    return movie.title.toLowerCase().includes(title.toLowerCase());
  });

  moviesContainer.innerHTML = "";

  // Si se encontró alguna película con el título buscado, agregar la tarjeta correspondiente
  if (filteredMovies.length > 0) {
    const movie = filteredMovies[0]; // Tomamos solo la primera película encontrada
    moviesContainer.appendChild(createMovieCard(movie));
  } else {
    // Si no se encontraron películas, mostrar un mensaje indicando que no se encontró ninguna
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "No se encontraron resultados";
    noResultsMessage.classList.add("noResult");
    moviesContainer.appendChild(noResultsMessage);
  }
}

// Escuchar el evento de cambio en el input de búsqueda
movieTitle.addEventListener("input", (event) => {
  const searchTerm = event.target.value.trim(); // Obtener el valor del input y limpiar los espacios en blanco al principio y al final
  if (searchTerm !== "") {
    filterMovieByTitle(searchTerm, tempData);
  } else {
    // Si el input está vacío, mostrar todas las películas nuevamente
    allMoviesHtml(tempData);
  }
});

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("cardC");

  const h3 = document.createElement("h3");
  h3.textContent = movie.title;
  h3.classList.add("titleStyle");

  const p = document.createElement("p");
  p.textContent = `Year: ${movie.year}, Director: ${movie.director}, Duration: ${movie.duration}, Genre: ${movie.genre}, Rate: ${movie.rate}`;
  p.classList.add("pStyle");

  const img = document.createElement("img");
  img.src = movie.poster;
  img.classList.add("poster");

  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(img);

  return card;
}

function allMoviesHtml() {
  const list = tempData;

  const moviesHtml = list.map((movie) =>
    moviesContainer.appendChild(createMovieCard(movie))
  );
  // Crear y agregar las tarjetas de películas al contenedor
  moviesHtml.forEach((card) => {
    moviesContainer.appendChild(card);
  });
}

allMoviesHtml();

// /**
//  * ! aca arranco con lo de la api
//  */

// const moviesContainer = document.getElementById("cardContenedor");

// $.get("https://students-api.up.railway.app/movies", (data, status) => {
//   allMoviesHtml(data); // Procesar los datos después de cargarlos
// });

// function createMovieCard(movie) {
//   const card = document.createElement("div");
//   card.classList.add("cardC");

//   const h3 = document.createElement("h3");
//   h3.textContent = movie.title;
//   h3.classList.add("titleStyle");

//   const p = document.createElement("p");
//   p.textContent = `Year: ${movie.year}, Director: ${movie.director}, Duration: ${movie.duration}, Genre: ${movie.genre}, Rate: ${movie.rate}`;
//   p.classList.add("pStyle");

//   const img = document.createElement("img");
//   img.src = movie.poster;
//   img.classList.add("poster");

//   card.appendChild(h3);
//   card.appendChild(p);
//   card.appendChild(img);

//   return card;
// }

// function allMoviesHtml(data) {
//   const moviesHtml = data.map((movie) =>
//     moviesContainer.appendChild(createMovieCard(movie))
//   );
//   // Crear y agregar las tarjetas de películas al contenedor
//   moviesHtml.forEach((card) => {
//     moviesContainer.appendChild(card);
//   });
// }
// /**
//  * ! ACA INTENTO FILTRAR CON API

// /*PARA FILTRAR CON API:
// $.get("https://students-api.up.railway.app/movies", (data, status) => {
//   allMoviesHtml(data); // Procesar los datos después de cargarlos
//   filtermovie(data); // Asignar el evento input después de cargar los datos
// });

// function filtermovie(data) {
//   const movieSearchInput = document.getElementById("movieTitle");
//   movieSearchInput.addEventListener("input", (event) => {
//     const searchTerm = event.target.value.trim();
//     if (searchTerm !== "") {
//       filterMovieByTitle(searchTerm, data);
//     } else {
//       allMoviesHtml(data);
//     }
//   });
// }

//  */
