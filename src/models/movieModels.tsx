export type MoviesList = {
    Movies: MovieObject[];
};

export type MovieObject = {
  Title: string;
  Year: number;
  Notes?: string | undefined | null;
  Series?: string | undefined | null;
};

export type YearObject = {
    Year: number;
    Total: number;
};

export type DecadesObject = {
    1900: number;
    1910: number;
    1920: number;
    1930: number;
    1940: number;
    1950: number;
    1960: number;
    1970: number;
    1980: number;
    1990: number;
    2000: number;
    2010: number;
    2020: number;

}
