export interface HNQuery {
    hits:                Hit[];
    nbHits:              number;
    page:                number;
    nbPages:             number;
    hitsPerPage:         number;
    exhaustiveNbHits:    boolean;
    exhaustiveTypo:      boolean;
    exhaustive:          Exhaustive;
    query:               Query;
    params:              string;
    processingTimeMS:    number;
    processingTimingsMS: ProcessingTimingsMS;
    serverTimeMS:        number;
}

export interface Exhaustive {
    nbHits: boolean;
    typo:   boolean;
}

export interface Hit {
    created_at:       Date;
    title:            null;
    url:              null;
    author:           string;
    points:           null;
    story_text:       null;
    comment_text:     string;
    num_comments:     null;
    story_id:         number;
    story_title:      string;
    story_url:        null | string;
    parent_id:        number;
    created_at_i:     number;
    _tags:            string[];
    objectID:         string;
    _highlightResult: HighlightResult;
}

export interface HighlightResult {
    author:       Author;
    comment_text: Author;
    story_title:  Author;
    story_url?:   Author;
}

export interface Author {
    value:             string;
    matchLevel:        MatchLevel;
    matchedWords:      Query[];
    fullyHighlighted?: boolean;
}

export enum MatchLevel {
    Full = "full",
    None = "none",
}

export enum Query {
  Angular = "angular",
  React = "reactjs",
  Vue = "vuejs",
}

export interface ProcessingTimingsMS {
    afterFetch: AfterFetch;
    fetch:      Fetch;
    request:    Request;
    total:      number;
}

export interface AfterFetch {
    format: Format;
    total:  number;
}

export interface Format {
    highlighting: number;
    total:        number;
}

export interface Fetch {
    total: number;
}

export interface Request {
    roundTrip: number;
}
