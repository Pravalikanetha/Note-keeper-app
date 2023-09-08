import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <div className="container">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            className="title"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note...."
            rows="3"
            className="note"
          />
          <button className="button" onClick={submitNote}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateArea;
