// Ambil genre
async function getgenre() {
  {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=44069dd5e3a0de5d4d7ff0643cb336a0"
    );
    const genre = response.data.genres;
    return genre;
  }
}
// ngereverse ids genre menjadi genre
function reverseids(ids, genre) {
  const genres = ids.map((id) => {
    const genreObj = genre.find((el) => id === el.id);
    return genreObj.name;
  });
  return genres;
}

async function getPopularMovies() {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=44069dd5e3a0de5d4d7ff0643cb336a0"
    );
    const movies = response.data.results;
    let reversegenre = await getgenre();

    let tampung = [];
    tampung = movies.map((movie) => {
      let data = {};
      // Dapatin gambar
      Object.assign(data, {
        gambar: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
      // Dapatin judul
      Object.assign(data, {
        judul: movie.title,
      });
      // dapatin genre dan memasukkan fungsi reverseids()
      Object.assign(data, {
        genre: reverseids(movie.genre_ids, reversegenre),
      });

      return data;
    });

    tampung.forEach((film, index) => {
      const fild = document.createElement("article");

      fild.innerHTML = `
    <a href="/code/detail_movie.html?id=${movies[index].id}">
      <img width="250px" src="${film.gambar}" alt="${film.judul}" />
    </a>
    <h1>${film.judul}</h1>
    <div class="genre"></div>
  `;

      const genrediv = fild.querySelector(".genre");
      film.genre.forEach((ele) => {
        const tombol = document.createElement("button");
        tombol.textContent = ele;
        genrediv.append(tombol);
      });

      const tiga_image = document.querySelector(".three_image");
      tiga_image.append(fild);
    });
  } catch (error) {
    console.log("Error fetching popular movies:", error);
  }
}
getPopularMovies();
