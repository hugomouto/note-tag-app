// localStorage.setItem('notes', JSON.stringify(data));
const readNotes = () => JSON.parse(localStorage.getItem('notes'));
const saveNotes = (notes) => localStorage.setItem('notes', JSON.stringify(notes));


//CREATE
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

// READ
export const getNotes = () => (
  new Promise((resolve) => {
    const notes = readNotes();
    resolve(notes);
  })
);

export const getNote = (id) => (
  new Promise((resolve) => {
   const notes = readNotes();
   const noteToReturn = notes.find( note => Number(note.id) === Number(id)) 
   resolve(noteToReturn);
  })
)

// UPDATE
export const updateNote = (updatedNote) => (
  new Promise((resolve) => {
    let notes = readNotes()
    let noteToUpdate = notes.find( note => Number(note.id) === Number(updatedNote.id));
    notes[notes.indexOf(noteToUpdate)] = {...updatedNote}
    saveNotes(notes);
    resolve('Success')
  })
)