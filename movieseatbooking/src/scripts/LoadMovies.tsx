import { useEffect, useRef, useState } from "react";
import MovieList, { type Movie } from "./MovieList";

type MoviesProps = {
    onMovieChange?: (movieId: number) => void;
    onPriceChange?: (price: number) => void;
    onSelectedMovie?: (movie: Movie) => void;
};

const Movies = ({ onMovieChange, onPriceChange, onSelectedMovie }: MoviesProps) => {
    const [movies, setMovies] = useState<Movie[] | null>(null);
    const hasInitializedSelection = useRef(false);

    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then((res) => {
                return res.json() as Promise<Movie[]>;
            })
            .then((data) => {
                setMovies(data);
                if (hasInitializedSelection.current) {
                    return;
                }

                const firstMovie = data?.[0];
                if (!firstMovie) {
                    onMovieChange?.(0);
                    onPriceChange?.(0);
                    return;
                }

                hasInitializedSelection.current = true;
                onSelectedMovie?.(firstMovie);
                onMovieChange?.(firstMovie.id);
                onPriceChange?.(firstMovie.Price);
            });
    }, [onMovieChange, onPriceChange, onSelectedMovie]);

    return (
        <div className="Movies">
            <MovieList
                movies={movies}
                onMovieChange={onMovieChange}
                onPriceChange={onPriceChange}
                onSelectedMovie={onSelectedMovie}
            />
        </div>
    )
};

export default Movies;