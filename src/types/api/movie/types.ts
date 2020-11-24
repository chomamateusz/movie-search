export interface MovieRating {
  Source: string,
  Value:  string,
}

export type MovieRatings = MovieRating[]
export type MovieType = 'movie' | 'series' | 'episode'

export interface MovieItem {
  Title:      string,
  Year:       string,
  Rated:      string,
  Released:   string,
  Runtime:    string,
  Genre:      string,
  Director:   string,
  Writer:     string,
  Actors:     string,
  Plot:       string,
  Language:   string,
  Country:    string,
  Awards:     string,
  Poster:     string,
  Ratings:    MovieRatings,
  Metascore:  string,
  imdbRating: string,
  imdbVotes:  string,
  imdbID:     string,
  Type:       MovieType,
  DVD:        string,
  BoxOffice:  string,
  Production: string,
  Website:    string,
  Response:   string,
}
