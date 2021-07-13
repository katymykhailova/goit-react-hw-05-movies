import {
  SectionMovie,
  MovieImg,
  MovieTitle,
  MovieInfo,
  MovieInfoList,
  MovieInfoItem,
  MovieInfoText,
  MovieAbout,
  MovieAboutTitle,
  MovieAboutText,
} from './MovieDetails.styled';

export default function MovieDetails({ movie }) {
  return (
    <SectionMovie>
      <MovieImg src={movie.poster_path} alt={movie.original_title} />
      <MovieInfo>
        <MovieTitle>{movie.original_title}</MovieTitle>

        <MovieInfoList>
          <MovieInfoItem>
            <MovieInfoText>Vote/Votes</MovieInfoText>
            <span>{movie.vote_average}</span>
            <span>/</span>
            <span>{movie.vote_count}</span>
          </MovieInfoItem>
          <MovieInfoItem>
            <MovieInfoText>Popularity</MovieInfoText>
            <span>{movie.popularity}</span>
          </MovieInfoItem>
          <MovieInfoItem>
            <MovieInfoText>Original title</MovieInfoText>
            <span>{movie.original_title}</span>
          </MovieInfoItem>
          <MovieInfoItem>
            <MovieInfoText>Genre</MovieInfoText>
            {movie.genres.map(genre => genre.name).join(', ')}
          </MovieInfoItem>
        </MovieInfoList>

        <MovieAbout>
          <MovieAboutTitle>About</MovieAboutTitle>
          <MovieAboutText>{movie.overview}</MovieAboutText>
        </MovieAbout>
      </MovieInfo>
    </SectionMovie>
  );
}
