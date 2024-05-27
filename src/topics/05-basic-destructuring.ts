interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const { song: anotherSong, songDuration: duration /*details:{author}*/ } =
  audioPlayer;
const { author } = audioPlayer.details;

// console.log("Song:", anotherSong);
// console.log("Duration:", duration);
// console.log("Author:", author);
const [p1, p2, trunks = "not found"]: string[] = ["Goku", "Vegeta"];
//const trunks = dbz[2] || "No hay personaje";
console.log("Personaje 3:", trunks);

export {};
