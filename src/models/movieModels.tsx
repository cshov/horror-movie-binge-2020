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
