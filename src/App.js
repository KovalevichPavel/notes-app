import React, {useState} from 'react';
import Note from './components/Note';

function App() {
  const [newTitle, setNewTitle] = useState('');
  const [notes, setNotes] = useState([{title: 'first note', id: 0}]);
  const [tags, setTags] = useState('');

  function handleChangeTags(e) {
    setTags(e.target.value);
  }

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    if (newTitle.length === 0 || newTitle.length >= 50) {
      e.preventDefault();
      return;
    }

    const addNote = {title: newTitle, id: notes.length};
    setNotes([...notes, addNote]);

    setNewTitle('');
    e.preventDefault();
  }

  return (
    
    <div className="container">
      <div className="header">
        <h1>Note APP</h1>
        <form className="d-flex" role="search">
          <input 
            className="form-control me-2"
            placeholder="Search in tags"
            onChange={handleChangeTags}
        />
        </form>
      </div>

      <hr className="mb-5"/>

      <div className='content'> 
        <form className="d-flex mb-2" onSubmit={handleSubmit}>
          <input 
            className="form-control me-2"
            placeholder="write note title here"
            value={newTitle}
            onChange={handleChange}
          />
          <button 
            className="btn btn-outline-success"
            type="submit">
            Create
          </button>
        </form>               

        <ul className="list-group">
          {(notes).map((note) => {

            return <Note title={note.title} key={note.id} tags={tags}/>
          })}
        </ul>

      </div>      
    </div>
  );
}

export default App;
