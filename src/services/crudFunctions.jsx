// localStorage.setItem('notes', JSON.stringify(data));
const readNotes = () => JSON.parse(localStorage.getItem('notes'));
const saveNotes = (notes) => localStorage.setItem('notes', JSON.stringify(notes));

// export const getMovies = () => (
//   new Promise((resolve) => {
//     const movies = readMovies();
//     simulateRequest(movies)(resolve);
//   })
// );

export const createNote = (noteData) => (
  new Promise((resolve) => {
    let notes = readNotes();
    if (notes) {
      const nextId = notes[notes.length - 1].id + 1;
      const newnote = { id: nextId, ...noteData };
      notes = [...notes, newnote];
    } else {
      notes = [{id: 1, ...noteData}];
    }
    saveNotes(notes);
  })
);

// noteData : {
//   id:
//   noteContent:
//   noteTag:
// }

// export const createNote = (noteData) => {
//   let notes = readNotes();
//   if (notes) {
//     const nextId = notes[notes.length - 1].id + 1;
//     const newnote = { id: nextId, ...noteData };
//     notes = [...notes, newnote];
//   } else {
//     notes = [{id: 1, ...noteData}];
//   }
//   saveNotes(notes);
// }