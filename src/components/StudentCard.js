import React from 'react';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <img
        src={student.image || "profile-placeholder.jpg"}
        alt={student.name}
        className="profile-image"
      />
      
      <h3 className='sname'>{student.name}</h3>
      <p className='srole'>{student.role}</p>
      
      <div className= 'text1'>
      <p>
        <span style={{ color: 'grey' }}>Email:</span> 
        <span style={{ color: 'black' }}>{student.email}</span>
    </p>
      <div className="card-buttons">
        <button className="block-button">Block</button>
        <button className="details-button">Details</button>
        </div>
        
      </div>
    </div>
  );
}

export default StudentCard;


