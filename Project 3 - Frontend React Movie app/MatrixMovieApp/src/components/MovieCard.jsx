import React from 'react';



const MovieCard = ({movie: {title, id, vote_average, poster_path, release_date, original_language}}) => {
    const youtubeSearch = "https://www.youtube.com/search?q="
    const moviePoster = 'https://image.tmdb.org/t/p/w500'

    return (



        <a href={`${youtubeSearch}${title}`}>
            <div className="movie-card">
                <img src={poster_path ? `${moviePoster}/${poster_path}` : '/no-movie.png'} alt={title}/>

                <div className="mt-4">
                    <h3>{title}</h3>

                </div>

                <div className="content">
                    <div className="rating">

                        <img src="star.svg" alt="Rating" />
                        <p>
                            {vote_average ? vote_average.toFixed(1) : 'N/A'}
                        </p>

                        <span>•</span>

                        <p className="year">
                            {release_date}
                        </p>

                    </div>
                </div>

            </div>
        </a>



    )

}

export default MovieCard