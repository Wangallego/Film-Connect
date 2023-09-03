import { useEffect, useState } from 'react';
import Rating from '../components/Rating'; 

const apiKey = '5971381d1bf228fd40f265bd75f03b1b';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (movies.length === 0) {
      const fetchMovies = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=es&page=2&sort_by=popularity.desc`
          );

          if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status}`);
          }

          const data = await response.json();
          setMovies(data.results);
          setIsLoading(false);
        } catch (error) {
          console.error('Error:', error);
          setIsLoading(false);
        }
      };

      fetchMovies();
    }
  }, [movies]);
  

  // Estado para controlar la expansión de cada tarjeta de película
  const [expandedMovies, setExpandedMovies] = useState({});

  // Función para manejar la expansión de una película específica
  const toggleExpansion = (movieId) => {
    setExpandedMovies((prevExpandedMovies) => ({
      ...prevExpandedMovies,
      [movieId]: !prevExpandedMovies[movieId],
    }));
  };
  
  return (
    <div className="w-full h-full flex justify-center items-center ">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 space-x-4 h-[2rem] relative" id="movies-container">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={`shadow-md flex flex-col justify-start items-center border rounded-md p-6 w-[18rem] h-[28rem] cursor-pointer ${
                expandedMovies[movie.id] ? 'expanded-card' : 'collapsed'
              }`}
              onClick={() => toggleExpansion(movie.id)} // Toggle expansion on click
            >
              <div className="w-full h-[16rem] relative ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <Rating voteAverage={movie.vote_average} />
              </div>
              <div className="mt-4 text-left flex">
                <h2 className="mt-2 text-left text-xl font-semibold">{movie.title}</h2>
              </div>

  {expandedMovies[movie.id] && (
    <div className="expanded-overlay">
      <div className="expanded-card">
        <div className="w-full h-[16rem] relative">
          {/* Contenido de la tarjeta expandida */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-xl"
          />
          <Rating voteAverage={movie.vote_average} />
        </div>
        <div className="mt-4 text-left flex">
          <h2 className="mt-2 text-left text-xl font-semibold">{movie.title}</h2>
        </div>
        {/* Mostrar detalles adicionales solo si la película está expandida */}
        {expandedMovies[movie.id] && (
          <>
            <div className="w-full h-1 bg-slate-600 mt-2"></div>
            <div className="flex items-center justify-between space-x-4 mt-2">
              <p>Fecha de Lanzamiento: {movie.release_date}</p>
              <strong>Rating: {movie.vote_average}</strong>
            </div>
            <p className="mt-2">{movie.overview}</p>
          </>
        )}
      </div>
    </div>
  )}

              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  export default MovieList;
