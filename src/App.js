import React, {useState} from 'react';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [newTitle, setNewTitle] = useState('');
  const [notes, setNotes] = useState([{title: 'first note', id: 0}]);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    const addNote = {title: newTitle, id: notes.length};
    setNotes([...notes, addNote])
    setTimeout(() => console.log(notes), 1);
    setNewTitle('');
    e.preventDefault();
  }

  return (
    
    <div className="container">
      <Header />

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
          {(notes).map((note) => <Note title={note.title} key={note.id}/>)}
        </ul>

      </div>      
    </div>
  );
}

export default App;
