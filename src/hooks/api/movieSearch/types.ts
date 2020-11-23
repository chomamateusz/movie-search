export interface SearchResultItem {
  Title: string,
  Year: string,
  imdbID: string,
  Type: 'movie' | 'series' | 'episode',
  Poster: string,
}

export type SearchResultItems = SearchResultItem[]

export interface SearchResult {
  Search: SearchResultItems,
  totalResults: string,
  Response: string,
}
