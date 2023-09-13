import  React, { useContext, useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(()=>{
        fetch("https://movie-api-0fqq.onrender.com/movies")
        .then((response)=>response.json())
        .then((data)=>{
            const movieFromApi=data.map((doc)=>{
                return{
                    id:doc._id,
                    title:doc.Title,
                    description:doc.Description,
                    image:doc.ImagePath,
                    genre:{
                        Name:doc.Genre.Name
                    },
                    director:{
                        Name:doc.Director.Name
                    }
                };
            });
            setMovies(movieFromApi);
        })
    },[]);

    if (selectedMovie) {
        return (
            <MovieView
                movie={selectedMovie}
                onBackClick={() => setSelectedMovie(null)}
            />
        );
    }

    if (movies.length === 0) {
        return <div>This list is empty!</div>;
    }
    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    movie={movie}
                    key={movie.id}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};
