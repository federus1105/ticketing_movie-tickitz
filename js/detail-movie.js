const apiKey = "44069dd5e3a0de5d4d7ff0643cb336a0";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

const posterImg = document.querySelector(".lefthead img");
const titleElem = document.querySelector(".right h3");
const genreContainer = document.querySelector(".right .genre");
const releaseDateElem = document.querySelector(".detail div:nth-child(1) p");
const directorElem = document.querySelector(".detail div:nth-child(2) p");
const durationElem = document.querySelector(".detail div:nth-child(3) p");
const castsElem = document.querySelector(".detail div:nth-child(4) p");
const synopsisElem = document.querySelector(".word p");

async function getMovieDetail() {
  try {
    const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

    const [detailRes, creditRes] = await Promise.all([
      axios.get(detailUrl),
      axios.get(creditsUrl),
    ]);

    const movie = detailRes.data;
    // Set background header pakai backdrop_path
    const header = document.querySelector("header");
    header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
    header.style.backgroundRepeat = "no-repeat";

    // hapus img di dalam header agar tidak numpuk
    const imgInsideHeader = header.querySelector("img");
    if (imgInsideHeader) {
      imgInsideHeader.remove();
    }
    const credits = creditRes.data;

    posterImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    titleElem.textContent = movie.title;

    // Isi genre
    genreContainer.innerHTML = "";
    movie.genres.forEach((g) => {
      const btn = document.createElement("button");
      btn.textContent = g.name;
      genreContainer.appendChild(btn);
    });

    // Release date
    releaseDateElem.textContent = new Date(movie.release_date).toDateString();

    // Duration
    const hours = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime % 60;
    durationElem.textContent = `${hours} hours ${minutes} minutes`;

    // Director
    const director = credits.crew.find((person) => person.job === "Director");
    directorElem.textContent = director ? director.name : "Unknown";

    // Cast (ambil 3–4 teratas)
    const casts = credits.cast
      .slice(0, 4)
      .map((c) => c.name)
      .join(", ");
    castsElem.textContent = casts;

    // Synopsis
    synopsisElem.textContent = movie.overview;
  } catch (err) {
    console.error("Gagal mengambil detail movie:", err);
  }
}

getMovieDetail();
