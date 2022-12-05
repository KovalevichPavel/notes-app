import react from 'react';

export default function Header() {
    return (
      <div className="header">
        <h1>Note APP</h1>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search in tags"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    )
}