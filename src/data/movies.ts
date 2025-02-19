interface MovieScene {
  imageUrl: string;
  hint?: string;
}

export interface Movie {
  id: number;
  title: string;
  difficulty: 'Facil' | 'Medio' | 'Dificil';
  scenes: MovieScene[];
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Origen",
    difficulty: "Facil",
    scenes: [
      { imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNDExNzM4MV5BMl5BanBnXkFtZTcwNDY0OTk1Mw@@._V1_.jpg" },
      { imageUrl: "https://m.media-amazon.com/images/M/MV5BNjMxNjI1Mjc1OV5BMl5BanBnXkFtZTcwMDY0OTk1Mw@@._V1_.jpg" },
      { imageUrl: "https://m.media-amazon.com/images/M/MV5BMTk1NDM4MDMwMF5BMl5BanBnXkFtZTcwMjY0OTk1Mw@@._V1_.jpg" }
    ]
  },
  {
    id: 2,
    title: "Matrix",
    difficulty: "Facil",
    scenes: [
      { imageUrl: "https://m.media-amazon.com/images/M/MV5BMTYyNDQyOTEyMV5BMl5BanBnXkFtZTcwNTI4MTc4Mw@@._V1_.jpg" },
      { imageUrl: "https://m.media-amazon.com/images/M/MV5BMTU5NTA0OTIxNF5BMl5BanBnXkFtZTcwNjI4MTc4Mw@@._V1_.jpg" },
      { imageUrl: "https://m.media-amazon.com/images/M/MV5BMDEwMGVlODAtYmU5Zi00OGM3LTg1N2YtMjEyNDMxYWY1ZGY2XkEyXkFqcGc@._V1_.jpg" }
    ]
  },
  {
    id: 3,
    title: "Pulp Fiction",
    difficulty: "Facil",
    scenes: [
      { imageUrl: "https://i.imgur.com/JXm8dO7.jpg" },
      { imageUrl: "https://i.imgur.com/4VjYUB7.jpg" },
      { imageUrl: "https://i.imgur.com/YbT8JGh.jpg" }
    ]
  },
 
];

