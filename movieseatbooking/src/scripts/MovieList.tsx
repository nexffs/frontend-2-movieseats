export type Movie = {
    id: number;
    Title: string;
    Price: number;
    Year?: string;
    Poster?: string;
};

type MovieListProps = {
    movies: Movie[] | null;
    onMovieChange?: (movieId: number) => void;
    onPriceChange?: (price: number) => void;
    onSelectedMovie?: (movie: Movie) => void;
};

const MovieList = ({ movies, onMovieChange, onPriceChange, onSelectedMovie }: MovieListProps) => {
    return (
        <div className="movie-list">
            <select
                name="movie"
                id="movie"
                onChange={(e) => {
                    const selectedMovie = movies?.find((movie) => String(movie.id) === e.target.value);
                    if (!selectedMovie) {
                        onMovieChange?.(0);
                        onPriceChange?.(0);
                        return;
                    }

                    onSelectedMovie?.(selectedMovie);
                    onMovieChange?.(selectedMovie.id);
                    onPriceChange?.(selectedMovie.Price);
                }}
            >

            {movies?.map((movie) => (
                <option key={movie.id} value={movie.id}>
                    {movie.Title} ({movie.Price} kr)
                </option>
            ))}    
            </select>
        </div>
    );
};

export default MovieList;