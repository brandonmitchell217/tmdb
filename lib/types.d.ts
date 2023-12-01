export interface MediaQuery {
  page: number;
  results: MovieProps[] | TvResultsProps[];
}

export interface DataProps {
  page: number;
  results: MovieProps[] | TvResultsProps[] | PersonProps[] | any;
  total_pages?: number;
  total_results?: number;
}

export interface GenreProps {
  id: number;
  name: string;
}

export interface MovieProps {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: GenreProps[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TvResultsProps {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: any[];
  id: number;
  name: string;
  origin_country: any[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface PersonProps {
  adult: boolean;
  gender: number;
  id: number;
  known_for: any[];
  known_for_department: string;
  media_type: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  job?: string;
}

export interface PersonDetailsProps {
  adult: boolean;
  also_known_as: any[];
  biography: string;
  birthday: string;
  deathday?: string;
  gender: number;
  homepage?: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path?: string;
}

export interface SocialProps {
  facebook_id?: string;
  imdb_id?: string;
  instagram_id?: string;
  tiktok_id?: string;
  twitter_id?: string;
  wikidata_id?: string;
  youtube_id?: string;
}
