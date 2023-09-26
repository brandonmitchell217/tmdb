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

export interface MovieProps {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: any[];
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
}
