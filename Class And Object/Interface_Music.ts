// define an interface that represents a record in a music collection
interface MusicRecord {
  artist: string;
  title: string;
  year: number;
}

// define a function that takes a MusicRecord and returns a string in the format "ARTIST - TITLE (YEAR)"
function formatMusicRecord(record: MusicRecord): string {
  return `${record.artist} - ${record.title} (${record.year})`;
}

// test the formatMusicRecord() function
const record: MusicRecord = {
  artist: "The Beatles",
  title: "Sgt. Pepper's Lonely Hearts Club Band",
  year: 1967,
};

const formattedRecord = formatMusicRecord(record);
console.log(formattedRecord); // output: "The Beatles - Sgt. Pepper's Lonely Hearts Club Band (1967)"
