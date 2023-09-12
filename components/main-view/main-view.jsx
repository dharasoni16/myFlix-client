import { useContext, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Kabhi Khushi Kabhie Gham",
            description:
                "Kabhi Khushi Kabhie Gham... (Sometimes Happiness, Sometimes Sadness), also known by the initials K3G, is a 2001 Hindi-language family drama film written and directed by Karan Johar and produced by Yash Johar under his banner Dharma Productions. The film has an ensemble cast, starring Amitabh Bachchan, Jaya Bachchan, Shah Rukh Khan, Kajol, Hrithik Roshan, and Kareena Kapoor, with Rani Mukerji in an extended guest appearance. It tells the story of an Indian multimillionaire family, which faces troubles and misunderstandings over their adopted son's marriage to a girl belonging to a lower socio-economic group than them. The film score was composed by Babloo Chakravarty with the music composed by Jatin–Lalit, Sandesh Shandilya and Aadesh Shrivastava and lyrics written by Sameer and Anil Pandey.",
            genre: "Drama",
            director: "Karan Johar",
            image:
                "https://upload.wikimedia.org/wikipedia/en/4/4d/Kabhi_Khushi_Kabhie_Gham..._poster.jpg",
            featured: "true",
        },
        {
            id: 2,
            title: "Hungama",
            description:
                "Hungama (transl. Ruckus) is a 2003 Indian Hindi-language comedy film directed by Priyadarshan and produced by Venus Records & Tapes. The film stars Akshaye Khanna, Paresh Rawal, Aftab Shivdasani and Rimi Sen, while Shakti Kapoor, Rajpal Yadav, Tiku Talsania and Shoma Anand play supporting roles. It is a remake of Priyadarshan's own 1984 Malayalam film Poochakkoru Mookkuthi which itself was based on the 1980 Telugu movie Gopal Rao Gari Ammayi.[1] It was also reported to have been inspired by the plot elements of Charles Dickens's play The Strange Gentleman.",
            genre: "Comedy",
            director: "Priyadarshan",
            image:
                "https://upload.wikimedia.org/wikipedia/en/b/b5/Hungama_poster.jpg",
            featured: "true",
        },
        {
            id: 3,
            title: "Airlift",
            description:
                "Airlift is a 2016 Indian Hindi-language thriller drama film directed by Raja Krishna Menon starring Akshay Kumar and Nimrat Kaur, that follows Ranjit Katyal (played by Kumar), a Kuwait-based businessman as he carries out the evacuation of Indians based in Kuwait during the Invasion of Kuwait by Saddam Hussein's Iraq which lead to the beginning of the Gulf War. The film was jointly produced by Abundantia Entertainment, Cape of Good Films, Emmay Entertainment, Hari Om Entertainment, T-Series and Viacom 18 Motion Pictures on a total budget of ₹320 million.The plot is adapted from real life story of a Kuwait-based Malayali businessman Mathunny Mathews.",
            genre: "Thriller",
            director: "Raja Krishna Menon",
            image:
                "https://upload.wikimedia.org/wikipedia/en/3/35/Airlift_poster.jpg",
            featured: "true",
        },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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
