const addNote = document.querySelector(".add-notes");




addNote.addEventListener("click",()=>{console.log("Add Note Button clicked"); addnoteFunction();})


const addnoteFunction = (text = "") =>{
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `<div class="tools-bar">
    <i class="fa-solid fa-floppy-disk save"></i>
    <i class="fa-solid fa-trash delete"></i>
  </div>
  <div class="text-area">
    <textarea class="text-box">${text}</textarea>
  </div> `;

  document.querySelector(".note-section").appendChild(note);
  note.querySelector(".note .delete").addEventListener("click",()=>{console.log("Delete Clicked");note.remove();})
  note.querySelector(".note .save").addEventListener("click",()=>{console.log("Save Clicked");saveNotes(); alert("Data saved");})
//saveNotes();
}

 const saveNotes = () =>{
  const notes = document.querySelectorAll(".note-section textarea")
  let myArray = [];
  notes.forEach((note) => {myArray.push(`${note.value}`)});
  console.log(myArray);
  localStorage.setItem("notes", JSON.stringify(myArray));
}

const printDate = () =>{
  let now = new Date()
  document.querySelector(".add-notes h2").innerText = now;
}

printDate();

const getlocalData = () => {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  console.log(lsnotes);
  lsnotes.forEach((notes) => { addnoteFunction(notes);
  });
}

getlocalData();
