import React, {useState} from 'react';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [newTitle, setNewTitle] = useState('');

  const handleChange = (e) => {
    console.log(newTitle.length);
    setNewTitle(e.target.value);
  }

  return (
    
    <div className="container">
      <Header />

      <hr className="mb-5"/>

      <div className='content'> 
        <form className="d-flex mb-2" role="search">
          <input 
            className="form-control me-2"
            placeholder="write note title here"
            value={newTitle}
            onChange={handleChange}
          />
          <button className="btn btn-outline-success"
            type="submit">
            Create
          </button>
        </form>               

        <ul className="list-group">
          <Note title='An item'/>
          <Note title='A second item'/>
          <Note title='A third item'/>          
        </ul>

      </div>      
    </div>
  );
}

export default App;
