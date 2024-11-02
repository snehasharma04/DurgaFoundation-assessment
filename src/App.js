import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import FilterButtons from './components/FilterButtons';
import StudentCard from './components/StudentCard';

import './App.css';

const students = [
  { id: 1, name: 'John', role: 'student 1', email: 'john@microsoft.com', status: 'Active',image: 'https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18655.jpg?uid=R171668176&ga=GA1.1.2101821836.1723918271&semt=ais_hybrid' },
  { id: 2, name: 'Manny', role: 'student 2', email: 'manny@microsoft.com', status: 'Inactive' ,image: 'https://img.freepik.com/free-photo/close-up-portrait-young-guy-with-curly-hair_176532-8156.jpg?t=st=1730492565~exp=1730496165~hmac=5ba255c82aff4b9a48df6ab2292ae84d14ce3901f35bcadd61db4e268cb6fd47&w=996' },
  { id: 3, name: 'Hailey', role: 'student 3', email: 'hailey@microsoft.com', status: 'Active', image:'https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?t=st=1730492625~exp=1730496225~hmac=5acf8940447fda14bba52837635e302f9142e48aa8d858860c5ed415dfd11b35&w=740' },
  { id: 4, name: 'Alex ', role: 'student 4', email: 'alex@microsoft.com', status: 'Inactive',image:'https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg?t=st=1730492736~exp=1730496336~hmac=bd1303b836e6d1676f356f17d7c8267a4a268d682620b47466c117f074c3bfd5&w=740' },
  { id: 5, name: 'Sam ', role: 'student 5', email: 'sam@microsoft.com', status: 'Active',image: 'https://img.freepik.com/free-photo/smiling-tourist-with-camera_23-2147827985.jpg?uid=R171668176&ga=GA1.1.2101821836.1723918271&semt=ais_hybrid' },
  { id: 6, name: 'Bobby ', role: 'student 6', email: 'bob@microsoft.com', status: 'Inactive', image: 'https://img.freepik.com/premium-photo/graduation-ceremony-photo-young-asian-girl_1223255-55037.jpg?uid=R171668176&ga=GA1.1.2101821836.1723918271&semt=ais_hybrid' },
];

function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || student.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="card">
   
      <div className="header">
        <SearchBar value={search} onChange={handleSearch} />
        <div className='profile-header'>
        <img src="https://img.freepik.com/premium-photo/graduation-ceremony-photo-young-asian-girl_1223255-55037.jpg?uid=R171668176&ga=GA1.1.2101821836.1723918271&semt=ais_hybrid" alt="Profile Picture" className="profile-picture" />
        <span className="profile-name">Bobby</span>
        </div>
        <p className="student-header"><b> Students </b></p> 
      </div>
     
      <FilterButtons filter={filter} onChange={handleFilterChange} />
      <div className="card-container">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
 
  </div>
  );
}

export default App;
