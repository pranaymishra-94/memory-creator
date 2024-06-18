// Get the elements from the document
const input = document.getElementById("input");
const button = document.getElementById("button");
const notes = document.getElementById("notes");

// Create an array to store the notes
let notesArray = [];

// Add an event listener to the button
button.addEventListener("click", function() {
  // Get the value of the input
  let note = input.value;

  // Check if the input is not empty
  if (note) {
    // Add the note to the array
    notesArray.push(note);

    // Clear the input
    input.value = "";

    // Render the notes
    renderNotes();
  }
});

// Define a function to render the notes
function renderNotes() {
  // Clear the notes container
  notes.innerHTML = "";

  // Loop through the notes array
  for (let i = 0; i < notesArray.length; i++) {
    // Create a div element for each note
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerText = notesArray[i];

    // Create a span element for the edit icon
    let editSpan = document.createElement("span");
    editSpan.className = "edit";
    editSpan.innerHTML = "<i class='fas fa-edit'></i>";

    // Add an event listener to the edit icon
    editSpan.addEventListener("click", function() {
      // Get the note text
      let noteText = noteDiv.innerText;

      // Set the input value to the note text
      input.value = noteText;

      // Remove the note from the array
      notesArray.splice(i, 1);

      // Render the notes
      renderNotes();
    });

    // Create a span element for the delete icon
    let deleteSpan = document.createElement("span");
    deleteSpan.className = "delete";
    deleteSpan.innerHTML = "<i class='fas fa-trash'></i>";

    // Add an event listener to the delete icon
    deleteSpan.addEventListener("click", function() {
      // Remove the note from the array
      notesArray.splice(i, 1);

      // Render the notes
      renderNotes();
    });

    // Append the icons to the note div
    noteDiv.appendChild(editSpan);
    noteDiv.appendChild(deleteSpan);

    // Append the note div to the notes container
    notes.appendChild(noteDiv);
  }
}